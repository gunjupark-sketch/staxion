"use client";

import { useState, useEffect } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Bell, User, Home, MessageSquare, ShoppingBag, Menu,
  BookOpen, GraduationCap, MapPin, Crosshair, Target, Megaphone,
  Phone, Plus, FileText, HelpCircle, Image, BarChart3,
  X, Play, PenSquare, ChevronDown, Palette, Tv, Handshake,
  Users, Headphones, Store,
} from "lucide-react";

/* ── 컬러 토큰 ── */
const C = {
  neon: "#BDFF06",
  neonHover: "#a8e600",
  salmon: "#FF6565",
  salmonLight: "#fff0f0",
  dark: "#1a1a2e",
  darkMid: "#2d2d44",
  darkLight: "#3a3a55",
  surface: "#f8f9ff",
  card: "#ffffff",
  border: "#e8eaed",
  borderLight: "#f5f5f5",
  textPrimary: "#1a1a2e",
  textBody: "#333340",
  textSecondary: "#666673",
  textMuted: "#8c8c99",
  textPlaceholder: "#9999a6",
};

/* ── 타입 ── */
type Category = "전체" | "자유게시판" | "시술 Q&A" | "케이스 공유" | "경영/마케팅";

interface Post {
  id: number;
  category: Category;
  title: string;
  author: string;
  time: string;
  likes: number;
  comments: number;
}

/* ── 사이드바 메뉴 구조 ── */

/* ── 더미 데이터 ── */
const CATEGORIES: Category[] = ["전체", "자유게시판", "시술 Q&A", "케이스 공유", "경영/마케팅"];

const POSTS_POPULAR: Post[] = [
  { id: 1, category: "케이스 공유", title: "보톡스 시술 후 브루징 최소화 팁 공유합니다", author: "닥터김", time: "3시간 전", likes: 45, comments: 22 },
  { id: 2, category: "경영/마케팅", title: "개원 3년차 매출 2배 만든 마케팅 전략", author: "원장A", time: "1일 전", likes: 41, comments: 23 },
  { id: 3, category: "케이스 공유", title: "실리프팅 전후 비교 케이스 — 40대 여성", author: "미소치과", time: "2일 전", likes: 38, comments: 19 },
  { id: 4, category: "시술 Q&A", title: "필러 합병증 대응 가이드 정리했습니다", author: "Dr.Park", time: "3일 전", likes: 35, comments: 15 },
  { id: 5, category: "경영/마케팅", title: "2026 미용시술 트렌드 분석 리포트", author: "운영팀", time: "4일 전", likes: 32, comments: 12 },
];

const POSTS_LATEST: Post[] = [
  { id: 6, category: "시술 Q&A", title: "필러 시술 시 혈관 회피 테크닉 질문드립니다", author: "신규회원", time: "15분 전", likes: 3, comments: 2 },
  { id: 7, category: "자유게시판", title: "요즘 보톡스 단가 어떻게 잡고 계신가요?", author: "강남이", time: "1시간 전", likes: 5, comments: 8 },
  { id: 8, category: "시술 Q&A", title: "입술 필러 시술 시 주의사항 공유 부탁드려요", author: "하늘치과", time: "2시간 전", likes: 4, comments: 6 },
  { id: 9, category: "케이스 공유", title: "스킨부스터 3회차 경과 보고합니다", author: "Dr.Lee", time: "3시간 전", likes: 8, comments: 4 },
  { id: 10, category: "자유게시판", title: "미용시술 가이드북 후기 — 솔직히 말합니다", author: "열공의사", time: "4시간 전", likes: 12, comments: 7 },
];

const POPULAR = [
  "보톡스 시술 후 브루징 최소화 팁",
  "개원 3년차 매출 2배 전략",
  "실리프팅 전후 비교 케이스",
  "필러 합병증 대응 가이드",
  "2026 미용시술 트렌드 분석",
];

const PRODUCTS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `상품 ${i + 1}`,
  image: `/images/product-${i + 1}.jpg`,
}));

