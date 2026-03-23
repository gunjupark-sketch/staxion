"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Lock,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  Store,
  Target,
  Shield,
  Zap,
  Globe,
  AlertCircle,
  Clock,
  Loader2,
  AlertTriangle,
  DollarSign,
  UserCheck,
} from "lucide-react";
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
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */

interface ReportData {
  id: string;
  address: string;
  sido: string | null;
  sgg: string | null;
  dong: string | null;
  status: string;
  upjong_name: string;
  created_at: string;
  completed_at: string | null;
  error_message: string | null;
  is_premium: boolean;
  sbiz_data: Record<string, unknown> | null;
  sgis_data: Record<string, unknown> | null;
  kosis_data: Record<string, unknown> | null;
  competitors_data: Record<string, unknown> | null;
  ai_analysis: Record<string, unknown> | null;
}

type TableRow = Record<string, string>;

interface AiAnalysis {
  type?: string;
  summary?: string;
  grade?: string;
  score?: number;
  alert_items?: string[];
  insights?: Record<string, string>;
  stp?: {
    segmentation?: Array<{ label: string; description: string }>;
    targeting?: { label: string; description: string; reason: string };
    positioning?: { label: string; description: string; differentiator: string };
  };
  swot?: {
    strengths?: string[];
    weaknesses?: string[];
    opportunities?: string[];
    threats?: string[];
  };
  golden_signals?: Array<{
    rank: number;
    title: string;
    evidence: string;
    strategies: string[];
    kpi: string;
  }>;
  recommendations?: string[];
}

// sg7 타입
interface Sg7Data {
  gender_ratio?: Array<{ name: string; rate: number; count: number }>;
  customer_type?: Array<{ name: string; rate: number; count: number }>;
  male_lifestyle?: Array<{ rate: number; hobby: string }>;
  female_lifestyle?: Array<{ rate: number; hobby: string }>;
  male_avg_income?: string;
  female_avg_income?: string;
  analysis_text?: string;
}

/* ──────────────────────────────────────────────
   Tab definitions
   ────────────────────────────────────────────── */

