import { Section } from "./content-data";

export const step1Data: Section[] = [
  // ─── STEP 1 도입 ───
  {
    id: "s1-intro-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">STEP 1. 도입 방향 설정 — 어떤 시술을, 어떻게 시작할 것인가</h2>
      <p class="text-[#C4929B] text-sm font-medium tracking-wide mb-6">보톡스 · 필러 · 스킨부스터 · 실리프팅 · 리프팅장비 · 레이저/피부장비</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">도입</h3>
      <p class="text-[#333] leading-relaxed mb-4">STEP 0에서 법적 토대를 완벽하게 다졌다. 이제부터는 실행이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">이 챕터는 치과에서 도입할 수 있는 6개 미용시술 분야를 하나하나 해부한다. 보톡스, 필러, 스킨부스터, 실리프팅, 리프팅장비, 레이저/피부장비 — 이 여섯 가지 분야는 치과와의 영역적 거리, 시술 난이도, 투자 규모, 수익 구조가 전부 다르다. 도입 순서와 우선순위 역시 하나하나 다르다. 같은 '미용시술'이라는 이름 아래 묶여 있지만, 각각의 성격은 완전히 다른 사업이라고 봐야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">구성 원칙은 명확하다. "왜 이 시술인가"를 먼저, "어떻게 시작하는가"를 그 다음에 배치했다. 이유 없는 실행은 오래가지 못하기 때문이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">6개 분야는 모두 동일한 10개 섹션 구조로 구성되어 있어, 분야 간 비교가 즉시 가능하다.</p>
      <p class="text-[#333] leading-relaxed mb-4 italic text-sm">1. 시술 개요 / 2. 치과와의 연결점 / 3. 도입 전략 포지션 / 4. 시장 현황·가격대 / 5. 제품·장비 가이드 / 6. 도입 난이도·교육 / 7. 수익성 분석 / 8. 도입 시 준비사항 / 9. 유의사항·사고대응 / 10. 종합 정리</p>
    `,
  },
  {
    id: "s1-intro-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">도입 순서와 치과 영역 구분</h3>
      <p class="text-[#333] leading-relaxed mb-6">6개 분야를 어떤 순서로 도입할 것인가. 원칙은 단순하다. 치과의 해부학적 강점이 가장 직접적으로 발휘되는 분야부터 교두보를 확보하고, 그 위에서 확장해 나가는 것이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 1순위. 보톡스 — 치과의 고유 영역이다.</h4>
      <p class="text-[#333] leading-relaxed mb-4">교근과 저작근은 치과의사가 매일 다루는 해부학적 영토 한복판이다. 초기 투자는 약 25만 원 수준. 도입 난이도가 가장 낮다. 망설일 이유가 없는 0순위 출발점이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 2순위. 필러 — 치과의 인접 영역이다.</h4>
      <p class="text-[#333] leading-relaxed mb-4">입술과 턱끝은 치과 치료의 결과물과 직접 맞닿는 하안면부다. 초기 투자는 약 50만 원 수준. 도입 난이도는 중간. 보톡스로 쌓은 신뢰 위에 자연스럽게 올릴 수 있는 2단계 확장이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 3순위. 스킨부스터 — 확장 영역이다.</h4>
      <p class="text-[#333] leading-relaxed mb-4">초기 투자 55~110만 원. 도입 난이도 낮음에서 중간. 피부 개선이라는 새로운 가치를 환자에게 제안하는 분기점이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 4순위. 실리프팅 — 확장 영역이다.</h4>
      <p class="text-[#333] leading-relaxed mb-4">초기 투자 35~90만 원. 도입 난이도는 높음. 침습성이 깊어 원장의 숙련도가 반드시 뒷받침되어야 한다. 해부학적 이해 없이 뛰어들어서는 안 되는 분야다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 5순위. 리프팅 장비 — 확장 영역이다.</h4>
      <p class="text-[#333] leading-relaxed mb-4">초기 투자는 1,000만 원에서 최대 1억 원까지. 장비 투자 규모가 크기 때문에 ROI 계산이 선행되어야 한다. 도입 난이도 중간.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 6순위. 레이저/피부장비 — 확장 영역이다.</h4>
      <p class="text-[#333] leading-relaxed mb-4">초기 투자 200만 원에서 5,000만 원. 도입 난이도 낮음에서 중간. 스펙트럼이 넓어 치과의 규모와 전략에 따라 선택의 폭이 가장 다양한 분야다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">명심해야 한다. 보톡스와 필러는 치과의 해부학적 강점이 직접 발휘되는 고유·인접 영역이다. 3순위 이하는 사업적 확장이다. 보톡스와 필러가 안정적으로 안착한 뒤에 확장하는 것이 원칙이다. 순서를 건너뛰는 것은 기초 공사 없이 2층을 올리는 것과 다르지 않다.</p>
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
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1장. 보톡스 (Botulinum Toxin) — 미용치과의 가장 확실한 첫 발</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-8">보톡스는 6개 분야 중 도입 난이도가 가장 낮고, 치과와의 해부학적 연결점이 가장 강하다. 미용시술의 입구이자, 환자가 치과에서 미용을 경험하는 첫 접점이다. 여기서 쌓은 신뢰가 필러, 스킨부스터, 리프팅으로 이어지는 모든 확장의 토양이 된다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스(보툴리눔 톡신)는 클로스트리디움 보툴리눔균에서 추출한 A형 신경독소를 정제하여 근육에 미량 주입하는 시술이다. 신경 말단에서 아세틸콜린 분비를 차단하여 근육 활동을 일시적으로 억제한다. 주름 개선, 근육 축소, 다한증 치료 등에 활용되며, 전 세계적으로 가장 많이 시행되는 비수술 미용 시술이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 부위당 5~15분. 다부위 동시 시술 시 30분 이내.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 31G(0.26mm) 바늘 사용. 대부분 마취 불필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 시술 직후 일상 복귀. 미세 멍은 1~3일 내 소실.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 2~3일부터 서서히 나타나며, 최대 효과는 1~2주 후.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부/수유부, 신경근 질환, 아미노글리코사이드 항생제 복용 중.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">희석 방법</h4>
      <p class="text-[#333] leading-relaxed mb-8">동결건조(분말형) 보톡스는 시술 전 생리식염수(0.9% NaCl)로 희석해야 한다. 희석 비율에 따라 1회 주사량이 달라지므로 정확한 희석이 핵심이다. 이노톡스(액상형)는 별도 희석이 불필요하다. 개봉 즉시 주사 가능하여 초기 도입 시 희석 오류를 원천 차단할 수 있다.</p>
    `,
  },
  {
    id: "s1-1-1-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 6개 분야 중 치과와의 연결점이 가장 강하다. 이것은 마케팅적 수사가 아니라 해부학적 사실이다.</p>
      <p class="text-[#333] leading-relaxed mb-6">주요 시술 대상인 교근, 측두근, 구강 주변 근육군은 치과의사가 학부 교육과 임상을 통해 가장 깊이 이해하는 영역이다. 피부과나 성형외과가 교과서에서 배운 것을, 치과의사는 매일 손끝으로 만지며 살아온 근육들이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과의사의 해부학적 우위</h4>
      <p class="text-[#333] leading-relaxed mb-4">치과의사는 삼차신경(V)과 안면신경(VII)의 분포를 가장 정밀하게 학습한 의료인이다. 보톡스 시술에서 이 전문성이 직접적인 무기가 되는 근육들을 짚어본다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 교근(Masseter)</span> — 사각턱 보톡스의 핵심 타깃이다. 치과의사가 매일 촉진하는 바로 그 근육이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 측두근(Temporalis)</span> — 이갈이·이악물기 치료의 핵심. 교합 진단 시 반드시 평가하는 근육이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 구각하제근(DAO)</span> — 입꼬리 보톡스의 타깃. 잇몸 성형과 연계되는 영역이다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 이근(Mentalis)</span> — 턱끝 보톡스의 타깃. 하악 전치부 시술과 바로 인접해 있다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
        <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시 :</span> 교정 완료 환자에게 이렇게 제안한다. "교정으로 치아는 정리됐는데, 교근이 발달해서 턱라인이 아직 각져 보입니다. 사각턱 보톡스로 턱라인을 다듬으면 교정 효과가 훨씬 살아납니다." 이런 제안은 피부과에서는 구조적으로 불가능하다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-1-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-6">보톡스 도입에는 크게 두 가지 루트가 있다. 치과가 위치한 지역, 기존 환자 특성, 원장의 경영 철학에 따라 적합한 방향이 달라진다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트 A : 저가형 (볼륨 전략)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 가격대 :</span> 사각턱 50U 기준 2~5만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장점 :</span> 초기 환자 모집이 빠르다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 리스크 :</span> 피부과 공장형과 가격 경쟁에 말려들 수 있다. 치과 브랜드가 '저가 미용'으로 각인되면 복원이 어렵다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트 B : 프리미엄형 (가치 전략)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 가격대 :</span> 사각턱 50U 기준 7~12만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장점 :</span> 치과 브랜드가 유지된다. 건당 마진이 높다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 리스크 :</span> 초기 환자 모집이 느리다.</p>
      <p class="text-[#333] leading-relaxed mb-4">두 루트의 구조적 차이를 숫자로 보면 명확하다. 월 300만 원 마진을 달성하려면, 저가형은 약 162건(하루 7건 이상)이 필요하고, 프리미엄형은 약 52건(하루 2~3건)이면 충분하다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">보톡스가 치과에서 수행하는 역할 — 공통 전략</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">첫째, 미용 시술의 입구다.</span> 환자가 가장 부담 없이 시작하는 시술이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">둘째, 기존 환자 전환이다.</span> 교정, 보철, 턱관절 치료 중인 기존 환자에게 자연스럽게 연결하는 크로스셀이다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">셋째, 재방문 주기 단축이다.</span> 효과 지속 기간이 3~6개월이므로, 재시술 내원이 치과 정기 검진 주기와 자연스럽게 겹친다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">명심해야 한다. 저가형이든 프리미엄형이든, 보톡스 단독 매출에 기대를 걸어서는 안 된다. 보톡스 뒤에 무엇을 연결할 것인가를 먼저 설계한 후 보톡스 가격을 정하는 것이 순서다.</p>
    `,
  },
  {
    id: "s1-1-1-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-6">아래 데이터는 2026년 상반기 시장 현황을 바탕으로, 국내 주요 미용시술 비교 플랫폼 약 12,000건의 가격 데이터에서 보톡스 카테고리를 정제한 결과다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시장 포지션맵 (사각턱 50U 기준)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 공장형 :</span> 8,900~25,000원. 미끼 가격이다. 원가 이하. 절대 따라가지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 일반 피부과 :</span> 40,000~75,000원. 중소 피부과의 정상가 구간이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 프리미엄 :</span> 100,000~150,000원. 수입 제품, 프리미엄 클리닉의 가격대다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 치과 권장 :</span> 50,000~100,000원. 일반 피부과 상단에서 프리미엄 하단 사이.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">가격 설계 원칙</h4>
      <p class="text-[#333] leading-relaxed mb-4">최소 2단 가격제를 운영하라. 국내형과 프리미엄형으로 2단계를 설정하면, 환자의 반응이 '가격 불만'에서 '비교 판단'으로 전환된다.</p>
      <p class="text-[#333] leading-relaxed mb-4">공개가와 정상가를 분리하라. 런칭 할인은 정상가 대비 8~12% 수준만 권장한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">할인보다 포함 가치를 설계하라. 촬영, 체크, 리터치 정책을 가격에 포함시켜 가격의 이유를 만든다.</p>
      <p class="text-[#333] leading-relaxed mb-8">리터치 정책을 명시하라. 리터치 포함 여부를 가격표에 명확히 구분해 두어야 환자와의 불필요한 마찰을 원천 차단할 수 있다.</p>
    `,
  },
  {
    id: "s1-1-1-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">제품 비교의 핵심 — 내성(면역원성)</h4>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 반복 시술이 전제되는 시술이다. 따라서 제품 선택에서 가장 먼저 따져야 할 기준은 가격이 아니라 내성(면역원성)이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 일반형 (뉴럭스, 리즈톡스 등) :</span> 순수 독소 + 복합단백질 + 비활성 독소 모두 포함. 내성 위험 높음.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 코어톡스 :</span> 복합단백질 제거. 비활성 독소 잔류. 내성 위험 중간.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 제오민 :</span> 복합단백질 제거 + 비활성 독소 제거. 내성 위험 가장 낮음.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트별 추천 제품</h4>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">루트 A (저가형)</span></p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 1순위 — 뉴럭스 100U (23,000원) : 100U로 사각턱 2명 시술 가능. 1인당 재료비 11,500원.</p>
      <p class="text-[#333] leading-relaxed mb-4">▶ 2순위 — 리즈톡스 50U (24,000원) : 소용량으로 재고 부담이 적다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">루트 B (프리미엄형)</span></p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 1순위 — 코어톡스 100U (44,000원) : 내성 위험 낮음. 1인당 재료비 22,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 2순위 — 이노톡스 50U/100U (29,900원/43,900원) : 국내 유일 액상형. 희석 오류 없음.</p>
      <p class="text-[#333] leading-relaxed mb-6">▶ 프리미엄 강화 — 제오민 50U : 완전정제형. 내성이 가장 낮다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필요 장비/도구</h4>
      <p class="text-[#333] leading-relaxed mb-2">▶ 주사기 : 1cc 인슐린 시린지 (31G, 8mm). ~8,900원/100개.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 냉장보관 : 2~8°C. 기존 치과 약품 냉장고 활용. 추가 비용 없음.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 희석용 식염수 : 0.9% 생리식염수. 액상형 사용 시 불필요.</p>
      <p class="text-[#333] leading-relaxed mb-8">▶ 표면마취 : EMLA 크림. 선택사항. 비용 미미.</p>
    `,
  },
  {
    id: "s1-1-1-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-6">보톡스는 6개 분야 중 학습 곡선이 가장 낮다. 치과의사는 이미 주사 시술에 숙련되어 있으므로, 해부학적 포인트와 용량만 익히면 된다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 시술 시 흔한 실수</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 이마 보톡스 과량 :</span> 눈꺼풀이 무거워지는 안검하수가 발생할 수 있다. 미간과 이마를 분리 주입하고, 보수적 용량으로 시작하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 교근 주입 위치 오류 :</span> 교근 외 인접 근육이 이완될 수 있다. 반드시 교근을 촉진한 후 근육 중심부에 정확히 주입하라.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 좌우 비대칭 :</span> 환자 불만족의 가장 흔한 원인이다. 시술 전 좌우 교근 크기를 반드시 비교하고, 양측 동일 용량을 원칙으로 하라.</p>
    `,
  },
  {
    id: "s1-1-1-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-6">아래는 2026년 상반기 시장 현황과 확인된 공급 참고가에 근거한 시뮬레이션이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트별 수익성 비교 (사각턱 50U 기준)</h4>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 루트 A (저가형 — 뉴럭스) :</span> 재료비 11,500원, 판매가 30,000원, 건당 마진 18,500원. 월 300만 원 마진 달성에 약 162건 필요(하루 7건 이상).</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 루트 B (프리미엄형 — 코어톡스) :</span> 재료비 22,000원, 판매가 80,000원, 건당 마진 58,000원. 월 300만 원 마진 달성에 약 52건 필요(하루 2~3건).</p>
      <p class="text-[#333] leading-relaxed mb-4">프리미엄형은 저가형 대비 약 3분의 1 건수로 동일한 마진을 달성할 수 있다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">가장 중요한 현실 인식 하나. 보톡스 단독으로 월 1,000만 원 이상 매출은 비현실적이다. 보톡스는 미끼이자 입구다. 필러와 스킨부스터로의 업셀 매출이 더해져야 비로소 의미 있는 수익 구조가 완성된다.</p>
    `,
  },
  {
    id: "s1-1-1-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-6">보톡스는 미용시술 중 초기 투자가 가장 낮다. 별도 장비 없이 기존 치과 인프라를 그대로 활용할 수 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2">▶ 보톡스 제품 1바이알 (필수) : 23,000~44,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 인슐린 시린지 100개 (필수) : ~8,900원.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 냉장고 (기존 활용) : 0원.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 동의서 양식 (필수) : 0원 (메디스테이션 제공).</p>
      <p class="text-[#333] leading-relaxed mb-4">▶ 거울 — 반신/전신 (권장) : 3~10만 원.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-6">합계 : 약 25만 원. 이것이 미용치과의 첫 발을 내딛는 데 필요한 전부다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">재고 관리</h4>
      <p class="text-[#333] leading-relaxed mb-8">보관은 냉장(2~8°C)이 원칙이며, 냉동은 불가다. 분말형은 희석 후 4시간 이내에 사용해야 하고, 액상형(이노톡스)은 개봉 후 24시간이 한계다. 100U 1바이알로 사각턱 2명을 시술할 수 있다. 같은 날 보톡스 환자를 몰아서 예약하면 바이알 낭비를 줄일 수 있다.</p>
    `,
  },
  {
    id: "s1-1-1-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-6">보톡스는 6개 분야 중 사고 리스크가 가장 낮다. 필러(혈관폐색으로 인한 실명·피부괴사)나 실리프팅(감염·비대칭) 대비 안전성이 월등히 높아 '첫 도입 시술'로 가장 적합하다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주요 부작용</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 멍·부종 (흔함) :</span> 자연 소실(1~3일). 냉찜질로 대응.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 좌우 비대칭 (가끔) :</span> 2주 후 확인, 보정 주입 가능.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 안검하수 (1% 미만) :</span> 아프라클로니딘 0.5% 점안. 2~4주 자연 회복.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 아나필락시스 (극히 드묾) :</span> 에피네프린 투여, 119 신고.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 전 필수 고지 사항</h4>
      <p class="text-[#333] leading-relaxed mb-8">효과 발현은 2~3일부터 서서히 나타나며, 최대 효과는 1~2주 후다. 지속기간은 3~6개월이며 반영구적이지 않다. 유지를 위해서는 재시술이 필요하다는 점을 반드시 고지해야 한다. 시술 후 4시간 동안 시술 부위를 만지지 않도록 안내하고, 당일 음주, 사우나, 격렬한 운동은 금지다.</p>
    `,
  },
  {
    id: "s1-1-1-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 쉽다. 주사 한 번이면 끝나고, 별도 장비 투자도 필요 없으며, 초기 투자 25만 원이면 시작할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4">하지만 시장은 이미 포화 상태다. 대형 피부과 프랜차이즈가 1만 원 미만으로 보톡스를 뿌리는 현실에서, 치과가 동일한 방식으로 뛰어드는 것은 실패가 예정된 싸움이다. 치과의 진입은 근본적으로 다른 진입이어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">치과는 보톡스를 독립적인 상품으로 '파는' 것이 아니라, 기존 치과 진료의 연장선 위에 자연스럽게 '얹는' 것이다. 교정 완료 환자에게 턱라인 정리를 제안하는 것, 턱관절 통증 환자에게 교근 이완을 권하는 것 — 이것이 치과에서 보톡스를 도입하는 진짜 이유이자, 피부과가 절대 흉내 낼 수 없는 치과만의 동선이다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">보톡스 한 건의 마진이 2만 원이든 6만 원이든, 그 환자가 3개월 뒤 재방문하고, 6개월 뒤 필러를 시술받고, 1년 뒤 리프팅까지 확장된다면 — 그것이 보톡스 도입이 만들어내는 진짜 수익 구조다. 한 건의 매출이 아니라, 한 명의 환자가 걸어갈 여정 전체를 설계하는 것. 그것이 이 챕터의 결론이다.</p>
    `,
  },


  // ─── 1-2. 필러 ───
  {
    id: "s1-1-2-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2장. 필러 (Dermal Filler) — 보톡스 다음의 진짜 수익 엔진</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-8">필러는 보톡스 다음으로 도입 빈도가 높지만, 보톡스와는 근본적으로 다른 차원의 시술이다. 보톡스가 근육을 이완시키는 시술이라면, 필러는 조직에 물질을 직접 주입하여 볼륨을 만드는 시술이다. 리스크의 성격과 크기가 다르고, 그만큼 요구되는 역량의 깊이도 다르다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러(Dermal Filler)는 피부 아래 조직에 충전물질을 주입하여 볼륨 회복, 주름 충전, 얼굴 윤곽 개선을 수행하는 시술이다. 대부분 히알루론산(HA) 기반이며, 문제 발생 시 히알루로니다제로 용해가 가능하다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">HA 필러의 핵심 특성</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 교차결합 (Cross-linking) :</span> BDDE 등으로 HA 분자를 결합시킨 것이다. 교차결합도가 높을수록 단단하고 오래 유지된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 점탄성 (Viscoelasticity) :</span> 형태를 유지하는 탄성과, 자연스럽게 퍼지는 점성의 균형이다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 단상 vs 이상 :</span> 단상(균일 겔, 벨로테로 등)과 이상(입자+겔, 레스틸렌 등)으로 나뉜다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 부위당 15~30분. 마취 포함 30~45분.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 27~30G 바늘 또는 캐뉼라 사용. 대부분 제품에 리도카인 포함.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 부종 2~5일. 최종 결과는 2주 후.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 즉시. 단, 부종이 빠지면서 약간 줄어든다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부/수유부, 시술 부위 감염, 자가면역질환, 켈로이드 체질, 영구필러 시술 이력.</p>
    `,
  },
  {
    id: "s1-1-2-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러의 주요 시술 부위 — 입술, 턱끝, 팔자주름, 입꼬리 — 는 모두 구강 주변에 위치한다. 하악 신경, 이신경, 안면동맥 등의 주행 경로에 대한 임상적 친숙도는 치과의사가 타 진료과 대비 압도적으로 높다.</p>
      <p class="text-[#333] leading-relaxed mb-6">특히 하치조신경차단(IANB) 마취를 일상적으로 시행하면서 축적된 해부학적 감각은 필러 시술의 안전성과 직결된다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
        <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시 :</span> 임플란트 보철 완료 후 환자에게 이렇게 제안한다. "치아는 완성됐는데, 입술 볼륨이 줄어서 전체 비율이 아쉽습니다. 입술 필러 1cc면 치아와 입술 비율이 훨씬 자연스러워집니다."</p>
      </div>
    `,
  },
  {
    id: "s1-1-2-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-6">필러에서 치과의 포지션은 보톡스와 근본적으로 다르다. 보톡스는 가격 경쟁이 핵심이었지만, 필러는 안전성이 핵심이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과 필러 도입 3단계 로드맵</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1단계 — 입술, 턱끝 (리스크 낮음) :</span> 즉시 시작하라. 치과의 해부학적 강점이 가장 직접적으로 발휘되는 하안면부다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2단계 — 팔자주름, 입꼬리 (리스크 중간) :</span> 1단계에서 최소 30케이스 이상의 경험을 축적한 후 진입하라.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 3단계 — 볼, 관자놀이 (리스크 중~높음) :</span> 2단계가 안정적으로 안착한 후, 별도의 전문 교육을 이수하고 진입하라.</p>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-8">
        <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#f59e0b] font-bold">주의:</span> 코 필러와 이마 필러는 실명 위험이 있는 고위험 시술이다. 충분한 교육과 경험 없이 시도해서는 안 된다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-2-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">권장 운영 가격대</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 입술 1cc :</span> 시장 중간값 130,000원. 치과 권장가 130,000~180,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 턱끝 1cc :</span> 시장 중간값 150,000원. 치과 권장가 150,000~200,000원.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 팔자주름 1cc :</span> 시장 중간값 150,000원. 치과 권장가 150,000~200,000원. 2단계 이후 도입.</p>
    `,
  },
  {
    id: "s1-1-2-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <p class="text-[#333] leading-relaxed mb-6">초기 도입 치과에는 국산 일반 등급 HA 필러(뉴라미스, 채움, 벨라스트 등)를 추천한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필수 장비/도구</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 27G/30G 바늘 :</span> 정밀 주입용.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 캐뉼라 22~25G :</span> 혈관 천공 위험을 낮춘다. 팔자주름·턱끝 시술 시 권장.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 히알루로니다제 :</span> 필수 구비. 혈관폐색 발생 시 즉시 투여. 시술실에 항시 비치하라. 이것은 선택이 아니라 생존 장비다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 신경차단 마취 :</span> 인프라오비탈/멘탈 신경차단. 치과의사의 일상 술기 그대로다.</p>
    `,
  },
  {
    id: "s1-1-2-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-6">필러는 보톡스보다 확실히 난이도가 높다. 보톡스가 "어디에 얼마나"의 2차원 판단이라면, 필러는 "어디에, 얼마나, 어떤 깊이로, 어떤 속도로, 어떤 방향으로, 혈관은 어디에 있는지"까지 고려해야 하는 다차원 판단이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 시술 시 핵심 주의사항</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주입 속도 :</span> 천천히. 급하게 밀어 넣으면 혈관 내 주입 위험이 높아진다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주입 깊이 :</span> 부위마다 적정 레이어가 다르다. 입술은 점막 하, 턱끝은 골막 상.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 아스피레이션 :</span> 주입 전 피스톤을 살짝 당겨 혈액 역류를 확인하는 습관을 반드시 들여라.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 좌우 대칭 :</span> 시술 전 사진을 반드시 촬영하고, 양측을 번갈아 가며 소량씩 주입하는 것이 원칙이다.</p>
    `,
  },
  {
    id: "s1-1-2-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">수익 시뮬레이션 (입술/턱끝 1cc 기준)</h4>
      <p class="text-[#333] leading-relaxed mb-2">▶ 평균 판매가 : 150,000원. 재료비 : 약 50,000원. 건당 마진 : 약 100,000원. 마진율 : 약 67%.</p>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 프리미엄형의 건당 마진이 58,000원이었다. 필러는 건당 100,000원. 약 1.7배다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">월 수익 시뮬레이션</h4>
      <p class="text-[#333] leading-relaxed mb-2">▶ 주 5건 시술 시 : 월 200만 원 마진.</p>
      <p class="text-[#333] leading-relaxed mb-8">▶ 주 10건 시술 시 : 월 400만 원 마진. 보톡스(월 150~300만 원) + 필러(월 200~400만 원) = 월 350~700만 원의 미용시술 추가 매출 구조.</p>
    `,
  },
  {
    id: "s1-1-2-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2">▶ HA 필러 1~2시린지 (필수) : 시린지당 25,000~50,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 히알루로니다제 (필수) : 1바이알. 혈관폐색 응급 대응용. 반드시 시술실에 비치.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 캐뉼라 22~25G (권장) : 혈관 천공 위험 감소.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 27G/30G 바늘 (필수) : 정밀 주입용.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 동의서 양식 (필수) : 0원 (메디스테이션 제공).</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">합계 : 약 50만 원. 보톡스(25만 원)에서 추가 25만 원으로 두 번째 수익 엔진을 장착하는 셈이다.</p>
    `,
  },
  {
    id: "s1-1-2-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-6">필러는 보톡스와 리스크의 차원이 다르다. 최대 부작용은 혈관폐색으로 인한 피부괴사와 실명이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">혈관폐색 응급 프로토콜</h4>
      <p class="text-[#333] leading-relaxed mb-4">골든타임은 극도로 짧다. 피부괴사 방지는 4시간, 실명 방지는 90분이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 1 —</span> 주입 즉시 중단.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 2 —</span> 히알루로니다제 450~1500IU를 폐색 의심 부위에 즉시 주사 (HDPH 프로토콜).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 3 —</span> 온찜질로 혈관 확장 유도. 냉찜질은 금지.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 4 —</span> 니트로글리세린 패치 2% 도포.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 5 —</span> 아스피린 투여.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 눈 증상 발생 시 —</span> 즉시 안과 응급 전원. 망막동맥폐색은 90분 이내가 골든타임이다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">히알루로니다제는 선택 장비가 아니라 생존 장비다. 반드시 비치하라.</p>
    `,
  },
  {
    id: "s1-1-2-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스가 문을 여는 열쇠였다면, 필러는 그 문 너머의 첫 번째 방이다. 건당 마진 10만 원, 마진율 67%. 보톡스의 약 1.7배.</p>
      <p class="text-[#333] leading-relaxed mb-4">도입 전략의 핵심은 단순하다. 안전한 부위(입술, 턱끝)에서 교두보를 확보하고, 경험과 숙련도를 쌓은 뒤 팔자주름, 볼, 관자놀이로 영토를 확장하라. 순서를 건너뛰지 마라.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">초기 투자 약 50만 원. 보톡스와 금액 차이는 크지 않지만, 그 사이에 놓인 책임의 무게는 분명히 다르다. 그리고 그 책임의 무게를 감당할 수 있는 해부학적 역량을 가장 확실하게 갖추고 있는 직역이 바로 치과의사라는 사실 — 이것이 필러를 치과에서 도입해야 하는 가장 근본적인 이유다.</p>
    `,
  },

  // ─── 1-3. 스킨부스터 ───
  {
    id: "s1-1-3-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3장. 스킨부스터 (Skin Booster) — 세 번째 수익의 축</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터는 치과의 고유 영역이 아니다. 구강이나 안면 근육과 직접적인 관련이 없는, 피부 진피층을 대상으로 하는 시술이다. 그렇다면 왜 이 책에서 다루는가. 치과가 스킨부스터를 도입하는 이유는 해부학적 강점이 아니라, 보톡스와 필러로 확보한 미용 시술 역량과 환자 신뢰를 기반으로 수익 영역을 확장하기 위함이다. 1순위 보톡스, 2순위 필러가 안정적으로 안착한 뒤, 그 위에 올리는 세 번째 층이다.</p>
    `,
  },
  {
    id: "s1-1-3-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터는 피부 진피층에 히알루론산(HA), 폴리뉴클레오타이드(PN), PDLLA 등 피부 재생 성분을 직접 주입하여 피부 보습, 탄력, 질감을 개선하는 시술이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시장 특성</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 환자 지명 구매 :</span> "쥬베룩 해주세요", "리쥬란 맞으러 왔어요" — 환자가 제품명을 알고 찾아온다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 프로그램 기반 :</span> 3~4주 간격으로 3회 1코스가 기본이다. 재방문이 프로그램 자체에 내장되어 있다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 건당 마진 :</span> 쥬베룩 1회 약 264,000원, 리쥬란 1회 약 300,000원. 보톡스의 4~5배에 달하는 건당 매출이다.</p>
    `,
  },
  {
    id: "s1-1-3-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 도입 추천 제품</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1순위 — 물광주사 (스킨바이브/릴리이드M) :</span> 가격이 낮고 시술이 단순하며, 진입 장벽이 가장 낮다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2순위 — 리쥬란HB (파마리서치) :</span> PN 기반. 환자 인지도가 가장 높다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 3순위 — 쥬베룩 스킨 (바임) :</span> PDLLA+HA 기반. 효과 발현이 4~6주로 느려 기대치 관리가 필수적이다.</p>
    `,
  },
  {
    id: "s1-1-3-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 물광주사 1회 :</span> 판매가 약 100,000~150,000원. 건당 마진 약 70,000~100,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리쥬란 1회(2cc) :</span> 판매가 약 300,000원. 건당 마진 약 150,000~200,000원.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 쥬베룩 1회(2cc) :</span> 판매가 약 264,000원. 건당 마진 약 130,000~170,000원.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">월 5명의 프로그램 환자만 확보해도 400만 원 이상 매출이 발생한다. 소수 환자로도 의미 있는 매출 구조.</p>
    `,
  },
  {
    id: "s1-1-3-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 없이 필러를 도입하지 않듯, 보톡스와 필러 없이 스킨부스터를 도입하지 않는다. 이 순서는 원칙이다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">월 5명. 그것이면 충분하다. 그 5명을 만드는 것은 외부 마케팅이 아니라, 이미 보톡스와 필러로 신뢰를 쌓은 기존 환자에게 "피부도 함께 관리해 보시겠어요?"라는 한마디다.</p>
    `,
  },

  // ─── 1-4. 실리프팅 ───
  {
    id: "s1-1-4-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">4장. 실리프팅 (Thread Lifting) — 지붕은 기둥을 세운 뒤에 올린다</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 6개 분야 중 시술 난이도가 가장 높다. 치과의 고유 영역이 아니며, 결과 편차가 크고, 환자 기대치 관리가 어렵다. 1차 런칭 메인 시술로 절대 적합하지 않다.</p>
      <p class="text-[#333] leading-relaxed mb-4">이 점을 처음부터 명확히 해둔다. 보톡스가 문을 열고, 필러가 기둥을 세우고, 스킨부스터로 층을 쌓은 후에야 실리프팅이라는 지붕을 올릴 수 있다. 이 순서를 건너뛰면 구조가 무너진다.</p>
      <p class="text-[#333] leading-relaxed mb-8">그럼에도 이 챕터에서 실리프팅을 다루는 이유는 분명하다. 1회 시술 객단가가 수십만 원에서 수백만 원에 달하며, '리프팅까지 하는 치과'라는 프리미엄 이미지를 구축할 수 있는 유일한 시술이기 때문이다. 리스크가 높은 만큼 리턴도 크다. 관건은 "할 것인가 말 것인가"가 아니라, "언제, 어떤 조건에서 시작할 것인가"다.</p>
    `,
  },
  {
    id: "s1-1-4-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">도입 전제 조건</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스 + 필러 + 스킨부스터 안정</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 별도 고급 교육 이수</span> : 카데바(해부 실습체) 실습 포함 전문 교육 반드시 이수.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 경험 축적</span> : 모노실부터 시작하여 최소 50케이스 이상 쌓은 후 코그실로.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 시술 주체</span> : 대표원장 직접 시술만 가능.</p>
    `,
  },
  {
    id: "s1-1-4-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 코그실 하안면 1회 :</span> 판매가 약 1,000,000~1,500,000원. 건당 마진 약 800,000~1,300,000원.</p>
      <p class="text-[#333] leading-relaxed mb-4">보톡스(건당 마진 2~6만 원)의 20배, 필러(건당 마진 10만 원)의 10배에 달하는 건당 마진이다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">다만, 이 수익은 "잘 했을 때"의 수치다. 결과 편차가 크고 기대치 관리가 어려운 시술이기 때문에, 수익성만 보고 덤비면 안 된다.</p>
    `,
  },
  {
    id: "s1-1-4-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 미용치과의 지붕이다. 건당 마진이 보톡스의 20배, 필러의 10배에 달하며, '리프팅까지 하는 치과'라는 프리미엄 이미지를 구축할 수 있는 유일한 시술이다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">충분한 교육(카데바 실습 포함), 단계적 경험 축적(모노실 50케이스+), 철저한 기대치 관리, 빈틈없는 기록. 이 네 가지를 갖추지 않은 상태에서 건당 마진에 눈이 멀어 뛰어드는 것은 권하지 않는다.</p>
    `,
  },

  // ─── 1-5. 리프팅 장비 ───
  {
    id: "s1-1-5-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5장. 리프팅 장비 (Lifting Devices) — 감이 아니라 숫자로 판단하라</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">이 챕터는 이전 챕터들과 근본적으로 성격이 다르다. 보톡스는 25만 원, 필러는 50만 원, 스킨부스터는 11만 원이면 시작할 수 있었다. 리프팅 장비는 다르다. 수천만 원 단위의 선행 투자가 필요하다. 의사결정의 성격이 '시술 역량 확보'에서 '투자 회수 계산'으로 완전히 바뀌는 지점이다.</p>
      <p class="text-[#333] leading-relaxed mb-8">장비는 한 번 사면 되돌리기 어렵다. 보톡스 1바이알은 사용하지 않으면 냉장고에 두면 그만이지만, 3,000만 원짜리 장비는 사용하지 않아도 감가상각이 진행된다. 그래서 이 챕터의 핵심 메시지는 단순하다. '있으면 좋겠다'는 감으로 도입하지 않는다. 숫자를 먼저 확인하라.</p>
    `,
  },
  {
    id: "s1-1-5-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">장비별 투자·수익 구조</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 슈링크 유니버스 (HIFU) :</span> 장비가 1,000~2,000만 원. 시술 단가 10~15만 원. 건당 마진 약 7~12만 원. 투자 회수(월 10건) 약 12개월.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리프테라V (HIFU) :</span> 장비가 800~1,500만 원. 투자 회수(월 10건) 약 12개월.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 인모드 (RF) :</span> 장비가 3,000~4,500만 원. 투자 회수(월 10건) 약 18개월.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 울쎄라 프라임 (HIFU) :</span> 장비가 5,000만~1억 원. 초기 치과 대상이 아니다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">치과 초기 도입 권장 — 슈링크 유니버스. 투자 대비 회수 기간이 가장 짧고, 보톡스 재방문 환자에게 크로스셀이 가장 용이하다.</p>
    `,
  },
  {
    id: "s1-1-5-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">이 챕터의 핵심 메시지는 처음부터 끝까지 하나다. 감이 아니라 숫자로 판단하라.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">장비가 얼마인가. 카트리지 단가가 얼마인가. 내 치과에서 월 몇 건 시술이 현실적인가. 투자 회수까지 몇 개월이 걸리는가. 이 네 가지 숫자가 도입 전에 서 있지 않으면, 수천만 원짜리 장비가 진료실 한켠에서 먼지만 쌓이는 장식품이 될 수 있다.</p>
    `,
  },

  // ─── 1-6. 레이저/피부장비 ───
  {
    id: "s1-1-6-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">6장. 레이저 / 피부 장비 — 있으면 좋지만, 없어도 된다</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">치과의 고유 영역에서 가장 먼 분야다. 피부과의 핵심 사업 영역과 정면으로 겹치며, 치과의 메인 시술로 운영하는 것은 비현실적이다. 보조 관리 포지션으로만 접근해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-8">도입 여부의 판단 기준은 "해야 하는가"가 아니라 "할 여력이 되는가"다. 보톡스, 필러, 스킨부스터가 안정적으로 돌아가고, 리프팅 장비까지 검토한 뒤에도 여유가 있다면 그때 비로소 올려놓을 수 있는 마지막 선반이다.</p>
    `,
  },
  {
    id: "s1-1-6-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">검토 순위</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1순위 — 아쿠아필링기 :</span> 장비가 200~500만 원. 보톡스·필러 환자에게 +3~5만 원 관리 메뉴로 추가.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2순위 — LDM :</span> 장비가 2,000~4,000만 원. 스킨부스터와 병행.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 3순위 — IPL :</span> 장비가 1,500~3,000만 원. 피부과와의 직접 경쟁이 불가피.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 4순위 — 포텐자 :</span> 장비가 3,000~5,000만 원. 치과에서 최우선으로 검토할 장비는 아니다.</p>
    `,
  },
  {
    id: "s1-1-6-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">'있으면 좋지만 없어도 되는' 분야다. 치과의 미용시술 라인업에서 마지막에 올라가는 선반이다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">이것을 넘어서는 기대를 갖고 수천만 원짜리 IPL이나 포텐자를 도입한다면, 그것은 치과의 미용시술 확장이 아니라 피부과와의 정면 경쟁이 된다. 그리고 그 경쟁에서 치과가 우위를 점하기는 어렵다.</p>
    `,
  },

  // ─── 2장. 수가 체계 설계 ───
  {
    id: "s1-1-7-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2장. 미용치과 수가 체계 설계 — 재료비만 보면 마진을 착각한다</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">수가 설정의 3단계</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ A단계. 원가 파악 :</span> 재료비 + 소모품. 보톡스 사각턱 50U 기준 재료비 약 2.5만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ B단계. 시간 원가 반영 :</span> 시간당 보험 진료 매출이 30만 원인 원장이 15분을 보톡스에 투입하면, 시간 원가는 7.5만 원이다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ C단계. 마진 설계 :</span> A(재료비) + B(시간 원가) = 실질 원가. 여기에 목표 마진율을 곱해 수가를 도출한다.</p>
    `,
  },
  {
    id: "s1-1-7-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">시술 간 가격 위계</h3>
      <p class="text-[#333] leading-relaxed mb-6">낮음에서 높음 순서로: LDM/LED → 보톡스 = IPL/토닝 → 스킨부스터 → 필러 → 슈링크/인모드 → 실리프팅 → 울쎄라.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">패키지 설계 원칙</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 할인율 10~20% 범위 :</span> 30% 이상의 할인은 개별 시술의 가치를 훼손한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 업셀 동선 설계 :</span> 엔트리(보톡스 + LDM) → 코어(보톡스 + 필러 + 스킨부스터) → 프리미엄(리프팅 + 실 + 스킨부스터).</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 선불 패키지 환불 :</span> 소비자분쟁해결기준에 따라 미사용분 환불이 원칙이다. '환불 불가'는 불공정 약관에 해당한다.</p>
    `,
  },

  // ─── 3장. 수익 구조 분석 + 서머리 + 체크리스트 ───
  {
    id: "s1-1-8-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3장. 미용치과 수익 구조 분석 — 숫자로 보는 전체 그림</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">시술별 수익 구조 매트릭스</h3>
      <p class="text-[#333] leading-relaxed mb-2">▶ 보톡스 (사각턱 50U) : 시술 단가 80,000원, 재료비 22,000원, 마진율 73%.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 필러 (입술 1cc) : 시술 단가 150,000원, 재료비 50,000원, 마진율 67%.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 스킨부스터 (리쥬란 2cc) : 시술 단가 290,000원, 재료비 100,000원, 마진율 66%.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 슈링크 (전안면) : 시술 단가 130,000원, 재료비 30,000원, 마진율 77%.</p>
      <p class="text-[#333] leading-relaxed mb-8">▶ 실리프팅 (PLLA 10줄) : 시술 단가 690,000원, 재료비 100,000원, 마진율 86%.</p>
    `,
  },
  {
    id: "s1-1-8-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">월 매출 시뮬레이션 (월 60건 가정)</h3>
      <p class="text-[#333] leading-relaxed mb-2">▶ 보톡스 25건 : 매출 200만 원, 순이익 145만 원 (비중 28%).</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 필러 15건 : 매출 225만 원, 순이익 150만 원 (비중 29%).</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 스킨부스터 10건 : 매출 290만 원, 순이익 190만 원 (비중 24%).</p>
      <p class="text-[#333] leading-relaxed mb-4">▶ 슈링크 10건 : 매출 130만 원, 순이익 100만 원 (비중 19%).</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">합계 : 월 60건, 매출 845만 원, 순이익 585만 원.</p>
    `,
  },
  {
    id: "s1-1-8-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-6">STEP 1 서머리</h3>
      <p class="text-[#333] leading-relaxed mb-2">▶ 치과 미용시술은 보톡스 → 필러 → 스킨부스터 → (실리프팅) → (장비 시술) 순서로 도입한다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 보톡스와 필러는 치과의 해부학적 강점이 직접 발휘되는 고유·인접 영역이다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 보톡스는 미끼이자 입구다. 단독 매출에 기대하지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 필러는 안전 부위(입술·턱끝)부터 단계적으로 확장한다. 히알루로니다제 필수 구비.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 스킨부스터·실리프팅의 도입 전제 조건을 이해했다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 실리프팅은 카데바 실습 포함 전문 교육, 모노실 50케이스 이상 축적이 전제 조건이다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 장비 시술은 투자 회수 계산 후 도입한다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 수가 설계 시 재료비뿐 아니라 시간 원가를 반영해야 실질 마진이 보인다.</p>
      <p class="text-[#333] leading-relaxed mb-8">▶ 시술 간 가격 위계를 유지하고, 패키지로 업셀 동선을 설계한다.</p>
    `,
  },
  {
    id: "s1-1-8-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">체크리스트 — 이 STEP을 완료했다면 아래를 확인하라</h3>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">6개 분야의 도입 순서와 치과 영역 구분을 이해했다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">보톡스 루트 A/B 중 자기 치과에 적합한 방향을 판단했다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">필러 도입 시 1단계(입술/턱끝)부터 시작하는 것이 왜 중요한지 알고 있다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">히알루로니다제의 필수 구비 이유와 혈관폐색 응급 프로토콜(HDPH)을 숙지했다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">스킨부스터·실리프팅의 도입 전제 조건을 이해했다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">장비 도입 시 손익분기점 시뮬레이션의 필요성을 인지했다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">수가 설계 3단계(원가 파악 → 시간 원가 → 마진 설계)를 적용할 수 있다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">시술 간 가격 위계와 패키지 설계 원칙을 파악했다</span></li>
        <li class="flex items-start gap-3"><span class="text-[#C4929B] font-bold mt-0.5">☐</span><span class="text-[#333]">월 60건 가정 시 매출 845만 원, 순이익 585만 원 구조를 이해했다</span></li>
      </ul>
    `,
  },
];
