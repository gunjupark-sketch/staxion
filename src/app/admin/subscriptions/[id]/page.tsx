"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CrownIcon,
  ExternalLinkIcon,
  TrashIcon,
  UploadIcon,
  ImageIcon,
  VideoIcon,
  YoutubeIcon,
  LinkIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface Subscription {
  id: string;
  user_id: string;
  status: string;
  waiting_room_code: string;
  current_period_start: string;
  current_period_end: string | null;
  cancelled_at: string | null;
  created_at: string;
  profiles: {
    full_name: string | null;
    email: string | null;
    clinic_name: string | null;
    phone: string | null;
  } | null;
  subscription_plans: {
    name: string;
    slug: string;
    price: number;
    storage_limit_mb: number;
    max_media_count: number;
  } | null;
}

interface MediaItem {
  id: string;
  file_url: string;
  file_name: string;
  file_type: string;
  file_size_bytes: number;
  display_duration: number;
  video_loop_mode: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  active: { label: "활성", color: "bg-green-50 text-green-600" },
  cancelled: { label: "해지", color: "bg-gray-100 text-gray-500" },
  expired: { label: "만료", color: "bg-red-50 text-red-500" },
  past_due: { label: "연체", color: "bg-amber-50 text-amber-600" },
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const p of patterns) {
    const match = url.trim().match(p);
    if (match) return match[1];
  }
  return null;
}

