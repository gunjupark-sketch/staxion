import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { name: "가이드북", desc: "미용치과 도입의 모든 것을 담은 실전 가이드", href: "/guidebook" },
  { name: "교육 · 세미나", desc: "현직 전문의의 실습 중심 교육 프로그램", href: "/education" },
  { name: "컨설팅", desc: "우리 치과에 맞는 맞춤형 도입 전략 수립", href: "/contact" },
  { name: "장비 · 재료", desc: "검증된 장비와 재료 선정 및 공급", href: "/store" },
  { name: "해외환자유치", desc: "글로벌 환자 유치 전략 및 네트워크", href: "/global" },
  { name: "대기실 영상", desc: "환자 교육용 대기실 영상 콘텐츠 제공", href: "/waiting-room" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">Services</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">서비스</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            미용치과 도입부터 운영까지, STAXION이 제공하는 6가지 서비스
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.name} href={service.href}>
                <Card className="h-full border-border/50 transition-all hover:border-brand-lime-safe/30 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-lime-safe/10">
                      <div className="h-5 w-5 rounded bg-brand-lime-safe/40" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{service.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
