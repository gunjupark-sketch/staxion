"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import MobileBottomBar from "./MobileBottomBar";
import { X, Bell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export default function NewLayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ id?: string; email?: string; user_metadata?: Record<string, unknown> } | null>(null);
  const [profileData, setProfileData] = useState<{ full_name?: string; clinic_name?: string } | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // 유저 정보 로드
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      setUser(data.user);
      if (data.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name, clinic_name")
          .eq("id", data.user.id)
          .single();
        if (profile) setProfileData(profile);
      }
    });
  }, []);

  // 라우트 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // 모바일 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  const displayName = profileData?.full_name
    || String(user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split("@")[0] || "");

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setProfileData(null);
    setSidebarOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* TopBar (데스크톱: 공지+검색+장바구니+알림 / 모바일: 햄버거+로고+검색) */}
      <TopBar onMenuToggle={() => setSidebarOpen(true)} />

      {/* 모바일 풀스크린 메뉴 */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden">
          {/* 상단 바 */}
          <div className="flex h-14 items-center justify-between px-5 border-b border-[#E2E8F0]">
            <span className="text-lg font-bold text-[#1A1F2B]">메뉴</span>
            <div className="flex items-center gap-3">
              {/* 알림 */}
              <Link href="/mypage" onClick={() => setSidebarOpen(false)}>
                <Bell className="h-5 w-5 text-[#64748B]" />
              </Link>
              {/* 닫기 */}
              <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-2 hover:bg-[#F8F9FA]">
                <X className="h-5 w-5 text-[#64748B]" />
              </button>
            </div>
          </div>

          {/* 프로필 영역 */}
          <div className="mx-5 mt-5 mb-4 flex items-center gap-3 rounded-xl p-4 bg-[#F8F9FA]">
            <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-[#E2E8F0]">
              {user?.user_metadata?.avatar_url ? (
                <Image
                  src={user.user_metadata.avatar_url as string}
                  alt="프로필"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-lg">👤</span>
              )}
            </div>
            <div className="flex-1">
              {user ? (
                <>
                  <p className="text-base font-bold text-[#1A1F2B]">{displayName} 원장님</p>
                  <p className="text-[12px] text-[#94A3B8]">{profileData?.clinic_name || ""}</p>
                </>
              ) : (
                <>
                  <p className="text-base font-bold text-[#1A1F2B]">로그인 해주세요</p>
                  <p className="text-[12px] text-[#94A3B8]">전문가 전용 플랫폼</p>
                </>
              )}
            </div>
            {user ? (
              <Link href="/mypage" onClick={() => setSidebarOpen(false)}
                className="rounded-lg px-3 py-1.5 text-xs font-semibold bg-[#C3F400] text-[#1A1F2B]">
                마이페이지
              </Link>
            ) : (
              <Link href="/login" onClick={() => setSidebarOpen(false)}
                className="rounded-lg px-3 py-1.5 text-xs font-semibold bg-[#C3F400] text-[#1A1F2B]">
                로그인
              </Link>
            )}
          </div>

          {/* 메뉴 */}
          <div className="flex-1 overflow-y-auto px-5">
            <LeftSidebar className="block" />
          </div>

          {/* 하단 */}
          <div className="px-5 py-4 border-t border-[#E2E8F0]">
            {user ? (
              <button onClick={handleLogout} className="block mb-3 text-sm text-[#94A3B8]">
                로그아웃
              </button>
            ) : (
              <div className="flex gap-3 mb-3">
                <Link href="/login" onClick={() => setSidebarOpen(false)}
                  className="text-sm font-medium text-[#1A1F2B]">로그인</Link>
                <Link href="/signup" onClick={() => setSidebarOpen(false)}
                  className="text-sm font-medium text-[#64748B]">회원가입</Link>
              </div>
            )}
            <div className="flex gap-3">
              {[
                { label: "이용약관", href: "/terms" },
                { label: "개인정보처리방침", href: "/privacy" },
                { label: "1:1 문의", href: "/contact" },
              ].map(l => (
                <Link key={l.label} href={l.href} onClick={() => setSidebarOpen(false)}
                  className="text-[10px] text-[#94A3B8]">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 사이드바 + 메인 — 같이 스크롤 */}
      <div className="lg:flex" style={{ maxWidth: 1920 }}>
        {/* 좌측 사이드바 (데스크톱) */}
        <aside className="hidden lg:flex lg:flex-col w-[240px] shrink-0 border-r border-[#E2E8F0] bg-white">
          {/* 로고 */}
          <div className="px-6 py-4 border-b border-[#E2E8F0] shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="MEDI STAXION" width={140} height={32} className="h-8 w-auto" />
            </Link>
          </div>
          <div className="p-3 flex-1 flex flex-col">
            <LeftSidebar />
          </div>
        </aside>

        {/* 메인 영역 */}
        <main className="min-w-0 flex-1 max-w-[1200px] 2xl:max-w-none py-6 px-5 md:px-8 pb-24 md:pb-8 space-y-8">
          {children}
        </main>
      </div>

      {/* 모바일 하단 탭바 + FAB */}
      <MobileBottomBar />
    </div>
  );
}
