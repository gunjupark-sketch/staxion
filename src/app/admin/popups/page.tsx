"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
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
  DialogDescription,
} from "@/components/ui/dialog";
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
  PencilIcon,
  TrashIcon,
  ImageIcon,
  Loader2Icon,
} from "lucide-react";

interface Popup {
  id: string;
  title: string;
  image_url: string;
  link_url: string | null;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
}

const emptyForm = {
  title: "",
  link_url: "",
  start_date: "",
  end_date: "",
  is_active: true,
};

export default function PopupsPage() {
  const supabase = createClient();
  const [popups, setPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Delete dialog
  const [deleteTarget, setDeleteTarget] = useState<Popup | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchPopups = useCallback(async () => {
    const { data } = await supabase
      .from("popups")
      .select("*")
      .order("created_at", { ascending: false });
    setPopups(data || []);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchPopups();
  }, [fetchPopups]);

  // Format date for input[type=datetime-local]
  const toLocalDatetime = (iso: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    const offset = d.getTimezoneOffset();
    const local = new Date(d.getTime() - offset * 60000);
    return local.toISOString().slice(0, 16);
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview(null);
    setFormOpen(true);
  };

  const openEdit = (popup: Popup) => {
    setEditingId(popup.id);
    setForm({
      title: popup.title,
      link_url: popup.link_url || "",
      start_date: toLocalDatetime(popup.start_date),
      end_date: toLocalDatetime(popup.end_date),
      is_active: popup.is_active,
    });
    setImageFile(null);
    setImagePreview(popup.image_url);
    setFormOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async (file: File): Promise<string> => {
    const ext = file.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage
      .from("popups")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });
    if (error) throw error;
    const {
      data: { publicUrl },
    } = supabase.storage.from("popups").getPublicUrl(fileName);
    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let image_url = imagePreview || "";

      // Upload new image if selected
      if (imageFile) {
        image_url = await uploadImage(imageFile);
      }

      if (!image_url) {
        alert("이미지를 선택해주세요.");
        setSaving(false);
        return;
      }

      const payload = {
        title: form.title,
        image_url,
        link_url: form.link_url || null,
        start_date: new Date(form.start_date).toISOString(),
        end_date: new Date(form.end_date).toISOString(),
        is_active: form.is_active,
        updated_at: new Date().toISOString(),
      };

      if (editingId) {
        const { error } = await supabase
          .from("popups")
          .update(payload)
          .eq("id", editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("popups").insert(payload);
        if (error) throw error;
      }

      setFormOpen(false);
      fetchPopups();
    } catch (err) {
      console.error(err);
      alert("저장 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const { error } = await supabase
        .from("popups")
        .delete()
        .eq("id", deleteTarget.id);
      if (error) throw error;
      setDeleteTarget(null);
      fetchPopups();
    } catch (err) {
      console.error(err);
      alert("삭제 중 오류가 발생했습니다.");
    } finally {
      setDeleting(false);
    }
  };

  const toggleActive = async (popup: Popup) => {
    const { error } = await supabase
      .from("popups")
      .update({ is_active: !popup.is_active, updated_at: new Date().toISOString() })
      .eq("id", popup.id);
    if (error) {
      console.error(error);
      return;
    }
    fetchPopups();
  };

  const isCurrentlyActive = (popup: Popup) => {
    if (!popup.is_active) return false;
    const now = new Date();
    return new Date(popup.start_date) <= now && now <= new Date(popup.end_date);
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">팝업 관리</h1>
          <p className="mt-1 text-sm text-text-muted">
            홈페이지 팝업을 관리합니다.
          </p>
        </div>
        <Button onClick={openCreate} size="sm">
          <PlusIcon className="size-4" data-icon="inline-start" />
          팝업 등록
        </Button>
      </div>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">이미지</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>게시 기간</TableHead>
              <TableHead className="w-20 text-center">상태</TableHead>
              <TableHead className="w-24 text-center">관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="py-12 text-center text-text-muted">
                  <Loader2Icon className="mx-auto size-5 animate-spin" />
                </TableCell>
              </TableRow>
            ) : popups.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-12 text-center text-text-muted"
                >
                  등록된 팝업이 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              popups.map((popup) => (
                <TableRow key={popup.id}>
                  <TableCell>
                    <div className="relative size-12 overflow-hidden rounded border bg-gray-50">
                      <Image
                        src={popup.image_url}
                        alt={popup.title}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{popup.title}</TableCell>
                  <TableCell className="text-sm text-text-muted whitespace-nowrap">
                    {formatDate(popup.start_date)} ~ {formatDate(popup.end_date)}
                  </TableCell>
                  <TableCell className="text-center">
                    <button
                      onClick={() => toggleActive(popup)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                        isCurrentlyActive(popup)
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          isCurrentlyActive(popup)
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                      />
                      {popup.is_active ? "ON" : "OFF"}
                    </button>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => openEdit(popup)}
                      >
                        <PencilIcon className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setDeleteTarget(popup)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <TrashIcon className="size-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* 등록/수정 다이얼로그 */}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "팝업 수정" : "팝업 등록"}
            </DialogTitle>
            <DialogDescription>
              팝업 이미지와 게시 기간을 설정하세요.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="popup-title">제목 (관리용)</Label>
              <Input
                id="popup-title"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                placeholder="예: 3월 오픈 이벤트"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>팝업 이미지</Label>
              <div className="flex items-start gap-3">
                {imagePreview ? (
                  <div className="relative h-24 w-32 overflow-hidden rounded-lg border">
                    <Image
                      src={imagePreview}
                      alt="미리보기"
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                ) : (
                  <div className="flex h-24 w-32 items-center justify-center rounded-lg border border-dashed bg-gray-50">
                    <ImageIcon className="size-6 text-gray-300" />
                  </div>
                )}
                <div className="flex-1">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-sm"
                  />
                  <p className="mt-1 text-xs text-text-muted">
                    권장: 600x800px 이상, JPG/PNG
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="popup-link">링크 URL (선택)</Label>
              <Input
                id="popup-link"
                type="url"
                value={form.link_url}
                onChange={(e) =>
                  setForm((f) => ({ ...f, link_url: e.target.value }))
                }
                placeholder="https://..."
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="popup-start">시작일</Label>
                <Input
                  id="popup-start"
                  type="datetime-local"
                  value={form.start_date}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, start_date: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="popup-end">종료일</Label>
                <Input
                  id="popup-end"
                  type="datetime-local"
                  value={form.end_date}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, end_date: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="popup-active"
                checked={form.is_active}
                onChange={(e) =>
                  setForm((f) => ({ ...f, is_active: e.target.checked }))
                }
                className="size-4 rounded border-gray-300 accent-[#8EC31F]"
              />
              <Label htmlFor="popup-active">활성화</Label>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setFormOpen(false)}
              >
                취소
              </Button>
              <Button type="submit" disabled={saving}>
                {saving && <Loader2Icon className="size-4 animate-spin" data-icon="inline-start" />}
                {editingId ? "수정" : "등록"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 삭제 확인 다이얼로그 */}
      <Dialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>팝업 삭제</DialogTitle>
            <DialogDescription>
              &ldquo;{deleteTarget?.title}&rdquo; 팝업을 삭제하시겠습니까?
              <br />이 작업은 되돌릴 수 없습니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteTarget(null)}
            >
              취소
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting && <Loader2Icon className="size-4 animate-spin" data-icon="inline-start" />}
              삭제
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
