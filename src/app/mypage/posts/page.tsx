"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function MypagePostsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-text-primary">내가 쓴 글</h2>

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
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-text-secondary">
            아직 작성한 글이 없습니다
          </p>
          <p className="text-xs text-text-muted">
            커뮤니티에서 첫 글을 작성해보세요
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
