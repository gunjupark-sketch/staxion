/**
 * 스크래핑 서버
 * 소상공인365 상세분석 자동화 → sang_gwon HTML 수집 → 콜백
 *
 * 실행: node scraper/server.mjs
 * 포트: 3100
 */
import { chromium } from "playwright";
import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3100;
const INTENTIONAL_DELAY = 60_000; // 60초 의도적 딜레이

// 분석 큐 (동시 실행 방지)
let isProcessing = false;
const queue = [];

app.post("/analyze", async (req, res) => {
  const { reportId, address, fullAddress, lat, lng, radius, callbackUrl } = req.body;

  if (!reportId || !address || !callbackUrl) {
    return res.status(400).json({ error: "reportId, address, callbackUrl 필수" });
  }

  // 도로명 주소가 가장 정확 — fullAddress(시도 시군구 동)는 세분화 행정동 누락 문제
  const searchAddress = address;

  // 큐에 추가
  queue.push({ reportId, address: searchAddress, lat, lng, radius: radius || 1000, callbackUrl, _startTime: Date.now() });
  res.json({ queued: true, position: queue.length });

  // 처리 시작
  if (!isProcessing) processQueue();
});

app.get("/health", (_, res) => res.json({ status: "ok", queue: queue.length, processing: isProcessing }));

app.listen(PORT, () => {
  console.log(`🔧 스크래핑 서버 실행 중: http://localhost:${PORT}`);
  console.log(`   POST /analyze { reportId, address, lat, lng, callbackUrl }`);
});

async function processQueue() {
  if (isProcessing || queue.length === 0) return;
  isProcessing = true;

  while (queue.length > 0) {
    const job = queue.shift();
    console.log(`\n━━━ 분석 시작: ${job.address} (${job.reportId}) ━━━`);
    console.log(`  좌표: lat=${job.lat}, lng=${job.lng}, 반경: ${job.radius}m`);

    try {
      // 상태 업데이트: processing
      await sendCallback(job.callbackUrl, job.reportId, { status: "processing" });

      const htmlMap = await scrape(job.address, job.lat, job.lng, job.radius);

      // 의도적 딜레이 (분석 느낌)
      const elapsed = Date.now() - job._startTime;
      if (elapsed < INTENTIONAL_DELAY) {
        const remaining = INTENTIONAL_DELAY - elapsed;
        console.log(`  ⏳ ${Math.round(remaining / 1000)}초 추가 대기 (총 60초 맞추기)`);
        await sleep(remaining);
      }

      // 콜백
      await sendCallback(job.callbackUrl, job.reportId, {
        sang_gwon_html: htmlMap,
      });
      console.log(`  ✅ 완료: ${job.address}`);
    } catch (err) {
      console.error(`  ❌ 실패: ${err.message}`);
      await sendCallback(job.callbackUrl, job.reportId, {
        error: err.message,
      });
    }
  }

  isProcessing = false;
}

async function sendCallback(callbackUrl, reportId, data) {
  try {
    const processKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
    await fetch(callbackUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-process-key": processKey,
      },
      body: JSON.stringify({ reportId, ...data }),
    });
  } catch (e) {
    console.error("  콜백 실패:", e.message);
  }
}

/**
 * 소상공인365 스크래핑 메인
 * 좌표 기반 위치 설정 → 업종 선택 → 분석 → sang_gwon HTML 수집
 */
