"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/editor/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  ArrowLeftIcon,
  SaveIcon,
  Trash2Icon,
} from "lucide-react";

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

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();
  const postId = params.id as string;
  const isNew = postId === "new";

  const [form, setForm] = useState<PostForm>(EMPTY_FORM);
  const [originalPost, setOriginalPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(isNew);
  const [slugManual, setSlugManual] = useState(false);

  // 게시물 로드
  const fetchPost = useCallback(async () => {
    if (isNew) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", postId)
      .single();

    if (error || !data) {
      alert("게시물을 찾을 수 없습니다.");
      router.push("/admin/posts");
      return;
    }

    setOriginalPost(data);
    setForm({
      title: data.title,
      slug: data.slug || "",
      excerpt: data.excerpt || "",
      content: data.content || "",
      category: data.category,
      author_name: data.author_name || "",
      cover_image: data.cover_image || "",
      is_published: data.is_published,
    });
    setSlugManual(true);
    setLoading(false);
  }, [postId, isNew]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugManual ? prev.slug : generateSlug(value),
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

    try {
      if (isNew) {
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
        if (error) throw error;
        router.push("/admin/posts");
      } else {
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

        // published_at 자동 관리
        if (form.is_published && !originalPost?.is_published) {
          updateData.published_at = now;
        }
        if (!form.is_published && originalPost?.is_published) {
          updateData.published_at = null;
        }

        const { error } = await supabase
          .from("posts")
          .update(updateData)
          .eq("id", postId);
        if (error) throw error;
        setEditMode(false);
        fetchPost();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "저장 중 오류가 발생했습니다.";
      alert(msg);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("이 게시물을 삭제하시겠습니까?")) return;
    const { error } = await supabase
      .from("posts")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", postId);
    if (error) alert("삭제 실패: " + error.message);
    else router.push("/admin/posts");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      {/* 상단 */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push("/admin/posts")}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          목록으로
        </button>
        <div className="flex items-center gap-2">
          {!isNew && !editMode && (
            <>
              <Button size="sm" variant="outline" onClick={() => setEditMode(true)}>
                편집
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleDelete}
                className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50"
              >
                <Trash2Icon className="size-3.5" />
                삭제
              </Button>
            </>
          )}
          {editMode && (
            <>
              {!isNew && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditMode(false);
                    fetchPost();
                  }}
                  disabled={saving}
                >
                  취소
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleSave}
                disabled={saving}
                className="gap-1.5 bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90"
              >
                <SaveIcon className="size-3.5" />
                {saving ? "저장 중..." : "저장"}
              </Button>
            </>
          )}
        </div>
      </div>

      <h2 className="mt-6 text-xl font-bold text-text-primary">
        {isNew ? "글 작성" : editMode ? "글 수정" : form.title}
      </h2>
      {!isNew && !editMode && (
        <div className="mt-2 flex gap-2">
          <Badge
            variant="secondary"
            className={form.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}
          >
            {form.is_published ? "공개" : "비공개"}
          </Badge>
          <Badge variant="secondary">
            {categoryLabel[form.category] || form.category}
          </Badge>
        </div>
      )}

      {/* 폼 */}
      <div className="mt-6 space-y-5 rounded-xl border p-5">
        {/* 제목 */}
        <div className="space-y-1.5">
          <Label>제목 *</Label>
          {editMode ? (
            <Input
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="게시물 제목"
            />
          ) : (
            <p className="text-sm text-text-primary">{form.title}</p>
          )}
        </div>

        {/* 슬러그 */}
        <div className="space-y-1.5">
          <Label>슬러그 (URL)</Label>
          {editMode ? (
            <>
              <Input
                value={form.slug}
                onChange={(e) => {
                  setSlugManual(true);
                  setForm((prev) => ({ ...prev, slug: e.target.value }));
                }}
                placeholder="url-friendly-slug"
              />
              {slugManual && isNew && (
                <button
                  type="button"
                  onClick={() => {
                    setSlugManual(false);
                    setForm((prev) => ({ ...prev, slug: generateSlug(prev.title) }));
                  }}
                  className="text-xs text-brand-lime-text hover:underline"
                >
                  자동 생성으로 되돌리기
                </button>
              )}
              <p className="text-xs text-text-muted">
                URL에 사용될 고유 식별자입니다. 제목 입력 시 자동 생성됩니다.
              </p>
            </>
          ) : (
            <p className="text-sm text-text-muted">{form.slug}</p>
          )}
        </div>

        {/* 카테고리 + 작성자 */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label>카테고리</Label>
            {editMode ? (
              <select
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="blog">블로그</option>
                <option value="column">칼럼</option>
                <option value="news">뉴스</option>
              </select>
            ) : (
              <p className="text-sm text-text-primary">
                {categoryLabel[form.category] || form.category}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label>작성자</Label>
            {editMode ? (
              <Input
                value={form.author_name}
                onChange={(e) => setForm((prev) => ({ ...prev, author_name: e.target.value }))}
                placeholder="작성자 이름"
              />
            ) : (
              <p className="text-sm text-text-primary">{form.author_name || "-"}</p>
            )}
          </div>
        </div>

        {/* 커버 이미지 */}
        <div className="space-y-1.5">
          <Label>커버 이미지</Label>
          {editMode ? (
            <ImageUpload
              value={form.cover_image}
              onChange={(url) => setForm((prev) => ({ ...prev, cover_image: url }))}
              bucket="posts"
              folder="covers"
            />
          ) : form.cover_image ? (
            <img
              src={form.cover_image}
              alt=""
              className="h-32 w-auto rounded-lg object-cover border"
            />
          ) : (
            <p className="text-sm text-text-muted">-</p>
          )}
        </div>

        {/* 요약 */}
        <div className="space-y-1.5">
          <Label>요약 (excerpt)</Label>
          {editMode ? (
            <Textarea
              value={form.excerpt}
              onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
              placeholder="게시물의 짧은 요약을 입력하세요"
              rows={3}
            />
          ) : (
            <p className="text-sm text-text-primary whitespace-pre-wrap">
              {form.excerpt || "-"}
            </p>
          )}
        </div>

        {/* 본문 (RichTextEditor) */}
        <div className="space-y-1.5">
          <Label>본문</Label>
          {editMode ? (
            <RichTextEditor
              value={form.content}
              onChange={(html) => setForm((prev) => ({ ...prev, content: html }))}
            />
          ) : form.content ? (
            <div
              className="prose prose-sm max-w-none rounded-lg border p-4"
              dangerouslySetInnerHTML={{ __html: form.content }}
            />
          ) : (
            <p className="text-sm text-text-muted">-</p>
          )}
        </div>

        {/* 공개 체크 */}
        {editMode && (
          <div className="flex items-center gap-6">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={form.is_published}
                onChange={(e) => setForm((prev) => ({ ...prev, is_published: e.target.checked }))}
                className="size-4 rounded border-gray-300 accent-brand-lime-safe"
              />
              <span className="text-sm font-medium">즉시 공개</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
