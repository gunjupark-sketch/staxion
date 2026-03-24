/**
 * 네트워크 요청 캡처 스크립트
 * headless: false로 브라우저 열어서 직접 조작 → 모든 XHR/fetch 요청 로그
 *
 * 사용법: node scraper/capture-network.mjs
 * → 브라우저가 열리면 직접 주소 입력 → 업종 선택 → 분석하기 클릭
 * → 콘솔에 모든 네트워크 요청이 찍힘
 * → 결과는 capture-result.json에 저장
 */
import { chromium } from "playwright";
import { writeFileSync } from "fs";

const captured = [];

async function main() {
  const browser = await chromium.launch({
    headless: false,
    channel: "chrome",  // 시스템 Chrome 사용
    slowMo: 100,
  });

  const ctx = await browser.newContext({
    viewport: { width: 1400, height: 900 },
  });

  const page = await ctx.newPage();

  // 모든 네트워크 요청 캡처
  page.on("request", (req) => {
    const url = req.url();
    const type = req.resourceType();

    // XHR/fetch + sang_gwon 관련만
    if (type === "xhr" || type === "fetch" || url.includes("sang_gwon") || url.includes(".sg") || url.includes("anls") || url.includes("report")) {
      const entry = {
        method: req.method(),
        url: url,
        type: type,
        postData: req.postData() || null,
        headers: req.headers(),
        timestamp: new Date().toISOString(),
      };
      captured.push(entry);
      console.log(`📤 ${req.method()} ${url.substring(0, 150)}`);
      if (req.postData()) {
        console.log(`   body: ${req.postData().substring(0, 300)}`);
      }
    }
  });

  page.on("response", async (resp) => {
    const url = resp.url();
    if (url.includes("sang_gwon") || url.includes(".sg?") || url.includes("anls") || url.includes("detail")) {
      try {
        const body = await resp.text();
        console.log(`📥 ${resp.status()} ${url.substring(0, 150)} (${body.length}B)`);

        // 캡처에 응답도 추가
        const existing = captured.find(c => c.url === url);
        if (existing) {
          existing.responseStatus = resp.status();
          existing.responseSize = body.length;
          existing.responsePreview = body.substring(0, 500);
        }
      } catch {}
    }
  });

  page.on("dialog", async (d) => {
    console.log(`💬 Alert: ${d.message()}`);
    await d.dismiss();
  });

  // 소상공인365 열기
  console.log("\n━━━ 소상공인365 상세분석 열기 ━━━");
  console.log("브라우저에서 직접 조작하세요:");
  console.log("1. 주소 입력 → 검색 결과 클릭");
  console.log("2. 보건의료 → 의원 → 치과의원 선택");
  console.log("3. 분석하기 클릭");
  console.log("4. 데이터 로드 완료 후 이 터미널에서 Ctrl+C");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  await page.goto("https://bigdata.sbiz.or.kr/", { waitUntil: "networkidle", timeout: 30000 });

  // 상세분석 자동 클릭
  await page.evaluate(() => {
    document.querySelectorAll("a").forEach((a) => {
      if (a.innerText?.includes("상세분석")) a.click();
    });
  });

  // 사용자가 직접 조작할 때까지 대기 (5분)
  console.log("⏳ 5분간 대기... 브라우저에서 분석 진행 후 결과 확인\n");

  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, 300000); // 5분

    // Ctrl+C로 종료 시 저장
    process.on("SIGINT", () => {
      clearTimeout(timeout);
      resolve();
    });
  });

  // 결과 저장
  console.log(`\n━━━ 캡처 완료: ${captured.length}개 요청 ━━━`);
  writeFileSync("scraper/capture-result.json", JSON.stringify(captured, null, 2));
  console.log("저장: scraper/capture-result.json");

  // 주요 요청 요약
  const sgRequests = captured.filter(c => c.url.includes("sang_gwon") || c.url.includes(".sg?"));
  if (sgRequests.length > 0) {
    console.log(`\n━━━ sang_gwon 요청 ${sgRequests.length}개 ━━━`);
    sgRequests.forEach((r, i) => {
      console.log(`[${i}] ${r.method} ${r.url}`);
      if (r.postData) console.log(`    body: ${r.postData.substring(0, 200)}`);
    });
  }

  await browser.close();
}

main().catch(console.error);
