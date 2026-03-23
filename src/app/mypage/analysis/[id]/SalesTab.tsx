"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { AiAnalysis, TableRow } from "./types";
import { isLocalDataEmpty, isRowAllZero, extractMonthly, extractDayOfWeek, tooltipStyle } from "./utils";
import { KpiCard, SectionCard, InsightBox, EmptyState } from "./SharedUI";

export function SalesTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
  const sg1 = (sbiz?.sg1 ?? {}) as Record<string, string>;
  const sg3 = (sbiz?.sg3 ?? {}) as Record<string, unknown>;
  const localEmpty = isLocalDataEmpty(sg1);

  // monthly_sales: [0]=동네매출, [1]=증감률, [2]=읍면동, [3]=시군구
  const monthlySales = (sg3?.monthly_sales ?? []) as TableRow[];
  const localSalesRow = monthlySales?.[0];
  const salesRow = (localEmpty || isRowAllZero(localSalesRow)) ? monthlySales?.[3] : localSalesRow;
  const salesChartData = extractMonthly(salesRow);
  const chartLevel = (localEmpty || isRowAllZero(localSalesRow)) ? "시군구" : "동네";

  // day_of_week: [0]=동네매출, [1]=동네비율, [3]=시군구건수, [4]=시군구비율
  const dayOfWeek = (sg3?.day_of_week ?? []) as TableRow[];
  const localDayRow = dayOfWeek?.[1];
  const dayRatioRow = (localEmpty || isRowAllZero(localDayRow)) ? dayOfWeek?.[4] : localDayRow;
  const dayChartData = extractDayOfWeek(dayRatioRow);

  const isAiNull = ai === null;

  if (!sg3 || Object.keys(sg3).length === 0) {
    return <EmptyState message="매출 데이터가 없습니다." />;
  }

  return (
    <>
      {/* KPI */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard
          label={localEmpty ? "시군구 매출" : "평균 매출"}
          value={localEmpty ? (sg1.area_avg_monthly_sales || "-") : (sg1.avg_monthly_sales || "-")}
          change={localEmpty ? sg1.area_sales_change_rate : sg1.sales_change_rate}
          sub={localEmpty ? "시군구 월평균" : "동네 월평균"}
        />
        <KpiCard label="매출 증감률" value={(localEmpty ? sg1.area_sales_change_rate : sg1.sales_change_rate) || "-"} />
        <KpiCard label="시군구 매출" value={sg1.area_avg_monthly_sales || "-"} change={sg1.area_sales_change_rate} sub="시군구 월평균" />
        <KpiCard label="시군구 매출 증감" value={sg1.area_sales_change_rate || "-"} />
      </div>

      {/* 매출 추이 차트 */}
      {salesChartData.length > 0 && (
        <SectionCard title={`매출 추이 (${chartLevel}, 만원)`}>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={salesChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${Number(v).toLocaleString()}만원`, "매출"]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8EC31F"
                strokeWidth={2}
                dot={{ r: 4, fill: "#8EC31F" }}
                name="매출"
              />
            </LineChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* 요일별 매출비율 차트 */}
      {dayChartData.length > 0 && (
        <SectionCard title={`요일별 매출 비율 (${chartLevel})`}>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={dayChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} unit="%" />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, "매출비율"]} />
              <Bar dataKey="value" fill="#4A9FFF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      <InsightBox text={ai?.insights?.sales} pending={isAiNull} />
    </>
  );
}
