import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { sanitizeHtml } from "@/lib/sanitize";
import {
  Clock,
  Users,
  Zap,
  CreditCard,
  ArrowRight,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getService(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .is("deleted_at", null)
    .single();
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return {
    title: service.meta_title || `${service.name} | MEDI STAXION`,
    description: service.meta_description || service.description || "",
  };
}

const INFO_ICONS: Record<string, typeof Clock> = {
  "제공 방식": Zap,
  "소요 시간": Clock,
  대상: Users,
  가격: CreditCard,
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const richContent = service.detail_content || service.content || "";
  const hasPrice = service.price != null && Number(service.price) > 0;
  const price = hasPrice
    ? `${Number(service.price).toLocaleString()}${service.price_unit || "원"}`
    : null;

  const infoItems = [
    service.delivery_type && { label: "제공 방식", value: service.delivery_type },
    service.duration && { label: "소요 시간", value: service.duration },
    service.target_audience && { label: "대상", value: service.target_audience },
    price && { label: "가격", value: price },
  ].filter(Boolean) as { label: string; value: string }[];

  const disclosures = [
    { label: "서비스 제공 사업자", value: service.provider },
    { label: "이용조건 / 자격 요건", value: service.eligibility },
    { label: "취소 / 환불 규정", value: service.refund_policy },
    { label: "취소 방법", value: service.cancel_method },
    { label: "고객센터", value: service.cs_contact },
  ].filter((d) => d.value);

  return (
    <>
      {/* ═══ 1. 풀 와이드 히어로 ═══ */}
      <section className="relative bg-layout-dark">
        {/* 데스크탑 배경 */}
        <div className="relative hidden sm:block" style={{ paddingBottom: "35%" }}>
          <Image
            src={service.image_url || "/images/bg/services-banner.png"}
            alt={service.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-layout-dark via-layout-dark/60 to-layout-dark/10" />
        </div>
        {/* 모바일 배경 */}
        <div className="relative block sm:hidden" style={{ paddingBottom: "56.25%" }}>
          <Image
            src={service.mobile_image_url || service.image_url || "/images/bg/services-banner.png"}
            alt={service.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-layout-dark via-layout-dark/60 to-layout-dark/10" />
        </div>

        <div className="relative z-10 -mt-32 pb-16 md:-mt-40 md:pb-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            {/* 브레드크럼 */}
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
              <Link href="/" className="hover:text-white/60 transition-colors">홈</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/services" className="hover:text-white/60 transition-colors">서비스</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/70">{service.name}</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              {service.category && (
                <span className="inline-flex items-center rounded-full bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon backdrop-blur-sm border border-brand-neon/20">
                  {service.category}
                </span>
              )}
              {service.delivery_type && (
                <span className="inline-flex items-center rounded-full bg-white/8 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm border border-white/10">
                  {service.delivery_type}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-black text-white md:text-5xl lg:text-6xl leading-tight tracking-tight">
              {service.name}
            </h1>
            {service.description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                {service.description}
              </p>
            )}

            {/* 히어로 내 CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={service.cta_link || "/contact"}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
              >
                <MessageCircle className="h-4 w-4" />
                {service.cta_text || "상담 신청하기"}
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-7 text-sm font-medium text-white/80 transition-colors hover:bg-white/5"
              >
                전체 서비스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. 핵심 정보 카드 ═══ */}
      {infoItems.length > 0 && (
        <section className="relative -mt-1 bg-background">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="relative -mt-8 grid gap-3 grid-cols-2 md:grid-cols-4">
              {infoItems.map((item) => {
                const Icon = INFO_ICONS[item.label] || Zap;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-neon/10">
                      <Icon className="h-4.5 w-4.5 text-brand-neon-text" />
                    </div>
                    <p className="text-[10px] font-semibold text-text-muted uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-base font-bold text-text-primary leading-snug">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══ 3. 상세 콘텐츠 ═══ */}
      {richContent && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div
              className="service-content"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(richContent) }}
            />
          </div>
        </section>
      )}

      {/* ═══ 4. 법적 고시 ═══ */}
      {(disclosures.length > 0 || service.disclaimer) && (
        <section className="bg-surface-secondary py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <h2 className="text-lg font-bold text-text-primary mb-8">서비스 정보 고시</h2>

            {disclosures.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
                <table className="w-full text-sm">
                  <tbody>
                    {disclosures.map((d) => (
                      <tr key={d.label} className="border-b border-border/30 last:border-b-0">
                        <td className="w-40 md:w-52 bg-surface-secondary/60 px-5 py-4 font-medium text-text-primary whitespace-nowrap align-top">
                          {d.label}
                        </td>
                        <td className="px-5 py-4 text-text-secondary whitespace-pre-wrap leading-relaxed">
                          {d.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {service.disclaimer && (
              <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200/60 p-6 dark:bg-amber-950/20 dark:border-amber-800/30">
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-3">
                  면책 고지
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-300/80 leading-relaxed whitespace-pre-wrap">
                  {service.disclaimer}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══ 5. 하단 CTA ═══ */}
      <section className="relative bg-layout-dark py-24 md:py-32 overflow-hidden">
        {/* 배경 이미지 */}
        <Image
          src="/images/bg/services-banner.png"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-layout-dark/80 via-layout-dark/60 to-layout-dark/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            Get Started
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="mt-4 text-white/50">
            전문 상담을 통해 맞춤 서비스를 안내해드립니다.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={service.cta_link || "/contact"}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-neon px-10 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25 sm:w-auto"
            >
              {service.cta_text || "상담 신청하기"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-white/20 px-10 text-base font-medium text-white/70 transition-colors hover:bg-white/5 sm:w-auto"
            >
              서비스 목록
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
