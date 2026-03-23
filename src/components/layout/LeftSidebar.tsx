"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Store,
  Megaphone,
  GraduationCap,
  Crosshair,
  Palette,
  Tv,
  BookOpen,
  Users,
  Handshake,
  PenSquare,
  FileText,
  HelpCircle,
  Headphones,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* ── 타입 ── */
interface LeftSidebarProps {
  className?: string;
}

/* ── 메인 컴포넌트 ── */
export default function LeftSidebar({ className }: LeftSidebarProps) {
  const pathname = usePathname();
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    "골든시그널": true,
    "브랜딩 및 디자인": false,
  });

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    // /services, /education 등 하위 경로가 있는 메뉴는 exact match
    const cleanHref = href.split("#")[0].split("?")[0];
    const exactPaths = ["/services", "/education", "/contact"];
    if (exactPaths.includes(cleanHref)) return pathname === cleanHref;
    return pathname.startsWith(cleanHref);
  };

  const toggleAccordion = (key: string) =>
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));

  /* ── 메뉴 아이템 (글자 크기 통일: text-sm) ── */
  const Item = ({
    icon: Icon,
    label,
    href,
    noActive,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href?: string;
    noActive?: boolean;
  }) => {
    const active = !noActive && href ? isActive(href) : false;

    const content = (
      <span
        className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded transition-all duration-150 ${
          active
            ? "bg-[#C3F400] text-[#1A1F2B] font-bold"
            : "text-[#64748B] hover:bg-[#F8F9FA]"
        }`}
      >
        <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? "text-[#1A1F2B]" : "text-[#94A3B8]"}`} />
        {label}
      </span>
    );

    if (!href) return <div className="cursor-default">{content}</div>;
    return <Link href={href}>{content}</Link>;
  };

  /* ── 아코디언 아이템 ── */
  const AccordionItem = ({
    icon: Icon,
    label,
    children,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    children: React.ReactNode;
  }) => {
    const open = openAccordions[label] ?? false;
    // 하위 메뉴 중 하나라도 활성이면 부모도 강조
    return (
      <div>
        <button
          onClick={() => toggleAccordion(label)}
          className="flex items-center gap-3 px-4 py-2.5 text-sm w-full text-left rounded transition-all text-[#64748B] hover:bg-[#F8F9FA]"
        >
          <Icon className="h-[18px] w-[18px] shrink-0 text-[#94A3B8]" />
          <span className="flex-1">{label}</span>
          <ChevronDown
            className={`h-4 w-4 text-[#94A3B8] transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && <div className="ml-4">{children}</div>}
      </div>
    );
  };

  /* ── 서브 아이템 (글자 크기 동일: text-sm) ── */
  const Sub = ({ label, href }: { label: string; href: string }) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        className={`flex items-center gap-3 pl-[52px] pr-4 py-2 text-sm rounded transition-colors ${
          active
            ? "text-[#1A1F2B] font-semibold bg-[#C3F400]/10"
            : "text-[#94A3B8] hover:text-[#64748B]"
        }`}
      >
        {label}
      </Link>
    );
  };

  /* ── 그룹 라벨 ── */
  const GroupLabel = ({ label }: { label: string }) => (
    <div className="px-4 py-1.5 mt-4 mb-1 border-b border-[#E2E8F0]">
      <span className="text-[10px] font-black tracking-[0.15em] text-[#1A1F2B] uppercase">
        {label}
      </span>
    </div>
  );

  /* ── 렌더 ── */
  return (
    <div className={`flex flex-col h-full ${className ?? ""}`}>
      <Item icon={Home} label="메인 라운지" href="/" />
      <Item icon={Store} label="스테이션몰" href="/store" />

      {/* 서비스 */}
      <div className="mt-4" />
      <Item icon={Megaphone} label="미용치과 컨설팅" href="/services/consulting" />
      <Item icon={GraduationCap} label="교육 및 세미나" href="/education" />

      {/* 골든시그널 */}
      <GroupLabel label="Golden Signal" />
      <Item icon={Crosshair} label="권역분석" href="/area-analysis" />
      <Item icon={Crosshair} label="캐치전략" href="/services/golden-signal-catch-strategy" />
      <Item icon={Crosshair} label="핀셋마케팅" href="/services/pincet-marketing" />

      {/* 브랜딩 & 디자인 */}
      <GroupLabel label="Branding &amp; Design" />
      <Item icon={Palette} label="BI정립" href="/services/bi-brand-identity" />
      <Item icon={Palette} label="디자인정렬" href="/services/design-alignment" />
      <Item icon={Tv} label="대기실 영상구독" href="/services/waiting-room-video" />
      <Item icon={BookOpen} label="미용치과 가이드북" href="/guidebook" />

      {/* 비즈니스 */}
      <GroupLabel label="Business" />
      <Item icon={Users} label="연자 및 세미나" href="/education#speakers" noActive />
      <Item icon={Handshake} label="입점신청" href="/contact" />

      {/* 커뮤니티 */}
      <GroupLabel label="Community" />
      <Item icon={PenSquare} label="메디포스트" href="/medipost" />
      <Item icon={FileText} label="자유게시판" href="/community" />
      <Item icon={HelpCircle} label="메디지식인" href="/community?tab=qna" />

      {/* 서포트 */}
      <GroupLabel label="Support" />
      <Item icon={Headphones} label="고객센터" href="/contact" />

      {/* 푸터 하단 정렬 */}
      <div className="flex-1" />

      <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
        <div className="px-4 mb-3">
          <Image src="/logo.svg" alt="MEDI STAXION" width={100} height={24} className="h-5 w-auto opacity-40" />
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 px-4 mb-2">
          {[
            { label: "이용약관", href: "/terms" },
            { label: "개인정보처리방침", href: "/privacy" },
            { label: "1:1 문의", href: "/contact" },
            { label: "전문가 협력문의", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[10px] text-[#94A3B8] hover:text-[#64748B]"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p className="px-4 text-[9px] text-[#94A3B8]">
          © 2026 MEDI STAXION. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
