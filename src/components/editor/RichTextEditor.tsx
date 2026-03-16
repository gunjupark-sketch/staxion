"use client";

import { useEffect, useRef, useState } from "react";
import {
  EditorRoot,
  EditorContent,
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorCommandEmpty,
  EditorCommandList,
  type JSONContent,
  handleCommandNavigation,
  createSuggestionItems,
  renderItems,
  createImageUpload,
  handleImageDrop,
  handleImagePaste,
  type UploadFn,
  StarterKit,
  TiptapImage,
  TiptapUnderline,
  TiptapLink,
  Placeholder,
  TaskList,
  TaskItem,
  HorizontalRule,
  HighlightExtension,
  UpdatedImage,
  CodeBlockLowlight,
} from "novel";
import { generateJSON } from "@tiptap/html";
import { createClient } from "@/lib/supabase/client";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  CodeIcon,
  Heading2Icon,
  Heading3Icon,
  ListIcon,
  ListOrderedIcon,
  TextQuoteIcon,
  ImageIcon,
  MinusIcon,
  CheckSquareIcon,
} from "lucide-react";

// ── Supabase 이미지 업로드 ──
async function uploadToSupabase(file: File): Promise<string> {
  const supabase = createClient();
  const ext = file.name.split(".").pop() || "png";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const filePath = `editor/${fileName}`;

  const { error } = await supabase.storage
    .from("posts")
    .upload(filePath, file, { cacheControl: "3600", upsert: false });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("posts").getPublicUrl(filePath);
  return data.publicUrl;
}

const uploadFn = createImageUpload({
  onUpload: uploadToSupabase,
  validateFn: (file) => {
    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 가능합니다.");
      return false;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("10MB 이하 파일만 가능합니다.");
      return false;
    }
    return true;
  },
});

// ── Slash 커맨드 ──
const suggestionItems = createSuggestionItems([
  {
    title: "제목",
    description: "큰 제목",
    searchTerms: ["h2", "heading", "제목"],
    icon: <Heading2Icon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run();
    },
  },
  {
    title: "소제목",
    description: "작은 제목",
    searchTerms: ["h3", "소제목"],
    icon: <Heading3Icon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run();
    },
  },
  {
    title: "목록",
    description: "글머리 기호 목록",
    searchTerms: ["list", "목록", "ul"],
    icon: <ListIcon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBulletList().run();
    },
  },
  {
    title: "번호 목록",
    description: "숫자 목록",
    searchTerms: ["ordered", "번호", "ol"],
    icon: <ListOrderedIcon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run();
    },
  },
  {
    title: "체크리스트",
    description: "할 일 목록",
    searchTerms: ["todo", "체크", "task"],
    icon: <CheckSquareIcon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleTaskList().run();
    },
  },
  {
    title: "인용",
    description: "인용 블록",
    searchTerms: ["quote", "인용", "blockquote"],
    icon: <TextQuoteIcon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBlockquote().run();
    },
  },
  {
    title: "구분선",
    description: "수평 구분선",
    searchTerms: ["hr", "구분선", "divider"],
    icon: <MinusIcon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setHorizontalRule().run();
    },
  },
  {
    title: "이미지",
    description: "이미지 업로드",
    searchTerms: ["image", "이미지", "사진"],
    icon: <ImageIcon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).run();
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return;
        const pos = editor.view.state.selection.from;
        uploadFn(file, editor.view, pos);
      };
      input.click();
    },
  },
  {
    title: "코드",
    description: "코드 블록",
    searchTerms: ["code", "코드"],
    icon: <CodeIcon className="size-4" />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
    },
  },
]);

