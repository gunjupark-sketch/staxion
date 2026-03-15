import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  서비스: [
    { label: "가이드북", href: "/guidebook" },
    { label: "교육/세미나", href: "/education" },
    { label: "컨설팅", href: "/services" },
    { label: "스토어", href: "/store" },
  ],
  정보: [
    { label: "미용치과 소개", href: "/about-beauty" },
    { label: "블로그", href: "/blog" },
    { label: "회사소개", href: "/about" },
    { label: "해외환자유치", href: "/global" },
  ],
  지원: [
    { label: "상담신청", href: "/contact" },
    { label: "커뮤니티", href: "/community" },
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo.png" alt="MEDI STAXION" width={140} height={34} className="h-7 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              미용치과, 시작이 다르면
              <br />
              결과가 다릅니다.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold text-text-primary">
                {category}
              </h3>
              <ul className="space-y-0.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block min-h-[44px] py-2 text-sm text-text-muted transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-text-muted md:flex-row">
          <div className="text-center md:text-left">
            <p>(주)더스테이션 | 대표: 박건주</p>
            <p className="mt-1">
              사업자등록번호: 000-00-00000 | 통신판매업신고: 제0000-서울강남-00000호
            </p>
          </div>
          <p>&copy; {new Date().getFullYear()} STAXION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
