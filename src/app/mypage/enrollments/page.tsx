"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

interface Enrollment {
  id: string;
  title: string;
  date: string; // ISO date
  time: string; // e.g. "14:00~17:00"
  location: string;
  status: "upcoming" | "completed" | "attended";
  type: "seminar" | "education";
}

export default function EnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "completed">("all");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return;

      const { data: rows } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", data.user.id)
        .order("date", { ascending: false });

      if (rows) {
        const now = new Date();
        const mapped: Enrollment[] = rows.map((r: Record<string, unknown>) => {
          const eventDate = new Date(r.date as string);
          const isPast = eventDate < now;
          return {
            id: r.id as string,
            title: r.title as string,
            date: r.date as string,
            time: r.time as string,
            location: r.location as string,
            status: isPast ? ((r.status as string) === "attended" ? "attended" : "completed") : "upcoming",
            type: (r.type as string) === "education" ? "education" : "seminar",
          };
        });
        setEnrollments(mapped);
      }
      setLoading(false);
    });
  }, []);

  const filtered = enrollments.filter((e) => {
    if (activeTab === "upcoming") return e.status === "upcoming";
    if (activeTab === "completed") return e.status === "completed" || e.status === "attended";
    return true;
  });

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };

  const getDday = (dateStr: string) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const target = new Date(dateStr);
    target.setHours(0, 0, 0, 0);
    const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "D-DAY";
    if (diff > 0) return `D-${diff}`;
    return null;
  };

  const handlePrintCertificate = (enrollment: Enrollment) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>수강 확인증 - ${enrollment.title}</title>
        <style>
          @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
          body { font-family: 'Pretendard', sans-serif; padding: 60px; max-width: 700px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 3px solid #82ff00; padding-bottom: 20px; margin-bottom: 40px; }
          .header h1 { font-size: 28px; color: #212121; margin: 0; }
          .header p { color: #666; margin-top: 8px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
          .info-table td { padding: 12px 16px; border-bottom: 1px solid #e0e0e0; }
          .info-table td:first-child { font-weight: 600; color: #333; width: 120px; background: #f9f9f9; }
          .stamp { text-align: center; margin-top: 60px; }
          .stamp p { color: #666; font-size: 14px; }
          .stamp .company { font-size: 18px; font-weight: 700; color: #212121; margin-top: 20px; }
          @media print { body { padding: 40px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>수강 확인증</h1>
          <p>Certificate of Completion</p>
        </div>
        <table class="info-table">
          <tr><td>교육명</td><td>${enrollment.title}</td></tr>
          <tr><td>교육일</td><td>${formatDate(enrollment.date)}</td></tr>
          <tr><td>시간</td><td>${enrollment.time}</td></tr>
          <tr><td>장소</td><td>${enrollment.location}</td></tr>
          <tr><td>이수 상태</td><td>${enrollment.status === "attended" ? "참가 완료" : "수강 완료"}</td></tr>
        </table>
        <div class="stamp">
          <p>위 교육을 이수하였음을 확인합니다.</p>
          <p class="company">(주)더스테이션</p>
          <p>${new Date().getFullYear()}.${String(new Date().getMonth() + 1).padStart(2, "0")}.${String(new Date().getDate()).padStart(2, "0")}</p>
        </div>
        <script>window.onload = () => window.print();</script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-text-primary">수강 이력</h2>
        <p className="mt-1 text-sm text-text-muted">
          세미나 및 교육 수강 내역을 확인할 수 있습니다.
        </p>
      </div>

      {/* 탭 필터 */}
      <div className="flex gap-2">
        {[
          { key: "all" as const, label: "전체" },
          { key: "upcoming" as const, label: "수강 예정" },
          { key: "completed" as const, label: "수강 완료" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors min-h-[44px]",
              activeTab === tab.key
                ? "bg-brand-lime-safe/10 text-brand-lime-text"
                : "text-text-secondary hover:bg-surface-secondary"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 목록 */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border-primary bg-surface-primary py-16">
          <div className="mb-3 text-4xl">📚</div>
          <p className="text-sm text-text-muted">
            {activeTab === "upcoming"
              ? "예정된 수강 내역이 없습니다."
              : activeTab === "completed"
                ? "완료된 수강 내역이 없습니다."
                : "수강 이력이 없습니다."}
          </p>
          <a
            href="/education"
            className="mt-4 rounded-lg bg-brand-lime-btn px-6 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90 min-h-[44px] flex items-center"
          >
            교육 프로그램 보기
          </a>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((enrollment) => {
            const dday = getDday(enrollment.date);
            const isPast = enrollment.status !== "upcoming";

            return (
              <div
                key={enrollment.id}
                className="rounded-2xl border border-border-primary bg-surface-primary p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    {/* 타입 뱃지 + D-day */}
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className={cn(
                          "rounded-md px-2 py-0.5 text-xs font-medium",
                          enrollment.type === "education"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        )}
                      >
                        {enrollment.type === "education" ? "교육" : "세미나"}
                      </span>
                      {!isPast && dday && (
                        <span className="rounded-md bg-brand-lime-safe/10 px-2 py-0.5 text-xs font-bold text-brand-lime-text">
                          {dday}
                        </span>
                      )}
                      {isPast && (
                        <span
                          className={cn(
                            "rounded-md px-2 py-0.5 text-xs font-medium",
                            enrollment.status === "attended"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          )}
                        >
                          {enrollment.status === "attended" ? "참가 완료" : "수강 완료"}
                        </span>
                      )}
                    </div>

                    {/* 제목 */}
                    <h3 className="text-base font-semibold text-text-primary">
                      {enrollment.title}
                    </h3>

                    {/* 정보 */}
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="size-3.5" />
                        {formatDate(enrollment.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="size-3.5" />
                        {enrollment.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="size-3.5" />
                        {enrollment.location}
                      </span>
                    </div>
                  </div>

                  {/* 수강 확인증 출력 버튼 (완료 시만) */}
                  {isPast && (
                    <button
                      onClick={() => handlePrintCertificate(enrollment)}
                      className="shrink-0 rounded-lg border border-border-primary px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary min-h-[44px]"
                    >
                      <span className="hidden sm:inline">수강 확인증 출력</span>
                      <span className="sm:hidden">확인증</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── 아이콘 컴포넌트 ── */

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 2v4" /><path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
