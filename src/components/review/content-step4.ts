import { Section } from "./content-data";

export const step4Data: Section[] = [
  /* ───────────────────────── STEP 4 인트로 ───────────────────────── */
  {
    id: "s4-intro",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 4. 환자 유입 — 구환 전환부터 외부 마케팅까지</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용치과의 첫 환자는 밖에서 오지 않는다. 이미 치과에 앉아 있는 구환이 가장 빠르고 확실한 출발점이다. 이 STEP에서는 구환 전환 → 후기 수집 → 내부 마케팅 → 외부 마케팅의 순서로, 광고비 0원에서 시작해 유료 채널까지 확장하는 환자 유입 전략을 다룬다.</p>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">
        <strong class="font-bold text-[#1a1a1a]">이전 STEP과의 관계:</strong> STEP 1~2에서 시술과 운영을 갖추고, STEP 3에서 팀과 공간을 세팅했다. 이제 <strong class="font-bold text-[#1a1a1a]">환자를 데려오는</strong> 단계다. STEP 3의 MOT 설계가 잘 되어 있어야 이 STEP의 구환 전환과 후기 수집이 자연스럽게 작동한다. 마케팅 예산과 ROI 분석은 STEP 5에서 재무적으로 다시 점검한다.
      </blockquote>
    `,
  },

  /* ───────────────────────── 4-1. 구환 전환 & 업셀 전략 ───────────────────────── */
  {
    id: "s4-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">4-1. 구환 전환 &amp; 업셀 전략</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">왜 구환이 최고의 미용 환자인가</h3>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술의 첫 환자를 신환에서 찾으려 하면 광고비가 든다. 피부과·성형외과와 같은 채널에서 경쟁해야 한다. 그런데 치과에는 이미 신뢰가 형성된 구환이 매달 내원하고 있다. 이 차이를 숫자로 보면 명확하다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">비교항목</th>
            <th class="px-4 py-2 text-left font-medium">피부과 신환</th>
            <th class="px-4 py-2 text-left font-medium">치과 구환</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">신뢰 기반</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">없음 — 첫 방문</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이미 형성됨 — 진료 이력 있음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">첫 내원 비용</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">CPC 1~4만원, 실 유입 비용 10만원+</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">0원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">해부학 정보</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">없음 — 문진으로 파악</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">차트에 이미 있음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">첫 시술 거부감</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮음 — 원래 목적으로 방문</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간 — 원장 신뢰가 완충</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재방문 구조</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">없음 — 새로 만들어야</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이미 있음 — 정기 검진·치료</td></tr>
        </tbody>
      </table>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">핵심 전제: 구환 전환은 영업이 아니다. 이미 신뢰 관계가 있는 환자에게 더 나은 선택지를 보여주는 것이다.</blockquote>
    `,
  },
  {
    id: "s4-02",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">구환 세분화 — 누구부터 먼저 공략할 것인가</h3>
      <p class="text-[#333] leading-relaxed mb-4">모든 구환에게 같은 방식으로 접근하면 효율이 떨어진다. 전환 가능성이 높은 순서대로 접근해야 한다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">순위</th>
            <th class="px-4 py-2 text-left font-medium">구환 유형</th>
            <th class="px-4 py-2 text-left font-medium">전환 가능성</th>
            <th class="px-4 py-2 text-left font-medium">첫 접근 포인트</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이갈이·교근 문제 치료 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최고</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"이갈이 치료에 보톡스도 효과적이에요. 치료랑 미용 두 가지 효과가 있어요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정·임플란트 완료 직후</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치료 잘 마무리하셨는데, 얼굴 전체 정리도 생각해보신 적 있으세요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">40~55세 여성 정기 내원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정기 검진 중 자연스럽게 얼굴 관찰 후 발견 방식으로</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">심미 치료(라미네이트·비니어)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치아 라인이 예쁘게 잡히셨는데, 잇몸 쪽도 같이 정리하면 완성도가 올라가요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">30~45세 직장인 남성</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스 → 사각턱 경로. 이갈이·TMJ 연결</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 치료만 원하는 환자</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진료 중 자연스러운 관찰만. 강요 절대 금지</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">주의:</strong> 순위가 낮은 환자에게 무리하게 접근하면 기존 치과 신뢰까지 손상된다. 6순위는 발견 시도만 하고 제안은 하지 않는다.
      </div>
      <div class="bg-[#f5f5f5] border border-dashed border-[#ddd] p-6 text-center text-[#999] text-sm rounded-lg mb-6">[도표: 구환 유형별 전환 가능성 피라미드]</div>
    `,
  },
  {
    id: "s4-03",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">구환 전환 3가지 경로</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">경로 A — 진료 중 자연스러운 발견</h4>
      <p class="text-[#333] leading-relaxed mb-4">진료 중 얼굴을 관찰하다 자연스럽게 고민 포인트를 발견하고 꺼내는 방식. STEP 2-2 적응증 발견 매뉴얼이 이 경로의 핵심이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">진료 상황</th><th class="px-4 py-2 text-left font-medium">자연스러운 연결 멘트</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 촉진 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"교근이 꽤 발달하셨네요. 이갈이나 이 악무는 습관 있으세요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정 전후 사진 확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"교정 경과 사진 보니까 치아는 잘 잡히고 있어요. 볼이나 입술 쪽에 변화 느끼셨어요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임플란트 완료 경과</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"임플란트 잘 적응되셨죠? 볼 부분이 상대적으로 꺼져 보일 수 있어요. 필러로 균형 잡아드릴 수 있어요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정기 검진·스케일링</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"최근에 얼굴 처지는 느낌이나 피부 신경 쓰이는 부분 있으세요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">라미네이트 완료 직후</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치아 라인이 정말 예쁘게 잡혔네요. 잇몸 쪽도 같이 정리하면 스마일 라인 완성도가 훨씬 올라가요"</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">TIP:</strong> 경로 A의 핵심은 "발견의 톤"이다. "추천합니다"가 아니라 "눈에 보여서 말씀드리는 건데"가 자연스럽다.
      </div>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">경로 B — 치과 치료 마무리 단계 제안</h4>
      <p class="text-[#333] leading-relaxed mb-4">장기 치료가 완료되는 시점은 환자의 기분이 가장 좋고 외모에 대한 관심이 높아지는 타이밍이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">치료 완료 유형</th><th class="px-4 py-2 text-left font-medium">마무리 단계 제안 포인트</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술·턱끝 프로파일 변화 → 필러 연결. 측모 사진으로 자연스럽게</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임플란트 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중안면 볼 볼륨 변화 → 필러 / 스킨부스터</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전악 보철 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수직고경 변화 → 입술 필러 / HIFU 연결</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">라미네이트 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스마일 라인 완성 → 거미 보톡스 연결</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">경로 C — 스탭 브로셔·리플렛 동선</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">접점</th><th class="px-4 py-2 text-left font-medium">스탭 행동</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수납 시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"참, 미용 시술 안내 드릴까요?" → 브로셔 전달</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대기 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대기실에 브로셔 비치 + "심심하시면 한번 보세요~"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">예약 안내</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"다음 번 오실 때 미용 상담도 같이 가능하세요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 완료 축하</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"오래 고생하셨어요! 이참에 미용 상담도 한번 받아보세요"</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">주의:</strong> 스탭은 안내만 한다. 시술 효과·부작용 설명, 시술 추천은 원장만 할 수 있다. 스탭이 시술 내용을 설명하면 의료법 위반 소지.
      </div>
      <div class="bg-[#f5f5f5] border border-dashed border-[#ddd] p-6 text-center text-[#999] text-sm rounded-lg mb-6">[도표: 구환 전환 3가지 경로 플로우차트]</div>
    `,
  },
  {
    id: "s4-04",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">업셀 전략 — 1번 시술에서 2번 시술로</h3>
      <p class="text-[#333] leading-relaxed mb-4">업셀의 핵심은 "더 팔기"가 아니라 "더 잘 해주기"다.</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">업셀 원칙 3가지</h4>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li><span class="font-bold text-[#1a1a1a]">결과 확인 후에만 꺼낸다</span> — 첫 시술 효과를 환자가 직접 체감한 뒤에 다음 시술을 언급한다.</li>
        <li><span class="font-bold text-[#1a1a1a]">임상적 시너지가 있는 조합만</span> — "이것도 해보세요"가 아니라 "이걸 같이 하면 효과가 더 좋아요"가 맞다.</li>
        <li><span class="font-bold text-[#1a1a1a]">환자가 선택하게 한다</span> — "다음에 이것도 하시죠"가 아니라 "관심 있으시면 다음에 말씀해 주세요"가 톤이다.</li>
      </ul>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">시술별 업셀 조합 설계</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">첫 시술</th><th class="px-4 py-2 text-left font-medium">다음 시술 (업셀)</th><th class="px-4 py-2 text-left font-medium">연결 멘트</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU (턱선 리프팅)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"보톡스로 교근은 줄었는데, 턱선 라인을 더 잡고 싶으시면 HIFU가 시너지 좋아요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마 필러 + 스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"주름은 보톡스로 잡았으니, 볼륨 빠진 느낌은 필러로 채우면 자연스러워져요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">팔자 필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">볼 필러 + HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"팔자 라인 잡으셨는데, 볼 전체 처짐도 같이 올리면 완성도가 달라요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 + 필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"피부결이 좋아지셨으니, 주름이나 볼륨 쪽도 정리하면 전체적으로 어려 보여요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">RF + 스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"HIFU 효과 유지하려면 사이사이 RF로 관리하고 스킨부스터로 보습 잡아주면 좋아요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피코 레이저</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM + 스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"색소 잡은 뒤에 LDM으로 진정하면 회복 빠르고, 스킨부스터로 피부결까지"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 + 필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"실로 올렸으면, 보톡스로 잔주름 잡고 꺼진 부분은 필러로 채우면 수술한 것 같은 완성도"</td></tr>
        </tbody>
      </table>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">업셀 타이밍</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">타이밍</th><th class="px-4 py-2 text-left font-medium">적합</th><th class="px-4 py-2 text-left font-medium">이유</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">첫 시술 결과 확인 방문</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">최적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 효과에 만족한 상태. 신뢰 최고점</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 중 (분위기 좋을 때)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">적합</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">자연스럽게 대화 중 한 마디</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">첫 시술 당일</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주의</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 확인도 못 한 상태에서 다음 시술 얘기는 영업처럼 보임</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">결과가 기대 이하</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">금지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 실망한 상태에서 업셀 시도 → 신뢰 붕괴</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수납 직후</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">금지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">방금 돈 냈는데 또 사라는 느낌</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s4-05",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">패키지 설계로 업셀을 구조화하기</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">구환 전환 전용 패키지</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">패키지명</th><th class="px-4 py-2 text-left font-medium">구성</th><th class="px-4 py-2 text-left font-medium">타깃 환자</th><th class="px-4 py-2 text-left font-medium">설계 포인트</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이갈이케어</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스 3회 선불</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이갈이·TMJ 치료 중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치료 목적 강조. 미용 첫 경험 최소 부담</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정완료 마무리</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술/턱끝 필러 1회 + 스킨부스터 3회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정 완료 환자</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치료의 완성" 포지셔닝</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수술후 회복</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM 4회 세트</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임플란트·발치 수술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 거부감 없이 진입. 장벽 최저</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스마일 완성</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">거미 보톡스 + 라미네이트</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">심미 치료 관심</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 치료와 묶어서 통합 경험</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">업셀 전용 패키지</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">패키지명</th><th class="px-4 py-2 text-left font-medium">구성</th><th class="px-4 py-2 text-left font-medium">타깃</th><th class="px-4 py-2 text-left font-medium">설계 포인트</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">턱선 슬리밍 업그레이드</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스 + HIFU 1회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근 보톡스 기존 환자</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">자연 업셀 경로</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리프팅 유지 케어</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">RF 3회 + 스킨부스터 3회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU 받은 환자</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU 효과 유지. 방문 끊기지 않는 구조</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면 풀케어</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 + 필러 + 스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 적극 관심</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">객단가 최대화</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부 리셋 코스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피코 레이저 5회 + LDM 5회</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">색소·피부결 고민</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10회 고정 방문. 소진 후 재구매 연결</td></tr>
        </tbody>
      </table>
      <div class="bg-[#f5f5f5] border border-dashed border-[#ddd] p-6 text-center text-[#999] text-sm rounded-lg mb-6">[이미지: 구환 전환 패키지 → 업셀 패키지 연결 흐름도]</div>
    `,
  },
  {
    id: "s4-06",
    html: `
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">구환 전환율 측정</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">측정 항목</th><th class="px-4 py-2 text-left font-medium">이번 달</th><th class="px-4 py-2 text-left font-medium">목표 기준</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 미용 시술 총 건수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">—</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이 중 기존 구환 비중</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">70% 이상 (초기 3개월)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구환 중 첫 미용 시술 전환 건수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 5건 이상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전환 환자 재방문율</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">60% 이상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">업셀 성공 건수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전환 환자의 30% 이상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구환 대비 전환율</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">___</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 내원 구환의 5% 이상</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">자주 하는 실수</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">실수 내용</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"><span class="font-bold text-[#1a1a1a]">교정·임플란트 치료 중에 미용 시술을 제안한다</span> — 치료비 부담 중인 상황에서 추가 지출 권유는 역효과</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"><span class="font-bold text-[#1a1a1a]">첫 만남 환자에게 바로 미용 제안</span> — 신뢰 없는 상태에서의 제안은 영업이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"><span class="font-bold text-[#1a1a1a]">스탭에게 전환 역할을 떠넘긴다</span> — 시술 결정·제안은 원장이 해야 한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"><span class="font-bold text-[#1a1a1a]">결과가 나오기 전에 업셀 시도</span> — 결과 확인 방문이 업셀 황금 타이밍</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"><span class="font-bold text-[#1a1a1a]">전환율을 측정하지 않는다</span> — 감각이 아닌 숫자로 확인해야 개선 방향이 보인다</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 4-2. 후기 수집 전략 ───────────────────────── */
  {
    id: "s4-07",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">4-2. 후기 수집 전략</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술에서 후기는 구매 전 신뢰의 핵심 증거다. 치과가 미용 시술을 한다고 알리는 것보다, 실제 환자가 "치과에서 했는데 너무 좋았어요"라고 말하는 게 100배 효과적이다.</p>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">핵심 전제: 후기는 요청해야 나온다. 만족한 환자도 바빠서 안 쓴다. 시스템으로 요청 동선을 만들지 않으면 후기는 쌓이지 않는다.</blockquote>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">후기 요청 3접점 동선</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">접점 1 — 시술 직후 (진료실 안)</h4>
      <p class="text-[#333] leading-relaxed mb-4">"오늘 시술 잘 끝났어요. 효과는 보통 2주 후에 제일 잘 보이거든요. 괜찮으시면 결과 느끼신 다음에 네이버 플레이스에 후기 하나 남겨주시면 정말 도움이 돼요."</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">접점 2 — 결과 확인 방문 (시술 후 2주)</h4>
      <p class="text-[#333] leading-relaxed mb-4">"어때요? 효과 느끼세요? 다행이다~ 그러면 네이버에 솔직한 후기 한 줄만 남겨주실 수 있어요?"</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">접점 3 — 카카오 채널 자동 메시지 (D+14)</h4>
      <p class="text-[#333] leading-relaxed mb-4">"안녕하세요 OO님. 지난번 시술 후 2주가 지났네요. 만족스러우시다면 네이버 플레이스에 솔직한 후기 한 줄 남겨주시면 정말 큰 도움이 됩니다."</p>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">네이버 플레이스 후기 최적화 체크리스트</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">플레이스 기본 정보 최신화 (진료시간·주차·전화번호)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 서비스 항목 등록 (보톡스·필러·HIFU 등)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대표 사진 — 밝고 청결한 원내 사진 5장 이상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">후기 답글 — 모든 후기에 48시간 내 답글</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">별점 4.7 이상 유지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">후기 QR코드 — 수납 데스크·대기실 비치</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 신규 후기 목표 설정 및 측정</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">절대 하면 안 되는 것</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">금지 항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] text-[#D4567A] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">허위 후기 또는 지인·직원이 작성한 후기 — 의료광고법 위반</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] text-[#D4567A] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"후기 남기시면 할인해 드려요" — 경제적 이익 제공 조건 후기는 법 위반</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] text-[#D4567A] font-bold">X</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부정적 후기 삭제 요청 — 성의 있는 답글로 대응하는 게 맞음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">!</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">before/after 사진 동의 없이 게시 — 초상권·개인정보 침해</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 4-3. 내부 마케팅 ───────────────────────── */
  {
    id: "s4-08",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">4-3. 내부 마케팅</h2>
      <p class="text-[#333] leading-relaxed mb-4">내부 마케팅은 이미 치과에 와 있는 환자에게 미용 시술을 자연스럽게 알리는 것이다. 광고비 제로, 이미 신뢰가 있는 대상이라 ROI가 가장 높다.</p>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">핵심 전제: 내부 마케팅의 목적은 "알리기"다. 환자가 "치과에서 미용 시술도 하는구나"를 자연스럽게 인지하게 하는 것.</blockquote>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">공간 마케팅 — 대기실</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">아이템</th><th class="px-4 py-2 text-left font-medium">내용</th><th class="px-4 py-2 text-left font-medium">주의사항</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 시술 브로셔</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4종 시술 각각 1장씩. 너무 많으면 안 읽힘</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료광고 심의 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 안내 액자</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">A3 세로형 1~2개. 브랜드 컬러 디자인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과장 표현 금지</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">TV/모니터 콘텐츠</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 소개 영상 루프 재생. 소리 없이 자막만</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">광고성 강한 영상 부적합</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">QR코드 스탠드</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"미용 시술 더 알아보기" QR → 인스타 또는 플레이스 연결</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">—</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">후기 보드</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실제 환자 후기 프린트 또는 디지털 프레임</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">동의 받은 후기만</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">TIP:</strong> 너무 많이 붙이면 미용숍처럼 보인다. 대기실 2~3개, 진료실 1~2개가 적정선.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스탭 마케팅</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">상황</th><th class="px-4 py-2 text-left font-medium">스탭 멘트 예시</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수납 시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"저희 요즘 미용 시술도 하거든요. 관심 있으시면 브로셔 드릴까요?"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">예약 안내</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"다음 번 스케일링 오실 때 미용 상담도 같이 받아보실 수 있어요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자가 미용 언급</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"저희 치과에서도 할 수 있는 거거든요. 원장님이 직접 하세요"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교정 완료 수납</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"오래 고생하셨는데 진짜 잘 마무리되셨어요. 이참에 미용 상담도 해보세요"</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">주의:</strong> 스탭이 시술 효과·부작용을 설명하거나 추천하면 의료법 위반 소지. 안내와 설명은 완전히 다르다. 스탭은 안내만, 설명은 원장만.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">소개 마케팅</h3>
      <p class="text-[#333] leading-relaxed mb-4">미용 시술에서 가장 전환율 높은 신환은 기존 환자의 소개다. 소개 환자는 신뢰 기반이 있어 상담 → 시술 전환률이 신환보다 월등히 높다.</p>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>만족한 환자에게 직접 요청: "주변에 고민하는 분 계시면 편하게 보내주세요"</li>
        <li>소개 환자 우대 프로그램: 소개한 환자·소개받은 환자 모두 혜택</li>
        <li>카카오 채널 공유 유도: 콘텐츠에 "유익하셨으면 주변에 공유해 주세요" 추가</li>
      </ul>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 4-4. 외부 마케팅 ───────────────────────── */
  {
    id: "s4-09",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">4-4. 외부 마케팅 + 의료광고 심의 가이드</h2>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">핵심 전제:</strong> 외부 마케팅보다 의료광고법 이해가 먼저다. 법을 모르고 광고하면 과태료 + 행정처분 + 신뢰 손상이 동시에 온다.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">의료광고 심의 가이드</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">2025년 가이드라인 2판 — 핵심 변화</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">변경 항목</th><th class="px-4 py-2 text-left font-medium">이전 해석</th><th class="px-4 py-2 text-left font-medium">2025년 확정 해석</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">SNS 심의 기준</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">개별 계정 구독자 수 기준</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">매체 전체 DAU 기준. DAU 10만 이상이면 심의 대상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">블로그</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">자체 블로그 심의 불요 인식</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">네이버 블로그 광고성 게시물은 심의 대상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판단 단위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">계정 전체</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">개별 게시물 단위로 광고 여부 판단</td></tr>
        </tbody>
      </table>

      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">절대 금지 표현</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">금지 유형</th><th class="px-4 py-2 text-left font-medium">예시</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 보장·확정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"반드시 효과", "100% 만족 보장"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최상급·비교 우위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"국내 최고", "업계 1위", "타 치과보다 압도적"</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 체험담 광고</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 경험담을 광고 목적으로 사용</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">허위·과장 B/A</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보정된 전후 사진, 동의 없는 사진</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">채널별 외부 마케팅 전략</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">순위</th><th class="px-4 py-2 text-left font-medium">채널</th><th class="px-4 py-2 text-left font-medium">초기 전략</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">네이버 플레이스 최적화</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사진·정보·후기 완성이 먼저. 광고비 없이 노출</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인스타그램 계정 운영</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주 2~3회. 시술 50 / 원장 20 / 치과 30 비율</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">네이버 블로그 운영</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 4~8건. 시술 소개·Q&amp;A·정보성 콘텐츠</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">네이버 키워드 광고</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 50~100만원 테스트. 지역+시술명 키워드</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인스타 유료 광고</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기반 갖춘 후 진행. 먼저 하면 비용 낭비</td></tr>
        </tbody>
      </table>
      <blockquote class="bg-[#f9f9f9] border-l-4 border-[#D4567A] p-4 mb-6 text-[#555] italic">외부 마케팅 원칙: 초기 6개월은 광고비보다 플레이스·블로그·인스타 기반 쌓기에 집중. 기반 없는 광고비는 비용만 나간다.</blockquote>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── STEP 4 서머리 & 체크리스트 ───────────────────────── */
  {
    id: "s4-10",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 4 서머리</h2>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li><span class="font-bold text-[#1a1a1a]">구환 전환이 가장 빠르고 싸다</span> — 신환 유치 비용(CPC 1~4만원, CPA 수십만원)에 비해 구환 전환 비용은 0원.</li>
        <li><span class="font-bold text-[#1a1a1a]">전환의 핵심은 타이밍과 톤이다</span> — 이갈이·교정 완료·정기 내원 환자가 1~3순위. "발견의 톤"으로 자연스럽게.</li>
        <li><span class="font-bold text-[#1a1a1a]">업셀은 결과 확인 후에만</span> — 임상적 시너지가 검증된 조합으로 연결. 수납 직후·결과 미확인 업셀은 금지.</li>
        <li><span class="font-bold text-[#1a1a1a]">후기는 동선으로 만든다</span> — 시술 직후 → D+14 카카오 → 결과 확인 방문, 3개 접점 자동화.</li>
        <li><span class="font-bold text-[#1a1a1a]">내부 마케팅은 광고비 0원의 최고 ROI</span> — 대기실·진료실 공간 마케팅 + 스탭 동선 + 카카오 채널.</li>
        <li><span class="font-bold text-[#1a1a1a]">외부 마케팅은 법부터 알고 시작</span> — 2025년 가이드라인 2판으로 SNS·블로그 광고성 게시물도 사전심의 대상.</li>
        <li><span class="font-bold text-[#1a1a1a]">초기 6개월은 기반 쌓기 우선</span> — 플레이스 → 인스타 → 블로그 → 키워드 광고 순서.</li>
      </ul>

      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6 mt-8">STEP 4 체크리스트</h2>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구환 유형별 전환 우선순위(1~6순위) 정리 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구환 전환 3가지 경로 멘트 준비 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술별 업셀 조합 + 타이밍 기준 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구환 전환 전용 패키지 + 업셀 전용 패키지 설계</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전환율 측정 양식 준비 + 월간 측정 시작</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">후기 요청 3접점 동선 셋업 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">네이버 플레이스 최적화 7개 항목 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대기실·진료실 공간 마케팅 배치 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">9</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스탭 응대 멘트 교육 + 경계선 인식 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료광고 금지 표현 6가지 유형 숙지 + 기존 광고물 점검</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">11</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">외부 마케팅 채널 우선순위 확정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인스타그램 운영 기준(빈도·비율·해시태그·DM) 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">13</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">초기 키워드 광고 예산 + CPA 모니터링 시작</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">14</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2025년 의료광고 가이드라인 2판 내용 숙지</td></tr>
        </tbody>
      </table>
    `,
  },
];
