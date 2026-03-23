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
import { extractMonthly, extractAgeOnly, tooltipStyle } from "./utils";
import { SectionCard, InsightBox, SimpleTable } from "./SharedUI";

export function IssueTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
  const sg4 = (sbiz?.sg4 ?? {}) as Record<string, unknown>;
  const sg6 = (sbiz?.sg6 ?? {}) as Record<string, unknown>;

  // 유동인구 월별추이: floating_trend[0] = 동네
  const floatingTrend = (sg4?.floating_trend ?? []) as TableRow[];
  const floatingRow = floatingTrend?.[0];
  const floatingChartData = extractMonthly(floatingRow);

  // 유동인구 성별/연령: floating_gender_age[1] = 비율(%)
  const floatingGenderAge = (sg4?.floating_gender_age ?? []) as TableRow[];
  const floatingRatioRow = floatingGenderAge?.[1];
  const floatingAgeData = extractAgeOnly(floatingRatioRow);

  // 거주인구 트렌드
  const residentTrend = (sg4?.resident_trend ?? []) as TableRow[];

  // 소득
  const residentIncome = (sg4?.resident_income ?? []) as TableRow[];
  const workerIncome = (sg4?.worker_income ?? []) as TableRow[];

  // sg6: 아파트, 집객시설
  const apartmentStatus = (sg6?.apartment_status ?? []) as TableRow[];
  const facilities = (sg6?.facilities ?? []) as TableRow[];

  const isAiNull = ai === null;

  // 거주인구 테이블
  const levelLabels = ["동네", "읍면동", "시군구"];
  const residentHeaders = residentTrend?.[0]
    ? ["구분", ...Object.keys(residentTrend[0]).filter((k) => k !== "지역" && k !== "구분")]
    : [];
  const residentRows: (string | number)[][] = [];
  residentTrend.forEach((row, idx) => {
    if (idx > 2) return;
    const label = row["지역"] || levelLabels[idx] || `레벨${idx}`;
    const cells: (string | number)[] = [label];
    Object.keys(row)
      .filter((k) => k !== "지역" && k !== "구분")
      .forEach((k) => cells.push(row[k] ?? "-"));
    residentRows.push(cells);
  });

  // 집객시설 테이블
  const facilityKeys = facilities?.[0]
    ? Object.keys(facilities[0]).filter((k) => k !== "지역" && k !== "구분")
    : [];
  const facilityHeaders = ["구분", ...facilityKeys];
  const facilityRows: (string | number)[][] = [];
  facilities.forEach((row, idx) => {
    if (idx > 2) return;
    const label = row["지역"] || levelLabels[idx] || `레벨${idx}`;
    facilityRows.push([label, ...facilityKeys.map((k) => row[k] ?? "-")]);
  });

  return (
    <>
      {/* 유동인구 추이 */}
      {floatingChartData.length > 0 && (
        <SectionCard title="유동인구 추이 (동네)">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={floatingChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="value" stroke="#8EC31F" strokeWidth={2} dot={{ r: 4, fill: "#8EC31F" }} name="유동인구" />
            </LineChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* 유동인구 연령대 분포 */}
      {floatingAgeData.length > 0 && (
        <SectionCard title="유동인구 연령대 비율 (동네)">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={floatingAgeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} unit="%" />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, "비율"]} />
              <Bar dataKey="value" fill="#4A9FFF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* 거주인구 */}
      {residentRows.length > 0 && (
        <SectionCard title="거주인구 추이">
          <SimpleTable headers={residentHeaders} rows={residentRows} />
        </SectionCard>
      )}

      {/* 소득 정보 */}
      {(residentIncome.length > 0 || workerIncome.length > 0) && (
        <SectionCard title="소득 정보">
          <div className="space-y-4">
            {residentIncome.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">거주인구 소득</h4>
                {(() => {
                  const keys = Object.keys(residentIncome[0] || {}).filter((k) => k !== "지역" && k !== "구분");
                  const headers = ["구분", ...keys];
                  const rows = residentIncome.slice(0, 3).map((row, idx) => {
                    const label = row["지역"] || levelLabels[idx] || `레벨${idx}`;
                    return [label, ...keys.map((k) => row[k] ?? "-")];
                  });
                  return <SimpleTable headers={headers} rows={rows} />;
                })()}
              </div>
            )}
            {workerIncome.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">직장인구 소득</h4>
                {(() => {
                  const keys = Object.keys(workerIncome[0] || {}).filter((k) => k !== "지역" && k !== "구분");
                  const headers = ["구분", ...keys];
                  const rows = workerIncome.slice(0, 3).map((row, idx) => {
                    const label = row["지역"] || levelLabels[idx] || `레벨${idx}`;
                    return [label, ...keys.map((k) => row[k] ?? "-")];
                  });
                  return <SimpleTable headers={headers} rows={rows} />;
                })()}
              </div>
            )}
          </div>
        </SectionCard>
      )}

      {/* 집객시설 */}
      {facilityRows.length > 0 && (
        <SectionCard title="집객시설 현황">
          <SimpleTable headers={facilityHeaders} rows={facilityRows} />
        </SectionCard>
      )}

      <InsightBox text={ai?.insights?.issue} pending={isAiNull} />
    </>
  );
}
