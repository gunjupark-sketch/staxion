"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { usePushSubscription } from "@/lib/usePushSubscription";

/* ── 하드코딩 공지 (추후 DB 연결) ── */
const ANNOUNCEMENTS = [
  "메디스테이션 플랫폼이 새롭게 런칭되었습니다!",
  "2026년 상반기 미용치과 컨설팅 프로그램 오픈",
  "신규 회원 가입 시 첫 구매 10% 할인 쿠폰 지급",
];

interface TopBarProps {
  onMenuToggle: () => void;
}

export default function TopBar({ onMenuToggle }: TopBarProps) {
  const [user, setUser] = useState<{
    email?: string;
    id?: string;
    user_metadata?: Record<string, unknown>;
  } | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [notifCount, setNotifCount] = useState(0);
  const [notifications, setNotifications] = useState<
    Array<{
      id: string;
      title: string;
      message: string | null;
      link: string | null;
      is_read: boolean;
      created_at: string;
    }>
  >([]);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const router = useRouter();
  const userRef = useRef(user);
  userRef.current = user;

  // Web Push 구독
  usePushSubscription(!!user);

  /* ── Auth + Cart + Notification 초기화 ── */
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        fetchCartCount(data.user.id);
        fetchNotifications();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCartCount(session.user.id);
        fetchNotifications();
      } else {
        setCartCount(0);
        setNotifCount(0);
        setNotifications([]);
      }
    });

    const handleCartUpdate = () => {
      if (userRef.current?.id) fetchCartCount(userRef.current.id);
    };
    window.addEventListener("cart-updated", handleCartUpdate);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("cart-updated", handleCartUpdate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── 공지 롤링 (5초 간격) ── */
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* ── 데이터 fetch ── */
  async function fetchNotifications() {
    try {
      const res = await fetch("/api/notifications");
      if (res.ok) {
        const data = await res.json();
        setNotifications(data.notifications || []);
        setNotifCount(data.unreadCount || 0);
      }
    } catch {
      /* ignore */
    }
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

  /* ── SVG 아이콘 ── */
  const SearchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );

  const BellIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );

  const CartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );

  const MegaphoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[#FF8383]"
    >
      <path d="m3 11 18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );

  const HamburgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );

  /* ── 알림 드롭다운 ── */
  const NotifDropdown = showNotifDropdown && (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setShowNotifDropdown(false)}
      />
      <div className="absolute right-0 top-12 z-50 w-80 rounded-xl border border-[#E2E8F0] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-4 py-3">
          <span className="text-sm font-bold text-[#1A1F2B]">알림</span>
          {notifCount > 0 && (
            <button
              onClick={() => markNotifRead("all")}
              className="text-xs text-[#5a8a14] hover:underline"
            >
              모두 읽음
            </button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-[#94A3B8]">
              알림이 없습니다
            </div>
          ) : (
            notifications.slice(0, 10).map((notif) => (
              <button
                key={notif.id}
                className={`w-full text-left px-4 py-3 border-b border-[#E2E8F0]/50 hover:bg-[#F8F9FA] transition-colors ${
                  !notif.is_read ? "bg-[#C3F400]/5" : ""
                }`}
                onClick={() => {
                  if (!notif.is_read) markNotifRead(notif.id);
                  setShowNotifDropdown(false);
                  if (notif.link) router.push(notif.link);
                }}
              >
                <div className="flex items-start gap-2">
                  {!notif.is_read && (
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#C3F400]" />
                  )}
                  <div className={!notif.is_read ? "" : "ml-4"}>
                    <p className="text-sm font-semibold text-[#1A1F2B]">
                      {notif.title}
                    </p>
                    {notif.message && (
                      <p className="mt-0.5 text-xs text-[#94A3B8]">
                        {notif.message}
                      </p>
                    )}
                    <p className="mt-1 text-[10px] text-[#94A3B8]">
                      {new Date(notif.created_at).toLocaleDateString("ko-KR", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ── 메인 TopBar ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
        <div className="h-12 px-4 lg:px-6 flex items-center">
          {/* ── 모바일 (<lg): 햄버거 + 로고 + 검색 ── */}
          <div className="flex lg:hidden items-center w-full">
            {/* 햄버거 */}
            <button
              onClick={onMenuToggle}
              aria-label="메뉴 열기"
              className="p-1.5 -ml-1 text-[#1A1F2B] hover:text-[#64748B] transition-colors"
            >
              {HamburgerIcon}
            </button>

            {/* 로고 (가운데) */}
            <div className="flex-1 flex items-center justify-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="MEDI STAXION"
                  width={120}
                  height={26}
                  className="h-6 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* 검색 아이콘 (우측) */}
            <Link
              href="/search"
              className="p-1.5 -mr-1 text-[#64748B] hover:text-[#1A1F2B] transition-colors"
              aria-label="검색"
            >
              {SearchIcon}
            </Link>
          </div>

          {/* ── 데스크톱 (lg+): 공지 | 검색 | 장바구니 | 알림 ── */}
          <div className="hidden lg:flex items-center w-full gap-4">
            {/* 공지 롤링 (좌측, flex-1) */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {MegaphoneIcon}
              <div className="relative h-5 overflow-hidden flex-1 min-w-0">
                <div
                  key={announcementIdx}
                  className="absolute inset-0 flex items-center animate-[slideIn_0.4s_ease-out]"
                >
                  <span className="text-sm text-[#1A1F2B] truncate">
                    {ANNOUNCEMENTS[announcementIdx]}
                  </span>
                </div>
              </div>
            </div>

            {/* 검색 input */}
            <div className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8F9FA] px-3 py-1.5 w-64">
              <span className="text-[#64748B]">{SearchIcon}</span>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="bg-transparent text-sm text-[#1A1F2B] placeholder-[#64748B] outline-none w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value.trim()) {
                    router.push(
                      `/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`
                    );
                  }
                }}
              />
            </div>

            {/* 장바구니 / 알림 / 로그인 */}
            {user ? (
              <div className="flex items-center gap-2">
                {/* 장바구니 */}
                <Link
                  href="/cart"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] hover:text-[#1A1F2B] transition-colors"
                  aria-label="장바구니"
                >
                  {CartIcon}
                  {cartCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF8383] px-1 text-[10px] font-bold text-white">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* 알림 */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifDropdown(!showNotifDropdown)}
                    className="relative flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] hover:text-[#1A1F2B] transition-colors"
                    aria-label="알림"
                  >
                    {BellIcon}
                    {notifCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF8383] px-1 text-[10px] font-bold text-white">
                        {notifCount}
                      </span>
                    )}
                  </button>
                  {NotifDropdown}
                </div>

                {/* 프로필 */}
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E2E8F0] hover:ring-2 hover:ring-brand-neon-safe/50 transition-all overflow-hidden"
                    aria-label="마이페이지"
                  >
                    {user?.user_metadata?.avatar_url ? (
                      <Image
                        src={user.user_metadata.avatar_url as string}
                        alt="프로필"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#94A3B8]">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                  </button>
                  {showProfileMenu && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)} />
                      <div className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-[#E2E8F0] bg-white shadow-2xl py-1">
                        <div className="px-4 py-3 border-b border-[#E2E8F0]">
                          <p className="text-sm font-bold text-[#1A1F2B] truncate">
                            {String(user?.user_metadata?.name || user?.email?.split("@")[0] || "회원")}
                          </p>
                          <p className="text-xs text-[#94A3B8] truncate mt-0.5">{user?.email}</p>
                        </div>
                        {[
                          { label: "마이페이지", href: "/mypage" },
                          { label: "주문 내역", href: "/mypage/orders" },
                          { label: "내 게시글", href: "/mypage/posts" },
                          { label: "문의 내역", href: "/mypage/inquiries" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setShowProfileMenu(false)}
                            className="block px-4 py-2.5 text-sm text-[#1A1F2B] hover:bg-[#F8F9FA] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                        <div className="border-t border-[#E2E8F0] mt-1">
                          <button
                            onClick={async () => {
                              setShowProfileMenu(false);
                              const supabase = createClient();
                              await supabase.auth.signOut();
                              router.push("/");
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm text-[#FF6565] hover:bg-[#FFF0F0] transition-colors"
                          >
                            로그아웃
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium text-[#1A1F2B] hover:text-[#64748B] transition-colors whitespace-nowrap"
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* ── 모바일 공지 롤링 바 (header 아래) ── */}
      <div className="lg:hidden sticky top-12 z-40 bg-[#F8F9FA] border-b border-[#E2E8F0] h-8 px-4 flex items-center gap-2 overflow-hidden">
        {MegaphoneIcon}
        <div className="relative h-4 flex-1 min-w-0 overflow-hidden">
          <div
            key={`mobile-${announcementIdx}`}
            className="absolute inset-0 flex items-center animate-[slideIn_0.4s_ease-out]"
          >
            <span className="text-xs text-[#64748B] truncate">
              {ANNOUNCEMENTS[announcementIdx]}
            </span>
          </div>
        </div>
      </div>

      {/* ── 공지 슬라이드 애니메이션 ── */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
