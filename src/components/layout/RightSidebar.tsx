"use client";

const CLINICS = [
  { name: "더스테이션 치과", location: "서울 강남", since: "2024" },
  { name: "더스테이션 치과", location: "서울 서초", since: "2024" },
  { name: "더스테이션 치과", location: "경기 분당", since: "2025" },
  { name: "더스테이션 치과", location: "서울 송파", since: "2025" },
  { name: "더스테이션 치과", location: "인천 연수", since: "2025" },
  { name: "더스테이션 치과", location: "서울 강남", since: "2025" },
  { name: "더스테이션 치과", location: "경기 수원", since: "2026" },
  { name: "더스테이션 치과", location: "서울 마포", since: "2026" },
  { name: "더스테이션 치과", location: "대전 유성", since: "2026" },
  { name: "더스테이션 치과", location: "서울 영등포", since: "2026" },
  { name: "더스테이션 치과", location: "서울 강남", since: "2024" },
  { name: "더스테이션 치과", location: "서울 서초", since: "2024" },
];

export default function RightSidebar() {
  return (
    <aside
      className="hidden xl:block w-[280px] shrink-0 bg-card border-l border-border"
      style={{ minHeight: "calc(100vh - 76px)" }}
    >
      <div
        className="sticky top-[76px] overflow-y-auto p-4 pt-2 space-y-4"
        style={{ maxHeight: "calc(100vh - 76px)" }}
      >
        {/* 미용 진료중인 치과 — 위로 슬라이드 */}
        <div
          className="rounded-xl p-4 pt-3 border border-border"
        >
          <p className="mb-0.5 text-[13px] font-bold text-foreground">
            미용 진료중인 치과
          </p>
          <p className="mb-3 text-[11px] text-text-muted">
            MEDI STAXION과 함께하는 치과
          </p>

          <div className="relative overflow-hidden" style={{ height: 360 }}>
            <div className="animate-slide-up space-y-3">
              {CLINICS.map((clinic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg p-2.5 transition-all duration-200 hover:shadow-sm hover:bg-card cursor-pointer bg-surface"
                >
                  <div
                    className="h-10 w-10 shrink-0 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #e2e4ea, #d1d4dc)",
                    }}
                  >
                    <span
                      className="text-[10px] font-bold text-text-muted"
                    >
                      LOGO
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[13px] font-semibold truncate text-foreground"
                    >
                      {clinic.name}
                    </p>
                    <p className="text-[10px] text-text-muted">
                      {clinic.location} · {clinic.since}년 시작
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
