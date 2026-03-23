/**
 * 소상공인365 sang_gwon HTML → JSON 파서
 * sg1~sg8 HTML 응답을 파싱하여 구조화된 데이터로 변환
 */
import * as cheerio from "cheerio";

export interface SbizParsedData {
  sg1: SG1Summary;
  sg2: SG2BusinessTrend;
  sg3: SG3SalesAnalysis;
  sg4: SG4PopulationAnalysis;
  sg6: SG6AreaStatus;
  sg7: SG7CustomerProfile;
}

// sg1: 요약 - 업소수, 매출, 분석 메타
export interface SG1Summary {
  analy_no: string;
  region: string;
  industry: string;
  store_count: string;
  store_change_rate: string;
  avg_monthly_sales: string;
  sales_change_rate: string;
  area_store_count: string;
  area_store_change_rate: string;
  area_avg_monthly_sales: string;
  area_sales_change_rate: string;
}

// sg2: 업종분석 - 업소수 추이
export interface SG2BusinessTrend {
  monthly_stores: TableRow[];
}

// sg3: 매출분석
export interface SG3SalesAnalysis {
  monthly_sales: TableRow[];
  monthly_count: TableRow[];
  day_of_week: TableRow[];
  time_of_day: TableRow[];
  gender_age_sales: TableRow[];
}

// sg4: 인구분석
export interface SG4PopulationAnalysis {
  floating_trend: TableRow[];
  floating_gender_age: TableRow[];
  floating_day_of_week: TableRow[];
  floating_time_of_day: TableRow[];
  resident_trend: TableRow[];
  resident_gender_age: TableRow[];
  resident_income: TableRow[];
  worker_trend: TableRow[];
  worker_gender_age: TableRow[];
  worker_income: TableRow[];
}

// sg6: 지역현황
export interface SG6AreaStatus {
  household_trend: TableRow[];
  apartment_status: TableRow[];
  apartment_size: TableRow[];
  facilities: TableRow[];
  schools: TableRow[];
  transit: TableRow[];
}

// sg7: 고객특성
export interface SG7CustomerProfile {
  male_avg_income: string;
  female_avg_income: string;
  analysis_text: string;
  gender_ratio: { name: string; rate: number; count: number }[];
  customer_type: { name: string; rate: number; count: number }[];
  male_lifestyle: { hobby: string; rate: number }[];
  female_lifestyle: { hobby: string; rate: number }[];
}

interface TableRow {
  [key: string]: string;
}

/**
 * 테이블에서 헤더와 데이터를 추출
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseTable($: cheerio.CheerioAPI, table: cheerio.Cheerio<any>): TableRow[] {
  const headers: string[] = [];

  // thead에서 헤더 추출 (마지막 헤더행 기준)
  const headerRows = table.find("thead tr");
  if (headerRows.length > 0) {
    const lastHeaderRow = headerRows.last();
    lastHeaderRow.find("th").each((_, th) => {
      const text = $(th).text().trim().replace(/\s+/g, " ");
      if (text && text !== "선택 영역" && text !== "선") {
        headers.push(text);
      }
    });
  }

  // thead가 없으면 첫 번째 tr의 th에서
  if (headers.length === 0) {
    table.find("tr:first-child th").each((_, th) => {
      const text = $(th).text().trim().replace(/\s+/g, " ");
      if (text && text !== "선택 영역" && text !== "선") {
        headers.push(text);
      }
    });
  }

  const rows: TableRow[] = [];
  table.find("tbody tr").each((_, tr) => {
    const row: TableRow = {};
    $(tr).find("td").each((j, td) => {
      const key = headers[j] || `col${j}`;
      row[key] = $(td).text().trim().replace(/\s+/g, " ");
    });
    if (Object.keys(row).length > 0) {
      rows.push(row);
    }
  });

  return rows;
}

/**
 * sg1 파싱: 요약 데이터
 */
