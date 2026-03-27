"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { CommentPanel } from "./CommentPanel";
import { contentData } from "./content-data";

// ─── 플로팅 서식 툴바 ───
function FormatToolbar() {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());

  useEffect(() => {
    const updateToolbar = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) {
        setPos(null);
        return;
      }
      const anchor = sel.anchorNode?.parentElement?.closest("[contenteditable]");
      if (!anchor) { setPos(null); return; }
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width === 0) { setPos(null); return; }

      const formats = new Set<string>();
      if (document.queryCommandState("bold")) formats.add("bold");
      if (document.queryCommandState("italic")) formats.add("italic");
      if (document.queryCommandState("underline")) formats.add("underline");
      setActiveFormats(formats);
      setPos({ top: rect.top + window.scrollY - 48, left: rect.left + window.scrollX + rect.width / 2 });
    };
    document.addEventListener("selectionchange", updateToolbar);
    return () => document.removeEventListener("selectionchange", updateToolbar);
  }, []);

  const exec = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    const formats = new Set<string>();
    if (document.queryCommandState("bold")) formats.add("bold");
    if (document.queryCommandState("italic")) formats.add("italic");
    if (document.queryCommandState("underline")) formats.add("underline");
    setActiveFormats(formats);
  };

  if (!pos) return null;

  const btnBase = "w-8 h-8 flex items-center justify-center rounded text-sm transition-colors";
  const btnActive = "bg-[#C4929B] text-white";
  const btnNormal = "text-[#555] hover:bg-[#f0f0f0]";

  return (
    <div
      className="fixed z-50 flex items-center gap-0.5 bg-white rounded-lg shadow-lg border border-[#ddd] px-1 py-1"
      style={{ top: pos.top, left: pos.left, transform: "translateX(-50%)" }}
      onMouseDown={(e) => {
        const tag = (e.target as HTMLElement).tagName;
        if (tag !== "SELECT" && tag !== "OPTION") e.preventDefault();
      }}
    >
      <select className="h-8 text-xs border-none bg-transparent text-[#555] focus:outline-none cursor-pointer px-1" onChange={(e) => { exec("fontSize", e.target.value); e.target.value = ""; }} defaultValue="">
        <option value="" disabled>크기</option>
        <option value="1">아주 작게</option><option value="2">작게</option><option value="3">보통</option>
        <option value="4">크게</option><option value="5">아주 크게</option><option value="6">매우 크게</option><option value="7">최대</option>
      </select>
      <div className="w-px h-5 bg-[#ddd] mx-0.5" />
      <select className="h-8 text-xs border-none bg-transparent text-[#555] focus:outline-none cursor-pointer px-1" onChange={(e) => { exec("formatBlock", e.target.value); e.target.value = ""; }} defaultValue="">
        <option value="" disabled>스타일</option>
        <option value="h1">제목 1</option><option value="h2">제목 2</option><option value="h3">제목 3</option><option value="h4">제목 4</option><option value="p">본문</option>
      </select>
      <div className="w-px h-5 bg-[#ddd] mx-0.5" />
      <button className={`${btnBase} font-bold ${activeFormats.has("bold") ? btnActive : btnNormal}`} onClick={() => exec("bold")} title="굵게">B</button>
      <button className={`${btnBase} italic ${activeFormats.has("italic") ? btnActive : btnNormal}`} onClick={() => exec("italic")} title="기울임">I</button>
      <button className={`${btnBase} underline ${activeFormats.has("underline") ? btnActive : btnNormal}`} onClick={() => exec("underline")} title="밑줄">U</button>
      <div className="w-px h-5 bg-[#ddd] mx-0.5" />
      <label className={`${btnBase} ${btnNormal} cursor-pointer relative`} title="글자 색">
        <span className="text-base">A</span>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#C4929B] rounded-full" />
        <input type="color" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" onChange={(e) => exec("foreColor", e.target.value)} />
      </label>
      <label className={`${btnBase} ${btnNormal} cursor-pointer relative`} title="배경 색">
        <span className="text-base bg-yellow-200 px-1 rounded">A</span>
        <input type="color" defaultValue="#FFFF00" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" onChange={(e) => exec("hiliteColor", e.target.value)} />
      </label>
      <div className="w-px h-5 bg-[#ddd] mx-0.5" />
      <button className={`${btnBase} ${btnNormal}`} onClick={() => exec("removeFormat")} title="서식 제거"><span className="text-xs line-through">T</span></button>
    </div>
  );
}

