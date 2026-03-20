"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { ImageIcon, UploadIcon, XIcon } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  bucket: string;
  folder?: string;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export default function ImageUpload({
  value,
  onChange,
  bucket,
  folder = "thumbnails",
  disabled = false,
  label = "이미지",
  className = "",
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 가능합니다.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("10MB 이하 파일만 가능합니다.");
      return;
    }

    setUploading(true);
    const supabase = createClient();
    const ext = file.name.split(".").pop() || "png";
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const filePath = `${folder}/${fileName}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, { cacheControl: "3600", upsert: false });

    if (error) {
      alert("업로드 실패: " + error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    onChange(data.publicUrl);
    setUploading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleUpload(file);
  };

  const handleRemove = () => {
    onChange("");
  };

  return (
    <div className={className}>
      {value ? (
        <div className="relative inline-block">
          <img
            src={value}
            alt={label}
            className="h-40 w-auto max-w-full rounded-lg object-cover border"
          />
          {!disabled && (
            <div className="absolute top-1 right-1 flex gap-1">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="rounded-full bg-card/90 p-1.5 shadow-sm hover:bg-card transition-colors"
                title="이미지 변경"
              >
                <UploadIcon className="size-3.5 text-text-secondary" />
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="rounded-full bg-card/90 p-1.5 shadow-sm hover:bg-red-50 transition-colors"
                title="이미지 삭제"
              >
                <XIcon className="size-3.5 text-red-500" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          disabled={disabled || uploading}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`flex h-40 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed transition-colors ${
            dragOver
              ? "border-brand-neon-safe bg-brand-neon-safe/5"
              : "border-border hover:border-border hover:bg-surface-secondary/50"
          } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {uploading ? (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
          ) : (
            <>
              <ImageIcon className="size-8 text-text-muted" />
              <span className="text-xs text-text-muted">클릭 또는 드래그하여 업로드</span>
              <span className="text-[10px] text-text-muted">최대 10MB</span>
            </>
          )}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