/* ══════════════════════════════════════ */
export default function RedesignPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen" style={{ background: C.surface }}>

      {/* ════ 헤더 ════ */}
      <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: `1px solid ${C.border}` }}>
        <div className="flex h-[76px] items-center px-6">
          {/* 모바일 햄버거 */}
          <button className="mr-3 lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>

          {/* 로고 */}
          <div className="mr-6 flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-black" style={{ background: C.neon, color: C.dark }}>M</div>
              <div className="hidden sm:block">
                <span className="text-[11px] font-bold tracking-wider" style={{ color: C.salmon }}>MEDI</span>
                <br />
                <span className="text-base font-black tracking-tight" style={{ color: C.dark }}>STAXION</span>
              </div>
            </div>
          </div>

          {/* 공지사항 바 */}
          <div className="hidden md:flex items-center gap-2 rounded-lg px-4 py-2 flex-1 max-w-[607px]" style={{ background: C.card }}>
            <span className="shrink-0 text-sm font-medium" style={{ color: C.dark }}>공지사항 |</span>
            <span className="text-sm truncate" style={{ color: C.dark }}>메디스테이션 플랫폼 런칭</span>
          </div>

          {/* 우측 영역 */}
          <div className="ml-auto flex items-center gap-3">
            {/* 검색 */}
            <div className="hidden lg:flex items-center gap-2 rounded-lg px-4 py-2" style={{ background: C.card }}>
              <span style={{ color: C.textPlaceholder }} className="text-sm">🔍 검색어를 입력하세요</span>
            </div>

            {/* 알림 */}
            <button className="relative flex h-12 w-12 items-center justify-center rounded-full" style={{ border: `1px solid ${C.border}` }}>
              <Bell className="h-5 w-5" style={{ color: C.textSecondary }} />
              <span className="absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full text-[6px] font-black text-white" style={{ background: "#ff0000" }}>
              </span>
            </button>

            {/* 프로필 + 로그아웃 */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-12 w-12 rounded-full overflow-hidden" style={{ background: C.surface }}>
                <div className="h-full w-full flex items-center justify-center text-lg font-bold" style={{ color: C.textMuted }}>👤</div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight" style={{ color: C.textBody }}>박건주</span>
                <a href="#" className="text-[10px]" style={{ color: C.textMuted }}>로그아웃</a>
              </div>
            </div>

            {/* ON AIR */}
            <button className="group relative flex h-12 w-12 items-center justify-center rounded-full" style={{ background: C.dark, border: `1px solid ${C.border}` }}>
              <div className="text-center leading-tight">
                <div className="text-[10px] font-black" style={{ color: C.salmon }}>ON</div>
                <div className="text-[10px] font-black" style={{ color: C.salmon }}>AIR</div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: C.dark }}>
                대기실 영상 재생
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ════ 모바일 사이드바 오버레이 ════ */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden" style={{ top: 0 }}>
          {/* 상단 바 */}
          <div className="flex h-14 items-center justify-between px-5 border-b" style={{ borderColor: C.border }}>
            <span className="text-lg font-bold" style={{ color: C.dark }}>메뉴</span>
            <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-2 hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 프로필 */}
          <div className="mx-5 mt-5 mb-4 flex items-center gap-3 rounded-xl p-4" style={{ background: C.surface }}>
            <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: C.border }}>
              <span className="text-lg">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-base font-bold" style={{ color: C.dark }}>박건주</p>
              <p className="text-[12px]" style={{ color: C.textMuted }}>치과의사 · 미용시술 전문</p>
            </div>
            <a href="#" className="rounded-lg px-3 py-1.5 text-xs font-semibold" style={{ background: C.neon, color: C.dark }}>
              마이페이지
            </a>
          </div>

          {/* 검색 */}
          <div className="mx-5 mb-4">
            <div className="flex items-center gap-2 rounded-xl px-4 py-3" style={{ background: C.surface }}>
              <span className="text-sm" style={{ color: C.textPlaceholder }}>🔍 검색어를 입력하세요</span>
            </div>
          </div>

          {/* 메뉴 */}
          <div className="flex-1 overflow-y-auto px-5">
            <SidebarContent />
          </div>

          {/* 하단 */}
          <div className="px-5 py-4 border-t" style={{ borderColor: C.border }}>
            <a href="#" className="block mb-3 text-sm" style={{ color: C.textMuted }}>로그아웃</a>
            <div className="flex gap-3">
              {["이용약관", "개인정보처리방침", "1:1 문의"].map(l => (
                <a key={l} href="#" className="text-[10px]" style={{ color: C.textMuted }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ════ 3단 레이아웃 ════ */}
      <div className="mx-auto flex" style={{ maxWidth: 1920 }}>

        {/* ── 좌측 사이드바 (데스크톱) ── */}
        <aside className="hidden lg:block w-[220px] shrink-0 border-r bg-white" style={{ borderColor: C.border, minHeight: "calc(100vh - 76px)" }}>
          <div className="sticky top-[76px] flex flex-col overflow-y-auto p-4" style={{ height: "calc(100vh - 76px)" }}>
            <SidebarContent />
          </div>
        </aside>

        {/* ── 중앙 메인 ── */}
        <main className="min-w-0 flex-1 p-5 px-5">
          <div>

            {/* 히어로 배너 */}
            <div className="mb-5 overflow-hidden rounded-2xl relative" style={{ height: 420 }}>
              {/* 배경 이미지 (임시 그라데이션) */}
              <div className="absolute inset-0" style={{
                background: `linear-gradient(135deg, ${C.surface} 0%, #e8eaed 100%)`,
              }} />
              <div className="relative z-10 flex h-full items-center px-10">
                <div>
                  <h2 className="mb-2 text-[28px] font-bold leading-tight" style={{ color: C.textBody }}>
                    치과 미용시술의 새로운 기준
                  </h2>
                  <p className="mb-5 text-base" style={{ color: C.dark }}>
                    보톡스·필러·실리프팅 전문가 커뮤니티
                  </p>
                  <button className="rounded-lg px-6 py-3 text-sm font-bold transition-all duration-200 hover:brightness-110 hover:shadow-md hover:-translate-y-0.5" style={{ background: C.neon, color: C.dark }}>
                    가이드북 보기 →
                  </button>
                </div>
              </div>
            </div>

            {/* 2단 프로모 배너 */}
            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* 가이드북 프로모 */}
              <a href="#" className="group relative overflow-hidden rounded-xl p-6 transition-all hover:shadow-lg" style={{ background: C.dark, minHeight: 140 }}>
                <div className="relative z-10">
                  <span className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold mb-2" style={{ background: C.neon, color: C.dark }}>BEST</span>
                  <p className="text-lg font-bold text-white">미용시술 가이드북</p>
                  <p className="mt-1 text-xs text-white/50">치과의사를 위한 실전 매뉴얼 — 보톡스·필러·실리프팅</p>
                  <span className="mt-3 inline-block text-xs font-semibold" style={{ color: C.neon }}>자세히 보기 →</span>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl opacity-20 group-hover:opacity-30 transition-opacity">📖</div>
              </a>

              {/* 교육/세미나 프로모 */}
              <a href="#" className="group relative overflow-hidden rounded-xl p-6 transition-all hover:shadow-lg" style={{ background: `linear-gradient(135deg, ${C.darkMid}, ${C.darkLight})`, minHeight: 140 }}>
                <div className="relative z-10">
                  <span className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold mb-2" style={{ background: C.salmon, color: "#fff" }}>모집중</span>
                  <p className="text-lg font-bold text-white">보톡스 심화 과정</p>
                  <p className="mt-1 text-xs text-white/50">2026.04.05 · 서울 강남 · 선착순 20명</p>
                  <span className="mt-3 inline-block text-xs font-semibold" style={{ color: C.neon }}>신청하기 →</span>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl opacity-20 group-hover:opacity-30 transition-opacity">🎓</div>
              </a>
            </div>

            {/* 상품 카드 (가로 스크롤 — 한줄 유지, 스크롤바 숨김) */}
            <div className="mb-5 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <div className="flex gap-3">
                {PRODUCTS.map(product => (
                  <div key={product.id} className="shrink-0 flex-1 min-w-[120px] max-w-[180px] group cursor-pointer">
                    <div className="mb-2 aspect-square w-full rounded-xl overflow-hidden transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-md" style={{ background: `linear-gradient(135deg, #e2e4ea 0%, #d1d4dc 100%)` }}>
                      <div className="h-full w-full flex items-center justify-center text-xs font-medium" style={{ color: C.textMuted }}>
                        {product.name}
                      </div>
                    </div>
                    <p className="text-[13px] font-semibold" style={{ color: C.dark }}>{product.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 게시글 2단: 인기글 + 최신글 */}
            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 인기글 */}
              <div className="rounded-xl bg-white p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-base font-bold" style={{ color: C.dark }}>🔥 인기글</h3>
                  <a href="#" className="text-xs" style={{ color: C.textMuted }}>더보기 →</a>
                </div>
                <div className="space-y-3">
                  {POSTS_POPULAR.map((post, i) => (
                    <a key={post.id} href="#" className="flex items-start gap-3 group cursor-pointer rounded-lg px-2 py-1.5 -mx-2 transition-colors duration-150 hover:bg-gray-50">
                      <span className="mt-0.5 text-sm font-black shrink-0" style={{ color: i < 3 ? C.salmon : C.textMuted }}>{i + 1}</span>
                      <div className="min-w-0">
                        <p className="text-[14px] font-medium line-clamp-1 group-hover:underline" style={{ color: C.dark }}>{post.title}</p>
                        <p className="text-[11px] mt-0.5" style={{ color: C.textMuted }}>{post.category} · 👍 {post.likes}  💬 {post.comments}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* 최신글 */}
              <div className="rounded-xl bg-white p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-base font-bold" style={{ color: C.dark }}>🕐 최신글</h3>
                  <a href="#" className="text-xs" style={{ color: C.textMuted }}>더보기 →</a>
                </div>
                <div className="space-y-3">
                  {POSTS_LATEST.map((post, i) => (
                    <a key={post.id} href="#" className="flex items-start gap-3 group cursor-pointer rounded-lg px-2 py-1.5 -mx-2 transition-colors duration-150 hover:bg-gray-50">
                      <span className="mt-0.5 text-sm font-black shrink-0" style={{ color: C.textMuted }}>{i + 1}</span>
                      <div className="min-w-0">
                        <p className="text-[14px] font-medium line-clamp-1 group-hover:underline" style={{ color: C.dark }}>{post.title}</p>
                        <p className="text-[11px] mt-0.5" style={{ color: C.textMuted }}>{post.category} · {post.author} · {post.time}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Shorts 콘텐츠 (5개) */}
            <div className="mb-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-bold" style={{ color: C.dark }}>🎬 Shorts</h3>
                <a href="#" className="text-xs" style={{ color: C.textMuted }}>더보기 →</a>
              </div>
              <div className="overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex gap-3">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="shrink-0 flex-1 min-w-[170px] max-w-[240px] overflow-hidden rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{ background: `linear-gradient(160deg, #d1d4dc 0%, #b8bcc6 100%)` }}>
                      <div className="aspect-[2/3] flex items-end p-3">
                        <p className="text-xs font-semibold text-white drop-shadow">Shorts {i + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 메디포스트 (블로그형 아티클) */}
            <div className="mb-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-bold" style={{ color: C.dark }}>📝 메디포스트</h3>
                <a href="#" className="text-xs" style={{ color: C.textMuted }}>더보기 →</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "치과에서 보톡스, 왜 지금인가?", desc: "2016년 대법원 판결 이후 치과 미용시술 시장의 변화와 기회를 분석합니다.", author: "STAXION 에디터", time: "3일 전", readTime: "5분" },
                  { title: "필러 시술 전 반드시 알아야 할 해부학", desc: "안전한 필러 시술을 위한 안면 혈관 해부학 핵심 정리.", author: "Dr.Park", time: "5일 전", readTime: "8분" },
                  { title: "미용시술 매출, 구조가 답이다", desc: "단순 시술 추가가 아닌 경영 구조 설계로 접근하는 방법.", author: "원장A", time: "1주 전", readTime: "6분" },
                ].map(article => (
                  <a key={article.title} href="#" className="group rounded-xl bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                    <div className="mb-3 h-[120px] rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, #e2e4ea 0%, #d1d4dc 100%)` }}>
                      <span className="text-2xl">📄</span>
                    </div>
                    <h4 className="text-[14px] font-bold line-clamp-2 group-hover:underline mb-1" style={{ color: C.dark }}>{article.title}</h4>
                    <p className="text-[12px] line-clamp-2 mb-2" style={{ color: C.textMuted }}>{article.desc}</p>
                    <div className="flex items-center gap-2 text-[11px]" style={{ color: C.textMuted }}>
                      <span className="font-medium" style={{ color: C.textSecondary }}>{article.author}</span>
                      <span>·</span>
                      <span>{article.time}</span>
                      <span>·</span>
                      <span>읽기 {article.readTime}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 모바일 전용: 위젯 (피드 아래) */}
            <div className="mt-6 space-y-4 xl:hidden">
              <GuidebookWidget />
            </div>

            <div className="pb-20 md:pb-4" />
          </div>
        </main>

        {/* ── 우측 사이드바 (데스크톱) ── */}
        <aside className="hidden xl:block w-[280px] shrink-0 bg-white border-l" style={{ borderColor: C.border, minHeight: "calc(100vh - 76px)" }}>
          <div className="sticky top-[76px] overflow-y-auto p-4 space-y-4" style={{ maxHeight: "calc(100vh - 76px)" }}>

            {/* 미용치과 도입 원장 — 위로 슬라이드 */}
            <div className="rounded-xl p-4" style={{ border: `1px solid ${C.borderLight}` }}>
              <p className="mb-1 text-[13px] font-bold" style={{ color: C.dark }}>미용치과 도입 원장</p>
              <p className="mb-4 text-[11px]" style={{ color: C.textMuted }}>MEDI STAXION과 함께하는 치과</p>

              <div className="relative overflow-hidden" style={{ height: 360 }}>
                <div className="animate-slide-up space-y-3">
                  {[
                    { name: "미소플러스치과", location: "서울 강남", since: "2024" },
                    { name: "뉴스마일치과", location: "서울 서초", since: "2024" },
                    { name: "하늘치과의원", location: "경기 분당", since: "2025" },
                    { name: "예쁜미소치과", location: "서울 송파", since: "2025" },
                    { name: "더좋은치과", location: "인천 연수", since: "2025" },
                    { name: "강남밝은치과", location: "서울 강남", since: "2025" },
                    { name: "푸른하늘치과", location: "경기 수원", since: "2026" },
                    { name: "행복한치과", location: "서울 마포", since: "2026" },
                    { name: "미래치과의원", location: "대전 유성", since: "2026" },
                    { name: "연세밝은치과", location: "서울 영등포", since: "2026" },
                    { name: "미소플러스치과", location: "서울 강남", since: "2024" },
                    { name: "뉴스마일치과", location: "서울 서초", since: "2024" },
                  ].map((clinic, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg p-2.5 transition-all duration-200 hover:shadow-sm hover:bg-white cursor-pointer" style={{ background: C.surface }}>
                      <div className="h-10 w-10 shrink-0 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, #e2e4ea, #d1d4dc)` }}>
                        <span className="text-[10px] font-bold" style={{ color: C.textMuted }}>LOGO</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold truncate" style={{ color: C.dark }}>{clinic.name}</p>
                        <p className="text-[10px]" style={{ color: C.textMuted }}>{clinic.location} · {clinic.since}년 도입</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </aside>

      </div>


      {/* ════ 모바일 하단 탭바 ════ */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white md:hidden" style={{ borderColor: C.border }}>
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: "홈", active: true },
            { icon: Play, label: "Shorts" },
            { icon: ShoppingBag, label: "스토어" },
            { icon: User, label: "MY" },
          ].map(tab => (
            <button key={tab.label} className="flex flex-col items-center gap-0.5 px-3 py-1">
              <tab.icon className="h-5 w-5" style={{ color: tab.active ? C.dark : C.textMuted }} />
              <span className="text-[10px] font-semibold" style={{ color: tab.active ? C.dark : C.textMuted }}>
                {tab.label}
              </span>
              {tab.active && <span className="h-1 w-4 rounded-full" style={{ background: C.neon }} />}
            </button>
          ))}
        </div>
      </nav>

      {/* 모바일 글쓰기 FAB */}
      <button className="fixed bottom-20 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full shadow-lg md:hidden"
        style={{ background: C.neon, color: C.dark }}>
        <Plus className="h-5 w-5" strokeWidth={3} />
      </button>
    </div>
  );
}

/* ── 서브 컴포넌트 ── */

function SidebarContent() {
  const Item = ({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) => (
    <a href="#"
      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-all duration-150 mb-0.5 hover:bg-gray-50 hover:translate-x-0.5"
      style={{ color: active ? C.dark : C.textSecondary, fontWeight: active ? 600 : 400, background: active ? `${C.neon}15` : undefined }}>
      <Icon className="h-4 w-4 transition-colors duration-150" style={{ color: active ? C.dark : C.textMuted }} />
      {label}
    </a>
  );

  const Sub = ({ label }: { label: string }) => (
    <a href="#" className="block ml-[30px] py-1.5 text-[12px] transition-colors hover:opacity-80" style={{ color: C.textMuted }}>
      {label}
    </a>
  );

  const GroupLabel = ({ children }: { children: string }) => (
    <p className="mb-2 mt-1 px-3 text-[10px] font-semibold uppercase tracking-wider" style={{ color: C.textMuted }}>{children}</p>
  );

  return (
    <>
      <Item icon={Home} label="메인 라운지" active />
      <Item icon={Store} label="스테이션몰" />

      <div className="my-3" />
      <GroupLabel>서비스</GroupLabel>
      <Item icon={Megaphone} label="미용치과 컨설팅" />
      <Item icon={GraduationCap} label="교육 및 세미나" />
      <Item icon={Crosshair} label="골든시그널" />
      <Sub label="권역분석" />
      <Sub label="캐치전략" />
      <Sub label="핀셋마케팅" />
      <Item icon={Palette} label="브랜딩 및 디자인" />
      <Sub label="BI정립" />
      <Sub label="브랜드정렬" />
      <Item icon={Tv} label="대기실 영상구독" />
      <Item icon={BookOpen} label="미용치과 도입 가이드북" />

      <div className="my-3" />
      <GroupLabel>협업</GroupLabel>
      <Item icon={Users} label="연자 및 세미나" />
      <Item icon={Handshake} label="입점" />

      <div className="my-3" />
      <GroupLabel>커뮤니티</GroupLabel>
      <Item icon={PenSquare} label="메디포스트" />
      <Item icon={FileText} label="자유게시판" />
      <Item icon={Play} label="숏츠" />
      <Item icon={HelpCircle} label="메디지식인" />

      <div className="my-3" />
      <GroupLabel>지원</GroupLabel>
      <Item icon={Headphones} label="고객센터" />

      <div className="flex-1" />

      <div className="pt-4 border-t" style={{ borderColor: C.border }}>
        <div className="flex flex-wrap gap-x-3 gap-y-1 px-3 mb-2">
          {["이용약관", "개인정보처리방침", "1:1 문의"].map(l => (
            <a key={l} href="#" className="text-[10px]" style={{ color: C.textMuted }}>{l}</a>
          ))}
        </div>
        <p className="px-3 text-[9px]" style={{ color: C.textMuted }}>© 2026 MEDI STAXION</p>
      </div>
    </>
  );
}

function PopularWidget() {
  return (
    <div className="rounded-xl p-4" style={{ border: `1px solid ${C.borderLight}` }}>
      <p className="mb-3 text-[15px] font-bold" style={{ color: C.dark }}>주간 인기글</p>
      <div className="space-y-2">
        {POPULAR.map((title, i) => (
          <a key={i} href="#" className="flex items-start gap-2.5 group">
            <span className="mt-0.5 text-[13px] font-medium" style={{ color: i < 3 ? C.salmon : C.textMuted }}>{i + 1}</span>
            <p className="text-[13px] line-clamp-1 group-hover:underline" style={{ color: C.textBody }}>{title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function GuidebookWidget() {
  return (
    <div className="overflow-hidden rounded-xl p-5" style={{ background: C.dark }}>
      <p className="text-base font-bold text-white">미용시술 가이드북</p>
      <p className="mt-1 text-xs text-white/50">치과의사를 위한 실전 매뉴얼</p>
      <button className="mt-3 rounded-md px-4 py-2 text-xs font-bold transition-colors" style={{ background: C.neon, color: C.dark }}>
        자세히 보기
      </button>
    </div>
  );
}
