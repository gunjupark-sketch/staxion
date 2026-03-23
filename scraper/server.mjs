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

  const searchAddress = fullAddress || address;

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

    // 2. 위치 설정 — 좌표가 있으면 좌표로 직접 이동, 없으면 주소 검색
    if (lat && lng) {
      console.log(`  2. 좌표 기반 위치 설정: ${lat}, ${lng}`);
      await gis.evaluate(({ lat, lng }) => {
        const latLng = new kakao.maps.LatLng(lat, lng);
        map.setCenter(latLng);
        map.setLevel(4); // 동네 수준 줌
        // 마커 클릭 이벤트 시뮬레이션 — 지도 중심에 클릭
        kakao.maps.event.trigger(map, "click", {
          latLng: latLng,
          point: map.getProjection().pointFromCoords(latLng),
        });
      }, { lat, lng });
      await sleep(3000);

      // 지도 클릭으로 위치가 안 잡히면 주소 검색 폴백
      const hasLocation = await gis.evaluate(() => {
        // 분석 위치가 설정되었는지 확인 (분석하기 버튼 상태 등)
        const addr = document.querySelector("#addressTxt, .address-text, [class*='addr']");
        return addr && addr.innerText?.length > 2;
      }).catch(() => false);

      if (!hasLocation) {
        console.log("  좌표 클릭으로 위치 미설정, 주소 검색 폴백...");
        await searchByAddress(frame, gis, address);
      } else {
        console.log("  좌표 기반 위치 설정 완료");
      }
    } else {
      console.log(`  2. 주소 검색 (좌표 없음): ${address}`);
      await searchByAddress(frame, gis, address);
    }

    // 2.5. 반경 설정
    console.log(`  2.5. 반경 설정: ${radius}m`);
    await gis.evaluate((r) => {
      // 소상공인365 반경 관련 전역 변수 설정
      if (typeof window.radius !== "undefined") window.radius = r;
      if (typeof window.searchRadius !== "undefined") window.searchRadius = r;
      // 반경 select/input 요소 찾아서 설정
      document.querySelectorAll("select").forEach((sel) => {
        for (const opt of sel.options) {
          // 반경 값 매칭 (500, 1000, 1500, 2000)
          if (opt.value === String(r) || opt.text?.includes(String(r / 1000))) {
            sel.value = opt.value;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      });
      // 반경 라디오/버튼 찾기
      document.querySelectorAll("input[type='radio'], button, label").forEach((el) => {
        const text = el.innerText?.trim() || el.value || "";
        const radiusKm = r / 1000;
        if (
          text === `${r}m` || text === `${radiusKm}km` ||
          text === `${r}` || text === `${radiusKm}` ||
          (r === 500 && text === "500m") ||
          (r === 1000 && (text === "1km" || text === "1,000m")) ||
          (r === 1500 && (text === "1.5km" || text === "1,500m")) ||
          (r === 2000 && (text === "2km" || text === "2,000m"))
        ) {
          el.click();
        }
      });
    }, radius);
    await sleep(1000);

    // 3. 업종 선택: 보건의료 → 의원 → 치과의원
    console.log("  3. 업종 선택...");

    // 대분류: 보건의료 (select나 탭이면 값 설정 시도)
    await gis.evaluate(() => {
      // select 방식
      const selects = document.querySelectorAll("select");
      for (const sel of selects) {
        for (const opt of sel.options) {
          if (opt.text?.includes("보건의료") || opt.value?.includes("Q")) {
            sel.value = opt.value;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
            return;
          }
        }
      }
      // 버튼/탭 방식
      document.querySelectorAll("button, div, span, a, li").forEach((el) => {
        const text = el.innerText?.trim();
        if (text === "보건의료" && el.offsetParent) el.click();
      });
    });
    await sleep(2000);

    // 중분류: 의원
    await gis.evaluate(() => {
      const selects = document.querySelectorAll("select");
      for (const sel of selects) {
        for (const opt of sel.options) {
          if (opt.text?.trim() === "의원") {
            sel.value = opt.value;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
            return;
          }
        }
      }
      document.querySelectorAll("div, li, a, button, span, p").forEach((el) => {
        if (el.innerText?.trim() === "의원" && el.offsetParent) el.click();
      });
    });
    await sleep(2000);

    // 소분류: 치과의원
    await gis.evaluate(() => {
      const selects = document.querySelectorAll("select");
      for (const sel of selects) {
        for (const opt of sel.options) {
          if (opt.text?.includes("치과의원") || opt.text?.includes("치과 의원")) {
            sel.value = opt.value;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
            return;
          }
        }
      }
      document.querySelectorAll("div, li, a, button, span, p, label").forEach((el) => {
        const text = el.innerText?.trim();
        if ((text === "치과의원" || text === "치과 의원") && el.offsetParent) el.click();
      });
    });
    await sleep(2000);

    // 업종코드 확인 — undefined면 강제 설정
    let tpbiz = await gis.evaluate(() => window.tpbizCode).catch(() => null);
    console.log(`  업종코드 (선택 후): ${tpbiz}`);

    if (!tpbiz) {
      console.log("  ⚠️ 업종코드 undefined → 강제 설정: Q10901 (치과의원)");
      await gis.evaluate(() => {
        window.tpbizCode = "Q10901";
        // 숨겨진 input에도 설정
        const hiddenInputs = document.querySelectorAll("input[type='hidden']");
        hiddenInputs.forEach((inp) => {
          if (inp.name?.toLowerCase().includes("tpbiz") || inp.id?.toLowerCase().includes("tpbiz")) {
            inp.value = "Q10901";
          }
        });
      });
      tpbiz = await gis.evaluate(() => window.tpbizCode).catch(() => null);
      console.log(`  업종코드 (강제 설정 후): ${tpbiz}`);
    }

    // 4. 네트워크 모니터링 설정
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

/**
 * 주소 검색 방식 (좌표 없을 때 폴백)
 */
async function searchByAddress(frame, gis, address) {
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

  // 검색 결과에서 가장 일치하는 항목 클릭
  const resultCount = await gis.evaluate((searchAddr) => {
    const items = Array.from(
      document.querySelectorAll("li, .search-result-item, [class*='result'] li")
    );
    const visible = items.filter(
      (i) => i.offsetParent && i.innerText?.length > 0 && i.innerText?.length < 200
    );
    if (visible.length === 0) return 0;

    const keywords = searchAddr.split(/\s+/).filter(k => k.length > 1);
    let bestMatch = visible[0];
    let bestScore = 0;

    for (const item of visible) {
      const text = item.innerText || "";
      let score = 0;
      for (const kw of keywords) {
        if (text.includes(kw)) score++;
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }

    const clickable = bestMatch.querySelector("a, button, span") || bestMatch;
    clickable.click();
    return visible.length;
  }, address);
  console.log(`  검색결과 ${resultCount}개, 최적 매칭 클릭`);
  await sleep(5000);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
