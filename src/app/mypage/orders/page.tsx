"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function MypageOrdersPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-text-primary">구매 내역</h2>

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
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <p className="text-sm font-medium text-text-secondary">
            구매 내역이 없습니다
          </p>
          <p className="text-xs text-text-muted">
            스토어에서 다양한 상품을 만나보세요
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
