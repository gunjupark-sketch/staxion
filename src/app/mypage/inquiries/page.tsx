"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";

interface Inquiry {
  id: string;
  name: string;
  type: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const typeLabel: Record<string, string> = {
  general: "일반 문의",
  consulting: "컨설팅",
  education: "교육",
  guidebook: "가이드북",
  waiting_room: "대기실",
  store: "스토어",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function MypageInquiriesPage() {
  const supabase = createClient();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInquiries() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user?.email) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("inquiries")
        .select("id, name, type, message, is_read, created_at")
        .eq("email", user.email)
        .order("created_at", { ascending: false });

      setInquiries(data || []);
      setLoading(false);
    }
    loadInquiries();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-text-primary">상담 내역</h2>

      {inquiries.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-[240px] flex-col items-center justify-center gap-3 py-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-surface-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-muted"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-secondary">
              상담 내역이 없습니다
            </p>
            <p className="text-xs text-text-muted">
              상담을 신청하시면 여기에서 확인할 수 있습니다
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id}>
              <CardContent className="pt-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={inquiry.is_read ? "secondary" : "default"}>
                        {inquiry.is_read ? "확인됨" : "대기중"}
                      </Badge>
                      <span className="text-xs text-text-muted">
                        {typeLabel[inquiry.type] || inquiry.type}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-sm text-text-secondary">
                      {inquiry.message}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-text-muted">
                    {formatDate(inquiry.created_at)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
