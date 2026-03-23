import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { sanitizeHtml } from "@/lib/sanitize";
import { ArrowLeftIcon, EyeIcon, CalendarIcon, UserIcon } from "lucide-react";

type PostCategory = "blog" | "column" | "news";

const categoryLabel: Record<PostCategory, string> = {
  news: "소식",
  blog: "블로그",
  column: "칼럼",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function getPost(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", decodeURIComponent(slug))
    .eq("is_published", true)
    .is("deleted_at", null)
    .single();
  return data;
}

async function getRelatedPosts(currentId: string, category: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("posts")
    .select("id, title, slug, excerpt, cover_image, category, published_at, author_name")
    .eq("is_published", true)
    .is("deleted_at", null)
    .eq("category", category)
    .neq("id", currentId)
    .order("published_at", { ascending: false })
    .limit(3);
  return data ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "글을 찾을 수 없습니다 | MEDI STAXION" };
  }

  return {
    title: `${post.title} | MEDI STAXION`,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export default async function MediaPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Increment view count
  const supabase = await createClient();
  await supabase
    .from("posts")
    .update({ view_count: (post.view_count || 0) + 1 })
    .eq("id", post.id);

  const relatedPosts = await getRelatedPosts(post.id, post.category);

  return (
    <div className="min-h-screen bg-white">
      {/* ── 커버 이미지 (풀폭) ── */}
      {post.cover_image && (
        <div className="relative w-full h-[40vh] min-h-[300px] max-h-[560px] bg-gray-900">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover opacity-80"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          {/* 뒤로가기 */}
          <Link
            href="/medipost"
            className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur-sm transition-colors hover:bg-black/50"
          >
            <ArrowLeftIcon className="size-4" />
            목록
          </Link>
        </div>
      )}

      {/* ── 타이틀 영역 ── */}
      <header className={`mx-auto max-w-[680px] px-5 ${post.cover_image ? "-mt-20 relative z-10" : "pt-16"}`}>
        {!post.cover_image && (
          <Link
            href="/medipost"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-600"
          >
            <ArrowLeftIcon className="size-4" />
            목록으로
          </Link>
        )}

        <span className="inline-block rounded-full bg-brand-neon-safe/10 px-3 py-1 text-xs font-semibold text-brand-neon-btn">
          {categoryLabel[post.category as PostCategory]}
        </span>

        <h1 className={`mt-4 text-2xl font-bold leading-tight tracking-tight md:text-4xl ${
          post.cover_image ? "text-white drop-shadow-lg" : "text-gray-900"
        }`}>
          {post.title}
        </h1>

        {post.excerpt && (
          <p className={`mt-4 text-base leading-relaxed ${
            post.cover_image ? "text-white/70" : "text-gray-500"
          }`}>
            {post.excerpt}
          </p>
        )}
      </header>

      {/* ── 작성자 프로필 + 메타 ── */}
      <div className="mx-auto max-w-[680px] px-5 mt-8">
        <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
          {/* 아바타 */}
          <div className="flex size-11 items-center justify-center rounded-full bg-gray-100">
            <UserIcon className="size-5 text-gray-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              {post.author_name || "MEDI STAXION"}
            </p>
            <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-400">
              {post.published_at && (
                <span className="inline-flex items-center gap-1">
                  <CalendarIcon className="size-3" />
                  {formatDate(post.published_at)}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <EyeIcon className="size-3" />
                {((post.view_count || 0) + 1).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 본문 ── */}
      <article className="py-10 md:py-14">
        <div className="mx-auto max-w-[680px] px-5">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-gray-600 prose-p:leading-[1.8]
              prose-a:text-brand-neon-btn prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-sm
              prose-strong:text-gray-800
              prose-blockquote:border-l-brand-neon-safe prose-blockquote:text-gray-500 prose-blockquote:not-italic
              prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content || "") }}
          />
        </div>
      </article>

      {/* ── 하단 구분선 + 태그 영역 ── */}
      <div className="mx-auto max-w-[680px] px-5">
        <div className="border-t border-gray-100 pt-6 pb-2">
          <p className="text-xs text-gray-400">
            이 글이 도움이 되었다면 주변에 공유해주세요.
          </p>
        </div>
      </div>

      {/* ── 관련 글 추천 ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12 mt-8">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">관련 글</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/medipost/${related.slug}`}
                  className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
                >
                  {related.cover_image ? (
                    <div className="relative aspect-[16/9] bg-gray-100">
                      <Image
                        src={related.cover_image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200" />
                  )}
                  <div className="p-4">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {categoryLabel[related.category as PostCategory]}
                    </span>
                    <h3 className="mt-1.5 text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-brand-neon-btn transition-colors">
                      {related.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                      {related.author_name && <span>{related.author_name}</span>}
                      {related.published_at && <span>{formatDate(related.published_at)}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 목록으로 돌아가기 ── */}
      <section className="py-10">
        <div className="mx-auto max-w-[680px] px-5 text-center">
          <Link
            href="/medipost"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-gray-300"
          >
            <ArrowLeftIcon className="size-4" />
            목록으로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}
