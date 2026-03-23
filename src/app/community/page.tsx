"use client";

import { Suspense, useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  MessageSquareIcon,
  EyeIcon,
  PenSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MegaphoneIcon,
  TrendingUpIcon,
  FlameIcon,
  UserIcon,
  CheckCircleIcon,
} from "lucide-react";

const PAGE_SIZE = 15;

/* ── 카테고리 썸네일 이미지 매핑 ── */
const CATEGORY_IMAGES: Record<string, string> = {
  all: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  free: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
  qna: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  info: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
  review: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
  job: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  all: "모든 게시글 보기",
  free: "자유로운 주제로 대화해요",
  qna: "궁금한 것을 물어보세요",
  info: "유용한 정보를 공유해요",
  review: "사용 후기를 남겨주세요",
  job: "구인/구직 정보를 찾아보세요",
};

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

interface TopWriter {
  author_id: string;
  name: string;
  avatar_url: string | null;
  post_count: number;
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
  const [topWriters, setTopWriters] = useState<TopWriter[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);

  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  // 카테고리 로드
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

  // 인기글 로드 (조회수 Top 5)
  useEffect(() => {
    supabase
      .from("community_posts")
      .select("id, title, category, post_type, view_count, is_published, created_at, author_id, profiles(name, avatar_url)")
      .eq("is_published", true)
      .neq("post_type", "notice")
      .order("view_count", { ascending: false })
      .limit(5)
      .then(({ data }) => {
        if (data) {
          setPopularPosts(
            data.map((p) => ({
              ...p,
              profiles: Array.isArray(p.profiles) ? p.profiles[0] : p.profiles,
              comment_count: 0,
            })) as Post[]
          );
        }
      });
  }, []);

  // 인기 작성자 로드
  useEffect(() => {
    supabase
      .from("community_posts")
      .select("author_id, profiles(name, avatar_url)")
      .eq("is_published", true)
      .neq("post_type", "notice")
      .then(({ data }) => {
        if (!data) return;
        const countMap: Record<string, { name: string; avatar_url: string | null; count: number }> = {};
        data.forEach((p) => {
          const profile = Array.isArray(p.profiles) ? p.profiles[0] : p.profiles;
          const name = profile?.name || "익명";
          if (!countMap[p.author_id]) {
            countMap[p.author_id] = { name, avatar_url: profile?.avatar_url || null, count: 0 };
          }
          countMap[p.author_id].count++;
        });
        const sorted = Object.entries(countMap)
          .map(([id, v]) => ({ author_id: id, name: v.name, avatar_url: v.avatar_url, post_count: v.count }))
          .sort((a, b) => b.post_count - a.post_count)
          .slice(0, 8);
        setTopWriters(sorted);
      });
  }, []);

