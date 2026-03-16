import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";

const categoryLabel: Record<string, string> = {
  blog: "블로그",
  column: "칼럼",
  news: "뉴스",
};

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, slug, excerpt, cover_image, category, published_at, author_name")
    .eq("is_published", true)
    .is("deleted_at", null)
    .order("published_at", { ascending: false });

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };

  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">
            Blog
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            블로그
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            미용치과 도입에 필요한 인사이트와 실무 노하우
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {!posts || posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-20">
              <p className="text-lg text-text-muted">
                아직 게시된 글이 없습니다.
              </p>
              <p className="mt-2 text-sm text-text-muted">곧 유용한 콘텐츠로 찾아뵙겠습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden bg-surface-secondary">
                      {post.cover_image ? (
                        <Image
                          src={post.cover_image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-text-muted">
                          <svg
                            className="size-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {categoryLabel[post.category] || post.category}
                      </Badge>
                      <h3 className="text-base font-bold leading-snug text-text-primary line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="mt-2 text-sm leading-relaxed text-text-muted line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                        {post.author_name && <span>{post.author_name}</span>}
                        {post.author_name && post.published_at && (
                          <span>·</span>
                        )}
                        {post.published_at && (
                          <span>{formatDate(post.published_at)}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