export function parseSG1(html: string): SG1Summary {
  const $ = cheerio.load(html);

  // 분석번호, 지역, 업종
  let analy_no = "";
  let region = "";
  let industry = "";
  $(".summary dl").each((_, el) => {
    const dt = $(el).find("dt").text().trim();
    const dd = $(el).find("dd").text().trim();
    if (dt === "분석번호") analy_no = dd;
    if (dt === "분석지역") region = dd;
    if (dt === "업종") industry = dd;
  });

  // box 데이터 (8개: 선택지역 업소수/증감/매출/증감, 전체지역 업소수/증감/매출/증감)
  const boxes: string[] = [];
  $("dl.box").each((_, el) => {
    boxes.push($(el).find("dd").text().trim());
  });

  return {
    analy_no,
    region,
    industry,
    store_count: boxes[0] || "",
    store_change_rate: boxes[1] || "",
    avg_monthly_sales: boxes[2] || "",
    sales_change_rate: boxes[3] || "",
    area_store_count: boxes[4] || "",
    area_store_change_rate: boxes[5] || "",
    area_avg_monthly_sales: boxes[6] || "",
    area_sales_change_rate: boxes[7] || "",
  };
}

/**
 * sg2 파싱: 업소수 추이 (테이블 1개)
 */
export function parseSG2(html: string): SG2BusinessTrend {
  const $ = cheerio.load(html);
  const tables = $("table");
  return {
    monthly_stores: tables.length > 0 ? parseTable($, tables.eq(0)) : [],
  };
}

/**
 * sg3 파싱: 매출분석 (테이블 5개)
 */
export function parseSG3(html: string): SG3SalesAnalysis {
  const $ = cheerio.load(html);
  const tables = $("table");
  return {
    monthly_sales: tables.length > 0 ? parseTable($, tables.eq(0)) : [],
    monthly_count: tables.length > 1 ? parseTable($, tables.eq(1)) : [],
    day_of_week: tables.length > 2 ? parseTable($, tables.eq(2)) : [],
    time_of_day: tables.length > 3 ? parseTable($, tables.eq(3)) : [],
    gender_age_sales: tables.length > 4 ? parseTable($, tables.eq(4)) : [],
  };
}

/**
 * sg4 파싱: 인구분석 (테이블 16개)
 */
export function parseSG4(html: string): SG4PopulationAnalysis {
  const $ = cheerio.load(html);
  const tables = $("table");
  return {
    floating_trend: tables.length > 0 ? parseTable($, tables.eq(0)) : [],
    floating_gender_age: tables.length > 1 ? parseTable($, tables.eq(1)) : [],
    floating_day_of_week: tables.length > 2 ? parseTable($, tables.eq(2)) : [],
    floating_time_of_day: tables.length > 3 ? parseTable($, tables.eq(3)) : [],
    resident_trend: tables.length > 4 ? parseTable($, tables.eq(4)) : [],
    resident_gender_age: tables.length > 5 ? parseTable($, tables.eq(5)) : [],
    resident_income: tables.length > 6 ? parseTable($, tables.eq(6)) : [],
    worker_trend: tables.length > 10 ? parseTable($, tables.eq(10)) : [],
    worker_gender_age: tables.length > 11 ? parseTable($, tables.eq(11)) : [],
    worker_income: tables.length > 12 ? parseTable($, tables.eq(12)) : [],
  };
}

/**
 * sg6 파싱: 지역현황 (테이블 9개)
 */
export function parseSG6(html: string): SG6AreaStatus {
  const $ = cheerio.load(html);
  const tables = $("table");
  return {
    household_trend: tables.length > 0 ? parseTable($, tables.eq(0)) : [],
    apartment_status: tables.length > 1 ? parseTable($, tables.eq(1)) : [],
    apartment_size: tables.length > 4 ? parseTable($, tables.eq(4)) : [],
    facilities: tables.length > 5 ? parseTable($, tables.eq(5)) : [],
    schools: tables.length > 6 ? parseTable($, tables.eq(6)) : [],
    transit: tables.length > 7 ? parseTable($, tables.eq(7)) : [],
  };
}

/**
 * 소상공인365의 Java-style 문자열을 파싱 (JSON이 아닌 {key=value} 형식)
 */
