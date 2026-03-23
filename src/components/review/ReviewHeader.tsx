"use client";

interface Tab {
  id: string;
  label: string;
}

interface ReviewHeaderProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  authorName: string;
  onChangeName: () => void;
}

export function ReviewHeader({
  tabs,
  activeTab,
  onTabChange,
  authorName,
  onChangeName,
}: ReviewHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#eee]">
      {/* 상단 바 */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-[#1a1a1a] tracking-tight">
            미용치과 도입 실무 마스터
          </h1>
          <span className="text-xs px-2 py-0.5 rounded bg-[#D4567A]/10 text-[#D4567A] font-medium">
            초고 리뷰
          </span>
        </div>
        <button
          onClick={onChangeName}
          className="flex items-center gap-2 text-sm text-[#888] hover:text-[#1a1a1a] transition-colors"
        >
          <span className="w-6 h-6 rounded-full bg-[#D4567A] flex items-center justify-center text-white text-xs font-bold">
            {authorName.charAt(0)}
          </span>
          {authorName}
        </button>
      </div>

      {/* 탭 바 */}
      <div className="flex gap-0 px-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-[#D4567A] text-[#D4567A]"
                : "border-transparent text-[#999] hover:text-[#555]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
}
