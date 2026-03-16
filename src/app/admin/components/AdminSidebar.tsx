"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboardIcon,
  UsersIcon,
  PackageIcon,
  ShoppingCartIcon,
  FileTextIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MessageSquareIcon,
  NewspaperIcon,
  BookOpenIcon,
  VideoIcon,
  SettingsIcon,
  MenuIcon,
  XIcon,
  ImageIcon,
} from "lucide-react";

const adminNav = [
  { label: "대시보드", href: "/admin", icon: LayoutDashboardIcon },
  { label: "회원 관리", href: "/admin/members", icon: UsersIcon },
  { label: "상품 관리", href: "/admin/products", icon: PackageIcon },
  { label: "주문 관리", href: "/admin/orders", icon: ShoppingCartIcon },
  { label: "블로그 관리", href: "/admin/posts", icon: FileTextIcon },
  { label: "세미나 관리", href: "/admin/seminars", icon: GraduationCapIcon },
  { label: "서비스 관리", href: "/admin/services", icon: BriefcaseIcon },
  { label: "상담 관리", href: "/admin/inquiries", icon: MessageSquareIcon },
  { label: "게시물 관리", href: "/admin/community", icon: NewspaperIcon },
  { label: "방명록 관리", href: "/admin/guestbook", icon: BookOpenIcon },
  { label: "대기실 영상", href: "/admin/videos", icon: VideoIcon },
  { label: "배너 관리", href: "/admin/banners", icon: ImageIcon },
  { label: "팝업 관리", href: "/admin/popups", icon: ImageIcon },
  { label: "사이트 설정", href: "/admin/settings", icon: SettingsIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const navContent = (
    <nav className="space-y-0.5 px-2 pb-4">
      {adminNav.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
              active
                ? "bg-white text-text-primary font-medium shadow-sm"
                : "text-text-secondary hover:bg-white hover:text-text-primary"
            }`}
          >
            <Icon className="size-4 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile header bar */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b bg-surface-secondary px-4 py-3 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-secondary hover:bg-white hover:text-text-primary transition-colors"
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
        <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider">관리자</h2>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-out nav */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform border-r bg-surface-secondary transition-transform duration-200 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider">관리자</h2>
        </div>
        {navContent}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 border-r bg-surface-secondary lg:block">
        <div className="p-4">
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider">관리자</h2>
        </div>
        {navContent}
      </aside>
    </>
  );
}