async function scrape(address, lat, lng, radius = 1000) {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const ctx = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    geolocation: { latitude: lat || 37.4980863, longitude: lng || 127.0276012 },
    permissions: ["geolocation"],
  });

  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => false });
  });

  const page = await ctx.newPage();
  page.on("dialog", async (d) => await d.dismiss());

  const sgData = {};

  try {
    // 1. 소상공인365 → 상세분석
    console.log("  1. 상세분석 진입...");
    await page.goto("https://bigdata.sbiz.or.kr/", {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    await sleep(2000);

    await page.evaluate(() => {
      document.querySelectorAll("a").forEach((a) => {
        if (a.innerText?.includes("상세분석")) a.click();
      });
    });
    await sleep(10000);

    // iframe 찾기
    const gis = page.frames().find((f) => f.url().includes("/gis/"));
    if (!gis) throw new Error("GIS iframe 없음");

    // map 대기
    for (let i = 0; i < 20; i++) {
      const ready = await gis
        .evaluate(() => typeof map !== "undefined" && typeof kakao !== "undefined")
        .catch(() => false);
      if (ready) break;
      await sleep(1000);
    }
    console.log("  map 준비됨");
    await sleep(3000);

    // 위치 허용 팝업 닫기
    await gis.evaluate(() => {
      document.querySelectorAll("button").forEach((b) => {
        if (b.innerText?.trim() === "확인" && b.offsetParent) b.click();
      });
    });
    await sleep(1000);

    const iframeEl = await page.$("iframe#iframe, iframe[src*='gis']");
    const frame = iframeEl ? await iframeEl.contentFrame() : null;
    if (!frame) throw new Error("iframe contentFrame 접근 실패");

    // 2. 주소 검색 + 결과 첫 번째 항목 클릭
    console.log(`  2. 주소 검색: ${address}`);
    const searchInput =
      (await frame.$("input#searchAddr")) ||
      (await frame.$("input[placeholder*='주소']")) ||
      (await frame.$("input[placeholder*='검색']")) ||
      (await frame.$("input[placeholder*='위치']")) ||
      (await frame.$(".searchArea input")) ||
      (await frame.$("input[type='text']"));

    if (!searchInput) throw new Error("검색 input 못 찾음");

    await searchInput.click({ clickCount: 3 });
    await sleep(300);
    await searchInput.fill("");
    await searchInput.type(address, { delay: 80 });
    await sleep(500);
    await searchInput.press("Enter");
    console.log("  검색 실행");
    await sleep(5000);

    // 검색 결과 첫 번째 항목 클릭 (가장 정확한 매칭)
    const resultInfo = await gis.evaluate(() => {
      const items = Array.from(
        document.querySelectorAll("li, .search-result-item, [class*='result'] li, [class*='list'] li")
      );
      const visible = items.filter(
        (i) => i.offsetParent && i.innerText?.length > 5 && i.innerText?.length < 200
      );
      if (visible.length === 0) return { count: 0, clicked: "" };

      // 첫 번째 결과 클릭 (가장 정확한 주소)
      const first = visible[0];
      const clickable = first.querySelector("a, button, span") || first;
      clickable.click();
      return { count: visible.length, clicked: first.innerText?.trim()?.substring(0, 50) };
    });
    console.log(`  검색결과 ${resultInfo.count}개, 클릭: "${resultInfo.clicked}"`);
    await sleep(5000);

    // 3. 업종 선택 — UI 조작 안정적으로: 건드리지 않고 강제 설정
    // (소상공인365 UI 이벤트 핸들러가 DOM .click(), locator.click(), 타이핑 모두 거부)
    // 데이터 수집 후 네트워크 요청 구조를 분석해서 직접 API 호출로 전환 예정
    console.log("  3. 업종 강제 설정: Q10901 (치과의원)");
    await gis.evaluate(() => {
      const cd = document.getElementById("upjong3Cd");
      if (cd) cd.value = "Q10901";
      const sel = document.getElementById("selectedUpjong");
      if (sel) sel.value = "치과의원";
      window.tpbizCode = "Q10901";
    }).catch(() => {});
    await sleep(1000);

    // 4. 네트워크 모니터링 설정 — URL+파라미터도 로그
    page.on("request", (req) => {
      const url = req.url();
      if (url.includes("sang_gwon") || url.includes("sgAnalysis") || url.includes("analysis")) {
        console.log(`  📤 REQUEST: ${req.method()} ${url}`);
        if (req.method() === "POST") {
          console.log(`     POST body: ${req.postData()?.substring(0, 500)}`);
        }
      }
    });
    page.on("response", async (resp) => {
      const url = resp.url();
      const sgMatch = url.match(/sang_gwon(\d+)\.sg/);
      if (sgMatch && resp.status() === 200) {
        try {
          const text = await resp.text();
          sgData[`sg${sgMatch[1]}`] = text;
          console.log(`  📥 sg${sgMatch[1]} 수집 (${text.length}B)`);
        } catch {}
      }
    });

    // 5. 분석하기 클릭
    console.log("  4. 분석하기...");
    const analysisBtn = await frame.$("#analysisBtn");
    if (!analysisBtn) throw new Error("분석하기 버튼 못 찾음");

    const disabled = await gis
      .evaluate(() => document.querySelector("#analysisBtn")?.disabled)
      .catch(() => true);
    if (disabled) {
      await gis.evaluate(() => {
        const btn = document.querySelector("#analysisBtn");
        if (btn) btn.disabled = false;
      });
      console.log("  버튼 강제 활성화");
    }

    await analysisBtn.click();
    console.log("  분석하기 클릭!");

    // 리포트 로드 대기 (최대 30초, 데이터 수집 감지)
    for (let i = 0; i < 30; i++) {
      await sleep(1000);
      const count = Object.keys(sgData).length;
      if (count >= 6) {
        console.log(`  ${i + 1}초 만에 6개 수집 완료`);
        break;
      }
    }

    // 추가 대기 (sg7 등 늦게 오는 데이터)
    await sleep(5000);

    // 수집 확인
    const collected = Object.keys(sgData);
    console.log(`  수집된 sang_gwon: ${collected.join(", ")} (${collected.length}개)`);

    if (collected.length === 0) {
      throw new Error("sang_gwon 데이터 수집 실패 — 0개");
    }
  } finally {
    await browser.close();
  }

  return sgData;
}


function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
