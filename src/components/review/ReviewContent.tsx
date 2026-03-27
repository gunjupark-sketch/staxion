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

  // 편집 모드
  const [editMode, setEditMode] = useState(false);
  const [editedHtmlMap, setEditedHtmlMap] = useState<Record<string, string>>({});
  const [saveStatus, setSaveStatus] = useState<Record<string, "saving" | "saved" | "error">>({});
  const originalHtmlRef = useRef<Record<string, string>>({});

  // 저장된 편집 내용 로드
  useEffect(() => {
    fetchSavedEdits();
  }, []);

  const fetchSavedEdits = async () => {
    try {
      const res = await fetch("/api/review-content");
      const data = await res.json();
      if (data.edits && Object.keys(data.edits).length > 0) {
        setEditedHtmlMap(data.edits);
      }
    } catch {
      // 무시 — 원본 콘텐츠 사용
    }
  };

  useEffect(() => {
    fetchAllCounts();
  }, []);

  useEffect(() => {
    setActiveSectionId(null);
    setCurrentSpread(0);
  }, [activeTab]);

  // 섹션을 페이지 단위로 분할
  const sections = useMemo(() => {
    const baseSections = contentData[activeTab] || [];
    // 편집 내용 병합
    return baseSections.map((s) => ({
      ...s,
      html: editedHtmlMap[s.id] ?? s.html,
    }));
  }, [activeTab, editedHtmlMap]);

  useEffect(() => {
    if (sections.length === 0) {
      setPages([]);
      return;
    }
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

  // 편집 내용 저장
  const saveEdit = useCallback(async (sectionId: string, html: string) => {
    setSaveStatus((prev) => ({ ...prev, [sectionId]: "saving" }));
    try {
      const res = await fetch("/api/review-content", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section_id: sectionId,
          html,
          updated_by: authorName,
        }),
      });
      if (res.ok) {
        setEditedHtmlMap((prev) => ({ ...prev, [sectionId]: html }));
        setSaveStatus((prev) => ({ ...prev, [sectionId]: "saved" }));
        // 2초 후 상태 클리어
        setTimeout(() => {
          setSaveStatus((prev) => {
            const next = { ...prev };
            if (next[sectionId] === "saved") delete next[sectionId];
            return next;
          });
        }, 2000);
      } else {
        setSaveStatus((prev) => ({ ...prev, [sectionId]: "error" }));
      }
    } catch {
      setSaveStatus((prev) => ({ ...prev, [sectionId]: "error" }));
    }
  }, [authorName]);

  // blur 핸들러: 편집 내용이 변경되었으면 저장
  const handleBlur = useCallback(
    (sectionId: string, e: React.FocusEvent<HTMLDivElement>) => {
      const newHtml = e.currentTarget.innerHTML;
      const originalHtml = originalHtmlRef.current[sectionId];
      if (newHtml && newHtml !== originalHtml) {
        saveEdit(sectionId, newHtml);
      }
    },
    [saveEdit]
  );

  // focus 핸들러: 편집 시작 시 원본 저장
  const handleFocus = useCallback(
    (sectionId: string, e: React.FocusEvent<HTMLDivElement>) => {
      originalHtmlRef.current[sectionId] = e.currentTarget.innerHTML;
    },
    []
  );

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
      // 편집 모드에서는 키보드 네비게이션 비활성화
      if (editMode) return;
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
  }, [currentSpread, totalSpreads, editMode]);

  const handlePrint = () => {
    window.print();
  };

  const sectionMap = useMemo(() => {
    const map = new Map<string, (typeof sections)[0]>();
    for (const s of sections) map.set(s.id, s);
    return map;
  }, [sections]);

  // 섹션 클릭 핸들러
  const handleSectionClick = useCallback(
    (sectionId: string) => {
      // 편집 모드에서는 코멘트 패널 열지 않음
      if (editMode) return;
      setActiveSectionId(activeSectionId === sectionId ? null : sectionId);
    },
    [editMode, activeSectionId]
  );

  // 섹션 렌더링 헬퍼
  const renderSection = (section: { id: string; html: string }) => {
    const status = saveStatus[section.id];

    if (editMode) {
      return (
        <div
          key={section.id}
          className="relative mb-8 rounded-lg px-4 py-2 -mx-4 transition-colors border border-dashed border-[#C4929B]/30 hover:border-[#C4929B]/60"
        >
          {status && (
            <span
              className={`absolute -right-2 -top-2 px-2 py-0.5 rounded-full text-[10px] font-medium z-10 ${
                status === "saving"
                  ? "bg-yellow-100 text-yellow-700"
                  : status === "saved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status === "saving" ? "저장 중..." : status === "saved" ? "저장됨" : "오류"}
            </span>
          )}
          {commentCounts[section.id] && !status && (
            <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#C4929B] text-white text-[10px] flex items-center justify-center">
              {commentCounts[section.id]}
            </span>
          )}
          <div
            contentEditable
            suppressContentEditableWarning
            onFocus={(e) => handleFocus(section.id, e)}
            onBlur={(e) => handleBlur(section.id, e)}
            dangerouslySetInnerHTML={{ __html: section.html }}
            className="outline-none focus:ring-1 focus:ring-[#C4929B]/40 rounded"
          />
        </div>
      );
    }

    return (
      <div
        key={section.id}
        className={`relative mb-8 cursor-pointer rounded-lg px-4 py-2 -mx-4 transition-colors ${
          activeSectionId === section.id
            ? "bg-[#C4929B]/5 ring-1 ring-[#C4929B]/20"
            : "hover:bg-[#f9f5f6]"
        }`}
        onClick={() => handleSectionClick(section.id)}
      >
        {commentCounts[section.id] && (
          <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#C4929B] text-white text-[10px] flex items-center justify-center">
            {commentCounts[section.id]}
          </span>
        )}
        <div dangerouslySetInnerHTML={{ __html: section.html }} />
      </div>
    );
  };

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
          return renderSection(section);
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

              <div className="w-px h-5 bg-[#ccc] mx-1" />

              <button
                onClick={() => {
                  setEditMode(!editMode);
                  if (editMode) {
                    // 편집 모드 종료 시 코멘트 패널 닫기
                    setActiveSectionId(null);
                  }
                }}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  editMode
                    ? "bg-[#C4929B] text-white"
                    : "bg-white text-[#666] hover:bg-[#f0f0f0]"
                }`}
              >
                {editMode ? "✏️ 편집 모드 ON" : "✏️ 편집 모드"}
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
                    return renderSection(section);
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

        {/* 코멘트 패널 — 편집 모드가 아닐 때만 표시 */}
        {activeSectionId && !editMode && (
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