// ─── 편집 가능한 섹션 (별도 컴포넌트로 분리 — key 안정성 보장) ───
function EditableSection({
  sectionId,
  html,
  onSave,
  commentCount,
}: {
  sectionId: string;
  html: string;
  onSave: (sectionId: string, html: string) => void;
  commentCount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const originalRef = useRef<string>("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  // 초기 HTML 설정 — 한 번만
  const initialHtml = useRef(html);

  const doSave = useCallback(() => {
    if (!ref.current) return;
    const newHtml = ref.current.innerHTML;
    if (newHtml === originalRef.current) return; // 변경 없음

    setStatus("saving");
    onSave(sectionId, newHtml);

    fetch("/api/review-content", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section_id: sectionId, html: newHtml, updated_by: "editor" }),
    }).then((res) => {
      if (res.ok) {
        setStatus("saved");
        originalRef.current = newHtml;
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        setStatus("error");
      }
    }).catch(() => setStatus("error"));
  }, [sectionId, onSave]);

  return (
    <div className="relative mb-8 rounded-lg px-4 py-2 -mx-4 border border-dashed border-[#C4929B]/30 hover:border-[#C4929B]/60">
      {status !== "idle" && (
        <span className={`absolute -right-2 -top-2 px-2 py-0.5 rounded-full text-[10px] font-medium z-10 ${
          status === "saving" ? "bg-yellow-100 text-yellow-700"
            : status === "saved" ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}>
          {status === "saving" ? "저장 중..." : status === "saved" ? "저장됨" : "오류"}
        </span>
      )}
      {commentCount && status === "idle" && (
        <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#C4929B] text-white text-[10px] flex items-center justify-center">
          {commentCount}
        </span>
      )}
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onFocus={() => { originalRef.current = ref.current?.innerHTML || ""; }}
        onBlur={doSave}
        dangerouslySetInnerHTML={{ __html: initialHtml.current }}
        className="outline-none focus:ring-1 focus:ring-[#C4929B]/40 rounded"
      />
    </div>
  );
}

interface ReviewContentProps {
  activeTab: string;
  authorName: string;
}

const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;
const PAGE_PADDING_X = 80;
const PAGE_PADDING_Y = 60;

export function ReviewContent({ activeTab, authorName }: ReviewContentProps) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({});
  const [pages, setPages] = useState<string[][]>([]);
  const [currentSpread, setCurrentSpread] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"spread" | "scroll">("spread");
  const [editMode, setEditMode] = useState(false);
  const [editedHtmlMap, setEditedHtmlMap] = useState<Record<string, string>>({});

  // 저장된 편집 내용 로드
  useEffect(() => {
    fetch("/api/review-content").then(r => r.json()).then(data => {
      if (data.edits && Object.keys(data.edits).length > 0) {
        setEditedHtmlMap(data.edits);
      }
    }).catch(() => {});
  }, []);

  useEffect(() => { fetchAllCounts(); }, []);
  useEffect(() => { setActiveSectionId(null); setCurrentSpread(0); }, [activeTab]);

  const sections = useMemo(() => {
    const baseSections = contentData[activeTab] || [];
    return baseSections.map((s) => ({
      ...s,
      html: editedHtmlMap[s.id] ?? s.html,
    }));
  }, [activeTab, editedHtmlMap]);

  useEffect(() => {
    if (sections.length === 0) { setPages([]); return; }
    paginateSections();
  }, [sections]);

  const paginateSections = useCallback(() => {
    if (!measureRef.current || sections.length === 0) return;
    const container = measureRef.current;
    const usableHeight = PAGE_HEIGHT - PAGE_PADDING_Y * 2;
    const result: string[][] = [];
    let currentPage: string[] = [];
    let currentHeight = 0;
    const measurer = document.createElement("div");
    measurer.style.cssText = `position:absolute;visibility:hidden;width:${PAGE_WIDTH - PAGE_PADDING_X * 2}px;font-family:inherit;line-height:inherit;`;
    container.appendChild(measurer);
    for (const section of sections) {
      measurer.innerHTML = section.html;
      const h = measurer.offsetHeight + 32;
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
          if (!c.resolved) counts[c.section_id] = (counts[c.section_id] || 0) + 1;
        }
        setCommentCounts(counts);
      }
    } catch {}
  };

  // 편집 저장 콜백 — editedHtmlMap도 업데이트 (리렌더링 안 됨 — EditableSection은 별도 컴포넌트)
  const handleEditSave = useCallback((sectionId: string, html: string) => {
    setEditedHtmlMap((prev) => ({ ...prev, [sectionId]: html }));
  }, []);

  const totalSpreads = Math.ceil(pages.length / 2);
  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = currentSpread * 2 + 1;
  const goNext = () => { if (currentSpread < totalSpreads - 1) setCurrentSpread((p) => p + 1); };
  const goPrev = () => { if (currentSpread > 0) setCurrentSpread((p) => p - 1); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (editMode) return;
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentSpread, totalSpreads, editMode]);

  const sectionMap = useMemo(() => {
    const map = new Map<string, (typeof sections)[0]>();
    for (const s of sections) map.set(s.id, s);
    return map;
  }, [sections]);

  const renderSection = (section: { id: string; html: string }) => {
    if (editMode) {
      return (
        <EditableSection
          key={section.id}
          sectionId={section.id}
          html={section.html}
          onSave={handleEditSave}
          commentCount={commentCounts[section.id]}
        />
      );
    }

    return (
      <div
        key={section.id}
        className={`relative mb-8 cursor-pointer rounded-lg px-4 py-2 -mx-4 transition-colors ${
          activeSectionId === section.id ? "bg-[#C4929B]/5 ring-1 ring-[#C4929B]/20" : "hover:bg-[#f9f5f6]"
        }`}
        onClick={() => !editMode && setActiveSectionId(activeSectionId === section.id ? null : section.id)}
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
      return (
        <div className={`book-page bg-white relative flex-shrink-0 ${side === "left" ? "book-page-left" : "book-page-right"}`}
          style={{ width: PAGE_WIDTH, minHeight: PAGE_HEIGHT, padding: `${PAGE_PADDING_Y}px ${PAGE_PADDING_X}px` }} />
      );
    }
    return (
      <div className={`book-page bg-white relative flex-shrink-0 ${side === "left" ? "book-page-left" : "book-page-right"}`}
        style={{ width: PAGE_WIDTH, minHeight: PAGE_HEIGHT, padding: `${PAGE_PADDING_Y}px ${PAGE_PADDING_X}px` }}>
        {pageSections.map((sectionId) => {
          const section = sectionMap.get(sectionId);
          if (!section) return null;
          return renderSection(section);
        })}
        <div className={`absolute bottom-6 text-xs text-[#bbb] ${side === "left" ? "left-10" : "right-10"}`}>{pageIndex + 1}</div>
      </div>
    );
  };

  return (
    <>
      <div ref={measureRef} className="absolute invisible" style={{ width: PAGE_WIDTH - PAGE_PADDING_X * 2 }} />

      <div className="flex flex-1 overflow-hidden relative">
        <div className="flex-1 overflow-y-auto bg-[#e5e5e5] relative">
          {/* 상단 컨트롤바 */}
          <div className="sticky top-0 z-30 bg-[#e5e5e5]/90 backdrop-blur-sm border-b border-[#ddd] px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setViewMode("spread")} className={`px-3 py-1.5 text-xs rounded-md transition-colors ${viewMode === "spread" ? "bg-[#1a1a1a] text-white" : "bg-white text-[#666] hover:bg-[#f0f0f0]"}`}>
                📖 펼침
              </button>
              <button onClick={() => setViewMode("scroll")} className={`px-3 py-1.5 text-xs rounded-md transition-colors ${viewMode === "scroll" ? "bg-[#1a1a1a] text-white" : "bg-white text-[#666] hover:bg-[#f0f0f0]"}`}>
                📜 스크롤
              </button>

              <div className="w-px h-5 bg-[#ccc] mx-1" />

              <button
                onClick={() => { setEditMode(!editMode); if (editMode) setActiveSectionId(null); }}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${editMode ? "bg-[#C4929B] text-white" : "bg-white text-[#666] hover:bg-[#f0f0f0]"}`}
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
                  <button onClick={goPrev} disabled={currentSpread === 0} className="w-8 h-8 rounded-md bg-white text-[#666] hover:bg-[#f0f0f0] disabled:opacity-30 flex items-center justify-center text-sm">←</button>
                  <button onClick={goNext} disabled={currentSpread >= totalSpreads - 1} className="w-8 h-8 rounded-md bg-white text-[#666] hover:bg-[#f0f0f0] disabled:opacity-30 flex items-center justify-center text-sm">→</button>
                </div>
              </div>
            )}

            <button onClick={() => window.print()} className="px-3 py-1.5 text-xs rounded-md bg-white text-[#666] hover:bg-[#f0f0f0] transition-colors">
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
            <div className="flex items-start justify-center py-8 px-4 gap-1 min-h-full">
              <div className="shadow-[−4px_4px_20px_rgba(0,0,0,0.1)] rounded-l-sm">{renderPage(leftPageIndex, "left")}</div>
              <div className="w-[2px] bg-gradient-to-b from-[#d0d0d0] via-[#bbb] to-[#d0d0d0] self-stretch rounded-full" style={{ minHeight: PAGE_HEIGHT }} />
              <div className="shadow-[4px_4px_20px_rgba(0,0,0,0.1)] rounded-r-sm">{renderPage(rightPageIndex, "right")}</div>
            </div>
          ) : (
            <div className="py-8">
              {pages.map((pageSections, idx) => (
                <div key={idx} className="mx-auto mb-8 bg-white shadow-md" style={{ width: PAGE_WIDTH, minHeight: PAGE_HEIGHT, padding: `${PAGE_PADDING_Y}px ${PAGE_PADDING_X}px`, position: "relative" }}>
                  {pageSections.map((sectionId) => {
                    const section = sectionMap.get(sectionId);
                    if (!section) return null;
                    return renderSection(section);
                  })}
                  <div className={`absolute bottom-6 ${idx % 2 === 0 ? "left-10" : "right-10"} text-xs text-[#bbb]`}>{idx + 1}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {editMode && <FormatToolbar />}

        {activeSectionId && !editMode && (
          <CommentPanel sectionId={activeSectionId} authorName={authorName} isOpen={!!activeSectionId} onClose={() => { setActiveSectionId(null); fetchAllCounts(); }} />
        )}
      </div>

      <style jsx global>{`
        @media print {
          header, .sticky, [class*="CommentPanel"] { display: none !important; }
          body { margin: 0; padding: 0; background: white !important; }
          .book-page { width: 210mm !important; min-height: 297mm !important; padding: 20mm 22mm !important; page-break-after: always; box-shadow: none !important; margin: 0 !important; }
          .book-page:last-child { page-break-after: avoid; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        @page { size: A4; margin: 0; }
      `}</style>
    </>
  );
}
