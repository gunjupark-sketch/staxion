import Image from "next/image";
import Link from "next/link";
import { Globe, MapPin, Star, Shield, Plane, Phone } from "lucide-react";

const FEATURES = [
  {
    icon: Star,
    title: "K-Beauty Dental",
    titleKo: "K-뷰티 덴탈",
    desc: "World-class cosmetic dentistry combined with Korea's renowned beauty expertise.",
  },
  {
    icon: Shield,
    title: "Licensed & Certified",
    titleKo: "면허 인증 치과",
    desc: "All partner clinics are government-certified for international patient care.",
  },
  {
    icon: MapPin,
    title: "Clinic Finder",
    titleKo: "치과 찾기",
    desc: "Find the perfect clinic near you with our interactive map and detailed profiles.",
  },
  {
    icon: Plane,
    title: "Travel Support",
    titleKo: "여행 지원",
    desc: "Airport pickup, accommodation, and interpreter services available.",
  },
];

const TREATMENTS = [
  { name: "Teeth Whitening", nameKo: "치아미백", icon: "✨" },
  { name: "Veneers", nameKo: "라미네이트", icon: "💎" },
  { name: "Dental Implants", nameKo: "임플란트", icon: "🦷" },
  { name: "Orthodontics", nameKo: "교정", icon: "😁" },
  { name: "Botox & Fillers", nameKo: "보톡스·필러", icon: "💉" },
  { name: "Thread Lifting", nameKo: "실리프팅", icon: "🧵" },
];

export default function GlobalPage() {
  return (
    <>
      {/* Hero — 영어 메인 */}
      <section className="relative overflow-hidden bg-layout-dark py-24 md:py-32">
        <Image
          src="/images/bg/global-banner.png"
          alt="MEDI STAXION Global"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-neon/30 bg-brand-neon/10 px-4 py-1.5 backdrop-blur-sm">
            <Globe className="h-4 w-4 text-brand-neon" />
            <span className="text-sm font-semibold text-brand-neon tracking-wider">MEDI STAXION GLOBAL</span>
          </div>

          <h1 className="text-4xl font-black text-white md:text-6xl lg:text-7xl leading-tight">
            Experience<br />
            <span className="text-brand-neon">K-Beauty Dental</span><br />
            in Korea
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            Premium cosmetic dentistry meets Korea&apos;s world-famous beauty standards.
            <br className="hidden md:block" />
            Teeth whitening, veneers, botox, fillers — all in one visit.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/global/clinics"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/20"
            >
              <MapPin className="h-5 w-5" />
              Find a Clinic
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-semibold text-white transition-all hover:bg-white/5"
            >
              <Phone className="h-5 w-5" />
              Contact Us
            </Link>
          </div>

          <p className="mt-4 text-sm text-white/30">
            🇰🇷 대한민국 미용치과 · Available in English, 中文, 日本語
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Popular Treatments</h2>
            <p className="mt-2 text-text-muted">Dental + Cosmetic — All in One Place</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {TREATMENTS.map((t) => (
              <div
                key={t.name}
                className="group rounded-xl bg-card border border-border/50 p-5 text-center transition-all hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-3">{t.icon}</div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-text-muted mt-1">{t.nameKo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 상세 (B2B) */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
              Our Services
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              글로벌 메디컬 컨시어지 시스템
            </h2>
            <p className="mt-2 text-text-muted">
              복잡한 해외 환자 유치의 모든 과정을 A부터 Z까지 책임집니다
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "해외 환자 네트워크",
                desc: "현지 유명 의료 플랫폼 및 에이전시와의 제휴, 인플루언서 마케팅으로 국가별 타깃 맞춤형 유입 네트워크를 구축합니다.",
                targets: "중국, 일본, 태국, 필리핀, 말레이시아, 베트남",
              },
              {
                title: "현지화 콘텐츠 제작",
                desc: "타겟 국가에 맞는 의료 문화와 트렌드를 반영한 현지 언어·비주얼 중심의 프로모션 콘텐츠를 기획합니다.",
                targets: "SNS, 유튜브, 현지 의료 플랫폼",
              },
              {
                title: "프리미엄 의전 서비스",
                desc: "공항 픽업, 통역, 특급 호텔 제휴 숙박, 수술 후 프리미엄 케어, 보호자 관광 프로그램까지 연계하는 VVIP 패키지",
                targets: "All-in-One Package",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/50 p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                <p className="mt-4 text-xs font-medium text-brand-neon-text">{item.targets}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface-secondary py-24 md:py-32 dark:bg-secondary">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Why Choose Us?</h2>
            <p className="mt-2 text-text-muted">Korea&apos;s trusted platform for international dental patients</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl bg-card border border-border/50 p-6 transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-xs text-text-muted mb-2">{f.titleKo}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview / Clinic Finder CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl bg-layout-dark p-8 md:p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/10 via-transparent to-info/10" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Find Your Clinic
                </h2>
                <p className="mt-3 max-w-lg text-white/60 leading-relaxed">
                  Browse certified K-Beauty Dental clinics across Korea.
                  Interactive map with clinic details, reviews, available treatments, and pricing.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Seoul", "Gangnam", "Busan", "Jeju"].map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/50"
                    >
                      📍 {city}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/global/clinics"
                className="shrink-0 inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/20"
              >
                <MapPin className="h-5 w-5" />
                Explore Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">For Clinics</p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            해외환자 유치에 관심 있으신가요?
          </h2>
          <p className="mt-3 text-text-secondary">
            MEDI STAXION과 함께 글로벌 환자를 유치하세요.
            <br />
            입점 상담을 신청해주시면 자세히 안내드리겠습니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg border border-primary bg-primary/10 px-8 text-base font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            입점 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
