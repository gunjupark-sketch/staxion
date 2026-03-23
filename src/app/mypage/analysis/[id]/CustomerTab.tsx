"use client";

import { Users, AlertCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import type { AiAnalysis, TableRow, Sg7Data } from "./types";
import {
  isLocalDataEmpty,
  isRowAllZero,
  extractAgeOnly,
  extractDayOfWeek,
  extractTimeOfDay,
  findTopAgeGroup,
  tooltipStyle,
  CHART_COLORS,
} from "./utils";
import { KpiCard, SectionCard, InsightBox } from "./SharedUI";

export function CustomerTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
  const sg1 = (sbiz?.sg1 ?? {}) as Record<string, string>;
  const sg3 = (sbiz?.sg3 ?? {}) as Record<string, unknown>;
  const sg7 = (sbiz?.sg7 ?? {}) as Sg7Data;
  const localEmpty = isLocalDataEmpty(sg1);
  const sg7NoData = !sg7?.gender_ratio?.length && !sg7?.customer_type?.length;

  // gender_age_sales: [1]=동네비율, [4]=시군구비율
  const genderAgeSales = (sg3?.gender_age_sales ?? []) as TableRow[];
  const localSalesRatio = genderAgeSales?.[1];
  const salesRatioRow = (localEmpty || isRowAllZero(localSalesRatio)) ? genderAgeSales?.[4] : localSalesRatio;
  const ageChartData = extractAgeOnly(salesRatioRow);

  // 요일별 매출비율: [1]=동네비율, [4]=시군구비율
  const dayOfWeek = (sg3?.day_of_week ?? []) as TableRow[];
  const localDayRatio = dayOfWeek?.[1];
  const dayRatioRow = (localEmpty || isRowAllZero(localDayRatio)) ? dayOfWeek?.[4] : localDayRatio;
  const dayChartData = extractDayOfWeek(dayRatioRow);

  // 시간대별 매출비율
  const timeOfDay = (sg3?.time_of_day ?? []) as TableRow[];
  const localTimeRatio = timeOfDay?.[1];
  const timeRatioRow = (localEmpty || isRowAllZero(localTimeRatio)) ? timeOfDay?.[4] : localTimeRatio;
  const timeChartData = extractTimeOfDay(timeRatioRow);

  // sg7 데이터
  const genderRatio = sg7?.gender_ratio ?? [];
  const customerType = sg7?.customer_type ?? [];
  const maleLifestyle = sg7?.male_lifestyle ?? [];
  const femaleLifestyle = sg7?.female_lifestyle ?? [];

  // 핵심 고객 찾기
  const topAge = findTopAgeGroup(genderAgeSales);

  // 성별 비율 텍스트
  const genderText = genderRatio.length >= 2
    ? `${genderRatio[0]?.name} ${genderRatio[0]?.rate}% / ${genderRatio[1]?.name} ${genderRatio[1]?.rate}%`
    : "-";

  // 신규/단골 텍스트
  const customerTypeText = customerType.length >= 2
    ? `${customerType[0]?.name} ${customerType[0]?.rate}% / ${customerType[1]?.name} ${customerType[1]?.rate}%`
    : "-";

  // 성별 PieChart 데이터
  const genderPieData = genderRatio.map((g) => ({
    name: g.name,
    value: g.rate,
  }));

  const isAiNull = ai === null;

  const chartLevel = localEmpty ? "시군구" : "동네";

  return (
    <>
      {/* sg7 데이터 없음 안내 */}
      {sg7NoData && sg7?.analysis_text && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 mb-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-800">{sg7.analysis_text}</p>
          </div>
        </div>
      )}

      {/* KPI */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="핵심 고객" value={topAge} />
        <KpiCard label="남녀 비율" value={genderText} />
        <KpiCard label="신규/단골" value={customerTypeText} />
        <KpiCard
          label="평균 소득"
          value={sg7?.male_avg_income ? `남 ${sg7.male_avg_income}` : "-"}
          sub={sg7?.female_avg_income ? `여 ${sg7.female_avg_income}` : undefined}
        />
      </div>

      {/* 성별 비율 PieChart + 고객유형 */}
      {genderPieData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SectionCard title="성별 비율">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={genderPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {genderPieData.map((_, idx) => (
                    <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </SectionCard>

          {customerType.length > 0 && (
            <SectionCard title="고객 유형">
              <div className="space-y-3">
                {customerType.map((ct, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 font-medium">{ct.name}</span>
                      <span className="text-gray-500">{ct.rate}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${Math.min(ct.rate, 100)}%`,
                          backgroundColor: CHART_COLORS[idx % CHART_COLORS.length],
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{ct.count?.toLocaleString()}건</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}
        </div>
      )}

      {/* 성별/연령별 매출비율 차트 */}
      {ageChartData.length > 0 && (
        <SectionCard title={`연령별 매출 비율 (${chartLevel})`}>
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

      {/* 요일별 차트 */}
      {dayChartData.length > 0 && (
        <SectionCard title="요일별 매출 비율">
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

      {/* 시간대별 차트 */}
      {timeChartData.length > 0 && (
        <SectionCard title="시간대별 매출 비율">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={timeChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} angle={-20} textAnchor="end" height={50} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} unit="%" />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, "매출비율"]} />
              <Bar dataKey="value" fill="#A78BFA" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* 라이프스타일 */}
      {(maleLifestyle.length > 0 || femaleLifestyle.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {maleLifestyle.length > 0 && (
            <SectionCard title="남성 라이프스타일">
              <div className="space-y-2">
                {maleLifestyle.slice(0, 5).map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{item.hobby}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-100 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-blue-400"
                          style={{ width: `${Math.min(item.rate * 5, 100)}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-12 text-right">{item.rate}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}
          {femaleLifestyle.length > 0 && (
            <SectionCard title="여성 라이프스타일">
              <div className="space-y-2">
                {femaleLifestyle.slice(0, 5).map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{item.hobby}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-100 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-pink-400"
                          style={{ width: `${Math.min(item.rate * 5, 100)}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-12 text-right">{item.rate}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}
        </div>
      )}

      {/* sg7 분석 텍스트 */}
      {sg7?.analysis_text && (
        <div className="bg-gradient-to-r from-brand-neon/5 to-brand-neon/0 border border-brand-neon-safe/20 rounded-xl p-4">
          <h4 className="text-sm font-bold text-brand-neon-text flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            고객 분석 요약
          </h4>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{sg7.analysis_text}</p>
        </div>
      )}

      <InsightBox text={ai?.insights?.customer} pending={isAiNull} />
    </>
  );
}
