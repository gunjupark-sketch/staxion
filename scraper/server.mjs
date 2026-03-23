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

    // 2. 위치 설정 — 주소 검색 (도로명 주소가 가장 정확)
    console.log(`  2. 주소 검색: ${address}`);
    await searchByAddress(frame, gis, address);

    // 좌표가 있으면 지도 중심 이동 (보정)
    if (lat && lng) {
      console.log(`  2.1. 좌표로 지도 중심 보정: ${lat}, ${lng}`);
      await gis.evaluate(({ lat, lng }) => {
        if (typeof kakao !== "undefined" && typeof map !== "undefined") {
          map.setCenter(new kakao.maps.LatLng(lat, lng));
          map.setLevel(4);
        }
      }, { lat, lng });
      await sleep(1000);
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

    // 디버깅: 업종 관련 DOM 구조 파악
    const domInfo = await gis.evaluate(() => {
      const info = { selects: [], buttons: [], inputs: [], globals: [] };

      // 모든 select 요소와 옵션
      document.querySelectorAll("select").forEach((sel, i) => {
        const opts = Array.from(sel.options).map(o => `${o.value}|${o.text?.trim()}`);
        info.selects.push({ id: sel.id, name: sel.name, class: sel.className?.substring(0, 50), optCount: opts.length, opts: opts.slice(0, 10) });
      });

      // 업종 관련 텍스트 가진 클릭 가능 요소
      const keywords = ["보건", "의원", "치과", "업종"];
      document.querySelectorAll("button, a, li, div, span, label, input").forEach((el) => {
        const text = (el.innerText || el.textContent || "").trim().substring(0, 30);
        if (text && keywords.some(k => text.includes(k)) && el.offsetParent) {
          info.buttons.push({ tag: el.tagName, text, id: el.id, class: el.className?.substring(0, 40) });
        }
      });

      // hidden inputs
      document.querySelectorAll("input[type='hidden'], input[name*='tpbiz'], input[name*='upjong'], input[name*='code']").forEach((inp) => {
        info.inputs.push({ name: inp.name, id: inp.id, value: inp.value });
      });

      // 전역 변수
      for (const k of ["tpbizCode", "tpbizNm", "upjongCd", "upjongNm", "indCd", "selTpbizCd"]) {
        if (window[k] !== undefined) info.globals.push({ key: k, value: String(window[k]) });
      }

      return info;
    }).catch(() => ({ error: "DOM 조회 실패" }));
    console.log("  📋 업종 DOM 구조:", JSON.stringify(domInfo, null, 2));

    // select 기반 업종 선택 시도
    const selectResult = await gis.evaluate(() => {
      const results = [];
      const selects = document.querySelectorAll("select");

      // 대분류에서 "보건의료" 또는 "Q"로 시작하는 값 찾기
      for (const sel of selects) {
        for (const opt of sel.options) {
          if (opt.text?.includes("보건") || opt.value?.startsWith("Q")) {
            sel.value = opt.value;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
            results.push(`대분류 select: ${sel.id||sel.name} → ${opt.value}|${opt.text}`);
            break;
          }
        }
      }
      return results;
    }).catch(() => []);
    console.log("  select 대분류:", selectResult);
    await sleep(2000);

    // 텍스트 매칭으로 보건의료 클릭
    await gis.evaluate(() => {
      document.querySelectorAll("button, div, span, a, li, label, dt, dd").forEach((el) => {
        const text = el.innerText?.trim();
        if (text === "보건의료" && el.offsetParent) {
          el.click();
          console.log("clicked 보건의료:", el.tagName);
        }
      });
    });
    await sleep(2000);

    // 의원
    await gis.evaluate(() => {
      // select 방식
      document.querySelectorAll("select").forEach((sel) => {
        for (const opt of sel.options) {
          if (opt.text?.trim() === "의원") {
            sel.value = opt.value;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
            return;
          }
        }
      });
      // 텍스트 매칭
      document.querySelectorAll("button, div, span, a, li, label, dt, dd").forEach((el) => {
        const text = el.innerText?.trim();
        if (text === "의원" && el.offsetParent && el.children.length === 0) el.click();
      });
    });
    await sleep(2000);

    // 치과의원
    await gis.evaluate(() => {
      document.querySelectorAll("select").forEach((sel) => {
        for (const opt of sel.options) {
          if (opt.text?.includes("치과의원") || opt.text?.includes("치과 의원")) {
            sel.value = opt.value;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
            return;
          }
        }
      });
      document.querySelectorAll("button, div, span, a, li, label, dt, dd").forEach((el) => {
        const text = el.innerText?.trim();
        if ((text === "치과의원" || text === "치과 의원") && el.offsetParent && el.children.length === 0) el.click();
      });
    });
    await sleep(2000);

    // 업종코드 확인
    let tpbiz = await gis.evaluate(() => {
      const candidates = [
        window.tpbizCode, window.tpbizCd, window.selTpbizCd, window.upjongCd,
      ];
      // hidden input 값도 확인
      document.querySelectorAll("input[type='hidden']").forEach((inp) => {
        if (inp.name?.includes("tpbiz") || inp.name?.includes("upjong") || inp.id?.includes("tpbiz")) {
          candidates.push(inp.value);
        }
      });
      return candidates.find(v => v && v !== "undefined" && v !== "") || null;
    }).catch(() => null);
    console.log(`  업종코드 (선택 후): ${tpbiz}`);

    if (!tpbiz) {
      console.log("  ⚠️ 업종코드 undefined → 강제 설정: Q10901 (치과의원)");
      await gis.evaluate(() => {
        // 가능한 모든 전역 변수에 설정
        window.tpbizCode = "Q10901";
        window.tpbizCd = "Q10901";
        window.selTpbizCd = "Q10901";
        window.upjongCd = "Q10901";
        // hidden inputs
        document.querySelectorAll("input[type='hidden']").forEach((inp) => {
          if (inp.name?.includes("tpbiz") || inp.name?.includes("upjong") || inp.id?.includes("tpbiz")) {
            inp.value = "Q10901";
          }
        });
      });
      tpbiz = "Q10901 (강제)";
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
