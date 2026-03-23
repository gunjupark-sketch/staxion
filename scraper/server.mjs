/**
 * 스크래핑 서버 — 36차 성공 코드 기반 복원 + 네트워크 로그
 */
import { chromium } from "playwright";
import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3100;
const INTENTIONAL_DELAY = 60_000;

let isProcessing = false;
const queue = [];

app.post("/analyze", async (req, res) => {
  const { reportId, address, fullAddress, lat, lng, radius, callbackUrl } = req.body;
  if (!reportId || !address || !callbackUrl) {
    return res.status(400).json({ error: "reportId, address, callbackUrl 필수" });
  }
  // 도로명 주소 우선 (fullAddress는 "시도 시군구 동"이라 세분화 누락)
  const searchAddress = address;
  queue.push({ reportId, address: searchAddress, lat, lng, radius: radius || 1000, callbackUrl, _startTime: Date.now() });
  res.json({ queued: true, position: queue.length });
  if (!isProcessing) processQueue();
});

app.get("/health", (_, res) => res.json({ status: "ok", queue: queue.length, processing: isProcessing }));

app.listen(PORT, () => {
  console.log(`🔧 스크래핑 서버 실행 중: http://localhost:${PORT}`);
});

async function processQueue() {
  if (isProcessing || queue.length === 0) return;
  isProcessing = true;
  while (queue.length > 0) {
    const job = queue.shift();
    console.log(`\n━━━ 분석 시작: ${job.address} (${job.reportId}) ━━━`);
    try {
      await sendCallback(job.callbackUrl, job.reportId, { status: "processing" });
      const htmlMap = await scrape(job.address, job.lat, job.lng, job.radius);
      const elapsed = Date.now() - job._startTime;
      if (elapsed < INTENTIONAL_DELAY) {
        const remaining = INTENTIONAL_DELAY - elapsed;
        console.log(`  ⏳ ${Math.round(remaining / 1000)}초 추가 대기`);
        await sleep(remaining);
      }
      await sendCallback(job.callbackUrl, job.reportId, { sang_gwon_html: htmlMap });
      console.log(`  ✅ 완료: ${job.address}`);
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
  page.on("dialog", async (d) => {
    console.log(`  💬 dialog: ${d.message()?.substring(0, 100)}`);
    await d.dismiss();
  });

  const sgData = {};

  try {
    // 1. 소상공인365 → 상세분석
    console.log("  1. 상세분석 진입...");
    await page.goto("https://bigdata.sbiz.or.kr/", { waitUntil: "networkidle", timeout: 30000 });
    await sleep(2000);
    await page.evaluate(() => {
      document.querySelectorAll("a").forEach((a) => {
        if (a.innerText?.includes("상세분석")) a.click();
      });
    });
    await sleep(10000);

    const gis = page.frames().find((f) => f.url().includes("/gis/"));
    if (!gis) throw new Error("GIS iframe 없음");

    for (let i = 0; i < 20; i++) {
      const ready = await gis.evaluate(() => typeof map !== "undefined" && typeof kakao !== "undefined").catch(() => false);
      if (ready) break;
      await sleep(1000);
    }
    console.log("  map 준비됨");
    await sleep(3000);

    // 팝업 닫기
    await gis.evaluate(() => {
      document.querySelectorAll("button").forEach((b) => {
        if (b.innerText?.trim() === "확인" && b.offsetParent) b.click();
      });
    });
    await sleep(1000);

    const iframeEl = await page.$("iframe#iframe, iframe[src*='gis']");
    const frame = iframeEl ? await iframeEl.contentFrame() : null;
    if (!frame) throw new Error("iframe contentFrame 접근 실패");

    // 2. 주소 검색
    console.log(`  2. 주소 검색: ${address}`);
    const searchInput =
      (await frame.$("#searchAddress")) ||
      (await frame.$("#searchAddr")) ||
      (await frame.$("input[placeholder*='주소']")) ||
      (await frame.$("input[placeholder*='검색']")) ||
      (await frame.$("input[placeholder*='위치']")) ||
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

    // 검색 결과 첫 번째 클릭
    const resultInfo = await gis.evaluate(() => {
      const items = Array.from(document.querySelectorAll("li, [class*='result'] li, [class*='list'] li"));
      const visible = items.filter((i) => i.offsetParent && i.innerText?.length > 5 && i.innerText?.length < 200);
      if (visible.length === 0) return { count: 0, clicked: "" };
      const first = visible[0];
      const clickable = first.querySelector("a, button, span") || first;
      clickable.click();
      return { count: visible.length, clicked: first.innerText?.trim()?.substring(0, 60) };
    });
    console.log(`  검색결과 ${resultInfo.count}개, 클릭: "${resultInfo.clicked}"`);
    await sleep(5000);

    // 3. 업종 선택: 보건의료 → 의원 → 치과의원 (evaluate .click())
    console.log("  3. 업종 선택...");
    await gis.evaluate(() => {
      document.querySelectorAll("button, div, span").forEach((el) => {
        if (el.innerText?.trim() === "보건의료" && el.offsetParent) el.click();
      });
    });
    await sleep(2000);
    await gis.evaluate(() => {
      document.querySelectorAll("div, li, a, button, span, p").forEach((el) => {
        if (el.innerText?.trim() === "의원" && el.offsetParent) el.click();
      });
    });
    await sleep(2000);
    await gis.evaluate(() => {
      document.querySelectorAll("div, li, a, button, span, p, label").forEach((el) => {
        const text = el.innerText?.trim();
        if ((text === "치과의원" || text === "치과 의원") && el.offsetParent) el.click();
      });
    });
    await sleep(2000);

    const tpbiz = await gis.evaluate(() => window.tpbizCode).catch(() => null);
    console.log(`  업종코드: ${tpbiz}`);

    // 4. 네트워크 모니터링
    page.on("request", (req) => {
      const url = req.url();
      const type = req.resourceType();
      if (type === "xhr" || type === "fetch" || url.includes("sang_gwon") || url.includes(".sg")) {
        console.log(`  📤 ${req.method()} ${url.substring(0, 200)}`);
        if (req.method() === "POST") console.log(`     body: ${req.postData()?.substring(0, 300)}`);
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

    const disabled = await gis.evaluate(() => document.querySelector("#analysisBtn")?.disabled).catch(() => true);
    if (disabled) {
      await gis.evaluate(() => { const btn = document.querySelector("#analysisBtn"); if (btn) btn.disabled = false; });
      console.log("  버튼 강제 활성화");
    }

    await analysisBtn.click();
    console.log("  분석하기 클릭!");

    // 리포트 로드 대기 (15초 고정 — 36차 성공 방식)
    await sleep(15000);

    // 추가 대기 (sg7 등)
    await sleep(5000);

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

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
