"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PlayIcon,
  TrashIcon,
  UploadIcon,
  ImageIcon,
  VideoIcon,
  SettingsIcon,
  ExternalLinkIcon,
  QrCodeIcon,
  GripVerticalIcon,
} from "lucide-react";

interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: string;
  waiting_room_code: string;
}

interface SubscriptionPlan {
  name: string;
  slug: string;
  price: number;
  storage_limit_mb: number;
  max_media_count: number;
}

interface MediaItem {
  id: string;
  user_id: string;
  file_url: string;
  file_name: string;
  file_type: string;
  file_size_bytes: number;
  display_duration: number;
  video_loop_mode: string;
  sort_order: number;
  is_active: boolean;
}

const VIDEO_LOOP_OPTIONS = [
  { value: "once", label: "1회 재생" },
  { value: "loop", label: "무한 반복" },
  { value: "2", label: "2회 반복" },
  { value: "3", label: "3회 반복" },
  { value: "4", label: "4회 반복" },
  { value: "5", label: "5회 반복" },
];

const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MypageWaitingRoomPage() {
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // 데이터 로드
  const loadData = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    setUserId(user.id);

    // 구독 정보
    const { data: sub } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();

    setSubscription(sub);

    if (sub) {
      // 플랜 정보
      const { data: planData } = await supabase
        .from("subscription_plans")
        .select("name, slug, price, storage_limit_mb, max_media_count")
        .eq("id", sub.plan_id)
        .single();
      setPlan(planData);

      // 미디어 목록
      const { data: media } = await supabase
        .from("waiting_room_media")
        .select("*")
        .eq("user_id", user.id)
        .order("sort_order", { ascending: true });
      setMediaItems(media || []);
    }

    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // 스토리지 사용량 계산
  const usedBytes = mediaItems.reduce((sum, m) => sum + m.file_size_bytes, 0);
  const usedMB = usedBytes / (1024 * 1024);
  const limitMB = plan?.storage_limit_mb || 0;
  const usagePercent = limitMB > 0 ? Math.min((usedMB / limitMB) * 100, 100) : 0;

  // 파일 업로드
  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !userId) return;

    setError("");

    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");

    if (!isVideo && !isImage) {
      setError("이미지 또는 영상 파일만 업로드할 수 있습니다.");
      return;
    }

    if (isImage && file.size > MAX_IMAGE_SIZE) {
      setError("이미지 파일은 10MB 이하만 가능합니다.");
      return;
    }

    if (isVideo && file.size > MAX_VIDEO_SIZE) {
      setError("영상 파일은 100MB 이하만 가능합니다.");
      return;
    }

    // 용량 체크
    const newUsedMB = (usedBytes + file.size) / (1024 * 1024);
    if (limitMB > 0 && newUsedMB > limitMB) {
      setError(`저장 용량을 초과합니다. (${limitMB}MB 제한)`);
      return;
    }

    // 개수 체크
    if (plan && mediaItems.length >= plan.max_media_count) {
      setError(`미디어 최대 개수(${plan.max_media_count}개)를 초과했습니다.`);
      return;
    }

    setUploading(true);

    try {
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const filePath = `${userId}/${timestamp}_${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from("waiting-room")
        .upload(filePath, file);

      if (uploadError) {
        setError("파일 업로드에 실패했습니다: " + uploadError.message);
        setUploading(false);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("waiting-room").getPublicUrl(filePath);

      const nextOrder =
        mediaItems.length > 0
          ? Math.max(...mediaItems.map((m) => m.sort_order)) + 1
          : 0;

      const { error: insertError } = await supabase
        .from("waiting_room_media")
        .insert({
          user_id: userId,
          file_url: publicUrl,
          file_name: file.name,
          file_type: isVideo ? "video" : "image",
          file_size_bytes: file.size,
          display_duration: isImage ? 5 : 0,
          video_loop_mode: isVideo ? "once" : "",
          sort_order: nextOrder,
          is_active: true,
        });

      if (insertError) {
        setError("미디어 정보 저장에 실패했습니다.");
      } else {
        await loadData();
      }
    } catch {
      setError("업로드 중 오류가 발생했습니다.");
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // 미디어 삭제
  async function handleDelete(item: MediaItem) {
    if (!confirm(`"${item.file_name}"을(를) 삭제하시겠습니까?`)) return;

    // storage에서 파일 경로 추출
    const url = new URL(item.file_url);
    const pathParts = url.pathname.split("/waiting-room/");
    const storagePath = pathParts[1] ? decodeURIComponent(pathParts[1]) : null;

    if (storagePath) {
      await supabase.storage.from("waiting-room").remove([storagePath]);
    }

    await supabase.from("waiting_room_media").delete().eq("id", item.id);
    await loadData();
  }

  // 설정 업데이트
  async function handleUpdateMedia(
    id: string,
    updates: Partial<Pick<MediaItem, "display_duration" | "video_loop_mode" | "is_active">>
  ) {
    await supabase.from("waiting_room_media").update(updates).eq("id", id);
    setMediaItems((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updates } : m))
    );
  }

  // 로딩
  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  // 구독 없음
  if (!subscription || !plan) {
    return (
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-text-primary">
          내 치과 대기실
        </h2>

        <Card>
          <CardContent className="flex min-h-[240px] flex-col items-center justify-center gap-4 py-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-lime-safe/10">
              <PlayIcon className="size-7 text-brand-lime-text" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-text-secondary">
                구독 중인 대기실 플랜이 없습니다
              </p>
              <p className="mt-1 text-xs text-text-muted">
                대기실 서비스를 구독하면 치과에서 바로 사용할 수 있는 미디어 플레이어를 제공합니다.
              </p>
            </div>
            <Link href="/contact">
              <Button className="mt-2 min-h-[44px] bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90">
                구독 문의하기
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-2">
            <h3 className="text-base font-semibold text-text-primary">
              대기실 영상 서비스란?
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-lime-safe/10 text-xs font-bold text-brand-lime-text">
                  1
                </span>
                <p>
                  치과 대기실에서 환자에게 보여줄 이미지/영상 콘텐츠를 직접
                  관리합니다.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-lime-safe/10 text-xs font-bold text-brand-lime-text">
                  2
                </span>
                <p>
                  전용 URL로 TV/모니터에서 바로 재생 -- 별도 앱 설치 불필요.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-lime-safe/10 text-xs font-bold text-brand-lime-text">
                  3
                </span>
                <p>
                  시술 안내, 이벤트, 공지사항 등 원하는 콘텐츠를 자유롭게
                  등록하세요.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/contact">
                <Button className="min-h-[44px] w-full bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90 sm:w-auto">
                  상담 신청하기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 구독 있음 -- 메인 UI
  const waitingRoomUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/wr/${subscription.waiting_room_code}`;

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-lg font-semibold text-text-primary">
          내 치과 대기실
        </h2>
        <Badge variant="secondary" className="bg-brand-lime-safe/10 text-brand-lime-text">
          {plan.name} 구독중
        </Badge>
      </div>

      {/* 대기실 URL + 시작 버튼 */}
      <Card>
        <CardContent className="space-y-4 pt-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1">
              <Label className="mb-1.5 block text-xs text-text-muted">
                대기실 주소
              </Label>
              <div className="flex items-center gap-2 rounded-lg bg-surface-secondary px-3 py-2.5">
                <span className="truncate text-sm text-text-secondary">
                  {waitingRoomUrl}
                </span>
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(waitingRoomUrl)}
                  className="shrink-0 text-xs text-brand-lime-text hover:underline"
                >
                  복사
                </button>
              </div>
            </div>
            <div className="flex shrink-0 gap-2">
              <Button
                onClick={() =>
                  window.open(
                    `/wr/${subscription.waiting_room_code}`,
                    "_blank",
                    "fullscreen=yes"
                  )
                }
                className="min-h-[44px] gap-2 bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90"
              >
                <PlayIcon className="size-4" />
                대기실 시작
              </Button>
            </div>
          </div>

          {/* QR 코드 영역 */}
          <div className="flex items-center gap-3 rounded-lg border border-dashed border-border p-3">
            <QrCodeIcon className="size-8 shrink-0 text-text-muted" />
            <div>
              <p className="text-sm font-medium text-text-secondary">
                QR 코드
              </p>
              <p className="text-xs text-text-muted">
                위 주소로 연결되는 QR 코드 -- 추후 제공 예정
              </p>
            </div>
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
              className="h-full rounded-full bg-brand-lime-btn transition-all"
              style={{ width: `${usagePercent}%` }}
            />
          </div>
          <div className="mt-1.5 flex items-center justify-between text-xs text-text-muted">
            <span>미디어 {mediaItems.length}개{plan.max_media_count > 0 ? ` / ${plan.max_media_count}개` : ""}</span>
            <span>{usagePercent.toFixed(0)}% 사용</span>
          </div>
        </CardContent>
      </Card>

      {/* 업로드 버튼 + 에러 */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-text-secondary">
          미디어 목록
        </p>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          <Button
            variant="outline"
            className="min-h-[44px] gap-2"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            <UploadIcon className="size-4" />
            {uploading ? "업로드 중..." : "파일 업로드"}
          </Button>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {/* 미디어 그리드 */}
      {mediaItems.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-[160px] flex-col items-center justify-center gap-3 py-10">
            <ImageIcon className="size-10 text-text-muted" />
            <p className="text-sm text-text-muted">
              등록된 미디어가 없습니다. 파일을 업로드해 주세요.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {mediaItems.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onUpdate={handleUpdateMedia}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------
// 미디어 카드 컴포넌트
// ---------------------
function MediaCard({
  item,
  onDelete,
  onUpdate,
}: {
  item: MediaItem;
  onDelete: (item: MediaItem) => void;
  onUpdate: (
    id: string,
    updates: Partial<Pick<MediaItem, "display_duration" | "video_loop_mode" | "is_active">>
  ) => void;
}) {
  const [showSettings, setShowSettings] = useState(false);
  const isVideo = item.file_type === "video";

  return (
    <Card className={!item.is_active ? "opacity-50" : ""}>
      <CardContent className="space-y-3 pt-2">
        {/* 상단: 썸네일 + 정보 */}
        <div className="flex gap-3">
          {/* 드래그 핸들 */}
          <div className="flex shrink-0 cursor-grab items-center text-text-muted">
            <GripVerticalIcon className="size-4" />
          </div>

          {/* 썸네일 */}
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-secondary">
            {isVideo ? (
              <VideoIcon className="size-6 text-text-muted" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.file_url}
                alt={item.file_name}
                className="size-full object-cover"
              />
            )}
          </div>

          {/* 파일 정보 */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-text-primary">
              {item.file_name}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              <Badge variant="secondary" className="text-[10px]">
                {isVideo ? (
                  <><VideoIcon className="mr-0.5 size-2.5" /> 영상</>
                ) : (
                  <><ImageIcon className="mr-0.5 size-2.5" /> 이미지</>
                )}
              </Badge>
              <span className="text-xs text-text-muted">
                {formatFileSize(item.file_size_bytes)}
              </span>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="flex shrink-0 items-start gap-1">
            <button
              type="button"
              onClick={() => setShowSettings(!showSettings)}
              className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-surface-secondary hover:text-text-primary"
              title="설정"
            >
              <SettingsIcon className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => onDelete(item)}
              className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-red-50 hover:text-red-500"
              title="삭제"
            >
              <TrashIcon className="size-4" />
            </button>
          </div>
        </div>

        {/* 설정 패널 */}
        {showSettings && (
          <div className="space-y-3 rounded-lg bg-surface-secondary p-3">
            {/* 활성/비활성 토글 */}
            <div className="flex items-center justify-between">
              <Label className="text-xs">활성 상태</Label>
              <button
                type="button"
                onClick={() =>
                  onUpdate(item.id, { is_active: !item.is_active })
                }
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  item.is_active ? "bg-brand-lime-btn" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform ${
                    item.is_active ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* 이미지: 표시 시간 */}
            {!isVideo && (
              <div className="space-y-1.5">
                <Label className="text-xs">표시 시간 (초)</Label>
                <Input
                  type="number"
                  min={3}
                  max={30}
                  value={item.display_duration}
                  onChange={(e) => {
                    const val = Math.min(
                      30,
                      Math.max(3, parseInt(e.target.value) || 3)
                    );
                    onUpdate(item.id, { display_duration: val });
                  }}
                  className="h-9 text-sm"
                />
                <p className="text-[10px] text-text-muted">3초 ~ 30초</p>
              </div>
            )}

            {/* 영상: 반복 모드 */}
            {isVideo && (
              <div className="space-y-1.5">
                <Label className="text-xs">재생 반복</Label>
                <select
                  value={item.video_loop_mode}
                  onChange={(e) =>
                    onUpdate(item.id, { video_loop_mode: e.target.value })
                  }
                  className="h-9 w-full rounded-lg border bg-transparent px-3 text-sm"
                >
                  {VIDEO_LOOP_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
