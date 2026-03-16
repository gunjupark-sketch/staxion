"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";

type OAuthProvider = "kakao" | "google" | "naver";

const INTEREST_OPTIONS = [
  "보톡스",
  "필러",
  "리프팅",
  "스킨부스터",
  "지방분해",
  "레이저",
  "기타",
] as const;

const REFERRAL_OPTIONS = [
  { value: "", label: "선택해주세요" },
  { value: "검색", label: "검색" },
  { value: "지인추천", label: "지인추천" },
  { value: "SNS", label: "SNS" },
  { value: "기타", label: "기타" },
] as const;

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미 로그인된 유저는 홈으로 리다이렉트
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        router.replace("/");
      }
    });
  }, [router]);

  // 뒤로가기 시 "연결 중..." 상태 해제
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setSocialLoading(null);
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  async function handleSocialLogin(provider: OAuthProvider) {
    setSocialLoading(provider);
    setError("");

    // 네이버는 커스텀 OAuth (Supabase 미지원)
    if (provider === "naver") {
      window.location.href = "/api/auth/naver";
      return;
    }

    const supabase = createClient();
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError(`${provider} 연결에 실패했습니다. 다시 시도해주세요.`);
      setSocialLoading(null);
    }
  }

  function handleInterestToggle(value: string) {
    setInterests((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value);
      }
      if (prev.length >= 3) return prev;
      return [...prev, value];
    });
  }

  function handleFileChange(file: File | null) {
    if (!file) return;
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
    ];
    if (!validTypes.includes(file.type)) {
      setError("이미지(JPG, PNG, GIF, WEBP) 또는 PDF 파일만 업로드 가능합니다.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("파일 크기는 10MB 이하만 가능합니다.");
      return;
    }
    setError("");
    setLicenseFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileChange(file);
  }

  function validatePhone(phone: string): boolean {
    return /^01[016789]-?\d{3,4}-?\d{4}$/.test(phone.replace(/\s/g, ""));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const name = form.get("name") as string;
    const birth_date = form.get("birth_date") as string;
    const phone = form.get("phone") as string;
    const address = form.get("address") as string;
    const clinic_name = form.get("clinic_name") as string;
    const clinic_address = form.get("clinic_address") as string;
    const university = form.get("university") as string;
    const major = form.get("major") as string;
    const referral_source = form.get("referral_source") as string;
    const is_clinic_owner = form.get("is_clinic_owner") as string;

    // Validation
    if (!validatePhone(phone)) {
      setError("올바른 연락처 형식을 입력해주세요. (예: 010-1234-5678)");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("비밀번호는 8자 이상이어야 합니다.");
      setLoading(false);
      return;
    }

    if (!licenseFile) {
      setError("면허파일을 첨부해주세요.");
      setLoading(false);
      return;
    }

    const supabase = createClient();

    // 1. Upload license file
    const ext = licenseFile.name.split(".").pop() || "file";
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const filePath = `licenses/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("posts")
      .upload(filePath, licenseFile, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      setError("면허파일 업로드에 실패했습니다: " + uploadError.message);
      setLoading(false);
      return;
    }

    // 2. Sign up with metadata
    const metadata = {
      name,
      birth_date,
      phone,
      address,
      clinic_name,
      clinic_address,
      university,
      major,
      license_file_path: filePath,
      referral_source: referral_source || null,
      is_clinic_owner: is_clinic_owner || null,
      interests: interests.length > 0 ? interests : null,
    };

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // 3. Update profiles table with available columns
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      await supabase
        .from("profiles")
        .update({
          name,
          clinic_name,
        })
        .eq("id", user.id);
    }

    router.push("/signup/complete");
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <Card className="w-full max-w-lg border-border/50">
        <CardContent className="p-6 sm:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary">회원가입</h1>
            <p className="mt-1 text-sm text-text-muted">
              치과 의료인 전용 서비스입니다
            </p>
          </div>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* 소셜 로그인으로 간편 가입 */}
          <div className="mt-8 grid gap-3">
            <button
              onClick={() => handleSocialLogin("kakao")}
              disabled={!!socialLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] text-sm font-semibold text-[#191919] transition-colors hover:bg-[#FDD835] disabled:opacity-50 min-h-[48px]"
            >
              {socialLoading === "kakao" ? (
                <span>연결 중...</span>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1C4.58 1 1 3.79 1 7.21c0 2.17 1.44 4.08 3.62 5.18l-.93 3.44c-.08.3.26.54.52.37l4.1-2.72c.22.02.45.03.69.03 4.42 0 8-2.79 8-6.3C17 3.79 13.42 1 9 1z"
                      fill="#191919"
                    />
                  </svg>
                  카카오로 시작하기
                </>
              )}
            </button>

            <button
              onClick={() => handleSocialLogin("naver")}
              disabled={!!socialLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] text-sm font-semibold text-white transition-colors hover:bg-[#02b351] disabled:opacity-50 min-h-[48px]"
            >
              {socialLoading === "naver" ? (
                <span>연결 중...</span>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M12.17 9.57L5.59 0H0v18h5.83V8.43L12.41 18H18V0h-5.83v9.57z"
                      fill="white"
                    />
                  </svg>
                  네이버로 시작하기
                </>
              )}
            </button>

            <button
              onClick={() => handleSocialLogin("google")}
              disabled={!!socialLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white text-sm font-semibold text-text-primary transition-colors hover:bg-gray-50 disabled:opacity-50 min-h-[48px]"
            >
              {socialLoading === "google" ? (
                <span>연결 중...</span>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path
                      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                      fill="#4285F4"
                    />
                    <path
                      d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                      fill="#34A853"
                    />
                    <path
                      d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google로 시작하기
                </>
              )}
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-text-muted">이메일로 가입</span>
            <Separator className="flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ── 기본 정보 ── */}
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold text-text-primary">
                기본 정보
              </legend>

              <div className="space-y-2">
                <Label htmlFor="name">이름 *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="홍길동"
                  className="min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth_date">생년월일 *</Label>
                <Input
                  id="birth_date"
                  name="birth_date"
                  type="date"
                  required
                  className="min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">연락처 *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  className="min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일 *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@clinic.com"
                  className="min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">비밀번호 *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  placeholder="8자 이상"
                  className="min-h-[44px]"
                />
              </div>
            </fieldset>

            <Separator />

            {/* ── 소속 정보 ── */}
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold text-text-primary">
                소속 정보
              </legend>

              <div className="space-y-2">
                <Label htmlFor="clinic_name">병원명 *</Label>
                <Input
                  id="clinic_name"
                  name="clinic_name"
                  required
                  placeholder="OO치과의원"
                  className="min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clinic_address">병원주소 *</Label>
                <Input
                  id="clinic_address"
                  name="clinic_address"
                  required
                  placeholder="서울시 강남구 ..."
                  className="min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">주소 (자택) *</Label>
                <Input
                  id="address"
                  name="address"
                  required
                  placeholder="서울시 서초구 ..."
                  className="min-h-[44px]"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="university">대학 *</Label>
                  <Input
                    id="university"
                    name="university"
                    required
                    placeholder="OO대학교"
                    className="min-h-[44px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="major">전공 *</Label>
                  <Input
                    id="major"
                    name="major"
                    required
                    placeholder="치의학과"
                    className="min-h-[44px]"
                  />
                </div>
              </div>
            </fieldset>

            <Separator />

            {/* ── 면허 인증 ── */}
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold text-text-primary">
                면허 인증
              </legend>

              <div className="space-y-2">
                <Label>면허파일 첨부 *</Label>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`flex min-h-[100px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors ${
                    dragActive
                      ? "border-brand-lime-safe bg-brand-lime-safe/5"
                      : "border-border hover:border-brand-lime-safe/50"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      handleFileChange(file);
                    }}
                  />
                  {licenseFile ? (
                    <div className="text-center">
                      <p className="text-sm font-medium text-text-primary">
                        {licenseFile.name}
                      </p>
                      <p className="mt-1 text-xs text-text-muted">
                        {(licenseFile.size / 1024 / 1024).toFixed(1)}MB
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLicenseFile(null);
                          if (fileInputRef.current)
                            fileInputRef.current.value = "";
                        }}
                        className="mt-2 text-xs text-red-500 hover:underline"
                      >
                        삭제
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <svg
                        className="mx-auto mb-2 h-8 w-8 text-text-muted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16v-8m0 0l-3 3m3-3l3 3M3 16.5V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-1.5M6.75 12l.008-.008"
                        />
                      </svg>
                      <p className="text-sm text-text-muted">
                        클릭하거나 파일을 드래그하세요
                      </p>
                      <p className="mt-1 text-xs text-text-muted">
                        이미지 또는 PDF (최대 10MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </fieldset>

            <Separator />

            {/* ── 추가 정보 (선택) ── */}
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold text-text-primary">
                추가 정보{" "}
                <span className="font-normal text-text-muted">(선택)</span>
              </legend>

              <div className="space-y-2">
                <Label htmlFor="referral_source">가입경로</Label>
                <select
                  id="referral_source"
                  name="referral_source"
                  className="flex min-h-[44px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-lime-safe focus:ring-offset-1"
                >
                  {REFERRAL_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label>개원여부</Label>
                <div className="flex flex-wrap gap-4">
                  {["개원의", "근무의", "기타"].map((option) => (
                    <label
                      key={option}
                      className="flex min-h-[44px] cursor-pointer items-center gap-2 text-sm text-text-primary"
                    >
                      <input
                        type="radio"
                        name="is_clinic_owner"
                        value={option}
                        className="h-4 w-4 accent-brand-lime-safe"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>
                  관심분야{" "}
                  <span className="font-normal text-text-muted">
                    (최대 3개)
                  </span>
                </Label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((option) => {
                    const selected = interests.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleInterestToggle(option)}
                        className={`rounded-full border px-3 py-1.5 text-sm transition-colors min-h-[36px] ${
                          selected
                            ? "border-brand-lime-safe bg-brand-lime-safe/10 font-medium text-text-primary"
                            : "border-border text-text-muted hover:border-brand-lime-safe/50"
                        } ${
                          !selected && interests.length >= 3
                            ? "cursor-not-allowed opacity-40"
                            : "cursor-pointer"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </fieldset>

            <Button
              type="submit"
              disabled={loading}
              className="w-full min-h-[48px] bg-brand-lime-btn text-base font-semibold text-white hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime-safe"
            >
              {loading ? "가입 중..." : "가입하기"}
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-text-muted">
            면허파일 확인 후 승인이 완료됩니다.
            <br />
            승인 완료 전까지 일부 기능이 제한됩니다.
          </p>

          <p className="mt-4 text-center text-sm text-text-muted">
            이미 계정이 있으신가요?{" "}
            <Link
              href="/login"
              className="inline-flex min-h-[44px] items-center font-medium text-brand-lime-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime-safe"
            >
              로그인
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
