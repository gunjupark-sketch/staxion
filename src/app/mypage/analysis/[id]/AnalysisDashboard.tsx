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
  BarChart3,
  Users,
  ShoppingCart,
  Store,
  Target,
  Shield,
  Zap,
  Globe,
  AlertCircle,
  Clock,
  Loader2,
  AlertTriangle,
  Calendar,
  DollarSign,
  UserCheck,
  Home,
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
  Legend,
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

const CHART_COLORS = ["#8EC31F", "#4A9FFF", "#FF6565", "#A78BFA", "#F59E0B", "#EC4899"];

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

  const ai = (report.ai_analysis ?? {}) as AiAnalysis;
  const sbiz = report.sbiz_data ?? {};
  const isPremium = !!report.is_premium;

  return (
    <div>
      {/* Top Bar */}
      <TopBar report={report} ai={ai} />

      {/* Alert Bar */}
      {ai.alert_items && ai.alert_items.length > 0 && <AlertBar items={ai.alert_items} />}

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
        {activeTab === "issue" && <PlaceholderTab title="권역 이슈" message="추후 업데이트 예정입니다." />}
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

function TopBar({ report, ai }: { report: ReportData; ai: AiAnalysis }) {
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

        {ai.grade && (
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
  const changeColor = change
    ? change.includes("-") || change.includes("감소")
      ? "text-red-500"
      : change.includes("+") || change.includes("증가")
        ? "text-green-600"
        : "text-amber-600"
    : undefined;

  const ChangeIcon = change
    ? change.includes("-") || change.includes("감소")
      ? TrendingDown
      : change.includes("+") || change.includes("증가")
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

function InsightBox({ text }: { text: string | undefined }) {
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

function DataTable({ data }: { data: TableRow[] }) {
  if (!data || data.length === 0) return <EmptyState message="데이터가 없습니다." />;

  const headers = Object.keys(data[0]);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs text-gray-400 font-semibold border-b bg-gray-50 uppercase tracking-wider whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/50">
              {headers.map((h) => (
                <td key={h} className="px-4 py-3 border-b border-gray-50 text-gray-600 whitespace-nowrap">
                  {row[h] ?? "-"}
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
   Utility: parse numeric from string
   ────────────────────────────────────────────── */

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

/* ──────────────────────────────────────────────
   Tab 1: Overview (권역 요약)
   ────────────────────────────────────────────── */

function OverviewTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis }) {
  const sg1 = (sbiz.sg1 ?? {}) as Record<string, unknown>;
  const sg4 = (sbiz.sg4 ?? {}) as Record<string, unknown>;
  const sg6 = (sbiz.sg6 ?? {}) as Record<string, unknown>;
  const sg7 = (sbiz.sg7 ?? {}) as Record<string, unknown>;

  // Resident gender/age for chart
  const residentGenderAge = (sg4.resident_gender_age ?? []) as TableRow[];

  // Build age chart data from resident_gender_age
  const ageChartData = residentGenderAge.length > 0
    ? residentGenderAge.map((row) => {
        const keys = Object.keys(row);
        const label = row[keys[0]] || "";
        const values: Record<string, unknown> = { name: label };
        keys.slice(1).forEach((k) => {
          values[k] = parseNum(row[k]);
        });
        return values;
      })
    : [];

  // Household data
  const householdTrend = (sg6.household_trend ?? []) as TableRow[];

  return (
    <>
      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <KpiCard
          label="총 인구"
          value={safeStr(sg4.total_population ?? sg4.resident_total)}
          sub="거주인구 기준"
        />
        <KpiCard
          label="세대수"
          value={safeStr(sg6.total_households ?? sg6.household_count)}
          sub="행정동 기준"
        />
        <KpiCard
          label="핵심 고객층"
          value={safeStr(sg7.core_customer ?? sg7.customer_type)}
        />
        <KpiCard
          label="주거 비율"
          value={safeStr(sg6.residential_ratio)}
          sub="아파트+주택"
        />
        <KpiCard
          label="평균 연령"
          value={safeStr(sg4.avg_age)}
        />
      </div>

      {/* Age Distribution Chart */}
      {ageChartData.length > 0 && (
        <SectionCard title="연령대 분포">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={ageChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              {Object.keys(ageChartData[0])
                .filter((k) => k !== "name")
                .map((key, idx) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    fill={CHART_COLORS[idx % CHART_COLORS.length]}
                    radius={[4, 4, 0, 0]}
                  />
                ))}
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* Household Trend Table */}
      {householdTrend.length > 0 && (
        <SectionCard title="행정단위별 비교">
          <DataTable data={householdTrend} />
        </SectionCard>
      )}

      {/* Key summary stats */}
      <SectionCard title="핵심 지표 요약">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard label="업소 수" value={safeStr(sg1.store_count)} change={safeStr(sg1.store_change_rate, undefined)} />
          <KpiCard label="월 평균 매출" value={safeStr(sg1.avg_monthly_sales)} change={safeStr(sg1.sales_change_rate, undefined)} />
          <KpiCard label="남성 평균소득" value={safeStr(sg7.male_avg_income)} />
          <KpiCard label="여성 평균소득" value={safeStr(sg7.female_avg_income)} />
        </div>
      </SectionCard>

      {/* AI Insight */}
      <InsightBox text={ai.insights?.overview ?? ai.summary} />
    </>
  );
}

/* ──────────────────────────────────────────────
   Tab 2: Industry (업종 현황)
   ────────────────────────────────────────────── */

function IndustryTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis }) {
  const sg1 = (sbiz.sg1 ?? {}) as Record<string, unknown>;
  const sg2 = (sbiz.sg2 ?? {}) as Record<string, unknown>;
  const monthlyStores = (sg2.monthly_stores ?? []) as TableRow[];

  // Chart data from monthly stores
  const storeChartData = monthlyStores.map((row) => {
    const keys = Object.keys(row);
    return {
      name: row[keys[0]] || "",
      value: parseNum(row[keys[1]]),
    };
  });

  // Find top 5 by sales growth if available
  const salesRanking = (sg2.sales_ranking ?? sg2.top_sales ?? []) as TableRow[];

  return (
    <>
      {/* KPI */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="점포수" value={safeStr(sg1.store_count)} change={safeStr(sg1.store_change_rate, undefined)} />
        <KpiCard label="치과 수" value={safeStr(sg1.dental_count ?? sg1.area_store_count)} />
        <KpiCard label="업종 비율" value={safeStr(sg1.industry_ratio ?? sg1.store_ratio)} />
        <KpiCard label="트렌드" value={safeStr(sg1.trend ?? sg1.store_trend)} />
      </div>

      {/* Top 5 Sales Ranking */}
      {salesRanking.length > 0 && (
        <SectionCard title="매출증가 TOP5 랭킹">
          <DataTable data={salesRanking.slice(0, 5)} />
        </SectionCard>
      )}

      {/* Store Trend Chart */}
      {storeChartData.length > 0 && (
        <SectionCard title="점포수 추이">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={storeChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8EC31F"
                strokeWidth={2}
                dot={{ r: 4, fill: "#8EC31F" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* Monthly stores table */}
      {monthlyStores.length > 0 && (
        <SectionCard title="월별 업소 수 상세">
          <DataTable data={monthlyStores} />
        </SectionCard>
      )}

      <InsightBox text={ai.insights?.industry} />
    </>
  );
}

/* ──────────────────────────────────────────────
   Tab 3: Sales (매출 현황)
   ────────────────────────────────────────────── */

function SalesTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis }) {
  const sg1 = (sbiz.sg1 ?? {}) as Record<string, unknown>;
  const sg3 = (sbiz.sg3 ?? {}) as Record<string, unknown>;

  const monthlySales = (sg3.monthly_sales ?? []) as TableRow[];
  const monthlyCount = (sg3.monthly_count ?? []) as TableRow[];

  // Chart: market size trend
  const salesChartData = monthlySales.map((row) => {
    const keys = Object.keys(row);
    return {
      name: row[keys[0]] || "",
      value: parseNum(row[keys[1]]),
    };
  });

  const countChartData = monthlyCount.map((row) => {
    const keys = Object.keys(row);
    return {
      name: row[keys[0]] || "",
      value: parseNum(row[keys[1]]),
    };
  });

  if (Object.keys(sg3).length === 0) {
    return <EmptyState message="매출 데이터가 없습니다." />;
  }

  return (
    <>
      {/* KPI */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="시장규모" value={safeStr(sg1.market_size ?? sg1.avg_monthly_sales)} change={safeStr(sg1.sales_change_rate, undefined)} />
        <KpiCard label="평균매출" value={safeStr(sg1.avg_monthly_sales)} change={safeStr(sg1.area_avg_monthly_sales, undefined)} sub="상권 평균" />
        <KpiCard label="결제단가" value={safeStr(sg1.avg_payment ?? sg3.avg_payment)} />
        <KpiCard label="이용건수" value={safeStr(sg1.usage_count ?? sg3.total_count)} />
      </div>

      {/* Sales Trend Chart */}
      {salesChartData.length > 0 && (
        <SectionCard title="시장규모 추이">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={salesChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="value" fill="#8EC31F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* Monthly Count Chart */}
      {countChartData.length > 0 && (
        <SectionCard title="매출 추이">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={countChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#4A9FFF" strokeWidth={2} dot={{ r: 4, fill: "#4A9FFF" }} />
            </LineChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* Tables */}
      {monthlySales.length > 0 && (
        <SectionCard title="월별 매출 상세">
          <DataTable data={monthlySales} />
        </SectionCard>
      )}

      <InsightBox text={ai.insights?.sales} />
    </>
  );
}

/* ──────────────────────────────────────────────
   Tab 4: Customer (고객 분석)
   ────────────────────────────────────────────── */

function CustomerTab({ sbiz, ai }: { sbiz: Record<string, unknown>; ai: AiAnalysis }) {
  const sg3 = (sbiz.sg3 ?? {}) as Record<string, unknown>;
  const sg7 = (sbiz.sg7 ?? {}) as Record<string, unknown>;

  const genderAgeSales = (sg3.gender_age_sales ?? []) as TableRow[];
  const dayOfWeek = (sg3.day_of_week ?? []) as TableRow[];
  const timeOfDay = (sg3.time_of_day ?? []) as TableRow[];

  // Determine top customer info from sg7
  const coreCustomer1 = safeStr(sg7.core_customer_1 ?? sg7.core_customer);
  const coreCustomer2 = safeStr(sg7.core_customer_2);
  const peakDay = safeStr(sg7.peak_day ?? sg3.peak_day);
  const peakTime = safeStr(sg7.peak_time ?? sg3.peak_time);

  // Gender/Age chart
  const genderAgeChartData = genderAgeSales.map((row) => {
    const keys = Object.keys(row);
    const result: Record<string, unknown> = { name: row[keys[0]] || "" };
    keys.slice(1).forEach((k) => {
      result[k] = parseNum(row[k]);
    });
    return result;
  });

  // Day of week chart
  const dayChartData = dayOfWeek.map((row) => {
    const keys = Object.keys(row);
    return {
      name: row[keys[0]] || "",
      value: parseNum(row[keys[1]]),
    };
  });

  // Time of day chart
  const timeChartData = timeOfDay.map((row) => {
    const keys = Object.keys(row);
    return {
      name: row[keys[0]] || "",
      value: parseNum(row[keys[1]]),
    };
  });

  return (
    <>
      {/* KPI */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="1순위 고객" value={coreCustomer1} />
        <KpiCard label="2순위 고객" value={coreCustomer2} />
        <KpiCard label="집중 요일" value={peakDay} />
        <KpiCard label="집중 시간" value={peakTime} />
      </div>

      {/* Gender/Age Chart */}
      {genderAgeChartData.length > 0 && (
        <SectionCard title="성별/연령별 매출">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={genderAgeChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Legend />
              {Object.keys(genderAgeChartData[0])
                .filter((k) => k !== "name")
                .map((key, idx) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    fill={CHART_COLORS[idx % CHART_COLORS.length]}
                    radius={[4, 4, 0, 0]}
                  />
                ))}
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* Day of Week Chart */}
      {dayChartData.length > 0 && (
        <SectionCard title="요일별 매출">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={dayChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="value" fill="#4A9FFF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* Time of Day Chart */}
      {timeChartData.length > 0 && (
        <SectionCard title="시간대별 매출">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={timeChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="value" fill="#A78BFA" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      )}

      {/* Gender Age Table */}
      {genderAgeSales.length > 0 && (
        <SectionCard title="성별/연령별 상세">
          <DataTable data={genderAgeSales} />
        </SectionCard>
      )}

      <InsightBox text={ai.insights?.customer} />
    </>
  );
}

/* ──────────────────────────────────────────────
   Tab 8: STP Strategy (유료)
   ────────────────────────────────────────────── */

function StpTab({ ai }: { ai: AiAnalysis }) {
  const stp = ai.stp;
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

function SwotTab({ ai }: { ai: AiAnalysis }) {
  const swot = ai.swot;
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

function GoldenSignalTab({ ai }: { ai: AiAnalysis }) {
  const signals = ai.golden_signals;
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
