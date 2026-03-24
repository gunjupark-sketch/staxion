import { Section } from "./content-data";

export const step2Data: Section[] = [
  {
    id: "s2-intro",
    html: `
      <div class="text-center py-10 border-b border-[#eee] mb-10">
        <p class="text-[#C4929B] text-sm font-medium tracking-[0.3em] mb-4">S T E P &nbsp; 2</p>
        <h1 class="text-3xl font-bold text-[#1a1a1a] mb-3">운영 시스템</h1>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">이 STEP에서는 치과 미용 시술이 일상 진료의 일부로 작동하기 위한 운영 시스템 전체를 다룬다. 시술 기술은 교육으로 해결되지만, 운영 구조가 안 잡히면 원장이 모든 걸 혼자 떠안는 구조가 되고, 3개월 안에 지쳐서 포기한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술 도입을 결정했다면, 다음 질문은 "매일 돌아가는 치과 진료에 이걸 어떻게 녹이느냐"다. 이 STEP은 시술 표준 운영 절차(SOP)부터 세무·수납, 응급 대응, 재방문 관리까지 — 운영의 모든 것을 다룬다.</p>
    `,
  },
  {
    id: "s2-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2-1. 시술 표준 운영 절차 (SOP)</h2>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">한 줄 요약: 원장 머릿속에만 있는 시술 흐름을 스탭도 볼 수 있게 꺼내 놓는 작업이다.</span></p>
      <p class="text-[#333] leading-relaxed mb-4">SOP(Standard Operating Procedure, 표준 운영 절차)는 특정 업무를 누가 해도 같은 수준으로 수행할 수 있도록 단계별로 명문화한 지침이다. 원장 머릿속에만 있는 프로세스를 꺼내서 스탭과 공유 가능한 형태로 만드는 작업이다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">SOP가 없으면 생기는 일</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">문제 상황</th><th class="px-4 py-2 text-left font-medium">결과</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장 부재 시 스탭이 준비 방법을 모름</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 지연·환자 불만</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자마다 시술 전 안내가 다름</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">신뢰도 저하·컴플레인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부작용 발생 시 즉흥 대응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">법적 리스크 증가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">새 스탭 교육을 매번 처음부터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장 시간 낭비·교육 품질 불균일</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 종류가 늘어남</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">혼선·누락 기하급수적 증가</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s2-01-derma",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">피부과·성형외과 SOP — 기준점</h3>
      <p class="text-[#333] leading-relaxed mb-4">치과 SOP를 설계하려면, 먼저 미용 전문 의원의 운영 구조를 이해해야 한다. 아래는 피부과·성형외과의 일반적인 보톡스·필러 시술 흐름이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1. 예약 접수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코디네이터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">온라인/전화 예약. 시술 사전 파악. 예약 확인 문자 발송</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2. 내원 접수 & 상담</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코디네이터/상담실장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">니즈 파악, 시술 부위·제품·수가 상담. 결제까지 코디 주도</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3. 시술 전 준비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">간호사/피부관리사</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 도포(30~40분), 사전 사진 촬영, 동의서 안내</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4. 원장 상담 & 디자인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 부위·용량·방법 최종 확정. 디자인 마킹</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5. 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스·필러 주입. 전담 간호사 어시스트</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6. 시술 후 처치</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">간호사</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉찜질, 귀가 주의사항 안내, 처방약 전달</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7. 사후 관리 연락</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코디네이터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~3일 내 상태 확인. 다음 예약 유도</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 많은 미용 의원에서 비의료인 코디가 시술 부위·제품·용량까지 결정하고 결제까지 받은 후 시술 직전에야 원장을 만나는 구조가 일반화되어 있다. 이는 의료법상 문제 소지가 있다.</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">피부과 SOP의 핵심 전제:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>전담 코디네이터가 상담·예약·사후 연락 전담</li>
        <li>전담 간호사가 준비·어시스트·귀가 안내</li>
        <li>원장은 "상담 확정 + 시술"만</li>
        <li>미용 전용 공간이 분리</li>
        <li>예약 대부분이 미용 목적</li>
      </ul>
    `,
  },
  {
    id: "s2-01-dental-diff",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">치과는 구조 자체가 다르다</h3>
      <p class="text-[#333] leading-relaxed mb-4">피부과 SOP를 그대로 가져오면 안 되는 이유가 여기 있다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">구분</th><th class="px-4 py-2 text-left font-medium">피부과·성형외과</th><th class="px-4 py-2 text-left font-medium">치과 (미용 시술 도입 초기)</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주 방문 목적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 목적으로만 옴</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 치료 + 미용 시술 병행</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">공간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 전용 진료실</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 진료실 공유 또는 별도 공간 없음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코디네이터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 전담 코디 1명 이상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">데스크 직원이 겸임</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">간호 인력</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 전담 간호사</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 어시스트가 겸임</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장 역할</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">상담 확정 + 시술만</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">상담 + 시술 + 사후 설명 전부</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">예약 동선</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 전용 예약 시스템</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 예약과 동일 시스템에 혼재</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 인식</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 받으러 왔다고 명확히 인지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치과에서 미용을 받는다"는 첫 경험</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">피부과 SOP는 전담 인력과 전용 공간이 갖춰진 구조를 전제한다. 치과에서 그대로 따라 하면 원장 혼자 모든 역할을 떠안는 구조가 된다.</p>
    `,
  },
  {
    id: "s2-01-sop7",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">치과 맞춤 SOP — 7단계</h3>
      <p class="text-[#333] leading-relaxed mb-4">핵심 원칙 두 가지: <span class="font-bold text-[#1a1a1a]">원장이 반드시 해야 하는 것</span>과 <span class="font-bold text-[#1a1a1a]">스탭이 할 수 있는 것</span>을 명확히 분리한다.</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">역할 정의</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">역할</th><th class="px-4 py-2 text-left font-medium">정의</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료 판단, 시술, 부작용 대응 — 법적으로 위임 불가한 모든 행위</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 (데스크)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">예약 접수, 사전 안내 문자, 수납 — 행정 영역</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 (체어사이드)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재료 준비, 마취 크림 도포 보조, 시술 공간 세팅, 사진 촬영 — 비의료적 준비 행위</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 의료기기(HIFU·RF·레이저 등)는 스탭 운영 불가. 마취 크림 도포, 사전 사진 촬영, 동의서 서명 안내는 스탭 가능.</p>
      </div>
    `,
  },
  {
    id: "s2-01-sop-steps",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 1. 예약 접수</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 (데스크)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">예약 유형 구분: 치과 치료 / 미용 시술 / 동시 예약 3가지로 분리 관리. 미용 시술 예약 시 예약 확인 문자 + 사전 주의사항 발송. 금기 사항 사전 체크리스트 발송. 동시 예약 시 치과 치료 후 미용 순서로 고정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이 단계에서 원장 개입 없음</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 2. 내원 접수 & 사전 확인</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 (데스크)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">내원 확인 및 접수. 사전 금기 체크리스트 확인. 동의서 양식 전달 및 자필 서명 안내. 신환이면 미용 시술 설명 자료 대기 중 제공</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이 단계에서 원장 개입 없음</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">TIP:</span> 치과 기존 초진 문진표에 "미용 시술 관련 금기" 항목을 추가하면 별도 문서 없이 한 번에 처리 가능. 임신 여부, 면역억제제 복용, 헤르페스 병력, 혈액희석제 복용이 핵심 항목.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 3. 시술 준비 (원장 대면 전)</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 (체어사이드)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 공간 세팅 (진료 의자 각도, 조명, 재료 트레이). 마취 크림 도포 (30~40분 전). 시술 전 표준 사진 촬영 (정면·좌45도·우45도 3장). 소모품 준비: 냉장 보관 상태 확인, 주사기·니트릴 글러브 세팅</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 도포 지시 및 최종 확인</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의 (실리프팅 예외):</span> 실리프팅은 마취 크림이 아닌 국소마취 주사를 사용 — 원장이 직접 마취 시행. 스탭이 마취 주사를 놓는 행위는 불가.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 4. 원장 상담 & 디자인 확정</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 니즈 재확인. 금기 사항 직접 최종 확인. 시술 부위·용량·방법 직접 결정 및 설명. 예상 결과·지속 기간·부작용 가능성 설명. 마킹 표시. 동의서 내용 구두 확인 후 서명 최종 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">동의서 보관, 차트 기록 준비</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">치과 특이점:</span> 피부과에서는 코디가 수가·시술 내용까지 결정하는 구조가 많지만, 치과에서는 원장이 처음부터 상담에 들어가야 한다. 시술 결정권은 반드시 원장에게 있어야 하며, 이 단계를 스탭에게 위임하면 법적 리스크가 생긴다.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 5. 시술</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">손 소독 및 장갑 착용. 시술 부위 소독. 시술 시행. 시술 중 환자 상태 모니터링</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 (체어사이드)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재료 전달 어시스트. 시술 중 환자 불안 완화 응대</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 6. 시술 후 처치 & 귀가 안내</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 직후 상태 확인 (출혈·부종·혈관 반응). 결과 및 주의사항 구두 설명</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉찜질 적용 (5~10분). 귀가 주의사항 인쇄물 전달 — 시술별 맞춤 버전. 처방약 전달 및 복용 안내. 수납 처리 및 다음 예약 안내</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">STEP 7. 사후 관리 연락</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">담당</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 (데스크)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 후 1~2일 내 카카오톡/문자로 상태 확인 메시지 발송. 표준 문구 템플릿 활용. 이상 반응 보고 시 즉시 원장에게 보고</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이상 반응 보고 접수 시 직접 환자와 통화 또는 내원 지시</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s2-01-checkcard",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술별 체크카드</h3>
      <p class="text-[#333] leading-relaxed mb-4">공통 7단계 위에 시술별로 달라지는 항목만 정리한다. 스탭이 시술 전 꺼내 확인하는 "시술 체크카드" 역할이다.</p>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">보톡스</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 20~30분, 또는 무마취 가능</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉장 보관</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~8 degrees C 필수. 희석 후 제품별 허가사항에 따라 사용</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5~15분</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 주의사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4시간 눕지 않기, 시술 부위 마사지 금지, 당일 사우나·음주 금지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 발현</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~7일 후. 즉시 효과 없어도 정상임을 사전 안내 필수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 준비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">희석용 생리식염수·주사기·알코올 스왑·거즈 세팅</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금기 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임신·수유, 중증 근무력증, 아미노글리코시드계 항생제 복용 중</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">필러</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 30~40분. 리도카인 함유 필러 사용 시 크림만으로 충분</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉장 보관</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~8 degrees C. 시술 직전 꺼내 실온 5분 후 사용 (점도 안정)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10~30분</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 주의사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~3주간 시술 부위 압박 금지. 72시간 격한 운동·사우나 금지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 준비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 제품 확인, 캐뉼라 또는 바늘, 마킹 펜, 알코올 스왑, 거즈</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 재료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제 반드시 상비 — 혈관 폐색 응급 대응용</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금기 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임신·수유, 면역억제제 복용, 해당 부위 이전 영구 필러 시술 이력</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">스킨부스터</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 30분. 또는 국소마취 병행</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉장 보관</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~8 degrees C. 제품별 보관 조건 다름</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">15~30분</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 주의사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 당일 세안·화장 시 자극 최소화. 강한 마사지 금지 1주일</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 준비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제품 준비, 미세 바늘 또는 캐뉼라, 알코올 스왑, 거즈</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재방문 안내</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~8회 코스 기본 — 귀가 시 다음 예약 세팅 필수</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">실리프팅</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 + 국소마취 주사 병행 — 원장 직접 시행</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20~60분 (실 개수·부위에 따라)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 후 처치</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 부위 소독 드레싱. 냉찜질 20분. 붓기·멍 사전 안내 필수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 주의사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1주간 격렬한 표정 금지, 입 크게 벌리기 제한, 마사지 금지. 2~4주간 수면 시 반듯하게</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 준비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실 종류 확인, 캐뉼라·바늘·소독 세트. 마취 준비물 원장 지시에 따라</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">추적 관찰</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1주·4주 후 경과 확인 예약 필수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금기 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임신·수유, 혈액희석제 복용, 켈로이드 체질, 해당 부위 이전 영구 필러</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s2-01-prohibited",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스탭 운영 금지 항목 — 반드시 원장이 해야 하는 것</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">구분</th><th class="px-4 py-2 text-left font-medium">행위</th><th class="px-4 py-2 text-left font-medium">이유</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU·RF·레이저 장비 직접 조작 및 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에너지 기반 의료기기 — 의료법상 의료행위에 해당. 위반 시 5년 이하 징역 또는 5천만원 이하 벌금</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스·필러·스킨부스터·실리프팅 주사 행위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료 행위 — 면허 없는 자의 시술은 의료법 위반</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 부위·용량·제품 결정 (상담 주도)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료 판단 영역 — 스탭이 결정 주도하면 법적 분쟁 원인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">국소마취 주사 시행</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주사 행위 자체가 의료 행위</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부작용·이상 반응 발생 시 독단 대응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 원장에게 보고 후 원장 지시에 따라서만 행동</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-green-600 font-bold">O</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 도포 (원장 지시 하에)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">비의료적 준비 행위</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-green-600 font-bold">O</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">표준 사전 사진 촬영</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기록 보조 행위</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-green-600 font-bold">O</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 주의사항 인쇄물 전달 및 설명</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장이 이미 설명한 내용 전달</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-green-600 font-bold">O</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사후 관리 문자·카카오톡 발송</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">행정 연락 (이상 반응 보고는 즉시 원장 에스컬레이션)</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">실전 팁:</span> 이 표를 출력해서 스탭이 항상 볼 수 있는 곳에 붙여두는 것만으로도 법적 리스크의 절반을 줄일 수 있다.</p>
      </div>
      <div style="background: linear-gradient(135deg, #fdf6f7 0%, #f5e6e8 100%); border-radius: 12px; padding: 32px 24px; margin-bottom: 24px; border: 1px solid #e8d0d4;">
        <div style="text-align: center; margin-bottom: 28px;">
          <span style="display: inline-block; background: #C4929B; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px; letter-spacing: 1px;">WORKFLOW</span>
          <div style="font-size: 20px; font-weight: 800; color: #2C2C2C; margin-top: 8px;">치과 미용 시술 SOP 7단계</div>
          <div style="font-size: 13px; color: #888; margin-top: 4px;">각 단계별 담당자 역할이 명확히 분리되어야 안전하고 효율적인 시술이 가능합니다</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0; align-items: center;">
          <div style="display: flex; align-items: center; gap: 16px; background: #fff; border-radius: 12px; padding: 16px 20px; width: 100%; max-width: 520px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border-left: 4px solid #C4929B;">
            <div style="background: #C4929B; color: #fff; font-size: 14px; font-weight: 800; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
            <div style="flex: 1;"><div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">상담 접수 및 니즈 파악</div><div style="font-size: 12px; color: #777; margin-top: 2px;">환자 요구사항 청취, 기본 정보 수집, 기대치 확인</div></div>
            <span style="background: #2C2C2C; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">스탭</span>
          </div>
          <div style="width: 2px; height: 14px; background: #d4a8b0;"></div>
          <div style="display: flex; align-items: center; gap: 16px; background: #fff; border-radius: 12px; padding: 16px 20px; width: 100%; max-width: 520px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border-left: 4px solid #C4929B;">
            <div style="background: #C4929B; color: #fff; font-size: 14px; font-weight: 800; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</div>
            <div style="flex: 1;"><div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">진단 및 시술 계획 수립</div><div style="font-size: 12px; color: #777; margin-top: 2px;">구강 내외 검진, 사진 촬영, 시술 범위 결정</div></div>
            <span style="background: #C4929B; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">원장</span>
          </div>
          <div style="width: 2px; height: 14px; background: #d4a8b0;"></div>
          <div style="display: flex; align-items: center; gap: 16px; background: #fff; border-radius: 12px; padding: 16px 20px; width: 100%; max-width: 520px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border-left: 4px solid #C4929B;">
            <div style="background: #C4929B; color: #fff; font-size: 14px; font-weight: 800; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</div>
            <div style="flex: 1;"><div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">동의서 작성 및 설명</div><div style="font-size: 12px; color: #777; margin-top: 2px;">시술 내용, 위험, 대안 설명 후 서면 동의 확보</div></div>
            <div style="display: flex; gap: 4px;"><span style="background: #C4929B; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">원장</span><span style="background: #2C2C2C; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">스탭</span></div>
          </div>
          <div style="width: 2px; height: 14px; background: #d4a8b0;"></div>
          <div style="display: flex; align-items: center; gap: 16px; background: #fff; border-radius: 12px; padding: 16px 20px; width: 100%; max-width: 520px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border-left: 4px solid #C4929B;">
            <div style="background: #C4929B; color: #fff; font-size: 14px; font-weight: 800; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">4</div>
            <div style="flex: 1;"><div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">시술 전 준비</div><div style="font-size: 12px; color: #777; margin-top: 2px;">마취 크림 도포, 장비 및 재료 세팅, 사전 사진 기록</div></div>
            <span style="background: #2C2C2C; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">스탭</span>
          </div>
          <div style="width: 2px; height: 14px; background: #d4a8b0;"></div>
          <div style="display: flex; align-items: center; gap: 16px; background: #fff; border-radius: 12px; padding: 16px 20px; width: 100%; max-width: 520px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border-left: 4px solid #C4929B;">
            <div style="background: #C4929B; color: #fff; font-size: 14px; font-weight: 800; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">5</div>
            <div style="flex: 1;"><div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">시술 수행</div><div style="font-size: 12px; color: #777; margin-top: 2px;">보톡스, 필러, 스케일링 등 계획된 시술 진행</div></div>
            <div style="display: flex; gap: 4px;"><span style="background: #C4929B; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">원장</span><span style="background: #2C2C2C; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">스탭</span></div>
          </div>
          <div style="width: 2px; height: 14px; background: #d4a8b0;"></div>
          <div style="display: flex; align-items: center; gap: 16px; background: #fff; border-radius: 12px; padding: 16px 20px; width: 100%; max-width: 520px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border-left: 4px solid #C4929B;">
            <div style="background: #C4929B; color: #fff; font-size: 14px; font-weight: 800; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">6</div>
            <div style="flex: 1;"><div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">시술 후 안내</div><div style="font-size: 12px; color: #777; margin-top: 2px;">주의사항 전달, 사후 사진 촬영, 다음 방문 예약</div></div>
            <div style="display: flex; gap: 4px;"><span style="background: #C4929B; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">원장</span><span style="background: #2C2C2C; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">스탭</span></div>
          </div>
          <div style="width: 2px; height: 14px; background: #d4a8b0;"></div>
          <div style="display: flex; align-items: center; gap: 16px; background: #fff; border-radius: 12px; padding: 16px 20px; width: 100%; max-width: 520px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border-left: 4px solid #C4929B;">
            <div style="background: #C4929B; color: #fff; font-size: 14px; font-weight: 800; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">7</div>
            <div style="flex: 1;"><div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">경과 관찰 및 팔로업</div><div style="font-size: 12px; color: #777; margin-top: 2px;">48시간 내 컨디션 확인 연락, 경과 기록, 재시술 일정 조율</div></div>
            <span style="background: #2C2C2C; color: #fff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 6px;">스탭</span>
          </div>
        </div>
        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #e8d0d4;">
          <div style="display: flex; align-items: center; gap: 6px;"><span style="background: #C4929B; width: 12px; height: 12px; border-radius: 4px; display: inline-block;"></span><span style="font-size: 12px; color: #666;">원장 담당</span></div>
          <div style="display: flex; align-items: center; gap: 6px;"><span style="background: #2C2C2C; width: 12px; height: 12px; border-radius: 4px; display: inline-block;"></span><span style="font-size: 12px; color: #666;">스탭 담당</span></div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-[#eee] rounded-lg overflow-hidden">
          <div class="bg-[#1a1a1a] px-4 py-3"><span class="text-white font-bold text-sm">보톡스 체크카드</span></div>
          <div class="p-4 bg-white text-sm text-[#333]">
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">준비</span><span>마취 크림 도포 (20~30분 전) / 사전 사진 촬영</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">시술</span><span>원장 전담 — 부위·용량 결정 + 주사</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">후처치</span><span>4시간 눕지 않기 / 당일 음주·사우나 금지 안내</span></div>
            <div class="flex items-start gap-2"><span class="text-[#C4929B] font-bold shrink-0">재방문</span><span>3~4개월 주기 / 2주 후 효과 확인 연락</span></div>
          </div>
        </div>
        <div class="border border-[#eee] rounded-lg overflow-hidden">
          <div class="bg-[#1a1a1a] px-4 py-3"><span class="text-white font-bold text-sm">필러 체크카드</span></div>
          <div class="p-4 bg-white text-sm text-[#333]">
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">준비</span><span>마취 크림 도포 / 알레르기 병력 확인 / 사전 사진</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">시술</span><span>원장 전담 — 부위·제품·용량 결정 + 주입</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">후처치</span><span>압박 금지 / 48시간 격한 운동 자제 / 부종 안내</span></div>
            <div class="flex items-start gap-2"><span class="text-[#C4929B] font-bold shrink-0">재방문</span><span>12~18개월 주기 / 1~3일 후 상태 확인 연락</span></div>
          </div>
        </div>
        <div class="border border-[#eee] rounded-lg overflow-hidden">
          <div class="bg-[#1a1a1a] px-4 py-3"><span class="text-white font-bold text-sm">스킨부스터 체크카드</span></div>
          <div class="p-4 bg-white text-sm text-[#333]">
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">준비</span><span>마취 크림 도포 / 피부 상태 기록 / 사전 사진</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">시술</span><span>원장 전담 — 부위 선정 + 주입 (전안면 다점 주입)</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">후처치</span><span>당일 세안 자제 / 자외선 차단 필수 안내</span></div>
            <div class="flex items-start gap-2"><span class="text-[#C4929B] font-bold shrink-0">재방문</span><span>2~4주 간격 6회 코스 / 매회 예약 세팅</span></div>
          </div>
        </div>
        <div class="border border-[#eee] rounded-lg overflow-hidden">
          <div class="bg-[#1a1a1a] px-4 py-3"><span class="text-white font-bold text-sm">실리프팅 체크카드</span></div>
          <div class="p-4 bg-white text-sm text-[#333]">
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">준비</span><span>마취 크림 도포 (30~40분) / 사전 사진 / 동의서</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">시술</span><span>원장 전담 — 실 종류·방향·개수 결정 + 삽입</span></div>
            <div class="flex items-start gap-2 mb-2"><span class="text-[#C4929B] font-bold shrink-0">후처치</span><span>48시간 큰 입 벌리기 자제 / 감염 징후 안내 / 소염진통제</span></div>
            <div class="flex items-start gap-2"><span class="text-[#C4929B] font-bold shrink-0">재방문</span><span>12~24개월 주기 / 48시간 후 경과 확인 연락</span></div>
          </div>
        </div>
      </div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s2-02",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2-2. 미용 적응증 발견 매뉴얼</h2>
      <p class="text-[#333] leading-relaxed mb-4">치과 원장은 진료 중 환자의 얼굴을 가장 가까이서, 가장 오래 본다. 이 관찰이 미용 시술의 출발점이다. 이 매뉴얼의 원칙은 하나: <span class="font-bold text-[#1a1a1a]">권유가 아니라 발견</span>이다. "이거 하시겠어요?"가 아니라 "진료하다 보니 이 부분이 보여서요" — 이 톤 하나가 환자 반응을 완전히 바꾼다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">사용 방법</h3>
      <p class="text-[#333] leading-relaxed mb-4">이 매뉴얼은 진료과목 기준이 아니라 <span class="font-bold text-[#1a1a1a]">얼굴 부위 기준</span>으로 구성돼 있다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">번호</th><th class="px-4 py-2 text-left font-medium">부위</th><th class="px-4 py-2 text-left font-medium">주요 연결 시술</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마·미간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">눈가·눈 밑</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스·눈물고랑 필러</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">볼·중안면</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">볼 필러·실리프팅·HIFU</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술·인중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술 필러</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">잇몸·스마일라인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">거미 보톡스·잇몸성형</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">턱·하안면·교근</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사각턱 보톡스·턱끝 필러</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전체 윤곽·피부</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU·RF·스킨부스터·LDM</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진료 중 발견 — 구조·기능 이상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스·이갈이 대응</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s2-02-areas",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">부위별 관찰 &rarr; 시술 연결</h3>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">1. 이마·미간</h4>
      <p class="text-[#333] leading-relaxed mb-4">가장 먼저 눈에 들어오는 부위. 표정 습관이 그대로 새겨진다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">이마 보톡스 적응증:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>이마에 가로 주름이 선명하게 패여 있음 — 안정 시에도 줄이 남아 있는 상태</li>
        <li>앞으로 고개를 숙이거나 위를 올려다볼 때 이마 주름이 확연히 드러남</li>
        <li>사진 촬영 시 이마 주름이 두드러지게 포착됨</li>
      </ul>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">멘트 예시: "이마 쪽에 주름이 꽤 자리를 잡으셨네요. 표정 습관 때문인 경우가 대부분이에요. 보톡스로 간단히 정리되거든요, 관심 있으세요?"</p>
      </div>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 이마 보톡스는 눈썹 위치에 영향을 줄 수 있어 주입 디자인이 중요. 눈썹이 처질 위험이 있어 하부 이마 주입은 보수적으로.</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">미간 보톡스 적응증:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>미간에 세로 주름('11자 주름')이 안정 시에도 또렷하게 남아 있음</li>
        <li>찡그리는 표정이 습관적 — 항상 화난 인상이나 피곤해 보이는 인상</li>
      </ul>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">멘트 예시: "미간 주름이 좀 깊으시네요. 이게 표정이랑 상관없이 항상 화나 보이거나 피곤해 보이는 인상을 줄 수 있거든요. 보톡스로 잡으면 인상 자체가 많이 부드러워져요."</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">2. 눈가·눈 밑</h4>
      <p class="text-[#333] leading-relaxed mb-4">나이 들어 보이는 느낌의 절반은 눈 주변에서 온다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">눈가 보톡스 (까마귀발) 적응증:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>눈 바깥쪽 부채꼴 주름이 선명 — 특히 웃을 때 확연</li>
        <li>안정 시에도 남아 있어 피곤해 보이는 인상</li>
      </ul>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">멘트 예시: "웃으실 때 눈가 주름이 꽤 생기시네요. 보톡스로 많이들 잡으세요. 웃는 표정은 그대로 살리면서 주름만 부드럽게 할 수 있어요."</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">눈물고랑 필러 적응증:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>눈 아래 눈물고랑이 깊게 패여 있음</li>
        <li>다크서클이 색소 문제가 아니라 볼륨 감소로 그늘이 생기는 패턴</li>
        <li>눈 아래 지방 돌출 + 바로 아래 꺼지는 '고저차' 구조</li>
      </ul>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 눈물고랑 필러는 혈관 위험 구역. 반드시 소량·저점도 필러·캐뉼라 사용. 숙련도 충분한 경우에만 진행.</p>
      </div>
    `,
  },
  {
    id: "s2-02-areas2",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">3. 볼·중안면</h4>
      <p class="text-[#333] leading-relaxed mb-4">볼륨이 빠지면 전체가 처져 보인다. 가장 노화 변화가 크게 오는 부위.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">볼·중안면 필러 적응증:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>볼이 꺼지고 골격이 두드러져 보임 — 수척해 보이는 인상</li>
        <li>임플란트·보철 후 하안부는 올라왔는데 중안부·볼이 상대적으로 꺼져 불균형</li>
        <li>광대 아래가 꺼져 피부가 처진 것처럼 보이는 상태</li>
      </ul>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">멘트 예시: "임플란트 하고 나서 치아 쪽은 올라왔는데 여기 볼 부분이 상대적으로 꺼져 보이는 경우가 있어요. 필러로 볼륨 넣어드리면 균형이 잡혀요."</p>
      </div>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 팔자 주름은 깊이에 따라 접근이 다름. 얕은 경우 필러, 피부 처짐 동반 시 실리프팅·HIFU가 더 적합. 혼용도 가능.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">4. 입술·인중</h4>
      <p class="text-[#333] leading-relaxed mb-4">치과 진료 결과가 직접적으로 영향을 주는 부위.</p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>교정 완료 후 치아 위치 변화로 입술이 얇아 보이거나 들어가 보임</li>
        <li>전악 보철·임플란트 후 수직고경 변화로 입술 지지 구조 변화</li>
        <li>인중이 길어 보이거나 입술 위 공간이 과하게 노출</li>
      </ul>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">5. 잇몸·스마일라인</h4>
      <p class="text-[#333] leading-relaxed mb-4">치과 원장이 가장 자연스럽게 발견할 수 있는 부위.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">거미 보톡스 적응증:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>웃을 때 잇몸이 4mm 이상 노출</li>
        <li>심미보철 후 잇몸 라인은 개선됐으나 윗입술 움직임이 과도</li>
        <li>잇몸 라인이 좌우 비대칭</li>
      </ul>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 잇몸 보톡스는 양측 균형이 핵심. 한쪽만 과하면 역비대칭 발생 가능. 소량·분할 접근 원칙.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">6. 턱·하안면·교근</h4>
      <p class="text-[#333] leading-relaxed mb-4">치과에서 가장 자주 마주치는 구조. 기능과 미용이 동시에 연결되는 부위.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">사각턱 보톡스 적응증:</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>교근 비대가 육안으로 뚜렷하게 확인 — 턱각 부분이 불룩</li>
        <li>초진 구강 검사 시 양측 교근 촉진에서 근육 과발달</li>
        <li>교합력이 강한 환자 — 치아 마모 패턴이 뚜렷하거나 크라운 파절 반복</li>
      </ul>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">이갈이 &rarr; 교근 보톡스 (기능+미용):</span></p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>이갈이 흔적 — 치아 교합면 마모, 치경부 파절, 레진 반복 탈락</li>
        <li>야간 이악물기로 인한 교근 피로 호소 — "아침에 턱이 뻐근해요"</li>
        <li>나이트 가드 처방 논의 중인 환자</li>
      </ul>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 턱끝 필러는 정중앙 혈관 해부 숙지 필수. 뼈막 위 주입이 원칙. 과교정 시 부자연스러운 결과.</p>
      </div>
    `,
  },
  {
    id: "s2-02-areas3",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">7. 전체 윤곽·피부</h4>
      <p class="text-[#333] leading-relaxed mb-4">부위별 문제가 아니라 전반적인 노화·탄력 저하를 보이는 경우.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">HIFU 적응증:</span> 전반적으로 피부 탄력이 떨어져 처진 느낌. 얼굴 윤곽이 흘러내린 구조.</p>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> HIFU는 의사 직접 시술 필수 (3등급 의료기기). 피부 상태·지방층 두께에 따라 에너지 설정 조절.</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">스킨부스터·LDM 적응증:</span> 피부가 칙칙하고 윤기 없음. 잔주름이 전반적. 잇몸 상태를 보면 전신 수분 상태도 부족해 보이는 경우.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">RF 적응증:</span> 피부 탄력 저하 + 잔주름 + 모공 확장. 중등도 처짐.</p>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> RF도 3등급 의료기기. 의사 직접 시술 원칙. 피부 표면 화상 방지 위해 핸드피스 이동 속도 일정 유지.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">8. 진료 중 발견 — 구조·기능 이상</h4>
      <p class="text-[#333] leading-relaxed mb-4">구강 기능 문제가 미용 시술 적응증과 겹치는 케이스. <span class="font-bold text-[#1a1a1a]">기능 + 미용 동시 제안이 가능한 가장 강력한 포인트.</span></p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">진료 중 발견</th><th class="px-4 py-2 text-left font-medium">확인 방법</th><th class="px-4 py-2 text-left font-medium">연결 시술</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이갈이 — 치아 마모·파절</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교합면 마모 패턴, 치경부 파절, 레진 반복 탈락</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 비대 — 저작력 과강</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 촉진, 하악각 X-ray, 구강 내 협점막 압흔</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사각턱 보톡스</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">볼 안쪽 점막 물어뜯기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">협점막 흰색 선·자국 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">거미 스마일 — 잇몸 노출</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">웃음 시 잇몸 4mm 이상 노출</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">거미 보톡스</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정 완료 — 측모 변화</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정 전후 사진 비교</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술·턱끝 필러</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임플란트·보철 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 전후 안모 비교, 중안면 볼륨 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">볼·중안면 필러</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">심미보철 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스마일 라인·잇몸 노출 재확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">거미 보톡스·잇몸 성형</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">턱관절(TMJ) 치료 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 과긴장, 개구 제한</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s2-02-patterns",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">원장이 반드시 피해야 할 패턴</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">번호</th><th class="px-4 py-2 text-left font-medium">패턴</th><th class="px-4 py-2 text-left font-medium">왜 문제인가</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"이거 하시겠어요?" — 결정 강요형</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아직 생각할 여유 없는데 선택지를 주면 거부감</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 직후 바로 미용 제안</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 치료 결과 확인 중이거나 불편한 상태</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">여러 시술을 한꺼번에 나열</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"보톡스도 되고 필러도 되고" — 과부하</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가격을 먼저 언급</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가격이 먼저 나오면 영업으로 받아들여짐</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">외모 평가처럼 들리는 멘트</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"주름이 많으시네요" — 상처가 됨. 해결책 중심으로 꺼낸다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">발견이 아닌 영업처럼 보이는 구조</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 시작 전 미용 제안부터 하면 신뢰 저하</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">전환 시점 — 언제 꺼내는 게 가장 자연스러운가</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">시점</th><th class="px-4 py-2 text-left font-medium">적합 여부</th><th class="px-4 py-2 text-left font-medium">이유</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">초진 구강검사 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">적합</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">얼굴 전체를 볼 수 있는 자연스러운 타이밍</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 계획 상담 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">적합</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 전반 이야기하는 맥락이라 미용 연결이 자연스러움</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정기 스케일링·예방 내원</td><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">최적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 부담 없이 대화 가능. 기존 관계 있어 거부감 낮음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">장기 치료 마무리 시점</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">적합</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 완료라는 긍정적 감정 상태</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">급성 통증·불편 치료 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">부적합</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 통증 해결에만 집중</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">발치·외과 처치 직후</td><td class="px-4 py-3 border-b border-[#eee] text-[#C4929B] font-bold">부적합</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">회복 중인 환자</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료비 청구·수납 직후</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주의</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">추가 지출 부담. 스탭이 브로셔로 안내하는 방식이 나음</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">마지막 원칙:</span> 환자는 원장이 '팔려고 하는지' '진심으로 봐주는지'를 직감적으로 안다. 이 매뉴얼의 모든 멘트는 발견과 정보 제공이지 권유가 아니다.</p>
      </div>
      <div style="background: linear-gradient(135deg, #fdf6f7 0%, #f5e6e8 100%); border-radius: 12px; padding: 32px 24px; margin-bottom: 24px; border: 1px solid #e8d0d4;">
        <div style="text-align: center; margin-bottom: 28px;">
          <span style="display: inline-block; background: #C4929B; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px; letter-spacing: 1px;">FACIAL MAP</span>
          <div style="font-size: 20px; font-weight: 800; color: #2C2C2C; margin-top: 8px;">얼굴 부위별 미용 적응증 맵</div>
          <div style="font-size: 13px; color: #888; margin-top: 4px;">8개 핵심 부위와 연결 가능한 시술을 한눈에 파악합니다</div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">01</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">이마</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">보톡스 (주름)</span>
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">필러 (볼륨)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">스킨부스터</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">02</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">눈가</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">보톡스 (까마귀발)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">리쥬란</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">스킨부스터</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">03</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">코</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">필러 (코끝/콧대)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">실리프팅</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">04</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">팔자주름</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">필러 (볼륨)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">실리프팅</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">스킨부스터</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">05</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">입술</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">필러 (볼륨/윤곽)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">입꼬리 보톡스</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">06</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">턱선 / 이중턱</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">보톡스 (사각턱)</span>
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">필러 (턱끝)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">지방분해주사</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">07</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">볼 / 광대</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">필러 (볼륨)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">실리프팅</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">스킨부스터</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border: 1px solid #f0e0e3;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <div style="background: #C4929B; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">08</div>
              <div style="font-size: 15px; font-weight: 700; color: #2C2C2C;">목 / 넥라인</div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">보톡스 (목주름)</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">스킨부스터</span>
              <span style="background: #f0f0f0; color: #666; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">리쥬란</span>
            </div>
          </div>
        </div>
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e8d0d4; display: flex; justify-content: center; gap: 20px;">
          <div style="display: flex; align-items: center; gap: 6px;"><span style="background: #F5E6E8; width: 12px; height: 12px; border-radius: 3px; display: inline-block;"></span><span style="font-size: 12px; color: #666;">핵심 시술</span></div>
          <div style="display: flex; align-items: center; gap: 6px;"><span style="background: #f0f0f0; width: 12px; height: 12px; border-radius: 3px; display: inline-block;"></span><span style="font-size: 12px; color: #666;">연계 시술</span></div>
        </div>
      </div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s2-03",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2-3. 상담 매뉴얼</h2>
      <p class="text-[#333] leading-relaxed mb-4">치과 원장은 임플란트·교정 설명은 10년 넘게 해온 일이라 자연스럽다. 그런데 보톡스 얘기를 꺼내는 순간 말이 딱딱해지거나, 너무 의학적으로 설명하거나, 아예 못 꺼내고 끝난다. 이 매뉴얼은 치과 원장이 이미 잘 하는 방식으로 미용 시술을 설명할 수 있게 만드는 데 목적이 있다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">상담의 본질 — 설득이 아니라 발견이다</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">팔려는 상담</th><th class="px-4 py-2 text-left font-medium">발견하는 상담</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"저희 보톡스 맞아보실래요?"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"교근이 많이 발달해 있으시네요. 혹시 이 부분 신경 쓰인 적 있으세요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 메뉴를 소개한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 얼굴을 보면서 고민을 발견한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 "아니요" 하면 끝난다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 "맞아요, 신경 쓰이긴 해요"로 이어진다</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">상담 3단계 구조: 발견 &rarr; 연결 &rarr; 제안</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">이름</th><th class="px-4 py-2 text-left font-medium">원장이 하는 것</th><th class="px-4 py-2 text-left font-medium">환자가 느끼는 것</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">발견</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진료 중 얼굴을 보며 고민 포인트를 발견하고 질문한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"원장님이 나를 잘 보고 있구나"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">연결</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 진료와 미용 시술을 자연스럽게 연결한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치과에서 이런 것도 되는구나"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제안</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구체적인 시술을 1가지만 제안한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"한번 해볼까?"</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 3단계를 한 번에 다 하려고 하지 마라. 발견 단계에서 환자 반응이 없으면 그날은 거기서 끝내도 된다. 무리하게 제안까지 가면 오히려 관계가 어색해진다.</p>
      </div>
    `,
  },
  {
    id: "s2-03-bridge",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">브리지 문장 — 치과 언어로 시작해야 자연스럽다</h3>
      <p class="text-[#333] leading-relaxed mb-4">"보톡스 어떠세요?"가 아니라, 진료 흐름에서 자연스럽게 연결되는 문장이 브리지 문장이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">교근 보톡스로 연결:</span></p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">진료 중 교근 촉진하면서 — "교근이 꽤 발달해 있으시네요. 이갈이나 이 악무는 습관이 있으세요?" &rarr; (환자 반응 후) "이 근육이 크면 턱선이 각져 보이거든요. 혹시 그 부분 신경 쓰인 적 있으세요?"</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">필러·스킨부스터로 연결:</span></p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">임플란트 완료 후 경과 확인 — "보통 이쪽 치료 끝나고 나서 얼굴 느낌이 달라졌다고 하시는 분들이 계세요." &rarr; (환자 반응 보며) "혹시 볼 쪽이 좀 꺼진 느낌 있으시진 않으세요?"</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">HIFU·리프팅으로 연결:</span></p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">정기 검진 내원 환자 (40대 이상) — "혹시 최근에 얼굴 처지는 느낌 받으신 적 있으세요?" &rarr; (환자 공감하면) "저희 쪽에서 비수술 리프팅 시술을 하는데, 초음파 장비로 피부 안쪽에서 올려주는 방식이에요."</p>
      </div>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심:</span> 브리지 문장은 질문으로 끝내는 게 원칙이다. "~어떠세요?", "~있으세요?" — 환자가 답하는 순간 대화가 시작된다.</p>
      </div>
    `,
  },
  {
    id: "s2-03-scripts",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술별 1분 설명 스크립트</h3>
      <p class="text-[#333] leading-relaxed mb-4">환자가 관심을 보인 후 원장이 하는 설명이다. <span class="font-bold text-[#1a1a1a]">1분 안에 끝내야 한다.</span> 길면 환자는 부담을 느낀다.</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">보톡스 1분 설명</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"보톡스는 근육에 작용하는 주사예요. 치과에서는 주로 교근, 씹는 근육에 맞는 경우가 많아요. 이 근육이 발달하면 턱선이 각져 보이고, 이갈이도 심해지거든요. 보톡스를 맞으면 근육이 줄어들면서 턱선이 자연스럽게 갸름해지고, 이갈이도 완화돼요. 효과는 3~4개월 정도. 시술 자체는 15분이면 끝나고, 일상생활 바로 되시고요. 치과의사가 이 부위를 가장 잘 아는 사람이에요."</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">필러 1분 설명</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"필러는 꺼진 부위를 채워주는 주사예요. 성분은 히알루론산인데, 원래 우리 몸에 있는 성분이라 알레르기 반응이 거의 없어요. 6개월~1년 정도 지속되고, 자연스럽게 흡수돼요. 제가 얼굴 구조를 보면서 어느 부위에 얼마나 넣을지 설계하는 거예요. 치과의사는 얼굴 해부학을 제일 많이 공부한 사람이에요."</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">스킨부스터 1분 설명</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"스킨부스터는 피부 속에 직접 수분과 영양을 넣어주는 시술이에요. 피부 자체가 촉촉해지고 탄력이 살아나는 느낌이에요. 보통 4~6회 코스로 받고, 한 달에 한 번 유지 관리하면 효과가 오래 가요. 치과 정기 내원하실 때 같이 받으시면 시간 효율적이에요."</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">HIFU (슈링크) 1분 설명</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"HIFU는 초음파 에너지를 이용한 리프팅 장비예요. 수술 없이 피부 안쪽 근막층에 열을 만들어서 조여주는 방식이에요. 1~3개월에 걸쳐 콜라겐이 재생되면서 서서히 올라와요. 효과는 6개월~1년. 치과의사는 얼굴 뼈대와 근막 구조를 제일 잘 알고 있어요."</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">실리프팅 1분 설명</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"실리프팅은 녹는 실을 피부 안에 삽입해서 처진 부위를 끌어올리는 시술이에요. HIFU가 조여주는 느낌이라면, 실리프팅은 직접 올려주는 느낌이에요. 피부 속에서 실이 콜라겐 재생도 자극하기 때문에 효과가 1~2년 가는 경우도 많아요. 국소마취하고 진행해서 통증은 거의 없어요. 국소마취 시술은 치과에서 매일 하는 거잖아요."</p>
      </div>
    `,
  },
  {
    id: "s2-03-patient-types",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">환자 유형별 대응 전략</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">유형 A — 관심은 있는데 먼저 말 못 하는 환자</h4>
      <p class="text-[#333] leading-relaxed mb-2">특징: 시술 전후 사진을 유심히 보거나, 슬쩍 "이런 거 여기서 해요?" 하고 묻는다.</p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">원장이 자연스럽게 받아주면 된다. "한번 같이 보면서 얘기해드릴게요." 과도한 설명이 오히려 부담.</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">유형 B — 효과를 의심하는 환자</h4>
      <p class="text-[#333] leading-relaxed mb-2">특징: "그게 효과 있어요?", "TV에서 부작용 얘기 봤는데" 같은 반응.</p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">솔직하게 한계를 인정하고 거기서 장점을 설명. "맞아요, 영구적이진 않아요. 보톡스는 3~4개월 지속되고 반복하면 누적 효과가 있어요."</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">유형 C — 가격에 민감한 환자</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">가치 설명이 먼저, 가격은 나중. "부위랑 용량에 따라 달라서, 먼저 어떤 부위가 신경 쓰이신지 봐도 될까요?"</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">유형 D — 치과에서 받는 걸 낯설어하는 환자</h4>
      <p class="text-[#333] leading-relaxed mb-2">특징: "치과에서요?", "피부과 가야 하는 거 아닌가요?" — 가장 많이 나오는 유형.</p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"법적으로 치과의사가 두경부 시술을 할 수 있어요. 대법원 판례로도 확인된 내용이에요. 그리고 오래 다니신 저한테 받으시는 거라 더 믿을 수 있잖아요."</p>
      </div>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심 문장:</span> "오래 다니신 저한테 받으시는 거라 더 믿을 수 있잖아요" — 이 한 문장이 치과 미용 시술의 가장 강력한 포지셔닝이다.</p>
      </div>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">유형 E — 배우자·가족 눈치를 보는 환자</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"보톡스는 자연스럽게 되는 거라 티가 안 나는 경우가 많아요. 원래 나 같아 보이는데 좀 더 좋아 보이는 정도거든요."</p>
      </div>
    `,
  },
  {
    id: "s2-03-resistance",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">저항 처리 — 자주 나오는 말과 표준 응대</h3>
      <p class="text-[#333] leading-relaxed mb-4">환자의 저항은 거절이 아니다. 정보가 부족하거나 불안한 것이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">환자 말</th><th class="px-4 py-2 text-left font-medium">원장 응대</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"부작용은 없어요?"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"있을 수 있어요. 솔직히 말씀드릴게요. 멍이 들거나 약간 붓는 경우가 있어요. 근데 보톡스는 3~4개월이면 자연스럽게 풀려요. 영구적인 부작용이 아니라는 게 오히려 장점이에요."</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"한 번 맞으면 계속 맞아야 한다던데"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"중독성이 있는 건 아니에요. 효과가 끝나면 맞기 전 상태로 돌아가는 거예요. 한 번 해보고 마음에 들면 유지하시고, 아니면 안 하셔도 돼요."</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"지금 당장은 아니고 나중에"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"물론이죠. 오늘 바로 하실 필요 없어요. 다음 달 정기 검진 오실 때 한번 같이 얘기해봐요."</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"나이 들어서 이런 거 해도 될까요?"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"나이 제한 없어요. 오히려 40대 이상이 효과가 더 드라마틱하게 느껴지는 경우가 많아요."</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">"나중에"는 거절이 아니다.</span> 억지로 오늘 결정하게 하려 하지 마라. 씨앗을 심고 끝내면 된다. 다음 내원 때 이어진다.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">절대 하지 말아야 할 말</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">하면 안 되는 말</th><th class="px-4 py-2 text-left font-medium">이렇게 해</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"효과 100% 보장해드릴게요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"효과가 좋은 편이에요. 단, 개인 차이가 있어서 결과는 달라질 수 있어요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"사실 이게 원래 피부과에서 하는 건데..."</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치과의사가 두경부 시술을 할 수 있어요. 법적으로 확인된 내용이에요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"일단 한번 해보시면 알아요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"어떤 부분이 가장 신경 쓰이세요? 그걸 먼저 보고 설명드릴게요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가격을 먼저 말한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 설명과 가치를 먼저, 가격은 나중</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"요즘 다들 맞아요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"저희 내원하시는 분들 중에도 이 시술 받으시는 분들 계세요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5분 이상 길게 설명</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1분 설명 후 "더 궁금하신 거 있으세요?"로 환자가 리드하게</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s2-03-staff",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스탭 1차 응대 스크립트</h3>
      <p class="text-[#333] leading-relaxed mb-4">스탭의 역할은 원장과의 상담으로 연결하는 것이다. <span class="font-bold text-[#1a1a1a]">시술 결정·추천은 스탭이 하면 안 된다.</span></p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">전화 문의 — "보톡스 하세요?"</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm mb-2">스탭: "네, 저희 두경부 미용 시술 하고 있어요."</p>
        <p class="text-sm mb-2">환자: "얼마예요?"</p>
        <p class="text-sm">스탭: "부위랑 용량에 따라 다르게 책정되어서, 원장님이 직접 상담해드려야 정확하게 말씀드릴 수 있어요. 상담은 무료예요. 예약 잡아드릴까요?"</p>
      </div>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">스탭 주의:</span> "어떤 시술이 맞을 것 같아요", "이 부위는 필러보다 보톡스가 낫죠" 같은 말은 절대 하지 않는다.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">상담 후 셀프 점검</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">점검 항목</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">브리지 문장으로 자연스럽게 시작했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 먼저 답하게 했는가 (질문으로 시작)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1분 안에 설명을 끝냈는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전문 용어 없이 쉽게 설명했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가격보다 가치를 먼저 말했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 저항 시 방어적으로 반응하지 않았는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">오늘 결정을 강요하지 않았는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">다음 내원 때 연결고리를 남겼는가</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">현실적인 조언:</span> 처음 10번의 상담은 어색하다. 그게 정상이다. 스크립트를 최소 5번 소리 내어 읽고, 스탭을 환자 역할로 세워 연습해야 실제 상담에서 자연스럽게 나온다.</p>
      </div>
      <div style="background: linear-gradient(135deg, #fdf6f7 0%, #f5e6e8 100%); border-radius: 12px; padding: 32px 24px; margin-bottom: 24px; border: 1px solid #e8d0d4;">
        <div style="text-align: center; margin-bottom: 28px;">
          <span style="display: inline-block; background: #C4929B; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px; letter-spacing: 1px;">CONSULTATION FLOW</span>
          <div style="font-size: 20px; font-weight: 800; color: #2C2C2C; margin-top: 8px;">상담 3단계 플로우</div>
          <div style="font-size: 13px; color: #888; margin-top: 4px;">자연스러운 발견에서 시작해 환자 스스로 선택하게 만드는 구조</div>
        </div>
        <div style="display: flex; align-items: stretch; gap: 0; justify-content: center; flex-wrap: wrap;">
          <div style="background: #fff; border-radius: 12px; padding: 24px 20px; flex: 1; min-width: 180px; max-width: 240px; box-shadow: 0 2px 12px rgba(196,146,155,0.12); border-top: 4px solid #C4929B; text-align: center;">
            <div style="background: #C4929B; color: #fff; font-size: 24px; font-weight: 800; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">1</div>
            <div style="font-size: 18px; font-weight: 800; color: #C4929B; margin-bottom: 6px;">발견</div>
            <div style="font-size: 13px; color: #2C2C2C; font-weight: 600; margin-bottom: 8px;">치료 중 자연스러운 관찰</div>
            <div style="font-size: 12px; color: #777; line-height: 1.6; text-align: left;">
              <div style="margin-bottom: 4px;">- 스케일링 중 잇몸라인 체크</div>
              <div style="margin-bottom: 4px;">- 교정 상담 시 안면 비대칭 확인</div>
              <div>- 보철 상담 시 입술 볼륨 관찰</div>
            </div>
            <div style="margin-top: 12px; background: #F5E6E8; border-radius: 8px; padding: 8px; font-size: 11px; color: #C4929B; font-weight: 600;">"치료하면서 보니까..."</div>
          </div>
          <div style="display: flex; align-items: center; padding: 0 8px; flex-shrink: 0;">
            <div style="font-size: 28px; color: #C4929B; font-weight: 300;">&#8594;</div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 24px 20px; flex: 1; min-width: 180px; max-width: 240px; box-shadow: 0 2px 12px rgba(196,146,155,0.12); border-top: 4px solid #2C2C2C; text-align: center;">
            <div style="background: #2C2C2C; color: #fff; font-size: 24px; font-weight: 800; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">2</div>
            <div style="font-size: 18px; font-weight: 800; color: #2C2C2C; margin-bottom: 6px;">연결</div>
            <div style="font-size: 13px; color: #2C2C2C; font-weight: 600; margin-bottom: 8px;">기존 고민과 시술 연결</div>
            <div style="font-size: 12px; color: #777; line-height: 1.6; text-align: left;">
              <div style="margin-bottom: 4px;">- 환자의 기존 불편을 시술과 연결</div>
              <div style="margin-bottom: 4px;">- 치과 치료의 연장선으로 설명</div>
              <div>- 비포/애프터 사례 공유</div>
            </div>
            <div style="margin-top: 12px; background: #f0f0f0; border-radius: 8px; padding: 8px; font-size: 11px; color: #555; font-weight: 600;">"혹시 이 부분 신경 쓰셨어요?"</div>
          </div>
          <div style="display: flex; align-items: center; padding: 0 8px; flex-shrink: 0;">
            <div style="font-size: 28px; color: #C4929B; font-weight: 300;">&#8594;</div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 24px 20px; flex: 1; min-width: 180px; max-width: 240px; box-shadow: 0 2px 12px rgba(196,146,155,0.12); border-top: 4px solid #C4929B; text-align: center;">
            <div style="background: #C4929B; color: #fff; font-size: 24px; font-weight: 800; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">3</div>
            <div style="font-size: 18px; font-weight: 800; color: #C4929B; margin-bottom: 6px;">제안</div>
            <div style="font-size: 13px; color: #2C2C2C; font-weight: 600; margin-bottom: 8px;">정보 제공 후 선택권 부여</div>
            <div style="font-size: 12px; color: #777; line-height: 1.6; text-align: left;">
              <div style="margin-bottom: 4px;">- 시술 방법과 예상 결과 설명</div>
              <div style="margin-bottom: 4px;">- 비용/기간/주의사항 안내</div>
              <div>- 결정은 환자에게 위임</div>
            </div>
            <div style="margin-top: 12px; background: #F5E6E8; border-radius: 8px; padding: 8px; font-size: 11px; color: #C4929B; font-weight: 600;">"관심 있으시면 말씀해주세요"</div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid #e8d0d4;">
          <span style="font-size: 12px; color: #999;">핵심: 권유가 아닌 정보 제공 &#8212; 환자가 스스로 결정하는 구조</span>
        </div>
      </div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s2-04",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2-4. 세무·수납 시스템</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술을 시작하는 순간 치과의 세무 구조가 바뀐다. 이걸 모르고 시작하면 나중에 세무서에서 추징당한다. 운영 첫날부터 구조를 맞춰놔야 한다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심 전제:</span> 일반 치과 진료는 부가세 면세다. 미용 시술은 부가세 10% 과세다. 두 가지가 한 치과에 섞이는 순간 겸업 사업자가 된다.</p>
      </div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">과세 vs 면세 — 어떤 시술이 어디에 해당하나</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">구분</th><th class="px-4 py-2 text-left font-medium">면세 (부가세 없음)</th><th class="px-4 py-2 text-left font-medium">과세 (부가세 10%)</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기준</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 목적 의료 행위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 목적 시술</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">해당 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">충치 치료, 스케일링, 임플란트, 틀니, 교정 치료, 이갈이 치료용 스플린트</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스(미용), 필러, 스킨부스터, 실리프팅, HIFU, RF, 레이저(미용), 미백 치료, 잇몸 미용 시술</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">영수증</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">현금영수증 또는 카드 (부가세 별도 표시 없음)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세금계산서 또는 신용카드매출전표 (부가세 10% 별도)</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> "이갈이 치료용이니까 면세겠지"라는 판단을 원장이 임의로 하면 안 된다. 세무서 해석이 다를 수 있고, 추징 시 가산세까지 붙는다. 세무사 확인 후 처리 기준을 정해두어야 한다.</p>
      </div>
    `,
  },
  {
    id: "s2-04-convert",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">과세사업자 전환 — 미용 시술 시작 전에 반드시 해야 할 것</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">순서</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세무사 상담 — 현재 사업자 구조 확인. 겸업 전환 방식 결정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사업자등록 정정 신청 — 홈택스에서 업태·종목 추가. "의료업 + 미용업" 겸업으로 변경</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">카드 단말기 세팅 — 과세/면세 분리 결제 가능하도록 POS 또는 단말기 세팅</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수납 프로세스 구축 — 부가세 10% 포함 여부 환자에게 사전 고지. 영수증에 부가세 별도 표시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부가세 신고 준비 — 과세/면세 매출 분리 관리. 부가세 신고 연 2회. 세무사 위임 권장</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">수납 실무</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">상황</th><th class="px-4 py-2 text-left font-medium">처리 방법</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 치료만</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기존대로 면세 처리. 부가세 없음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술만</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과세 처리. 수가에 부가세 10% 포함 여부를 사전에 정해두어야 함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 + 미용 동시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">두 항목 분리 결제 또는 분리 영수증 발행</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">수가에 부가세 포함 여부</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">방식</th><th class="px-4 py-2 text-left font-medium">장점</th><th class="px-4 py-2 text-left font-medium">주의점</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">VAT 포함 수가 (예: 보톡스 11만원)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 체감 가격 단순</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실제 수익은 10만원. 수가 설계 시 이미 부가세 포함 반영해야 함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">VAT 별도 수가 (예: 보톡스 10만원 + VAT 1만원)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수익 계산 명확</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자에게 부가세 별도 설명 필요</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심:</span> 두 방식 중 어느 것이든 상관없다. 중요한 것은 정책을 정하고, 환자에게 사전 고지하고, 일관되게 유지하는 것.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">현금영수증·카드 처리 원칙</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">원칙</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">신용카드</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">단말기에서 과세/면세 구분 입력. POS 있으면 항목별 자동 분리</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">현금</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 현금 결제 시 현금영수증 의무 발행 (건당 10만원 이상). 미발행 시 가산세 20%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">간편결제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">신용카드와 동일 처리. 매출 누락 없이 집계되는지 POS 연동 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세금계산서</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">법인 환자 요청 시 발행. 개인 환자는 카드영수증으로 대체 가능</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">현금영수증 미발행 리스크:</span> 의무발행업종 사업자가 건당 10만원 이상 현금거래 시 미발급하면, 미발급 금액의 20% 가산세. 거래일로부터 5년 이내 신고 가능하므로 리스크가 장기간 잠복한다.</p>
      </div>
    `,
  },
  {
    id: "s2-04-mistakes",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">자주 하는 실수</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">번호</th><th class="px-4 py-2 text-left font-medium">실수</th><th class="px-4 py-2 text-left font-medium">결과</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 시작하고 사업자 정정 안 한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과거 매출 소급 추징 가능</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">현금 수납 후 현금영수증 안 끊는다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가산세 20% + 신고 포상제도로 환자 신고 위험</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 진료와 미용 시술 수납을 합산한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세무 신고 시 분리 안 되면 전체 과세 처리될 수 있음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수가에 부가세 포함 여부를 안 정하고 시작</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기준이 달라져 환자 불만 및 내부 혼선</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">장비 구매 전 세무사 상담을 안 한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">일반과세자 전환 전 구매한 장비는 매입세액 공제 불가할 수 있음</td></tr>
        </tbody>
      </table>
      <div class="mb-6">
        <h4 class="text-base font-bold text-[#1a1a1a] mb-4 text-center">과세/면세 분리 수납 플로우차트</h4>
        <div class="flex flex-col items-center mb-4">
          <div class="bg-[#1a1a1a] text-white px-6 py-3 rounded-lg font-bold text-sm text-center">환자 수납 발생</div>
          <div class="w-px h-6 bg-[#999]"></div>
          <div class="bg-[#f5f5f5] border border-[#eee] px-6 py-3 rounded-lg font-semibold text-sm text-[#1a1a1a] text-center">시술 내용 확인: 치료? 미용? 동시?</div>
          <div class="w-full max-w-xl flex justify-between items-start mt-2">
            <div class="w-px h-6 bg-[#999] ml-[16%]"></div>
            <div class="w-px h-6 bg-[#999]"></div>
            <div class="w-px h-6 bg-[#999] mr-[16%]"></div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="border border-[#eee] rounded-lg overflow-hidden">
            <div class="bg-[#f5f5f5] px-3 py-2 text-center"><span class="font-bold text-sm text-[#1a1a1a]">경로 A: 치과 치료만</span></div>
            <div class="p-3 text-sm text-[#333] space-y-2">
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] shrink-0">1</span><span>건강보험 또는 비급여 치료</span></div>
              <div class="w-px h-3 bg-[#999] ml-2.5"></div>
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] shrink-0">2</span><span>면세 처리 (VAT 없음)</span></div>
              <div class="w-px h-3 bg-[#999] ml-2.5"></div>
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] shrink-0">3</span><span>기존 치과 수납 프로세스 그대로</span></div>
            </div>
          </div>
          <div class="border-2 border-[#C4929B] rounded-lg overflow-hidden">
            <div class="bg-[#C4929B] px-3 py-2 text-center"><span class="font-bold text-sm text-white">경로 B: 미용 시술만</span></div>
            <div class="p-3 text-sm text-[#333] space-y-2">
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#fdf2f5] rounded-full flex items-center justify-center text-xs font-bold text-[#C4929B] shrink-0">1</span><span>미용 목적 확인 (보톡스·필러 등)</span></div>
              <div class="w-px h-3 bg-[#C4929B] ml-2.5"></div>
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#fdf2f5] rounded-full flex items-center justify-center text-xs font-bold text-[#C4929B] shrink-0">2</span><span>과세 처리 (VAT 10% 별도)</span></div>
              <div class="w-px h-3 bg-[#C4929B] ml-2.5"></div>
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#fdf2f5] rounded-full flex items-center justify-center text-xs font-bold text-[#C4929B] shrink-0">3</span><span>세금계산서 또는 현금영수증 발급 필수</span></div>
            </div>
          </div>
          <div class="border border-[#eee] rounded-lg overflow-hidden">
            <div class="bg-[#1a1a1a] px-3 py-2 text-center"><span class="font-bold text-sm text-white">경로 C: 동시 수납</span></div>
            <div class="p-3 text-sm text-[#333] space-y-2">
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] shrink-0">1</span><span>치료 + 미용 동시 진행</span></div>
              <div class="w-px h-3 bg-[#999] ml-2.5"></div>
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-bold text-[#C4929B] shrink-0">2</span><span class="font-bold text-[#C4929B]">반드시 분리 수납</span></div>
              <div class="w-px h-3 bg-[#999] ml-2.5"></div>
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] shrink-0">3</span><span>치료분: 면세 / 미용분: 과세 (VAT 10%)</span></div>
              <div class="w-px h-3 bg-[#999] ml-2.5"></div>
              <div class="flex items-center gap-2"><span class="w-5 h-5 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] shrink-0">4</span><span>영수증 2건 발행 (면세 + 과세)</span></div>
            </div>
          </div>
        </div>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-3 mt-3 rounded-r">
          <p class="text-[#333] text-xs"><span class="font-bold text-[#1a1a1a]">핵심:</span> 합산 수납 시 세무 신고에서 분리 안 되면 전체가 과세 처리될 수 있다. 처음부터 분리 수납이 원칙.</p>
        </div>
      </div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s2-05",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2-5. 응급 대응 프로토콜</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술에서 응급 상황은 드물다. 그러나 한 번 생겼을 때 대응이 늦으면 환자 안전과 법적 리스크가 동시에 발생한다. 대응 속도는 사전에 프로토콜이 있느냐 없느냐로 갈린다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">원칙:</span> 모든 응급 대응의 판단과 실행은 원장이 주도한다. 스탭은 재료 전달·119 신고·기록 보조만 한다.</p>
      </div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">응급 재료 상비 목록</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">재료</th><th class="px-4 py-2 text-left font-medium">용도</th><th class="px-4 py-2 text-left font-medium">보관 위치</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 혈관 폐색 응급 용해</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 소모품과 같은 냉장고 &rarr; 즉시 꺼낼 수 있는 위치</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에피네프린 (에피펜 또는 앰플)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과민성 쇼크 대응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 키트에 별도 보관, 유효기간 정기 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">생리식염수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">희석·세척·수액 보충</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술실 내 상시 비치</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">지혈 거즈·압박 붕대</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">출혈 지혈</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 트레이 내 상시 비치</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">혈압계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">활력징후 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술실 내 상시 비치</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">산소포화도 측정기 (SpO2)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">호흡 상태 모니터링</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술실 내 상시 비치</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">항히스타민제 (경구용)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경증 알레르기 반응 초기 대응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 키트</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아이스팩·냉찜질팩</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부종·통증 완화</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉동실 또는 냉장고</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">필수:</span> 필러 시술을 하는 치과는 히알루로니다제를 반드시 상비해야 한다. 혈관 폐색은 시술 후 수분~수십 분 내에 대응해야 조직 괴사를 막을 수 있다. 없으면 필러를 시작하지 않는다.</p>
      </div>
    `,
  },
  {
    id: "s2-05-protocols",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">응급 상황별 프로토콜</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">필러 후 혈관 폐색 (Vascular Occlusion)</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">행동</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 시술 중단. 환자를 눕히고 해당 부위 사진 촬영</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제를 폐색 부위 및 주변에 즉시 주입. 고용량 펄스 프로토콜: 450~1500IU</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">온찜질 적용. 20~60분 간격으로 확인 후 추가 주입 고려 (최대 4회 반복)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부색 회복 확인. 30분 내 호전 없으면 즉시 119 신고 또는 협진</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경과 및 조치 내용 시간대별 차트 기록</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">골든타임:</span> 혈관 허혈 발생 후 4시간 이내 투여 시 조직 괴사를 유의미하게 줄일 수 있다. 가능하면 즉각 투여가 원칙.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">아나필락시스 (과민성 쇼크) 의심</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">행동</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 시술 중단. 환자 눕히고 다리 올리기 (쇼크 체위)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에피네프린 근육주사 (0.3~0.5mg, 대퇴부 전외측). 에피펜 있으면 즉시 사용</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">119 신고 — 동시에 기도 확보</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">산소포화도·혈압 모니터링 지속</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에피네프린 효과 없으면 5~15분 간격 반복 투여</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">미주신경 반응 — 가장 흔한 응급</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">행동</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">창백·식은땀·어지럼 호소 &rarr; 즉시 시술 중단</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">눕히고 다리 올리기. 타이트한 옷 느슨하게</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">활력징후 확인 (혈압·맥박·산소포화도)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마에 찬 수건, 목 뒤에 아이스팩</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5~10분 내 자연 회복 대부분. 30분 내 회복 안 되면 119</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">실리프팅 후 감염 의심</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">행동</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 부위 발열·부종·압통·발적 + 38 degrees C 이상 &rarr; 감염 가능성 높음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 내원 지시. 당일 내원 세팅</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장 직접 평가. 실 주변 농양 여부 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경증 감염 &rarr; 항생제 처방</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">농양 형성 &rarr; 배농 또는 실 제거 검토. 심한 경우 성형외과 협진</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">보톡스 후 예상치 못한 부위 효과</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">행동</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">추가 시술 중단. 해당 부위 사진 촬영 및 차트 기록</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자에게 솔직하게 설명 — "인접 근육에 확산되어 일시적으로 나타난 증상"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~4개월이면 자연 소실됨 설명</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안검하수 시 안과 협진 또는 아이오핀 점안액 처방 고려</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2주 간격 경과 관찰. 소실 전까지 추가 시술 금지</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s2-05-chart",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">응급 발생 시 차트 기록 원칙</h3>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">법적 보호의 핵심:</span> 응급 상황에서 차트 기록이 원장을 보호한다. 스탭이 시간대별로 기록해야 한다.</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-2">차트에 반드시 기록해야 할 항목:</p>
      <ol class="list-decimal pl-6 mb-4 space-y-1 text-[#333]">
        <li>응급 상황 발생 시각 (분 단위)</li>
        <li>첫 증상 및 환자 호소 내용</li>
        <li>원장이 취한 조치 순서 및 각 조치 시각</li>
        <li>사용한 응급 약물명·용량·투여 경로</li>
        <li>119 신고 시각 및 신고 내용</li>
        <li>환자 상태 변화 (혈압·맥박·산소포화도 수치 + 시각)</li>
        <li>최종 결과 (자연 회복·119 이송·협진 의뢰)</li>
      </ol>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">응급 후 환자·보호자 응대</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">하지 말아야 할 말</th><th class="px-4 py-2 text-left font-medium">해야 할 말</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"이런 일이 생기리라고는 저도 몰랐어요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"드물지만 발생할 수 있는 상황이에요. 즉시 처치했고 지금은 안정적이에요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"제 잘못이 아니에요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"경과를 면밀히 지켜볼게요. 불편하시면 언제든 연락 주세요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 환불 약속</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경과 확인 후 논의</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 상황 축소·은폐</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기록 + 설명 + 후속 연락. 투명하게 대응</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스탭 응급 훈련 — 최소 분기 1회</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">훈련 항목</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제 위치 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉장고 어디에 있는지, 꺼내서 준비하는 데 30초 이내 가능한지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에피펜 사용법 숙지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭도 위치와 사용 방법 알고 있어야 함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">119 신고 연습</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 주소, 상황 설명 요약 문구 미리 준비</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미주신경 반응 대응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가장 빈도 높음. 눕히고 다리 올리는 동작 직접 연습</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">차트 기록 연습</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"몇 시 몇 분에 무슨 조치" 형식으로 시뮬레이션</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">마지막 점검:</span> "히알루로니다제가 지금 우리 치과 어디 있지?"라는 질문에 스탭이 바로 대답 못 하면 오늘 당장 세팅부터 해야 한다.</p>
      </div>
      <div style="background: linear-gradient(135deg, #fdf6f7 0%, #f5e6e8 100%); border-radius: 12px; padding: 32px 24px; margin-bottom: 24px; border: 1px solid #e8d0d4;">
        <div style="text-align: center; margin-bottom: 28px;">
          <span style="display: inline-block; background: #d94f5c; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px; letter-spacing: 1px;">EMERGENCY PROTOCOL</span>
          <div style="font-size: 20px; font-weight: 800; color: #2C2C2C; margin-top: 8px;">응급 대응 플로우차트</div>
          <div style="font-size: 13px; color: #888; margin-top: 4px;">5가지 상황별 즉각 행동 순서 -- 모든 스탭이 숙지해야 합니다</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border-left: 4px solid #d94f5c;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <div style="background: #d94f5c; color: #fff; font-size: 12px; font-weight: 800; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C;">혈관 내 필러 주입 (혈관 폐색 의심)</div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">1. 즉시 시술 중단</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">2. 히알루로니다제 투여</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">3. 온찜질 + 마사지</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">4. 경과 관찰 / 전원</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border-left: 4px solid #e67e22;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <div style="background: #e67e22; color: #fff; font-size: 12px; font-weight: 800; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C;">알레르기 반응 (두드러기/부종)</div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">1. 시술 중단</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">2. 항히스타민제 투여</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">3. 활력징후 모니터링</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">4. 119 또는 전원</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border-left: 4px solid #d94f5c;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <div style="background: #d94f5c; color: #fff; font-size: 12px; font-weight: 800; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C;">아나필락시스 (호흡곤란/의식저하)</div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">1. 119 즉시 호출</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">2. 에피네프린 근주</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">3. 기도 확보 + 산소</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fef2f2; color: #d94f5c; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;">4. 구급대 인계</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border-left: 4px solid #e67e22;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <div style="background: #e67e22; color: #fff; font-size: 12px; font-weight: 800; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">4</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C;">과다 출혈 (지혈 불량)</div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">1. 직접 압박 지혈</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">2. 냉찜질 적용</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">3. 지혈제 도포</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #fff7ed; color: #e67e22; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #fed7aa;">4. 미지혈 시 봉합/전원</span>
            </div>
          </div>
          <div style="background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(196,146,155,0.08); border-left: 4px solid #C4929B;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <div style="background: #C4929B; color: #fff; font-size: 12px; font-weight: 800; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">5</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C;">미주신경성 실신 (마취/공포 반응)</div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span style="background: #F5E6E8; color: #C4929B; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #e8d0d4;">1. 체어 눕히기 (하지 거상)</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #F5E6E8; color: #C4929B; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #e8d0d4;">2. 의복 이완 + 환기</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #F5E6E8; color: #C4929B; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #e8d0d4;">3. 활력징후 체크</span>
              <span style="font-size: 16px; color: #d4a8b0;">&#8594;</span>
              <span style="background: #F5E6E8; color: #C4929B; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; border: 1px solid #e8d0d4;">4. 회복 후 안정 관찰</span>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 20px; padding: 12px; background: #fef2f2; border-radius: 8px; border: 1px solid #fecaca;">
          <span style="font-size: 12px; color: #d94f5c; font-weight: 600;">히알루로니다제, 에피네프린, 항히스타민제 위치를 전 스탭이 알고 있어야 합니다</span>
        </div>
      </div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s2-06",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2-6. 재방문 관리 시스템</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술의 수익 구조는 신환 유입보다 구환 재방문에서 안정된다. 신환 한 명 유치하는 비용으로 기존 환자 다섯 명을 재방문시킬 수 있다. 재방문이 없으면 매달 신환을 새로 채워야 하는 구조가 되고, 광고비는 계속 늘어난다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심 전제:</span> 치과는 이미 재방문 구조를 갖고 있다. 정기 검진·스케일링으로 1년에 1~2번 오는 환자가 있다. 이 구조에 미용 시술 재방문 루틴을 얹는 것이 출발점이다.</p>
      </div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">재방문 구조 이해 — 시술별 자연 주기</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">시술</th><th class="px-4 py-2 text-left font-medium">효과 지속</th><th class="px-4 py-2 text-left font-medium">재방문 주기</th><th class="px-4 py-2 text-left font-medium">연간 방문</th><th class="px-4 py-2 text-left font-medium">특성</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~4개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~4개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가장 안정적인 재방문 리듬</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주름 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~4개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~4개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스와 동일 주기 세트 가능</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~18개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~12개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~2회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">단건 고단가. 주기 길어 다른 시술로 연결 필요</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~3개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 1회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~12회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재방문 최강. 고정 월 매출 기반</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">누적 관리형</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주 1~2회 &rarr; 월 1회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12~24회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가장 높은 방문 빈도</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~12개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~12개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~2회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">단건 고단가. RF·스킨부스터로 사이 채움</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~2년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~2년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주기 가장 김. 사후 관리 메뉴로 보완</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">설계 원칙:</span> 단건 고단가 시술만 있으면 방문 사이 공백이 생긴다. 스킨부스터·LDM·레이저처럼 주기 짧은 시술을 반드시 함께 운영해야 재방문이 끊기지 않는다.</p>
      </div>
    `,
  },
  {
    id: "s2-06-design",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">재방문 설계 4단계</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">1단계 — 시술 당일 다음 예약 세팅</h4>
      <p class="text-[#333] leading-relaxed mb-4">가장 중요한 단계다. <span class="font-bold text-[#1a1a1a]">시술 후 귀가 전에 다음 예약을 잡는 것.</span> 이 타이밍을 놓치면 재방문율이 절반 이하로 떨어진다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">시술</th><th class="px-4 py-2 text-left font-medium">당일 예약 멘트</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"다음 번엔 3~4개월 후에 오시면 돼요. 지금 바로 잡아드릴까요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"다음 회차는 한 달 후예요. 코스 중간에 끊기면 효과가 떨어져요."</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"효과 발현되는 1~3개월 사이에 스킨부스터 같이 받으시면 더 좋아요."</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"1주 후 경과 확인 예약 먼저 잡아드릴게요."</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">현실 체크:</span> "바쁘실 테니 나중에 편할 때 연락 주세요"는 재방문을 포기하는 말이다. 다음 예약은 오늘 잡는 것이 원칙.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">2단계 — 시술 후 1~3일 사후 연락</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">보톡스 시술 후 2일차:</span></p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-4 text-[#555] italic">
        <p class="text-sm">"[치과명] 원장 OOO입니다. 엊그제 교근 보톡스 시술 후 어떠세요? 효과는 3~7일 후부터 느껴지기 시작해요. 궁금한 점 있으시면 편하게 연락 주세요."</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">필러 시술 후 3일차:</span></p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"[치과명] 원장 OOO입니다. 필러 시술 후 경과 어떠세요? 붓기는 1주일 내로 빠져요. 시술 부위 마사지·압박 피해 주세요."</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">3단계 — 재방문 주기 알림 연락</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">"[치과명]입니다. 보톡스 맞으신 지 3개월이 지났어요. 슬슬 효과가 줄어드는 타이밍이에요. 편한 날 예약 잡아드릴까요?"</p>
      </div>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">알림 연락 원칙:</span> 월 1회 이상 같은 환자에게 보내지 않는다. 자주 보내면 광고처럼 느껴져 차단당한다.</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">4단계 — 장기 미방문 환자 재활성화</h4>
      <p class="text-[#333] leading-relaxed mb-4">6개월 이상 미방문 환자는 자연 이탈로 볼 수 있다. 이 시점에 한 번 더 연락하면 20~30%는 돌아온다.</p>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 재활성화 연락은 1회로 끝낸다. 반응 없으면 더 보내지 않는다.</p>
      </div>
    `,
  },
  {
    id: "s2-06-dental-routine",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">치과 특화 재방문 구조 — 치과 진료 루틴에 얹기</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">치과 내원 루틴</th><th class="px-4 py-2 text-left font-medium">연결 가능한 미용 시술</th><th class="px-4 py-2 text-left font-medium">연결 멘트</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6개월 정기 검진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 리터치, 스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"검진 오실 때 보톡스도 같이 하시면 한 번에 해결돼요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스케일링</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM 진정 케어, 스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"스케일링 후 잇몸 자극받으셨는데, LDM으로 진정 케어 받고 가실래요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임플란트 내원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM 부종 관리, 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"수술 후 붓기 관리에 LDM이 효과적이에요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정 체크업</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터, 레이저 토닝</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"교정하면서 피부 관리도 같이 하시는 분들 많아요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보철 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러, HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치료 다 마무리되셨으니, 얼굴 전체 관리도 한번 생각해보실 때예요"</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심:</span> 치과 내원 예약에 미용 시술을 함께 붙이는 것이 가장 효율적인 재방문 구조다. 별도 미용 예약을 따로 잡을 필요가 없어 환자 부담도 줄어든다.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">환자 등급 관리</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">등급</th><th class="px-4 py-2 text-left font-medium">기준</th><th class="px-4 py-2 text-left font-medium">관리 방식</th><th class="px-4 py-2 text-left font-medium">연락 주기</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">A</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">연 3회 이상 미용 + 치과 병행</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장이 직접 경과 확인. 신규 시술 우선 안내</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 주기마다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">B</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">연 1~2회 미용 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 주기 알림 문자. 세트 패키지 제안</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주기 도달 시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">C</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1회 시술 후 재방문 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재활성화 문자 1회. 무반응 시 유지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6개월 후 1회</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">D</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 진료만. 미용 무관심</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진료 중 자연스러운 발견 시도만</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진료 내원 시</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">실무 팁:</span> A등급 환자 20명이 월 매출의 50~60%를 만든다. 이 20명을 명단으로 관리하고, 원장이 직접 챙기는 것만으로도 재방문율이 크게 달라진다.</p>
      </div>
    `,
  },
  {
    id: "s2-06-package",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">패키지로 재방문 고정하기</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">패키지명</th><th class="px-4 py-2 text-left font-medium">구성</th><th class="px-4 py-2 text-left font-medium">방문 횟수</th><th class="px-4 py-2 text-left font-medium">설계 포인트</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부 리셋 코스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터 5회 + 레이저 토닝 5회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10회 고정 방문 확정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">탄력 관리 코스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU 1회 + RF 3회 + 스킨부스터 3회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU로 시작해 RF·스킨부스터로 유지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임플란트 케어 코스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임플란트 수술 + LDM 4회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 거부감 없는 환자 진입 통로</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 연간 관리</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스 3회 선불</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3회 (연간)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">연간 3회 선불 확정. 단건 대비 10% 할인</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">재방문율 월별 점검표</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">점검 항목</th><th class="px-4 py-2 text-left font-medium">목표</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재방문율 (재방문/전체)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">50% 이상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">당일 다음 예약 세팅률</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">70% 이상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">패키지 평균 소진율</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">80% 이상</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">재방문율 50%가 기준선.</span> 50% 이하면 신환 유입으로 빈자리를 채우는 구조다. 50% 이상이면 기존 환자 기반으로 운영이 돌아간다. 70% 넘으면 마케팅 없이도 안정 운영이 가능한 구조다.</p>
      </div>
      <div style="background: linear-gradient(135deg, #fdf6f7 0%, #f5e6e8 100%); border-radius: 12px; padding: 32px 24px; margin-bottom: 24px; border: 1px solid #e8d0d4;">
        <div style="text-align: center; margin-bottom: 28px;">
          <span style="display: inline-block; background: #C4929B; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px; letter-spacing: 1px;">RETENTION TIMELINE</span>
          <div style="font-size: 20px; font-weight: 800; color: #2C2C2C; margin-top: 8px;">재방문 설계 4단계 타임라인</div>
          <div style="font-size: 13px; color: #888; margin-top: 4px;">시술 당일부터 재활성화까지 체계적인 환자 관리 흐름</div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 0; justify-content: center; flex-wrap: wrap; position: relative;">
          <div style="flex: 1; min-width: 160px; max-width: 220px; text-align: center; position: relative;">
            <div style="background: #C4929B; color: #fff; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 22px; font-weight: 800; box-shadow: 0 4px 12px rgba(196,146,155,0.3);">1</div>
            <div style="background: #fff; border-radius: 12px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border: 1px solid #f0e0e3;">
              <div style="font-size: 11px; color: #C4929B; font-weight: 700; margin-bottom: 4px;">D-Day</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C; margin-bottom: 8px;">시술 당일</div>
              <div style="font-size: 12px; color: #777; line-height: 1.6; text-align: left;">
                <div style="margin-bottom: 3px;">- 사후 주의사항 서면 전달</div>
                <div style="margin-bottom: 3px;">- 다음 방문 예약 확정</div>
                <div>- 비포/애프터 사진 촬영</div>
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; padding: 28px 4px 0; flex-shrink: 0;">
            <div style="width: 32px; height: 2px; background: linear-gradient(to right, #C4929B, #d4a8b0);"></div>
            <div style="font-size: 20px; color: #C4929B;">&#8594;</div>
          </div>
          <div style="flex: 1; min-width: 160px; max-width: 220px; text-align: center; position: relative;">
            <div style="background: #2C2C2C; color: #fff; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 22px; font-weight: 800; box-shadow: 0 4px 12px rgba(44,44,44,0.2);">2</div>
            <div style="background: #fff; border-radius: 12px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border: 1px solid #f0e0e3;">
              <div style="font-size: 11px; color: #2C2C2C; font-weight: 700; margin-bottom: 4px;">D+2~3일</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C; margin-bottom: 8px;">사후 연락</div>
              <div style="font-size: 12px; color: #777; line-height: 1.6; text-align: left;">
                <div style="margin-bottom: 3px;">- 컨디션 확인 문자/전화</div>
                <div style="margin-bottom: 3px;">- 불편사항 체크</div>
                <div>- 추가 주의사항 안내</div>
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; padding: 28px 4px 0; flex-shrink: 0;">
            <div style="width: 32px; height: 2px; background: linear-gradient(to right, #d4a8b0, #C4929B);"></div>
            <div style="font-size: 20px; color: #C4929B;">&#8594;</div>
          </div>
          <div style="flex: 1; min-width: 160px; max-width: 220px; text-align: center; position: relative;">
            <div style="background: #C4929B; color: #fff; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 22px; font-weight: 800; box-shadow: 0 4px 12px rgba(196,146,155,0.3);">3</div>
            <div style="background: #fff; border-radius: 12px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border: 1px solid #f0e0e3;">
              <div style="font-size: 11px; color: #C4929B; font-weight: 700; margin-bottom: 4px;">D+30~90일</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C; margin-bottom: 8px;">주기 알림</div>
              <div style="font-size: 12px; color: #777; line-height: 1.6; text-align: left;">
                <div style="margin-bottom: 3px;">- 재시술 적기 사전 알림</div>
                <div style="margin-bottom: 3px;">- 시즌별 추천 시술 안내</div>
                <div>- 유지 관리 정보 제공</div>
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; padding: 28px 4px 0; flex-shrink: 0;">
            <div style="width: 32px; height: 2px; background: linear-gradient(to right, #C4929B, #d4a8b0);"></div>
            <div style="font-size: 20px; color: #C4929B;">&#8594;</div>
          </div>
          <div style="flex: 1; min-width: 160px; max-width: 220px; text-align: center; position: relative;">
            <div style="background: #2C2C2C; color: #fff; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 22px; font-weight: 800; box-shadow: 0 4px 12px rgba(44,44,44,0.2);">4</div>
            <div style="background: #fff; border-radius: 12px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(196,146,155,0.10); border: 1px solid #f0e0e3;">
              <div style="font-size: 11px; color: #2C2C2C; font-weight: 700; margin-bottom: 4px;">D+180일~</div>
              <div style="font-size: 16px; font-weight: 700; color: #2C2C2C; margin-bottom: 8px;">재활성화</div>
              <div style="font-size: 12px; color: #777; line-height: 1.6; text-align: left;">
                <div style="margin-bottom: 3px;">- 장기 미방문 환자 리콜</div>
                <div style="margin-bottom: 3px;">- 특별 프로모션 안내</div>
                <div>- 새로운 시술 소개</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: center; gap: 24px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #e8d0d4;">
          <div style="text-align: center;"><span style="font-size: 24px; font-weight: 800; color: #C4929B;">50%</span><div style="font-size: 11px; color: #888; margin-top: 2px;">최소 기준선</div></div>
          <div style="text-align: center;"><span style="font-size: 24px; font-weight: 800; color: #2C2C2C;">70%</span><div style="font-size: 11px; color: #888; margin-top: 2px;">안정 운영 구간</div></div>
          <div style="text-align: center;"><span style="font-size: 24px; font-weight: 800; color: #C4929B;">90%</span><div style="font-size: 11px; color: #888; margin-top: 2px;">마케팅 불필요</div></div>
        </div>
      </div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s2-summary",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 2 서머리</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#333]">
        <li><span class="font-bold text-[#1a1a1a]">SOP 7단계</span>를 만들어 원장 역할(의료 판단·시술)과 스탭 역할(행정·준비)을 명확히 분리한다 — 이것만으로 운영 혼선의 절반이 해소된다</li>
        <li><span class="font-bold text-[#1a1a1a]">미용 적응증 발견</span>은 영업이 아니라 관찰이다 — 진료 중 환자 얼굴에서 보이는 것을 자연스럽게 연결하는 것이 전환의 시작점</li>
        <li><span class="font-bold text-[#1a1a1a]">상담 3단계</span>(발견 &rarr; 연결 &rarr; 제안)를 지키되, 발견 단계에서 반응이 없으면 그날은 거기서 끝내도 된다</li>
        <li><span class="font-bold text-[#1a1a1a]">세무 구조</span>는 미용 시술 시작 전에 과세 겸업 사업자로 전환하고, 과세/면세 분리 수납을 첫날부터 세팅해야 한다</li>
        <li><span class="font-bold text-[#1a1a1a]">응급 재료</span>(히알루로니다제·에피네프린)는 필러 시술 시작 전에 반드시 구비 — 없으면 시작하지 않는다</li>
        <li><span class="font-bold text-[#1a1a1a]">재방문율 50%</span>가 운영 안정의 기준선이다 — 시술 당일 다음 예약을 잡는 것이 가장 중요한 단일 행동</li>
        <li><span class="font-bold text-[#1a1a1a]">치과의 최대 자산</span>은 이미 존재하는 정기 검진·스케일링 루틴이다 — 여기에 미용 시술을 얹는 것이 가장 효율적인 재방문 구조</li>
      </ul>
    `,
  },
  {
    id: "s2-checklist",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 2 체크리스트</h2>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">체크</th><th class="px-4 py-2 text-left font-medium">항목</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">SOP 7단계를 문서화하고 스탭과 공유했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술별 체크카드를 시술실에 비치했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 운영 금지 항목 표를 출력하여 게시했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">얼굴 부위별 적응증 발견 매뉴얼을 숙지했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">상담 스크립트를 소리 내어 5회 이상 연습했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과세 겸업 사업자 전환을 완료했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과세/면세 분리 수납 프로세스를 구축했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 재료를 구비하고 위치를 스탭에게 공유했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 프로토콜 스탭 훈련 일정을 잡았는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재방문 4단계 시스템을 세팅했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">카카오톡 채널을 개설하고 친구 추가 유도 프로세스를 정했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재방문율 월별 점검표를 만들고 측정을 시작했는가</td></tr>
        </tbody>
      </table>
    `,
  },
];