  // 게시글 로드
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const from = (currentPage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
      .from("community_posts")
      .select("id, title, category, post_type, view_count, is_published, created_at, author_id, profiles(name, avatar_url)", { count: "exact" })
      .eq("is_published", true)
      .order("post_type", { ascending: true })
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
      const postIds = data.map((p) => p.id);
      let countMap: Record<string, number> = {};
      if (postIds.length > 0) {
        const { data: commentCounts, error: commentError } = await supabase
          .from("community_comments")
          .select("post_id")
          .in("post_id", postIds);

        if (!commentError && commentCounts) {
          commentCounts.forEach((c) => {
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
    <div className="min-h-screen bg-white">
      {/* ── 카테고리 썸네일 카드 섹션 (필터 역할) ── */}
      <section className="border-b border-gray-100 bg-gray-50/50 py-6 md:py-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
            {/* 전체 카드 */}
            <CategoryCard
              slug="all"
              name="전체"
              isActive={currentCategory === "all"}
              onClick={() => navigateTo("all", 1)}
            />
            {categories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                slug={cat.slug}
                name={cat.name}
                isActive={currentCategory === cat.slug}
                onClick={() => navigateTo(cat.slug, 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 메인 콘텐츠: 게시글 리스트 + 사이드바 ── */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* 좌측: 게시글 리스트 */}
            <div className="flex-1 min-w-0">
              {/* 헤더: 제목 + 글쓰기 */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {currentCategory === "all" ? "전체 게시글" : categoryName(currentCategory)}
                  </h2>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {totalCount}개의 게시글
                  </p>
                </div>
                {user ? (
                  <Link href="/community/write">
                    <Button className="gap-2 rounded-full bg-gray-900 px-5 text-sm font-semibold text-white hover:bg-gray-800">
                      <PenSquareIcon className="size-4" />
                      글쓰기
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <Button variant="outline" className="gap-2 rounded-full px-5 text-sm border-gray-300 text-gray-700 hover:bg-gray-50">
                      <PenSquareIcon className="size-4" />
                      로그인 후 글쓰기
                    </Button>
                  </Link>
                )}
              </div>

              {/* 게시물 목록 */}
              <div className="mt-4">
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
                  </div>
                ) : posts.length === 0 ? (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 py-20 text-center">
                    <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-gray-100">
                      <PenSquareIcon className="size-5 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-500">게시물이 없습니다</p>
                    <p className="mt-1 text-xs text-gray-400">첫 번째 글을 작성해 보세요!</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {posts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/community/${post.id}`}
                        className="group flex items-start gap-3 py-4 transition-colors hover:bg-gray-50/50 -mx-2 px-2 rounded-lg"
                      >
                        {/* 아바타 */}
                        <div className="mt-0.5 shrink-0">
                          {post.profiles?.avatar_url ? (
                            <Image
                              src={post.profiles.avatar_url}
                              alt={post.profiles.name || ""}
                              width={40}
                              height={40}
                              className="rounded-full object-cover"
                            />
                          ) : (
                            <div className="flex size-10 items-center justify-center rounded-full bg-gray-100">
                              <UserIcon className="size-5 text-gray-400" />
                            </div>
                          )}
                        </div>

                        {/* 콘텐츠 */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            {post.post_type === "notice" && (
                              <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-1.5 py-0.5 text-[11px] font-semibold text-amber-700 border border-amber-200">
                                <MegaphoneIcon className="size-3" />
                                공지
                              </span>
                            )}
                            <h3 className="text-[15px] font-semibold text-gray-900 group-hover:text-brand-neon-btn transition-colors line-clamp-1">
                              {post.title}
                            </h3>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                            <span className="font-medium text-gray-500">{post.profiles?.name || "익명"}</span>
                            <span>·</span>
                            <span>{formatDate(post.created_at)}</span>
                            {post.comment_count > 0 && (
                              <>
                                <span>·</span>
                                <span className="inline-flex items-center gap-0.5 text-gray-500">
                                  <MessageSquareIcon className="size-3" />
                                  {post.comment_count}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* 조회수 */}
                        <div className="shrink-0 flex items-center gap-1 text-xs text-gray-400 mt-1">
                          <EyeIcon className="size-3.5" />
                          {post.view_count}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-1">
                  <button
                    onClick={() => navigateTo(currentCategory, Math.max(1, currentPage - 1))}
                    disabled={currentPage <= 1}
                    className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-100 disabled:opacity-30 min-h-[40px] min-w-[40px]"
                  >
                    <ChevronLeftIcon className="size-5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => Math.abs(p - currentPage) <= 2 || p === 1 || p === totalPages)
                    .map((p, idx, arr) => (
                      <span key={p}>
                        {idx > 0 && arr[idx - 1] !== p - 1 && (
                          <span className="px-1 text-gray-300">...</span>
                        )}
                        <button
                          onClick={() => navigateTo(currentCategory, p)}
                          className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium min-h-[40px] min-w-[40px] ${
                            p === currentPage
                              ? "bg-gray-900 text-white"
                              : "text-gray-500 hover:bg-gray-100"
                          }`}
                        >
                          {p}
                        </button>
                      </span>
                    ))}
                  <button
                    onClick={() => navigateTo(currentCategory, Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage >= totalPages}
                    className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-100 disabled:opacity-30 min-h-[40px] min-w-[40px]"
                  >
                    <ChevronRightIcon className="size-5" />
                  </button>
                </div>
              )}
            </div>

            {/* 우측 사이드바: 인기 랭킹 */}
            <aside className="w-full shrink-0 lg:w-72 xl:w-80">
              {/* 인기글 */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-4">
                  <FlameIcon className="size-5 text-orange-500" />
                  <h3 className="text-base font-bold text-gray-900">인기글</h3>
                </div>
                <div className="space-y-3">
                  {popularPosts.map((post, idx) => (
                    <Link
                      key={post.id}
                      href={`/community/${post.id}`}
                      className="group flex items-start gap-3"
                    >
                      <span className={`shrink-0 flex items-center justify-center size-6 rounded-full text-xs font-bold ${
                        idx < 3 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"
                      }`}>
                        {idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 line-clamp-1 group-hover:text-brand-neon-btn transition-colors font-medium">
                          {post.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-gray-400">
                          {post.profiles?.name || "익명"} · 조회 {post.view_count}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {popularPosts.length === 0 && (
                    <p className="text-sm text-gray-400 text-center py-4">아직 게시글이 없습니다</p>
                  )}
                </div>
              </div>

              {/* 인기 작성자 */}
              <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUpIcon className="size-5 text-brand-neon-safe" />
                  <h3 className="text-base font-bold text-gray-900">활발한 멤버</h3>
                </div>
                <div className="space-y-3">
                  {topWriters.map((writer, idx) => (
                    <div key={writer.author_id} className="flex items-center gap-3">
                      {writer.avatar_url ? (
                        <Image
                          src={writer.avatar_url}
                          alt={writer.name}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex size-8 items-center justify-center rounded-full bg-gray-100">
                          <UserIcon className="size-4 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">{writer.name}</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-gray-400">
                        {writer.post_count}글
                      </span>
                    </div>
                  ))}
                  {topWriters.length === 0 && (
                    <p className="text-sm text-gray-400 text-center py-4">아직 활동 내역이 없습니다</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── 카테고리 카드 컴포넌트 ── */
function CategoryCard({
  slug,
  name,
  isActive,
  onClick,
}: {
  slug: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-300 hover:shadow-lg ${
        isActive
          ? "ring-2 ring-brand-neon-safe ring-offset-2 shadow-md"
          : "hover:scale-[1.02]"
      }`}
    >
      <Image
        src={CATEGORY_IMAGES[slug] || CATEGORY_IMAGES.free}
        alt={name}
        fill
        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
          isActive ? "brightness-90" : ""
        }`}
        sizes="(max-width: 640px) 33vw, 16vw"
      />
      <div className={`absolute inset-0 transition-colors ${
        isActive
          ? "bg-gradient-to-t from-black/80 via-black/30 to-brand-neon-safe/20"
          : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      }`} />

      {/* 활성 체크 표시 */}
      {isActive && (
        <div className="absolute top-2 right-2 flex items-center justify-center size-6 rounded-full bg-brand-neon-safe shadow-sm">
          <CheckCircleIcon className="size-4 text-[#1a1a1a]" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
        <h3 className={`text-xs font-bold sm:text-sm ${
          isActive ? "text-brand-neon" : "text-white"
        }`}>
          {name}
        </h3>
        <p className="mt-0.5 text-[10px] text-white/60 line-clamp-1 hidden sm:block">
          {CATEGORY_DESCRIPTIONS[slug] || ""}
        </p>
      </div>
    </button>
  );
}
