"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { CommentPanel } from "./CommentPanel";
import { contentData } from "./content-data";

interface ReviewContentProps {
  activeTab: string;
  authorName: string;
}

// A4 치수 (px 기준, 96dpi: 1mm ≈ 3.7795px)
const PAGE_WIDTH = 794; // 210mm
const PAGE_HEIGHT = 1123; // 297mm
const PAGE_PADDING_X = 80; // 좌우 패딩 (약 21mm)
const PAGE_PADDING_Y = 60; // 상하 패딩 (약 16mm)

export function ReviewContent({ activeTab, authorName }: ReviewContentProps) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({});
  const [pages, setPages] = useState<string[][]>([]);
  const [currentSpread, setCurrentSpread] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"spread" | "scroll">("spread");

  useEffect(() => {
    fetchAllCounts();
  }, []);

  useEffect(() => {
    setActiveSectionId(null);
    setCurrentSpread(0);
  }, [activeTab]);

  // 섹션을 페이지 단위로 분할
  const sections = useMemo(() => contentData[activeTab] || [], [activeTab]);

  useEffect(() => {
    if (sections.length === 0) {
      setPages([]);
      return;
    }
    // 각 섹션을 하나의 페이지 아이템으로 취급
    // 실제 높이 측정 후 페이지 분할
    paginateSections();
  }, [sections]);

  const paginateSections = useCallback(() => {
    if (!measureRef.current || sections.length === 0) return;

    const container = measureRef.current;
    const usableHeight = PAGE_HEIGHT - PAGE_PADDING_Y * 2;
    const result: string[][] = [];
    let currentPage: string[] = [];
    let currentHeight = 0;

    // 임시 측정 컨테이너
    const measurer = document.createElement("div");
    measurer.style.cssText = `
      position: absolute; visibility: hidden; width: ${PAGE_WIDTH - PAGE_PADDING_X * 2}px;
      font-family: inherit; line-height: inherit;
    `;
    container.appendChild(measurer);

    for (const section of sections) {
      measurer.innerHTML = section.html;
      const h = measurer.offsetHeight + 32; // 32px = mb-8 margin

      if (currentHeight + h > usableHeight && currentPage.length > 0) {
        result.push(currentPage);
        currentPage = [section.id];
        currentHeight = h;
      } else {
        currentPage.push(section.id);
        currentHeight += h;
      }
    }
    if (currentPage.length > 0) result.push(currentPage);

    container.removeChild(measurer);
    setPages(result);
  }, [sections]);

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

  const totalSpreads = Math.ceil(pages.length / 2);
  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = currentSpread * 2 + 1;

  const goNext = () => {
    if (currentSpread < totalSpreads - 1) setCurrentSpread((p) => p + 1);
  };
  const goPrev = () => {
    if (currentSpread > 0) setCurrentSpread((p) => p - 1);
  };

  // 키보드 네비게이션
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentSpread, totalSpreads]);

  const handlePrint = () => {
    window.print();
  };

  const sectionMap = useMemo(() => {
    const map = new Map<string, (typeof sections)[0]>();
    for (const s of sections) map.set(s.id, s);
    return map;
  }, [sections]);

  const renderPage = (pageIndex: number, side: "left" | "right") => {
    const pageSections = pages[pageIndex];
    if (!pageSections) {
      // 빈 페이지 (홀수 페이지 수일 때)
      return (
        <div
          className={`book-page bg-white relative flex-shrink-0 ${
            side === "left" ? "book-page-left" : "book-page-right"
          }`}
          style={{
            width: PAGE_WIDTH,
            minHeight: PAGE_HEIGHT,
            padding: `${PAGE_PADDING_Y}px ${PAGE_PADDING_X}px`,
          }}
        />
      );
    }

    return (
      <div
        className={`book-page bg-white relative flex-shrink-0 ${
          side === "left" ? "book-page-left" : "book-page-right"
        }`}
        style={{
          width: PAGE_WIDTH,
          minHeight: PAGE_HEIGHT,
          padding: `${PAGE_PADDING_Y}px ${PAGE_PADDING_X}px`,
        }}
      >
        {pageSections.map((sectionId) => {
          const section = sectionMap.get(sectionId);
          if (!section) return null;
          return (
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
              {commentCounts[section.id] && (
                <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#C4929B] text-white text-[10px] flex items-center justify-center">
                  {commentCounts[section.id]}
                </span>
              )}
              <div dangerouslySetInnerHTML={{ __html: section.html }} />
            </div>
          );
        })}
        {/* 페이지 번호 */}
        <div
          className={`absolute bottom-6 text-xs text-[#bbb] ${
            side === "left" ? "left-10" : "right-10"
          }`}
        >
          {pageIndex + 1}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 측정용 hidden div */}
      <div ref={measureRef} className="absolute invisible" style={{ width: PAGE_WIDTH - PAGE_PADDING_X * 2 }} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* 본문 영역 */}
        <div className="flex-1 overflow-y-auto bg-[#e5e5e5] relative">
          {/* 상단 컨트롤바 */}
          <div className="sticky top-0 z-30 bg-[#e5e5e5]/90 backdrop-blur-sm border-b border-[#ddd] px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode("spread")}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  viewMode === "spread"
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white text-[#666] hover:bg-[#f0f0f0]"
                }`}
              >
                📖 펼침
              </button>
              <button
                onClick={() => setViewMode("scroll")}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  viewMode === "scroll"
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white text-[#666] hover:bg-[#f0f0f0]"
                }`}
              >
                📜 스크롤
              </button>
            </div>

            {viewMode === "spread" && pages.length > 0 && (
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#888]">
                  {leftPageIndex + 1}–{Math.min(rightPageIndex + 1, pages.length)} / {pages.length}p
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={goPrev}
                    disabled={currentSpread === 0}
                    className="w-8 h-8 rounded-md bg-white text-[#666] hover:bg-[#f0f0f0] disabled:opacity-30 flex items-center justify-center text-sm"
                  >
                    ←
                  </button>
                  <button
                    onClick={goNext}
                    disabled={currentSpread >= totalSpreads - 1}
                    className="w-8 h-8 rounded-md bg-white text-[#666] hover:bg-[#f0f0f0] disabled:opacity-30 flex items-center justify-center text-sm"
                  >
                    →
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs rounded-md bg-white text-[#666] hover:bg-[#f0f0f0] transition-colors"
            >
              🖨️ PDF / 인쇄
            </button>
          </div>

          {sections.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="bg-white shadow-md rounded px-16 py-20 text-center text-[#bbb]">
                <p className="text-lg">콘텐츠 준비 중</p>
                <p className="text-sm mt-2">이 섹션은 곧 업로드됩니다.</p>
              </div>
            </div>
          ) : viewMode === "spread" ? (
            /* 펼침(Spread) 모드 — 책처럼 좌우 페이지 */
            <div className="flex items-start justify-center py-8 px-4 gap-1 min-h-full">
              {/* 왼쪽 페이지 */}
              <div className="shadow-[−4px_4px_20px_rgba(0,0,0,0.1)] rounded-l-sm">
                {renderPage(leftPageIndex, "left")}
              </div>
              {/* 가운데 접힘선 */}
              <div
                className="w-[2px] bg-gradient-to-b from-[#d0d0d0] via-[#bbb] to-[#d0d0d0] self-stretch rounded-full"
                style={{ minHeight: PAGE_HEIGHT }}
              />
              {/* 오른쪽 페이지 */}
              <div className="shadow-[4px_4px_20px_rgba(0,0,0,0.1)] rounded-r-sm">
                {renderPage(rightPageIndex, "right")}
              </div>
            </div>
          ) : (
            /* 스크롤 모드 — 기존과 유사한 단일 칼럼 */
            <div className="py-8">
              {pages.map((pageSections, idx) => (
                <div
                  key={idx}
                  className="mx-auto mb-8 bg-white shadow-md"
                  style={{
                    width: PAGE_WIDTH,
                    minHeight: PAGE_HEIGHT,
                    padding: `${PAGE_PADDING_Y}px ${PAGE_PADDING_X}px`,
                    position: "relative",
                  }}
                >
                  {pageSections.map((sectionId) => {
                    const section = sectionMap.get(sectionId);
                    if (!section) return null;
                    return (
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
                        {commentCounts[section.id] && (
                          <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#C4929B] text-white text-[10px] flex items-center justify-center">
                            {commentCounts[section.id]}
                          </span>
                        )}
                        <div dangerouslySetInnerHTML={{ __html: section.html }} />
                      </div>
                    );
                  })}
                  {/* 페이지 번호 */}
                  <div className={`absolute bottom-6 ${idx % 2 === 0 ? "left-10" : "right-10"} text-xs text-[#bbb]`}>
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
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

      {/* 인쇄용 스타일 */}
      <style jsx global>{`
        @media print {
          /* 헤더, 컨트롤바 숨김 */
          header, .sticky, [class*="CommentPanel"] { display: none !important; }

          body { margin: 0; padding: 0; background: white !important; }

          .book-page {
            width: 210mm !important;
            min-height: 297mm !important;
            padding: 20mm 22mm !important;
            page-break-after: always;
            box-shadow: none !important;
            margin: 0 !important;
          }

          .book-page:last-child { page-break-after: avoid; }

          /* 배경색 제거 */
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }

        @page {
          size: A4;
          margin: 0;
        }
      `}</style>
    </>
  );
}
