"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  UsersIcon,
  SearchIcon,
  CrownIcon,
  ExternalLinkIcon,
} from "lucide-react";

interface Subscription {
  id: string;
  user_id: string;
  status: string;
  waiting_room_code: string;
  current_period_start: string;
  current_period_end: string | null;
  created_at: string;
  profiles: { full_name: string | null; email: string | null; clinic_name: string | null } | null;
  subscription_plans: { name: string; slug: string; price: number } | null;
}

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  active: { label: "활성", color: "bg-green-50 text-green-600" },
  cancelled: { label: "해지", color: "bg-gray-100 text-gray-500" },
  expired: { label: "만료", color: "bg-red-50 text-red-500" },
  past_due: { label: "연체", color: "bg-amber-50 text-amber-600" },
};

export default function AdminSubscriptionsPage() {
  const supabase = createClient();
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const fetchSubs = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("subscriptions")
      .select(`
        id, user_id, status, waiting_room_code,
        current_period_start, current_period_end, created_at,
        profiles(full_name, email, clinic_name),
        subscription_plans(name, slug, price)
      `)
      .order("created_at", { ascending: false });
    setSubs((data as unknown as Subscription[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchSubs(); }, [fetchSubs]);

  const handleStatusChange = async (subId: string, newStatus: string) => {
    const { error } = await supabase
      .from("subscriptions")
      .update({
        status: newStatus,
        ...(newStatus === "cancelled" ? { cancelled_at: new Date().toISOString() } : {}),
      })
      .eq("id", subId);
    if (error) alert("상태 변경 실패: " + error.message);
    else fetchSubs();
  };

  const filtered = subs.filter((s) => {
    if (statusFilter !== "all" && s.status !== statusFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      const name = s.profiles?.full_name?.toLowerCase() || "";
      const email = s.profiles?.email?.toLowerCase() || "";
      const clinic = s.profiles?.clinic_name?.toLowerCase() || "";
      return name.includes(q) || email.includes(q) || clinic.includes(q);
    }
    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-text-primary">구독 관리</h2>
          <p className="mt-1 text-sm text-text-muted">대기실 구독 현황 및 관리</p>
        </div>
        <Badge variant="secondary" className="gap-1.5">
          <UsersIcon className="size-3.5" />
          {subs.filter((s) => s.status === "active").length}명 활성
        </Badge>
      </div>

      {/* 필터 */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="이름, 이메일, 치과명 검색"
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5">
          {["all", "active", "cancelled", "expired"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                statusFilter === s
                  ? "bg-surface-dark text-white"
                  : "bg-surface-secondary text-text-muted hover:text-text-primary"
              }`}
            >
              {s === "all" ? "전체" : STATUS_MAP[s]?.label || s}
            </button>
          ))}
        </div>
      </div>

      {/* 목록 */}
      {loading ? (
        <div className="mt-10 flex justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-10 text-center text-sm text-text-muted">
          {search || statusFilter !== "all" ? "검색 결과가 없습니다." : "구독자가 없습니다."}
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {filtered.map((sub) => {
            const st = STATUS_MAP[sub.status] || { label: sub.status, color: "bg-gray-100 text-gray-500" };
            return (
              <div
                key={sub.id}
                className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-dark">
                    <CrownIcon className="size-4 text-brand-lime" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-text-primary">
                        {sub.profiles?.clinic_name || sub.profiles?.full_name || "이름 없음"}
                      </p>
                      <Badge variant="secondary" className={st.color}>
                        {st.label}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {sub.subscription_plans?.name || "알 수 없음"}
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {sub.profiles?.email}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      코드: <span className="font-mono">{sub.waiting_room_code}</span>
                      {" · "}
                      시작: {new Date(sub.current_period_start).toLocaleDateString("ko-KR")}
                      {sub.current_period_end && (
                        <> · 만료: {new Date(sub.current_period_end).toLocaleDateString("ko-KR")}</>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/subscriptions/${sub.id}`}
                    className="inline-flex items-center gap-1 text-xs text-brand-lime-text hover:underline"
                  >
                    상세
                  </Link>
                  <Link
                    href={`/wr/${sub.waiting_room_code}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs text-text-muted hover:underline"
                  >
                    <ExternalLinkIcon className="size-3" /> 재생
                  </Link>
                  {sub.status === "active" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(sub.id, "cancelled")}
                      className="text-xs text-red-600 border-red-200 hover:bg-red-50"
                    >
                      해지
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(sub.id, "active")}
                      className="text-xs"
                    >
                      활성화
                    </Button>
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
