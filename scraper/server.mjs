/**
 * 로컬 스크래핑 서버
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
  const { reportId, address, fullAddress, callbackUrl } = req.body;

  if (!reportId || !address || !callbackUrl) {
    return res.status(400).json({ error: "reportId, address, callbackUrl 필수" });
  }

  // fullAddress(시도 시군구 동)가 있으면 우선 사용, 없으면 원본 address
  const searchAddress = fullAddress || address;

  // 큐에 추가
  queue.push({ reportId, address: searchAddress, callbackUrl });
  res.json({ queued: true, position: queue.length });

  // 처리 시작
  if (!isProcessing) processQueue();
});

app.get("/health", (_, res) => res.json({ status: "ok", queue: queue.length, processing: isProcessing }));

app.listen(PORT, () => {
  console.log(`🔧 스크래핑 서버 실행 중: http://localhost:${PORT}`);
  console.log(`   POST /analyze { reportId, address, callbackUrl }`);
});

async function processQueue() {
  if (isProcessing || queue.length === 0) return;
  isProcessing = true;

  while (queue.length > 0) {
    const job = queue.shift();
    console.log(`\n━━━ 분석 시작: ${job.address} (${job.reportId}) ━━━`);

    try {
      // 상태 업데이트: processing
      await sendCallback(job.callbackUrl, job.reportId, { status: "processing" });

      const htmlMap = await scrape(job.address);

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
 * 주소 입력 → 위치 선택 → 보건의료 → 의원 → 치과의원 → 분석하기 → sang_gwon HTML 수집
 */
async function scrape(address) {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const ctx = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    geolocation: { latitude: 37.4980863, longitude: 127.0276012 },
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

    // 2. 주소 검색
    console.log(`  2. 주소 검색: ${address}`);
    const iframeEl = await page.$("iframe#iframe, iframe[src*='gis']");
    const frame = iframeEl ? await iframeEl.contentFrame() : null;
    if (!frame) throw new Error("iframe contentFrame 접근 실패");

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

    // 검색 결과에서 주소와 가장 일치하는 항목 클릭
    const resultCount = await gis.evaluate((searchAddr) => {
      const items = Array.from(
        document.querySelectorAll("li, .search-result-item, [class*='result'] li")
      );
      const visible = items.filter(
        (i) => i.offsetParent && i.innerText?.length > 0 && i.innerText?.length < 200
      );
      if (visible.length === 0) return 0;

      // 주소 키워드로 가장 일치하는 결과 찾기
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

    // 3. 업종 선택: 보건의료 → 의원 → 치과의원
    console.log("  3. 업종 선택...");

    // 보건의료
    await gis.evaluate(() => {
      document.querySelectorAll("button, div, span").forEach((el) => {
        if (el.innerText?.trim() === "보건의료" && el.offsetParent) el.click();
      });
    });
    await sleep(2000);

    // 의원
    await gis.evaluate(() => {
      document.querySelectorAll("div, li, a, button, span, p").forEach((el) => {
        if (el.innerText?.trim() === "의원" && el.offsetParent) el.click();
      });
    });
    await sleep(2000);

    // 치과의원
    await gis.evaluate(() => {
      document.querySelectorAll("div, li, a, button, span, p, label").forEach((el) => {
        const text = el.innerText?.trim();
        if ((text === "치과의원" || text === "치과 의원") && el.offsetParent) el.click();
      });
    });
    await sleep(2000);

    const tpbiz = await gis.evaluate(() => window.tpbizCode).catch(() => null);
    console.log(`  업종코드: ${tpbiz}`);

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
        document.querySelector("#analysisBtn").disabled = false;
      });
      console.log("  버튼 강제 활성화");
    }

    await analysisBtn.click();
    console.log("  분석하기 클릭!");

    // 리포트 로드 대기 (15초)
    await sleep(15000);

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
