"use client";

import Link from "next/link";
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
  Play,
  HelpCircle,
  Headphones,
} from "lucide-react";

/* ── 타입 ── */
interface LeftSidebarProps {
  className?: string;
}

/* ── 메인 컴포넌트 ── */
export default function LeftSidebar({ className }: LeftSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* ── 서브 컴포넌트 ── */
  const Item = ({
    icon: Icon,
    label,
    href,
  }: {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    label: string;
    href?: string;
  }) => {
    const active = href ? isActive(href) : false;

    const content = (
      <span
        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-all duration-150 mb-0.5 hover:bg-secondary hover:translate-x-0.5 ${
          active ? "text-foreground font-semibold bg-brand-neon/15" : "text-text-secondary font-normal"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-150 ${active ? "text-foreground" : "text-text-muted"}`}
        />
        {label}
      </span>
    );

    if (!href) {
      return <div className="cursor-default">{content}</div>;
    }

    return <Link href={href}>{content}</Link>;
  };

  const Sub = ({ label, href }: { label: string; href: string }) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        className={`block ml-[30px] py-1.5 text-[12px] transition-colors hover:opacity-80 ${
          active ? "text-foreground font-semibold" : "text-text-muted font-normal"
        }`}
      >
        {label}
      </Link>
    );
  };

  const GroupLabel = ({ children }: { children: string }) => (
    <p
      className="mb-2 mt-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-text-muted"
    >
      {children}
    </p>
  );

  /* ── 렌더 ── */
  return (
    <div className={className}>
      <Item icon={Home} label="메인 라운지" href="/" />
      <Item icon={Store} label="스테이션몰" href="/store" />

      <div className="my-3" />
      <GroupLabel>서비스</GroupLabel>
      <Item icon={Megaphone} label="미용치과 컨설팅" href="/services" />
      <Item icon={GraduationCap} label="교육 및 세미나" href="/education" />
      <Item icon={Crosshair} label="골든시그널" />
      <Sub label="권역분석" href="/area-analysis" />
      <Sub label="캐치전략" href="/services/golden-signal-catch-strategy" />
      <Sub label="핀셋마케팅" href="/services/pincet-marketing" />
      <Item icon={Palette} label="브랜딩 및 디자인" />
      <Sub label="BI정립" href="/services/bi-brand-identity" />
      <Sub label="디자인정렬" href="/services/design-alignment" />
      <Item icon={Tv} label="대기실 영상구독" href="/mypage/waiting-room" />
      <Item icon={BookOpen} label="미용치과 가이드북" href="/guidebook" />

      <div className="my-3" />
      <GroupLabel>협업</GroupLabel>
      <Item icon={Users} label="연자 및 세미나" href="/education" />
      <Item icon={Handshake} label="입점" href="/contact" />

      <div className="my-3" />
      <GroupLabel>커뮤니티</GroupLabel>
      <Item icon={PenSquare} label="메디포스트" href="/news" />
      <Item icon={FileText} label="자유게시판" href="/community" />
      <Item icon={Play} label="숏츠" href="/shorts" />
      <Item icon={HelpCircle} label="메디지식인" href="/community?tab=qna" />

      <div className="my-3" />
      <GroupLabel>지원</GroupLabel>
      <Item icon={Headphones} label="고객센터" href="/contact" />

      <div className="flex-1" />

      <div className="pt-4 border-t border-border">
        <div className="flex flex-wrap gap-x-3 gap-y-1 px-3 mb-2">
          {[
            { label: "이용약관", href: "/terms" },
            { label: "개인정보처리방침", href: "/privacy" },
            { label: "1:1 문의", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[10px] text-text-muted"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p className="px-3 text-[9px] text-text-muted">
          © 2026 MEDI STAXION
        </p>
      </div>
    </div>
  );
}
