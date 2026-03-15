"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
  const [message, setMessage] = useState("");

  // TODO: Supabase에서 guestbook fetch + 작성 로직
  const entries = [
    { id: "1", name: "김O영 원장", content: "가이드북 정말 도움이 되었습니다. 감사합니다!", date: "2026-03-14" },
    { id: "2", name: "이O수 원장", content: "세미나 일정 더 자주 열어주세요!", date: "2026-03-12" },
    { id: "3", name: "박O진 원장", content: "컨설팅 받고 3개월 만에 매출 30% 올랐습니다.", date: "2026-03-10" },
  ];

  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">Community</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">커뮤니티</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">원장님들의 생각과 경험을 나눠주세요</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {/* 작성 폼 */}
          <Card className="mb-10 border-border/50">
            <CardContent className="p-6">
              <Textarea
                placeholder="방명록을 남겨주세요 (로그인 필요)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
              <div className="mt-3 flex justify-end">
                <Button className="min-h-[44px] bg-brand-lime-safe px-6 text-sm font-semibold text-white hover:bg-brand-lime-safe/90">
                  작성하기
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 목록 */}
          <div className="space-y-4">
            {entries.map((entry) => (
              <Card key={entry.id} className="border-border/50">
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed text-text-secondary">{entry.content}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-text-primary">{entry.name}</span>
                    <span className="text-xs text-text-muted">{entry.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
