"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PenSquareIcon,
  Trash2Icon,
  EyeIcon,
  EyeOffIcon,
  MegaphoneIcon,
  MessageSquareIcon,
  ExternalLinkIcon,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  category: string;
  post_type: string;
  view_count: number;
  is_published: boolean;
  created_at: string;
  author_id: string;
  profiles: { name: string | null } | null;
}

interface Category {
  slug: string;
  name: string;
}

export default function AdminCommunityPage() {
  const supabase = createClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState<"all" | "community" | "notice">("all");
  const [loading, setLoading] = useState(true);

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
    let query = supabase
      .from("community_posts")
      .select("id, title, category, post_type, view_count, is_published, created_at, author_id, profiles(name)")
      .order("created_at", { ascending: false });

    if (filter !== "all") {
      query = query.eq("post_type", filter);
    }

    const { data, error } = await query;
    if (error) {
      console.error("게시물 로드 실패:", error);
      setPosts([]);
      setLoading(false);
      return;
    }
    if (data) {
      setPosts(
        data.map((p) => ({
          ...p,
          profiles: Array.isArray(p.profiles) ? p.profiles[0] : p.profiles,
        })) as Post[]
      );
    }
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const categoryName = (slug: string) =>
    categories.find((c) => c.slug === slug)?.name || slug;

  const togglePublished = async (postId: string, current: boolean) => {
    await supabase
      .from("community_posts")
      .update({ is_published: !current })
      .eq("id", postId);
    fetchPosts();
  };

  const deletePost = async (postId: string) => {
    if (!confirm("정말 삭제하시겠습니까? 댓글도 함께 삭제됩니다.")) return;
    await supabase.from("community_posts").delete().eq("id", postId);
    fetchPosts();
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">게시물 관리</h1>
          <p className="mt-1 text-sm text-text-muted">
            커뮤니티 게시물 및 소식/공지 관리
          </p>
        </div>
        <Link href="/community/write">
          <Button className="min-h-[44px] gap-2 bg-brand-lime-btn text-sm font-semibold text-white hover:bg-brand-lime-btn/90">
            <PenSquareIcon className="size-4" />
            새 글 작성
          </Button>
        </Link>
      </div>

      {/* 필터 */}
      <div className="mt-6 flex gap-2">
        {(["all", "community", "notice"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors min-h-[40px] ${
              filter === f
                ? "bg-brand-lime-btn text-white"
                : "bg-surface-secondary text-text-secondary hover:bg-surface-secondary/80"
            }`}
          >
            {f === "all" ? "전체" : f === "community" ? "커뮤니티" : "소식/공지"}
          </button>
        ))}
      </div>

      {/* 테이블 */}
      <div className="mt-6 overflow-x-auto rounded-lg border">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">상태</TableHead>
                <TableHead className="w-[80px]">유형</TableHead>
                <TableHead className="w-[100px]">카테고리</TableHead>
                <TableHead>제목</TableHead>
                <TableHead className="w-[100px]">작성자</TableHead>
                <TableHead className="w-[80px] text-right">조회</TableHead>
                <TableHead className="w-[120px]">작성일</TableHead>
                <TableHead className="w-[120px] text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-text-muted py-12">
                    게시물이 없습니다.
                  </TableCell>
                </TableRow>
              ) : (
                posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          post.is_published
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-500"
                        }
                      >
                        {post.is_published ? "공개" : "숨김"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {post.post_type === "notice" ? (
                        <Badge className="bg-brand-lime-safe/10 text-brand-lime-text border-brand-lime-safe/30 text-xs gap-1">
                          <MegaphoneIcon className="size-3" />
                          공지
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          일반
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {categoryName(post.category)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/community/${post.id}`}
                        className="font-medium text-text-primary hover:text-brand-lime-text transition-colors max-w-[300px] truncate block"
                      >
                        {post.title}
                      </Link>
                    </TableCell>
                    <TableCell className="text-text-muted text-sm">
                      {post.profiles?.name || "-"}
                    </TableCell>
                    <TableCell className="text-right text-text-muted text-sm">
                      {post.view_count}
                    </TableCell>
                    <TableCell className="text-text-muted text-sm whitespace-nowrap">
                      {new Date(post.created_at).toLocaleDateString("ko-KR")}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => togglePublished(post.id, post.is_published)}
                          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[32px] min-w-[32px]"
                          title={post.is_published ? "숨기기" : "공개하기"}
                        >
                          {post.is_published ? (
                            <EyeOffIcon className="size-4" />
                          ) : (
                            <EyeIcon className="size-4" />
                          )}
                        </button>
                        <Link
                          href={`/community/${post.id}/edit`}
                          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[32px] min-w-[32px]"
                          title="수정"
                        >
                          <PenSquareIcon className="size-4" />
                        </Link>
                        <button
                          onClick={() => deletePost(post.id)}
                          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-red-50 hover:text-red-500 transition-colors min-h-[32px] min-w-[32px]"
                          title="삭제"
                        >
                          <Trash2Icon className="size-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
