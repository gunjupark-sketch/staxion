"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageSquareIcon,
  EyeIcon,
  PenSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MegaphoneIcon,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";

const PAGE_SIZE = 20;

interface Post {
  id: string;
  title: string;
  category: string;
  post_type: string;
  view_count: number;
  is_published: boolean;
  created_at: string;
  author_id: string;
  profiles: { name: string | null; avatar_url: string | null } | null;
  comment_count: number;
}

interface Category {
  slug: string;
  name: string;
}

export default function CommunityPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
        </div>
      }
    >
      <CommunityContent />
    </Suspense>
  );
}

function CommunityContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ id: string } | null>(null);

  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    supabase
      .from("community_categories")
      .select("slug, name")
      .order("sort_order")
      .then(({ data, error }) => {
        if (error) {
          console.error("카테고리 로드 실패:", error);
          return;
        }
        if (data) setCategories(data);
      });
  }, []);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const from = (currentPage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
      .from("community_posts")
      .select("id, title, category, post_type, view_count, is_published, created_at, author_id, profiles(name, avatar_url)", { count: "exact" })
      .eq("is_published", true)
      .order("post_type", { ascending: true }) // notice가 위에
      .order("created_at", { ascending: false })
      .range(from, to);

    if (currentCategory !== "all") {
      query = query.eq("category", currentCategory);
    }

    const { data, count, error } = await query;

    if (error) {
      console.error("게시물 로드 실패:", error);
      setPosts([]);
      setTotalCount(0);
      setLoading(false);
      return;
    }

    if (data) {
      // 댓글 수 가져오기
      const postIds = data.map((p) => p.id);
      let countMap: Record<string, number> = {};
      if (postIds.length > 0) {
        const { data: commentCounts, error: commentError } = await supabase
          .from("community_comments")
          .select("post_id")
          .in("post_id", postIds);

        if (commentError) {
          console.error("댓글 수 로드 실패:", commentError);
        } else {
          commentCounts?.forEach((c) => {
            countMap[c.post_id] = (countMap[c.post_id] || 0) + 1;
          });
        }
      }

      setPosts(
        data.map((p) => ({
          ...p,
          profiles: Array.isArray(p.profiles) ? p.profiles[0] : p.profiles,
          comment_count: countMap[p.id] || 0,
        })) as Post[]
      );
    }
    setTotalCount(count || 0);
    setLoading(false);
  }, [currentCategory, currentPage]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const categoryName = (slug: string) =>
    categories.find((c) => c.slug === slug)?.name || slug;

  const navigateTo = (cat: string, page: number) => {
    const params = new URLSearchParams();
    if (cat !== "all") params.set("category", cat);
    if (page > 1) params.set("page", String(page));
    router.push(`/community${params.toString() ? "?" + params.toString() : ""}`);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 1) return "방금 전";
    if (hours < 24) return `${hours}시간 전`;
    return d.toLocaleDateString("ko-KR", { month: "short", day: "numeric" });
  };

  return (
    <>
      <PageBanner pageSlug="community" />

      {/* 메인 콘텐츠 */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {/* 카테고리 탭 + 글쓰기 버튼 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-1 border-b border-border/50">
              <button
                onClick={() => navigateTo("all", 1)}
                className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
                  currentCategory === "all"
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                전체
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => navigateTo(cat.slug, 1)}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
                    currentCategory === cat.slug
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {user ? (
              <Link href="/community/write">
                <Button className="min-h-[44px] gap-2 bg-brand-neon-btn px-5 text-sm font-semibold text-white hover:bg-brand-neon-btn/90">
                  <PenSquareIcon className="size-4" />
                  글쓰기
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button variant="outline" className="min-h-[44px] gap-2 px-5 text-sm">
                  <PenSquareIcon className="size-4" />
                  로그인 후 글쓰기
                </Button>
              </Link>
            )}
          </div>

          {/* 게시물 목록 */}
          <div className="mt-6">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
              </div>
            ) : posts.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-card py-20 text-center shadow-sm">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <PenSquareIcon className="size-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-text-secondary">게시물이 없습니다</p>
                <p className="mt-1 text-xs text-text-muted">첫 번째 글을 작성해 보세요!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/community/${post.id}`}
                    className={`flex items-start gap-3 rounded-lg border border-border/50 bg-card px-4 py-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30 sm:items-center sm:gap-4 ${
                      post.post_type === "notice" ? "border-l-2 border-l-primary" : ""
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        {post.post_type === "notice" && (
                          <Badge className="bg-brand-neon-safe/10 text-brand-neon-text border-brand-neon-safe/30 text-xs gap-1">
                            <MegaphoneIcon className="size-3" />
                            공지
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {categoryName(post.category)}
                        </Badge>
                        <h3 className="text-sm font-medium text-text-primary truncate sm:text-base">
                          {post.title}
                        </h3>
                      </div>
                      <div className="mt-1.5 flex items-center gap-3 text-xs text-text-muted">
                        <span>{post.profiles?.name || "익명"}</span>
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-1.5 py-0.5 text-xs text-text-secondary">
                        <EyeIcon className="size-3.5" />
                        {post.view_count}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-1.5 py-0.5 text-xs text-text-secondary">
                        <MessageSquareIcon className="size-3.5" />
                        {post.comment_count}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => navigateTo(currentCategory, Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-surface-secondary disabled:opacity-30 min-h-[44px] min-w-[44px]"
              >
                <ChevronLeftIcon className="size-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => Math.abs(p - currentPage) <= 2 || p === 1 || p === totalPages)
                .map((p, idx, arr) => (
                  <span key={p}>
                    {idx > 0 && arr[idx - 1] !== p - 1 && (
                      <span className="px-1 text-text-muted">...</span>
                    )}
                    <button
                      onClick={() => navigateTo(currentCategory, p)}
                      className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium min-h-[44px] min-w-[44px] ${
                        p === currentPage
                          ? "bg-brand-neon-btn text-white"
                          : "text-text-secondary hover:bg-surface-secondary"
                      }`}
                    >
                      {p}
                    </button>
                  </span>
                ))}
              <button
                onClick={() => navigateTo(currentCategory, Math.min(totalPages, currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-surface-secondary disabled:opacity-30 min-h-[44px] min-w-[44px]"
              >
                <ChevronRightIcon className="size-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
