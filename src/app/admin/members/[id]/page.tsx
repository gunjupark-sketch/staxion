"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  XCircleIcon,
  SaveIcon,
  ExternalLinkIcon,
} from "lucide-react";

interface MemberProfile {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  birth_date: string | null;
  address: string | null;
  role: string;
  member_grade: string;
  license_status: string;
  license_url: string | null;
  license_file_path: string | null;
  clinic_name: string | null;
  clinic_address: string | null;
  clinic_region: string | null;
  university: string | null;
  major: string | null;
  referral_source: string | null;
  is_clinic_owner: string | null;
  interests: string[] | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

const gradeOptions = [
  { value: "associate", label: "준회원" },
  { value: "regular", label: "정회원" },
  { value: "vip", label: "VIP" },
];

const roleOptions = [
  { value: "pending", label: "승인대기" },
  { value: "member", label: "회원" },
  { value: "admin", label: "관리자" },
];

const licenseColors: Record<string, string> = {
  none: "bg-gray-100 text-gray-500",
  uploaded: "bg-yellow-50 text-yellow-600",
  approved: "bg-green-50 text-green-600",
  rejected: "bg-red-50 text-red-600",
};

const licenseLabel: Record<string, string> = {
  none: "미등록",
  uploaded: "검토중",
  approved: "승인됨",
  rejected: "반려됨",
};

export default function MemberDetailPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();
  const memberId = params.id as string;

  const [member, setMember] = useState<MemberProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // 편집 가능 필드
  const [grade, setGrade] = useState("");
  const [role, setRole] = useState("");
  const [memo, setMemo] = useState("");

  const fetchMember = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", memberId)
      .single();

    if (error || !data) {
      alert("회원을 찾을 수 없습니다.");
      router.push("/admin/members");
      return;
    }

    setMember(data);
    setGrade(data.member_grade || "associate");
    setRole(data.role);
    setLoading(false);
  }, [memberId]);

  useEffect(() => {
    fetchMember();
  }, [fetchMember]);

  const handleSave = async () => {
    if (!member) return;
    setSaving(true);

    const { error } = await supabase
      .from("profiles")
      .update({
        member_grade: grade,
        role: role,
        updated_at: new Date().toISOString(),
      })
      .eq("id", member.id);

    if (error) {
      alert("저장 실패: " + error.message);
    } else {
      setEditMode(false);
      fetchMember();
    }
    setSaving(false);
  };

  const handleLicenseAction = async (action: "approved" | "rejected") => {
    if (!member) return;
    const label = action === "approved" ? "승인" : "반려";
    if (!confirm(`면허를 ${label}하시겠습니까?`)) return;

    setSaving(true);

    const updateData: Record<string, unknown> = {
      license_status: action,
      updated_at: new Date().toISOString(),
    };

    // 승인 시 자동으로 role=member, grade=regular
    if (action === "approved") {
      updateData.role = "member";
      updateData.member_grade = "regular";
    }

    const { error } = await supabase
      .from("profiles")
      .update(updateData)
      .eq("id", member.id);

    if (error) {
      alert(`${label} 실패: ` + error.message);
    } else {
      fetchMember();
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  if (!member) return null;

  const licenseFileUrl = member.license_file_path
    ? supabase.storage.from("licenses").getPublicUrl(member.license_file_path).data.publicUrl
    : member.license_url;

  return (
    <div className="max-w-3xl">
      {/* 상단 네비 */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push("/admin/members")}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          목록으로
        </button>
        <div className="flex items-center gap-2">
          {editMode ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditMode(false);
                  setGrade(member.member_grade || "associate");
                  setRole(member.role);
                }}
                disabled={saving}
              >
                취소
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                disabled={saving}
                className="gap-1.5 bg-brand-neon-btn text-white hover:bg-brand-neon-btn/90"
              >
                <SaveIcon className="size-3.5" />
                저장
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditMode(true)}
            >
              편집
            </Button>
          )}
        </div>
      </div>

      {/* 프로필 헤더 */}
      <div className="mt-6 rounded-xl border p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface-secondary text-lg font-bold text-text-primary">
            {member.name ? member.name[0] : "?"}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold text-text-primary">{member.name || "이름 없음"}</h2>
            <p className="mt-0.5 text-sm text-text-muted">{member.email}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="secondary" className={licenseColors[member.license_status]}>
                면허: {licenseLabel[member.license_status]}
              </Badge>
              <Badge variant="secondary" className={
                grade === "vip" ? "bg-amber-50 text-amber-600" :
                grade === "regular" ? "bg-blue-50 text-blue-600" :
                "bg-gray-100 text-gray-600"
              }>
                {gradeOptions.find((g) => g.value === (editMode ? grade : member.member_grade))?.label || "준회원"}
              </Badge>
              <Badge variant="secondary" className={
                member.role === "admin" ? "bg-brand-neon-safe/10 text-brand-neon-text" :
                member.role === "member" ? "bg-blue-50 text-blue-600" :
                "bg-yellow-50 text-yellow-600"
              }>
                {roleOptions.find((r) => r.value === member.role)?.label}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* 면허 승인/반려 카드 */}
      {(member.license_status === "uploaded" || member.license_status === "rejected") && (
        <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50/50 p-5">
          <h3 className="text-sm font-semibold text-yellow-800">면허 검토</h3>
          {licenseFileUrl && (
            <a
              href={licenseFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
            >
              <ExternalLinkIcon className="size-3.5" />
              면허 이미지 보기
            </a>
          )}
          <div className="mt-3 flex gap-2">
            <Button
              size="sm"
              onClick={() => handleLicenseAction("approved")}
              disabled={saving}
              className="gap-1.5 bg-green-600 text-white hover:bg-green-700"
            >
              <CheckCircleIcon className="size-3.5" />
              면허 승인
            </Button>
            {member.license_status !== "rejected" && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleLicenseAction("rejected")}
                disabled={saving}
                className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50"
              >
                <XCircleIcon className="size-3.5" />
                면허 반려
              </Button>
            )}
          </div>
        </div>
      )}

      {/* 등급/역할 편집 */}
      {editMode && (
        <div className="mt-4 rounded-xl border p-5 space-y-4">
          <h3 className="text-sm font-semibold text-text-primary">등급 · 역할 변경</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>회원 등급</Label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {gradeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label>역할</Label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {roleOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 상세 정보 */}
      <div className="mt-4 rounded-xl border p-5">
        <h3 className="text-sm font-semibold text-text-primary mb-4">회원 정보</h3>
        <dl className="grid gap-3 sm:grid-cols-2">
          <InfoRow label="연락처" value={member.phone} />
          <InfoRow label="생년월일" value={member.birth_date} />
          <InfoRow label="주소" value={member.address} />
          <InfoRow label="치과명" value={member.clinic_name} />
          <InfoRow label="치과주소" value={member.clinic_address} />
          <InfoRow label="지역" value={member.clinic_region} />
          <InfoRow label="대학" value={member.university} />
          <InfoRow label="전공" value={member.major} />
          <InfoRow label="개원여부" value={member.is_clinic_owner} />
          <InfoRow label="가입경로" value={member.referral_source} />
          <InfoRow label="관심분야" value={member.interests?.join(", ")} />
          <InfoRow label="가입일" value={new Date(member.created_at).toLocaleDateString("ko-KR")} />
        </dl>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="flex flex-col">
      <dt className="text-xs text-text-muted">{label}</dt>
      <dd className="mt-0.5 text-sm text-text-primary">{value || "-"}</dd>
    </div>
  );
}
