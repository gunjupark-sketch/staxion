"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MypageWaitingRoomPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-text-primary">나의 대기실</h2>

      <Card>
        <CardContent className="flex min-h-[240px] flex-col items-center justify-center gap-4 py-12">
          <div className="flex size-16 items-center justify-center rounded-full bg-brand-lime-safe/10">
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
              className="text-brand-lime-text"
            >
              <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
              <polyline points="17 2 12 7 7 2" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-text-secondary">
              대기실 서비스 준비 중입니다
            </p>
            <p className="mt-1 text-xs text-text-muted">
              곧 만나보세요!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 서비스 소개 카드 */}
      <Card>
        <CardContent className="space-y-4 pt-2">
          <h3 className="text-base font-semibold text-text-primary">
            대기실 영상 서비스란?
          </h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <div className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-lime-safe/10 text-xs font-bold text-brand-lime-text">
                1
              </span>
              <p>치과 대기실에서 환자에게 보여줄 미용시술 안내 영상을 제공합니다.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-lime-safe/10 text-xs font-bold text-brand-lime-text">
                2
              </span>
              <p>시술별 맞춤 콘텐츠로 자연스러운 미용시술 안내가 가능합니다.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-lime-safe/10 text-xs font-bold text-brand-lime-text">
                3
              </span>
              <p>구독 기반으로 항상 최신 콘텐츠가 업데이트됩니다.</p>
            </div>
          </div>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="min-h-[44px] w-full bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90 sm:w-auto">
                상담 신청하기
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
