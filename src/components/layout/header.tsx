"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { label: "미용치과", href: "/about-beauty" },
  { label: "권역분석", href: "/area-analysis" },
  { label: "서비스", href: "/services" },
  { label: "가이드북", href: "/guidebook" },
  { label: "교육", href: "/education" },
  { label: "스토어", href: "/store" },
  { label: "커뮤니티", href: "/community" },
  { label: "소식", href: "/news" },
  { label: "회사소개", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ email?: string; id?: string } | null>(null);
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MEDI STAXION" width={160} height={40} priority className="h-8 w-auto dark:hidden" />
          <Image src="/logo-white.png" alt="MEDI STAXION" width={160} height={40} priority className="h-8 w-auto hidden dark:block" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-neon-safe"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          {user && (
            <Link
              href="/cart"
              className="relative rounded-md p-2 text-text-secondary transition-colors hover:bg-surface-secondary"
              aria-label="장바구니"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-neon-btn px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          )}
          {user ? (
            <>
              <Link
                href="/mypage"
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary"
              >
                마이페이지
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-secondary"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary"
              >
                로그인
              </Link>
            </>
          )}
          <Link
            href="/contact"
            className="rounded-md bg-brand-neon-btn px-4 py-2 text-sm font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-neon-safe"
          >
            상담 신청
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger aria-label="메뉴 열기" className="lg:hidden rounded-md p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-neon-safe">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            <span className="sr-only">메뉴</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-4 border-t" />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mx-4 rounded-md bg-brand-neon-btn py-3 text-center text-base font-semibold text-white min-h-[44px] flex items-center justify-center"
              >
                상담 신청
              </Link>
              {user ? (
                <>
                  <Link
                    href="/cart"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-4 py-3 text-base font-medium text-text-secondary min-h-[44px]"
                  >
                    장바구니
                    {cartCount > 0 && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-neon-btn px-1 text-xs font-bold text-white">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/mypage"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-text-secondary min-h-[44px]"
                  >
                    마이페이지
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setOpen(false); }}
                    className="rounded-md px-4 py-3 text-left text-base font-medium text-text-muted min-h-[44px]"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-text-secondary min-h-[44px]"
                  >
                    로그인
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
