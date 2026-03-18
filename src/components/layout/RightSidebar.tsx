"use client";

import { C } from "@/lib/design-tokens";

const CLINICS = [
  { name: "미소플러스치과", location: "서울 강남", since: "2024" },
  { name: "뉴스마일치과", location: "서울 서초", since: "2024" },
  { name: "하늘치과의원", location: "경기 분당", since: "2025" },
  { name: "예쁜미소치과", location: "서울 송파", since: "2025" },
  { name: "더좋은치과", location: "인천 연수", since: "2025" },
  { name: "강남밝은치과", location: "서울 강남", since: "2025" },
  { name: "푸른하늘치과", location: "경기 수원", since: "2026" },
  { name: "행복한치과", location: "서울 마포", since: "2026" },
  { name: "미래치과의원", location: "대전 유성", since: "2026" },
  { name: "연세밝은치과", location: "서울 영등포", since: "2026" },
  { name: "미소플러스치과", location: "서울 강남", since: "2024" },
  { name: "뉴스마일치과", location: "서울 서초", since: "2024" },
];

export default function RightSidebar() {
  return (
    <aside
      className="hidden xl:block w-[280px] shrink-0 bg-white border-l"
      style={{ borderColor: C.border, minHeight: "calc(100vh - 76px)" }}
    >
      <div
        className="sticky top-[76px] overflow-y-auto p-4 space-y-4"
        style={{ maxHeight: "calc(100vh - 76px)" }}
      >
        {/* 미용치과 도입 원장 — 위로 슬라이드 */}
        <div
          className="rounded-xl p-4"
          style={{ border: `1px solid ${C.borderLight}` }}
        >
          <p className="mb-1 text-[13px] font-bold" style={{ color: C.dark }}>
            미용치과 도입 원장
          </p>
          <p className="mb-4 text-[11px]" style={{ color: C.textMuted }}>
            MEDI STAXION과 함께하는 치과
          </p>

          <div className="relative overflow-hidden" style={{ height: 360 }}>
            <div className="animate-slide-up space-y-3">
              {CLINICS.map((clinic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg p-2.5 transition-all duration-200 hover:shadow-sm hover:bg-white cursor-pointer"
                  style={{ background: C.surface }}
                >
                  <div
                    className="h-10 w-10 shrink-0 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #e2e4ea, #d1d4dc)",
                    }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: C.textMuted }}
                    >
                      LOGO
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[13px] font-semibold truncate"
                      style={{ color: C.dark }}
                    >
                      {clinic.name}
                    </p>
                    <p className="text-[10px]" style={{ color: C.textMuted }}>
                      {clinic.location} · {clinic.since}년 도입
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
