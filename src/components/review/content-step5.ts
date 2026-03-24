import { Section } from "./content-data";

export const step5Data: Section[] = [
  /* ───────────────────────── STEP 5 인트로 ───────────────────────── */
  {
    id: "s5-intro",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 5. 재무·리스크 관리 — 수익 구조부터 법적 방어까지</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술을 시작했으면 돈이 되는지 봐야 하고, 법적으로 안전한지 알아야 한다. 이 STEP에서는 미용 파트 수익을 독립적으로 관리하는 방법, 치과 미용시술의 법적 쟁점에 대한 명확한 기준, 그리고 실제 신고·민원이 발생했을 때 48시간 안에 해야 할 일을 다룬다.</p>
    `,
  },

  /* ───────────────────────── 5-1. 재무·수익 관리 ───────────────────────── */
  {
    id: "s5-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5-1. 재무·수익 관리</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용 파트 수익 구조 이해</h3>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">핵심 전제: 미용 파트 수익은 치과 수익과 반드시 분리해서 관리해야 한다. 합산해서 보면 미용이 되는지 안 되는지 알 수 없다.</blockquote>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">시술별 원가 구조 — 초기 도입 기준 참고치</h4>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">주의:</strong> 아래 수치는 참고치다. 실제 원가는 거래처 계약 조건·물량에 따라 달라진다. 반드시 자체 원가 계산표로 업데이트해서 사용할 것.
      </div>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">시술</th><th class="px-4 py-2 text-left font-medium">평균 수가 범위</th><th class="px-4 py-2 text-left font-medium">재료비(참고)</th><th class="px-4 py-2 text-left font-medium">마진율(참고)</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스 (양측 100U)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~24만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2.3~4.4만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">70~82%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마·미간 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10~20만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~5만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">75~80%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA 필러 1cc</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">25~60만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8~15만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">65~75%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터 (1회 2cc)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">25~30만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8~16만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">65~70%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU (전안면)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">40~80만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">소모품 낮음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">장비 감가 고려</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">80~200만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실 재료비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">브랜드별 차이 큼</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">TIP:</strong> 마진율은 (판매가 - 재료비) / 판매가로 계산. 실제 순수익을 알려면 감가상각비·인건비·마케팅비까지 빼야 한다.
      </div>
    `,
  },
  {
    id: "s5-02",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">장비 감가상각 — 숨은 비용</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">장비</th><th class="px-4 py-2 text-left font-medium">구매가(참고)</th><th class="px-4 py-2 text-left font-medium">사용 기간</th><th class="px-4 py-2 text-left font-medium">월 감가상각비(참고)</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3,000~6,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">50~100만원/월</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">RF 장비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,000~3,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">17~50만원/월</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피코 레이저</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3,000~8,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5~7년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">36~133만원/월</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,500~3,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">25~50만원/월</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">절세 팁:</strong> 세법상 보건업 의료기기 기준 내용연수는 5년(4~6년 선택). 개원 초기에는 내용연수 4년 + 정률법을 선택하면 초기 감가상각비가 커져 절세 효과 극대화. 세무사와 상의할 것.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용 파트 월 손익 계산 템플릿</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">이번 달</th><th class="px-4 py-2 text-left font-medium">목표</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">A. 미용 시술 총 매출</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">—</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">B. 재료비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매출의 20~30%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">C. 장비 감가상각비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">—</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">D. 소모품·위생용품</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">—</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">E. 마케팅비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매출의 10~15%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">F. 인건비 배분</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">—</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">G. 미용 파트 순수익 (A-B-C-D-E-F)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#C4929B]">매출의 40~55%</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">월 수익 목표 설정</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">시기</th><th class="px-4 py-2 text-left font-medium">월 미용 매출 목표</th><th class="px-4 py-2 text-left font-medium">월 시술 건수</th><th class="px-4 py-2 text-left font-medium">기준</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~3개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">200~500만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10~20건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구환 전환 위주</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~6개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">500~1,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20~40건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">업셀·패키지 시작</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7~12개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,000~2,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">40~80건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">외부 마케팅 본격화</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12개월+</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2,000만원+</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">80건+</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안정화, 리텐션 중심</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 5-2. 법적 Q&A ───────────────────────── */
  {
    id: "s5-03",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5-2. 치과 안면미용시술 주요 쟁점 &amp; 법적 Q&amp;A</h2>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">면책 안내:</strong> 이 챕터의 내용은 일반적인 법적 해석 가이드다. 개별 사건에 대한 법적 판단은 전문 변호사 상담을 받아야 한다.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">핵심 법적 근거 3가지</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">근거</th><th class="px-4 py-2 text-left font-medium">핵심 내용</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법원 2016년 판결 (2013도850)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과의사의 안면 보톡스·필러 시술은 치과 의료 행위에 해당. 의료법 위반이 아니다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료기기법 — 3등급</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU·LDM·RF·레이저는 의사가 직접 조작·시술. 스탭 위임 시 위반</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료법 제27조</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 행위는 의사만 가능. 스탭 시술 시 무면허 의료행위</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">파트 1. 권한 범위 Q&amp;A</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q. 치과의사가 안면 보톡스·필러를 시술하는 것이 합법인가?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#C4929B]">합법이다.</span> 대법원 2016년 판결에서 확정. 안면 영역의 해부학적 전문성을 갖춘 의료인으로 인정.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q. HIFU·레이저·LDM 등 장비 시술도 치과의사가 직접 해야 하나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#C4929B]">그렇다.</span> 3등급 의료기기는 의사 직접 시술 원칙. 스탭이 독립적으로 장비를 다루는 것은 불법.</p>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">파트 2. 스탭 위임 Q&amp;A</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q. 치과위생사가 보톡스 주사를 주입하면 안 되나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#C4929B]">안 된다.</span> 면허대여 및 무면허 의료행위 조력으로 치과의사와 치과위생사 모두 처벌 대상.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q. 의사가 옆에 있으면 스탭이 시술해도 되나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#C4929B]">안 된다.</span> 의사의 감독 존재 여부와 무관하게, 침습적 의료 행위는 의사가 직접 해야 한다.</p>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">파트 3. 동의서·사진·기록</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q. 미용 시술 동의서는 반드시 받아야 하나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#C4929B]">그렇다.</span> 의료법 제24조의2에 따라 침습적 시술 전 서면 동의 필수. 동의서 없이 부작용 발생 시 과실 입증에서 불리.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q. 시술 차트를 얼마나 보관해야 하나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. 의료법상 진료기록 보존 기간은 <span class="font-bold text-[#1a1a1a]">5년</span>. 시술 부위·용량·배치·환자 상태를 상세히 기록해야 한다.</p>

      <!-- V-505: 리스크 매트릭스 -->
      <div class="bg-white border border-[#eee] rounded-lg p-6 mb-6">
        <h4 class="text-lg font-bold text-[#1a1a1a] text-center mb-6">리스크 매트릭스</h4>
        <!-- 축 라벨 -->
        <div class="flex mb-2">
          <div class="w-8 flex items-center justify-center">
            <span class="text-[10px] text-[#999] font-bold -rotate-90 whitespace-nowrap">영향도 (Impact)</span>
          </div>
          <div class="flex-1">
            <!-- 높음 라벨 -->
            <div class="flex justify-between text-[10px] text-[#999] mb-1">
              <span>높음</span>
              <span></span>
            </div>
            <!-- 매트릭스 그리드 -->
            <div class="grid grid-cols-2 gap-0 border border-[#eee]">
              <!-- 상단 좌 (Low Risk) -->
              <div class="border-r border-b border-[#eee] p-4 min-h-[120px] relative">
                <span class="text-[10px] text-[#999] absolute top-2 left-2">Low Risk</span>
                <div class="flex items-center justify-center h-full">
                  <div class="bg-[#C4929B] bg-opacity-20 border-2 border-[#C4929B] rounded-full w-20 h-20 flex flex-col items-center justify-center text-center">
                    <span class="text-[11px] font-bold text-[#1a1a1a]">행정처분</span>
                    <span class="text-[11px] font-bold text-[#1a1a1a]">/면허정지</span>
                  </div>
                </div>
              </div>
              <!-- 상단 우 (High Risk) -->
              <div class="border-b border-[#eee] p-4 min-h-[120px] relative bg-[#f5f5f5]">
                <span class="text-[10px] text-[#999] absolute top-2 left-2">High Risk</span>
                <div class="flex items-center justify-center h-full">
                  <div class="bg-[#C4929B] rounded-full w-24 h-24 flex flex-col items-center justify-center text-center">
                    <span class="text-[11px] font-bold text-white">의료사고</span>
                    <span class="text-[11px] font-bold text-white">/부작용</span>
                  </div>
                </div>
              </div>
              <!-- 하단 좌 (Low Risk) -->
              <div class="border-r border-[#eee] p-4 min-h-[120px] relative">
                <span class="text-[10px] text-[#999] absolute top-2 left-2">Low Risk</span>
                <div class="flex items-center justify-center h-full">
                  <div class="border-2 border-[#eee] rounded-full w-16 h-16 flex flex-col items-center justify-center text-center">
                    <span class="text-[10px] font-bold text-[#1a1a1a]">온라인</span>
                    <span class="text-[10px] font-bold text-[#1a1a1a]">악성 후기</span>
                  </div>
                </div>
              </div>
              <!-- 하단 우 (Medium Risk) -->
              <div class="p-4 min-h-[120px] relative">
                <span class="text-[10px] text-[#999] absolute top-2 left-2">Medium Risk</span>
                <div class="flex items-center justify-center h-full gap-3">
                  <div class="bg-[#C4929B] bg-opacity-40 border-2 border-[#C4929B] rounded-full w-[70px] h-[70px] flex flex-col items-center justify-center text-center">
                    <span class="text-[10px] font-bold text-[#1a1a1a]">세무 조사</span>
                  </div>
                  <div class="bg-[#C4929B] bg-opacity-30 border-2 border-[#C4929B] rounded-full w-[72px] h-[72px] flex flex-col items-center justify-center text-center">
                    <span class="text-[10px] font-bold text-[#1a1a1a]">환자</span>
                    <span class="text-[10px] font-bold text-[#1a1a1a]">컴플레인</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 낮음 라벨 -->
            <div class="flex justify-between text-[10px] text-[#999] mt-1">
              <span>낮음</span>
              <span>높음</span>
            </div>
          </div>
        </div>
        <!-- X축 라벨 -->
        <div class="text-center text-[10px] text-[#999] font-bold mt-1">발생 가능성 (Likelihood)</div>
        <!-- 범례 -->
        <div class="flex items-center justify-center gap-4 mt-4 text-[10px] text-[#999]">
          <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-[#C4929B] inline-block"></span> High</span>
          <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-[#C4929B] bg-opacity-40 border border-[#C4929B] inline-block"></span> Medium</span>
          <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full border-2 border-[#eee] inline-block"></span> Low</span>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">법적 리스크 최소화 체크리스트</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">모든 침습 시술 전 서면 동의서 수령</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 기록(부위·용량·배치·사진)을 매 시술 차트에 기록</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">before/after 사진 사용 시 서면 동의 별도 수령</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">모든 시술은 원장이 직접 수행 (스탭 위임 금지)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">비급여 수가 원내 고지 + 홈페이지 게시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">선불 패키지 환불 정책 사전 고지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료광고 집행 시 심의 필증 보관</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진료기록 5년 보존 체계 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">9</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 상황 대응 매뉴얼 원내 비치</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 5-3. 민원·신고 대응 매뉴얼 ───────────────────────── */
  {
    id: "s5-04",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5-3. 민원·신고 대응 매뉴얼</h2>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">면책:</strong> 이 매뉴얼은 참고용 실무 가이드다. 실제 신고·민원 발생 시에는 반드시 의료 전문 변호사와 먼저 상담한 후 행동해야 한다.
      </div>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">핵심 원칙 3가지: (1) 침착하게 기록 먼저 (2) 즉흥 대응 금지 (3) 전문가 상담 전에 합의 금지</blockquote>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">신고가 들어오는 3가지 경로</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">경로</th><th class="px-4 py-2 text-left font-medium">유형</th><th class="px-4 py-2 text-left font-medium">설명</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의협 고발</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과의사 미용시술에 대한 직역 갈등. 별도 신고센터 운영</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자·제3자 민원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부작용, 수납 불만, 광고 과장 등</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">심평원·보건소 자체 조사</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보험청구 이상, 수납 혼재, 광고 모니터링</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">신고 발생 시 골든타임 48시간</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 1 — 신고 인지 즉시</h4>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>모든 직원에게 "이 건에 관한 모든 문의는 원장에게만" 즉시 공지</li>
        <li>관련 시술 차트, 동의서, 수납 내역, 시술 전후 사진 취합 및 복사본 보관</li>
        <li>보건소·경찰에는 "자료 검토 후 연락드리겠습니다"로만 답변</li>
      </ul>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 2 — 2시간 이내</h4>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>의료 전문 변호사에게 연락</li>
        <li>상황 발생 경위를 시간순으로 메모 정리</li>
      </ul>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 3 — 24시간 이내</h4>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>변호사와 함께 대응 전략, 출두 일정 협의</li>
        <li>보건소에 "변호사와 함께 출두 예정" 통보</li>
      </ul>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 4 — 48시간 이내</h4>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>직원 대상 사건 경위 공유 (외부 발설 금지 강조)</li>
        <li>추가 증거자료 확보 (구매 영수증, 교육 이수증 등)</li>
        <li>변호사 조력 하에 출두 또는 서면 의견 제출 준비</li>
      </ul>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">절대 금지:</strong> 확인서(자인서) 즉석 서명 — 서명 = 자백. "변호사와 검토 후 서면으로 제출하겠습니다"로 일관.
      </div>

      <!-- V-506: 민원 대응 프로세스 -->
      <div class="bg-white border border-[#eee] rounded-lg p-6 mb-6">
        <h4 class="text-lg font-bold text-[#1a1a1a] text-center mb-6">민원 대응 프로세스</h4>
        <!-- 프로세스 플로우 -->
        <div class="flex flex-col items-center gap-0">
          <!-- Step 1 -->
          <div class="border-2 border-[#1a1a1a] rounded-lg px-6 py-3 text-center">
            <span class="text-sm font-bold text-[#1a1a1a]">신고/민원 접수</span>
          </div>
          <div class="w-0.5 h-4 bg-[#1a1a1a]"></div>
          <!-- Step 2 (강조) -->
          <div class="bg-[#C4929B] rounded-lg px-6 py-3 text-center">
            <span class="text-sm font-bold text-white">48시간 내 증거 확보</span>
          </div>
          <div class="text-[10px] text-[#999] mt-1 mb-1">차트 / 사진 / 동의서</div>
          <div class="w-0.5 h-4 bg-[#1a1a1a]"></div>
          <!-- Step 3 -->
          <div class="bg-[#1a1a1a] rounded-lg px-6 py-3 text-center">
            <span class="text-sm font-bold text-white">변호사 선임</span>
          </div>
          <div class="w-0.5 h-4 bg-[#1a1a1a]"></div>
          <!-- 분기 -->
          <div class="grid grid-cols-2 gap-4 w-full max-w-md">
            <!-- 행정 경로 -->
            <div class="flex flex-col items-center gap-0">
              <span class="text-[10px] text-[#999] italic mb-2">행정 경로</span>
              <div class="border-2 border-[#eee] rounded-lg px-4 py-2 text-center w-full">
                <span class="text-xs font-bold text-[#1a1a1a]">보건소 심사</span>
              </div>
              <div class="w-0.5 h-3 bg-[#eee]"></div>
              <div class="border-2 border-[#eee] rounded-lg px-4 py-2 text-center w-full">
                <span class="text-xs font-bold text-[#1a1a1a]">복지부 최종 판단</span>
              </div>
            </div>
            <!-- 형사 경로 -->
            <div class="flex flex-col items-center gap-0">
              <span class="text-[10px] text-[#999] italic mb-2">형사 경로</span>
              <div class="border-2 border-[#eee] rounded-lg px-4 py-2 text-center w-full">
                <span class="text-xs font-bold text-[#1a1a1a]">경찰 수사</span>
              </div>
              <div class="w-0.5 h-3 bg-[#eee]"></div>
              <div class="border-2 border-[#eee] rounded-lg px-4 py-2 text-center w-full">
                <span class="text-xs font-bold text-[#1a1a1a]">검찰 기소 판단</span>
              </div>
            </div>
          </div>
          <div class="w-0.5 h-4 bg-[#1a1a1a] mt-2"></div>
          <!-- 최종 -->
          <div class="bg-[#1a1a1a] rounded-lg px-6 py-3 text-center">
            <span class="text-sm font-bold text-white">합의/재발방지 계획 수립</span>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "s5-05",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">핵심 판례 — 대법원 2013도850 전원합의체</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">사건:</span> 치과의사가 환자의 눈가·미간에 보톡스 시술 → 검찰 기소 → 1심·2심 유죄 → 대법원 파기환송(무죄 취지)</p>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        "치아와 구강 조직과 직접적으로 관련되지 않은 안면부에 대한 의료행위라 하여 모두 치과 의료행위의 대상에서 배제된다고 보기 어렵다."<br/><br/>
        "환자의 안면부인 눈가와 미간에 보톡스를 시술한 행위는 치과의사에게 면허된 것 이외의 의료행위라고 볼 수 없으며, 그 시술이 미용 목적이라 하여 달리 볼 것은 아니다."
      </blockquote>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">실무 활용법</h4>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li><span class="font-bold text-[#1a1a1a]">보건소 조사 시:</span> 판결 요약문 인쇄 제출 + "적법 범위 내 시술" 주장</li>
        <li><span class="font-bold text-[#1a1a1a]">경찰 조사 시:</span> 진술서에 판례 번호(2013도850) 명기, 원문 첨부</li>
        <li><span class="font-bold text-[#1a1a1a]">복지부 의견서:</span> "대법원 전원합의체 판결로 적법성 확인됨" 명시</li>
      </ul>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">판례의 한계</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">반론</th><th class="px-4 py-2 text-left font-medium">내용</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">범위 제한</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이 판결은 눈가·미간 대상. 다른 안면 부위는 직접 해당되지 않는다는 주장 있음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면 외 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">승모근·종아리 등 안면 외 시술은 판례 적용 범위 밖. 고위험 영역</td></tr>
        </tbody>
      </table>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">실무 결론: 대법원 판결은 최강의 방어 수단이지만, 수사기관이 일단 고발하는 구조는 변하지 않는다. 사전 예방이 최선이다.</blockquote>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">보건소·경찰 조사 시 대응 스크립트</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">상황</th><th class="px-4 py-2 text-left font-medium">하면 안 되는 말</th><th class="px-4 py-2 text-left font-medium">이렇게 말해야</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보건소 출두 요청</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"네, 바로 가겠습니다"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"담당 변호사와 일정 조율 후 서면으로 출석 일정 알려드리겠습니다"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">확인서 쓰라고 할 때</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"네, 사실이니까 써드리겠습니다"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"변호사와 검토 후 서면으로 제출하겠습니다. 제출 기한 알려주시면 기한 내에 반드시 제출"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">왜 치과에서 보톡스?</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"요즘 다 하잖아요, 불법 아닙니다"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"대법원 2016년 7월 21일 선고 2013도850 전원합의체 판결에서 면허 범위 내 의료행위로 확인되었습니다"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 신고 협박</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"신고해봐요, 우리가 이겼어요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"불편함을 느끼셨다면 진심으로 죄송합니다. 어떤 부분이 불만족스러우셨는지 말씀해 주시면 최선을 다해 해결해 드리겠습니다"</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 5-4. 수익 시뮬레이션 ───────────────────────── */
  {
    id: "s5-06",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5-4. 시술별 수익 시뮬레이션</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술별 건당 수익 분석</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">보톡스 (교근 기준)</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">보수적</th><th class="px-4 py-2 text-left font-medium">중립</th><th class="px-4 py-2 text-left font-medium">공격적</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">15만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">30만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재료비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">건당 순수익</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">7.5만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">12.5만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">22.5만원</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">HIFU (전안면 1회)</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">보수적</th><th class="px-4 py-2 text-left font-medium">중립</th><th class="px-4 py-2 text-left font-medium">공격적</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">40만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">60만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">80만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">감가상각 배분</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10만원 (월10건)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5만원 (월20건)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2.5만원 (월40건)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">건당 순수익</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">23만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">48만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">70.5만원</td></tr>
        </tbody>
      </table>
      <!-- 시술별 건당 순수익 비교 차트 인포그래픽 -->
      <div style="background:#fff;border:1px solid #e8d5d9;border-radius:12px;padding:24px;margin-bottom:24px;">
        <div style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;background:#C4929B;color:#fff;font-size:12px;font-weight:600;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;">PROFIT ANALYSIS</span>
          <h4 style="font-size:18px;font-weight:700;color:#1a1a1a;margin:10px 0 4px;">시술별 건당 순수익 비교</h4>
          <p style="font-size:12px;color:#888;margin:0;">월 20건 기준 시나리오 — 재료비, 인건비, 감가상각 제외 후 순수익</p>
        </div>
        <!-- 바 차트 -->
        <div style="display:flex;flex-direction:column;gap:14px;max-width:560px;margin:0 auto;">
          <!-- 실리프팅 -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:90px;text-align:right;font-size:13px;font-weight:600;color:#2C2C2C;flex-shrink:0;">실리프팅</div>
            <div style="flex:1;background:#f5f5f5;border-radius:6px;height:36px;position:relative;overflow:hidden;">
              <div style="width:94%;height:100%;background:linear-gradient(90deg,#C4929B,#a8737e);border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;">
                <span style="font-size:13px;font-weight:700;color:#fff;">70.5만원</span>
              </div>
            </div>
          </div>
          <!-- 필러 -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:90px;text-align:right;font-size:13px;font-weight:600;color:#2C2C2C;flex-shrink:0;">필러</div>
            <div style="flex:1;background:#f5f5f5;border-radius:6px;height:36px;position:relative;overflow:hidden;">
              <div style="width:68%;height:100%;background:linear-gradient(90deg,#C4929B,#d4a9b1);border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;">
                <span style="font-size:13px;font-weight:700;color:#fff;">48만원</span>
              </div>
            </div>
          </div>
          <!-- 스킨부스터 -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:90px;text-align:right;font-size:13px;font-weight:600;color:#2C2C2C;flex-shrink:0;">스킨부스터</div>
            <div style="flex:1;background:#f5f5f5;border-radius:6px;height:36px;position:relative;overflow:hidden;">
              <div style="width:55%;height:100%;background:linear-gradient(90deg,#C4929B,#d4a9b1);border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;">
                <span style="font-size:13px;font-weight:700;color:#fff;">38만원</span>
              </div>
            </div>
          </div>
          <!-- 보톡스 -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:90px;text-align:right;font-size:13px;font-weight:600;color:#2C2C2C;flex-shrink:0;">보톡스</div>
            <div style="flex:1;background:#f5f5f5;border-radius:6px;height:36px;position:relative;overflow:hidden;">
              <div style="width:33%;height:100%;background:linear-gradient(90deg,#C4929B,#d4a9b1);border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;">
                <span style="font-size:13px;font-weight:700;color:#fff;">23만원</span>
              </div>
            </div>
          </div>
          <!-- 피코 레이저 -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:90px;text-align:right;font-size:13px;font-weight:600;color:#2C2C2C;flex-shrink:0;">피코 레이저</div>
            <div style="flex:1;background:#f5f5f5;border-radius:6px;height:36px;position:relative;overflow:hidden;">
              <div style="width:28%;height:100%;background:linear-gradient(90deg,#C4929B,#d4a9b1);border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;">
                <span style="font-size:13px;font-weight:700;color:#fff;">19만원</span>
              </div>
            </div>
          </div>
          <!-- LDM -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:90px;text-align:right;font-size:13px;font-weight:600;color:#2C2C2C;flex-shrink:0;">LDM</div>
            <div style="flex:1;background:#f5f5f5;border-radius:6px;height:36px;position:relative;overflow:hidden;">
              <div style="width:21%;height:100%;background:linear-gradient(90deg,#C4929B,#d4a9b1);border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;">
                <span style="font-size:13px;font-weight:700;color:#fff;">14만원</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 하단 인사이트 -->
        <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap;">
          <div style="flex:1;min-width:180px;background:#F5E6E8;border-radius:8px;padding:10px 14px;">
            <p style="font-size:11px;font-weight:700;color:#C4929B;margin:0 0 4px;">수익성 1위</p>
            <p style="font-size:12px;color:#2C2C2C;margin:0;line-height:1.4;">실리프팅은 건당 순수익 최고이나 시술 난이도와 장비 투자비가 높아 월 볼륨 확보가 관건</p>
          </div>
          <div style="flex:1;min-width:180px;background:#F5E6E8;border-radius:8px;padding:10px 14px;">
            <p style="font-size:11px;font-weight:700;color:#C4929B;margin:0 0 4px;">효율성 1위</p>
            <p style="font-size:12px;color:#2C2C2C;margin:0;line-height:1.4;">보톡스는 건당 수익은 낮지만 시술 시간 10분, 볼륨 스케일링에 가장 유리</p>
          </div>
          <div style="flex:1;min-width:180px;background:#F5E6E8;border-radius:8px;padding:10px 14px;">
            <p style="font-size:11px;font-weight:700;color:#C4929B;margin:0 0 4px;">포트폴리오 전략</p>
            <p style="font-size:12px;color:#2C2C2C;margin:0;line-height:1.4;">보톡스/필러로 유입 → 스킨부스터로 정기방문 → 실리프팅으로 객단가 극대화</p>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">월별 매출 시나리오 (중립)</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">시기</th><th class="px-4 py-2 text-left font-medium">월 시술 건수</th><th class="px-4 py-2 text-left font-medium">월 매출</th><th class="px-4 py-2 text-left font-medium">월 순수익 (45%)</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~3개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12~20건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">250~500만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">110~225만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~6개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20~35건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">500~900만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">225~405만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7~12개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">35~55건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">900~1,500만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">405~675만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12개월+</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">55~80건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,500~2,500만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">675~1,125만원</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 5-5~5-6. 세무·보험·SOP ───────────────────────── */
  {
    id: "s5-07",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5-5. 세무 실전 가이드</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용시술 과세/면세 구분</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">구분</th><th class="px-4 py-2 text-left font-medium">부가세</th><th class="px-4 py-2 text-left font-medium">예시</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보험급여 수입</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">면세</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스케일링, 충치치료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">비급여 — 치료 목적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">면세</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정, 임플란트(비급여)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#C4929B]">비급여 — 미용 목적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#C4929B]">과세 (VAT 10%)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스, 필러, HIFU, 스킨부스터</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">핵심:</strong> 같은 보톡스라도 이갈이 치료 목적이면 면세, 미용 목적이면 과세. 차트에 시술 목적을 명확히 기록해야 한다.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">과세전환 실무 체크리스트</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">카드 단말기 과세/면세 구분 설정 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">POS 미용 시술 항목 과세 설정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부가세 신고 스케줄 확인 (1월, 7월)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과·면세 겸업 사업자 전환 신고 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세무사에게 미용 시술 시작 사실 통보 + 자문</td></tr>
        </tbody>
      </table>

      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6 mt-8">5-6. 배상책임보험 &amp; 의료분쟁 현황</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술은 기존 치과 진료보다 부작용 민원 발생 확률이 높다. 배상책임보험은 최소한의 안전장치다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">TIP:</strong> 기존 배상책임보험이 미용 시술까지 보장 범위에 포함되는지 반드시 서면 확인할 것.
      </div>
      <p class="text-[#333] leading-relaxed mb-4">한국의료분쟁조정중재원 2024년 통계연보 기준: 치과 조정신청 <span class="font-bold text-[#1a1a1a]">1,222건 (전체 3위)</span>, 전체 조정성공률 67.2%, 평균 성립금액 1,005만원.</p>

      <!-- V-507: 배상책임보험 가입 체크리스트 -->
      <div class="bg-white border-2 border-[#C4929B] rounded-lg p-6 mb-6">
        <h4 class="text-lg font-bold text-[#1a1a1a] text-center mb-6">배상책임보험 가입 체크리스트</h4>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <span class="text-[#C4929B] font-bold text-lg mt-0.5">&#10003;</span>
            <span class="text-sm text-[#1a1a1a]">배상책임보험 가입 (필수)</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#C4929B] font-bold text-lg mt-0.5">&#10003;</span>
            <span class="text-sm text-[#1a1a1a]">미용시술 특약 추가 확인</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#C4929B] font-bold text-lg mt-0.5">&#10003;</span>
            <span class="text-sm text-[#1a1a1a]">보장 한도: 1건당 1억원 이상 권장</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#C4929B] font-bold text-lg mt-0.5">&#10003;</span>
            <span class="text-sm text-[#1a1a1a]">면책 조항 확인 (비허가 시술 제외 여부)</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#C4929B] font-bold text-lg mt-0.5">&#10003;</span>
            <span class="text-sm text-[#1a1a1a]">의료분쟁조정중재원 신청 절차 숙지</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#C4929B] font-bold text-lg mt-0.5">&#10003;</span>
            <span class="text-sm text-[#1a1a1a]">사고 발생 시 72시간 내 보험사 통보</span>
          </li>
        </ul>
        <p class="text-[10px] text-[#999] text-center mt-6">치과의사의 미용시술은 법적으로 허가되며, 배상책임보험은 필수 요건입니다.</p>
      </div>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 5-7~5-8. SOP & 통합 체크리스트 ───────────────────────── */
  {
    id: "s5-08",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5-7. 의료사고 대응 SOP</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">부작용 레벨별 대응</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">레벨 1 — 경미한 부작용 (예상 범위 내)</h4>
      <p class="text-[#333] leading-relaxed mb-4">예: 보톡스 후 경미한 멍, 필러 후 부종, HIFU 후 일시적 압통</p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>환자에게 예상 범위 내 반응임을 설명 → 차트 기록 → 사진 촬영</li>
        <li>D+3 경과 확인 전화 → D+7까지 미호전 시 내원 안내</li>
      </ul>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">레벨 2 — 중등도 부작용 (예상 범위 초과)</h4>
      <p class="text-[#333] leading-relaxed mb-4">예: 필러 후 과도한 부종·비대칭, 보톡스 후 눈꺼풀 처짐</p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>즉시 내원 안내 → 필요 시 즉각 처치 (히알루로니다제 등)</li>
        <li>원장이 직접 상황 설명 + 3일 간격 경과 관찰</li>
      </ul>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">레벨 3 — 중대 부작용 (응급 상황)</h4>
      <p class="text-[#333] leading-relaxed mb-4">예: 혈관 폐색 의심, 아나필락시스, 신경 손상 의심</p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>응급 처치 즉시 시행 → 상급 의료기관 이송 판단 → 119 연락</li>
        <li>모든 과정 시간대별 상세 기록 → 2시간 내 변호사 연락</li>
        <li>24시간 내 한국의료분쟁조정중재원(1670-2545) 사전 상담</li>
        <li>24시간 내 배상책임보험사 사고 접수</li>
      </ul>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">레벨 3 핵심:</strong> 환자 안전이 무조건 1순위. 법적 방어보다 의료 대응이 먼저다.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">응급 약품 비치 (필수)</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">비치 위치</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제 (필러 용해)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진료실 냉장고</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에피네프린 (아나필락시스)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 약품 박스</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">항히스타민제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 약품 박스</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">AED (자동 제세동기)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원내 접근 가능 위치</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── STEP 5 서머리 & 체크리스트 ───────────────────────── */
  {
    id: "s5-09",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 5 서머리</h2>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li><span class="font-bold text-[#1a1a1a]">미용 파트 수익은 반드시 분리 관리</span> — 월 손익 템플릿으로 매월 점검.</li>
        <li><span class="font-bold text-[#1a1a1a]">장비 감가상각을 빼야 진짜 수익</span> — HIFU 월 50~100만원, 피코 레이저 월 36~133만원.</li>
        <li><span class="font-bold text-[#1a1a1a]">BEP는 시뮬레이션으로 미리 확인</span> — 보수적/중립/공격적 시나리오를 세우고 3개월 단위로 조정.</li>
        <li><span class="font-bold text-[#1a1a1a]">미용 시술은 과세(VAT 10%)</span> — 과·면세 겸업 관리, 현금영수증 의무 발행, 수납 분리 필수.</li>
        <li><span class="font-bold text-[#1a1a1a]">법적 안전의 핵심은 기록</span> — 동의서·시술 기록·사진·고지 내용 완비.</li>
        <li><span class="font-bold text-[#1a1a1a]">신고 발생 시 골든타임 48시간</span> — 즉시 기록 취합 → 2시간 내 변호사 → 24시간 내 전략 수립.</li>
        <li><span class="font-bold text-[#1a1a1a]">확인서(자인서) 즉석 서명 절대 금지</span> — "변호사와 검토 후 서면 제출" 일관.</li>
        <li><span class="font-bold text-[#1a1a1a]">배상책임보험 가입 필수</span> — 미용 시술 보장 범위 서면 확인.</li>
        <li><span class="font-bold text-[#1a1a1a]">부작용 대응 SOP 사전 문서화</span> — 히알루로니다제·에피네프린 필수 비치.</li>
      </ul>

      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6 mt-8">STEP 5 체크리스트</h2>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술별 원가 구조(재료비·감가상각·마진율) 파악 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">장비별 월 감가상각비 계산 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 파트 월 손익 계산 템플릿 생성</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">BEP 시뮬레이션 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수가 설계 4단계 실행 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과세전환 실무 체크리스트 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">결제·수납 과세/면세 분리 설정 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">법적 Q&amp;A 핵심 항목 숙지 (특히 스탭 위임 금지)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">9</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법원 2013도850 판결 요약문 인쇄·비치</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료 전문 변호사 연락처 확보</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">11</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">배상책임보험 가입 + 미용 시술 보장 서면 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">48시간 행동 지침 전 직원 교육</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">13</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부작용 대응 SOP 문서화 + 응급 약품 비치 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">14</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리스크 관리 통합 체크리스트 월 1회 점검 시작</td></tr>
        </tbody>
      </table>
    `,
  },
];
