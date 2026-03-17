"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "내 정보", href: "/mypage", icon: UserIcon },
  { label: "내가 쓴 글", href: "/mypage/posts", icon: PenIcon },
  { label: "구매 내역", href: "/mypage/orders", icon: ShoppingBagIcon },
  { label: "내 치과 대기실", href: "/mypage/waiting-room", icon: TvIcon },
  { label: "수강 이력", href: "/mypage/enrollments", icon: GraduationCapIcon },
  { label: "상담 내역", href: "/mypage/inquiries", icon: MessageSquareIcon },
];

function UserIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function TvIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.962 5.267a2 2 0 0 0-1.924 0L2.6 9.084a1 1 0 0 0 0 1.832l8.438 3.817a2 2 0 0 0 1.924 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function MessageSquareIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) {
        router.replace("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", session.user.id)
        .single();

      setUserName(profile?.name || "회원");
      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  const isActive = (href: string) => {
    if (href === "/mypage") return pathname === "/mypage";
    return pathname.startsWith(href);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      {/* 상단 인사 */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl font-bold text-text-primary sm:text-2xl">
          마이페이지
        </h1>
        <p className="mt-1 text-sm text-text-muted">
          안녕하세요, <span className="font-medium text-text-secondary">{userName}</span>님
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* 데스크탑 사이드바 */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <nav className="sticky top-24 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-brand-lime-safe/10 text-brand-lime-text"
                    : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                )}
              >
                <item.icon className="shrink-0" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* 모바일 탭 */}
        <div className="flex gap-1 overflow-x-auto pb-2 lg:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors min-h-[44px]",
                isActive(item.href)
                  ? "bg-brand-lime-safe/10 text-brand-lime-text"
                  : "text-text-secondary hover:bg-surface-secondary"
              )}
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          ))}
        </div>

        {/* 콘텐츠 */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
