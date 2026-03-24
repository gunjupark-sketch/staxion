import { Section } from "./content-data";

export const step1Data: Section[] = [
  // ─── STEP 1 도입 ───
  {
    id: "s1-intro-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 1. 도입 방향 설정</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">어떤 시술을, 어떤 순서로 시작할 것인가</h3>
      <p class="text-[#333] leading-relaxed mb-4">STEP 0이 법적 근거를 확인하는 단계였다면, STEP 1부터는 실행이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">미용치과 도입을 결심한 원장 앞에 놓인 가장 현실적인 질문은 단 하나다. <span class="font-bold text-[#1a1a1a]">"무엇부터 시작할 것인가."</span> 대답부터 하겠다. 보톡스다.</p>
      <p class="text-[#333] leading-relaxed mb-4">이유는 간단하다. 도입 난이도가 가장 낮고, 치과와의 해부학적 연결점이 가장 강하며, 기존 환자에게 가장 자연스럽게 제안할 수 있는 시술이기 때문이다. 보톡스 하나를 완벽하게 안착시킨 뒤 필러로 확장하고, 스킨부스터로 재방문을 구조화하며, 리프팅과 장비 시술로 포트폴리오를 완성해 나간다. 건물을 올리는 순서와 같다. 기초 없이 2층을 올릴 수는 없다.</p>
      <p class="text-[#333] leading-relaxed mb-4">각 챕터는 동일한 구조(시술 개요 → 치과 연결점 → 도입 전략 → 시장 가격 → 제품·장비 → 난이도·교육 → 수익성 → 준비사항 → 유의사항 → 종합 정리)로 구성했다. 관심 있는 시술부터 펼쳐 봐도 무방하다. 장비 시술(1-5, 1-6)은 투자 판단이 핵심이므로 장비 도입 프레임으로 별도 구성했다.</p>
      <p class="text-[#333] leading-relaxed mb-4">시술별 분석을 마친 뒤, 1-7에서 전체 수가 체계를 설계하고 1-8에서 수익 구조를 종합한다. 나무 한 그루씩 살피고, 마지막에 숲 전체를 조망하는 것이 STEP 1의 목표다.</p>
    `,
  },
  {
    id: "s1-intro-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">도입 순서와 치과 영역 구분</h3>
      <p class="text-[#333] leading-relaxed mb-4">치과 미용시술은 치과 고유 영역과의 거리에 따라 도입 순서가 달라진다. 아래 표가 로드맵의 전체 그림이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">순서</th>
            <th class="px-4 py-2 text-left font-medium">시술</th>
            <th class="px-4 py-2 text-left font-medium">치과 연결성</th>
            <th class="px-4 py-2 text-left font-medium">도입 난이도</th>
            <th class="px-4 py-2 text-left font-medium">포지션</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1순위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">★★★★★</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">핵심 시술</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2순위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">★★★★☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">핵심 시술</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3순위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">★★☆☆☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">영역 확장</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4순위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">★★☆☆☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">고수익 확장</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5순위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리프팅 장비 (HIFU·RF)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">★★☆☆☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮음 (장비 의존)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">투자형 확장</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6순위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">레이저/피부 장비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">★☆☆☆☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보조 관리</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">보톡스와 필러는 치과의 해부학적 전문성이 직접 경쟁력이 되는 영역이다. 이 두 시술이 안정 궤도에 오른 뒤에야 나머지 확장이 의미를 가진다. 순서를 건너뛰면 기초 없이 건물을 올리는 꼴이다. 반드시 밟아야 할 계단이 있다.</p>
    `,
  },
  {
    id: "s1-intro-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <div class="bg-[#f9f9f9] border-l-4 border-[#C4929B] p-4 mb-6 text-[#555] italic">
        <p class="font-bold text-[#1a1a1a] mb-2 not-italic">이 STEP의 구성</p>
        <ul class="list-disc pl-6 space-y-1">
          <li><span class="font-bold text-[#1a1a1a]">1-1. 보톡스</span> — 미용치과의 출발점이자 가장 강력한 입구</li>
          <li><span class="font-bold text-[#1a1a1a]">1-2. 필러</span> — 보톡스 다음, 반드시 장착해야 할 두 번째 축</li>
          <li><span class="font-bold text-[#1a1a1a]">1-3. 스킨부스터</span> — 재방문을 구조화하는 수익 엔진</li>
          <li><span class="font-bold text-[#1a1a1a]">1-4. 실리프팅</span> — 고수익·고위험, 준비된 자만의 영역</li>
          <li><span class="font-bold text-[#1a1a1a]">1-5. 리프팅 장비 (HIFU·RF)</span> — 장비 투자로 열리는 새로운 수익원</li>
          <li><span class="font-bold text-[#1a1a1a]">1-6. 레이저/피부 장비</span> — 있으면 좋지만, 없어도 되는 보조 메뉴</li>
          <li><span class="font-bold text-[#1a1a1a]">1-7. 수가 체계 설계</span> — 6개 시술을 하나의 가격 체계로 엮는 법</li>
          <li><span class="font-bold text-[#1a1a1a]">1-8. 수익 구조 분석</span> — 숫자로 증명하는 미용치과의 수익력</li>
        </ul>
      </div>
    `,
  },

  // ─── 1-1. 보톡스 ───
  {
    id: "s1-1-1-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-1. 보톡스 (Botulinum Toxin)</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">미용치과의 첫 번째 문을 열어라</h3>
      <p class="text-[#333] leading-relaxed mb-4">미용치과의 시작은 보톡스다. 7개 분야 중 도입 난이도가 가장 낮고, 치과와의 해부학적 연결점이 가장 강하다. 환자가 치과에서 미용을 경험하는 첫 접점이자, 이후 모든 확장의 토대가 되는 시술이다. 이 토대 없이는 위에 아무것도 쌓을 수 없다.</p>
    `,
  },
  {
    id: "s1-1-1-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">"사각턱 보톡스 맞을 수 있나요?" 환자의 이 한마디가 미용치과의 문을 여는 신호다. 보톡스(보툴리눔 톡신)는 클로스트리디움 보툴리눔균에서 추출한 A형 신경독소를 정제하여 근육에 미량 주입하는 시술이다. 신경 말단에서 아세틸콜린 분비를 차단하여 근육 활동을 일시적으로 억제한다. 전 세계적으로 가장 많이 시행되는 비수술 미용 시술이며, 치과의 첫 번째 시술로 가장 적합하다.</p>
      <p class="text-[#333] leading-relaxed mb-4">상담의 기본이 되는 정보를 정확히 숙지해야 한다. 환자가 묻기 전에 설명할 수 있어야 신뢰가 형성된다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부위당 5~15분이다. 다부위 동시 시술 시 30분 이내에 끝난다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">통증</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">31G(0.26mm) 바늘을 사용한다. 대부분 마취가 필요 없다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">회복기간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 직후 일상 복귀가 가능하다. 미세 멍은 1~3일 내 소실된다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 발현</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~3일부터 서서히 나타난다. 최대 효과는 1~2주 후에 완성된다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금기사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임산부/수유부, 신경근 질환, 아미노글리코사이드 항생제 복용 중</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">부위당 5~15분이라는 시술 시간에 주목하라. 이 짧은 시간이 치과의 유닛 회전율과 맞물려 생산성의 핵심 엔진이 된다. 점심시간 전 10분, 치료 대기 15분 — 그 틈새에 보톡스 한 건이 들어간다. 빠르고, 안전하고, 환자 만족도가 높다.</p>
    `,
  },
  {
    id: "s1-1-1-03",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">희석 방법</h4>
      <p class="text-[#333] leading-relaxed mb-4">동결건조(분말형) 보톡스는 시술 전 생리식염수(0.9% NaCl)로 희석해야 한다. 희석 비율에 따라 1회 주사량이 달라지므로 정확한 희석이 필수다. 이노톡스(액상형)는 별도 희석이 필요 없다. 개봉 즉시 주사 가능하여 초기 도입 시 희석 오류를 방지할 수 있다. 레시피를 아직 외우지 못한 요리사에게는, 이미 계량된 재료가 안전한 출발점이 된다.</p>
    `,
  },
  {
    id: "s1-1-1-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 7개 분야 중 치과와의 연결점이 <span class="font-bold text-[#1a1a1a]">가장 강하다.</span> 이것은 단순한 장점이 아니라, 치과가 이 시장에서 당당히 서 있을 수 있는 근본적인 이유다.</p>
      <p class="text-[#333] leading-relaxed mb-4">치과의사는 삼차신경(V)과 안면신경(VII)의 분포를 가장 정밀하게 학습한 의료인이다. 주요 시술 대상인 교근, 측두근, 구강 주변 근육군은 치과의사가 학부 교육과 임상을 통해 매일 다루는 영역이다. 이 해부학적 지식이 보톡스에서 그대로 경쟁력이 된다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">근육/구조물</th>
            <th class="px-4 py-2 text-left font-medium">보톡스 적용</th>
            <th class="px-4 py-2 text-left font-medium">치과의사의 강점</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교근(Masseter)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사각턱 보톡스 타깃</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매일 촉진하는 근육이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">측두근(Temporalis)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이갈이/이악물기 치료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교합 진단 시 반드시 평가하는 근육이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구각하제근(DAO)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입꼬리 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">잇몸 성형 연계 영역이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이근(Mentalis)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">턱끝 보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">하악 전치부 시술 인접 영역이다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">피부과 의사에게 교근은 해부학 교과서 속 그림이다. 치과의사에게 교근은 매일 손으로 만지는 근육이다. 같은 지도를 갖고 있어도, 직접 걸어본 사람과 위성사진만 본 사람은 다르다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm italic"><span class="font-bold text-[#1a1a1a]">실전 시나리오:</span> 교정 완료 환자에게 "교정으로 치아는 정리됐는데, 교근이 발달해서 턱라인이 아직 각져 보이네요. 사각턱 보톡스로 턱라인을 다듬으면 교정 효과가 훨씬 살아납니다." 이런 제안은 피부과에서는 구조적으로 불가능하다. 치과의 치료 맥락 위에서만 성립하는 이야기다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-1-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">3. 도입 전략 / 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 도입에는 두 가지 루트가 있다. 치과가 위치한 지역, 기존 환자 특성, 원장의 경영 철학에 따라 적합한 방향이 달라진다. 어떤 전략을 택하든, 핵심은 보톡스 뒤에 무엇을 연결할 것인가를 먼저 설계하는 것이다.</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">루트 A: 저가형 (볼륨 전략)</h4>
      <p class="text-[#333] leading-relaxed mb-4">저가 국산 제품(뉴럭스, 리즈톡스 등)으로 낮은 가격대를 설정하고, 환자 수를 빠르게 확보하는 전략이다. 사각턱 50U 기준 2~5만원. 문을 넓게 열어 사람을 많이 들이는 방식이지만, 피부과 공장형과 가격 경쟁에 휘말릴 위험이 있다.</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">루트 B: 프리미엄형 (가치 전략)</h4>
      <p class="text-[#333] leading-relaxed mb-4">150kDa 정제형 제품(코어톡스, 제오민)을 사용하고, "치과니까 더 정밀하다"는 가치를 판매하는 전략이다. 사각턱 50U 기준 7~12만원. 문은 좁지만 들어온 사람이 오래 머문다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">비교 항목</th>
            <th class="px-4 py-2 text-left font-medium">루트 A (저가형)</th>
            <th class="px-4 py-2 text-left font-medium">루트 B (프리미엄형)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사각턱 50U 가격</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~5만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7~12만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제품</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">뉴럭스, 리즈톡스 등</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코어톡스, 제오민 등</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">건당 마진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1.5~2.5만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~8만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 300만원 마진 필요 건수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~150건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~50건</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과 정체성</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약화 위험이 있다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">유지된다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">루트 B로 월 300만원 마진을 내려면 50건이면 된다. 루트 A는 150건이 필요하다. 같은 목적지에 도달하는 경로가 다르다.</p>
    `,
  },
  {
    id: "s1-1-1-06",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">공통 전략: 보톡스의 역할</h4>
      <p class="text-[#333] leading-relaxed mb-4">어느 루트를 선택하든, 보톡스가 치과에서 수행하는 역할은 동일하다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">미용 시술의 입구다.</span> 환자가 가장 부담 없이 시작하는 시술이다. 보톡스 경험 후 필러→스킨부스터로 확장하는 퍼널(funnel)의 첫 단계다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">기존 환자 전환의 통로다.</span> 교정·보철·턱관절 치료 중인 기존 환자에게 크로스셀(cross-sell)한다. 신규 환자 모집보다 전환이 10배 효율적이다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">재방문 주기를 단축한다.</span> 효과 지속 3~6개월. 재시술 내원이 치과 정기 검진 주기와 자연스럽게 겹친다. 한 번 열린 문은 3개월마다 다시 열린다.</p>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm">저가형이든 프리미엄형이든, 보톡스 단독 매출에 기대를 걸지 마라. <span class="font-bold text-[#1a1a1a]">보톡스 뒤에 무엇을 연결할 것인가</span>를 먼저 설계한 후 가격을 정한다. 입구가 목적이 아니다. 입구 너머의 동선이 목적이다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-1-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-4">시장의 지형을 모르면 가격을 설계할 수 없다. 아래 데이터는 2026년 상반기 시장 현황을 바탕으로, 국내 주요 미용시술 비교 플랫폼 약 12,000건의 가격 데이터에서 보톡스 카테고리를 정제한 결과다.</p>
      <p class="text-[#333] leading-relaxed mb-4 text-sm">※ 시장 가격은 지역·시기·경쟁에 따라 변동된다. 수가 설정 시 반드시 해당 지역의 최신 시장 상황을 직접 확인해야 한다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">구간</th>
            <th class="px-4 py-2 text-left font-medium">10유닛당 가격</th>
            <th class="px-4 py-2 text-left font-medium">사각턱 50U 가격</th>
            <th class="px-4 py-2 text-left font-medium">특징</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">공장형</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~5,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8,900~25,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미끼 가격이다. 원가 이하다. <span class="font-bold text-[#1a1a1a]">따라가지 않는다</span></td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">일반 피부과</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8,000~15,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">40,000~75,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중소 피부과 정상가다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">프리미엄</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20,000원~</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100,000~150,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">수입 제품·프리미엄 클리닉 수준이다</td></tr>
          <tr class="bg-[#fdf2f5]"><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">치과 권장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">10,000~20,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">50,000~100,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">일반 피부과 상단~프리미엄 하단이다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">공장형의 8,900원과 같은 가격으로 내려가면 치과의 브랜드 가치가 깎인다. 치과는 일반 피부과 상단에서 프리미엄 하단 사이에 서야 한다. "비싼 게 아니라 정밀한 것"이라는 가치가 이 가격대를 지탱한다.</p>
    `,
  },
  {
    id: "s1-1-1-08",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">가격 설계 원칙</h4>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">최소 2단 가격제를 운영한다.</span> 국내형/프리미엄형으로 2단계 설정하면, 환자는 가격 불만 대신 비교 판단으로 넘어간다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">공개가와 정상가를 분리한다.</span> 런칭 할인은 정상가 대비 8~12% 수준만 권장한다. 과도한 할인은 정상가 복원을 불가능하게 만든다. 한 번 내린 가격은 다시 올리기 어렵다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">할인보다 포함 가치를 내세운다.</span> 촬영, 체크, 리터치 정책 포함으로 가격의 이유를 만든다. 리터치 정책 포함 여부를 가격표에 명확히 구분하라.</p>
    `,
  },
  {
    id: "s1-1-1-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">제품 비교의 핵심: 내성(면역원성)</h4>
      <p class="text-[#333] leading-relaxed mb-4">반복 시술이 전제되는 보톡스에서, 제품 선택의 핵심 기준은 내성 위험이다. 복합단백질이 체내에서 항원으로 인식되면 항체가 형성되어 효과가 점차 떨어진다. 같은 시술을 반복할수록 이 차이가 누적된다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">구분</th>
            <th class="px-4 py-2 text-left font-medium">순수 독소(150kDa)</th>
            <th class="px-4 py-2 text-left font-medium">복합단백질</th>
            <th class="px-4 py-2 text-left font-medium">비활성 독소</th>
            <th class="px-4 py-2 text-left font-medium">내성 위험</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">일반형 (뉴럭스, 리즈톡스 등)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">포함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">포함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">포함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코어톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">포함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">제거</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">잔류</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제오민</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">포함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">제거</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">제거</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">프리미엄 전략을 택한다면 코어톡스나 제오민이 "내성 적은 보톡스"라는 차별화 포인트가 된다. 저가 전략이라면 일반형으로 가격 경쟁력을 확보한다. 재료의 선택이 곧 가게의 성격을 결정한다.</p>
    `,
  },
  {
    id: "s1-1-1-10",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">루트 A (저가형) 추천 제품</h4>
      <p class="text-[#333] leading-relaxed mb-4">1순위 — 뉴럭스 100U (23,000원). 100U로 사각턱 2명 시술이 가능하다. 1인당 재료비 11,500원이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">2순위 — 리즈톡스 50U (24,000원). 소용량으로 재고 부담이 적다.</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">루트 B (프리미엄형) 추천 제품</h4>
      <p class="text-[#333] leading-relaxed mb-4">1순위 — 코어톡스 100U (44,000원). 내성 위험이 낮다. "내성 적은 보톡스"라는 차별화 포인트가 된다. 1인당 22,000원이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">2순위 — 이노톡스 50U/100U (29,900원/43,900원). 국내 유일 액상형이다. 희석 오류가 없어 초기 도입 원장에게 안전한 출발점이 된다.</p>
    `,
  },

  // ─── 1-2. 필러 ───
  {
    id: "s1-1-2-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-2. 필러 (Dermal Filler)</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">두 번째 도구는 무게가 다르다</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스로 문을 열었다. 환자가 들어왔다. 이제 그 환자에게 두 번째 도구를 꺼낼 차례다. 필러다.</p>
      <p class="text-[#333] leading-relaxed mb-4">필러는 보톡스 다음으로 도입 빈도가 높지만, 보톡스와는 근본적으로 다른 차원의 시술이다. 보톡스가 근육을 이완시킨다면, 필러는 조직에 물질을 직접 주입하여 볼륨을 만든다. 리스크의 성격과 크기가 다르다. 보톡스가 미세한 도구라면 필러는 보다 정밀한 기술을 요구한다. 효과는 크지만, 다루는 데 더 많은 훈련이 필요하다.</p>
    `,
  },
  {
    id: "s1-1-2-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">환자가 "입술이 좀 얇아서요"라고 말할 때, 필러 시술의 문이 열린다. 필러(Dermal Filler)는 피부 아래 조직에 충전물질을 주입하여 볼륨을 회복하고, 주름을 충전하고, 얼굴 윤곽을 개선하는 시술이다. 대부분 히알루론산(HA) 기반이며, 필요 시 히알루로니다제로 용해가 가능하다. 이 용해 가능성이 초보 시술자에게 가장 중요한 안전장치가 된다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">특성</th>
            <th class="px-4 py-2 text-left font-medium">설명</th>
            <th class="px-4 py-2 text-left font-medium">임상 의미</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교차결합 (Cross-linking)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">BDDE 등으로 HA 분자를 결합한다. 높을수록 단단하고 오래 유지된다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부위별 적합 제품이 다르다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">점탄성 (Viscoelasticity)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">형태 유지(탄성)와 자연스러운 퍼짐(점성)의 균형이다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제품 선택의 핵심 기준이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">단상 vs 이상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">단상(균일 겔, 벨로테로 등)과 이상(입자+겔, 레스틸렌 등)으로 나뉜다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부위별 적합성이 달라진다</td></tr>
        </tbody>
      </table>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부위당 15~30분이다. 마취 포함 30~45분이 소요된다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">통증</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">27~30G 바늘/캐뉼라를 사용한다. 대부분 제품에 리도카인이 포함되어 있다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">회복기간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부종 2~5일, 멍이 가능하다. 최종 결과는 2주 후에 판단한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 발현</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 보인다. 단, 부종이 빠지면서 약간 줄어든다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금기사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임산부/수유부, 시술 부위 감염, 자가면역질환, 켈로이드, 영구필러 이력</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">보톡스와 비교하면 시술 시간이 2~3배 길다. 유닛 회전율이 떨어진다. 하지만 건당 마진이 보톡스의 2~3배다. 시간과 마진의 교환이다.</p>
    `,
  },
  {
    id: "s1-1-2-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러 시술 부위 중 <span class="font-bold text-[#1a1a1a]">입술, 턱끝, 팔자주름, 입꼬리</span>는 모두 구강 주변에 위치한다. 하악 신경, 이신경, 안면동맥 등의 주행 경로에 대한 임상적 친숙도가 높다. 이것이 치과의 두 번째 핵심 역량이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">하치조신경차단(IANB) 마취를 매일 시행하면서 축적된 해부학적 감각은 필러 시술의 안전성과 직결된다. 피부과 의사가 교과서로 배운 신경 경로를, 치과의사는 매일 바늘로 확인한다. 이 경험의 차이가 안전성의 기초가 된다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm italic"><span class="font-bold text-[#1a1a1a]">실전 시나리오:</span> 임플란트 보철 완료 환자. "치아는 완성됐는데, 입술 볼륨이 줄어서 전체 비율이 아쉽네요. 입술 필러 1cc면 치아와 입술 비율이 훨씬 자연스러워집니다." 이 제안은 치과의 치료 연장선 위에서만 가능하다. 피부과에서 "치아와 입술 비율"을 언급할 수 있는가. 없다. 이것이 치과만의 관점이다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-2-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">3. 도입 전략 / 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러에서 치과의 포지션은 보톡스와 근본적으로 다르다. 보톡스는 가격 경쟁이 핵심이었지만, <span class="font-bold text-[#1a1a1a]">필러는 안전성이 핵심이다.</span> 경쟁의 무대가 바뀐다.</p>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">치과 필러 도입 3단계 로드맵</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">단계</th>
            <th class="px-4 py-2 text-left font-medium">부위</th>
            <th class="px-4 py-2 text-left font-medium">리스크</th>
            <th class="px-4 py-2 text-left font-medium">시기</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">1단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술, 턱끝</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 시작한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">2단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">팔자주름, 입꼬리</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간이다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계 30케이스 이상 축적 후 진입한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">3단계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">볼, 관자놀이</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중~높다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계 안정 후 별도 교육을 이수한다</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm">코 필러와 이마 필러는 <span class="font-bold text-[#1a1a1a]">실명 위험</span>이 있는 고위험 시술이다. 충분한 교육과 경험 없이 시도하지 않는다. 이 영역은 철옹성 같은 준비 없이 진입하면 안 된다.</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">보톡스를 통해 미용 시술의 입구를 연 후, <span class="font-bold text-[#1a1a1a]">필러에서 실질적인 수익</span>을 가져가는 것이 치과 미용시술의 기본 수익 구조다. 필러의 도입 전략은 '저가 vs 프리미엄'이 아니라, <span class="font-bold text-[#1a1a1a]">'안전한 부위에서 시작하여 점진적으로 확장한다'</span>는 단계적 접근이 핵심이다. 조급함은 사고로 돌아온다.</p>
    `,
  },
  {
    id: "s1-1-2-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러 시장은 보톡스처럼 극단적 저가 경쟁이 덜하다. 하지만 시장 가격대를 모르면 포지셔닝이 불가능하다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">부위</th>
            <th class="px-4 py-2 text-left font-medium">시장 중간값</th>
            <th class="px-4 py-2 text-left font-medium">치과 권장가</th>
            <th class="px-4 py-2 text-left font-medium">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술 1cc</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">130,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">130,000~180,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가장 빈번한 첫 필러 시술이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">턱끝 1cc</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">150,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">150,000~200,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술이 단순하고 생산성이 높다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">팔자주름 1cc</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">150,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">150,000~200,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계 이후에 진입한다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">입술 필러가 첫 번째 기회다. 130,000~180,000원 가격대에서 시작하면, 보톡스 환자의 업셀 전환이 자연스럽다. "보톡스 맞으셨으니 입술도 같이 하시면 전체 비율이 훨씬 좋아집니다." 이 한 마디가 13만원의 추가 매출을 만든다.</p>
    `,
  },
  {
    id: "s1-1-2-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">5. 제품 / 장비 가이드</h3>
      <p class="text-[#333] leading-relaxed mb-4">초기 도입 치과에는 <span class="font-bold text-[#1a1a1a]">국산 일반 등급 HA 필러</span>(뉴라미스, 채움, 벨라스트 등)를 추천한다. 이유는 세 가지다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">첫째, 히알루로니다제로 용해가 가능하다.</span> 초보 시술자에게 가장 중요한 안전장치다. 실수가 발생하면 녹일 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">둘째, 점도별 라인업을 보유하고 있다.</span> 부위별 적합 제품을 선택할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">셋째, 가격 대비 충분한 품질이다.</span> 시장 판매가 13만원 기준 충분한 마진이 확보된다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">용도</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">27G/30G 바늘</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정밀 주입에 사용한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">캐뉼라 22~25G</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">혈관 천공 위험을 줄인다. 팔자·턱끝에 권장한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">히알루로니다제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">필수 구비. 혈관폐색 시 즉시 투여한다. 시술실에 항시 비치한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">신경차단 마취</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인프라오비탈/멘탈 차단이다. 치과의사의 일상 술기다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">히알루로니다제를 '혹시 몰라서 구비하는 것'으로 생각하지 마라. <span class="font-bold text-[#1a1a1a]">'반드시 쓸 일이 있을 것'을 전제로 구비하는 것</span>이다.</p>
    `,
  },
  {
    id: "s1-1-2-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">6~8. 도입 난이도·수익성·준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">난이도는 보톡스보다 확실히 높다.</span> 주입 깊이, 속도, 방향, 혈관 회피를 동시에 고려해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">수익성은 보톡스의 2~3배다.</span> 평균 판매가 150,000원, 재료비 50,000원 기준 건당 마진 10만원. 보톡스 프리미엄형(건당 4~8만원)과 비교하면 수익 규모가 월등하다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">초기 투자는 ~50만원이면 충분하다.</span> 필러 1~2시린지, 히알루로니다제, 캐뉼라. 보톡스와 금액 차이는 크지 않지만, 그 사이에 놓인 책임의 무게는 분명히 다르다.</p>
    `,
  },
  {
    id: "s1-1-2-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">9. 유의사항 / 사고대응</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">혈관폐색 응급 프로토콜 — 반드시 숙지하라</h4>
      <p class="text-[#333] leading-relaxed mb-4">필러의 가장 심각한 합병증은 <span class="font-bold text-[#1a1a1a]">혈관폐색으로 인한 피부괴사 또는 실명</span>이다. 이것은 가능성의 문제가 아니라 시간의 문제다. 골든타임은 피부 괴사 4시간, 실명 방지 90분이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">단계</th>
            <th class="px-4 py-2 text-left font-medium">조치</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부색 변화(blanching/보라색), 극심한 통증, 망상형 색 변화가 나타난다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주입을 즉시 중단한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제 450~1500IU를 주사한다 — HDPH(고용량 펄스) 프로토콜이다. <span class="font-bold text-[#1a1a1a]">고용량을 주저하지 마라</span></td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">온찜질로 혈관을 확장한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">니트로글리세린 패치 2%를 도포한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아스피린을 투여한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">추적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1시간 후 재평가한다. 개선이 없으면 히알루로니다제를 추가한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">눈 증상 시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">즉시 안과 응급 전원한다. 망막동맥폐색의 골든타임은 90분이다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">이 프로토콜은 시술실 벽에 붙여두어라. 스탭 전원이 숙지해야 한다. 상세 응급 프로토콜(HDPH 용량 계산, 스탭 훈련, 차트 기록 원칙)은 <span class="font-bold text-[#1a1a1a]">STEP 2-5 응급 대응 프로토콜</span>에서 다룬다.</p>
    `,
  },
  {
    id: "s1-1-2-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스가 문을 여는 열쇠였다면, 필러는 그 문 너머의 첫 번째 도전이다. 수익성은 보톡스를 상회하고, 공장형 저가 경쟁에 휘말릴 가능성이 적다. 건당 마진 10만원은 보톡스의 2~3배다.</p>
      <p class="text-[#333] leading-relaxed mb-4">다만, 필러를 도입하는 순간 치과는 '주사를 놓는 곳'에서 '얼굴에 물질을 넣는 곳'으로 한 단계 이동한다. <span class="font-bold text-[#1a1a1a]">히알루로니다제 상시 구비, 혈관폐색 응급 프로토콜 숙지, 시술 전후 사진 촬영</span> — 이 세 가지 기초를 갖추지 않은 채 필러를 시작하지 마라.</p>
      <p class="text-[#333] leading-relaxed mb-4">초기 투자 ~50만원. 보톡스와 금액 차이는 크지 않다. 하지만 그 사이에 놓인 책임의 무게는 다르다. 두 번째 도구는 첫 번째 도구보다 무겁다. 그 무게를 감당할 준비가 되었을 때 시작하라.</p>
    `,
  },

  // ─── 1-3. 스킨부스터 ───
  {
    id: "s1-1-3-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-3. 스킨부스터 (Skin Booster)</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">세 번째 기둥이 세워진다</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스로 주름을 매듭지었고, 필러가 매출의 버팀목이 되었다. 스킨부스터는 피부 자체의 질을 되살리는 시술이다. 핵심은 반복 방문의 구조다. 3~4주 간격으로 3회 1코스. 5명의 프로그램 참여자를 확보하면 월 400만원 이상의 추정 매출이 발생한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">현재 조건은 명확하다. <span class="font-bold text-[#1a1a1a]">보톡스와 필러가 안정 궤도에 올라야 한다.</span> 기초가 불충분하면 환자가 모이지 않는다.</p>
    `,
  },
  {
    id: "s1-1-3-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">1. 술식 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">히알루론산(HA), 폴리뉴클레오타이드(PN), PDLLA 등을 진피층에 미세주입하여 보습, 탄력, 윤기를 개선한다. 보톡스·필러와 결정적으로 다른 점은 효과 발현 시간이다. 콜라겐 생성 제품의 경우 4~6주에 걸쳐 천천히 변화한다. 이를 환자에게 미리 전달하지 않으면 불만족으로 이어진다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">술식 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20~40분(마취 포함)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주사침</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">30~32G 극세 멀티니들. 표면마취(EMLA) 필수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">회복기간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">발적 1~3일, 미세 구진 3일~1주, 일상활동 지장 없음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 발현</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA 즉시(보습감) vs 콜라겐형 4~6주 서서히 개선</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">지속기간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~3개월 (코스 완료 후 6개월 이상 유지 가능)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">술식 간격</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~4주 간격 3회 1코스가 기본 프로토콜이다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금기사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임산부·수유부, 술식 부위 감염·염증, 켈로이드 체질, 면역질환</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s1-1-3-03",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">성분별 분류</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">분류</th>
            <th class="px-4 py-2 text-left font-medium">주요 성분</th>
            <th class="px-4 py-2 text-left font-medium">작용 기전</th>
            <th class="px-4 py-2 text-left font-medium">대표 제품</th>
            <th class="px-4 py-2 text-left font-medium">효과 특성</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA 즉시형</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">비교차결합 HA</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진피 수분 공급·충전</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨바이탈 릴리즈M</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 보습감. 지속은 짧다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PN 생성형</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">폴리뉴클레오타이드</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세포 재생·콜라겐 촉진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리주란HB, 리주란아이</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재생 강도가 높다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PDLLA 생성형</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PDLLA + HA</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">콜라겐 생성 유도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">쥬베덤스킨, 쥬베덤볼륨</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 발현이 느리지만 오래 간다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">복합형</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA+PN 등</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">복합 재생</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리쥬비엘, 프로쓰일로</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제품별로 프로파일이 다르다</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s1-1-3-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">3. 진입 전략 / 시장 선택</h3>
      <p class="text-[#333] leading-relaxed mb-4">아래 조건이 충족되면 높은 성공률로 진입할 수 있다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">조건</th>
            <th class="px-4 py-2 text-left font-medium">기준</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 영위 정착</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 20회 이상 꾸준하게 운영하고 있다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 진입 완료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최소 1년 4계절을 거쳤고 30케이스 이상 축적되어 있다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 환자 재방문</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스와 필러 재방문이 자체적으로 존재해야 한다</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">프로그램 중심으로 구성하라.</span> 1회 구매보다 3회 코스 패키지를 꾸려 놓으면 진입이 용이하다. 환자에게는 일시 비용이 가려지고 치과는 3회 방문이 확정된다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">제품을 2가지로 시작하라.</span> 쥬베덤(콜라겐 생성형)과 리주란(PN 생성형), 혹은 물광(HA 즉시형)과 쥬베덤의 조합이면 충분하다.</p>
    `,
  },
  {
    id: "s1-1-3-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">4. 시장 현황 / 가격대</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">제품</th>
            <th class="px-4 py-2 text-left font-medium">1cc당 중간값</th>
            <th class="px-4 py-2 text-left font-medium">1회(2cc) 추산</th>
            <th class="px-4 py-2 text-left font-medium">등급</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">쥬베덤</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">132,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 264,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리주란</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">150,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 300,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">고가</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리주비엘</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">143,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 286,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중상</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">시장 중간값은 <span class="font-bold text-[#1a1a1a]">1회(2cc) 기준 25~30만원대</span>이다. 치과 권장 가격은 25~35만원, 3회 코스로 계획한다.</p>
    `,
  },
  {
    id: "s1-1-3-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">7. 수익성 분석</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">쥬베덤</th>
            <th class="px-4 py-2 text-left font-medium">리주란HB</th>
            <th class="px-4 py-2 text-left font-medium">물광(스킨바이탈)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원가(1회 2cc)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 80,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 100,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 60,000원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판매가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">270,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">300,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">200,000원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">건당 마진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 190,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 200,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 140,000원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마진율</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 70%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 67%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약 70%</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터의 진짜 힘은 1회 마진이 아니라 <span class="font-bold text-[#1a1a1a]">반복 방문</span>에서 온다. 연간 LTV 기본 코스(3회) 72~90만원, 심화(6회) 144~180만원. 보톡스 연간 LTV(24~36만원)의 4~5배다.</p>
    `,
  },
  {
    id: "s1-1-3-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터의 본질은 <span class="font-bold text-[#1a1a1a]">반복 방문의 구조</span>다. 3~4주 간격의 프로그램 구조, 연간 LTV 60~180만원. 보톡스·필러로 축적된 환자 신뢰와 술식 프레임이 있다면 별도의 마케팅 비용 없이 자연스럽게 붙는다. 추가 비용도 12만원 수준으로 극히 낮다.</p>
    `,
  },

  // ─── 1-4. 실리프팅 ───
  {
    id: "s1-1-4-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-4. 실리프팅 (Thread Lifting)</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">준비된 자만의 영역</h3>
      <p class="text-[#333] leading-relaxed mb-4">7개 분야 중 <span class="font-bold text-[#1a1a1a]">술기 난이도가 가장 높다.</span> 그럼에도 수익성이 모든 미용 시술을 압도한다. 코그 10개 1건에 건당 마진 72만원. 월 4건이면 마진 290만원 이상이다.</p>
    `,
  },
  {
    id: "s1-1-4-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">1. 술기 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅(Thread Lifting)은 생분해성 봉합사를 진피 하층조직에 삽입하여 처진 조직을 물리적으로 끌어올리는 시술이다. 두 가지 메커니즘이 작동한다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">물리적 리프팅:</span> 코그(cog)가 조직을 잡아 끌어올린다. 시술 직후 즉시 효과가 보인다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">콜라겐 재생:</span> 이물질 자극으로 콜라겐이 신생된다. 1~3개월에 걸쳐 피부 탄력이 점진적으로 개선된다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 시간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">30분~1시간 (부위·실 개수에 따라 달라진다)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마취</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">국소마취 수준. 치과의 마취 기술을 직접 활용한다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">회복기간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">부종·멍 1~2주, 일상복귀 2~4주, 최종 결과는 1~3개월 이후</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 지속</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PDO 6~9개월, PLLA 1~2년, PCL 2~3년</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">금기사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">임산부/수유부, 시술 부위 감염, 활동성 면역질환, 혈액응고장애, 켈로이드</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s1-1-4-03",
    html: `
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">실의 종류 분류</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">실질</th>
            <th class="px-4 py-2 text-left font-medium">대표 제품</th>
            <th class="px-4 py-2 text-left font-medium">효과 지속</th>
            <th class="px-4 py-2 text-left font-medium">특징</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PDO</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">민트스, Ultra V</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~9개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가장 보편적. 초기 진입에 적합하다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PLLA</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">플루이드솔리드</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1~2년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">콜라겐 자극이 우수하다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PCL</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미스틱</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~3년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가장 오래 지속. 경험이 필요하다</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s1-1-4-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">3. 진입 조건</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 다른 시술보다 <span class="font-bold text-[#1a1a1a]">진입 조건이 훨씬 엄격하다.</span></p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">조건</th>
            <th class="px-4 py-2 text-left font-medium">기준</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스·필러+스킨부스터 정착</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세 분야 모두 정상 운영 중</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">별도 고급 교육 수강</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">카데바 포함 전문 교육 필수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 경험 축적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">모노형부터 시작, 50케이스 이상</td></tr>
        </tbody>
      </table>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">진입 3단계 로드맵</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">단계</th>
            <th class="px-4 py-2 text-left font-medium">시술 범위</th>
            <th class="px-4 py-2 text-left font-medium">기간</th>
            <th class="px-4 py-2 text-left font-medium">핵심 목표</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1단계: 정찰 (모노형)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마·볼·턱선 모노형 20~40개</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~6개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">진입 감각 확보, 환자 반응 파악</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2단계: 확충 (코그형)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코그형 리프팅 볼·턱선 4~8개</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~12개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리프팅 효과 검증, 결과 신뢰도 제고</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3단계: 완성 (콤비네이션)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코그+모노+필러+보톡스 복합</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12개월 이상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">고객 만족도 극대화, 프리미엄 가치 입증</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s1-1-4-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">7. 수익성 분석</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">모노형 20개</th>
            <th class="px-4 py-2 text-left font-medium">코그형 10개</th>
            <th class="px-4 py-2 text-left font-medium">코그8+모노20 콤비</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재료비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~11,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~75,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~71,000원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판매가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">250,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">800,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,000,000원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">건당 마진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">239,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">725,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">929,000원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">마진율</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">96%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">91%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">93%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시간당 매출</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~500,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~1,067,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">~1,000,000원</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm">재료비 마진율이 90%라고 해서 "쉬운 돈"이라 착각하지 마라. 실리프팅의 진짜 비용은 재료비가 아니라 <span class="font-bold text-[#1a1a1a]">시술 시간, 교육 투자, 그리고 부작용 발생 시의 비용</span>이다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-4-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">10. 종합 평가</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 미용치과의 성장 무기다. 건당 마진 72만원, 시간당 매출 100만원, 재료비 마진율 91%. 수익성으로 보면 가장 강력하다.</p>
      <p class="text-[#333] leading-relaxed mb-4">진입을 결심했다면 순서를 지켜라. <span class="font-bold text-[#1a1a1a]">모노형 50케이스를 거쳐 코그형 진입하고, 30케이스 이후 콤비네이션 시술로 확장한다.</span> 그 과정은 최소 6개월~1년이 걸린다. 조급함은 비대칭과 합병증으로 돌아온다.</p>
    `,
  },

  // ─── 1-5. 리프팅 장비 ───
  {
    id: "s1-1-5-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-5. 리프팅 장비 — HIFU·RF (Lifting Devices)</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">여기서부터 투자 규모가 바뀐다</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비는 <span class="font-bold text-[#1a1a1a]">수천만원 단위의 선행 투자가 필요하다.</span> 의사결정의 성격이 근본적으로 바뀐다. '시술 역량'이 아니라 <span class="font-bold text-[#1a1a1a]">'투자 회수'</span>가 핵심이다.</p>
    `,
  },
  {
    id: "s1-1-5-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">1. 장비 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">HIFU (고강도 집속 초음파)</span> — 초음파를 한 점에 집중시켜 SMAS층에 65~70도C의 열 응고점을 형성한다. 슈링크와 울쎄라가 대표 선수다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">RF (고주파)</span> — 고주파 전류가 조직 저항에 의해 열을 발생시켜 진피~피하지방층의 콜라겐을 수축·재생한다. 인모드가 주요 제품이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">장비</th>
            <th class="px-4 py-2 text-left font-medium">에너지</th>
            <th class="px-4 py-2 text-left font-medium">장비가</th>
            <th class="px-4 py-2 text-left font-medium">시술 단가</th>
            <th class="px-4 py-2 text-left font-medium">리피트 주기</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">슈링크 유니버스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,500~2,500만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">15~30만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~6개월</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리프테라V</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">800~1,500만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8~15만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3~6개월</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인모드 (Forma/FX)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">RF</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3,000~4,500만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">15~25만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4~8주 (시리즈)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">울쎄라 프라임</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5,000만~1억원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100~170만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~12개월</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s1-1-5-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">2. 도입 적합성</h3>
      <p class="text-[#333] leading-relaxed mb-4">핵심 질문은 "어떤 장비가 좋은가"가 아니다. <span class="font-bold text-[#1a1a1a]">"치과의 상황에 어떤 장비가 맞는가"</span>다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">기준</th>
            <th class="px-4 py-2 text-left font-medium">슈링크</th>
            <th class="px-4 py-2 text-left font-medium">리프테라V</th>
            <th class="px-4 py-2 text-left font-medium">인모드</th>
            <th class="px-4 py-2 text-left font-medium">울쎄라</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">초기 투자 부담</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매우 높음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 인지도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매우 높다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매우 높다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">투자 회수 기간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8~16개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6~12개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">16~30개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12~24개월</td></tr>
          <tr class="bg-[#fdf2f5]"><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">치과 초기 도입 적합도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★★★★★</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★★★★☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★★★☆☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★★☆☆☆</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">슈링크 유니버스가 치과 초기 도입에 가장 적합한 선택지다.</span> 환자 인지도가 가장 높고, 크로스셀 용이성이 높으며, 시술 난이도가 낮다.</p>
    `,
  },
  {
    id: "s1-1-5-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">5. 투자 분석 / BEP</h3>
      <h4 class="text-lg font-semibold text-[#1a1a1a] mb-3 mt-6">슈링크 유니버스 BEP 시뮬레이션</h4>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">항목</th>
            <th class="px-4 py-2 text-left font-medium">보수적</th>
            <th class="px-4 py-2 text-left font-medium">표준</th>
            <th class="px-4 py-2 text-left font-medium">적극적</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">장비 도입가</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2,000만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2,000만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 시술 건수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">20건</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">월 순마진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">112만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">192만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">320만원</td></tr>
          <tr class="bg-[#fdf2f5]"><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">BEP (투자 회수)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">~18개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">~10개월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">~6개월</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">핵심 변수는 <span class="font-bold text-[#1a1a1a]">"월 시술 건수"</span>다. 도입 전 반드시 기존 보톡스·필러 환자 수에서 크로스셀 전환율 10~15%를 적용하여 예상 월 슈링크 건수를 산출하라.</p>
    `,
  },
  {
    id: "s1-1-5-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">9. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비 도입은 <span class="font-bold text-[#1a1a1a]">"투자 판단"의 문제</span>다. 도입 전 반드시 다섯 가지 숫자를 확인하라. 장비가, 카트리지 단가, 기존 미용 환자 수, 예상 크로스셀 전환율, BEP.</p>
      <p class="text-[#333] leading-relaxed mb-4">치과에 가장 현실적인 선택은 슈링크 유니버스다. 울쎄라·인모드는 미용치과가 성숙 궤도에 올라 월 미용 시술 50건 이상을 달성한 이후의 선택지다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">'있으면 좋겠다'는 기대가 아니라, '이 숫자면 된다'는 확신이 있을 때만 장비를 도입한다.</span> 계산이 답이다.</p>
    `,
  },

  // ─── 1-6. 레이저/피부 장비 ───
  {
    id: "s1-1-6-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-6. 레이저 / 피부 장비 (Laser & Skin Devices)</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 층까지 올라가지 않아도 된다</h3>
      <p class="text-[#333] leading-relaxed mb-4">치과의 고유 영역에서 <span class="font-bold text-[#1a1a1a]">가장 먼 분야</span>다. 레이저/피부 장비는 <span class="font-bold text-[#1a1a1a]">'있으면 좋지만 없어도 되는'</span> 분야다. 보톡스·필러·스킨부스터·리프팅 장비까지 모두 안정 궤도에 올린 뒤 검토하는 마지막 카드다.</p>
    `,
  },
  {
    id: "s1-1-6-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">도입 적합성</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">기준</th>
            <th class="px-4 py-2 text-left font-medium">아쿠아필링</th>
            <th class="px-4 py-2 text-left font-medium">LDM</th>
            <th class="px-4 py-2 text-left font-medium">IPL</th>
            <th class="px-4 py-2 text-left font-medium">레이저/포텐자</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">투자 부담</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매우 낮다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매우 높다</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부과 경쟁</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮다 (보조)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮다 (보조)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매우 높다</td></tr>
          <tr class="bg-[#fdf2f5]"><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">치과 도입 적합도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★★★★★</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★★★☆☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★★☆☆☆</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">★☆☆☆☆</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">아쿠아필링이 치과 첫 번째 피부 장비로 가장 현실적이다.</span> 200~500만원 투자, 3~6개월 BEP. 보톡스·필러 시술 환자에게 "+3만원 관리" 제안만으로 매출이 발생한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">IPL·레이저 토닝을 메인 시술로 내세우지 않는다. 이 영역은 피부과의 본업이다.</p>
    `,
  },
  {
    id: "s1-1-6-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">레이저/피부 장비는 미용치과의 <span class="font-bold text-[#1a1a1a]">마지막 확장 카드</span>다. 없어도 미용치과는 충분히 운영된다. 도입한다면 아쿠아필링이 유일한 현실적 시작점이다. 300만원 투자, 월 20건 추가 시술, 6개월 BEP.</p>
      <p class="text-[#333] leading-relaxed mb-4">"있으면 좋지만 없어도 된다." 이 판단이 곧 전략이다.</p>
    `,
  },

  // ─── 1-7. 수가 체계 설계 ───
  {
    id: "s1-1-7-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-7. 미용치과 수가 체계 설계</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">흩어진 메뉴를 하나의 체계로 엮어라</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">6개 시술을 관통하는 하나의 가격 체계</span>가 없으면, 환자는 혼란스러워하고 원장은 수가를 그때그때 감으로 정하게 된다. 감으로 정한 가격은 무너지기 쉽다.</p>
    `,
  },
  {
    id: "s1-1-7-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">수가 설정의 3단계</h3>
      <p class="text-[#333] leading-relaxed mb-4">수가를 정할 때 가장 흔한 실수는 재료비만 보고 마진을 계산하는 것이다. 원장의 시간 원가를 빼면 실질 마진은 예상보다 20~30% 낮아진다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">단계</th>
            <th class="px-4 py-2 text-left font-medium">내용</th>
            <th class="px-4 py-2 text-left font-medium">예시 (보톡스 사각턱 50U)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">A. 원가 파악</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재료비 + 소모품을 합산한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재료비 2.5만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">B. 시간 원가 반영</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원장의 기회비용(시간당 보험 진료 매출)을 계산한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">15분 x 시간당 30만원 = 7.5만원</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">C. 마진 설계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실질 원가에 목표 마진율을 적용한다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실질 원가 10만원 → 목표 마진 50% → 수가 20만원</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "s1-1-7-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술 간 가격 위계</h3>
      <p class="text-[#333] leading-relaxed mb-4">미용치과에서 제공하는 시술들에는 환자 인식 상의 가격 위계가 존재한다. 이 위계를 무시하면 환자의 혼란이 발생한다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm"><span class="font-bold text-[#1a1a1a]">낮음 → 높음:</span><br/>LDM/LED &lt; 보톡스 = IPL/토닝 &lt; 스킨부스터 &lt; 필러 &lt; 슈링크/인모드 &lt; 실리프팅 &lt; 울쎄라</p>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">보톡스가 필러보다 비싸면 환자가 의아해한다. 스킨부스터가 실리프팅보다 비싸면 체계가 무너진다. 이 위계는 환자의 상식에 기반한 것이므로, 역전시키지 마라.</p>
    `,
  },
  {
    id: "s1-1-7-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">패키지 설계 원칙</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">할인율은 10~20% 범위를 유지한다.</span> 30% 이상이면 개별 시술의 가치가 훼손된다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">업셀 동선을 설계한다.</span> 엔트리(보톡스+LDM) → 코어(보톡스+필러+스킨부스터) → 프리미엄(리프팅+실+스킨부스터). 환자가 자연스럽게 단계를 밟도록 경로를 만든다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">선불 패키지의 환불 원칙을 명확히 한다.</span> 소비자분쟁해결기준에 따라 미사용분 환불이 원칙이다. '환불 불가'는 불공정 약관이다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-6 rounded-r">
        <p class="text-[#333] text-sm italic"><span class="font-bold text-[#1a1a1a]">실전 시나리오:</span> 보톡스 5만원 + LDM 3만원 = 개별 합산 8만원인 세트를 패키지 7만원(12% 할인)으로 설정한다. 엔트리 패키지로 미용 첫 경험 환자를 유입한 뒤, 3회차 방문 시 필러·스킨부스터로 코어 패키지 전환을 제안한다.</p>
      </div>
    `,
  },

  // ─── 1-8. 수익 구조 분석 ───
  {
    id: "s1-1-8-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1-8. 미용치과 수익 구조 분석</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">숫자가 전략을 증명한다</h3>
      <p class="text-[#333] leading-relaxed mb-4">"보톡스 마진율이 73%라는데, 그래서 월에 얼마를 벌 수 있는가?" 이 질문에 답하지 못하면 도입 결정을 내릴 수 없다.</p>
    `,
  },
  {
    id: "s1-1-8-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술별 수익 구조 매트릭스</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">시술</th>
            <th class="px-4 py-2 text-left font-medium">시술 단가</th>
            <th class="px-4 py-2 text-left font-medium">재료비</th>
            <th class="px-4 py-2 text-left font-medium">마진율</th>
            <th class="px-4 py-2 text-left font-medium">시간당 생산성</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 (사각턱)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">80,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">22,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">73%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">높다 (10분)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 (입술 1cc)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">150,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">50,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">67%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간 (30분)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터 (리쥬란)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">290,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">66%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간 (40분)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">슈링크 (전안면)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">130,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">30,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">77%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">중간 (30분)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅 (PLLA 10줄)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">690,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100,000원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">86%</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">낮다 (60분)</td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4 text-sm">※ 마진율은 재료비만 차감한 수치다. 인건비·임대료·장비 감가상각은 미포함이다.</p>
    `,
  },
  {
    id: "s1-1-8-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">숨은 비용 — 놓치기 쉬운 네 가지</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">장비 감가상각이다.</span> HIFU·레이저·RF 등 고가 장비의 구매 비용을 사용 기간에 걸쳐 나누어 비용으로 반영해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">원장 시간 원가다.</span> 미용 시술 시간은 보험 진료를 못 하는 시간이다. 이 기회비용을 계산에 넣지 않으면 마진이 부풀려 보인다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">마케팅비다.</span> 신환 유입 비용(CPA)을 고려해야 한다. 기존 환자 크로스셀은 CPA가 제로지만, 외부 신환 유치는 건당 수만원이 든다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">재고 폐기 비용이다.</span> 보톡스는 개봉 후 4시간이 한도다. 필러 미사용분도 폐기 대상이다. 이 손실을 줄이는 것이 실질 마진을 지키는 핵심이다.</p>
    `,
  },
  {
    id: "s1-1-8-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">월 매출 시뮬레이션</h3>
      <p class="text-[#333] leading-relaxed mb-4">월 60건을 가정한 시뮬레이션이다.</p>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr>
            <th class="px-4 py-2 text-left font-medium">시술</th>
            <th class="px-4 py-2 text-left font-medium">건수</th>
            <th class="px-4 py-2 text-left font-medium">매출</th>
            <th class="px-4 py-2 text-left font-medium">순이익</th>
            <th class="px-4 py-2 text-left font-medium">비중</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">25건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">200만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">145만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">28%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">15건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">225만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">150만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">29%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">290만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">190만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">24%</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">슈링크</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">130만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">19%</td></tr>
          <tr class="bg-[#fdf2f5]"><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">합계</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">60건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">845만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">585만원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]"></td></tr>
        </tbody>
      </table>
      <p class="text-[#333] leading-relaxed mb-4">월 60건으로 순이익 585만원이다. 보톡스와 필러가 전체 순이익의 약 57%를 차지한다. 이 두 시술이 미용치과 수익의 핵심 기둥이다.</p>
    `,
  },
  {
    id: "s1-1-8-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">치과 미용시술은 보톡스 → 필러 → 스킨부스터 → (실리프팅) → (장비 시술) 순서로 도입한다. 이 순서를 건너뛰지 마라.</p>
      <p class="text-[#333] leading-relaxed mb-4">보톡스와 필러는 치과의 해부학적 강점이 직접 발휘되는 영역이다. 보톡스는 입구이자 미끼다. 단독 매출에 기대하지 않는다. 뒤에 무엇을 연결할 것인가를 먼저 설계한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">장비 시술은 투자 회수 계산 후 도입한다. 수가 설계 시 재료비뿐 아니라 시간 원가를 반영해야 실질 마진이 보인다.</p>
    `,
  },
  {
    id: "s1-1-8-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">체크리스트 — 이 STEP을 완료했다면 아래를 확인하라</h3>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>6개 분야의 도입 순서와 치과 영역 구분을 이해했다</li>
        <li>보톡스 루트 A/B 중 자기 치과에 적합한 방향을 판단했다</li>
        <li>필러 도입 시 1단계(입술/턱끝)부터 시작하는 것이 왜 중요한지 안다</li>
        <li>히알루로니다제의 필수 구비 이유와 응급 프로토콜을 숙지했다</li>
        <li>스킨부스터·실리프팅의 도입 전제 조건을 이해했다</li>
        <li>장비 도입 시 BEP 시뮬레이션의 필요성을 인지했다</li>
        <li>수가 설계 3단계(원가 파악→시간 원가→마진 설계)를 적용할 수 있다</li>
      </ul>
    `,
  },
];
