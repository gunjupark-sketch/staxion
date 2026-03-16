import { readFileSync, writeFileSync, existsSync } from "fs";
import XLSX from "xlsx";

// Load all crawl files
const files = [
  "crawl-medibrand-dental.json",
  "crawl-medibrand-part2.json",
  "crawl-medibrand-part1.json",
];

let allProducts = [];

for (const f of files) {
  if (existsSync(f)) {
    const data = JSON.parse(readFileSync(f, "utf8"));
    const items = Array.isArray(data) ? data : [];
    console.log(`${f}: ${items.length}개`);
    allProducts.push(...items);
  } else {
    console.log(`${f}: 파일 없음 (스킵)`);
  }
}

console.log(`\n총 상품 수: ${allProducts.length}개`);

// Sheet 1: 상품 목록 (1행 1상품)
const summaryRows = allProducts.map((p, i) => ({
  "No": i + 1,
  "카테고리": p.category || "",
  "서브카테고리": p.subcategory || "",
  "상품명": p.name || "",
  "기본가격": p.price || 0,
  "옵션수": p.options ? p.options.length : 0,
  "설명": (p.description || "").slice(0, 200),
  "이미지URL": p.imageUrl || "",
  "상품URL": p.sourceUrl || p.url || "",
}));

// Sheet 2: 옵션 상세 (1행 1옵션)
const optionRows = [];
let optIdx = 0;
for (const p of allProducts) {
  if (p.options && p.options.length > 0) {
    for (const opt of p.options) {
      optIdx++;
      optionRows.push({
        "No": optIdx,
        "카테고리": p.category || "",
        "상품명": p.name || "",
        "기본가격": p.price || 0,
        "옵션명": opt.name || "",
        "옵션가격": opt.price || "",
        "상품URL": p.sourceUrl || p.url || "",
      });
    }
  }
}

// Sheet 3: 카테고리별 집계
const catMap = {};
for (const p of allProducts) {
  const cat = p.category || "미분류";
  if (!catMap[cat]) catMap[cat] = { count: 0, minPrice: Infinity, maxPrice: 0, prices: [] };
  catMap[cat].count++;
  const price = typeof p.price === "number" ? p.price : parseInt(String(p.price).replace(/[^0-9]/g, "")) || 0;
  if (price > 0) {
    catMap[cat].prices.push(price);
    catMap[cat].minPrice = Math.min(catMap[cat].minPrice, price);
    catMap[cat].maxPrice = Math.max(catMap[cat].maxPrice, price);
  }
}

const catRows = Object.entries(catMap).map(([cat, info]) => ({
  "카테고리": cat,
  "상품수": info.count,
  "최저가": info.minPrice === Infinity ? "-" : info.minPrice.toLocaleString(),
  "최고가": info.maxPrice === 0 ? "-" : info.maxPrice.toLocaleString(),
  "평균가": info.prices.length > 0
    ? Math.round(info.prices.reduce((a, b) => a + b, 0) / info.prices.length).toLocaleString()
    : "-",
}));

// Create workbook
const wb = XLSX.utils.book_new();

const ws1 = XLSX.utils.json_to_sheet(summaryRows);
// Set column widths
ws1["!cols"] = [
  { wch: 5 },   // No
  { wch: 18 },  // 카테고리
  { wch: 18 },  // 서브카테고리
  { wch: 45 },  // 상품명
  { wch: 12 },  // 기본가격
  { wch: 8 },   // 옵션수
  { wch: 50 },  // 설명
  { wch: 30 },  // 이미지URL
  { wch: 40 },  // 상품URL
];
XLSX.utils.book_append_sheet(wb, ws1, "상품목록");

const ws2 = XLSX.utils.json_to_sheet(optionRows);
ws2["!cols"] = [
  { wch: 5 },   // No
  { wch: 18 },  // 카테고리
  { wch: 45 },  // 상품명
  { wch: 12 },  // 기본가격
  { wch: 35 },  // 옵션명
  { wch: 15 },  // 옵션가격
  { wch: 40 },  // 상품URL
];
XLSX.utils.book_append_sheet(wb, ws2, "옵션상세");

const ws3 = XLSX.utils.json_to_sheet(catRows);
ws3["!cols"] = [
  { wch: 20 },  // 카테고리
  { wch: 8 },   // 상품수
  { wch: 12 },  // 최저가
  { wch: 12 },  // 최고가
  { wch: 12 },  // 평균가
];
XLSX.utils.book_append_sheet(wb, ws3, "카테고리집계");

// Save
const outPath = "C:/Users/LENOVO/Desktop/메디브랜드_상품_전체.xlsx";
XLSX.writeFile(wb, outPath);
console.log(`\n엑셀 저장 완료: ${outPath}`);
console.log(`  - 상품목록: ${summaryRows.length}행`);
console.log(`  - 옵션상세: ${optionRows.length}행`);
console.log(`  - 카테고리집계: ${catRows.length}행`);
