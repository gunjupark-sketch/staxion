"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { sanitizeHtml } from "@/lib/sanitize";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeftIcon,
  EyeIcon,
  CalendarIcon,
  PencilIcon,
  Trash2Icon,
  MegaphoneIcon,
  SendIcon,
  UserIcon,
  MessageSquareIcon,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  post_type: string;
  view_count: number;
  created_at: string;
  updated_at: string;
  author_id: string;
  profiles: { name: string | null; avatar_url: string | null } | null;
}

interface Comment {
  id: string;
  content: string;
  created_at: string;
  author_id: string;
  profiles: { name: string | null; avatar_url: string | null } | null;
}

interface Category {
  slug: string;
  name: string;
}

export default function CommunityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ id: string } | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      setUser(data.user);
      if (data.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();
        setUserRole(profile?.role || null);
      }
    });
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

  // 조회수 증가 + 게시물 로드
  useEffect(() => {
    async function loadPost() {
      // 조회수 증가 (RPC 없이 간단 처리)
      try {
        await supabase.rpc("increment_community_view", { post_id: postId });
      } catch {
        // RPC가 없으면 무시 — 아래에서 직접 처리
      }

      const { data, error } = await supabase
        .from("community_posts")
        .select("*, profiles(name, avatar_url)")
        .eq("id", postId)
        .single();

      if (error) {
        console.error("게시물 로드 실패:", error);
        setLoading(false);
        return;
      }

      if (data) {
        setPost({
          ...data,
          profiles: Array.isArray(data.profiles) ? data.profiles[0] : data.profiles,
        } as Post);
      }
      setLoading(false);
    }
    loadPost();
  }, [postId]);

  const fetchComments = useCallback(async () => {
    const { data, error } = await supabase
      .from("community_comments")
      .select("*, profiles(name, avatar_url)")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("댓글 로드 실패:", error);
      return;
    }

    if (data) {
      setComments(
        data.map((c) => ({
          ...c,
          profiles: Array.isArray(c.profiles) ? c.profiles[0] : c.profiles,
        })) as Comment[]
      );
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const categoryName = (slug: string) =>
    categories.find((c) => c.slug === slug)?.name || slug;

  const handleDelete = async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    setDeleting(true);
    await supabase.from("community_posts").delete().eq("id", postId);
    router.push("/community");
  };

  const handleCommentSubmit = async () => {
    if (!commentText.trim() || !user) return;
    setSubmitting(true);

    await supabase.from("community_comments").insert({
      post_id: postId,
      author_id: user.id,
      content: commentText.trim(),
    });

    setCommentText("");
    setSubmitting(false);
    fetchComments();
  };

  const handleCommentDelete = async (commentId: string) => {
    if (!confirm("댓글을 삭제하시겠습니까?")) return;
    await supabase.from("community_comments").delete().eq("id", commentId);
    fetchComments();
  };

  const canEdit = user && post && (user.id === post.author_id || userRole === "admin");

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p className="text-text-muted">게시물을 찾을 수 없습니다.</p>
        <Link href="/community">
          <Button variant="outline">목록으로</Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {/* 뒤로가기 */}
        <Link
          href="/community"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          목록으로
        </Link>

        {/* 게시물 헤더 */}
        <article className="rounded-xl border border-border/50 bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 flex-wrap mb-3">
            {post.post_type === "notice" && (
              <Badge className="bg-brand-lime-safe/10 text-brand-lime-text border-brand-lime-safe/30 gap-1">
                <MegaphoneIcon className="size-3" />
                공지
              </Badge>
            )}
            <Badge variant="secondary">{categoryName(post.category)}</Badge>
          </div>

          <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-muted border-b border-border/50 pb-4">
            <div className="flex items-center gap-2">
              {post.profiles?.avatar_url ? (
                <img
                  src={post.profiles.avatar_url}
                  alt=""
                  className="size-7 rounded-full object-cover ring-2 ring-primary/20"
                />
              ) : (
                <div className="flex size-7 items-center justify-center rounded-full bg-surface-secondary ring-2 ring-primary/20">
                  <UserIcon className="size-4 text-text-muted" />
                </div>
              )}
              <span className="font-medium text-text-secondary">
                {post.profiles?.name || "익명"}
              </span>
            </div>
            <span className="flex items-center gap-1">
              <CalendarIcon className="size-3.5" />
              {new Date(post.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-1.5 py-0.5 text-xs">
              <EyeIcon className="size-3.5" />
              {post.view_count}
            </span>
          </div>

          {/* 수정/삭제 */}
          {canEdit && (
            <div className="mt-3 flex items-center gap-2 justify-end">
              <Link href={`/community/${post.id}/edit`}>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs min-h-[36px] hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors">
                  <PencilIcon className="size-3.5" />
                  수정
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs text-red-500 hover:text-red-600 hover:bg-red-500/10 hover:border-red-500/30 min-h-[36px] transition-colors"
                onClick={handleDelete}
                disabled={deleting}
              >
                <Trash2Icon className="size-3.5" />
                삭제
              </Button>
            </div>
          )}

          {/* 본문 */}
          <div
            className="prose prose-sm dark:prose-invert sm:prose max-w-none mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-semibold [&_img]:max-w-full [&_img]:rounded-lg [&_blockquote]:border-l-4 [&_blockquote]:border-brand-lime-safe [&_blockquote]:pl-4 [&_blockquote]:italic [&_a]:text-brand-lime-text [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
          />
        </article>

        {/* 댓글 섹션 */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-lg font-bold text-text-primary">
            댓글 {comments.length > 0 && <span className="text-brand-lime-text">{comments.length}</span>}
          </h2>

          {/* 댓글 작성 */}
          {user ? (
            <div className="mt-4">
              <Textarea
                placeholder="댓글을 입력하세요..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={3}
                className="resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <div className="mt-2 flex justify-end">
                <Button
                  onClick={handleCommentSubmit}
                  disabled={!commentText.trim() || submitting}
                  className="min-h-[40px] gap-2 bg-brand-lime-btn px-5 text-sm font-semibold text-white hover:bg-brand-lime-btn/90"
                >
                  <SendIcon className="size-4" />
                  {submitting ? "등록 중..." : "댓글 등록"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-4 rounded-lg border bg-surface-secondary/50 p-4 text-center">
              <p className="text-sm text-text-muted">
                댓글을 작성하려면{" "}
                <Link href="/login" className="text-brand-lime-text underline">
                  로그인
                </Link>
                이 필요합니다.
              </p>
            </div>
          )}

          {/* 댓글 목록 */}
          <div className="mt-6 space-y-3">
            {comments.length === 0 ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquareIcon className="size-4 text-primary" />
                </div>
                <p className="text-sm text-text-muted">
                  아직 댓글이 없습니다. 첫 댓글을 남겨보세요!
                </p>
              </div>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="rounded-lg bg-surface-secondary/50 p-4 transition-colors hover:bg-surface-secondary">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {comment.profiles?.avatar_url ? (
                        <img
                          src={comment.profiles.avatar_url}
                          alt=""
                          className="size-6 rounded-full object-cover ring-2 ring-primary/20"
                        />
                      ) : (
                        <div className="flex size-6 items-center justify-center rounded-full bg-surface-secondary ring-2 ring-primary/20">
                          <UserIcon className="size-3 text-text-muted" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-text-secondary">
                        {comment.profiles?.name || "익명"}
                      </span>
                      <span className="text-xs text-text-muted">
                        {new Date(comment.created_at).toLocaleDateString("ko-KR", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    {user && (user.id === comment.author_id || userRole === "admin") && (
                      <button
                        onClick={() => handleCommentDelete(comment.id)}
                        className="text-xs text-text-muted hover:text-red-500 transition-colors min-h-[32px] px-2"
                      >
                        삭제
                      </button>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary whitespace-pre-wrap">
                    {comment.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
