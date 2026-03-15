import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  // TODO: Supabase에서 posts fetch
  const posts = [
    {
      id: "1",
      title: "치과에서 보톡스 시술, 법적으로 가능한가?",
      excerpt: "2016년 대법원 판결을 기반으로 치과의사의 미용시술 법적 근거를 정리합니다.",
      category: "column" as const,
      date: "2026-03-10",
      slug: "botox-legal-basis",
    },
    {
      id: "2",
      title: "미용치과 도입 시 가장 많이 하는 5가지 실수",
      excerpt: "수백 곳의 치과를 컨설팅하며 발견한 반복되는 실수 패턴과 해결법.",
      category: "blog" as const,
      date: "2026-03-08",
      slug: "top-5-mistakes",
    },
    {
      id: "3",
      title: "2026년 미용치과 시장 트렌드 리포트",
      excerpt: "올해 주목해야 할 시술 트렌드, 장비 동향, 환자 니즈 변화를 분석합니다.",
      category: "news" as const,
      date: "2026-03-01",
      slug: "2026-trend-report",
    },
  ];

  const categoryLabel = { blog: "블로그", column: "칼럼", news: "뉴스" };

  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">Blog</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">블로그</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">미용치과 도입에 필요한 인사이트와 실무 노하우</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                  <div className="aspect-video bg-surface-secondary" />
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {categoryLabel[post.category]}
                    </Badge>
                    <h3 className="text-base font-bold leading-snug text-text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-text-muted">{post.date}</p>
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
