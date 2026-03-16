import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

type PostCategory = "blog" | "column" | "news";

const categoryStyle: Record<PostCategory, string> = {
  blog: "bg-emerald-100 text-emerald-700",
  column: "bg-purple-100 text-purple-700",
  news: "bg-blue-100 text-blue-700",
};

const categoryLabel: Record<PostCategory, string> = {
  blog: "블로그",
  column: "칼럼",
  news: "뉴스",
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
    .eq("slug", slug)
    .eq("is_published", true)
    .is("deleted_at", null)
    .single();
  return data;
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
    title: `${post.title} | MEDI STAXION 블로그`,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const supabase = await createClient();
  await supabase
    .from("posts")
    .update({ view_count: (post.view_count || 0) + 1 })
    .eq("id", post.id);

  return (
    <>
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-brand-lime"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            블로그 목록
          </Link>

          <div className="mt-6 flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryStyle[post.category as PostCategory]}`}
            >
              {categoryLabel[post.category as PostCategory]}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-bold leading-tight text-white md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            {post.author_name && (
              <span className="font-medium text-gray-300">{post.author_name}</span>
            )}
            {post.published_at && <span>{formatDate(post.published_at)}</span>}
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {((post.view_count || 0) + 1).toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      {post.cover_image && (
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="-mt-2 overflow-hidden rounded-xl">
            <img src={post.cover_image} alt={post.title} className="w-full object-cover" />
          </div>
        </div>
      )}

      <article className="py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div
            className="prose prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-brand-lime-safe prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-strong:text-text-primary"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>
      </article>

      <section className="border-t border-border/40 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-surface-secondary px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            목록으로 돌아가기
          </Link>
        </div>
      </section>
    </>
  );
}