const tabs = [
  { key: "overview", label: "권역 요약", icon: MapPin, premium: false },
  { key: "industry", label: "업종 현황", icon: Store, premium: false },
  { key: "sales", label: "매출 현황", icon: DollarSign, premium: false },
  { key: "customer", label: "고객 분석", icon: UserCheck, premium: false },
  { key: "competitor", label: "경쟁 분석", icon: Target, premium: false },
  { key: "issue", label: "권역 이슈", icon: AlertCircle, premium: false },
  { key: "online", label: "온라인 마케팅", icon: Globe, premium: true },
  { key: "stp", label: "STP 전략", icon: Target, premium: true },
  { key: "swot", label: "SWOT 분석", icon: Shield, premium: true },
  { key: "golden", label: "골든시그널 종합", icon: Zap, premium: true },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const CHART_COLORS = ["#8EC31F", "#4A9FFF", "#FF6565", "#A78BFA", "#FB923C", "#22D3EE"];

/* ──────────────────────────────────────────────
   Utility Functions
   ────────────────────────────────────────────── */

/** 동네(선택영역) 데이터가 전부 0인지 확인 */
function isLocalDataEmpty(sg1: Record<string, string>): boolean {
  const count = parseNum(sg1?.store_count);
  const sales = parseNum(sg1?.avg_monthly_sales);
  return count === 0 && sales === 0;
}

/** 월별 행 데이터가 전부 0인지 확인 */
function isRowAllZero(row: TableRow | undefined): boolean {
  if (!row) return true;
  const values = Object.values(row);
  return values.every((v) => parseNum(v) === 0);
}

/** 문자열에서 숫자 추출 */
function parseNum(val: unknown): number {
  if (typeof val === "number") return val;
  if (typeof val === "string") {
    const cleaned = val.replace(/[^0-9.\-]/g, "");
    const n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }
  return 0;
}

function safeStr(val: unknown, fallback = "-"): string {
  if (val == null) return fallback;
  return String(val);
}

/** 월별 데이터 행(Record)에서 차트용 배열 추출. "구분"/"지역" 키 제외. */
function extractMonthly(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const exclude = ["구분", "지역"];
  return Object.entries(row)
    .filter(([k]) => !exclude.includes(k))
    .map(([k, v]) => ({ name: k, value: parseNum(v) }));
}

/** 요일 데이터에서 차트용 배열 추출. "주중"/"주말" 키 제외. */
function extractDayOfWeek(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const exclude = ["주중", "주말"];
  return Object.entries(row)
    .filter(([k]) => !exclude.includes(k))
    .map(([k, v]) => ({ name: k, value: parseNum(v) }));
}

/** 시간대 데이터에서 차트용 배열 추출. "구분"/"지역" 키 제외. */
function extractTimeOfDay(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const exclude = ["구분", "지역"];
  return Object.entries(row)
    .filter(([k]) => !exclude.includes(k))
    .map(([k, v]) => ({ name: k, value: parseNum(v) }));
}

/** 연령대 키만 추출 (성별 키 제외) */
function extractAgeOnly(row: TableRow | undefined): { name: string; value: number }[] {
  if (!row) return [];
  const ageKeys = ["10대", "20대", "30대", "40대", "50대", "60대이상"];
  return ageKeys
    .filter((k) => k in row)
    .map((k) => ({ name: k, value: parseNum(row[k]) }));
}

/** gender_age_sales에서 최대 비율 연령대 찾기 */
function findTopAgeGroup(genderAgeSales: TableRow[] | undefined): string {
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

/* ──────────────────────────────────────────────
   Shared Tooltip Style
   ────────────────────────────────────────────── */

const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  fontSize: "12px",
};

/* ──────────────────────────────────────────────
   Main Component
   ────────────────────────────────────────────── */

export function AnalysisDashboard({ report }: { report: ReportData }) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  // Not completed states
  if (report.status !== "completed") {
    return (
      <div>
        <Link
          href="/mypage/analysis"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          목록으로
        </Link>
        <div className="rounded-2xl border border-gray-100 bg-white p-12 text-center shadow-sm">
          {report.status === "failed" ? (
            <>
              <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
              <p className="mt-4 text-base font-bold text-gray-900">분석에 실패했습니다</p>
              <p className="mt-2 text-sm text-gray-500">
                {report.error_message || "일시적인 오류가 발생했습니다. 다시 시도해주세요."}
              </p>
            </>
          ) : (
            <>
              {report.status === "processing" ? (
                <Loader2 className="mx-auto h-12 w-12 text-brand-neon-safe animate-spin" />
              ) : (
                <Clock className="mx-auto h-12 w-12 text-amber-500" />
              )}
              <p className="mt-4 text-base font-bold text-gray-900">
                {report.status === "processing" ? "분석 진행 중입니다" : "분석 대기 중입니다"}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                완료되면 알림으로 안내드립니다. 잠시만 기다려주세요.
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  const ai = (report.ai_analysis ?? null) as AiAnalysis | null;
  const sbiz = report.sbiz_data ?? {};
  const isPremium = !!report.is_premium;
  const sg1 = (sbiz?.sg1 ?? {}) as Record<string, string>;
  const localEmpty = isLocalDataEmpty(sg1);

  return (
    <div>
      {/* Top Bar */}
      <TopBar report={report} ai={ai} />

      {/* 동네 데이터 부족 안내 */}
      {localEmpty && (
        <div className="mb-6 rounded-xl bg-blue-50 border border-blue-200 px-4 py-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-800">선택 영역(동네)에 해당 업종 점포가 없습니다</p>
              <p className="text-xs text-blue-600 mt-1">시군구 기준 데이터로 표시합니다. 정확한 분석을 위해 다른 주소로 재분석을 권장합니다.</p>
            </div>
          </div>
        </div>
      )}

      {/* Alert Bar */}
      {ai?.alert_items && ai.alert_items.length > 0 && <AlertBar items={ai.alert_items} />}

      {/* Tab Navigation */}
      <div className="flex gap-1 overflow-x-auto border-b border-gray-100 pb-px mb-6 scrollbar-hide">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex shrink-0 items-center gap-1.5 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                isActive
                  ? "text-brand-neon-text border-brand-neon-safe"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {tab.premium && <Lock className="h-3 w-3 ml-0.5" />}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "overview" && <OverviewTab sbiz={sbiz} ai={ai} />}
        {activeTab === "industry" && <IndustryTab sbiz={sbiz} ai={ai} />}
        {activeTab === "sales" && <SalesTab sbiz={sbiz} ai={ai} />}
        {activeTab === "customer" && <CustomerTab sbiz={sbiz} ai={ai} />}
        {activeTab === "competitor" && <PlaceholderTab title="경쟁 분석" message="네이버플레이스 데이터 연동 준비 중입니다." locked />}
        {activeTab === "issue" && <IssueTab sbiz={sbiz} ai={ai} />}
        {activeTab === "online" && (isPremium ? <PlaceholderTab title="온라인 마케팅" message="추후 업데이트 예정입니다." /> : <PremiumLock />)}
        {activeTab === "stp" && (isPremium ? <StpTab ai={ai} /> : <PremiumLock />)}
        {activeTab === "swot" && (isPremium ? <SwotTab ai={ai} /> : <PremiumLock />)}
        {activeTab === "golden" && (isPremium ? <GoldenSignalTab ai={ai} /> : <PremiumLock />)}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Top Bar
   ────────────────────────────────────────────── */

function TopBar({ report, ai }: { report: ReportData; ai: AiAnalysis | null }) {
  return (
    <div className="mb-6">
      <Link
        href="/mypage/analysis"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        목록으로
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-gray-900 truncate">{report.address}</h2>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {report.sido} {report.sgg} {report.dong}
            </span>
            <span className="text-gray-200">|</span>
            <span>{report.upjong_name}</span>
          </div>
          {report.completed_at && (
            <p className="mt-1 text-xs text-gray-400">
              {new Date(report.completed_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              분석 완료
            </p>
          )}
        </div>

        {ai?.grade && (
          <div className="shrink-0 rounded-2xl border border-gray-100 bg-white px-5 py-3 text-center shadow-sm">
            <p className="text-xs text-gray-400 font-medium">종합등급</p>
            <p className="mt-0.5 text-3xl font-black text-brand-neon-text">{ai.grade}</p>
            {ai.score != null && (
              <p className="text-xs text-gray-400">{ai.score}점</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Alert Bar
   ────────────────────────────────────────────── */

function AlertBar({ items }: { items: string[] }) {
  return (
    <div className="mb-6 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
      <div className="flex items-start gap-2">
        <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
        <div className="space-y-1">
          {items.map((item, i) => (
            <p key={i} className="text-sm text-amber-800">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Premium Lock
   ────────────────────────────────────────────── */

function PremiumLock() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Lock className="h-16 w-16 text-gray-300" />
      <p className="text-lg font-bold text-gray-900 mt-4">
        골든시그널 캐치전략 구독이 필요합니다
      </p>
      <p className="text-sm text-gray-500 mt-2 text-center max-w-md">
        데이터 기반 STP 전략, SWOT 분석, 골든시그널 TOP3을 확인하세요
      </p>
      <Link
        href="/services/golden-signal-catch-strategy"
        className="mt-6 inline-flex items-center justify-center bg-brand-neon text-[#1a1a1a] rounded-xl px-6 h-12 font-bold text-sm hover:brightness-95 transition-all"
      >
        캐치전략 알아보기
      </Link>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Placeholder Tab
   ────────────────────────────────────────────── */

function PlaceholderTab({ title, message, locked }: { title: string; message: string; locked?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {locked ? (
        <Lock className="h-12 w-12 text-gray-300" />
      ) : (
        <Clock className="h-12 w-12 text-gray-300" />
      )}
      <p className="text-lg font-bold text-gray-900 mt-4">{title}</p>
      <p className="text-sm text-gray-500 mt-2">{message}</p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Shared UI Components
   ────────────────────────────────────────────── */

function KpiCard({
  label,
  value,
  change,
  sub,
}: {
  label: string;
  value: string | number;
  change?: string;
  sub?: string;
}) {
  const changeStr = change ?? "";
  const isNegative = changeStr.includes("-") || changeStr.includes("감소");
  const isPositive = !isNegative && (parseNum(changeStr) > 0 || changeStr.includes("+") || changeStr.includes("증가"));
  const changeColor = change
    ? isNegative
      ? "text-red-500"
      : isPositive
        ? "text-green-600"
        : "text-amber-600"
    : undefined;

  const ChangeIcon = change
    ? isNegative
      ? TrendingDown
      : isPositive
        ? TrendingUp
        : Minus
    : null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <p className="text-xs text-gray-400 font-medium">{label}</p>
      <p className="mt-1 text-2xl font-black text-gray-900">{String(value)}</p>
      {change && (
        <p className={`mt-1 text-xs font-semibold flex items-center gap-1 ${changeColor}`}>
          {ChangeIcon && <ChangeIcon className="h-3 w-3" />}
          {change}
        </p>
      )}
      {sub && <p className="mt-0.5 text-[10px] text-gray-400">{sub}</p>}
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function InsightBox({ text, pending }: { text?: string | null; pending?: boolean }) {
  if (pending) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-4">
        <h4 className="text-sm font-bold text-gray-400 flex items-center gap-1.5">
          <Lightbulb className="h-4 w-4" />
          AI 분석 준비 중
        </h4>
        <p className="mt-2 text-sm text-gray-400">분석이 완료되면 AI 인사이트가 제공됩니다.</p>
      </div>
    );
  }
  if (!text) return null;
  return (
    <div className="bg-gradient-to-r from-brand-neon/5 to-brand-neon/0 border border-brand-neon-safe/20 rounded-xl p-4 mt-4">
      <h4 className="text-sm font-bold text-brand-neon-text flex items-center gap-1.5">
        <Lightbulb className="h-4 w-4" />
        AI 인사이트
      </h4>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}

function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  if (rows.length === 0) return <EmptyState message="데이터가 없습니다." />;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs text-gray-400 font-semibold border-b bg-gray-50 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 border-b border-gray-50 text-gray-600 whitespace-nowrap">
                  {cell ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Tab 1: Overview (권역 요약)
   ────────────────────────────────────────────── */

function OverviewTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
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

/* ──────────────────────────────────────────────
   Tab 2: Industry (업종 현황)
   ────────────────────────────────────────────── */

function IndustryTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
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

/* ──────────────────────────────────────────────
   Tab 3: Sales (매출 현황)
   ────────────────────────────────────────────── */

function SalesTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
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

/* ──────────────────────────────────────────────
   Tab 4: Customer (고객 분석)
   ────────────────────────────────────────────── */

function CustomerTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
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

/* ──────────────────────────────────────────────
   Tab 6: Issue (권역 이슈) — sg4 + sg6 데이터 활용
   ────────────────────────────────────────────── */

function IssueTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis | null }) {
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
  const residentHeaders = residentTrend?.[0]
    ? ["구분", ...Object.keys(residentTrend[0]).filter((k) => k !== "지역" && k !== "구분")]
    : [];
  const residentRows: (string | number)[][] = [];
  const levelLabels = ["동네", "읍면동", "시군구"];
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

/* ──────────────────────────────────────────────
   Tab 8: STP Strategy (유료)
   ────────────────────────────────────────────── */

function StpTab({ ai }: { ai: AiAnalysis | null }) {
  const stp = ai?.stp;
  if (!stp) return <EmptyState message="STP 전략 데이터가 없습니다." />;

  const cards = [
    {
      letter: "S",
      title: "Segmentation",
      borderColor: "border-t-amber-500",
      textColor: "text-amber-500",
      content: stp.segmentation,
    },
    {
      letter: "T",
      title: "Targeting",
      borderColor: "border-t-blue-500",
      textColor: "text-blue-500",
      content: stp.targeting,
    },
    {
      letter: "P",
      title: "Positioning",
      borderColor: "border-t-green-500",
      textColor: "text-green-500",
      content: stp.positioning,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.letter}
          className={`bg-white rounded-2xl border border-gray-100 border-t-[3px] ${card.borderColor} p-5 shadow-sm`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-3xl font-black ${card.textColor}`}>{card.letter}</span>
            <span className="text-sm font-bold text-gray-900">{card.title}</span>
          </div>

          {card.letter === "S" && Array.isArray(card.content) ? (
            <div className="space-y-3">
              {(card.content as Array<{ label: string; description: string }>).map((seg, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-gray-900">{seg.label}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{seg.description}</p>
                </div>
              ))}
            </div>
          ) : card.content && typeof card.content === "object" ? (
            <div className="space-y-2">
              {"label" in card.content && (
                <p className="text-sm font-semibold text-gray-900">
                  {(card.content as { label: string }).label}
                </p>
              )}
              {"description" in card.content && (
                <p className="text-sm text-gray-600">
                  {(card.content as { description: string }).description}
                </p>
              )}
              {"reason" in card.content && (
                <p className="text-xs text-gray-400 mt-2">
                  {(card.content as { reason: string }).reason}
                </p>
              )}
              {"differentiator" in card.content && (
                <p className="text-xs text-gray-400 mt-2">
                  {(card.content as { differentiator: string }).differentiator}
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-400">데이터 없음</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Tab 9: SWOT Analysis (유료)
   ────────────────────────────────────────────── */

function SwotTab({ ai }: { ai: AiAnalysis | null }) {
  const swot = ai?.swot;
  if (!swot) return <EmptyState message="SWOT 분석 데이터가 없습니다." />;

  const quadrants = [
    {
      key: "strengths",
      label: "Strengths (강점)",
      items: swot.strengths,
      bg: "bg-green-50",
      border: "border-green-200",
      heading: "text-green-700",
      icon: "S",
    },
    {
      key: "weaknesses",
      label: "Weaknesses (약점)",
      items: swot.weaknesses,
      bg: "bg-red-50",
      border: "border-red-200",
      heading: "text-red-600",
      icon: "W",
    },
    {
      key: "opportunities",
      label: "Opportunities (기회)",
      items: swot.opportunities,
      bg: "bg-blue-50",
      border: "border-blue-200",
      heading: "text-blue-600",
      icon: "O",
    },
    {
      key: "threats",
      label: "Threats (위협)",
      items: swot.threats,
      bg: "bg-orange-50",
      border: "border-orange-200",
      heading: "text-orange-600",
      icon: "T",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {quadrants.map((q) => (
        <div key={q.key} className={`${q.bg} border ${q.border} rounded-2xl p-5`}>
          <h5 className={`text-sm font-bold ${q.heading} mb-3 flex items-center gap-2`}>
            <span className="text-lg font-black">{q.icon}</span>
            {q.label}
          </h5>
          {q.items && q.items.length > 0 ? (
            <ul className="space-y-2">
              {q.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">데이터 없음</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Tab 10: Golden Signal (유료)
   ────────────────────────────────────────────── */

function GoldenSignalTab({ ai }: { ai: AiAnalysis | null }) {
  const signals = ai?.golden_signals;
  if (!signals || signals.length === 0) {
    return <EmptyState message="골든시그널 데이터가 없습니다." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {signals.slice(0, 3).map((signal) => (
        <div
          key={signal.rank}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          {/* Top gradient line */}
          <div className="h-1 bg-gradient-to-r from-brand-neon-safe to-brand-neon" />

          <div className="p-5">
            {/* Rank */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand-neon text-[#1a1a1a] text-xs font-black">
                {String(signal.rank).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                SIGNAL {String(signal.rank).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-base font-bold text-gray-900 mb-3">{signal.title}</h4>

            {/* Evidence */}
            <div className="mb-3">
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">근거</p>
              <p className="text-sm text-gray-600 leading-relaxed">{signal.evidence}</p>
            </div>

            {/* Strategies */}
            {signal.strategies && signal.strategies.length > 0 && (
              <div className="mb-3">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">전략</p>
                <ul className="space-y-1">
                  {signal.strategies.map((s, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-1.5">
                      <span className="shrink-0 mt-1.5 h-1 w-1 rounded-full bg-brand-neon-safe" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* KPI */}
            {signal.kpi && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">KPI</p>
                <p className="text-sm font-semibold text-brand-neon-text">{signal.kpi}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
