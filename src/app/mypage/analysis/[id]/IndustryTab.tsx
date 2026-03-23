"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { AiAnalysis, TableRow } from "./types";
import { isLocalDataEmpty, isRowAllZero, extractMonthly, tooltipStyle } from "./utils";
import { KpiCard, SectionCard, InsightBox, SimpleTable } from "./SharedUI";

export function IndustryTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
  const sg1 = (sbiz?.sg1 ?? {}) as Record<string, string>;
  const sg2 = (sbiz?.sg2 ?? {}) as Record<string, unknown>;
  const localEmpty = isLocalDataEmpty(sg1);

  // monthly_stores: [0]=동네, [1]=증감률, [2]=읍면동, [3]=시군구
  const monthlyStores = (sg2?.monthly_stores ?? []) as TableRow[];
  const localRow = monthlyStores?.[0];
  // 동네 0이면 시군구[3] 사용
  const storeRow = (localEmpty || isRowAllZero(localRow)) ? monthlyStores?.[3] : localRow;
  const storeChartData = extractMonthly(storeRow);
  const chartLevel = (localEmpty || isRowAllZero(localRow)) ? "시군구" : "동네";

  const isAiNull = ai === null;

  return (
    <>
      {/* KPI */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard
          label={localEmpty ? "시군구 점포수" : "동네 점포수"}
          value={localEmpty ? (sg1.area_store_count || "-") : (sg1.store_count || "-")}
          change={localEmpty ? sg1.area_store_change_rate : sg1.store_change_rate}
          sub={localEmpty ? "시군구 기준" : "동네 기준"}
        />
        <KpiCard label="점포 증감률" value={(localEmpty ? sg1.area_store_change_rate : sg1.store_change_rate) || "-"} />
        <KpiCard label="시군구 점포수" value={sg1.area_store_count || "-"} sub="시군구 기준" />
        <KpiCard label="시군구 점포 증감" value={sg1.area_store_change_rate || "-"} />
      </div>

      {/* 점포수 추이 차트 */}
      {storeChartData.length > 0 && (
        <SectionCard title={`점포수 추이 (${chartLevel})`}>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={storeChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8EC31F"
                strokeWidth={2}
                dot={{ r: 4, fill: "#8EC31F" }}
                name="점포수"
              />
            </LineChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* 월별 상세 테이블: 동네 vs 시군구 */}
      {monthlyStores.length >= 4 && (
        <SectionCard title="행정단위별 점포수 비교">
          {(() => {
            const monthKeys = Object.keys(monthlyStores[0] || {}).filter(
              (k) => k !== "구분" && k !== "지역"
            );
            const headers = ["구분", ...monthKeys];
            const labels = ["동네", "동네 증감률", "읍면동", "시군구", "시도", "전국"];
            const rows = monthlyStores.slice(0, 6).map((row, idx) => {
              const label = row["지역"] || labels[idx] || `레벨${idx}`;
              return [label, ...monthKeys.map((k) => row[k] ?? "-")];
            });
            return <SimpleTable headers={headers} rows={rows} />;
          })()}
        </SectionCard>
      )}

      <InsightBox text={ai?.insights?.industry} pending={isAiNull} />
    </>
  );
}
