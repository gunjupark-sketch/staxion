import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationPage() {
  // TODO: Supabase에서 세미나 목록 fetch
  const seminars = [
    {
      id: "1",
      title: "보톡스 기초 실습 과정",
      date: "2026년 4월 12일",
      location: "서울 강남",
      price: 500000,
      seats: "12/20",
      status: "모집중",
    },
    {
      id: "2",
      title: "필러 시술 마스터 클래스",
      date: "2026년 4월 26일",
      location: "서울 강남",
      price: 800000,
      seats: "8/15",
      status: "모집중",
    },
    {
      id: "3",
      title: "미용치과 개원 전략 세미나",
      date: "2026년 5월 10일",
      location: "온라인 (Zoom)",
      price: 0,
      seats: "45/100",
      status: "모집중",
    },
  ];

  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">Education</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">교육 · 세미나</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            현직 전문의가 직접 가르치는 실습 중심 교육 프로그램
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-6">
            {seminars.map((seminar) => (
              <Card key={seminar.id} className="border-border/50 transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-text-primary">{seminar.title}</h3>
                      <Badge variant="secondary" className="bg-brand-lime-safe/10 text-brand-lime-safe">
                        {seminar.status}
                      </Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-text-muted">
                      <span>{seminar.date}</span>
                      <span>{seminar.location}</span>
                      <span>{seminar.seats}석</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold text-text-primary">
                      {seminar.price === 0 ? "무료" : `${seminar.price.toLocaleString()}원`}
                    </p>
                    <Link
                      href={`/contact`}
                      className="rounded-lg bg-brand-lime-safe px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-lime-safe/90"
                    >
                      신청하기
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
