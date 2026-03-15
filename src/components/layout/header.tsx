"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { label: "미용치과 소개", href: "/about-beauty" },
  { label: "가이드북", href: "/guidebook" },
  { label: "교육/세미나", href: "/education" },
  { label: "스토어", href: "/store" },
  { label: "서비스", href: "/services" },
  { label: "블로그", href: "/blog" },
  { label: "커뮤니티", href: "/community" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
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
          <Image src="/logo.png" alt="MEDI STAXION" width={160} height={40} priority className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link
                href="/admin"
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
              <Link
                href="/signup"
                className="rounded-md bg-brand-lime-safe px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-lime-safe/90"
              >
                회원가입
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden rounded-md p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary hover:bg-surface-secondary">
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
              {user ? (
                <>
                  <Link
                    href="/admin"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-text-secondary"
                  >
                    마이페이지
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setOpen(false); }}
                    className="rounded-md px-4 py-3 text-left text-base font-medium text-text-muted"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-text-secondary"
                  >
                    로그인
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="mx-4 rounded-md bg-brand-lime-safe py-3 text-center text-base font-semibold text-white"
                  >
                    회원가입
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
