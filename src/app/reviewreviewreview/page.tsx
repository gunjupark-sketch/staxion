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

const PASSCODE = "0523";

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState("prologue");
  const [authorName, setAuthorName] = useState("");
  const [showNameModal, setShowNameModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("review_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      const saved = localStorage.getItem("review_author");
      if (saved) {
        setAuthorName(saved);
      } else {
        setShowNameModal(true);
      }
    }
    setCheckingAuth(false);
  }, []);

  const handleSetName = (name: string) => {
    setAuthorName(name);
    localStorage.setItem("review_author", name);
    setShowNameModal(false);
  };

  if (checkingAuth) return null;

  if (!isAuthenticated) {
    return <PasscodeScreen onSuccess={() => {
      setIsAuthenticated(true);
      localStorage.setItem("review_auth", "true");
      const saved = localStorage.getItem("review_author");
      if (saved) {
        setAuthorName(saved);
      } else {
        setShowNameModal(true);
      }
    }} />;
  }

  return (
    <>
      {showNameModal && <NameModal onSubmit={handleSetName} />}
      <div className="flex flex-col h-screen">
        <ReviewHeader
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          authorName={authorName}
          onChangeName={() => setShowNameModal(true)}
        />
        <ReviewContent activeTab={activeTab} authorName={authorName} />
      </div>
    </>
  );
}

function PasscodeScreen({ onSuccess }: { onSuccess: () => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (code === PASSCODE) {
      onSuccess();
    } else {
      setError(true);
      setCode("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[360px] text-center">
        <p className="text-[#C4929B] text-xs font-medium tracking-[0.2em] mb-3">
          AESTHETIC DENTISTRY PRACTICE GUIDE
        </p>
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">초고 리뷰</h1>
        <p className="text-sm text-[#999] mb-8">접근 코드를 입력해주세요</p>
        <input
          type="password"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && code && handleSubmit()}
          placeholder="접근 코드"
          className={`w-full border rounded-lg px-4 py-3 text-center text-lg tracking-[0.3em] focus:outline-none transition-colors ${
            error
              ? "border-red-400 bg-red-50"
              : "border-[#ddd] bg-[#fafafa] focus:border-[#C4929B]"
          }`}
          autoFocus
        />
        {error && <p className="text-red-500 text-xs mt-2">코드가 일치하지 않습니다</p>}
        <button
          onClick={handleSubmit}
          disabled={!code}
          className="mt-4 w-full py-3 rounded-lg font-medium bg-[#1a1a1a] text-white hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
}

function NameModal({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white border border-[#eee] rounded-xl p-8 w-[380px] shadow-xl">
        <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">리뷰어 이름</h2>
        <p className="text-[#999] text-sm mb-6">
          코멘트에 표시될 이름을 입력해주세요.
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && onSubmit(name.trim())}
          placeholder="이름 또는 닉네임"
          className="w-full bg-[#fafafa] border border-[#ddd] rounded-lg px-4 py-3 text-[#1a1a1a] placeholder:text-[#bbb] focus:outline-none focus:border-[#C4929B] mb-4"
          autoFocus
        />
        <button
          onClick={() => name.trim() && onSubmit(name.trim())}
          disabled={!name.trim()}
          className="w-full py-3 rounded-lg font-medium bg-[#1a1a1a] text-white hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
