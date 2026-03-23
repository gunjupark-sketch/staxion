"use client";

import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import type { ReportData, AiAnalysis } from "./types";

export function TopBar({ report, ai }: { report: ReportData; ai: AiAnalysis | null }) {
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
