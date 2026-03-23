"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { BarChart3, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";

interface AnalysisReport {
  id: string;
  address: string;
  sido: string | null;
  sgg: string | null;
  dong: string | null;
  status: string;
  created_at: string;
  completed_at: string | null;
}

const statusConfig: Record<string, { label: string; icon: typeof Clock; color: string }> = {
  pending: { label: "대기 중", icon: Clock, color: "text-warning" },
  processing: { label: "분석 중", icon: Loader2, color: "text-primary" },
  completed: { label: "완료", icon: CheckCircle, color: "text-success" },
  failed: { label: "실패", icon: XCircle, color: "text-danger" },
};

export default function AnalysisListPage() {
  const supabase = createClient();
  const [reports, setReports] = useState<AnalysisReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState<number>(0);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const [{ data: reportData }, { data: profile }] = await Promise.all([
        supabase
          .from("analysis_reports")
          .select("id, address, sido, sgg, dong, status, created_at, completed_at")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false }),
        supabase
          .from("profiles")
          .select("analysis_credits")
          .eq("id", user.id)
          .single(),
      ]);

      setReports(reportData || []);
      setCredits(profile?.analysis_credits ?? 0);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">상권분석 이력</h2>
          <p className="mt-1 text-sm text-text-muted">
            남은 분석 횟수: <span className="font-semibold text-primary">{credits}회</span>
          </p>
        </div>
        <Link
          href="/area-analysis"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <BarChart3 className="h-4 w-4" />
          새 분석
        </Link>
      </div>

      {reports.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <BarChart3 className="mx-auto h-12 w-12 text-text-muted/30" />
          <p className="mt-4 text-sm font-semibold text-foreground">분석 이력이 없습니다</p>
          <p className="mt-1 text-xs text-text-muted">권역분석 페이지에서 첫 분석을 시작해보세요.</p>
          <Link
            href="/area-analysis"
            className="mt-4 inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground hover:bg-primary/90"
          >
            분석하러 가기
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {reports.map((report) => {
            const config = statusConfig[report.status] || statusConfig.pending;
            const StatusIcon = config.icon;
            const isClickable = report.status === "completed";

            const card = (
              <div
                className={`rounded-xl border border-border bg-card p-4 sm:p-5 transition-colors ${isClickable ? "hover:border-primary/30 cursor-pointer" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-foreground truncate">
                      {report.address}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {report.sido && `${report.sido} ${report.sgg || ""} ${report.dong || ""}`}
                    </p>
                    <p className="mt-2 text-xs text-text-muted">
                      {new Date(report.created_at).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1.5 shrink-0 ${config.color}`}>
                    <StatusIcon className={`h-4 w-4 ${report.status === "processing" ? "animate-spin" : ""}`} />
                    <span className="text-xs font-semibold">{config.label}</span>
                  </div>
                </div>
              </div>
            );

            return isClickable ? (
              <Link key={report.id} href={`/mypage/analysis/${report.id}`}>
                {card}
              </Link>
            ) : (
              <div key={report.id}>{card}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
