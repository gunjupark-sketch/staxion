"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  AlertCircle,
  Lock,
  Loader2,
  AlertTriangle,
  Clock,
} from "lucide-react";

import type { ReportData, AiAnalysis, TabKey } from "./types";
import { tabs } from "./types";
import { isLocalDataEmpty } from "./utils";
import { PlaceholderTab, PremiumLock } from "./SharedUI";
import { TopBar } from "./TopBar";
import { SummaryTab } from "./SummaryTab";
import { IndustryTab } from "./IndustryTab";
import { SalesTab } from "./SalesTab";
import { CustomerTab } from "./CustomerTab";
import { IssueTab } from "./IssueTab";
import { StpTab } from "./StpTab";
import { SwotTab } from "./SwotTab";
import { GoldenSignalTab } from "./GoldenTab";

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
        {activeTab === "overview" && <SummaryTab sbiz={sbiz} ai={ai} />}
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
