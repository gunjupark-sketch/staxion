"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  PenSquareIcon,
  Trash2Icon,
  EyeIcon,
  EyeOffIcon,
  PlusIcon,
} from "lucide-react";
import RichTextEditor from "@/components/editor/RichTextEditor";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string;
  author_name: string | null;
  cover_image: string | null;
  is_published: boolean;
  published_at: string | null;
  view_count: number;
  created_at: string;
  deleted_at: string | null;
}

interface PostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  cover_image: string;
  is_published: boolean;
}

const EMPTY_FORM: PostForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "blog",
  author_name: "",
  cover_image: "",
  is_published: false,
};

const categoryLabel: Record<string, string> = {
  blog: "블로그",
  column: "칼럼",
  news: "뉴스",
};

function generateSlug(title: string): string {
  return (
    title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || `post-${Date.now()}`
  );
}

export default function PostsPage() {
  const supabase = createClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [form, setForm] = useState<PostForm>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("게시물 로드 실패:", error.message);
      setPosts([]);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const openCreate = () => {
    setEditingPost(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  };

  const openEdit = (post: Post) => {
    setEditingPost(post);
    setForm({
      title: post.title,
      slug: post.slug || "",
      excerpt: post.excerpt || "",
      content: post.content || "",
      category: post.category,
      author_name: post.author_name || "",
      cover_image: post.cover_image || "",
      is_published: post.is_published,
    });
    setDialogOpen(true);
  };

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: editingPost ? prev.slug : generateSlug(value),
    }));
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!form.slug.trim()) {
      alert("슬러그를 입력하세요.");
      return;
    }

    setSaving(true);

    const now = new Date().toISOString();

    if (editingPost) {
      // Edit
      const updateData: Record<string, unknown> = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        excerpt: form.excerpt.trim() || null,
        content: form.content || null,
        category: form.category,
        author_name: form.author_name.trim() || null,
        cover_image: form.cover_image.trim() || null,
        is_published: form.is_published,
        updated_at: now,
      };

      // If toggling from unpublished to published, set published_at
      if (form.is_published && !editingPost.is_published) {
        updateData.published_at = now;
      }
      // If toggling from published to unpublished, clear published_at
      if (!form.is_published && editingPost.is_published) {
        updateData.published_at = null;
      }

      const { error } = await supabase
        .from("posts")
        .update(updateData)
        .eq("id", editingPost.id);

      if (error) {
        alert("수정 실패: " + error.message);
        setSaving(false);
        return;
      }
    } else {
      // Create
      const insertData: Record<string, unknown> = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        excerpt: form.excerpt.trim() || null,
        content: form.content || null,
        category: form.category,
        author_name: form.author_name.trim() || null,
        cover_image: form.cover_image.trim() || null,
        is_published: form.is_published,
      };

      if (form.is_published) {
        insertData.published_at = now;
      }

      const { error } = await supabase.from("posts").insert(insertData);

      if (error) {
        alert("등록 실패: " + error.message);
        setSaving(false);
        return;
      }
    }

    setSaving(false);
    setDialogOpen(false);
    fetchPosts();
  };

  const togglePublished = async (post: Post) => {
    const now = new Date().toISOString();
    const updateData: Record<string, unknown> = {
      is_published: !post.is_published,
      updated_at: now,
    };

    if (!post.is_published) {
      // Publishing now
      updateData.published_at = now;
    } else {
      // Unpublishing
      updateData.published_at = null;
    }

    const { error } = await supabase
      .from("posts")
      .update(updateData)
      .eq("id", post.id);

    if (error) {
      alert("상태 변경 실패: " + error.message);
      return;
    }
    fetchPosts();
  };

  const deletePost = async (postId: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    const { error } = await supabase
      .from("posts")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", postId);

    if (error) {
      alert("삭제 실패: " + error.message);
      return;
    }
    fetchPosts();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">블로그 관리</h1>
          <p className="mt-1 text-sm text-text-muted">블로그·칼럼·뉴스 관리</p>
        </div>
        <Button
          onClick={openCreate}
          className="min-h-[44px] gap-2 bg-brand-lime-btn text-sm font-semibold text-white hover:bg-brand-lime-btn/90"
        >
          <PlusIcon className="size-4" />
          글 작성
        </Button>
      </div>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">상태</TableHead>
                <TableHead className="w-[80px]">카테고리</TableHead>
                <TableHead>제목</TableHead>
                <TableHead className="w-[100px]">작성자</TableHead>
                <TableHead className="w-[80px] text-right">조회수</TableHead>
                <TableHead className="w-[120px]">작성일</TableHead>
                <TableHead className="w-[120px] text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center text-text-muted py-12"
                  >
                    등록된 글이 없습니다.
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
                        {post.is_published ? "공개" : "비공개"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {categoryLabel[post.category] || post.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium max-w-xs truncate">
                      {post.title}
                    </TableCell>
                    <TableCell className="text-text-muted">
                      {post.author_name || "-"}
                    </TableCell>
                    <TableCell className="text-right text-text-muted">
                      {post.view_count}
                    </TableCell>
                    <TableCell className="text-text-muted text-sm whitespace-nowrap">
                      {new Date(post.created_at).toLocaleDateString("ko-KR")}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => togglePublished(post)}
                          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[32px] min-w-[32px]"
                          title={
                            post.is_published
                              ? "비공개로 전환"
                              : "공개로 전환"
                          }
                        >
                          {post.is_published ? (
                            <EyeOffIcon className="size-4" />
                          ) : (
                            <EyeIcon className="size-4" />
                          )}
                        </button>
                        <button
                          onClick={() => openEdit(post)}
                          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[32px] min-w-[32px]"
                          title="수정"
                        >
                          <PenSquareIcon className="size-4" />
                        </button>
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

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPost ? "글 수정" : "글 작성"}
            </DialogTitle>
            <DialogDescription>
              블로그, 칼럼, 뉴스 게시물을{" "}
              {editingPost ? "수정" : "작성"}합니다.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Title */}
            <div className="space-y-1.5">
              <Label>제목 *</Label>
              <Input
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="게시물 제목"
              />
            </div>

            {/* Slug */}
            <div className="space-y-1.5">
              <Label>슬러그 (URL)</Label>
              <Input
                value={form.slug}
                onChange={(e) =>
                  setForm({ ...form, slug: e.target.value })
                }
                placeholder="url-friendly-slug"
              />
              <p className="text-xs text-text-muted">
                URL에 사용될 고유 식별자입니다. 제목 입력 시 자동 생성됩니다.
              </p>
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <Label>카테고리</Label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="blog">블로그</option>
                <option value="column">칼럼</option>
                <option value="news">뉴스</option>
              </select>
            </div>

            {/* Author */}
            <div className="space-y-1.5">
              <Label>작성자</Label>
              <Input
                value={form.author_name}
                onChange={(e) =>
                  setForm({ ...form, author_name: e.target.value })
                }
                placeholder="작성자 이름"
              />
            </div>

            {/* Cover Image */}
            <div className="space-y-1.5">
              <Label>커버 이미지 URL</Label>
              <Input
                value={form.cover_image}
                onChange={(e) =>
                  setForm({ ...form, cover_image: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Excerpt */}
            <div className="space-y-1.5">
              <Label>요약 (excerpt)</Label>
              <Textarea
                value={form.excerpt}
                onChange={(e) =>
                  setForm({ ...form, excerpt: e.target.value })
                }
                placeholder="게시물의 짧은 요약을 입력하세요"
                rows={3}
              />
            </div>

            {/* Content - RichTextEditor */}
            <div className="space-y-1.5">
              <Label>본문</Label>
              <RichTextEditor
                value={form.content}
                onChange={(html) => setForm({ ...form, content: html })}
              />
            </div>

            {/* Published checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="is_published"
                checked={form.is_published}
                onChange={(e) =>
                  setForm({ ...form, is_published: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 accent-brand-lime-safe"
              />
              <Label htmlFor="is_published" className="cursor-pointer">
                즉시 공개
              </Label>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={saving}
            >
              취소
            </Button>
            <Button
              onClick={handleSave}
              disabled={saving}
              className="gap-2 bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90"
            >
              {saving ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : null}
              {editingPost ? "수정" : "등록"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
