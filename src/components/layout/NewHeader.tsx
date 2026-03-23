"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { usePushSubscription } from "@/lib/usePushSubscription";

interface NewHeaderProps {
  onMenuToggle: () => void;
}

export default function NewHeader({ onMenuToggle }: NewHeaderProps) {
  const [user, setUser] = useState<{ email?: string; id?: string; user_metadata?: Record<string, unknown> } | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [notifCount, setNotifCount] = useState(0);
  const [notifications, setNotifications] = useState<Array<{ id: string; title: string; message: string | null; link: string | null; is_read: boolean; created_at: string }>>([]);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const router = useRouter();

  // 로그인 시 Web Push 구독
  usePushSubscription(!!user);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        fetchCartCount(data.user.id);
        fetchNotifications();
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCartCount(session.user.id);
        fetchNotifications();
      } else {
        setCartCount(0);
        setNotifCount(0);
      }
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

  async function fetchNotifications() {
    try {
      const res = await fetch("/api/notifications");
      if (res.ok) {
        const data = await res.json();
        setNotifications(data.notifications || []);
        setNotifCount(data.unreadCount || 0);
      }
    } catch { /* ignore */ }
  }

  async function markNotifRead(id: string) {
    await fetch("/api/notifications/read", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchNotifications();
  }

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
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="flex h-[76px] items-center px-6">
        {/* 모바일 햄버거 */}
        <button
          className="mr-3 lg:hidden rounded-lg p-2 text-gray-500 hover:bg-secondary"
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
        <Link href="/" className="mr-6 flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="MEDISTAXION"
            width={140}
            height={30}
            className="h-8 w-auto dark:hidden"
            priority
          />
          <Image
            src="/logo-white.png"
            alt="MEDISTAXION"
            width={140}
            height={30}
            className="h-8 w-auto hidden dark:block"
            priority
          />
        </Link>

        {/* 공지사항 바 */}
        <div className="hidden md:flex items-center gap-2 rounded-lg px-4 py-2 flex-1 max-w-[607px] bg-card">
          <span className="shrink-0 text-sm font-medium text-foreground">공지사항 |</span>
          <span className="text-sm truncate text-foreground">메디스테이션 플랫폼 런칭</span>
        </div>

        {/* 우측 영역 */}
        <div className="ml-auto flex items-center gap-3">
          {/* 검색 */}
          <div className="hidden lg:flex items-center gap-2 rounded-lg px-4 py-2 bg-card">
            <span className="text-sm text-text-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              검색어를 입력하세요
            </span>
          </div>

          {/* 알림 */}
          <div className="relative">
            <button
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border"
              aria-label="알림"
              onClick={() => setShowNotifDropdown(!showNotifDropdown)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              {notifCount > 0 && (
                <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white bg-destructive">
                  {notifCount}
                </span>
              )}
            </button>

            {showNotifDropdown && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowNotifDropdown(false)} />
                <div className="absolute right-0 top-14 z-50 w-80 rounded-xl border border-border bg-card shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <span className="text-sm font-bold text-foreground">알림</span>
                    {notifCount > 0 && (
                      <button
                        onClick={() => markNotifRead("all")}
                        className="text-xs text-primary hover:underline"
                      >
                        모두 읽음
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="px-4 py-8 text-center text-sm text-text-muted">
                        알림이 없습니다
                      </div>
                    ) : (
                      notifications.slice(0, 10).map((notif) => (
                        <button
                          key={notif.id}
                          className={`w-full text-left px-4 py-3 border-b border-border/50 hover:bg-secondary/50 transition-colors ${!notif.is_read ? "bg-primary/5" : ""}`}
                          onClick={() => {
                            if (!notif.is_read) markNotifRead(notif.id);
                            setShowNotifDropdown(false);
                            if (notif.link) router.push(notif.link);
                          }}
                        >
                          <div className="flex items-start gap-2">
                            {!notif.is_read && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />}
                            <div className={!notif.is_read ? "" : "ml-4"}>
                              <p className="text-sm font-semibold text-foreground">{notif.title}</p>
                              {notif.message && <p className="mt-0.5 text-xs text-text-muted">{notif.message}</p>}
                              <p className="mt-1 text-[10px] text-text-muted">
                                {new Date(notif.created_at).toLocaleDateString("ko-KR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* 장바구니 (로그인 시만) */}
          {user && (
            <Link
              href="/cart"
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border"
              aria-label="장바구니"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary">
                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white bg-accent-salmon">
                  {cartCount}
                </span>
              )}
            </Link>
          )}

          {/* 프로필 + 로그아웃 */}
          <div className="hidden sm:flex items-center gap-2">
            {user ? (
              <>
                <Link href="/mypage" className="h-12 w-12 rounded-full overflow-hidden bg-surface">
                  <div className="h-full w-full flex items-center justify-center text-lg font-bold text-text-muted">
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
                  <span className="text-sm font-bold leading-tight text-text-body">
                    {displayName}
                  </span>
                  <button onClick={handleLogout} className="text-left text-[10px] text-text-muted">
                    로그아웃
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-text-body"
              >
                로그인
              </Link>
            )}
          </div>

          {/* ON AIR */}
          <Link
            href="/mypage/waiting-room"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-layout-dark border border-border"
          >
            <div className="text-center leading-tight">
              <div className="text-[10px] font-black text-accent-salmon">ON</div>
              <div className="text-[10px] font-black text-accent-salmon">AIR</div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-layout-dark">
              대기실 영상 재생
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
