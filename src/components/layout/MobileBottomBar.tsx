"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, User, Plus } from "lucide-react";

const TABS = [
  { icon: Home, label: "홈", href: "/" },
  { icon: ShoppingBag, label: "스토어", href: "/store" },
  { icon: User, label: "MY", href: "/mypage" },
] as const;

export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <>
      {/* 모바일 하단 탭바 */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card border-border md:hidden"
      >
        <div className="flex items-center justify-around py-2">
          {TABS.map((tab) => {
            const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className="flex flex-col items-center gap-0.5 px-3 py-1"
              >
                <tab.icon
                  className={`h-5 w-5 ${active ? "text-foreground" : "text-text-muted"}`}
                />
                <span
                  className={`text-[10px] font-semibold ${active ? "text-foreground" : "text-text-muted"}`}
                >
                  {tab.label}
                </span>
                {active && (
                  <span className="h-1 w-4 rounded-full bg-brand-neon" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* 모바일 글쓰기 FAB */}
      <Link
        href="/community/write"
        className="fixed bottom-20 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full shadow-lg md:hidden bg-brand-neon text-[#1a1a1a]"
      >
        <Plus className="h-5 w-5" strokeWidth={3} />
      </Link>
    </>
  );
}
