"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";

interface Profile {
  id: string;
  name: string;
  email: string;
  clinic_name: string | null;
  role: string;
  created_at: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getProviderLabel(provider: string | undefined) {
  switch (provider) {
    case "google":
      return "Google";
    case "kakao":
      return "카카오";
    case "naver":
      return "네이버";
    default:
      return "이메일";
  }
}

export default function MypageProfilePage() {
  const supabase = createClient();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [provider, setProvider] = useState<string>("email");
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // 비밀번호 변경
  const [changingPassword, setChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  // 회원 탈퇴
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setProvider(user.app_metadata?.provider || "email");

      const { data } = await supabase
        .from("profiles")
        .select("id, name, email, clinic_name, role, created_at")
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile(data);
        setName(data.name || "");
        setClinicName(data.clinic_name || "");
      }
    }
    loadProfile();
  }, []);

  async function handleSave() {
    if (!profile) return;
    setSaving(true);
    setMessage("");

    const { error } = await supabase
      .from("profiles")
      .update({ name, clinic_name: clinicName })
      .eq("id", profile.id);

    if (error) {
      setMessage("저장에 실패했습니다. 다시 시도해주세요.");
    } else {
      setMessage("저장되었습니다.");
      setProfile({ ...profile, name, clinic_name: clinicName });
      setEditing(false);
    }
    setSaving(false);
  }

  async function handlePasswordChange() {
    if (newPassword.length < 6) {
      setPasswordMessage("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    setPasswordSaving(true);
    setPasswordMessage("");

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setPasswordMessage("비밀번호 변경에 실패했습니다.");
    } else {
      setPasswordMessage("비밀번호가 변경되었습니다.");
      setNewPassword("");
      setConfirmPassword("");
      setChangingPassword(false);
    }
    setPasswordSaving(false);
  }

  async function handleDeleteAccount() {
    // 클라이언트에서 직접 삭제는 불가하므로 로그아웃 후 안내
    // 실제 삭제는 서버 API로 처리해야 함
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (!profile) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 프로필 정보 */}
      <Card>
        <CardContent className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">기본 정보</h2>
            {!editing && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditing(true)}
              >
                수정
              </Button>
            )}
          </div>

          <Separator />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>이름</Label>
              {editing ? (
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력하세요"
                />
              ) : (
                <p className="rounded-lg bg-surface-secondary px-3 py-2.5 text-sm text-text-primary">
                  {profile.name || "-"}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>이메일</Label>
              <p className="rounded-lg bg-surface-secondary px-3 py-2.5 text-sm text-text-muted">
                {profile.email}
              </p>
            </div>

            <div className="space-y-2">
              <Label>치과명</Label>
              {editing ? (
                <Input
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  placeholder="치과명을 입력하세요"
                />
              ) : (
                <p className="rounded-lg bg-surface-secondary px-3 py-2.5 text-sm text-text-primary">
                  {profile.clinic_name || "-"}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>가입일</Label>
              <p className="rounded-lg bg-surface-secondary px-3 py-2.5 text-sm text-text-muted">
                {formatDate(profile.created_at)}
              </p>
            </div>

            <div className="space-y-2">
              <Label>로그인 방식</Label>
              <p className="rounded-lg bg-surface-secondary px-3 py-2.5 text-sm text-text-muted">
                {getProviderLabel(provider)}
              </p>
            </div>
          </div>

          {editing && (
            <div className="flex items-center gap-2 pt-2">
              <Button onClick={handleSave} disabled={saving} size="sm">
                {saving ? "저장 중..." : "저장"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditing(false);
                  setName(profile.name || "");
                  setClinicName(profile.clinic_name || "");
                  setMessage("");
                }}
              >
                취소
              </Button>
            </div>
          )}

          {message && (
            <p className={`text-sm ${message.includes("실패") ? "text-red-500" : "text-brand-lime-text"}`}>
              {message}
            </p>
          )}
        </CardContent>
      </Card>

      {/* 비밀번호 변경 - 이메일 가입자만 */}
      {provider === "email" && (
        <Card>
          <CardContent className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">비밀번호 변경</h2>
              {!changingPassword && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setChangingPassword(true)}
                >
                  변경
                </Button>
              )}
            </div>

            {changingPassword && (
              <>
                <Separator />
                <div className="max-w-sm space-y-4">
                  <div className="space-y-2">
                    <Label>새 비밀번호</Label>
                    <Input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="6자 이상 입력"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>비밀번호 확인</Label>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="비밀번호 재입력"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button onClick={handlePasswordChange} disabled={passwordSaving} size="sm">
                      {passwordSaving ? "변경 중..." : "변경하기"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setChangingPassword(false);
                        setNewPassword("");
                        setConfirmPassword("");
                        setPasswordMessage("");
                      }}
                    >
                      취소
                    </Button>
                  </div>
                </div>
              </>
            )}

            {passwordMessage && (
              <p className={`text-sm ${passwordMessage.includes("실패") || passwordMessage.includes("일치") || passwordMessage.includes("이상") ? "text-red-500" : "text-brand-lime-text"}`}>
                {passwordMessage}
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* 회원 탈퇴 */}
      <Card>
        <CardContent className="pt-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">회원 탈퇴</h2>
              <p className="mt-1 text-sm text-text-muted">
                탈퇴 시 모든 데이터가 삭제되며 복구할 수 없습니다.
              </p>
            </div>
            {!showDeleteConfirm && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setShowDeleteConfirm(true)}
              >
                탈퇴
              </Button>
            )}
          </div>

          {showDeleteConfirm && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="mb-3 text-sm font-medium text-red-700">
                정말로 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDeleteAccount}
                >
                  탈퇴하기
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  취소
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
