"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { EyeIcon, SearchIcon } from "lucide-react";

type PostCategory = "blog" | "column" | "news";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  category: PostCategory;
  published_at: string | null;
  author_name: string | null;
  view_count: number;
  created_at: string;
}

const categories: { value: PostCategory | "all"; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "news", label: "소식" },
  { value: "blog", label: "블로그" },
  { value: "column", label: "칼럼" },
];

const categoryLabel: Record<PostCategory, string> = {
  news: "소식",
  blog: "블로그",
  column: "칼럼",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHour = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);

  if (diffMin < 1) return "방금 전";
  if (diffMin < 60) return `${diffMin}분 전`;
  if (diffHour < 24) return `${diffHour}시간 전`;
  if (diffDay < 7) return `${diffDay}일 전`;
  return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

export default function MediaPostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<PostCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const supabase = createClient();
      const { data } = await supabase
        .from("posts")
        .select("id, title, slug, excerpt, cover_image, category, published_at, author_name, view_count, created_at")
        .eq("is_published", true)
        .is("deleted_at", null)
        .order("published_at", { ascending: false, nullsFirst: false });

      setPosts(data ?? []);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
          (p.author_name && p.author_name.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, activeCategory, searchQuery]);

  // 피처드 = 첫 3개, 나머지 = 리스트
  const featured = filtered.slice(0, 3);
  const rest = filtered.slice(3);

  return (
    <div className="min-h-screen bg-white">
      {/* ── 히어로 ── */}
      <section className="bg-gray-950 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            MEDI POST
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            인사이트 & 소식
          </h1>
          <p className="mt-3 max-w-lg text-base text-white/50">
            미용치과 업계 트렌드, 실무 노하우, 깊이 있는 칼럼을 만나보세요
          </p>
        </div>
      </section>

      {/* ── 필터 바 ── */}
      <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* 카테고리 탭 */}
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === cat.value
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {/* 검색 */}
            <div className="relative hidden sm:block">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <input
                type="text"
                placeholder="검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 w-48 rounded-full border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:w-64 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 피처드 카드 (비대칭 3개) ── */}
      {!loading && featured.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:h-[480px]">
              {/* 메인 (큰 카드) */}
              <FeaturedCard post={featured[0]} variant="large" />
              {/* 서브 카드 2개 */}
              {featured[1] && <FeaturedCard post={featured[1]} variant="small" />}
              {featured[2] && <FeaturedCard post={featured[2]} variant="small" />}
            </div>
          </div>
        </section>
      )}

      {/* ── 나머지 리스트 ── */}
      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {loading ? (
            <div className="space-y-4 py-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse flex gap-5 py-5 border-b border-gray-100">
                  <div className="flex-1">
                    <div className="h-3 w-16 rounded bg-gray-100" />
                    <div className="mt-3 h-5 w-3/4 rounded bg-gray-100" />
                    <div className="mt-2 h-4 w-full rounded bg-gray-50" />
                    <div className="mt-4 h-3 w-32 rounded bg-gray-50" />
                  </div>
                  <div className="hidden sm:block h-24 w-36 rounded-lg bg-gray-100 shrink-0" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-lg font-medium text-gray-400">
                {searchQuery ? "검색 결과가 없습니다" : "아직 등록된 글이 없습니다"}
              </p>
              <p className="mt-2 text-sm text-gray-300">
                {searchQuery ? "다른 키워드로 검색해 보세요" : "곧 새로운 콘텐츠로 찾아뵙겠습니다"}
              </p>
            </div>
          ) : rest.length > 0 ? (
            <>
              {featured.length > 0 && (
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-lg font-bold text-gray-900">최신 글</h2>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>
              )}
              <div className="divide-y divide-gray-100">
                {rest.map((post) => (
                  <ArticleRow key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
}

/* ── 피처드 카드 ── */
function FeaturedCard({ post, variant }: { post: Post; variant: "large" | "small" }) {
  const isLarge = variant === "large";

  return (
    <Link
      href={`/medipost/${post.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-gray-900 ${
        isLarge ? "lg:row-span-2" : ""
      }`}
    >
      {post.cover_image ? (
        <Image
          src={post.cover_image}
          alt={post.title}
          fill
          className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
      )}

      <div className="relative flex h-full min-h-[200px] flex-col justify-end p-5 md:p-6">
        <span className="mb-2 inline-block w-fit rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
          {categoryLabel[post.category]}
        </span>
        <h3
          className={`font-bold leading-snug text-white ${
            isLarge ? "text-xl md:text-2xl" : "text-base md:text-lg"
          }`}
        >
          {post.title}
        </h3>
        {isLarge && post.excerpt && (
          <p className="mt-2 text-sm text-white/60 line-clamp-2">{post.excerpt}</p>
        )}
        <div className="mt-3 flex items-center gap-3 text-xs text-white/50">
          {post.author_name && <span className="text-white/70">{post.author_name}</span>}
          {post.published_at && <span>{formatDate(post.published_at)}</span>}
        </div>
      </div>
    </Link>
  );
}

/* ── 아티클 행 (리스트) ── */
function ArticleRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/medipost/${post.slug}`}
      className="group flex items-start gap-5 py-5 transition-colors hover:bg-gray-50/50 -mx-3 px-3 rounded-lg"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            {categoryLabel[post.category]}
          </span>
        </div>
        <h3 className="mt-1.5 text-base font-bold text-gray-900 group-hover:text-brand-neon-btn transition-colors line-clamp-2 sm:text-lg">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-1 text-sm text-gray-400 line-clamp-2 hidden sm:block">
            {post.excerpt}
          </p>
        )}
        <div className="mt-2.5 flex items-center gap-3 text-xs text-gray-400">
          {post.author_name && (
            <span className="font-medium text-gray-500">{post.author_name}</span>
          )}
          {post.published_at && <span>{formatDate(post.published_at)}</span>}
          {post.view_count > 0 && (
            <span className="inline-flex items-center gap-1">
              <EyeIcon className="size-3" />
              {post.view_count.toLocaleString()}
            </span>
          )}
        </div>
      </div>
      {post.cover_image && (
        <div className="hidden shrink-0 sm:block">
          <div className="relative h-24 w-36 overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={post.cover_image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="144px"
            />
          </div>
        </div>
      )}
    </Link>
  );
}
