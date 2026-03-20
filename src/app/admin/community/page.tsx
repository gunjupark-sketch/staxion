"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  SearchIcon,
  Trash2Icon,
  EyeOffIcon,
  EyeIcon,
  ChevronRightIcon,
  PlusIcon,
  PencilIcon,
  MegaphoneIcon,
} from "lucide-react";

/* ── 게시물 ── */
interface Post {
  id: string;
  title: string;
  category: string;
  post_type: string;
  view_count: number;
  is_published: boolean;
  created_at: string;
  profiles: { name: string | null } | null;
}

/* ── 카테고리 ── */
interface Category {
  id: string;
  slug: string;
  name: string;
  sort_order: number;
}

type Tab = "posts" | "categories";

export default function AdminCommunityPage() {
  const router = useRouter();
  const supabase = createClient();
  const [activeTab, setActiveTab] = useState<Tab>("posts");

  /* ── Posts state ── */
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [actionLoading, setActionLoading] = useState(false);

  /* ── Category state ── */
  const [categories, setCategories] = useState<Category[]>([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catDialogOpen, setCatDialogOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<Category | null>(null);
  const [catForm, setCatForm] = useState({ name: "", slug: "", sort_order: 0 });
  const [catSaving, setCatSaving] = useState(false);

  /* ── Fetch posts ── */
  const fetchPosts = useCallback(async () => {
    setPostsLoading(true);
    const { data, error } = await supabase
      .from("community_posts")
      .select("id, title, category, post_type, view_count, is_published, created_at, profiles(name)")
      .order("created_at", { ascending: false });

    if (error) console.error("게시물 로드 실패:", error);
    setPosts(
      ((data || []) as unknown[]).map((p: unknown) => {
        const post = p as Record<string, unknown>;
        return {
          ...post,
          profiles: Array.isArray(post.profiles) ? post.profiles[0] : post.profiles,
        } as Post;
      })
    );
    setPostsLoading(false);
  }, []);

  /* ── Fetch categories ── */
  const fetchCategories = useCallback(async () => {
    setCatLoading(true);
    const { data, error } = await supabase
      .from("community_categories")
      .select("id, slug, name, sort_order")
      .order("sort_order");

    if (error) console.error("카테고리 로드 실패:", error);
    setCategories((data as Category[]) || []);
    setCatLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, [fetchPosts, fetchCategories]);

  /* ── Posts helpers ── */
  const categoryName = (slug: string) =>
    categories.find((c) => c.slug === slug)?.name || slug;

  const filtered = posts.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      (p.profiles?.name && p.profiles.name.toLowerCase().includes(q))
    );
  });

  const allChecked = filtered.length > 0 && filtered.every((p) => selectedIds.has(p.id));
  const someChecked = selectedIds.size > 0;

  const toggleAll = () => {
    if (allChecked) setSelectedIds(new Set());
    else setSelectedIds(new Set(filtered.map((p) => p.id)));
  };
  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const bulkTogglePublish = async (publish: boolean) => {
    setActionLoading(true);
    const { error } = await supabase
      .from("community_posts")
      .update({ is_published: publish })
      .in("id", Array.from(selectedIds));
    if (error) alert("변경 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchPosts(); }
    setActionLoading(false);
  };

  const bulkDelete = async () => {
    if (!confirm(`선택한 ${selectedIds.size}개 게시물을 삭제하시겠습니까? 댓글도 함께 삭제됩니다.`)) return;
    setActionLoading(true);
    const { error } = await supabase
      .from("community_posts")
      .delete()
      .in("id", Array.from(selectedIds));
    if (error) alert("삭제 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchPosts(); }
    setActionLoading(false);
  };

  /* ── Category CRUD ── */
  const openCatCreate = () => {
    setEditingCat(null);
    setCatForm({ name: "", slug: "", sort_order: categories.length });
    setCatDialogOpen(true);
  };

  const openCatEdit = (cat: Category) => {
    setEditingCat(cat);
    setCatForm({ name: cat.name, slug: cat.slug, sort_order: cat.sort_order });
    setCatDialogOpen(true);
  };

  const handleCatSave = async () => {
    if (!catForm.name.trim() || !catForm.slug.trim()) {
      alert("이름과 슬러그를 입력하세요.");
      return;
    }
    setCatSaving(true);
    const payload = {
      name: catForm.name.trim(),
      slug: catForm.slug.trim(),
      sort_order: catForm.sort_order,
    };

    try {
      if (editingCat) {
        const { error } = await supabase
          .from("community_categories")
          .update(payload)
          .eq("id", editingCat.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("community_categories")
          .insert(payload);
        if (error) throw error;
      }
      setCatDialogOpen(false);
      fetchCategories();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "저장 실패";
      alert(msg);
    } finally {
      setCatSaving(false);
    }
  };

  const handleCatDelete = async (cat: Category) => {
    if (!confirm(`"${cat.name}" 카테고리를 삭제하시겠습니까?\n이 카테고리의 게시물은 카테고리 없음 상태가 됩니다.`)) return;
    const { error } = await supabase
      .from("community_categories")
      .delete()
      .eq("id", cat.id);
    if (error) alert("삭제 실패: " + error.message);
    else fetchCategories();
  };

  const autoSlug = (name: string) =>
    name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">커뮤니티 관리</h1>
          <p className="mt-1 text-sm text-text-muted">게시물 및 카테고리 관리</p>
        </div>
      </div>

      {/* 탭 */}
      <div className="mt-6 flex gap-2 border-b">
        {([
          { key: "posts" as Tab, label: "게시물" },
          { key: "categories" as Tab, label: "카테고리" },
        ]).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.key
                ? "border-brand-neon-safe text-text-primary"
                : "border-transparent text-text-muted hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ═══ 게시물 탭 ═══ */}
      {activeTab === "posts" && (
        <>
          {/* 검색 + 일괄 액션 */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-sm">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
              <Input
                placeholder="제목, 작성자 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            {someChecked && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted">{selectedIds.size}개 선택</span>
                <Button size="sm" variant="outline" onClick={() => bulkTogglePublish(false)} disabled={actionLoading} className="gap-1.5">
                  <EyeOffIcon className="size-3.5" />
                  가리기
                </Button>
                <Button size="sm" variant="outline" onClick={() => bulkTogglePublish(true)} disabled={actionLoading} className="gap-1.5">
                  <EyeIcon className="size-3.5" />
                  공개
                </Button>
                <Button size="sm" variant="outline" onClick={bulkDelete} disabled={actionLoading} className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50">
                  <Trash2Icon className="size-3.5" />
                  삭제
                </Button>
              </div>
            )}
          </div>

          {/* 테이블 */}
          <div className="mt-4 overflow-x-auto rounded-lg border">
            {postsLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[44px]">
                      <input type="checkbox" checked={allChecked} onChange={toggleAll} className="h-4 w-4 rounded border-gray-300 accent-brand-neon-safe" />
                    </TableHead>
                    <TableHead className="w-[80px]">상태</TableHead>
                    <TableHead className="w-[80px]">유형</TableHead>
                    <TableHead className="w-[100px]">카테고리</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead className="w-[100px]">작성자</TableHead>
                    <TableHead className="w-[80px] text-right">조회</TableHead>
                    <TableHead className="w-[100px]">작성일</TableHead>
                    <TableHead className="w-[40px]" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center text-text-muted py-12">
                        {searchQuery ? "검색 결과가 없습니다" : "게시물이 없습니다"}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filtered.map((post) => (
                      <TableRow
                        key={post.id}
                        className="cursor-pointer hover:bg-surface-secondary/50 transition-colors"
                        onClick={() => router.push(`/community/${post.id}`)}
                      >
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={selectedIds.has(post.id)}
                            onChange={() => toggleOne(post.id)}
                            className="h-4 w-4 rounded border-gray-300 accent-brand-neon-safe"
                          />
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className={post.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}>
                            {post.is_published ? "공개" : "숨김"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {post.post_type === "notice" ? (
                            <Badge className="bg-brand-neon-safe/10 text-brand-neon-text border-brand-neon-safe/30 text-xs gap-1">
                              <MegaphoneIcon className="size-3" />
                              공지
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">일반</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs">
                            {categoryName(post.category)}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium max-w-xs truncate">{post.title}</TableCell>
                        <TableCell className="text-text-muted text-sm">{post.profiles?.name || "-"}</TableCell>
                        <TableCell className="text-right text-text-muted text-sm">{post.view_count}</TableCell>
                        <TableCell className="text-text-muted text-sm whitespace-nowrap">
                          {new Date(post.created_at).toLocaleDateString("ko-KR")}
                        </TableCell>
                        <TableCell>
                          <ChevronRightIcon className="size-4 text-text-muted" />
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </>
      )}

      {/* ═══ 카테고리 탭 ═══ */}
      {activeTab === "categories" && (
        <>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-text-muted">전체 {categories.length}개</p>
            <Button
              onClick={openCatCreate}
              className="min-h-[44px] gap-2 bg-brand-neon-btn text-sm font-semibold text-white hover:bg-brand-neon-btn/90"
            >
              <PlusIcon className="size-4" />
              카테고리 추가
            </Button>
          </div>

          <div className="mt-4 overflow-x-auto rounded-lg border">
            {catLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[60px]">순서</TableHead>
                    <TableHead>카테고리명</TableHead>
                    <TableHead>슬러그</TableHead>
                    <TableHead className="w-[120px] text-right">관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-text-muted py-12">
                        카테고리가 없습니다
                      </TableCell>
                    </TableRow>
                  ) : (
                    categories.map((cat) => (
                      <TableRow key={cat.id}>
                        <TableCell className="text-text-muted">{cat.sort_order}</TableCell>
                        <TableCell className="font-medium">{cat.name}</TableCell>
                        <TableCell className="text-text-muted font-mono text-sm">{cat.slug}</TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => openCatEdit(cat)}
                              className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[32px] min-w-[32px]"
                              title="수정"
                            >
                              <PencilIcon className="size-4" />
                            </button>
                            <button
                              onClick={() => handleCatDelete(cat)}
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
        </>
      )}

      {/* ═══ 카테고리 추가/수정 다이얼로그 ═══ */}
      <Dialog open={catDialogOpen} onOpenChange={setCatDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingCat ? "카테고리 수정" : "카테고리 추가"}</DialogTitle>
            <DialogDescription>
              커뮤니티 게시판에 사용할 카테고리입니다.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label>카테고리명 *</Label>
              <Input
                value={catForm.name}
                onChange={(e) => {
                  const name = e.target.value;
                  setCatForm((prev) => ({
                    ...prev,
                    name,
                    slug: editingCat ? prev.slug : autoSlug(name),
                  }));
                }}
                placeholder="예: 자유게시판"
              />
            </div>
            <div className="space-y-1.5">
              <Label>슬러그 *</Label>
              <Input
                value={catForm.slug}
                onChange={(e) => setCatForm((prev) => ({ ...prev, slug: e.target.value }))}
                placeholder="free-board"
              />
              <p className="text-xs text-text-muted">URL에 사용됩니다. 영문/숫자/하이픈 권장.</p>
            </div>
            <div className="space-y-1.5">
              <Label>정렬 순서</Label>
              <Input
                type="number"
                value={catForm.sort_order}
                onChange={(e) => setCatForm((prev) => ({ ...prev, sort_order: parseInt(e.target.value) || 0 }))}
                min={0}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCatDialogOpen(false)} disabled={catSaving}>
              취소
            </Button>
            <Button onClick={handleCatSave} disabled={catSaving} className="gap-1.5 bg-brand-neon-btn text-white hover:bg-brand-neon-btn/90">
              {catSaving ? "저장 중..." : "저장"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
