// 가이드북 초고 리뷰 콘텐츠 데이터
// 각 섹션: { id: 문단 식별자, html: 렌더링할 HTML }

export interface Section {
  id: string;
  html: string;
}

export const contentData: Record<string, Section[]> = {
  prologue: [
    {
      id: "pro-title",
      html: `
        <div class="text-center py-12 border-b border-[#222] mb-10">
          <p class="text-[#D4567A] text-sm font-medium tracking-[0.3em] mb-4">A E S T H E T I C &nbsp; D E N T I S T R Y &nbsp; P R A C T I C E &nbsp; G U I D E</p>
          <h1 class="text-4xl font-bold text-white mb-3">미용치과 도입 실무 마스터</h1>
          <p class="text-[#666] text-sm">(주)더스테이션 | 의료성장연구소</p>
        </div>
      `,
    },
    {
      id: "pro-01",
      html: `
        <h2 class="text-2xl font-bold text-white mb-6">01. 당신의 치과는 지금, 진화하고 있는가</h2>
        <p class="text-[#bbb] leading-relaxed mb-4">치과 개원 시장의 판이 근본적으로 흔들리고 있다.</p>
        <p class="text-[#bbb] leading-relaxed mb-4">건강보험 수가는 수 년째 제자리걸음이고, 길 하나를 두고 마주한 개원가의 경쟁은 숨이 막힐 지경이다. 신환 유입은 눈에 띄게 줄어들며, 임플란트와 교정에만 의존하는 전통적인 수익 구조로는 머지않아 성장의 한계에 부딪히는 임계점이 반드시 찾아온다. 진료실을 지키는 원장들이라면 누구나 뼈저리게 체감하고 있는 서늘한 현실이다.</p>
        <p class="text-[#bbb] leading-relaxed mb-4">변화가 필요하다는 것은 모두가 안다. 문제는 '어디서부터 어떻게 돌파구를 찾을 것인가'이다.</p>
        <p class="text-white font-bold text-lg mb-6">미용치과는 그 막막한 질문에 대한 가장 현실적이고 강력한 해답이다.</p>
      `,
    },
    {
      id: "pro-market",
      html: `
        <p class="text-[#bbb] leading-relaxed mb-6">보톡스, 필러, 레이저, 실리프팅으로 대표되는 안면미용시술 시장은 대한민국 대법원 판결을 통해 치과의사에게 법적으로 완벽하게 열려 있다. 이 시장이 정체된 치과계와 달리 지금 이 순간에도 폭발적으로 팽창하고 있는 메가 트렌드라는 점이다.</p>
        <div class="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 mb-8">
          <h3 class="text-[#D4567A] font-bold text-sm mb-4 tracking-wider">미용치과 시장을 증명하는 압도적 지표</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-[#D4567A] font-bold text-lg shrink-0">20~40%</span>
              <span class="text-[#999] text-sm pt-1">기존 치과 수익 대비 미용시술 추가 매출 비중</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#D4567A] font-bold text-lg shrink-0">845%</span>
              <span class="text-[#999] text-sm pt-1">글로벌 비외과적 미용시술 시장의 경이로운 성장률</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#D4567A] font-bold text-lg shrink-0">2016년</span>
              <span class="text-[#999] text-sm pt-1">대법원 전원합의체 판결 — 치과의사 안면 시술 합법 확정</span>
            </div>
          </div>
        </div>
        <p class="text-white font-bold text-lg mb-6">이 책은 그 낯설지만 매력적인 길을 처음 걷고자 하는 원장들을 위한 가장 완벽한 실전 로드맵이다.</p>
      `,
    },
    {
      id: "pro-02",
      html: `
        <h2 class="text-2xl font-bold text-white mb-6">02. 치과가 이 시장의 주도권을 쥐어야 하는 압도적 이유</h2>
        <p class="text-[#bbb] leading-relaxed mb-6">흔히들 묻는다. 피부과나 성형외과가 이미 선점하고 치열하게 다투는 시장에, 치과가 굳이 뛰어들 이유가 있을까.</p>
        <p class="text-[#bbb] leading-relaxed mb-6">대답은 단호하다. '있다'. 그것도 압도적으로 유리한 조건으로 존재한다. 치과는 미용 시장에서 타 진료과가 결코 흉내 낼 수 없는 세 가지 절대적 무기를 쥐고 있다.</p>
      `,
    },
    {
      id: "pro-weapon1",
      html: `
        <div class="border-l-2 border-[#D4567A] pl-5 mb-6">
          <h3 class="text-white font-bold mb-2">첫째, 타의 추종을 불허하는 해부학적 전문성이다.</h3>
          <p class="text-[#bbb] leading-relaxed">치과의사는 학부 시절부터 6년 이상 안면부 신경과 혈관, 근육의 복잡한 해부학적 구조를 가장 혹독하고 정밀하게 훈련 받은 유일무이한 전문 직역이다. 매일같이 좁고 예민한 구강 내에 마취 주사를 놓으며 벼려진 손끝의 감각은, 보톡스와 필러 시술에서 치과만의 가장 날카로운 무기가 된다.</p>
        </div>
      `,
    },
    {
      id: "pro-weapon2",
      html: `
        <div class="border-l-2 border-[#D4567A] pl-5 mb-6">
          <h3 class="text-white font-bold mb-2">둘째, 유치 비용 '제로(0)'의 거대한 기존 구환 자산이다.</h3>
          <p class="text-[#bbb] leading-relaxed">이것이 치과만이 가진 결정적 승부수다. 피부과나 에스테틱 샵이 막대한 마케팅 비용을 쏟아부어 신환을 모을 때, 치과에는 이미 원장과 단단한 신뢰 관계가 형성된 수백, 수천 명의 잠재적 미용 고객이 제 발로 찾아온다. 치과 진료를 마친 환자가 자연스럽게 얼굴 라인 상담으로 이어지는 이 매끄러운 동선은, 외부 마케팅에 의존하는 일반 의원이 구조적으로 절대 모방할 수 없는 치과만의 특권이다.</p>
        </div>
      `,
    },
    {
      id: "pro-weapon3",
      html: `
        <div class="border-l-2 border-[#D4567A] pl-5 mb-6">
          <h3 class="text-white font-bold mb-2">셋째, 흔들림 없는 완벽한 법적 근거다.</h3>
          <p class="text-[#bbb] leading-relaxed">2016년 대법원 전원합의체 판결을 통해 치과의사의 안면 미용시술은 합법임이 최종 확정되었다. 더 이상 눈치를 보거나 위축될 이유가 없다.</p>
        </div>
        <p class="text-[#bbb] leading-relaxed mb-8">기억해야 한다. 치과의 안면미용시술은 남의 파이를 뺏어오기 위해 억지로 끼어드는 소모적인 진흙탕 싸움이 아니다. 법이 인정한 본인들의 땅에서, 이미 보유한 자산을 활용해 포지션을 가장 영리하고 우아하게 확장하는 정당한 권리다.</p>
      `,
    },
    {
      id: "pro-03",
      html: `
        <h2 class="text-2xl font-bold text-white mb-6">03. 메디스테이션의 약속</h2>
        <p class="text-[#bbb] leading-relaxed mb-4">의료성장연구소 메디스테이션은 치과 미용시술 도입을 전문으로 연구하고 설계하는 컨설팅 및 교육 연구소이다.</p>
        <p class="text-[#bbb] leading-relaxed mb-4">우리가 제공하는 것은 단순히 주사기 잡는 법이나 단편적인 시술 테크닉 교육에 머물지 않는다. 원장의 치과가 안전하고 품격 있는 '미용치과'로 완벽하게 전환될 수 있도록, 도입 첫날의 설계부터 스탭 교육, 환자 유입, 운영 시스템의 안착까지 전 과정을 함께 걷는 든든한 러닝메이트다.</p>
        <p class="text-[#bbb] leading-relaxed mb-4">이 책은 우리가 현장에서 증명해 낸 그 기나긴 여정의 전체 지도와 같다. 어디서 발을 떼어야 하는지, 무엇을 준비하고 어떤 순서로 움직여야 리스크를 줄일 수 있는지 STEP 0부터 STEP 5까지 차분히 따라가기만 하면 된다.</p>
        <p class="text-white font-bold text-lg mb-8">준비된 원장에게, 미용치과 시장의 문은 이미 무한한 성장의 기회로 활짝 열려 있다.</p>
      `,
    },
    {
      id: "pro-roadmap",
      html: `
        <h2 class="text-2xl font-bold text-white mb-6">이 책의 구성 : 미용 치과의학 입문 전체 로드맵</h2>
        <p class="text-[#888] mb-6">법적 근거 확립부터 재무 관리까지, 성공적인 안착을 위한 6단계 체계적 입문</p>
        <div class="space-y-3">
          <div class="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 flex gap-4 items-start hover:border-[#D4567A]/40 transition-colors">
            <span class="text-[#D4567A] font-bold text-sm shrink-0 mt-0.5">STEP 0</span>
            <div>
              <p class="text-white font-medium text-sm">법적 근거 (판결 확정)</p>
              <p class="text-[#777] text-xs mt-1">대법원 판결 철저 분석, 시술 허용 범위 지도, 글로벌 스탠다드 및 리스크 최소화 원칙</p>
            </div>
          </div>
          <div class="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 flex gap-4 items-start hover:border-[#D4567A]/40 transition-colors">
            <span class="text-[#D4567A] font-bold text-sm shrink-0 mt-0.5">STEP 1</span>
            <div>
              <p class="text-white font-medium text-sm">도입 방향 설정 (전략 수립)</p>
              <p class="text-[#777] text-xs mt-1">7대 핵심 시술별 가이드, 수가 체계 설계, 수익 구조 분석, 최적의 장비 및 제품 선정</p>
            </div>
          </div>
          <div class="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 flex gap-4 items-start hover:border-[#D4567A]/40 transition-colors">
            <span class="text-[#D4567A] font-bold text-sm shrink-0 mt-0.5">STEP 2</span>
            <div>
              <p class="text-white font-medium text-sm">운영 시스템 구축 (프로세스)</p>
              <p class="text-[#777] text-xs mt-1">표준 운영 절차(SOP) 구축, 환자 상담 매뉴얼, 세무·수납 관리, 응급 프로토콜</p>
            </div>
          </div>
          <div class="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 flex gap-4 items-start hover:border-[#D4567A]/40 transition-colors">
            <span class="text-[#D4567A] font-bold text-sm shrink-0 mt-0.5">STEP 3</span>
            <div>
              <p class="text-white font-medium text-sm">팀 운영 및 공간 세팅 (환경 조성)</p>
              <p class="text-[#777] text-xs mt-1">고객 접점(MOT) 설계, 스탭 교육 매뉴얼, 최소 비용으로 완성하는 미용 공간 세팅</p>
            </div>
          </div>
          <div class="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 flex gap-4 items-start hover:border-[#D4567A]/40 transition-colors">
            <span class="text-[#D4567A] font-bold text-sm shrink-0 mt-0.5">STEP 4</span>
            <div>
              <p class="text-white font-medium text-sm">환자 유입 (마케팅 전략)</p>
              <p class="text-[#777] text-xs mt-1">구환 전환 업셀링 전략, 후기 수집, 내·외부 마케팅, 의료광고 심의 통과 가이드</p>
            </div>
          </div>
          <div class="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 flex gap-4 items-start hover:border-[#D4567A]/40 transition-colors">
            <span class="text-[#D4567A] font-bold text-sm shrink-0 mt-0.5">STEP 5</span>
            <div>
              <p class="text-white font-medium text-sm">재무 및 리스크 관리 (통합 관리)</p>
              <p class="text-[#777] text-xs mt-1">재무 분석, 법적 Q&A, 민원·신고 48시간 골든타임 대응, 손익분기점(BEP) 시뮬레이션</p>
            </div>
          </div>
        </div>
      `,
    },
  ],

  step0: [],
  step1: [],
  step2: [],
  step3: [],
  step4: [],
  step5: [],
  appendix: [],
};