export default function AdminSubscriptionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [sub, setSub] = useState<Subscription | null>(null);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [showYoutubeInput, setShowYoutubeInput] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);

    const { data: subData } = await supabase
      .from("subscriptions")
      .select(`
        id, user_id, status, waiting_room_code,
        current_period_start, current_period_end, cancelled_at, created_at,
        profiles(full_name, email, clinic_name, phone),
        subscription_plans(name, slug, price, storage_limit_mb, max_media_count)
      `)
      .eq("id", id)
      .single();

    if (!subData) {
      setLoading(false);
      return;
    }

    setSub(subData as unknown as Subscription);

    const { data: mediaData } = await supabase
      .from("waiting_room_media")
      .select("*")
      .eq("user_id", (subData as unknown as Subscription).user_id)
      .order("sort_order", { ascending: true });

    setMedia(mediaData || []);
    setLoading(false);
  }, [id, supabase]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleStatusChange = async (newStatus: string) => {
    if (!sub) return;
    const { error: err } = await supabase
      .from("subscriptions")
      .update({
        status: newStatus,
        ...(newStatus === "cancelled"
          ? { cancelled_at: new Date().toISOString() }
          : {}),
      })
      .eq("id", sub.id);
    if (err) alert("상태 변경 실패: " + err.message);
    else loadData();
  };

  const handleDeleteMedia = async (item: MediaItem) => {
    if (!confirm(`"${item.file_name}" 삭제?`)) return;

    if (item.file_type !== "youtube") {
      const url = new URL(item.file_url);
      const pathParts = url.pathname.split("/waiting-room/");
      const storagePath = pathParts[1]
        ? decodeURIComponent(pathParts[1])
        : null;
      if (storagePath) {
        await supabase.storage.from("waiting-room").remove([storagePath]);
      }
    }

    await supabase.from("waiting_room_media").delete().eq("id", item.id);
    await loadData();
  };

  // 파일 업로드 (관리자가 해당 회원 대신 업로드)
  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !sub) return;
    setError("");

    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");
    if (!isVideo && !isImage) {
      setError("이미지 또는 영상 파일만 업로드할 수 있습니다.");
      return;
    }

    setUploading(true);
    try {
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const filePath = `${sub.user_id}/${timestamp}_${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from("waiting-room")
        .upload(filePath, file);

      if (uploadError) {
        setError("업로드 실패: " + uploadError.message);
        setUploading(false);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("waiting-room").getPublicUrl(filePath);

      const nextOrder =
        media.length > 0
          ? Math.max(...media.map((m) => m.sort_order)) + 1
          : 0;

      await supabase.from("waiting_room_media").insert({
        user_id: sub.user_id,
        file_url: publicUrl,
        file_name: file.name,
        file_type: isVideo ? "video" : "image",
        file_size_bytes: file.size,
        display_duration: isImage ? 5 : 0,
        video_loop_mode: isVideo ? "once" : "",
        sort_order: nextOrder,
        is_active: true,
      });

      await loadData();
    } catch {
      setError("업로드 중 오류");
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // 유튜브 링크 등록
  async function handleYoutubeSubmit() {
    if (!sub || !youtubeUrl.trim()) return;
    setError("");

    const videoId = extractYoutubeId(youtubeUrl);
    if (!videoId) {
      setError("올바른 유튜브 링크를 입력해 주세요.");
      return;
    }

    setUploading(true);
    const nextOrder =
      media.length > 0
        ? Math.max(...media.map((m) => m.sort_order)) + 1
        : 0;

    const { error: insertError } = await supabase
      .from("waiting_room_media")
      .insert({
        user_id: sub.user_id,
        file_url: youtubeUrl.trim(),
        file_name: `YouTube: ${videoId}`,
        file_type: "youtube",
        file_size_bytes: 0,
        display_duration: 0,
        video_loop_mode: "once",
        sort_order: nextOrder,
        is_active: true,
      });

    if (insertError) {
      setError("유튜브 링크 저장 실패");
    } else {
      setYoutubeUrl("");
      setShowYoutubeInput(false);
      await loadData();
    }
    setUploading(false);
  }

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  if (!sub) {
    return (
      <div className="space-y-4">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeftIcon className="mr-1 size-4" /> 뒤로
        </Button>
        <p className="text-sm text-text-muted">구독 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const st = STATUS_MAP[sub.status] || {
    label: sub.status,
    color: "bg-gray-100 text-gray-500",
  };
  const plan = sub.subscription_plans;
  const usedBytes = media.reduce((sum, m) => sum + m.file_size_bytes, 0);
  const usedMB = usedBytes / (1024 * 1024);
  const limitMB = plan?.storage_limit_mb || 0;
  const usagePercent =
    limitMB > 0 ? Math.min((usedMB / limitMB) * 100, 100) : 0;

  return (
    <div className="space-y-6">
      {/* 뒤로 가기 */}
      <Link
        href="/admin/subscriptions"
        className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary"
      >
        <ArrowLeftIcon className="size-4" /> 구독 관리
      </Link>

      {/* 회원 정보 카드 */}
      <Card>
        <CardContent className="space-y-4 pt-2">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark">
              <CrownIcon className="size-5 text-brand-neon" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold text-text-primary">
                  {sub.profiles?.clinic_name ||
                    sub.profiles?.full_name ||
                    "이름 없음"}
                </h2>
                <Badge variant="secondary" className={st.color}>
                  {st.label}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {plan?.name || "알 수 없음"}
                </Badge>
              </div>
              <div className="mt-1 space-y-0.5 text-xs text-text-muted">
                <p>{sub.profiles?.email}</p>
                {sub.profiles?.phone && <p>{sub.profiles.phone}</p>}
                <p>
                  대기실 코드:{" "}
                  <span className="font-mono">{sub.waiting_room_code}</span>
                </p>
                <p>
                  구독 시작:{" "}
                  {new Date(sub.current_period_start).toLocaleDateString(
                    "ko-KR"
                  )}
                  {sub.current_period_end &&
                    ` · 만료: ${new Date(
                      sub.current_period_end
                    ).toLocaleDateString("ko-KR")}`}
                </p>
                {sub.cancelled_at && (
                  <p>
                    해지일:{" "}
                    {new Date(sub.cancelled_at).toLocaleDateString("ko-KR")}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={`/wr/${sub.waiting_room_code}`}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-brand-neon-text hover:underline"
            >
              <ExternalLinkIcon className="size-3" /> 대기실 재생
            </Link>
            {sub.status === "active" ? (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleStatusChange("cancelled")}
                className="text-xs text-red-600 border-red-200 hover:bg-red-50"
              >
                해지
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleStatusChange("active")}
                className="text-xs"
              >
                활성화
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 저장 용량 */}
      <Card>
        <CardContent className="pt-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">저장 용량</span>
            <span className="font-medium text-text-primary">
              {usedMB.toFixed(1)} MB / {limitMB} MB
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-secondary">
            <div
              className="h-full rounded-full bg-brand-neon-btn transition-all"
              style={{ width: `${usagePercent}%` }}
            />
          </div>
          <div className="mt-1.5 flex items-center justify-between text-xs text-text-muted">
            <span>
              미디어 {media.length}개
              {plan && plan.max_media_count > 0
                ? ` / ${plan.max_media_count}개`
                : ""}
            </span>
            <span>{usagePercent.toFixed(0)}% 사용</span>
          </div>
        </CardContent>
      </Card>

      {/* 미디어 관리 */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-sm font-semibold text-text-primary">
          미디어 목록
        </h3>
        <div className="flex gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            <UploadIcon className="size-3.5" />
            {uploading ? "업로드 중..." : "파일 업로드"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => setShowYoutubeInput(!showYoutubeInput)}
            disabled={uploading}
          >
            <LinkIcon className="size-3.5" />
            유튜브 링크
          </Button>
        </div>
      </div>

      {showYoutubeInput && (
        <Card>
          <CardContent className="space-y-3 pt-2">
            <Label className="text-xs text-text-muted">유튜브 영상 링크</Label>
            <div className="flex gap-2">
              <Input
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="flex-1"
              />
              <Button
                size="sm"
                onClick={handleYoutubeSubmit}
                disabled={uploading || !youtubeUrl.trim()}
                className="bg-brand-neon-btn text-white hover:bg-brand-neon-btn/90"
              >
                등록
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {media.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-[120px] items-center justify-center py-8">
            <p className="text-sm text-text-muted">
              등록된 미디어가 없습니다.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {media.map((item) => {
            const isYoutube = item.file_type === "youtube";
            const ytId = isYoutube ? extractYoutubeId(item.file_url) : null;

            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 rounded-lg border p-3 ${
                  !item.is_active ? "opacity-50" : ""
                }`}
              >
                {/* 썸네일 */}
                <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-secondary">
                  {isYoutube && ytId ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`}
                      alt={item.file_name}
                      className="size-full object-cover"
                    />
                  ) : item.file_type === "video" ? (
                    <VideoIcon className="size-5 text-text-muted" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.file_url}
                      alt={item.file_name}
                      className="size-full object-cover"
                    />
                  )}
                </div>

                {/* 정보 */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-text-primary">
                    {item.file_name}
                  </p>
                  <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                    <Badge variant="secondary" className="text-[10px]">
                      {isYoutube ? (
                        <>
                          <YoutubeIcon className="mr-0.5 size-2.5" /> 유튜브
                        </>
                      ) : item.file_type === "video" ? (
                        <>
                          <VideoIcon className="mr-0.5 size-2.5" /> 영상
                        </>
                      ) : (
                        <>
                          <ImageIcon className="mr-0.5 size-2.5" /> 이미지
                        </>
                      )}
                    </Badge>
                    {!isYoutube && (
                      <span className="text-[10px] text-text-muted">
                        {formatFileSize(item.file_size_bytes)}
                      </span>
                    )}
                    {!item.is_active && (
                      <Badge
                        variant="secondary"
                        className="bg-red-50 text-[10px] text-red-500"
                      >
                        비활성
                      </Badge>
                    )}
                  </div>
                </div>

                {/* 삭제 */}
                <button
                  type="button"
                  onClick={() => handleDeleteMedia(item)}
                  className="shrink-0 rounded-lg p-1.5 text-text-muted transition-colors hover:bg-red-50 hover:text-red-500"
                  title="삭제"
                >
                  <TrashIcon className="size-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
