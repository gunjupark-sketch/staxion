"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RichTextEditor from "@/components/editor/RichTextEditor";
import { ArrowLeftIcon, Loader2Icon } from "lucide-react";

interface Category {
  slug: string;
  name: string;
}

export default function CommunityEditPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  const supabase = createClient();

  const [user, setUser] = useState<{ id: string } | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [postType, setPostType] = useState<"community" | "notice">("community");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        router.replace("/login");
        return;
      }
      setUser(data.user);

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();
      setUserRole(profile?.role || null);
    });
  }, [router]);

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

  // 기존 게시물 로드
  useEffect(() => {
    async function loadPost() {
      const { data } = await supabase
        .from("community_posts")
        .select("*")
        .eq("id", postId)
        .single();

      if (!data) {
        router.replace("/community");
        return;
      }

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setPostType(data.post_type as "community" | "notice");
      setLoading(false);
    }
    loadPost();
  }, [postId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !title.trim() || !content.trim() || !category) return;

    setSaving(true);

    const { error } = await supabase
      .from("community_posts")
      .update({
        title: title.trim(),
        content,
        category,
        post_type: userRole === "admin" ? postType : undefined,
      })
      .eq("id", postId);

    if (error) {
      alert("수정에 실패했습니다: " + error.message);
      setSaving(false);
      return;
    }

    router.push(`/community/${postId}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href={`/community/${postId}`}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          돌아가기
        </Link>

        <h1 className="text-2xl font-bold text-text-primary">게시물 수정</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* 관리자: 글 타입 선택 */}
          {userRole === "admin" && (
            <div className="space-y-2">
              <Label>글 유형</Label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPostType("community")}
                  className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors min-h-[44px] ${
                    postType === "community"
                      ? "border-brand-lime-safe bg-brand-lime-safe/10 text-brand-lime-text"
                      : "text-text-muted hover:border-border"
                  }`}
                >
                  일반 게시물
                </button>
                <button
                  type="button"
                  onClick={() => setPostType("notice")}
                  className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors min-h-[44px] ${
                    postType === "notice"
                      ? "border-brand-lime-safe bg-brand-lime-safe/10 text-brand-lime-text"
                      : "text-text-muted hover:border-border"
                  }`}
                >
                  공지/소식
                </button>
              </div>
            </div>
          )}

          {/* 카테고리 */}
          <div className="space-y-2">
            <Label htmlFor="category">카테고리</Label>
            <Select value={category} onValueChange={(val) => val !== null && setCategory(val)}>
              <SelectTrigger className="min-h-[44px]">
                <SelectValue placeholder="카테고리를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 제목 */}
          <div className="space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="min-h-[44px]"
              required
            />
          </div>

          {/* 본문 에디터 */}
          <div className="space-y-2">
            <Label>내용</Label>
            <RichTextEditor value={content} onChange={setContent} />
          </div>

          {/* 버튼 */}
          <div className="flex items-center gap-3 pt-4">
            <Button
              type="submit"
              disabled={saving || !title.trim() || !content.trim()}
              className="min-h-[44px] gap-2 bg-brand-lime-btn px-8 text-sm font-semibold text-white hover:bg-brand-lime-btn/90"
            >
              {saving && <Loader2Icon className="size-4 animate-spin" />}
              {saving ? "수정 중..." : "수정 완료"}
            </Button>
            <Link href={`/community/${postId}`}>
              <Button type="button" variant="outline" className="min-h-[44px]">
                취소
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
