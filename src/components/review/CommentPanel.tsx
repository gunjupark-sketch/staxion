"use client";

import { useState, useEffect, useRef } from "react";

interface Comment {
  id: string;
  section_id: string;
  author_name: string;
  content: string;
  resolved: boolean;
  created_at: string;
}

interface CommentPanelProps {
  sectionId: string;
  authorName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function CommentPanel({ sectionId, authorName, isOpen, onClose }: CommentPanelProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && sectionId) fetchComments();
  }, [isOpen, sectionId]);

  useEffect(() => {
    if (isOpen && textareaRef.current) textareaRef.current.focus();
  }, [isOpen]);

  const fetchComments = async () => {
    const res = await fetch(`/api/review-comments?section_id=${sectionId}`);
    const data = await res.json();
    if (Array.isArray(data)) setComments(data);
  };

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    setLoading(true);
    await fetch("/api/review-comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section_id: sectionId,
        author_name: authorName,
        content: newComment.trim(),
      }),
    });
    setNewComment("");
    await fetchComments();
    setLoading(false);
  };

  const handleResolve = async (id: string, resolved: boolean) => {
    await fetch("/api/review-comments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, resolved }),
    });
    await fetchComments();
  };

  if (!isOpen) return null;

  const activeComments = comments.filter((c) => !c.resolved);
  const resolvedComments = comments.filter((c) => c.resolved);

  return (
    <div className="w-[320px] shrink-0 bg-[#fafafa] border-l border-[#eee] flex flex-col max-h-[calc(100vh-100px)] sticky top-[100px]">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#eee]">
        <span className="text-sm font-medium text-[#1a1a1a]">
          코멘트 {activeComments.length > 0 && `(${activeComments.length})`}
        </span>
        <button onClick={onClose} className="text-[#bbb] hover:text-[#1a1a1a] text-lg leading-none">&times;</button>
      </div>

      {/* 코멘트 목록 */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {activeComments.map((c) => (
          <CommentItem key={c.id} comment={c} onResolve={handleResolve} />
        ))}
        {resolvedComments.length > 0 && (
          <details className="mt-4">
            <summary className="text-xs text-[#bbb] cursor-pointer hover:text-[#888]">
              해결됨 ({resolvedComments.length})
            </summary>
            <div className="mt-2 space-y-2 opacity-50">
              {resolvedComments.map((c) => (
                <CommentItem key={c.id} comment={c} onResolve={handleResolve} />
              ))}
            </div>
          </details>
        )}
        {comments.length === 0 && (
          <p className="text-[#bbb] text-sm text-center py-4">아직 코멘트가 없습니다</p>
        )}
      </div>

      {/* 입력 */}
      <div className="p-3 border-t border-[#eee]">
        <textarea
          ref={textareaRef}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit();
          }}
          placeholder="코멘트 작성... (Ctrl+Enter로 전송)"
          rows={3}
          className="w-full bg-white border border-[#ddd] rounded-lg px-3 py-2 text-sm text-[#1a1a1a] placeholder:text-[#bbb] focus:outline-none focus:border-[#D4567A] resize-none"
        />
        <button
          onClick={handleSubmit}
          disabled={!newComment.trim() || loading}
          className="mt-2 w-full py-2 rounded-lg text-sm font-medium bg-[#1a1a1a] text-white hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "저장 중..." : "코멘트 추가"}
        </button>
      </div>
    </div>
  );
}

function CommentItem({
  comment,
  onResolve,
}: {
  comment: Comment;
  onResolve: (id: string, resolved: boolean) => void;
}) {
  const time = new Date(comment.created_at).toLocaleString("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white rounded-lg p-3 group border border-[#eee]">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#D4567A] flex items-center justify-center text-white text-[10px] font-bold">
            {comment.author_name.charAt(0)}
          </span>
          <span className="text-xs font-medium text-[#555]">{comment.author_name}</span>
        </div>
        <span className="text-[10px] text-[#bbb]">{time}</span>
      </div>
      <p className="text-sm text-[#333] whitespace-pre-wrap leading-relaxed">{comment.content}</p>
      <button
        onClick={() => onResolve(comment.id, !comment.resolved)}
        className="mt-2 text-[10px] text-[#bbb] hover:text-[#D4567A] opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {comment.resolved ? "다시 열기" : "해결됨으로 표시"}
      </button>
    </div>
  );
}
