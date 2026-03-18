"use client";

import Link from "next/link";
import { Home, Play, ShoppingBag, User, Plus } from "lucide-react";
import { C } from "@/lib/design-tokens";

const TABS = [
  { icon: Home, label: "홈", href: "/", active: true },
  { icon: Play, label: "Shorts", href: "/shorts", active: false },
  { icon: ShoppingBag, label: "스토어", href: "/store", active: false },
  { icon: User, label: "MY", href: "/mypage", active: false },
] as const;

export default function MobileBottomBar() {
  return (
    <>
      {/* 모바일 하단 탭바 */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white md:hidden"
        style={{ borderColor: C.border }}
      >
        <div className="flex items-center justify-around py-2">
          {TABS.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className="flex flex-col items-center gap-0.5 px-3 py-1"
            >
              <tab.icon
                className="h-5 w-5"
                style={{ color: tab.active ? C.dark : C.textMuted }}
              />
              <span
                className="text-[10px] font-semibold"
                style={{ color: tab.active ? C.dark : C.textMuted }}
              >
                {tab.label}
              </span>
              {tab.active && (
                <span
                  className="h-1 w-4 rounded-full"
                  style={{ background: C.neon }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* 모바일 글쓰기 FAB */}
      <Link
        href="/community/write"
        className="fixed bottom-20 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full shadow-lg md:hidden"
        style={{ background: C.neon, color: C.dark }}
      >
        <Plus className="h-5 w-5" strokeWidth={3} />
      </Link>
    </>
  );
}
