import type { TableRow } from "./types";

/* ──────────────────────────────────────────────
   Chart Colors
   ────────────────────────────────────────────── */

export const CHART_COLORS = ["#8EC31F", "#4A9FFF", "#FF6565", "#A78BFA", "#FB923C", "#22D3EE"];

/* ──────────────────────────────────────────────
   Shared Tooltip Style
   ────────────────────────────────────────────── */

export const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  fontSize: "12px",
};

/* ──────────────────────────────────────────────
   Utility Functions
   ────────────────────────────────────────────── */

/** 문자열에서 숫자 추출 */
export function parseNum(val: unknown): number {
  if (typeof val === "number") return val;
  if (typeof val === "string") {
    const cleaned = val.replace(/[^0-9.\-]/g, "");
    const n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }
  return 0;
}

export function safeStr(val: unknown, fallback = "-"): string {
  if (val == null) return fallback;
  return String(val);
}

/** 동네(선택영역) 데이터가 전부 0인지 확인 */
export function isLocalDataEmpty(sg1: Record<string, string>): boolean {
  const count = parseNum(sg1?.store_count);
  const sales = parseNum(sg1?.avg_monthly_sales);
  return count === 0 && sales === 0;
}

/** 월별 행 데이터가 전부 0인지 확인 */
export function isRowAllZero(row: TableRow | undefined): boolean {
  if (!row) return true;
  const values = Object.values(row);
  return values.every((v) => parseNum(v) === 0);
}

/** 월별 데이터 행(Record)에서 차트용 배열 추출. "구분"/"지역" 키 제외. */
export function extractMonthly(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const exclude = ["구분", "지역"];
  return Object.entries(row)
    .filter(([k]) => !exclude.includes(k))
    .map(([k, v]) => ({ name: k, value: parseNum(v) }));
}

/** 요일 데이터에서 차트용 배열 추출. "주중"/"주말" 키 제외. */
export function extractDayOfWeek(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const exclude = ["주중", "주말"];
  return Object.entries(row)
    .filter(([k]) => !exclude.includes(k))
    .map(([k, v]) => ({ name: k, value: parseNum(v) }));
}

/** 시간대 데이터에서 차트용 배열 추출. "구분"/"지역" 키 제외. */
export function extractTimeOfDay(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const exclude = ["구분", "지역"];
  return Object.entries(row)
    .filter(([k]) => !exclude.includes(k))
    .map(([k, v]) => ({ name: k, value: parseNum(v) }));
}

/** 연령대 키만 추출 (성별 키 제외) */
export function extractAgeOnly(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const ageKeys = ["10대", "20대", "30대", "40대", "50대", "60대이상"];
  return ageKeys
    .filter((k) => k in row)
    .map((k) => ({ name: k, value: parseNum(row[k]) }));
}

/** gender_age_sales에서 최대 비율 연령대 찾기 */
export function findTopAgeGroup(genderAgeSales: TableRow[] | undefined): string {
  if (!genderAgeSales || !genderAgeSales[1]) return "-";
  const row = genderAgeSales[1]; // 매출비율 행
  const ageKeys = ["10대", "20대", "30대", "40대", "50대", "60대이상"];
  let maxKey = "-";
  let maxVal = -1;
  for (const k of ageKeys) {
    if (k in row) {
      const v = parseNum(row[k]);
      if (v > maxVal) {
        maxVal = v;
        maxKey = k;
      }
    }
  }
  return maxVal > 0 ? `${maxKey} (${maxVal}%)` : "-";
}
