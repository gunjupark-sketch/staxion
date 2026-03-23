"use client";

import { useState, useEffect } from "react";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { ReviewContent } from "@/components/review/ReviewContent";

const TABS = [
  { id: "prologue", label: "프롤로그" },
  { id: "step0", label: "STEP 0" },
  { id: "step1", label: "STEP 1" },
  { id: "step2", label: "STEP 2" },
  { id: "step3", label: "STEP 3" },
  { id: "step4", label: "STEP 4" },
  { id: "step5", label: "STEP 5" },
  { id: "appendix", label: "부록" },
];

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState("prologue");
  const [authorName, setAuthorName] = useState("");
  const [showNameModal, setShowNameModal] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("review_author");
    if (saved) {
      setAuthorName(saved);
      setShowNameModal(false);
    }
  }, []);

  const handleSetName = (name: string) => {
    setAuthorName(name);
    localStorage.setItem("review_author", name);
    setShowNameModal(false);
  };

  return (
    <>
      {/* 닉네임 입력 모달 */}
      {showNameModal && (
        <NameModal onSubmit={handleSetName} />
      )}

      <div className="flex flex-col h-screen">
        <ReviewHeader
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          authorName={authorName}
          onChangeName={() => setShowNameModal(true)}
        />
        <ReviewContent
          activeTab={activeTab}
          authorName={authorName}
        />
      </div>
    </>
  );
}

function NameModal({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8 w-[380px]">
        <h2 className="text-xl font-bold text-white mb-2">초고 리뷰</h2>
        <p className="text-[#888] text-sm mb-6">
          코멘트에 표시될 이름을 입력해주세요.
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && onSubmit(name.trim())}
          placeholder="이름 또는 닉네임"
          className="w-full bg-[#0a0a0a] border border-[#444] rounded px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-[#D4567A] mb-4"
          autoFocus
        />
        <button
          onClick={() => name.trim() && onSubmit(name.trim())}
          disabled={!name.trim()}
          className="w-full py-3 rounded font-medium bg-[#D4567A] text-white hover:bg-[#c04a6c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
