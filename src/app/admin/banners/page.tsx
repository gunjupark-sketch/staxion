"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  PlusIcon,
  PencilIcon,
  Trash2Icon,
  ImageIcon,
  ExternalLinkIcon,
  GripVerticalIcon,
} from "lucide-react";
import Image from "next/image";

const PAGE_OPTIONS = [
  { value: "home", label: "홈" },
  { value: "services", label: "서비스" },
  { value: "store", label: "스토어" },
  { value: "education", label: "교육" },
  { value: "community", label: "커뮤니티" },
  { value: "guidebook", label: "가이드북" },
] as const;

interface Banner {
  id: string;
  page_slug: string;
  title: string | null;
  image_url: string;
  mobile_image_url: string | null;
  link_url: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

interface BannerForm {
  page_slug: string;
  title: string;
  link_url: string;
  sort_order: number;
  is_active: boolean;
}

export default function AdminBannersPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState("home");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [form, setForm] = useState<BannerForm>({
    page_slug: "home",
    title: "",
    link_url: "",
    sort_order: 0,
    is_active: true,
  });
  const [desktopFile, setDesktopFile] = useState<File | null>(null);
  const [mobileFile, setMobileFile] = useState<File | null>(null);
  const [desktopPreview, setDesktopPreview] = useState<string | null>(null);
  const [mobilePreview, setMobilePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const supabase = createClient();

  const fetchBanners = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("banners")
      .select("*")
      .eq("page_slug", selectedPage)
      .order("sort_order", { ascending: true });
    setBanners(data || []);
    setLoading(false);
  }, [selectedPage]);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  const openCreateDialog = () => {
    setEditingBanner(null);
    setForm({
      page_slug: selectedPage,
      title: "",
      link_url: "",
      sort_order: banners.length,
      is_active: true,
    });
    setDesktopFile(null);
    setMobileFile(null);
    setDesktopPreview(null);
    setMobilePreview(null);
    setDialogOpen(true);
  };

  const openEditDialog = (banner: Banner) => {
    setEditingBanner(banner);
    setForm({
      page_slug: banner.page_slug,
      title: banner.title || "",
      link_url: banner.link_url || "",
      sort_order: banner.sort_order,
      is_active: banner.is_active,
    });
    setDesktopFile(null);
    setMobileFile(null);
    setDesktopPreview(banner.image_url);
    setMobilePreview(banner.mobile_image_url || null);
    setDialogOpen(true);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "desktop" | "mobile"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    if (type === "desktop") {
      setDesktopFile(file);
      setDesktopPreview(url);
    } else {
      setMobileFile(file);
      setMobilePreview(url);
    }
  };

  const uploadImage = async (file: File, path: string): Promise<string> => {
    const { error } = await supabase.storage
      .from("banners")
      .upload(path, file, { upsert: true });

    if (error) throw error;

    const {
      data: { publicUrl },
    } = supabase.storage.from("banners").getPublicUrl(path);

    return publicUrl;
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      let imageUrl = editingBanner?.image_url || "";
      let mobileImageUrl = editingBanner?.mobile_image_url || null;

      // Upload desktop image
      if (desktopFile) {
        const ext = desktopFile.name.split(".").pop();
        const path = `${form.page_slug}/${Date.now()}_desktop.${ext}`;
        imageUrl = await uploadImage(desktopFile, path);
      }

      // Upload mobile image
      if (mobileFile) {
        const ext = mobileFile.name.split(".").pop();
        const path = `${form.page_slug}/${Date.now()}_mobile.${ext}`;
        mobileImageUrl = await uploadImage(mobileFile, path);
      }

      if (!imageUrl) {
        alert("데스크탑 배너 이미지를 등록해주세요.");
        setSaving(false);
        return;
      }

      const payload = {
        page_slug: form.page_slug,
        title: form.title || null,
        image_url: imageUrl,
        mobile_image_url: mobileImageUrl,
        link_url: form.link_url || null,
        sort_order: form.sort_order,
        is_active: form.is_active,
      };

      if (editingBanner) {
        await supabase
          .from("banners")
          .update(payload)
          .eq("id", editingBanner.id);
      } else {
        await supabase.from("banners").insert(payload);
      }

      setDialogOpen(false);
      fetchBanners();
    } catch (err) {
      console.error("배너 저장 오류:", err);
      alert("저장 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from("banners").delete().eq("id", id);
    setDeleteConfirm(null);
    fetchBanners();
  };

  const toggleActive = async (banner: Banner) => {
    await supabase
      .from("banners")
      .update({ is_active: !banner.is_active })
      .eq("id", banner.id);
    fetchBanners();
  };

  const pageLabel = (slug: string) =>
    PAGE_OPTIONS.find((p) => p.value === slug)?.label || slug;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">배너 관리</h1>
          <p className="mt-1 text-sm text-text-muted">
            페이지별 배너를 관리합니다
          </p>
        </div>
        <Button onClick={openCreateDialog}>
          <PlusIcon className="size-4" data-icon="inline-start" />
          배너 등록
        </Button>
      </div>

      {/* Page Filter Tabs */}
      <div className="mt-6 flex gap-1 overflow-x-auto rounded-lg bg-surface-secondary p-1">
        {PAGE_OPTIONS.map((page) => (
          <button
            key={page.value}
            onClick={() => setSelectedPage(page.value)}
            className={`shrink-0 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              selectedPage === page.value
                ? "bg-white text-text-primary shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {page.label}
          </button>
        ))}
      </div>

      {/* Banner List */}
      <div className="mt-6 space-y-3">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
          </div>
        ) : banners.length === 0 ? (
          <div className="rounded-lg border border-dashed py-16 text-center">
            <ImageIcon className="mx-auto size-10 text-text-muted" />
            <p className="mt-3 text-sm text-text-muted">
              {pageLabel(selectedPage)} 페이지에 등록된 배너가 없습니다
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={openCreateDialog}
            >
              <PlusIcon className="size-4" data-icon="inline-start" />
              첫 배너 등록하기
            </Button>
          </div>
        ) : (
          banners.map((banner) => (
            <div
              key={banner.id}
              className={`flex items-center gap-4 rounded-lg border bg-white p-3 transition-colors ${
                !banner.is_active ? "opacity-50" : ""
              }`}
            >
              {/* Sort indicator */}
              <div className="flex shrink-0 flex-col items-center gap-0.5 text-text-muted">
                <GripVerticalIcon className="size-4" />
                <span className="text-xs font-medium">{banner.sort_order}</span>
              </div>

              {/* Image preview */}
              <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-md border bg-surface-secondary sm:h-20 sm:w-36">
                <Image
                  src={banner.image_url}
                  alt={banner.title || "배너"}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-text-primary">
                  {banner.title || "(제목 없음)"}
                </p>
                {banner.link_url && (
                  <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-text-muted">
                    <ExternalLinkIcon className="size-3 shrink-0" />
                    {banner.link_url}
                  </p>
                )}
                <div className="mt-1 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      banner.is_active
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {banner.is_active ? "활성" : "비활성"}
                  </span>
                  {banner.mobile_image_url && (
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
                      모바일 별도
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 items-center gap-1">
                <button
                  onClick={() => toggleActive(banner)}
                  className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                    banner.is_active
                      ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      : "bg-green-50 text-green-600 hover:bg-green-100"
                  }`}
                >
                  {banner.is_active ? "비활성" : "활성화"}
                </button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => openEditDialog(banner)}
                >
                  <PencilIcon className="size-4" />
                </Button>
                {deleteConfirm === banner.id ? (
                  <div className="flex items-center gap-1">
                    <Button
                      variant="destructive"
                      size="icon-sm"
                      onClick={() => handleDelete(banner.id)}
                    >
                      <Trash2Icon className="size-4" />
                    </Button>
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="text-xs text-text-muted hover:text-text-primary"
                    >
                      취소
                    </button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setDeleteConfirm(banner.id)}
                  >
                    <Trash2Icon className="size-4 text-red-400" />
                  </Button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editingBanner ? "배너 수정" : "배너 등록"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Page Select */}
            <div className="space-y-1.5">
              <Label>페이지</Label>
              <select
                value={form.page_slug}
                onChange={(e) =>
                  setForm({ ...form, page_slug: e.target.value })
                }
                className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {PAGE_OPTIONS.map((page) => (
                  <option key={page.value} value={page.value}>
                    {page.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div className="space-y-1.5">
              <Label>관리용 제목</Label>
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                placeholder="예: 2026년 3월 프로모션"
              />
            </div>

            {/* Desktop Image */}
            <div className="space-y-1.5">
              <Label>데스크탑 이미지 (권장 1920x480, 4:1)</Label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "desktop")}
                className="w-full text-sm text-text-muted file:mr-3 file:rounded-md file:border-0 file:bg-surface-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-text-primary hover:file:bg-gray-200"
              />
              {desktopPreview && (
                <div className="relative mt-2 h-24 w-full overflow-hidden rounded-md border bg-surface-secondary">
                  <Image
                    src={desktopPreview}
                    alt="데스크탑 미리보기"
                    fill
                    className="object-contain"
                    sizes="400px"
                  />
                </div>
              )}
            </div>

            {/* Mobile Image */}
            <div className="space-y-1.5">
              <Label>모바일 이미지 (권장 800x400, 2:1, 선택)</Label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "mobile")}
                className="w-full text-sm text-text-muted file:mr-3 file:rounded-md file:border-0 file:bg-surface-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-text-primary hover:file:bg-gray-200"
              />
              {mobilePreview && (
                <div className="relative mt-2 h-24 w-full overflow-hidden rounded-md border bg-surface-secondary">
                  <Image
                    src={mobilePreview}
                    alt="모바일 미리보기"
                    fill
                    className="object-contain"
                    sizes="400px"
                  />
                </div>
              )}
            </div>

            {/* Link URL */}
            <div className="space-y-1.5">
              <Label>클릭 시 이동 URL (선택)</Label>
              <Input
                value={form.link_url}
                onChange={(e) =>
                  setForm({ ...form, link_url: e.target.value })
                }
                placeholder="https://..."
              />
            </div>

            {/* Sort Order + Active */}
            <div className="flex items-end gap-4">
              <div className="w-24 space-y-1.5">
                <Label>정렬 순서</Label>
                <Input
                  type="number"
                  value={form.sort_order}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      sort_order: parseInt(e.target.value) || 0,
                    })
                  }
                  min={0}
                />
              </div>
              <label className="flex cursor-pointer items-center gap-2 pb-2.5">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) =>
                    setForm({ ...form, is_active: e.target.checked })
                  }
                  className="size-4 rounded border-gray-300 text-brand-lime-text accent-[#8EC31F]"
                />
                <span className="text-sm font-medium">활성</span>
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={saving}
            >
              취소
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "저장 중..." : editingBanner ? "수정" : "등록"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
