"use client";

import { useState, useEffect } from "react";
import { CommentPanel } from "./CommentPanel";
import { contentData } from "./content-data";

interface ReviewContentProps {
  activeTab: string;
  authorName: string;
}

interface CommentCount {
  section_id: string;
  count: number;
}

export function ReviewContent({ activeTab, authorName }: ReviewContentProps) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({});

  // 전체 코멘트 수 로드
  useEffect(() => {
    fetchAllCounts();
  }, []);

  const fetchAllCounts = async () => {
    try {
      const res = await fetch("/api/review-comments");
      const data = await res.json();
      if (Array.isArray(data)) {
        const counts: Record<string, number> = {};
        for (const c of data) {
          if (!c.resolved) {
            counts[c.section_id] = (counts[c.section_id] || 0) + 1;
          }
        }
        setCommentCounts(counts);
      }
    } catch {
      // 무시
    }
  };

  const sections = contentData[activeTab] || [];

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* 본문 영역 */}
      <div className="flex-1 overflow-y-auto px-8 py-10 max-w-4xl mx-auto">
        {sections.length === 0 ? (
          <div className="text-center py-20 text-[#555]">
            <p className="text-lg">콘텐츠 준비 중</p>
            <p className="text-sm mt-2">이 섹션은 곧 업로드됩니다.</p>
          </div>
        ) : (
          sections.map((section) => (
            <div
              key={section.id}
              className="group relative mb-8"
            >
              {/* 코멘트 트리거 버튼 */}
              <button
                onClick={() =>
                  setActiveSectionId(
                    activeSectionId === section.id ? null : section.id
                  )
                }
                className={`absolute -right-12 top-1 w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                  activeSectionId === section.id
                    ? "bg-[#D4567A] text-white"
                    : commentCounts[section.id]
                    ? "bg-[#D4567A]/20 text-[#D4567A]"
                    : "bg-transparent text-[#333] group-hover:text-[#666] group-hover:bg-[#1a1a1a]"
                }`}
                title="코멘트"
              >
                {commentCounts[section.id] ? (
                  commentCounts[section.id]
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                )}
              </button>

              {/* 콘텐츠 렌더링 */}
              <div
                className={`transition-colors rounded-lg px-4 py-2 -mx-4 ${
                  activeSectionId === section.id ? "bg-[#D4567A]/5" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: section.html }}
              />
            </div>
          ))
        )}
      </div>

      {/* 코멘트 패널 */}
      {activeSectionId && (
        <CommentPanel
          sectionId={activeSectionId}
          authorName={authorName}
          isOpen={!!activeSectionId}
          onClose={() => {
            setActiveSectionId(null);
            fetchAllCounts();
          }}
        />
      )}
    </div>
  );
}
