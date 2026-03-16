"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";

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

const categoryStyle: Record<PostCategory, string> = {
  news: "bg-blue-100 text-blue-700",
  blog: "bg-emerald-100 text-emerald-700",
  column: "bg-purple-100 text-purple-700",
};

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

export default function NewsPage() {
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

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">News & Insights</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">소식</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            미용치과 업계 소식, 인사이트, 실무 노하우를 한눈에
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 border-b bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {/* Search */}
          <div className="py-3">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="제목, 내용으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 w-full rounded-lg border border-border/60 bg-surface-secondary/50 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-lime-safe focus:outline-none focus:ring-2 focus:ring-brand-lime-safe/20"
              />
            </div>
          </div>
          {/* Category Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors min-h-[40px] ${
                  activeCategory === cat.value
                    ? "bg-text-primary text-white"
                    : "bg-surface-secondary text-text-secondary hover:bg-gray-200"
                }`}
              >
                {cat.label}
                {activeCategory === cat.value && posts.length > 0 && (
                  <span className="ml-1.5 text-xs opacity-70">
                    {cat.value === "all"
                      ? posts.length
                      : posts.filter((p) => p.category === cat.value).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feed */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse rounded-xl border border-border/30 p-5">
                  <div className="h-4 w-16 rounded bg-gray-200" />
                  <div className="mt-3 h-5 w-3/4 rounded bg-gray-200" />
                  <div className="mt-2 h-4 w-full rounded bg-gray-100" />
                  <div className="mt-4 flex gap-4">
                    <div className="h-3 w-20 rounded bg-gray-100" />
                    <div className="h-3 w-16 rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-text-secondary">
                {searchQuery ? "검색 결과가 없습니다" : "아직 등록된 소식이 없습니다"}
              </p>
              <p className="mt-2 text-sm text-text-muted">
                {searchQuery ? "다른 키워드로 검색해 보세요" : "곧 새로운 소식으로 찾아뵙겠습니다"}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((post) => (
                <Link key={post.id} href={`/news/${post.slug}`} className="block group">
                  <Card className="border-border/40 transition-all hover:border-border hover:shadow-md group-hover:bg-surface-secondary/30">
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${categoryStyle[post.category]}`}
                            >
                              {categoryLabel[post.category]}
                            </span>
                            {post.published_at && (
                              <span className="text-xs text-text-muted">
                                {formatDate(post.published_at)}
                              </span>
                            )}
                          </div>
                          <h3 className="mt-2 text-base font-bold leading-snug text-text-primary group-hover:text-brand-lime-text transition-colors sm:text-lg">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="mt-1.5 text-sm leading-relaxed text-text-muted line-clamp-2">
                              {post.excerpt}
                            </p>
                          )}
                          <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
                            {post.author_name && (
                              <span className="font-medium text-text-secondary">{post.author_name}</span>
                            )}
                            {post.view_count > 0 && (
                              <span className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                                {post.view_count.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Thumbnail */}
                        {post.cover_image && (
                          <div className="hidden shrink-0 sm:block">
                            <div className="h-20 w-28 overflow-hidden rounded-lg bg-surface-secondary">
                              <img
                                src={post.cover_image}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
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
