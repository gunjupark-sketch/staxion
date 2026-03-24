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

  useEffect(() => {
    fetchAllCounts();
  }, []);

  // 탭 전환 시 패널 닫기
  useEffect(() => {
    setActiveSectionId(null);
  }, [activeTab]);

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
    <div className="flex flex-1 overflow-hidden relative">
      {/* 본문 영역 — A4 문서 스타일 */}
      <div className="flex-1 overflow-y-auto bg-[#eee] py-8">
        <div className="max-w-[210mm] mx-auto">
          {sections.length === 0 ? (
            <div className="bg-white shadow-md rounded px-16 py-20 text-center text-[#bbb]">
              <p className="text-lg">콘텐츠 준비 중</p>
              <p className="text-sm mt-2">이 섹션은 곧 업로드됩니다.</p>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded px-16 py-14 min-h-[297mm]">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`relative mb-8 cursor-pointer rounded-lg px-4 py-2 -mx-4 transition-colors ${
                    activeSectionId === section.id
                      ? "bg-[#C4929B]/5 ring-1 ring-[#C4929B]/20"
                      : "hover:bg-[#f9f5f6]"
                  }`}
                  onClick={() =>
                    setActiveSectionId(
                      activeSectionId === section.id ? null : section.id
                    )
                  }
                >
                  {/* 코멘트 카운트 뱃지 */}
                  {commentCounts[section.id] && (
                    <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#C4929B] text-white text-[10px] flex items-center justify-center">
                      {commentCounts[section.id]}
                    </span>
                  )}

                  {/* 콘텐츠 렌더링 */}
                  <div dangerouslySetInnerHTML={{ __html: section.html }} />
                </div>
              ))}
            </div>
          )}
        </div>
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
