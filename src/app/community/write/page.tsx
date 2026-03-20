"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

export default function CommunityWritePage() {
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<{ id: string } | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [postType, setPostType] = useState<"community" | "notice">("community");
  const [saving, setSaving] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

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
      setAuthChecked(true);
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
        if (data) {
          setCategories(data);
          if (data.length > 0 && !category) setCategory(data[0].slug);
        }
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !title.trim() || !content.trim() || !category) return;

    setSaving(true);

    const { data, error } = await supabase
      .from("community_posts")
      .insert({
        author_id: user.id,
        title: title.trim(),
        content,
        category,
        post_type: userRole === "admin" ? postType : "community",
      })
      .select("id")
      .single();

    if (error) {
      alert("게시물 등록에 실패했습니다: " + error.message);
      setSaving(false);
      return;
    }

    router.push(`/community/${data.id}`);
  };

  if (!authChecked) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href="/community"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          목록으로
        </Link>

        <h1 className="text-2xl font-bold text-text-primary">글쓰기</h1>

        <div className="mt-8 rounded-xl border border-border/50 bg-card p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 관리자: 글 타입 선택 */}
            {userRole === "admin" && (
              <div className="space-y-2">
                <Label>글 유형</Label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setPostType("community")}
                    className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 min-h-[44px] ${
                      postType === "community"
                        ? "border-primary bg-primary/10 text-primary shadow-sm"
                        : "border-border/50 text-text-muted hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    일반 게시물
                  </button>
                  <button
                    type="button"
                    onClick={() => setPostType("notice")}
                    className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 min-h-[44px] ${
                      postType === "notice"
                        ? "border-primary bg-primary/10 text-primary shadow-sm"
                        : "border-border/50 text-text-muted hover:border-primary/30 hover:bg-primary/5"
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
                <SelectTrigger className="min-h-[44px] focus:ring-2 focus:ring-primary/50 focus:border-primary">
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
                className="min-h-[44px] focus:ring-2 focus:ring-primary/50 focus:border-primary"
                required
              />
            </div>

            {/* 본문 에디터 */}
            <div className="space-y-2">
              <Label>내용</Label>
              <RichTextEditor value={content} onChange={setContent} />
            </div>

            {/* 버튼 */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <Button
                type="submit"
                disabled={saving || !title.trim() || !content.trim()}
                className="min-h-[44px] gap-2 bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-primary/90 shadow-sm"
              >
                {saving && <Loader2Icon className="size-4 animate-spin" />}
                {saving ? "등록 중..." : "게시물 등록"}
              </Button>
              <Link href="/community">
                <Button type="button" variant="outline" className="min-h-[44px]">
                  취소
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
