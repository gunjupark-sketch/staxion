import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

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
      <section className="relative bg-surface-dark">
        {service.image_url ? (
          <>
            {/* PC: 35% 비율 */}
            <div className="relative hidden sm:block" style={{ paddingBottom: "35%" }}>
              <Image
                src={service.image_url}
                alt={service.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent" />
            </div>
            {/* 모바일: 16:9 */}
            <div className="relative block sm:hidden" style={{ paddingBottom: "56.25%" }}>
              <Image
                src={service.mobile_image_url || service.image_url}
                alt={service.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent" />
            </div>
          </>
        ) : (
          <div className="h-48 md:h-72" />
        )}

        {/* 히어로 오버레이 텍스트 */}
        <div className="relative z-10 -mt-28 pb-14 md:-mt-36 md:pb-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {service.category && (
                <span className="inline-flex items-center rounded-full bg-brand-lime-safe/20 px-3.5 py-1 text-xs font-semibold text-brand-lime backdrop-blur-sm">
                  {service.category}
                </span>
              )}
              {service.delivery_type && (
                <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm">
                  {service.delivery_type}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-white md:text-5xl leading-tight">
              {service.name}
            </h1>
            {service.description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                {service.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 2. 핵심 정보 + CTA ═══ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          {infoItems.length > 0 && (
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/50 bg-surface-secondary/40 p-6 text-center"
                >
                  <p className="text-xs font-medium text-text-muted uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-bold text-text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {service.cta_text && service.cta_link && (
            <div className="mt-12 text-center">
              <Link
                href={service.cta_link}
                className="inline-flex h-14 items-center justify-center rounded-xl bg-brand-lime-btn px-12 text-base font-semibold text-white transition-all hover:bg-brand-lime-btn/90 hover:shadow-lg hover:shadow-brand-lime-btn/20"
              >
                {service.cta_text}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══ 3. 상세 콘텐츠 (리치텍스트) ═══ */}
      {richContent && (
        <section className="bg-surface-secondary py-16 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div
              className="prose prose-sm md:prose-base max-w-none
                prose-headings:text-text-primary prose-headings:font-bold
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-a:text-brand-lime-text prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-md
                prose-strong:text-text-primary
                prose-li:text-text-secondary
                prose-table:border-collapse prose-th:bg-surface-dark prose-th:text-white prose-th:p-3 prose-td:border prose-td:p-3"
              dangerouslySetInnerHTML={{ __html: richContent }}
            />
          </div>
        </section>
      )}

      {/* ═══ 4. 법적 고시 ═══ */}
      {(disclosures.length > 0 || service.disclaimer) && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <h2 className="text-lg font-bold text-text-primary mb-8">서비스 정보 고시</h2>

            {disclosures.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-border/50">
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
              <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200/60 p-6">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-3">
                  면책 고지
                </p>
                <p className="text-sm text-amber-800 leading-relaxed whitespace-pre-wrap">
                  {service.disclaimer}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══ 5. 하단 CTA ═══ */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-lime uppercase">
            Get Started
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="mt-4 text-gray-400">
            전문 상담을 통해 맞춤 서비스를 안내해드립니다.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={service.cta_link || "/contact"}
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-brand-lime-btn px-10 text-base font-semibold text-white transition-all hover:bg-brand-lime-btn/90 hover:shadow-lg hover:shadow-brand-lime-btn/20 sm:w-auto"
            >
              {service.cta_text || "상담 신청하기"}
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-white/20 px-10 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 sm:w-auto"
            >
              서비스 목록
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