function parseJavaStyleArray(str: string): Record<string, string>[] {
  const items: Record<string, string>[] = [];
  const regex = /\{([^}]+)\}/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    const obj: Record<string, string> = {};
    match[1].split(",").forEach((pair) => {
      const [key, ...valParts] = pair.split("=");
      if (key && valParts.length > 0) {
        obj[key.trim()] = valParts.join("=").trim();
      }
    });
    items.push(obj);
  }
  return items;
}

/**
 * sg7 파싱: 고객특성 (스크립트 변수 + 텍스트)
 */
export function parseSG7(html: string): SG7CustomerProfile {
  const $ = cheerio.load(html);

  // 소득 데이터 (텍스트에서)
  let male_avg_income = "";
  let female_avg_income = "";
  const incomeText = $("body").text();
  const maleMatch = incomeText.match(/남성\s*([\d,]+만원)/);
  const femaleMatch = incomeText.match(/여성\s*([\d,]+만원)/);
  if (maleMatch) male_avg_income = maleMatch[1];
  if (femaleMatch) female_avg_income = femaleMatch[1];

  // 분석결과 텍스트
  let analysis_text = "";
  const analysisMatch = incomeText.match(/분석결과\s+(.+)/);
  if (analysisMatch) analysis_text = analysisMatch[1].trim();

  // 스크립트 변수에서 데이터 추출
  const scriptContent = html.match(/<script[^>]*>([\s\S]*?)<\/script>/i)?.[1] || "";

  // 성별 비율
  const sexRtMatch = scriptContent.match(/var\s+vstCustSexRt\s*=\s*"([^"]+)"/);
  const gender_ratio = sexRtMatch
    ? parseJavaStyleArray(sexRtMatch[1]).map((d) => ({
        name: d.genNm || "",
        rate: parseFloat(d.popnumRate || "0"),
        count: parseInt(d.popnum || "0", 10),
      }))
    : [];

  // 신규/단골 비율
  const newCstmMatch = scriptContent.match(/var\s+vstCustNewCstmRt\s*=\s*"([^"]+)"/);
  const customer_type = newCstmMatch
    ? parseJavaStyleArray(newCstmMatch[1]).map((d) => ({
        name: d.newCstmCustNm || "",
        rate: parseFloat(d.newCstmCntRate || "0"),
        count: parseInt(d.newCstmCustCnt || "0", 10),
      }))
    : [];

  // 남성 라이프스타일
  const maleLifeMatch = scriptContent.match(/var\s+maleVstCustMjrLife\s*=\s*"([^"]+)"/);
  const male_lifestyle = maleLifeMatch
    ? parseJavaStyleArray(maleLifeMatch[1]).map((d) => ({
        hobby: d.maleCustHbbNm || "",
        rate: parseFloat(d.maleCustRate || "0"),
      }))
    : [];

  // 여성 라이프스타일
  const femaleLifeMatch = scriptContent.match(/var\s+femaleVstCustMjrLife\s*=\s*"([^"]+)"/);
  const female_lifestyle = femaleLifeMatch
    ? parseJavaStyleArray(femaleLifeMatch[1]).map((d) => ({
        hobby: d.femaleCustHbbNm || "",
        rate: parseFloat(d.femaleCustRate || "0"),
      }))
    : [];

  return {
    male_avg_income,
    female_avg_income,
    analysis_text,
    gender_ratio,
    customer_type,
    male_lifestyle,
    female_lifestyle,
  };
}

/**
 * 전체 파싱 (sg1~sg8 HTML map)
 */
export function parseAllSangGwon(htmlMap: Record<string, string>): SbizParsedData {
  return {
    sg1: parseSG1(htmlMap.sg1 || ""),
    sg2: parseSG2(htmlMap.sg2 || ""),
    sg3: parseSG3(htmlMap.sg3 || ""),
    sg4: parseSG4(htmlMap.sg4 || ""),
    sg6: parseSG6(htmlMap.sg6 || ""),
    sg7: parseSG7(htmlMap.sg7 || ""),
  };
}
