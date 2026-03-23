"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { AiAnalysis, TableRow, Sg7Data } from "./types";
import { isLocalDataEmpty, extractAgeOnly, tooltipStyle } from "./utils";
import { KpiCard, SectionCard, InsightBox, SimpleTable } from "./SharedUI";

export function SummaryTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
  const sg1 = (sbiz?.sg1 ?? {}) as Record<string, string>;
  const sg3 = (sbiz?.sg3 ?? {}) as Record<string, unknown>;
  const sg6 = (sbiz?.sg6 ?? {}) as Record<string, unknown>;
  const sg7 = (sbiz?.sg7 ?? {}) as Sg7Data;
  const localEmpty = isLocalDataEmpty(sg1);

  // gender_age_sales: [0]=동네매출, [1]=동네비율, [3]=시군구건수, [4]=시군구건수비율
  const genderAgeSales = (sg3?.gender_age_sales ?? []) as TableRow[];
  // 동네 데이터 0이면 시군구(건수비율) 사용
  const salesRatioRow = localEmpty ? genderAgeSales?.[4] : genderAgeSales?.[1];
  const ageChartData = extractAgeOnly(salesRatioRow);

  // sg6.household_trend = 세대수 추이 배열
  const householdTrend = (sg6?.household_trend ?? []) as TableRow[];
  // 동네[0], 읍면동[1], 시군구[2]
  const householdHeaders = householdTrend?.[0]
    ? ["구분", ...Object.keys(householdTrend[0]).filter((k) => k !== "지역" && k !== "구분")]
    : [];
  const householdRows: (string | number)[][] = [];
  const levelLabels = ["동네", "읍면동", "시군구"];
  householdTrend.forEach((row, idx) => {
    if (idx > 2) return;
    const label = row["지역"] || levelLabels[idx] || `레벨${idx}`;
    const cells: (string | number)[] = [label];
    Object.keys(row)
      .filter((k) => k !== "지역" && k !== "구분")
      .forEach((k) => cells.push(row[k] ?? "-"));
    householdRows.push(cells);
  });

  const isAiNull = ai === null;

  return (
    <>
      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <KpiCard
          label="지역"
          value={sg1.region || "-"}
        />
        <KpiCard
          label={localEmpty ? "시군구 점포수" : "총 점포수"}
          value={localEmpty ? (sg1.area_store_count || "-") : (sg1.store_count || "-")}
          change={localEmpty ? sg1.area_store_change_rate : sg1.store_change_rate}
          sub={localEmpty ? "시군구 기준" : "동네 기준"}
        />
        <KpiCard
          label={localEmpty ? "시군구 매출" : "평균 매출"}
          value={localEmpty ? (sg1.area_avg_monthly_sales || "-") : (sg1.avg_monthly_sales || "-")}
          change={localEmpty ? sg1.area_sales_change_rate : sg1.sales_change_rate}
          sub={localEmpty ? "시군구 월평균" : "동네 기준 월평균"}
        />
        <KpiCard
          label="매출 증감"
          value={(localEmpty ? sg1.area_sales_change_rate : sg1.sales_change_rate) || "-"}
        />
        <KpiCard
          label="점포 증감"
          value={(localEmpty ? sg1.area_store_change_rate : sg1.store_change_rate) || "-"}
        />
      </div>

      {/* 연령별 매출비율 차트 */}
      {ageChartData.length > 0 && (
        <SectionCard title={localEmpty ? "연령별 매출 비율 (시군구)" : "연령별 매출 비율 (동네)"}>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={ageChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} unit="%" />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, "매출비율"]} />
              <Bar dataKey="value" fill="#8EC31F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* 행정단위별 세대수 비교 */}
      {householdRows.length > 0 && (
        <SectionCard title="행정단위별 세대수 비교">
          <SimpleTable headers={householdHeaders} rows={householdRows} />
        </SectionCard>
      )}

      {/* 핵심 지표 요약 */}
      <SectionCard title="핵심 지표 요약">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard label="업종" value={sg1.industry || "-"} />
          <KpiCard label="시군구 점포수" value={sg1.area_store_count || "-"} change={sg1.area_store_change_rate} sub="시군구 기준" />
          <KpiCard label="시군구 평균매출" value={sg1.area_avg_monthly_sales || "-"} change={sg1.area_sales_change_rate} sub="시군구 기준" />
          <KpiCard label="분석번호" value={sg1.analy_no || "-"} />
        </div>
      </SectionCard>

      {/* AI Insight */}
      <InsightBox
        text={ai?.insights?.overview ?? ai?.summary}
        pending={isAiNull}
      />
    </>
  );
}
