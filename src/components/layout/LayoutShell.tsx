"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import NewLayoutShell from "@/components/layout/NewLayoutShell";

const BARE_PREFIXES = ["/wr/", "/area-analysis/map"];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 베어 레이아웃 (대기실, 지도 풀스크린)
  const isBare = BARE_PREFIXES.some((p) => pathname.startsWith(p));
  if (isBare) return <>{children}</>;

  // Admin → 기존 Header+Footer (admin/layout.tsx가 자체 사이드바 제공)
  if (pathname.startsWith("/admin")) {
    return (
      <>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </>
    );
  }

  // 나머지 전부 → 새 레이아웃
  const isHomepage = pathname === "/";
  return (
    <NewLayoutShell showRightSidebar={isHomepage}>
      {children}
    </NewLayoutShell>
  );
}
