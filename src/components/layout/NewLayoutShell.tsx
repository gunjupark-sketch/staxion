"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NewHeader from "./NewHeader";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MobileBottomBar from "./MobileBottomBar";
import { X } from "lucide-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  showRightSidebar?: boolean;
}

export default function NewLayoutShell({ children, showRightSidebar = false }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // 라우트 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // 모바일 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-surface">
      {/* 헤더 */}
      <NewHeader onMenuToggle={() => setSidebarOpen(true)} />

      {/* 모바일 풀스크린 메뉴 */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-card lg:hidden">
          {/* 상단 바 */}
          <div className="flex h-14 items-center justify-between px-5 border-b border-border">
            <span className="text-lg font-bold text-foreground">메뉴</span>
            <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-2 hover:bg-secondary">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 프로필 — TODO: 실제 유저 정보 연결 */}
          <div className="mx-5 mt-5 mb-4 flex items-center gap-3 rounded-xl p-4 bg-surface">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-border">
              <span className="text-lg">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-base font-bold text-foreground">회원</p>
              <p className="text-[12px] text-text-muted">로그인 후 이용해주세요</p>
            </div>
            <Link href="/mypage" onClick={() => setSidebarOpen(false)}
              className="rounded-lg px-3 py-1.5 text-xs font-semibold bg-brand-neon text-foreground">
              마이페이지
            </Link>
          </div>

          {/* 검색 */}
          <div className="mx-5 mb-4">
            <div className="flex items-center gap-2 rounded-xl px-4 py-3 bg-surface">
              <span className="text-sm text-text-placeholder">🔍 검색어를 입력하세요</span>
            </div>
          </div>

          {/* 메뉴 */}
          <div className="flex-1 overflow-y-auto px-5">
            <LeftSidebar className="block" />
          </div>

          {/* 하단 */}
          <div className="px-5 py-4 border-t border-border">
            <Link href="/login" onClick={() => setSidebarOpen(false)}
              className="block mb-3 text-sm text-text-muted">
              로그인 / 로그아웃
            </Link>
            <div className="flex gap-3">
              {[
                { label: "이용약관", href: "/terms" },
                { label: "개인정보처리방침", href: "/privacy" },
                { label: "1:1 문의", href: "/contact" },
              ].map(l => (
                <Link key={l.label} href={l.href} onClick={() => setSidebarOpen(false)}
                  className="text-[10px] text-text-muted">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3단 레이아웃 */}
      <div className="mx-auto flex" style={{ maxWidth: 1920 }}>
        {/* 좌측 사이드바 (데스크톱) */}
        <aside className="hidden lg:block w-[220px] shrink-0 border-r border-border bg-card" style={{ minHeight: "calc(100vh - 76px)" }}>
          <div className="sticky top-[76px] flex flex-col overflow-y-auto p-4" style={{ height: "calc(100vh - 76px)" }}>
            <LeftSidebar />
          </div>
        </aside>

        {/* 중앙 메인 */}
        <main className="min-w-0 flex-1 p-5 pb-24 md:pb-5">
          {children}
        </main>

        {/* 우측 사이드바 (데스크톱, 홈페이지만) */}
        {showRightSidebar && (
          <aside className="hidden xl:block w-[280px] shrink-0 bg-card border-l border-border" style={{ minHeight: "calc(100vh - 76px)" }}>
            <div className="sticky top-[76px] overflow-y-auto p-4" style={{ maxHeight: "calc(100vh - 76px)" }}>
              <RightSidebar />
            </div>
          </aside>
        )}
      </div>

      {/* 모바일 하단 탭바 + FAB */}
      <MobileBottomBar />
    </div>
  );
}
