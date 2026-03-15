"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const supabase = createClient();

    const { error } = await supabase.from("inquiries").insert({
      name: form.get("name") as string,
      phone: form.get("phone") as string,
      email: form.get("email") as string,
      clinic_name: form.get("clinic_name") as string,
      type: form.get("type") as string || "general",
      message: form.get("message") as string,
    });

    setLoading(false);

    if (!error) {
      setSuccess(true);
    } else {
      alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  }

  if (success) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime-safe/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8EC31F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-text-primary">상담 신청이 완료되었습니다</h1>
          <p className="mt-2 text-text-muted">빠른 시일 내에 연락드리겠습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">Contact</p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">상담 신청</h1>
          <p className="mt-3 text-text-muted">미용치과 도입에 관한 궁금한 점을 남겨주세요.</p>
        </div>

        <Card className="mt-10 border-border/50">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">이름 *</Label>
                  <Input id="name" name="name" required placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">연락처 *</Label>
                  <Input id="phone" name="phone" required placeholder="010-0000-0000" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" name="email" type="email" placeholder="example@clinic.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clinic_name">치과명</Label>
                  <Input id="clinic_name" name="clinic_name" placeholder="OO치과" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">문의 유형</Label>
                <Select name="type" defaultValue="general">
                  <SelectTrigger>
                    <SelectValue placeholder="문의 유형 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">일반 문의</SelectItem>
                    <SelectItem value="consulting">컨설팅</SelectItem>
                    <SelectItem value="education">교육/세미나</SelectItem>
                    <SelectItem value="global">해외환자유치</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">문의 내용 *</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="궁금하신 내용을 자유롭게 작성해주세요." />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full min-h-[48px] bg-brand-lime-safe py-3 text-base font-semibold text-white hover:bg-brand-lime-safe/90"
              >
                {loading ? "전송 중..." : "상담 신청하기"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
