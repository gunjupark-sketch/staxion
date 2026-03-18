"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { C } from "@/lib/design-tokens";
import { createClient } from "@/lib/supabase/client";

interface NewHeaderProps {
  onMenuToggle: () => void;
}

export default function NewHeader({ onMenuToggle }: NewHeaderProps) {
  const [user, setUser] = useState<{ email?: string; id?: string; user_metadata?: Record<string, unknown> } | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) fetchCartCount(data.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchCartCount(session.user.id);
      else setCartCount(0);
    });

    // 장바구니 변경 이벤트 수신
    const handleCartUpdate = () => {
      if (user?.id) fetchCartCount(user.id);
    };
    window.addEventListener("cart-updated", handleCartUpdate);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("cart-updated", handleCartUpdate);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchCartCount(userId: string) {
    const supabase = createClient();
    const { count } = await supabase
      .from("cart_items")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId);
    setCartCount(count || 0);
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
    router.refresh();
  }

  const displayName: string = String(user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split("@")[0] || "회원");

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: `1px solid ${C.border}` }}>
      <div className="flex h-[76px] items-center px-6">
        {/* 모바일 햄버거 */}
        <button
          className="mr-3 lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          onClick={onMenuToggle}
          aria-label="메뉴 열기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* 로고 */}
        <Link href="/" className="mr-6 flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-black"
              style={{ background: C.neon, color: C.dark }}
            >
              M
            </div>
            <div className="hidden sm:block">
              <span className="text-[11px] font-bold tracking-wider" style={{ color: C.salmon }}>MEDI</span>
              <br />
              <span className="text-base font-black tracking-tight" style={{ color: C.dark }}>STAXION</span>
            </div>
          </div>
        </Link>

        {/* 공지사항 바 */}
        <div
          className="hidden md:flex items-center gap-2 rounded-lg px-4 py-2 flex-1 max-w-[607px]"
          style={{ background: C.card }}
        >
          <span className="shrink-0 text-sm font-medium" style={{ color: C.dark }}>공지사항 |</span>
          <span className="text-sm truncate" style={{ color: C.dark }}>메디스테이션 플랫폼 런칭</span>
        </div>

        {/* 우측 영역 */}
        <div className="ml-auto flex items-center gap-3">
          {/* 검색 */}
          <div
            className="hidden lg:flex items-center gap-2 rounded-lg px-4 py-2"
            style={{ background: C.card }}
          >
            <span style={{ color: C.textPlaceholder }} className="text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              검색어를 입력하세요
            </span>
          </div>

          {/* 알림 */}
          <button
            className="relative flex h-12 w-12 items-center justify-center rounded-full"
            style={{ border: `1px solid ${C.border}` }}
            aria-label="알림"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: C.textSecondary }}>
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span
              className="absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full text-[6px] font-black text-white"
              style={{ background: "#ff0000" }}
            />
          </button>

          {/* 장바구니 (로그인 시만) */}
          {user && (
            <Link
              href="/cart"
              className="relative flex h-12 w-12 items-center justify-center rounded-full"
              style={{ border: `1px solid ${C.border}` }}
              aria-label="장바구니"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: C.textSecondary }}>
                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {cartCount > 0 && (
                <span
                  className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white"
                  style={{ background: C.salmon }}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          )}

          {/* 프로필 + 로그아웃 */}
          <div className="hidden sm:flex items-center gap-2">
            {user ? (
              <>
                <Link href="/mypage" className="h-12 w-12 rounded-full overflow-hidden" style={{ background: C.surface }}>
                  <div className="h-full w-full flex items-center justify-center text-lg font-bold" style={{ color: C.textMuted }}>
                    {user.user_metadata?.avatar_url ? (
                      <Image
                        src={user.user_metadata.avatar_url as string}
                        alt="프로필"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span>👤</span>
                    )}
                  </div>
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-tight" style={{ color: C.textBody }}>
                    {displayName}
                  </span>
                  <button onClick={handleLogout} className="text-left text-[10px]" style={{ color: C.textMuted }}>
                    로그아웃
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                style={{ color: C.textBody }}
              >
                로그인
              </Link>
            )}
          </div>

          {/* ON AIR */}
          <Link
            href="/mypage/waiting-room"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full"
            style={{ background: C.dark, border: `1px solid ${C.border}` }}
          >
            <div className="text-center leading-tight">
              <div className="text-[10px] font-black" style={{ color: C.salmon }}>ON</div>
              <div className="text-[10px] font-black" style={{ color: C.salmon }}>AIR</div>
            </div>
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: C.dark }}
            >
              대기실 영상 재생
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
