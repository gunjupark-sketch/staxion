import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "메디컨시어지 서비스 | MEDI STAXION",
  description: "미용치과 도입을 위한 올인원 컨시어지 서비스. 컨설팅, 장비 셋업, 교육, 마케팅까지.",
};

export default async function ServicesPage() {
  const supabase = await createClient();

  const { data: services } = await supabase
    .from("services")
    .select("id, name, slug, description, image_url, category, delivery_type, price, price_unit")
    .eq("is_published", true)
    .is("deleted_at", null)
    .order("sort_order", { ascending: true });

  const hasServices = services && services.length > 0;

  return (
    <>
      <PageBanner pageSlug="services" />

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src="/images/bg/services-banner.png"
          alt="메디컨시어지 서비스"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            메디컨시어지 서비스
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            미용치과 도입을 위한 올인원 컨시어지. 컨설팅, 장비 셋업, 교육, 마케팅까지.
          </p>
        </div>
      </section>

      {/* ═══ 1. 서비스 흐름도 — 풀 와이드 ═══ */}
      <section className="relative bg-card py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-lime-text uppercase">
              Service Flow
            </p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
              메디컨시어지 서비스 흐름
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              데이터 기반 분석부터 실행·성과 관리까지, 6단계로 치과의 성장을 설계합니다.
            </p>
          </div>

          {/* 데스크탑: 가로 6열 */}
          <div className="mt-16 hidden md:grid md:grid-cols-6 md:gap-6">
            {[
              { step: "01", title: "골든시그널\n권역분석", desc: "6가지 분석으로 권역의 심장부를 꿰뚫는 프리미엄 분석" },
              { step: "02", title: "캐치전략", desc: "분석 결과 기반 치과별 맞춤 성공전략 수립" },
              { step: "03", title: "BI 정립", desc: "골든시그널 기반 브랜드 네이밍, DNA, 미션/비전 설계" },
              { step: "04", title: "디자인 정렬", desc: "BI를 시각적으로 체험하게 만드는 전 접점 통일" },
              { step: "05", title: "핀셋마케팅", desc: "실행형 9모듈로 신환 & 매출을 만드는 마케팅" },
              { step: "06", title: "성과 리포트", desc: "데이터 분석 기반 전략 최적화 순환" },
            ].map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                {/* 커넥터 라인 */}
                {i < 5 && (
                  <div className="absolute top-8 left-[calc(50%+2rem)] h-px w-[calc(100%-4rem)] bg-border" />
                )}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-surface-dark shadow-lg">
                  <span className="text-sm font-bold text-brand-lime">{item.step}</span>
                </div>
                <h3 className="mt-5 text-sm font-bold leading-snug text-text-primary whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 모바일: 세로 타임라인 */}
          <div className="relative mt-14 md:hidden">
            {/* 세로 라인 */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {[
                { step: "01", title: "골든시그널 권역분석", desc: "6가지 분석으로 권역의 심장부를 꿰뚫는 프리미엄 분석" },
                { step: "02", title: "캐치전략", desc: "분석 결과 기반 치과별 맞춤 성공전략 수립" },
                { step: "03", title: "BI 정립", desc: "골든시그널 기반 브랜드 네이밍, DNA, 미션/비전 설계" },
                { step: "04", title: "디자인 정렬", desc: "BI를 시각적으로 체험하게 만드는 전 접점 통일" },
                { step: "05", title: "핀셋마케팅", desc: "실행형 9모듈로 신환 & 매출을 만드는 마케팅" },
                { step: "06", title: "성과 리포트", desc: "데이터 분석 기반 전략 최적화 순환" },
              ].map((item) => (
                <div key={item.step} className="relative flex gap-5 pl-1">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark shadow-md">
                    <span className="text-xs font-bold text-brand-lime">{item.step}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-bold text-text-primary">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. 문제 제기 — 풀 와이드 다크 ═══ */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-lime uppercase">
              Why Clinics Fail
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              많은 치과들이 폐원하는 이유
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              마케팅 대행사에 의존하고, 데이터 없이 감으로 운영하면 결과는 같습니다.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {[
              { icon: "📊", reason: "단순 좌표 상권분석을 하는 광고 대행사에 의존" },
              { icon: "🎯", reason: "데이터 없이 '감으로' 결정" },
              { icon: "🎨", reason: "경쟁 치과보다 더 '예쁘게만' 하려는 브랜딩" },
              { icon: "🏗️", reason: "주변 환경 변화(개발/이주/학군) 반영 안 됨" },
            ].map((item) => (
              <div
                key={item.reason}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. 세부 서비스 목록 — 풀 와이드 ═══ */}
      {hasServices && (
        <section className="bg-surface-secondary py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-lime-text uppercase">
                Our Services
              </p>
              <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
                세부 서비스
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                치과의 상황과 목표에 맞는 서비스를 선택하세요.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.id} href={`/services/${service.slug || service.id}`} className="group">
                  <Card className="h-full overflow-hidden border-border/50 bg-card transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    {service.image_url ? (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.image_url}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-surface-secondary to-border/20">
                        <span className="text-4xl text-text-muted/20 font-bold">S</span>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {service.category && (
                          <Badge variant="secondary" className="bg-brand-lime-safe/10 text-brand-lime-text text-xs">
                            {service.category}
                          </Badge>
                        )}
                        {service.delivery_type && (
                          <Badge variant="outline" className="text-xs">{service.delivery_type}</Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-lime-text transition-colors">
                        {service.name}
                      </h3>
                      {service.description && (
                        <p className="mt-2 text-sm text-text-muted line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                      )}
                      {service.price != null && Number(service.price) > 0 && (
                        <p className="mt-4 text-xl font-bold text-brand-lime-text">
                          {Number(service.price).toLocaleString()}
                          <span className="text-sm font-normal text-text-muted ml-0.5">
                            {service.price_unit || "원"}
                          </span>
                        </p>
                      )}
                      <div className="mt-4 flex items-center text-sm font-medium text-brand-lime-text opacity-0 transition-opacity group-hover:opacity-100">
                        자세히 보기
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ 4. CTA — 풀 와이드 ═══ */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-lime uppercase">
            Get Started
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            치과의 골든시그널을 찾는 의료성장연구소
          </h2>
          <p className="mt-4 text-gray-400">
            데이터 기반 분석과 실행 전략으로 치과의 성장을 설계합니다.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-brand-lime-btn px-10 text-base font-semibold text-white transition-all hover:bg-brand-lime-btn/90 hover:shadow-lg hover:shadow-brand-lime-btn/20"
            >
              상담 신청하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
