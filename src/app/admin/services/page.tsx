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

interface Service {
  id: string;
  name: string;
  description: string | null;
  detail_content: string | null;
  icon_url: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  deleted_at: string | null;
}

export default function ServicesPage() {
  const router = useRouter();
  const supabase = createClient();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [actionLoading, setActionLoading] = useState(false);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .is("deleted_at", null)
      .order("sort_order", { ascending: true });

    if (error) console.error("서비스 로드 실패:", error);
    setServices((data as Service[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const filtered = services.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return s.name.toLowerCase().includes(q);
  });

  // 체크박스
  const allChecked = filtered.length > 0 && filtered.every((s) => selectedIds.has(s.id));
  const someChecked = selectedIds.size > 0;

  const toggleAll = () => {
    if (allChecked) setSelectedIds(new Set());
    else setSelectedIds(new Set(filtered.map((s) => s.id)));
  };

  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  // 일괄 삭제 (soft delete)
  const bulkDelete = async () => {
    if (!confirm(`선택한 ${selectedIds.size}개 서비스를 삭제하시겠습니까?`)) return;
    setActionLoading(true);
    const { error } = await supabase
      .from("services")
      .update({ deleted_at: new Date().toISOString() })
      .in("id", Array.from(selectedIds));
    if (error) alert("삭제 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchServices(); }
    setActionLoading(false);
  };

  // 일괄 가리기/공개
  const bulkTogglePublish = async (publish: boolean) => {
    setActionLoading(true);
    const { error } = await supabase
      .from("services")
      .update({ is_published: publish })
      .in("id", Array.from(selectedIds));
    if (error) alert("변경 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchServices(); }
    setActionLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">서비스 관리</h1>
          <p className="mt-1 text-sm text-text-muted">전체 {services.length}개</p>
        </div>
        <Button
          onClick={() => router.push("/admin/services/new")}
          className="min-h-[44px] gap-2 bg-brand-neon-btn text-sm font-semibold text-white hover:bg-brand-neon-btn/90"
        >
          <PlusIcon className="size-4" />
          서비스 등록
        </Button>
      </div>

      {/* 검색 + 일괄 액션 */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
          <Input
            placeholder="서비스명 검색..."
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
                <TableHead className="w-[60px]">순서</TableHead>
                <TableHead>서비스명</TableHead>
                <TableHead>설명</TableHead>
                <TableHead className="w-[100px]">등록일</TableHead>
                <TableHead className="w-[40px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-text-muted py-12">
                    {searchQuery ? "검색 결과가 없습니다" : "등록된 서비스가 없습니다"}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((service) => (
                  <TableRow
                    key={service.id}
                    className="cursor-pointer hover:bg-surface-secondary/50 transition-colors"
                    onClick={() => router.push(`/admin/services/${service.id}`)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(service.id)}
                        onChange={() => toggleOne(service.id)}
                        className="h-4 w-4 rounded border-gray-300 accent-brand-neon-safe"
                      />
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={service.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}>
                        {service.is_published ? "공개" : "비공개"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-text-muted">{service.sort_order}</TableCell>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="max-w-xs truncate text-text-muted">{service.description || "-"}</TableCell>
                    <TableCell className="text-text-muted text-sm whitespace-nowrap">
                      {new Date(service.created_at).toLocaleDateString("ko-KR")}
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
