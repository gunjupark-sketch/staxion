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
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  EyeOffIcon,
  EyeIcon,
  ChevronRightIcon,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
  author_name: string | null;
  is_published: boolean;
  published_at: string | null;
  view_count: number;
  created_at: string;
  deleted_at: string | null;
}

const categoryLabel: Record<string, string> = {
  blog: "블로그",
  column: "칼럼",
  news: "뉴스",
};

export default function PostsPage() {
  const router = useRouter();
  const supabase = createClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [actionLoading, setActionLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, slug, excerpt, category, author_name, is_published, published_at, view_count, created_at, deleted_at")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });

    if (error) console.error("게시물 로드 실패:", error);
    setPosts((data as Post[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const filtered = posts.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      (p.author_name && p.author_name.toLowerCase().includes(q)) ||
      (categoryLabel[p.category] && categoryLabel[p.category].includes(q))
    );
  });

  // 체크박스
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

  // 일괄 삭제 (soft delete)
  const bulkDelete = async () => {
    if (!confirm(`선택한 ${selectedIds.size}개 게시물을 삭제하시겠습니까?`)) return;
    setActionLoading(true);
    const { error } = await supabase
      .from("posts")
      .update({ deleted_at: new Date().toISOString() })
      .in("id", Array.from(selectedIds));
    if (error) alert("삭제 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchPosts(); }
    setActionLoading(false);
  };

  // 일괄 가리기/공개
  const bulkTogglePublish = async (publish: boolean) => {
    setActionLoading(true);
    const now = new Date().toISOString();
    const updateData: Record<string, unknown> = {
      is_published: publish,
      updated_at: now,
    };
    if (publish) {
      updateData.published_at = now;
    } else {
      updateData.published_at = null;
    }
    const { error } = await supabase
      .from("posts")
      .update(updateData)
      .in("id", Array.from(selectedIds));
    if (error) alert("변경 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchPosts(); }
    setActionLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">소식 관리</h1>
          <p className="mt-1 text-sm text-text-muted">블로그·칼럼·뉴스 전체 {posts.length}개</p>
        </div>
        <Button
          onClick={() => router.push("/admin/posts/new")}
          className="min-h-[44px] gap-2 bg-brand-lime-btn text-sm font-semibold text-white hover:bg-brand-lime-btn/90"
        >
          <PlusIcon className="size-4" />
          글 작성
        </Button>
      </div>

      {/* 검색 + 일괄 액션 */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
          <Input
            placeholder="제목, 작성자, 카테고리 검색..."
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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[44px]">
                  <input type="checkbox" checked={allChecked} onChange={toggleAll} className="h-4 w-4 rounded border-gray-300 accent-brand-lime-safe" />
                </TableHead>
                <TableHead className="w-[80px]">상태</TableHead>
                <TableHead className="w-[80px]">카테고리</TableHead>
                <TableHead>제목</TableHead>
                <TableHead className="w-[100px]">작성자</TableHead>
                <TableHead className="w-[80px] text-right">조회수</TableHead>
                <TableHead className="w-[100px]">작성일</TableHead>
                <TableHead className="w-[40px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-text-muted py-12">
                    {searchQuery ? "검색 결과가 없습니다" : "등록된 글이 없습니다"}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((post) => (
                  <TableRow
                    key={post.id}
                    className="cursor-pointer hover:bg-surface-secondary/50 transition-colors"
                    onClick={() => router.push(`/admin/posts/${post.id}`)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(post.id)}
                        onChange={() => toggleOne(post.id)}
                        className="h-4 w-4 rounded border-gray-300 accent-brand-lime-safe"
                      />
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={post.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}
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
                      <ChevronRightIcon className="size-4 text-text-muted" />
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