// ── Extensions ──
const extensions = [
  StarterKit.configure({
    heading: { levels: [2, 3] },
    codeBlock: false,
  }),
  TiptapImage.configure({
    allowBase64: false,
    HTMLAttributes: { class: "max-w-full rounded-lg my-2" },
  }),
  TiptapLink.configure({
    openOnClick: false,
    HTMLAttributes: { class: "text-brand-lime-text underline cursor-pointer" },
  }),
  TiptapUnderline,
  Placeholder.configure({ placeholder: "'/' 입력으로 블록 추가..." }),
  TaskList,
  TaskItem.configure({ nested: true }),
  HorizontalRule,
  HighlightExtension,
];

// ── 메인 컴포넌트 ──
interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [initialContent, setInitialContent] = useState<JSONContent | null>(null);
  const initialized = useRef(false);

  // HTML → JSON 변환 (최초 1회)
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!value || value.trim() === "") {
      setInitialContent({ type: "doc", content: [{ type: "paragraph" }] });
      return;
    }

    try {
      const json = generateJSON(value, extensions);
      setInitialContent(json);
    } catch {
      setInitialContent({
        type: "doc",
        content: [{ type: "paragraph", content: [{ type: "text", text: value }] }],
      });
    }
  }, [value]);

  if (!initialContent) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-border">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border">
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-4 [&_h2]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-3 [&_h3]:mb-1 [&_img]:max-w-full [&_img]:rounded-lg [&_blockquote]:border-l-4 [&_blockquote]:border-brand-lime-safe [&_blockquote]:pl-4 [&_blockquote]:italic [&_a]:text-brand-lime-text [&_a]:underline [&_.is-empty]:before:content-[attr(data-placeholder)] [&_.is-empty]:before:text-text-muted [&_.is-empty]:before:float-left [&_.is-empty]:before:h-0 [&_.is-empty]:before:pointer-events-none"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) => handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class: "focus:outline-none",
            },
          }}
          onUpdate={({ editor }) => {
            onChange(editor.getHTML());
          }}
        >
          {/* 버블 메뉴 (텍스트 선택 시) */}
          <EditorBubble className="flex items-center gap-0.5 rounded-lg border border-border bg-white p-1 shadow-lg">
            <EditorBubbleItem
              onSelect={(editor) => editor.chain().focus().toggleBold().run()}
            >
              <button type="button" className="rounded p-1.5 hover:bg-surface-secondary">
                <BoldIcon className="size-4" />
              </button>
            </EditorBubbleItem>
            <EditorBubbleItem
              onSelect={(editor) => editor.chain().focus().toggleItalic().run()}
            >
              <button type="button" className="rounded p-1.5 hover:bg-surface-secondary">
                <ItalicIcon className="size-4" />
              </button>
            </EditorBubbleItem>
            <EditorBubbleItem
              onSelect={(editor) => editor.chain().focus().toggleUnderline().run()}
            >
              <button type="button" className="rounded p-1.5 hover:bg-surface-secondary">
                <UnderlineIcon className="size-4" />
              </button>
            </EditorBubbleItem>
            <EditorBubbleItem
              onSelect={(editor) => editor.chain().focus().toggleStrike().run()}
            >
              <button type="button" className="rounded p-1.5 hover:bg-surface-secondary">
                <StrikethroughIcon className="size-4" />
              </button>
            </EditorBubbleItem>
            <EditorBubbleItem
              onSelect={(editor) => editor.chain().focus().toggleCode().run()}
            >
              <button type="button" className="rounded p-1.5 hover:bg-surface-secondary">
                <CodeIcon className="size-4" />
              </button>
            </EditorBubbleItem>
          </EditorBubble>

          {/* Slash 커맨드 메뉴 */}
          <EditorCommand className="z-50 w-64 rounded-lg border border-border bg-white shadow-lg">
            <EditorCommandEmpty className="px-3 py-2 text-sm text-text-muted">
              결과 없음
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  key={item.title}
                  value={item.title}
                  onCommand={(val) => item.command?.(val)}
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-surface-secondary cursor-pointer rounded-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{item.title}</p>
                    <p className="text-xs text-text-muted">{item.description}</p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>
        </EditorContent>
      </EditorRoot>
    </div>
  );
}
