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
  CheckCircleIcon,
  XCircleIcon,
  SearchIcon,
  Trash2Icon,
  EyeOffIcon,
  ChevronRightIcon,
} from "lucide-react";

interface Member {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  role: string;
  member_grade: string;
  license_status: string;
  license_url: string | null;
  license_file_path: string | null;
  clinic_name: string | null;
  clinic_region: string | null;
  created_at: string;
}

const gradeColors: Record<string, string> = {
  associate: "bg-gray-100 text-gray-600",
  regular: "bg-blue-50 text-blue-600",
  vip: "bg-amber-50 text-amber-600",
};

const gradeLabel: Record<string, string> = {
  associate: "준회원",
  regular: "정회원",
  vip: "VIP",
};

const licenseColors: Record<string, string> = {
  none: "bg-gray-100 text-gray-500",
  uploaded: "bg-yellow-50 text-yellow-600",
  approved: "bg-green-50 text-green-600",
  rejected: "bg-red-50 text-red-600",
};

const licenseLabel: Record<string, string> = {
  none: "미등록",
  uploaded: "검토중",
  approved: "승인",
  rejected: "반려",
};

const roleLabel: Record<string, string> = {
  admin: "관리자",
  member: "회원",
  pending: "승인대기",
};

type FilterTab = "all" | "pending" | "uploaded" | "regular" | "vip";

export default function MembersPage() {
  const router = useRouter();
  const supabase = createClient();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [actionLoading, setActionLoading] = useState(false);

  const fetchMembers = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("회원 로드 실패:", error.message);
      setMembers([]);
    } else {
      setMembers(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  // 필터링
  const filtered = members.filter((m) => {
    // 탭 필터
    if (activeTab === "pending" && m.role !== "pending") return false;
    if (activeTab === "uploaded" && m.license_status !== "uploaded") return false;
    if (activeTab === "regular" && m.member_grade !== "regular") return false;
    if (activeTab === "vip" && m.member_grade !== "vip") return false;

    // 검색 필터
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      return (
        (m.name && m.name.toLowerCase().includes(q)) ||
        m.email.toLowerCase().includes(q) ||
        (m.clinic_name && m.clinic_name.toLowerCase().includes(q)) ||
        (m.phone && m.phone.includes(q))
      );
    }
    return true;
  });

  const tabs: { value: FilterTab; label: string; count: number }[] = [
    { value: "all", label: "전체", count: members.length },
    { value: "pending", label: "승인대기", count: members.filter((m) => m.role === "pending").length },
    { value: "uploaded", label: "면허검토", count: members.filter((m) => m.license_status === "uploaded").length },
    { value: "regular", label: "정회원", count: members.filter((m) => m.member_grade === "regular").length },
    { value: "vip", label: "VIP", count: members.filter((m) => m.member_grade === "vip").length },
  ];

  // 체크박스
  const allChecked = filtered.length > 0 && filtered.every((m) => selectedIds.has(m.id));
  const someChecked = selectedIds.size > 0;

  const toggleAll = () => {
    if (allChecked) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filtered.map((m) => m.id)));
    }
  };

  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  // 일괄 면허 승인
  const bulkApprove = async () => {
    if (!confirm(`선택한 ${selectedIds.size}명의 면허를 승인하시겠습니까?`)) return;
    setActionLoading(true);
    const ids = Array.from(selectedIds);
    const { error } = await supabase
      .from("profiles")
      .update({
        license_status: "approved",
        role: "member",
        member_grade: "regular",
        updated_at: new Date().toISOString(),
      })
      .in("id", ids);

    if (error) alert("승인 실패: " + error.message);
    else {
      setSelectedIds(new Set());
      fetchMembers();
    }
    setActionLoading(false);
  };

  // 일괄 면허 반려
  const bulkReject = async () => {
    if (!confirm(`선택한 ${selectedIds.size}명의 면허를 반려하시겠습니까?`)) return;
    setActionLoading(true);
    const ids = Array.from(selectedIds);
    const { error } = await supabase
      .from("profiles")
      .update({
        license_status: "rejected",
        updated_at: new Date().toISOString(),
      })
      .in("id", ids);

    if (error) alert("반려 실패: " + error.message);
    else {
      setSelectedIds(new Set());
      fetchMembers();
    }
    setActionLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">회원 관리</h1>
          <p className="mt-1 text-sm text-text-muted">
            전체 {members.length}명 · 면허 검토 대기 {members.filter((m) => m.license_status === "uploaded").length}명
          </p>
        </div>
      </div>

      {/* 탭 필터 */}
      <div className="mt-6 flex flex-wrap gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => { setActiveTab(tab.value); setSelectedIds(new Set()); }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors min-h-[40px] ${
              activeTab === tab.value
                ? "bg-text-primary text-white"
                : "bg-surface-secondary text-text-secondary hover:bg-gray-200"
            }`}
          >
            {tab.label}
            <span className="ml-1.5 text-xs opacity-70">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* 검색 + 일괄 액션 */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
          <Input
            placeholder="이름, 이메일, 치과명 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {someChecked && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted">{selectedIds.size}명 선택</span>
            <Button
              size="sm"
              onClick={bulkApprove}
              disabled={actionLoading}
              className="gap-1.5 bg-green-600 text-white hover:bg-green-700"
            >
              <CheckCircleIcon className="size-3.5" />
              면허 승인
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={bulkReject}
              disabled={actionLoading}
              className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50"
            >
              <XCircleIcon className="size-3.5" />
              면허 반려
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
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={toggleAll}
                    className="h-4 w-4 rounded border-gray-300 accent-brand-neon-safe"
                  />
                </TableHead>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>치과명</TableHead>
                <TableHead className="w-[80px]">등급</TableHead>
                <TableHead className="w-[80px]">면허</TableHead>
                <TableHead className="w-[100px]">가입일</TableHead>
                <TableHead className="w-[40px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-text-muted py-12">
                    {searchQuery ? "검색 결과가 없습니다" : "회원이 없습니다"}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((member) => (
                  <TableRow
                    key={member.id}
                    className="cursor-pointer hover:bg-surface-secondary/50 transition-colors"
                    onClick={() => router.push(`/admin/members/${member.id}`)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(member.id)}
                        onChange={() => toggleOne(member.id)}
                        className="h-4 w-4 rounded border-gray-300 accent-brand-neon-safe"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {member.name || "-"}
                      {member.role === "admin" && (
                        <Badge variant="secondary" className="ml-2 bg-brand-neon-safe/10 text-brand-neon-text text-[10px]">
                          관리자
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-text-muted text-sm">{member.email}</TableCell>
                    <TableCell className="text-sm">{member.clinic_name || "-"}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={gradeColors[member.member_grade] || gradeColors.associate}>
                        {gradeLabel[member.member_grade] || "준회원"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={licenseColors[member.license_status]}>
                        {licenseLabel[member.license_status]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-text-muted text-sm whitespace-nowrap">
                      {new Date(member.created_at).toLocaleDateString("ko-KR")}
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
