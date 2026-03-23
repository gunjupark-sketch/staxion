import { Section } from "./content-data";

export const step3Data: Section[] = [
  {
    id: "s3-intro",
    html: `
      <div class="text-center py-10 border-b border-[#eee] mb-10">
        <p class="text-[#D4567A] text-sm font-medium tracking-[0.3em] mb-4">S T E P &nbsp; 3</p>
        <h1 class="text-3xl font-bold text-[#1a1a1a] mb-3">팀 운영 & 공간</h1>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">환자가 미용 시술을 위해 치과를 선택할 때, 기술은 기본값이다. 차이를 만드는 건 경험이다. 이 STEP은 원장 혼자 잘 해서는 만들어지지 않는 것들 — 팀의 태도, 공간의 분위기, 환자가 느끼는 전체 흐름을 설계하는 방법을 다룬다.</p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">
        <p class="text-sm"><span class="font-bold text-[#1a1a1a] not-italic">이전 STEP과의 관계:</span> STEP 1에서 어떤 시술을 도입할지 정했고, STEP 2에서 시술이 돌아가는 SOP를 만들었다. 이 STEP에서는 그 SOP를 <span class="font-bold not-italic">누가, 어떤 공간에서, 어떤 태도로</span> 수행할 것인지를 설계한다.</p>
      </div>
    `,
  },
  {
    id: "s3-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3-1. 환자경험(MOT) 구조 이해</h2>
      <p class="text-[#333] leading-relaxed mb-4">MOT(Moment of Truth, 결정적 순간)는 고객이 브랜드와 접촉하는 순간을 말한다. 스칸디나비아 항공의 얀 칼슨이 제안한 개념으로, 고객의 만족은 단 한 번의 결정적 순간에 좌우된다는 원리다. 치과 미용 시술에서 이 원리는 더 강하게 작동한다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용 환자는 치과 치료 환자와 다르다</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">구분</th><th class="px-4 py-2 text-left font-medium">치과 치료 환자</th><th class="px-4 py-2 text-left font-medium">미용 시술 환자</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">내원 동기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필요에 의해 (통증·기능)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기대에 의해 (개선·아름다움)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기준</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 결과 (기능 회복)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경험 전체 (기분·분위기·대화)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불만 발생 지점</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주로 결과 (통증·재치료)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">결과 + 과정 (불친절·분위기·대기)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재방문 결정 요인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">신뢰 (기술·병력관리)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">감정 (좋았던 느낌·기대감)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입소문 동기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"잘 고쳐줬어"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"거기 분위기 좋고 친절해" + "효과 있어"</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심:</span> 미용 환자는 결과가 나쁘지 않아도 과정이 불편하면 돌아오지 않는다. 반대로 결과가 평범해도 경험이 좋으면 재방문하고 추천한다.</p>
      </div>
    `,
  },
  {
    id: "s3-01-advantage",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용치과는 새로운 카테고리다</h3>
      <p class="text-[#333] leading-relaxed mb-4">피부과에서 보톡스 맞는 경험과 치과에서 보톡스 맞는 경험 — 환자 입장에서는 처음이다. 비교 대상도, 고정된 기대값도 없다. 이게 불리해 보이지만 사실은 유리하다. 설계한 대로 경험이 만들어진다. <span class="font-bold text-[#1a1a1a]">미용치과는 지금 그 틀을 직접 만들 수 있는 시점이다.</span></p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">
        <p class="text-sm">피부과를 따라하면 안 된다. 치과 신뢰 기반 위에 미용 경험을 얹는 새로운 형태를 설계하는 것이 MOT의 출발점이다.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">치과의 유리한 접점 vs 취약한 접점</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">유리한 접점</th><th class="px-4 py-2 text-left font-medium">취약한 접점</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이미 신뢰가 있는 기존 환자</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">핸드피스 소리 — 미용 환자 긴장·불안 유발</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의사에 대한 전문성 신뢰 기본 내장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 냄새 (약품·소독) — 기대감 저하</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구강·안면 해부학 지식 — 시술 설명 신뢰도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">딱딱한 진료 분위기 — 미용 분위기와 충돌</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정기 검진으로 자연스러운 재방문 루틴</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 체어 — 미용 전용 베드 아님</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료기관 청결·위생 이미지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 응대 — 치료 중심 언어·태도</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">설계 원칙:</span> 유리한 접점은 최대한 활용하고, 취약한 접점만 선택적으로 보완한다. 치과 전체를 피부과처럼 바꾸려 하면 돈도 많이 들고 정체성도 흐려진다.</p>
      </div>
    `,
  },
  {
    id: "s3-01-mot7",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용치과 MOT 7단계 — 접점별 설계</h3>
      <p class="text-[#333] leading-relaxed mb-4">환자가 처음 인지하는 순간부터 귀가 후까지, 7개 접점에서 무엇을 경험하느냐가 재방문과 추천을 결정한다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">접점</th><th class="px-4 py-2 text-left font-medium">환자 기대</th><th class="px-4 py-2 text-left font-medium">치과 취약점</th><th class="px-4 py-2 text-left font-medium">보완 방향</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">온라인 첫 접촉</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">내 고민을 이 치과가 이해하는가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 홈페이지 위주. 미용 콘텐츠 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 전용 SNS 콘텐츠. 전후 사진. 원장 설명 영상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전화·문자 예약</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">빠른 응대. 미용 전문 느낌</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구분 없는 응대</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 전용 예약 멘트. 시술명 명기</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">내원·대기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">설레는 공간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">핸드피스 소리. 치과 냄새</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">향기 디퓨저. 미용 잡지·룩북. 소음 차단</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">상담</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">내 고민을 듣고 맞춤 제안</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 설명처럼 딱딱하게</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장이 먼저 묻는다. 거울 보며 함께</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안전하고 편안하게</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불안, 통증 걱정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 전 흐름 설명. 중간 상태 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주의사항 명확히</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">종이 한 장 건넴</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">직접 안내. 다음 예약. 귀가 후 연락 예고</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 후</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">내 상태를 신경 써주는가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아무 연락 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~3일 내 안부 문자. 부작용 질문 통로</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">치과가 절대 버려선 안 되는 것</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">지킬 것</th><th class="px-4 py-2 text-left font-medium">이유</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장이 직접 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부과와 가장 큰 차이. 의사가 직접 한다는 신뢰가 핵심 경쟁력</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의학적 설명</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"이 부위 근육 구조가 이래서" — 해부학 지식이 신뢰를 만듦</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">차트·기록</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 이력 누적 관리 — 케어 연속성</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">청결·위생</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료기관 수준 위생이 당연히 유지돼야 함</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm">MOT 설계는 거창한 인테리어 공사가 아니다. 스탭이 어떤 말을 하느냐, 귀가할 때 뭘 챙겨주느냐, 다음 날 문자가 오느냐 — 이런 작은 접점들의 집합이 환자가 기억하는 치과의 경험이다.</p>
      </div>
      <div class="bg-[#f5f5f5] border border-dashed border-[#ddd] p-6 text-center text-[#999] text-sm rounded-lg mb-6">[이미지: 미용치과 MOT 7단계 여정 맵 — 접점별 환자 기대/취약점/보완 방향 시각화]</div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s3-02",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3-2. 원장 시술 역량 준비</h2>
      <p class="text-[#333] leading-relaxed mb-4">스탭을 교육하기 전에, 공간을 세팅하기 전에, 원장이 먼저 준비돼 있어야 한다. 원장이 시술의 전체 흐름을 직접 알지 못하면 스탭 역할 분리도, 환자 상담도, 응급 대응도 제대로 설계할 수 없다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">교육 받기 전 자가 점검</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">점검 항목</th><th class="px-4 py-2 text-left font-medium">확인 포인트</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면 근육 재점검</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근·측두근 외에 추미근·전두근·안륜근 위치와 기능 재확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">혈관 위험 구역</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 혈관 폐색 고위험 — 비순구·이마·눈 주변. 혈관 주행 경로 숙지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보툴리눔 독소 기초</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">작용 기전, 확산 범위, 용량 설정, 희석 농도, 브랜드별 역가 차이</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 종류와 특성</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA 필러 G prime 개념, 부위별 적합 제품, 히알루로니다제 역할</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 후 합병증 스펙트럼</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경증(멍·부종)부터 응급(혈관 폐색·괴사)까지 이론 숙지</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">주의:</span> 기존 치과 지식이 있다고 바로 시술 시작하면 안 된다. 특히 필러는 주입 깊이·압력·부위에 따라 혈관 손상 위험이 있다. 반드시 정식 교육 과정을 먼저 이수해야 한다.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">교육 경로</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">교육 유형</th><th class="px-4 py-2 text-left font-medium">장점</th><th class="px-4 py-2 text-left font-medium">한계</th><th class="px-4 py-2 text-left font-medium">적합한 경우</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제조사 교육</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">해당 제품 집중 실습. 무료 또는 저렴</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">자사 제품 위주</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">특정 장비·제품 도입 결정 후</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">학회·세미나</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최신 트렌드·논문 기반. 네트워크</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이론 중심. 실습 제한적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기초 지식 확장·업데이트</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전문 교육기관</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임상 중심 커리큘럼. 단계별 실습</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">비용 발생</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">처음 시작하는 원장에게 가장 적합</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">동료 원장 멘토링</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">현장 맥락. 실제 케이스 공유</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">체계성 부족</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기초 교육 이후 보완 수단</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">선택 기준 요약:</span> (1) 실습 비율이 이론보다 높은가 (2) 응급 대응을 직접 다루는가 (3) 교육 후 사후 질문이 가능한가 — 이 세 가지 기준으로 판단.</p>
      </div>
    `,
  },
  {
    id: "s3-02-first",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">첫 시술을 어떻게 시작할 것인가</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">방법</th><th class="px-4 py-2 text-left font-medium">핵심 포인트</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">더미 연습</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">젤리·실리콘 모형으로 주입 압력·속도·깊이 감각 익히기</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">지인·스탭 연습</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">동의를 받고 저용량부터. 경과 관찰 1~2주</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">첫 환자 선정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">저위험 부위(교근 보톡스)부터. 고위험 부위는 경험 충분 후</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">누적 케이스 관리</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술별 50건 이상 누적 전까지 고난이도 시술 금지. 전후 사진 보관</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술별 숙련도 기준</h3>
      <p class="text-[#333] leading-relaxed mb-4 text-sm"><span class="font-bold text-[#1a1a1a]">실무 경험 기반 권장 기준입니다.</span> 아래 케이스 수는 공식 학회 기준이 아닌 실무 경험에서 비롯한 권장 수치입니다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">시술</th><th class="px-4 py-2 text-left font-medium">독립 시술 가능 기준</th><th class="px-4 py-2 text-left font-medium">다음 단계 전 확인</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20케이스 이상. 비대칭 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">양측 균형·교근 강도 차이 파악·3개월 추적</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마·미간 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">30케이스 이상. 눈꺼풀 처짐 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전두근·추미근 확산 범위 조절 숙달</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA 필러 (팔자·입술)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교육 실습 포함 30케이스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제 상비·혈관 폐색 즉각 대응 가능</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코·이마 필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">팔자 필러 50케이스 이상 후</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">혈관 폐색 응급 대응 훈련 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전문 교육 이수. 20케이스 이상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실 종류·방향·층 설계 이해</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU·RF·LDM</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제조사 교육 이수. 5케이스 이상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에너지 설정·핸드피스 속도·파라미터 조절</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">원칙:</span> 원장이 먼저 30케이스. 그 다음에 스탭 교육. 그 다음에 마케팅. 이 순서를 지키지 않으면 어딘가에서 반드시 문제가 터진다.</p>
      </div>
      <div class="bg-[#f5f5f5] border border-dashed border-[#ddd] p-6 text-center text-[#999] text-sm rounded-lg mb-6">[도표: 시술별 숙련도 로드맵 — 교근 보톡스 &rarr; 이마·미간 &rarr; 필러 &rarr; 고위험 필러 &rarr; 실리프팅 단계별 진행 타임라인]</div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s3-03",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3-3. 스탭 서비스 매뉴얼</h2>
      <p class="text-[#333] leading-relaxed mb-4">SOP가 '무엇을 하느냐'였다면, 서비스 매뉴얼은 '어떻게 대하느냐'다. 같은 시술 결과라도 스탭의 태도에 따라 환자가 느끼는 전체 경험이 달라진다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용 환자 응대 — 치과 환자 응대와 뭐가 달라야 하나</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">치과 치료 응대</th><th class="px-4 py-2 text-left font-medium">미용 시술 응대</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">말투</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정확·간결. 의료적 전달 중심</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">따뜻하고 편안하게. 감정적 공감 포함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">속도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효율 중심. 빠르게 안내</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">여유 있게. 환자 표정 보면서</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">용어</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료 용어 자연스럽게 사용</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">쉬운 말로. "주입" 대신 "넣어드려요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대기 중 응대</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">호명·안내 위주</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"오늘 어떤 시술 오셨어요?" 가볍게 말 걸기</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">영수증·약 설명 후 보내기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"오늘 잘 받으셨어요?" 확인 후 다음 예약까지 챙기기</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심:</span> 미용 환자는 '대접받는 느낌'을 원한다. 치료받으러 온 게 아니라 관리받으러 온 거다.</p>
      </div>
    `,
  },
  {
    id: "s3-03-scripts",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">접점별 표준 응대 스크립트</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">1. 전화 예약</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-4 text-[#555] italic">
        <p class="text-sm mb-1">"[치과명]입니다. 어떻게 도와드릴까요?"</p>
        <p class="text-sm mb-1">(미용 시술 문의 시) "네, 저희 미용 시술 담당하고 있어요. 어떤 부분 고민이세요?"</p>
        <p class="text-sm">(예약) "O월 O일 O시에 원장님이 직접 상담부터 해드려요. 처음 오시는 거면 상담 먼저 하시고 시술 결정하셔도 돼요."</p>
      </div>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">하면 안 되는 말</th><th class="px-4 py-2 text-left font-medium">이렇게 해</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"보톡스요? 잠깐만요" (길게 대기시키기)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"네, 교근 보톡스 문의주셨군요. 원장님이 직접 상담해드려요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"가격은 오셔서 말씀드려요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"대략적인 가격 범위는 OO만원대예요. 상담 후 정확히 안내드릴게요"</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">2. 내원·접수</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-4 text-[#555] italic">
        <p class="text-sm mb-1">"안녕하세요, 오늘 OOO 시술로 오셨죠? 기다리시는 동안 편하게 앉아 계세요."</p>
        <p class="text-sm">(대기 중 자연스럽게) "혹시 오늘 처음 오신 거예요?" — 가볍게 공감대 형성</p>
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">3. 시술 후 귀가 안내</h4>
      <div class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-4 text-[#555] italic">
        <p class="text-sm mb-1">"오늘 잘 받으셨어요? 주의사항 몇 가지만 말씀드릴게요."</p>
        <p class="text-sm mb-1">(보톡스) "48시간 동안은 시술 부위 누르거나 마사지하지 마세요. 효과는 3~7일 후부터 느껴져요."</p>
        <p class="text-sm">"다음 예약은 3~4개월 후예요. 지금 바로 잡아드릴까요?"</p>
      </div>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">하면 안 되는 말</th><th class="px-4 py-2 text-left font-medium">이렇게 해</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주의사항 종이만 건네고 "조심하세요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구두로 핵심 2가지 + 다음 예약 바로 세팅 + 귀가 후 연락 예고</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s3-03-complaints",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스탭이 자주 저지르는 실수</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">번호</th><th class="px-4 py-2 text-left font-medium">실수 유형</th><th class="px-4 py-2 text-left font-medium">왜 문제인가</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가격을 먼저 말한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가격 전에 신뢰·공감이 먼저</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과도하게 친절해서 부담스럽다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과장된 환영은 어색하고 신뢰 저하</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료 용어로 설명한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자는 못 알아듣고 질문하기도 어색</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">귀가 시 다음 예약을 안 잡는다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"편할 때 연락 주세요"는 재방문 포기</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">컴플레인 환자에게 즉시 해명한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"저는 제대로 했는데요" — 분쟁을 키움</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">컴플레인 초기 대응 — 스탭 선 vs 원장 에스컬레이션</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">상황</th><th class="px-4 py-2 text-left font-medium">스탭 처리</th><th class="px-4 py-2 text-left font-medium">원장 에스컬레이션</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">멍·붓기 — 일반적 경과</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"정상 반응이에요. 1주일 내로 빠져요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"></td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"효과가 없는 것 같아요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"2주 후 효과 최대예요"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2주 후에도 없으면 원장</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"아프다, 불편하다"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">24시간 이내 통증 — 정상 경과 안내</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">극심한·지속 통증 &rarr; 즉시 원장</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부위 비대칭, 결과 불만족</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"></td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 원장. 스탭이 판단하면 안 됨</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환불 요청</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"></td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 원장. 스탭이 금액 언급 절대 금지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부색 변화·극심한 통증</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"></td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 원장 + 응급 프로토콜</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-2"><span class="font-bold text-[#1a1a1a]">컴플레인 초기 응대 표준 문장:</span></p>
      <div class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">
        <p class="text-sm mb-1">"불편하셨겠어요. 말씀해주셔서 감사해요."</p>
        <p class="text-sm">"원장님께 바로 말씀드릴게요. 잠깐만 기다려 주세요."</p>
      </div>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm">절대 하면 안 되는 말: "저는 잘 모르겠는데요", "그건 정상이에요" (증상 확인 전 단정)</p>
      </div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s3-04",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3-4. 실무 교육 커리큘럼</h2>
      <p class="text-[#333] leading-relaxed mb-4">스탭 교육에서 가장 많이 실패하는 패턴이 있다. 원장이 시술 방법을 먼저 가르치려 한다. <span class="font-bold text-[#1a1a1a]">스탭에게 시술 방법을 가르치는 게 아니다.</span> 원장이 시술하는 동안 스탭이 어떻게 보조하고, 환자를 어떻게 응대하고, 언제 원장을 불러야 하는지를 가르치는 것이다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">인력 구성 — 치위생사와 간호조무사의 업무 범위 차이</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">구분</th><th class="px-4 py-2 text-left font-medium">치과위생사</th><th class="px-4 py-2 text-left font-medium">간호조무사</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">자격</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치위생(학)과 3~4년제 졸업 + 국가시험</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교육과정 이수 + 국가시험</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 고유 업무</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치석 제거, 치아 본뜨기, 불소 도포 등</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">해당 없음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 보조</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취 크림 도포, 사진 촬영, 소모품 준비, 귀가 안내, 사후 연락</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">동일 범위 가능 (의사 지도 하에)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금지 행위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주사 행위, 의료기기 직접 조작, 시술 결정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">동일</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">실무 판단:</span> 미용 시술 보조만 놓고 보면 치위생사와 간호조무사의 법적 업무 범위 차이가 크지 않다. 그러나 치과 고유 업무(스케일링 등)를 겸하려면 치위생사가 필수다.</p>
      </div>
    `,
  },
  {
    id: "s3-04-resistance",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스탭 저항 — 미리 알고 대비해야 한다</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">저항 유형</th><th class="px-4 py-2 text-left font-medium">표면에 나오는 말</th><th class="px-4 py-2 text-left font-medium">실제 원인 & 접근법</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">면허 경계 불안</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"이거 하다가 저 문제되는 거 아니에요?"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">비의료 보조는 면허 위험 없음을 명확히 구분</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">직업 정체성 충돌</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"저는 치과 어시스트로 온 거지"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"환자 경험 코디네이터" 역할로 재정의</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">업무 과부하</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치과 일도 바쁜데 이것까지요?"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실제 과부하인지 변화 거부인지 구분</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보상 없는 추가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">(말 안 하고 버팀)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인센티브 구조가 함께 설계돼야 함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">소외감·통보</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"갑자기 이런 게 생겼어요?"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">도입 전 스탭 공유 미팅을 반드시 먼저</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">가장 중요한 것:</span> 도입 전 스탭 공유 미팅을 반드시 해야 한다. 원장이 혼자 결정하고 통보하는 구조가 저항의 뿌리다.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스탭 교육 4단계</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">이론 &rarr; 관찰 &rarr; 보조 &rarr; 숙달.</span> 이 순서를 지켜야 한다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">방법</th><th class="px-4 py-2 text-left font-medium">소요 기간</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이론</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1주</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 개요·효과·부작용. 원장 vs 스탭 역할 구분. 응급 상황 종류. 금지 행위</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">관찰</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~3주</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장 시술 옆에서 지켜보기. 직접 하는 것 없음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보조</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~8주</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재료 세팅·귀가 안내·문자 발송. 스크립트 적용. 원장 실시간 피드백</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">숙달</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3개월+</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">독립적 사전 준비. 컴플레인 초기 대응. 다음 예약 루틴화</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">인센티브 구조 설계</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">방식</th><th class="px-4 py-2 text-left font-medium">내용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 건당 수당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 건당 수당 구조 설계</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 목표 인센티브</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 시술 건수 목표 달성 시 팀 인센티브</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">역할 직급 부여</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"미용 코디네이터" 명칭. 명함에 기재</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교육 지원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">외부 세미나·교육 비용 지원</td></tr>
        </tbody>
      </table>
      <div class="bg-[#f5f5f5] border border-dashed border-[#ddd] p-6 text-center text-[#999] text-sm rounded-lg mb-6">[이미지: 스탭 교육 4단계 타임라인 — 이론(1주) &rarr; 관찰(2~3주) &rarr; 보조(4~8주) &rarr; 숙달(3개월+) 시각화]</div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s3-05",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3-5. 공간·동선 세팅</h2>
      <p class="text-[#333] leading-relaxed mb-4">공간이 환자 경험을 만든다. 인테리어 예산이 없어도 된다. 동선이 정리되고, 취약한 감각 접점이 보완되면 환자가 느끼는 분위기가 달라진다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">현실 전제:</span> 별도 미용 전용실을 갖춘 치과는 소수다. 대부분은 기존 진료실 체어 하나에서 시작한다. 이 가이드는 그 현실에서 출발한다.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">CASE A. 기존 진료실 활용 — 체어 1개 겸용</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">최소 기준 및 방법</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">체어 선정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 전용으로 지정할 체어 1개. 가능하면 소리 덜 들리는 안쪽 체어</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">조명</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">무영등은 끄거나 조광. 따뜻한 색온도(3000K) 스탠드 조명 1개 추가 (3~10만원)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">커튼·파티션</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이동식 파티션(10~20만원)으로 "분리된 느낌"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">향기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">디퓨저 1개. 은은한 향(라벤더·유칼립투스). 2~5만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">소모품 정리</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 소모품을 치과 재료와 분리 보관. 별도 트레이·수납함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">거울</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">상담·귀가 시 결과 확인용. 스탠드 거울 1개 (1~5만원)</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">핵심:</span> 전환 동선의 목적은 "같은 공간인데 다른 경험"을 만드는 것. 조명·향기·스탭 톤 세 가지만 바뀌어도 환자는 다르게 느낀다.</p>
      </div>
    `,
  },
  {
    id: "s3-05-caseb",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">CASE B. 별도 미용 전용실</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">조명 설계</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">용도</th><th class="px-4 py-2 text-left font-medium">색온도</th><th class="px-4 py-2 text-left font-medium">비고</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 중 — 정밀 작업</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5000~6500K</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전용 시술 조명 또는 의료용 헤드 조명</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">상담·대기·귀가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2700~3000K</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">천장 등 + 간접 조명. "예뻐 보이는" 조명</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전신 거울 조명</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3000~4000K</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">양측 보조 조명으로 균일하게</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">치과 환경 약점 보완</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">약점</th><th class="px-4 py-2 text-left font-medium">보완 방법</th><th class="px-4 py-2 text-left font-medium">예상 비용</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">핸드피스 소리</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">흡음 패널, 백색 소음 기기, 잔잔한 음악</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20~50만원 / 스피커 5~10만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 냄새</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">공기청정기, 디퓨저, 시술 전 환기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">15~30만원 / 디퓨저 2~5만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">딱딱한 분위기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">식물, 액자, 따뜻한 색 쿠션·블랭킷</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">소품 합계 10~30만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">차가운 치과 체어</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부드러운 커버, 따뜻한 블랭킷</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">커버 3~10만원 / 베드 30~80만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">프라이버시 부족</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">커튼, 이동식 파티션, 불투명 시트지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">파티션 10~30만원</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">예산별 세팅 시나리오</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">단계</th><th class="px-4 py-2 text-left font-medium">예산</th><th class="px-4 py-2 text-left font-medium">핵심 항목</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최소 세팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">22~45만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탠드 조명, 디퓨저, 거울, 소품, 소모품 분리함, 스피커</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">표준 세팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">110~185만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최소 세팅 + 파티션, 흡음 패널, 공기청정기, 전용 냉장고</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">프리미엄 세팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">385만원~</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">표준 세팅 + 미용 베드, 인테리어(도배·바닥), 간접 조명 시공</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">현실적 조언:</span> 첫 3개월은 최소 세팅으로 시작해라. 시술이 실제로 돌아가고 수익이 나오는 걸 확인한 다음에 단계적으로 올려라. 공간에 먼저 투자하고 시술이 안 되면 돈만 날린다.</p>
      </div>
    `,
  },
  {
    id: "s3-05-infection",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미용 시술 감염관리 기준</h3>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술도 의료 행위다. 치과 감염관리 기준은 미용 시술에도 동일하게 적용된다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">기준</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주사기·니들</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1회용. 환자 간 절대 재사용 금지. 즉시 손상성 폐기물 전용 용기에 폐기</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 부위 소독</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">알코올 스왑 또는 적절한 피부 소독제로 시술 전 소독</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">손 위생</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 전후 손 소독. 니트릴 또는 라텍스 글러브 착용 필수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">캐뉼라·마킹 펜</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">캐뉼라는 1회용. 마킹 펜은 환자별 교체</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 기구 소독·멸균</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재사용 기구는 세척 &rarr; 소독 &rarr; 멸균 절차 준수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료폐기물</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">감염성 폐기물과 손상성 폐기물을 분리 수거. 전용 용기 사용</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 공간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 전후 표면 소독. 환자 간 정리 후 다음 환자</td></tr>
        </tbody>
      </table>
      <div class="bg-[#f5f5f5] border border-dashed border-[#ddd] p-6 text-center text-[#999] text-sm rounded-lg mb-6">[이미지: CASE A vs CASE B 공간 레이아웃 비교 — 평면도 형태]</div>
      <div class="border-t border-[#eee] my-8"></div>
    `,
  },
  {
    id: "s3-summary",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 3 서머리</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#333]">
        <li><span class="font-bold text-[#1a1a1a]">미용 환자는 치료 환자와 다르다</span> — 결과보다 과정(경험)이 재방문을 결정한다. MOT 7단계에서 취약한 접점만 선택적으로 보완하되, 치과의 본질적 강점은 절대 버리지 않는다</li>
        <li><span class="font-bold text-[#1a1a1a]">원장이 먼저 30케이스</span> — 스탭 교육도, 마케팅도 그 이후다. 교근 보톡스부터 시작해서 고위험 시술로 단계적으로 확장한다</li>
        <li><span class="font-bold text-[#1a1a1a]">스탭 저항은 예외가 아니라 일반적 반응</span> — 도입 전 공유 미팅이 저항의 절반을 사라지게 한다. 인센티브 없는 업무 추가는 실패한다</li>
        <li><span class="font-bold text-[#1a1a1a]">교육 4단계</span>(이론 &rarr; 관찰 &rarr; 보조 &rarr; 숙달)를 지켜야 한다 — 관찰 없이 보조를 시키면 스탭도 환자도 불안하다</li>
        <li><span class="font-bold text-[#1a1a1a]">공간 세팅은 조명·향기·스탭 톤 세 가지</span>만 바꿔도 충분히 시작할 수 있다 — 최소 세팅 50만원 이하로 시작하고, 수익 확인 후 단계적으로 확장</li>
        <li><span class="font-bold text-[#1a1a1a]">컴플레인 기준을 명확히</span> — 스탭이 처리할 것과 원장에게 넘길 것을 미리 정해두어야 한다</li>
        <li><span class="font-bold text-[#1a1a1a]">감염관리는 치과 기준 그대로 적용</span> — 일회용 소모품 폐기, 기구 소독·멸균, 의료폐기물 분리 수거를 기존 체계에 미용 항목으로 추가한다</li>
        <li><span class="font-bold text-[#1a1a1a]">치위생사와 간호조무사의 업무 범위 차이</span>를 알아야 한다 — 미용 보조만으로는 차이가 크지 않으나, 치과 고유 업무 겸직 시 치위생사가 필수</li>
      </ul>
    `,
  },
  {
    id: "s3-checklist",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 3 체크리스트</h2>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white"><tr><th class="px-4 py-2 text-left font-medium">체크</th><th class="px-4 py-2 text-left font-medium">항목</th></tr></thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">MOT 7단계 접점별 보완 방향을 확인하고 우선순위를 정했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장 자가 점검(해부학·합병증·약물 기초)을 완료했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교육기관을 선정하고 교육 일정을 확인했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">더미 연습 &rarr; 지인·스탭 연습 &rarr; 첫 환자 선정 단계를 밟고 있는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">도입 전 스탭 공유 미팅을 진행했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 교육 4단계 일정을 세웠는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인센티브 구조를 설계했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 공간(CASE A 또는 B)을 결정했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최소 세팅 항목(조명·디퓨저·거울·소모품 분리·스피커)을 갖추었는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전환 동선(치과 치료 &rarr; 미용 시술) 프로세스를 세팅했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 감염관리 기준을 기존 체계에 추가했는가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">&square;</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 보조 인력의 직종별 업무 범위를 확인했는가</td></tr>
        </tbody>
      </table>
    `,
  },
];
