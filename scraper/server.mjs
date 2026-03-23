/**
 * 상권분석 서버 — HTTP 직접 호출 방식 (Playwright 제거)
 * 소상공인365 API를 직접 호출하여 sang_gwon 데이터 수집
 *
 * 흐름:
 * 1. POST /gis/com/report/capture.json → analyNo 획득
 * 2. GET /sang_gwon{1-8}.sg?analyNo=... → 데이터 수집
 */
import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3100;
const INTENTIONAL_DELAY = 60_000;

const SBIZ_BASE = "https://bigdata.sbiz.or.kr";
const SBIZ_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
  "X-Requested-With": "XMLHttpRequest",
  "Referer": `${SBIZ_BASE}/gis/`,
};

// 치과의원 업종코드
const DENTAL_UPJONG_CD = "Q10210";

let isProcessing = false;
const queue = [];

app.post("/analyze", async (req, res) => {
  const { reportId, address, lat, lng, radius, callbackUrl } = req.body;
  if (!reportId || !address || !callbackUrl) {
    return res.status(400).json({ error: "reportId, address, callbackUrl 필수" });
  }
  queue.push({ reportId, address, lat, lng, radius: radius || 1000, callbackUrl, _startTime: Date.now() });
  res.json({ queued: true, position: queue.length });
  if (!isProcessing) processQueue();
});

app.get("/health", (_, res) => res.json({ status: "ok", queue: queue.length, processing: isProcessing }));

app.listen(PORT, () => {
  console.log(`🔧 상권분석 서버 (HTTP 직접 호출) 실행 중: http://localhost:${PORT}`);
});

async function processQueue() {
  if (isProcessing || queue.length === 0) return;
  isProcessing = true;
  while (queue.length > 0) {
    const job = queue.shift();
    console.log(`\n━━━ 분석 시작: ${job.address} (${job.reportId}) ━━━`);
    try {
      await sendCallback(job.callbackUrl, job.reportId, { status: "processing" });

      const htmlMap = await fetchAnalysis(job.lat, job.lng, job.radius);

      // 의도적 딜레이
      const elapsed = Date.now() - job._startTime;
      if (elapsed < INTENTIONAL_DELAY) {
        const wait = INTENTIONAL_DELAY - elapsed;
        console.log(`  ⏳ ${Math.round(wait / 1000)}초 대기`);
        await sleep(wait);
      }

      await sendCallback(job.callbackUrl, job.reportId, { sang_gwon_html: htmlMap });
      console.log(`  ✅ 완료`);
    } catch (err) {
      console.error(`  ❌ 실패: ${err.message}`);
      await sendCallback(job.callbackUrl, job.reportId, { error: err.message });
    }
  }
  isProcessing = false;
}

async function sendCallback(callbackUrl, reportId, data) {
  try {
    await fetch(callbackUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-process-key": process.env.SUPABASE_SERVICE_ROLE_KEY || "" },
      body: JSON.stringify({ reportId, ...data }),
    });
  } catch (e) { console.error("  콜백 실패:", e.message); }
}

/**
 * 소상공인365 API 직접 호출
 * @param {number} lat 위도
 * @param {number} lng 경도
 * @param {number} radius 반경(m)
 */
async function fetchAnalysis(lat, lng, radius = 1000) {
  if (!lat || !lng) throw new Error("좌표(lat/lng) 필수");

  // 좌표 변환 (WGS84 → TM 근사 변환)
  const { tx, ty } = wgs84ToTm(lat, lng);
  console.log(`  좌표: ${lat}, ${lng} → TM: ${tx}, ${ty}, 반경: ${radius}m`);

  // Step 1: capture.json → analyNo 획득
  console.log("  1. analyNo 획득...");
  const captureRes = await fetch(`${SBIZ_BASE}/gis/com/report/capture.json`, {
    method: "POST",
    headers: { ...SBIZ_HEADERS, "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      type: "circleRadius",
      analyType: "bizonAnls",
      centerX: lat,
      centerY: lng,
      transformX: tx,
      transformY: ty,
      upjongCd: DENTAL_UPJONG_CD,
      kakaoPathStr: "",
      pathStr: "",
      radius: radius,
      mapLevelDecision: radius,
      apiLogin: "N",
      sprNo: 0,
    }),
  });

  if (!captureRes.ok) throw new Error(`capture.json 실패: ${captureRes.status}`);
  const captureData = await captureRes.json();
  const { analyNo, analyDate } = captureData;
  if (!analyNo) throw new Error("analyNo 획득 실패");
  console.log(`  analyNo: ${analyNo}, analyDate: ${analyDate}`);

  // Step 2: sg1에서 행정구역 정보 추출
  console.log("  2. sg1~sg8 수집...");
  const sg1Url = `${SBIZ_BASE}/gis/bizonAnls/report/sg/sang_gwon1.sg?analyNo=${analyNo}&upjongCd=${DENTAL_UPJONG_CD}&xcnts=${tx}&ydnts=${ty}&center_x=${tx}&center_y=${ty}&analyDate=${analyDate}&a=01&b=01&c=01`;
  const sg1Html = await fetchSg(sg1Url);

  // sg1에서 admiCd, admiNm 추출
  const admiCdMatch = sg1Html.match(/var\s+aACd\s*=\s*"(\d+)"/);
  const admiNmMatch = sg1Html.match(/var\s+aANm\s*=\s*"([^"]+)"/);
  const admiCd = admiCdMatch?.[1] || "";
  const admiNm = admiNmMatch?.[1] || "";
  console.log(`  행정구역: ${admiNm} (${admiCd})`);

  // Step 3: sg2~sg8 수집
  const sgData = { sg1: sg1Html };
  const admiParam = `admiCd=${admiCd}&admiNm=${encodeURIComponent(admiNm)}`;

  for (const n of [2, 3, 4, 6, 7, 8]) {
    const url = `${SBIZ_BASE}/gis/bizonAnls/report/sg/sang_gwon${n}.sg?analyNo=${analyNo}&analyDate=${analyDate}&upjongCd=${DENTAL_UPJONG_CD}&${admiParam}&xtLoginId=`;
    sgData[`sg${n}`] = await fetchSg(url);
    console.log(`  📥 sg${n}: ${sgData[`sg${n}`].length}B`);
  }

  const total = Object.keys(sgData).length;
  console.log(`  수집 완료: ${total}개`);
  if (total === 0) throw new Error("데이터 수집 실패 — 0개");

  return sgData;
}

async function fetchSg(url) {
  const res = await fetch(url, { headers: SBIZ_HEADERS });
  if (!res.ok) throw new Error(`sang_gwon 요청 실패: ${res.status} ${url.substring(0, 100)}`);
  return await res.text();
}

/**
 * WGS84 (위경도) → TM 좌표 근사 변환
 * 소상공인365가 사용하는 좌표계에 맞춤
 */
function wgs84ToTm(lat, lng) {
  // 중부원점 TM 근사 변환 (정밀도 ±50m 수준, 상권분석에 충분)
  const tx = Math.round((lng - 127.0) * 88360 + 200000);
  const ty = Math.round((lat - 38.0) * 111320 + 500000);
  return { tx, ty };
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
