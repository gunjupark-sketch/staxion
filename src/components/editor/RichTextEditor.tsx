"use client";

import { useRef, useCallback, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  BoldIcon,
  ItalicIcon,
  Heading2Icon,
  Heading3Icon,
  ImageIcon,
  LinkIcon,
  EyeIcon,
  EyeOffIcon,
  ListIcon,
  QuoteIcon,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(false);
  const [uploading, setUploading] = useState(false);

  const exec = useCallback((command: string, val?: string) => {
    document.execCommand(command, false, val);
    // 변경 후 부모에 전달
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const handleBold = () => exec("bold");
  const handleItalic = () => exec("italic");

  const handleHeading = (level: "H2" | "H3") => {
    exec("formatBlock", level);
  };

  const handleLink = () => {
    const url = prompt("링크 URL을 입력하세요:");
    if (url) {
      exec("createLink", url);
    }
  };

  const handleList = () => exec("insertUnorderedList");
  const handleQuote = () => exec("formatBlock", "BLOCKQUOTE");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 5MB 제한
    if (file.size > 5 * 1024 * 1024) {
      alert("이미지 크기는 5MB 이하만 가능합니다.");
      return;
    }

    setUploading(true);
    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const filePath = `community/${fileName}`;

      const { error } = await supabase.storage
        .from("posts")
        .upload(filePath, file, { cacheControl: "3600", upsert: false });

      if (error) {
        alert("이미지 업로드 실패: " + error.message);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("posts")
        .getPublicUrl(filePath);

      if (urlData?.publicUrl) {
        exec("insertHTML", `<img src="${urlData.publicUrl}" alt="업로드 이미지" class="max-w-full rounded-lg my-2" />`);
      }
    } catch {
      alert("이미지 업로드 중 오류가 발생했습니다.");
    } finally {
      setUploading(false);
      // 파일 input 리셋
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const toolbarBtnClass =
    "inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[36px] min-w-[36px]";

  return (
    <div className="rounded-lg border border-border">
      {/* 툴바 */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-surface-secondary/50 px-2 py-1.5">
        <button type="button" onClick={handleBold} className={toolbarBtnClass} title="굵게">
          <BoldIcon className="size-4" />
        </button>
        <button type="button" onClick={handleItalic} className={toolbarBtnClass} title="기울임">
          <ItalicIcon className="size-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button type="button" onClick={() => handleHeading("H2")} className={toolbarBtnClass} title="제목 (H2)">
          <Heading2Icon className="size-4" />
        </button>
        <button type="button" onClick={() => handleHeading("H3")} className={toolbarBtnClass} title="소제목 (H3)">
          <Heading3Icon className="size-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button type="button" onClick={handleList} className={toolbarBtnClass} title="목록">
          <ListIcon className="size-4" />
        </button>
        <button type="button" onClick={handleQuote} className={toolbarBtnClass} title="인용">
          <QuoteIcon className="size-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button type="button" onClick={handleLink} className={toolbarBtnClass} title="링크 삽입">
          <LinkIcon className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={toolbarBtnClass}
          title="이미지 삽입"
          disabled={uploading}
        >
          {uploading ? (
            <div className="size-4 animate-spin rounded-full border-2 border-text-muted border-t-transparent" />
          ) : (
            <ImageIcon className="size-4" />
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => setPreview(!preview)}
          className={`${toolbarBtnClass} ${preview ? "bg-brand-lime-safe/10 text-brand-lime-text" : ""}`}
          title={preview ? "편집 모드" : "미리보기"}
        >
          {preview ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
        </button>
      </div>

      {/* 편집 영역 / 미리보기 */}
      {preview ? (
        <div
          className="prose prose-sm max-w-none p-4 min-h-[300px]"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onBlur={handleInput}
          dangerouslySetInnerHTML={{ __html: value }}
          className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-4 [&_h2]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-3 [&_h3]:mb-1 [&_img]:max-w-full [&_img]:rounded-lg [&_blockquote]:border-l-4 [&_blockquote]:border-brand-lime-safe [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-muted [&_a]:text-brand-lime-text [&_a]:underline"
          data-placeholder="내용을 입력하세요..."
        />
      )}
    </div>
  );
}
