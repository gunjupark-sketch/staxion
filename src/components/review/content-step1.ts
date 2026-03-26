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
      <div class="bg-[#f0f0f0] border border-[#ddd] p-4 mb-8 text-[#666] italic text-sm">[도표: 6개 분야 총괄 비교 — 치과 연관도, 도입 난이도, 초기 투자, 건당 마진, 권장 도입 순서를 한눈에 비교하는 매트릭스]</div>
    `,
  },
  {
    id: "s1-intro-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">도입 순서와 치과 영역 구분</h3>
      <p class="text-[#333] leading-relaxed mb-4">6개 분야를 어떤 순서로 도입할 것인가. 원칙은 단순하다. 치과의 해부학적 강점이 가장 직접적으로 발휘되는 분야부터 교두보를 확보하고, 그 위에서 확장해 나가는 것이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 1순위. 보톡스 — 치과의 고유 영역이다. 교근과 저작근은 치과의사가 매일 다루는 해부학적 영토 한복판이다. 초기 투자는 약 25만 원 수준. 도입 난이도가 가장 낮다. 망설일 이유가 없는 0순위 출발점이다.</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 2순위. 필러 — 치과의 인접 영역이다. 입술과 턱끝은 치과 치료의 결과물과 직접 맞닿는 하안면부다. 초기 투자는 약 50만 원 수준. 도입 난이도는 중간. 보톡스로 쌓은 신뢰 위에 자연스럽게 올릴 수 있는 2단계 확장이다.</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 3순위. 스킨부스터 — 확장 영역이다. 초기 투자 55~110만 원. 도입 난이도 낮음에서 중간. 피부 개선이라는 새로운 가치를 환자에게 제안하는 분기점이다.</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 4순위. 실리프팅 — 확장 영역이다. 초기 투자 35~90만 원. 도입 난이도는 높음. 침습성이 깊어 원장의 숙련도가 반드시 뒷받침되어야 한다. 해부학적 이해 없이 뛰어들어서는 안 되는 분야다.</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 5순위. 리프팅 장비 — 확장 영역이다. 초기 투자는 1,000만 원에서 최대 1억 원까지. 장비 투자 규모가 크기 때문에 ROI 계산이 선행되어야 한다. 도입 난이도 중간.</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 6순위. 레이저/피부장비 — 확장 영역이다. 초기 투자 200만 원에서 5,000만 원. 도입 난이도 낮음에서 중간. 스펙트럼이 넓어 치과의 규모와 전략에 따라 선택의 폭이 가장 다양한 분야다.</h4>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">명심해야 한다. 보톡스와 필러는 치과의 해부학적 강점이 직접 발휘되는 고유·인접 영역이다. 3순위 이하는 사업적 확장이다. 보톡스와 필러가 안정적으로 안착한 뒤에 확장하는 것이 원칙이다. 순서를 건너뛰는 것은 기초 공사 없이 2층을 올리는 것과 다르지 않다.</p>
    `,
  },

  // ─── 1-1. 보톡스 ───
  {
    id: "s1-1-1-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1장. 보톡스 (Botulinum Toxin) — 미용치과의 가장 확실한 첫 발</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 6개 분야 중 도입 난이도가 가장 낮고, 치과와의 해부학적 연결점이 가장 강하다. 미용시술의 입구이자, 환자가 치과에서 미용을 경험하는 첫 접점이다. 여기서 쌓은 신뢰가 필러, 스킨부스터, 리프팅으로 이어지는 모든 확장의 토양이 된다.</p>
    `,
  },
  {
    id: "s1-1-1-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스(보툴리눔 톡신)는 클로스트리디움 보툴리눔균에서 추출한 A형 신경독소를 정제하여 근육에 미량 주입하는 시술이다. 신경 말단에서 아세틸콜린 분비를 차단하여 근육 활동을 일시적으로 억제한다. 주름 개선, 근육 축소, 다한증 치료 등에 활용되며, 전 세계적으로 가장 많이 시행되는 비수술 미용 시술이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 부위당 5~15분. 다부위 동시 시술 시 30분 이내.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 31G(0.26mm) 바늘 사용. 대부분 마취 불필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 시술 직후 일상 복귀. 미세 멍은 1~3일 내 소실.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 2~3일부터 서서히 나타나며, 최대 효과는 1~2주 후.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부/수유부, 신경근 질환, 아미노글리코사이드 항생제 복용 중.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">희석 방법</h4>
      <p class="text-[#333] leading-relaxed mb-4">동결건조(분말형) 보톡스는 시술 전 생리식염수(0.9% NaCl)로 희석해야 한다. 희석 비율에 따라 1회 주사량이 달라지므로 정확한 희석이 핵심이다. 이노톡스(액상형)는 별도 희석이 불필요하다. 개봉 즉시 주사 가능하여 초기 도입 시 희석 오류를 원천 차단할 수 있다.</p>
      <div class="bg-[#f0f0f0] border border-[#ddd] p-4 mb-8 text-[#666] italic text-sm">[도표: 보톡스 희석 비율표 — 100U 기준 식염수 양별 농도·1회 주사량 비교]</div>
    `,
  },
  {
    id: "s1-1-1-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 6개 분야 중 치과와의 연결점이 가장 강하다. 이것은 마케팅적 수사가 아니라 해부학적 사실이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">주요 시술 대상인 교근, 측두근, 구강 주변 근육군은 치과의사가 학부 교육과 임상을 통해 가장 깊이 이해하는 영역이다. 피부과나 성형외과가 교과서에서 배운 것을, 치과의사는 매일 손끝으로 만지며 살아온 근육들이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과의사의 해부학적 우위</h4>
      <p class="text-[#333] leading-relaxed mb-4">치과의사는 삼차신경(V)과 안면신경(VII)의 분포를 가장 정밀하게 학습한 의료인이다. 보톡스 시술에서 이 전문성이 직접적인 무기가 되는 근육들을 짚어본다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 교근(Masseter)</span> — 사각턱 보톡스의 핵심 타깃이다. 치과의사가 매일 촉진하는 바로 그 근육이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 측두근(Temporalis)</span> — 이갈이·이악물기 치료의 핵심. 교합 진단 시 반드시 평가하는 근육이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 구각하제근(DAO)</span> — 입꼬리 보톡스의 타깃. 잇몸 성형과 연계되는 영역이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 이근(Mentalis)</span> — 턱끝 보톡스의 타깃. 하악 전치부 시술과 바로 인접해 있다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
        <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시 :</span> 교정 완료 환자에게 이렇게 제안한다. "교정으로 치아는 정리됐는데, 교근이 발달해서 턱라인이 아직 각져 보입니다. 사각턱 보톡스로 턱라인을 다듬으면 교정 효과가 훨씬 살아납니다." 이런 제안은 피부과에서는 구조적으로 불가능하다. 교정 치료의 결과물을 눈앞에서 확인하면서 안면 윤곽까지 연결하는 동선은 치과만의 특권이다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-1-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 도입에는 크게 두 가지 루트가 있다. 치과가 위치한 지역, 기존 환자 특성, 원장의 경영 철학에 따라 적합한 방향이 달라진다. 어느 쪽이 정답이라고 단정할 수 없다. 다만, 각 루트가 만들어내는 구조는 완전히 다르다는 것을 명확히 이해하고 선택해야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트 A : 저가형 (볼륨 전략)</h4>
      <p class="text-[#333] leading-relaxed mb-4">저가 국산 제품(뉴럭스, 리즈톡스 등)으로 낮은 가격대를 설정하고, 환자 수를 빠르게 확보하는 전략이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 가격대 :</span> 사각턱 50U 기준 2~5만 원 (뉴럭스 극저가 2~2.5만 원, 리즈톡스·원더톡스 등 3~5만 원) — 수가조사 데이터 기반 재산정 완료.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장점 :</span> 초기 환자 모집이 빠르다. 미용 시술의 존재감을 단기간에 확보할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리스크 :</span> 피부과 공장형과 가격 경쟁에 말려들 수 있다. 치과 브랜드가 '저가 미용'으로 각인되면 복원이 어렵다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트 B : 프리미엄형 (가치 전략)</h4>
      <p class="text-[#333] leading-relaxed mb-4">150kDa 정제형 제품(코어톡스, 제오민)을 사용하고, "치과니까 더 정밀하다"는 가치를 파는 전략이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 가격대 :</span> 사각턱 50U 기준 7~12만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장점 :</span> 치과 브랜드가 유지된다. 건당 마진이 높다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리스크 :</span> 초기 환자 모집이 느리다. 성과가 눈에 보이기 전에 포기할 위험이 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4">두 루트의 구조적 차이를 숫자로 보면 명확하다. 월 300만 원 마진을 달성하려면, 저가형은 약 162건(하루 7건 이상)이 필요하고, 프리미엄형은 약 52건(하루 2~3건)이면 충분하다. 일반 치과에서 하루 7건 이상의 보톡스 시술은 현실적으로 어렵다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">보톡스가 치과에서 수행하는 역할 — 공통 전략</h4>
      <p class="text-[#333] leading-relaxed mb-4">어느 루트를 선택하든, 보톡스가 치과에서 수행하는 전략적 역할은 동일하다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째,</span> 미용 시술의 입구다. 환자가 가장 부담 없이 시작하는 시술이다. 보톡스 경험 후 필러, 스킨부스터로 확장하는 퍼널(funnel, 깔때기형 단계별 전환 구조)의 첫 단계가 된다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째,</span> 기존 환자 전환이다. 교정, 보철, 턱관절 치료 중인 기존 환자에게 자연스럽게 연결하는 크로스셀(cross-sell)이다. 신규 환자를 외부에서 모집하는 것보다 기존 환자를 전환하는 것이 10배 효율적이다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">셋째,</span> 재방문 주기 단축이다. 효과 지속 기간이 3~6개월이므로, 재시술 내원이 치과 정기 검진 주기와 자연스럽게 겹친다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">명심해야 한다. 저가형이든 프리미엄형이든, 보톡스 단독 매출에 기대를 걸어서는 안 된다. 보톡스 뒤에 무엇을 연결할 것인가를 먼저 설계한 후 보톡스 가격을 정하는 것이 순서다.</p>
    `,
  },
  {
    id: "s1-1-1-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-4">아래 데이터는 2026년 상반기 시장 현황을 바탕으로, 국내 주요 미용시술 비교 플랫폼 약 12,000건의 가격 데이터에서 보톡스 카테고리를 정제한 결과다.</p>
      <p class="text-[#333] leading-relaxed mb-4">시장 가격은 지역, 시기, 경쟁 상황에 따라 변동된다. 수가 설정 시 반드시 해당 지역의 최신 시장 상황을 직접 확인해야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시장 포지션맵 (사각턱 50U 기준)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 공장형 :</span> 10유닛당 ~5,000원. 사각턱 50U 기준 8,900~25,000원. 미끼 가격이다. 원가 이하. 절대 따라가지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 일반 피부과 :</span> 10유닛당 8,000~15,000원. 사각턱 50U 기준 40,000~75,000원. 중소 피부과의 정상가 구간이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 프리미엄 :</span> 10유닛당 20,000원 이상. 사각턱 50U 기준 100,000~150,000원. 수입 제품, 프리미엄 클리닉의 가격대다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 치과 권장 :</span> 10유닛당 10,000~20,000원. 사각턱 50U 기준 50,000~100,000원. 일반 피부과 상단에서 프리미엄 하단 사이에 포지셔닝하는 것이 치과에 가장 적합한 구간이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">가격 설계 원칙</h4>
      <p class="text-[#333] leading-relaxed mb-4">최소 2단 가격제를 운영하라. 국내형과 프리미엄형으로 2단계를 설정하면, 환자의 반응이 '가격 불만'에서 '비교 판단'으로 전환된다. 선택지가 주는 심리적 효과다.</p>
      <p class="text-[#333] leading-relaxed mb-4">공개가와 정상가를 분리하라. 런칭 할인은 정상가 대비 8~12% 수준만 권장한다. 과도한 할인은 정상가 복원을 구조적으로 어렵게 만든다.</p>
      <p class="text-[#333] leading-relaxed mb-4">할인보다 포함 가치를 설계하라. 촬영, 체크, 리터치 정책을 가격에 포함시켜 가격의 이유를 만든다. "왜 피부과보다 비싼가"에 대한 답이 가격 안에 내장되어 있어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">리터치 정책을 명시하라. 리터치 포함 여부를 가격표에 명확히 구분해 두어야 환자와의 불필요한 마찰을 원천 차단할 수 있다.</p>
    `,
  },
  {
    id: "s1-1-1-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">제품 비교의 핵심 — 내성(면역원성)</h4>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 반복 시술이 전제되는 시술이다. 따라서 제품 선택에서 가장 먼저 따져야 할 기준은 가격이 아니라 내성(면역원성)이다. 복합단백질이 체내에서 항원으로 인식되면 항체가 형성되어 효과가 점차 떨어지는 '내성'이 발생할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 일반형 (뉴럭스, 리즈톡스 등) :</span> 순수 독소(150kDa) + 복합단백질 + 비활성 독소 모두 포함. 내성 위험 높음.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 코어톡스 :</span> 복합단백질 제거. 비활성 독소 잔류. 내성 위험 중간.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 제오민 :</span> 복합단백질 제거 + 비활성 독소 제거. 내성 위험 가장 낮음.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트별 추천 제품</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트 A (저가형)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1순위 — 뉴럭스 100U (23,000원) :</span> 100U로 사각턱 2명 시술 가능. 1인당 재료비 11,500원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2순위 — 리즈톡스 50U (24,000원) :</span> 소용량으로 재고 부담이 적다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트 B (프리미엄형)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1순위 — 코어톡스 100U (44,000원) :</span> 내성 위험 낮음. "내성 적은 보톡스"로 차별화 포인트 구축 가능. 1인당 재료비 22,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2순위 — 이노톡스 50U/100U (29,900원/43,900원) :</span> 국내 유일 액상형. 희석 오류 없음. 초보 시술자에게 가장 안전한 선택이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 프리미엄 강화 — 제오민 50U :</span> 완전정제형. 내성이 가장 낮다. [건주확인] 공급가 확인 필요.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필요 장비/도구</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주사기 :</span> 1cc 인슐린 시린지 (31G, 8mm). ~8,900원/100개.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 냉장보관 :</span> 2~8°C. 기존 치과 약품 냉장고 활용. 추가 비용 없음.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 희석용 식염수 :</span> 0.9% 생리식염수. 액상형 사용 시 불필요. 비용 미미.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 표면마취 :</span> EMLA 크림. 선택사항. 비용 미미.</p>
    `,
  },
  {
    id: "s1-1-1-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 6개 분야 중 학습 곡선이 가장 낮다. 치과의사는 이미 주사 시술에 숙련되어 있으므로, 해부학적 포인트와 용량만 익히면 된다. "주사를 못 놓을까봐" 걱정하는 것은 불필요하다. 치과의사는 매일 마취 주사를 놓는 직업이다. 주사 핸들링은 이미 체화되어 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 시술 시 흔한 실수</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 이마 보톡스 과량 :</span> 눈꺼풀이 무거워지는 안검하수가 발생할 수 있다. 미간과 이마를 분리 주입하고, 보수적 용량으로 시작하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 교근 주입 위치 오류 :</span> 교근 외 인접 근육이 이완될 수 있다. 반드시 교근을 촉진한 후 근육 중심부에 정확히 주입하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 좌우 비대칭 :</span> 환자 불만족의 가장 흔한 원인이다. 시술 전 좌우 교근 크기를 반드시 비교하고, 양측 동일 용량을 원칙으로 하라.</p>
    `,
  },
  {
    id: "s1-1-1-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-4">아래는 2026년 상반기 시장 현황과 확인된 공급 참고가에 근거한 시뮬레이션이다. 이 가이드북에서 마진율은 판매가 대비(마진 ÷ 판매가 × 100)로 통일한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">루트별 수익성 비교 (사각턱 50U 기준)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 루트 A (저가형 — 뉴럭스) :</span> 재료비 11,500원, 판매가 30,000원, 건당 마진 18,500원. 월 300만 원 마진 달성에 약 162건 필요(하루 7건 이상).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 루트 B (프리미엄형 — 코어톡스) :</span> 재료비 22,000원, 판매가 80,000원, 건당 마진 58,000원. 월 300만 원 마진 달성에 약 52건 필요(하루 2~3건).</p>
      <p class="text-[#333] leading-relaxed mb-4">프리미엄형은 저가형 대비 약 3분의 1 건수로 동일한 마진을 달성할 수 있다. 저가형에서 하루 7건 이상의 보톡스 시술은 일반 치과에서 현실적으로 어렵다.</p>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 시간당 생산성은 레진 충전과 비슷하고, 스케일링보다 4~5배 높다. 단, 보톡스는 '추가 매출'이지 기존 진료를 대체하는 것이 아니라는 점을 놓쳐서는 안 된다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">그리고 가장 중요한 현실 인식 하나. 보톡스 단독으로 월 1,000만 원 이상 매출은 비현실적이다. 보톡스는 미끼이자 입구다. 필러와 스킨부스터로의 업셀 매출이 더해져야 비로소 의미 있는 수익 구조가 완성된다.</p>
    `,
  },
  {
    id: "s1-1-1-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 미용시술 중 초기 투자가 가장 낮다. 별도 장비 없이 기존 치과 인프라를 그대로 활용할 수 있다. 시작하는 데 필요한 것은 놀라울 만큼 적다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스 제품 1바이알 (필수) :</span> 23,000~44,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 인슐린 시린지 100개 (필수) :</span> ~8,900원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 냉장고 (기존 활용) :</span> 0원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 생리식염수 (분말형 사용 시 필수) :</span> 비용 미미.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 동의서 양식 (필수) :</span> 0원 (메디스테이션 제공).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 거울 — 반신/전신 (권장) :</span> 3~10만 원.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">합계 : 약 25만 원. 이것이 미용치과의 첫 발을 내딛는 데 필요한 전부다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">재고 관리</h4>
      <p class="text-[#333] leading-relaxed mb-4">보관은 냉장(2~8°C)이 원칙이며, 냉동은 불가다. 분말형은 희석 후 4시간 이내에 사용해야 하고, 액상형(이노톡스)은 개봉 후 24시간이 한계다.</p>
      <p class="text-[#333] leading-relaxed mb-4">100U 1바이알로 사각턱 2명을 시술할 수 있다. 같은 날 보톡스 환자를 몰아서 예약하면 바이알 낭비를 줄일 수 있다. "보톡스 Day"를 운영하라 — 예를 들어 매주 화요일·목요일 오후를 보톡스 집중 시간으로 세팅하면 재고 효율과 운영 효율을 동시에 잡을 수 있다.</p>
    `,
  },
  {
    id: "s1-1-1-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 6개 분야 중 사고 리스크가 가장 낮다. 필러(혈관폐색으로 인한 실명·피부괴사)나 실리프팅(감염·비대칭) 대비 안전성이 월등히 높아 '첫 도입 시술'로 가장 적합하다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주요 부작용</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 멍·부종 (흔함) :</span> 자연 소실(1~3일). 냉찜질로 대응.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 좌우 비대칭 (가끔) :</span> 2주 후 확인, 보정 주입 가능.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 안검하수 — 눈꺼풀 처짐 (1% 미만) :</span> 아프라클로니딘 0.5% 점안. 2~4주 자연 회복.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 아나필락시스 (극히 드묾) :</span> 에피네프린 투여, 119 신고.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 전 필수 고지 사항 (동의서 포함)</h4>
      <p class="text-[#333] leading-relaxed mb-4">효과 발현은 2~3일부터 서서히 나타나며, 최대 효과는 1~2주 후다. 지속기간은 3~6개월이며 반영구적이지 않다. 유지를 위해서는 재시술이 필요하다는 점을 반드시 고지해야 한다. 시술 후 4시간 동안 시술 부위를 만지지 않도록 안내하고, 당일 음주, 사우나, 격렬한 운동은 금지다.</p>
    `,
  },
  {
    id: "s1-1-1-11",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스는 쉽다. 주사 한 번이면 끝나고, 별도 장비 투자도 필요 없으며, 초기 투자 25만 원이면 시작할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4">하지만 시장은 이미 포화 상태다. 대형 피부과 프랜차이즈가 1만 원 미만으로 보톡스를 뿌리는 현실에서, 치과가 동일한 방식으로 뛰어드는 것은 실패가 예정된 싸움이다. 치과의 진입은 근본적으로 다른 진입이어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">치과는 보톡스를 독립적인 상품으로 '파는' 것이 아니라, 기존 치과 진료의 연장선 위에 자연스럽게 '얹는' 것이다. 교정 완료 환자에게 턱라인 정리를 제안하는 것, 턱관절 통증 환자에게 교근 이완을 권하는 것 — 이것이 치과에서 보톡스를 도입하는 진짜 이유이자, 피부과가 절대 흉내 낼 수 없는 치과만의 동선이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 한 건의 마진이 2만 원이든 6만 원이든, 그 환자가 3개월 뒤 재방문하고, 6개월 뒤 필러를 시술받고, 1년 뒤 리프팅까지 확장된다면 — 그것이 보톡스 도입이 만들어내는 진짜 수익 구조다. 한 건의 매출이 아니라, 한 명의 환자가 걸어갈 여정 전체를 설계하는 것. 그것이 이 챕터의 결론이다.</p>
    `,
  },

  // ─── 1-2. 필러 ───
  {
    id: "s1-1-2-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2장. 필러 (Dermal Filler) — 보톡스 다음의 진짜 수익 엔진</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러는 보톡스 다음으로 도입 빈도가 높지만, 보톡스와는 근본적으로 다른 차원의 시술이다. 보톡스가 근육을 이완시키는 시술이라면, 필러는 조직에 물질을 직접 주입하여 볼륨을 만드는 시술이다. 리스크의 성격과 크기가 다르고, 그만큼 요구되는 역량의 깊이도 다르다. 바꿔 말하면, 보톡스가 미용치과의 '입구'였다면, 필러는 본격적인 '수익 엔진'이 시동 걸리는 지점이다.</p>
    `,
  },
  {
    id: "s1-1-2-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러(Dermal Filler)는 피부 아래 조직에 충전물질을 주입하여 볼륨 회복, 주름 충전, 얼굴 윤곽 개선을 수행하는 시술이다. 대부분 히알루론산(HA) 기반이며, 문제 발생 시 히알루로니다제로 용해가 가능하다는 점이 안전성의 핵심 근거다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">HA 필러의 핵심 특성 세 가지를 반드시 이해해야 한다.</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 교차결합 (Cross-linking) :</span> BDDE 등으로 HA 분자를 결합시킨 것이다. 교차결합도가 높을수록 단단하고 오래 유지된다. 부위별로 적합한 제품이 달라지는 이유가 바로 이것이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 점탄성 (Viscoelasticity) :</span> 형태를 유지하는 탄성과, 자연스럽게 퍼지는 점성의 균형이다. 제품 선택의 핵심 기준이 된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 단상 vs 이상 :</span> 단상(균일 겔, 벨로테로 등)과 이상(입자+겔, 레스틸렌 등)으로 나뉜다. 부위별 적합성에 차이가 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 부위당 15~30분. 마취 포함 30~45분.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 27~30G 바늘 또는 캐뉼라 사용. 대부분 제품에 리도카인이 포함되어 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 부종 2~5일. 멍 가능. 최종 결과는 2주 후.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 즉시. 단, 부종이 빠지면서 약간 줄어든다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부/수유부, 시술 부위 감염, 자가면역질환, 켈로이드 체질, 영구필러 시술 이력.</p>
    `,
  },
  {
    id: "s1-1-2-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러의 주요 시술 부위 — 입술, 턱끝, 팔자주름, 입꼬리 — 는 모두 구강 주변에 위치한다. 하악 신경, 이신경, 안면동맥 등의 주행 경로에 대한 임상적 친숙도는 치과의사가 타 진료과 대비 압도적으로 높다.</p>
      <p class="text-[#333] leading-relaxed mb-4">특히 하치조신경차단(IANB) 마취를 일상적으로 시행하면서 축적된 해부학적 감각은 필러 시술의 안전성과 직결된다. 바늘 끝이 어디에 닿고 있는지를 감각으로 아는 것은 교과서 지식과는 차원이 다른 무기다.</p>
      <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
        <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시 :</span> 임플란트 보철 완료 후 환자에게 이렇게 제안한다. "치아는 완성됐는데, 입술 볼륨이 줄어서 전체 비율이 아쉽습니다. 입술 필러 1cc면 치아와 입술 비율이 훨씬 자연스러워집니다." 이런 제안은 치과의 치료 연장선 위에서만 가능하다. 임플란트 보철의 결과물을 눈앞에서 확인하면서 안면 윤곽까지 연결하는 동선 — 피부과에서는 구조적으로 불가능한 치과만의 특권이다.</p>
      </div>
    `,
  },
  {
    id: "s1-1-2-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러에서 치과의 포지션은 보톡스와 근본적으로 다르다. 보톡스는 가격 경쟁이 핵심이었지만, 필러는 안전성이 핵심이다. 이유는 단순하다. 필러는 잘못 주입하면 혈관을 막아 피부괴사나 실명을 유발할 수 있는 시술이기 때문이다. 안전하게 시술할 수 있다는 신뢰가 곧 가격의 정당성이 된다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과 필러 도입 3단계 로드맵</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1단계 — 입술, 턱끝 (리스크 낮음) :</span> 즉시 시작하라. 치과의 해부학적 강점이 가장 직접적으로 발휘되는 하안면부다. 보톡스로 미용 시술의 문을 연 환자에게 자연스럽게 제안할 수 있는 첫 번째 확장이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2단계 — 팔자주름, 입꼬리 (리스크 중간) :</span> 1단계에서 최소 30케이스 이상의 경험을 축적한 후 진입하라. 주입 깊이와 혈관 주행에 대한 감각이 충분히 체화된 상태에서 확장하는 것이 원칙이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 3단계 — 볼, 관자놀이 (리스크 중~높음) :</span> 2단계가 안정적으로 안착한 후, 별도의 전문 교육을 이수하고 진입하라. 이 영역은 숙련도가 안전과 직결된다.</p>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-8">
        <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#f59e0b] font-bold">주의:</span> 명심해야 한다. 코 필러와 이마 필러는 실명 위험이 있는 고위험 시술이다. 충분한 교육과 경험 없이 시도해서는 안 된다. 이 두 부위는 3단계 이후에도 별도의 심화 과정이 반드시 선행되어야 한다.</p>
      </div>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">보톡스와의 전략적 차이</h4>
      <p class="text-[#333] leading-relaxed mb-4">보톡스를 통해 미용 시술의 입구를 열고, 필러에서 실질적인 수익을 가져가는 것 — 이것이 치과 미용시술의 기본 매출 구조다. 필러의 도입 전략은 '저가 vs 프리미엄'이 아니라, '안전한 부위에서 시작하여 점진적으로 확장한다'는 단계적 접근이 핵심이다. 순서를 건너뛰는 것은 리스크를 건너뛰는 것이 아니라, 리스크를 껴안는 것이다.</p>
    `,
  },
  {
    id: "s1-1-2-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">권장 운영 가격대</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 입술 1cc :</span> 시장 중간값 130,000원. 치과 권장가 130,000~180,000원. 가장 빈번한 첫 필러 시술이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 턱끝 1cc :</span> 시장 중간값 150,000원. 치과 권장가 150,000~200,000원. 시술이 단순하고 생산성이 높다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 팔자주름 1cc :</span> 시장 중간값 150,000원. 치과 권장가 150,000~200,000원. 2단계 이후 도입.</p>
      <p class="text-[#333] leading-relaxed mb-4">필러는 보톡스와 달리 극단적인 저가 경쟁이 덜하다. 시술의 난이도와 리스크가 높기 때문에, 환자도 '싼 곳'보다 '안전한 곳'을 찾는 경향이 강하다. 이것이 치과에게 유리한 구조다. "해부학을 가장 잘 아는 의료인이 시술한다"는 가치 자체가 가격의 정당성을 만든다.</p>
    `,
  },
  {
    id: "s1-1-2-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <p class="text-[#333] leading-relaxed mb-4">초기 도입 치과에는 국산 일반 등급 HA 필러(뉴라미스, 채움, 벨라스트 등)를 추천한다. 선택의 이유는 세 가지다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째,</span> 히알루로니다제로 용해 가능하다. 초보 시술자에게 가장 중요한 안전망이다. 문제가 생겼을 때 되돌릴 수 있다는 것은 심리적으로도, 실무적으로도 결정적인 차이를 만든다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째,</span> 점도별 라인업을 보유하고 있다. 부위별로 적합한 제품을 같은 브랜드 안에서 선택할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">셋째,</span> 가격 대비 충분한 품질이다. 시장 판매가 13만 원 기준으로 충분한 마진을 확보할 수 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필수 장비/도구</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 27G/30G 바늘 :</span> 정밀 주입용.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 캐뉼라 22~25G :</span> 혈관 천공 위험을 낮춘다. 팔자주름·턱끝 시술 시 권장.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 히알루로니다제 :</span> 필수 구비. 혈관폐색 발생 시 즉시 투여해야 한다. 시술실에 항시 비치하라. 이것은 선택이 아니라 생존 장비다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 신경차단 마취 :</span> 인프라오비탈/멘탈 신경차단. 치과의사의 일상 술기 그대로다.</p>
    `,
  },
  {
    id: "s1-1-2-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러는 보톡스보다 확실히 난이도가 높다. 보톡스가 "어디에 얼마나"의 2차원 판단이라면, 필러는 "어디에, 얼마나, 어떤 깊이로, 어떤 속도로, 어떤 방향으로, 혈관은 어디에 있는지"까지 고려해야 하는 다차원 판단이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">하지만 치과의사에게는 결정적인 이점이 있다. 매일 구강 내에서 마취 주사를 놓으며 체화된 바늘 끝의 감각, 하치조신경차단을 수행하면서 훈련된 해부학적 방향 감각 — 이것들이 필러 시술의 학습 곡선을 대폭 단축시킨다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 시술 시 핵심 주의사항</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주입 속도 :</span> 천천히. 급하게 밀어 넣으면 혈관 내 주입 위험이 높아진다. 저항이 느껴지면 즉시 멈추고 위치를 재확인하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주입 깊이 :</span> 부위마다 적정 레이어가 다르다. 입술은 점막 하(submucosal), 턱끝은 골막 상(supraperiosteal). 깊이를 틀리면 결과가 부자연스러워진다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 아스피레이션(흡인 테스트) :</span> 주입 전 피스톤을 살짝 당겨 혈액 역류를 확인하는 습관을 반드시 들여라. 캐뉼라 사용 시에는 혈관 천공 위험이 낮지만, 바늘 사용 시에는 필수 절차다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 좌우 대칭 :</span> 필러는 보톡스보다 비대칭이 눈에 훨씬 잘 띈다. 시술 전 사진을 반드시 촬영하고, 양측을 번갈아 가며 소량씩 주입하는 것이 원칙이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">교육 경로</h4>
      <p class="text-[#333] leading-relaxed mb-4">1단계 부위(입술, 턱끝) 시술을 위한 핵심 교육은 보톡스 대비 깊이가 필요하다. 주사 핸들링만으로는 부족하고, 혈관 해부학과 합병증 대응 프로토콜까지 반드시 포함된 과정을 이수해야 한다.</p>
    `,
  },
  {
    id: "s1-1-2-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러는 치과 미용시술의 수익 구조에서 핵심 엔진 역할을 한다. 보톡스가 환자를 데려오는 입구라면, 필러는 실질적인 마진을 만들어내는 본진이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">수익 시뮬레이션 (입술/턱끝 1cc 기준)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 평균 판매가 :</span> 150,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 재료비 (필러 1cc) :</span> 약 50,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 건당 마진 :</span> 약 100,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 마진율 :</span> 약 67%.</p>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 프리미엄형의 건당 마진이 58,000원이었다. 필러는 건당 100,000원. 약 1.7배다. 시술 시간은 보톡스보다 길지만(15~30분 vs 5~15분), 시간당 생산성은 여전히 높다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">월 수익 시뮬레이션</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주 5건 시술 시 :</span> 월 20건 × 100,000원 = 월 200만 원 마진.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주 10건 시술 시 :</span> 월 40건 × 100,000원 = 월 400만 원 마진.</p>
      <p class="text-[#333] leading-relaxed mb-4">여기에 보톡스 매출이 더해지면, 보톡스(월 150~300만 원) + 필러(월 200~400만 원) = 월 350~700만 원의 미용시술 추가 매출 구조가 만들어진다. 기존 치과 매출에 이 숫자가 순수하게 얹어지는 것이다.</p>
    `,
  },
  {
    id: "s1-1-2-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러는 보톡스보다 초기 투자가 약간 높지만, 여전히 별도 장비 투자 없이 기존 치과 인프라를 그대로 활용할 수 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ HA 필러 1~2시린지 (필수) :</span> 시린지당 25,000~50,000원. 1~2개면 충분하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 히알루로니다제 (필수) :</span> 1바이알. 혈관폐색 응급 대응용. 반드시 시술실에 비치.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 캐뉼라 22~25G (권장) :</span> 혈관 천공 위험 감소. 팔자·턱끝 시술 시 필수급.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 27G/30G 바늘 (필수) :</span> 정밀 주입용.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 동의서 양식 (필수) :</span> 0원 (메디스테이션 제공). 필러 전용 동의서에는 혈관폐색 위험을 포함한 합병증 고지가 반드시 포함되어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 거울 — 반신/전신 (권장) :</span> 보톡스 도입 시 이미 구비했다면 추가 비용 없음.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">합계 : 약 50만 원. 보톡스(25만 원)에서 추가 25만 원으로 두 번째 수익 엔진을 장착하는 셈이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">재고 관리</h4>
      <p class="text-[#333] leading-relaxed mb-4">필러는 미개봉 상태에서 상온 보관이 가능한 제품이 대부분이다(제품별 확인 필수). 개봉 후에는 즉시 사용이 원칙이며, 잔여분은 폐기한다. 1시린지 1cc가 1인 1부위 시술에 해당하므로, 보톡스처럼 환자를 몰아서 예약할 필요는 없다. 수요에 맞춰 시린지 단위로 재고를 관리하면 된다.</p>
    `,
  },
  {
    id: "s1-1-2-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-4">필러는 보톡스와 리스크의 차원이 다르다. 보톡스의 최대 부작용이 안검하수(눈꺼풀 처짐, 2~4주 자연 회복)였다면, 필러의 최대 부작용은 혈관폐색으로 인한 피부괴사와 실명이다. 빈도는 극히 낮지만, 발생 시 비가역적 손상을 초래할 수 있다. 이것이 필러 시술에서 기록과 프로토콜이 보톡스보다 훨씬 더 엄격해야 하는 이유다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주요 부작용</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 멍·부종 (흔함) :</span> 자연 소실(2~5일). 냉찜질로 대응. 시술 전 환자에게 미리 고지하면 불안을 줄일 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 결절·덩어리 (가끔) :</span> 주입이 고르지 않거나 너무 얕을 때 발생. 마사지로 분산 가능하며, 심할 경우 히알루로니다제로 용해.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 좌우 비대칭 (가끔) :</span> 2주 후 최종 결과 확인. 부족한 쪽에 보정 주입 가능.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 혈관폐색 (드묾, 그러나 치명적) :</span> 필러가 혈관 내로 들어가 혈류를 차단하는 사고다. 즉시 대응하지 않으면 피부괴사, 최악의 경우 실명으로 이어질 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 감염 (드묾) :</span> 주입 부위 발적, 열감, 통증이 지속되면 감염을 의심. 항생제 투여.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">혈관폐색 응급 프로토콜 — 반드시 숙지하라</h4>
      <p class="text-[#333] leading-relaxed mb-4">필러의 가장 심각한 합병증은 혈관폐색으로 인한 피부괴사 또는 실명이다. 골든타임은 극도로 짧다. 피부괴사 방지는 4시간, 실명 방지는 90분이다. 아래 프로토콜을 시술실에 게시하고, 원장과 모든 스탭이 반드시 숙지해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 인지 :</span> 피부색 변화(blanching 또는 보라색), 극심한 통증, 망상형 색 변화가 나타나면 혈관폐색을 의심하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 1</span> — 주입 즉시 중단.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 2</span> — 히알루로니다제 450~1500IU를 폐색 의심 부위 및 주변에 즉시 주사한다. HDPH(고용량 펄스) 프로토콜이다. 고용량을 주저하지 마라. 부족하게 넣어서 후회하는 것보다 충분히 넣는 것이 압도적으로 안전하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 3</span> — 온찜질로 혈관 확장을 유도한다. 냉찜질은 금지다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 4</span> — 니트로글리세린 패치 2% 도포(혈관 확장 보조).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 즉시 5</span> — 아스피린 투여(혈전 예방).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 추적 :</span> 1시간 후 재평가. 개선이 없으면 히알루로니다제를 추가 투여한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 눈 증상 발생 시 :</span> 즉시 안과 응급 전원. 망막동맥폐색은 90분 이내가 골든타임이다. 1분이 아깝다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">히알루로니다제는 '혹시 몰라서 구비하는 것'이 아니다. '반드시 쓸 일이 있을 것'을 전제로 구비하는 것이다. 필러 시술을 하면서 히알루로니다제를 구비하지 않는 것은, 소화기를 비치하지 않고 불을 다루는 것과 다르지 않다.</p>
      <p class="text-[#333] text-sm italic leading-relaxed mb-6">상세 응급 프로토콜(HDPH 용량 계산, 스탭 훈련, 차트 기록 원칙)은 'STEP 2-5. 응급 대응 프로토콜'에서 다룬다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 전 필수 고지 사항 (동의서 포함)</h4>
      <p class="text-[#333] leading-relaxed mb-4">효과는 즉시 나타나며, 부종이 빠지면서 최종 결과는 2주 후 확정된다. 지속기간은 제품과 부위에 따라 6개월~18개월이며, 반영구적이지 않다. 시술 후 12시간 동안 시술 부위에 강한 압력을 가하지 않도록 안내하고, 당일 음주와 사우나는 금지다. 멍과 부종은 정상적인 반응이며 수일 내 소실된다는 점을 미리 고지하여 환자의 불안을 선제적으로 차단하라. 혈관폐색 가능성과 대응 방법은 동의서에 반드시 포함해야 한다.</p>
    `,
  },
  {
    id: "s1-1-2-11",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스가 문을 여는 열쇠였다면, 필러는 그 문 너머의 첫 번째 방이다. 수익성은 보톡스를 상회하고, 공장형 저가 경쟁에 휘말릴 가능성이 적다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">다만, 필러를 도입하는 순간 치과는 '주사를 놓는 곳'에서 '얼굴에 물질을 넣는 곳'으로 한 단계 이동한다. 히알루로니다제 상시 구비, 혈관폐색 응급 프로토콜 숙지, 시술 전후 사진 촬영 — 이 표준을 갖추지 않은 채 필러를 시작하는 것은 권하지 않는다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">초기 투자 약 50만 원. 보톡스와 금액 차이는 크지 않지만, 그 사이에 놓인 책임의 무게는 분명히 다르다. 그리고 그 책임의 무게를 감당할 수 있는 해부학적 역량을 가장 확실하게 갖추고 있는 직역이 바로 치과의사라는 사실 — 이것이 필러를 치과에서 도입해야 하는 가장 근본적인 이유다.</p>
    `,
  },

  // ─── 1-3. 스킨부스터 ───
  {
    id: "s1-1-3-01",
    html: `
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
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터는 피부 진피층에 히알루론산(HA), 폴리뉴클레오타이드(PN), PDLLA 등 피부 재생 성분을 직접 주입하여 피부 보습, 탄력, 질감을 개선하는 시술이다. 보톡스가 근육을, 필러가 볼륨을 다룬다면, 스킨부스터는 피부 자체의 질을 끌어올리는 영역이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 부위·제품에 따라 20~40분. 전안면 시술 시 최대 1시간.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 다점 주입 방식으로 보톡스보다 통증 체감이 높다. 표면마취(EMLA) 필수 권장. 물광기(메조건) 사용 시 통증 경감.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 시술 직후 미세 멍·붉은 자국 발생 가능. 2~5일 내 소실. 당일 세안·메이크업 주의.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 물광주사·리쥬란은 시술 직후 보습감 체감, 본격 효과 2~3회 시술 후. 쥬베룩은 4~6주 후부터 점진적 개선.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부/수유부, 시술 부위 감염·염증, 자가면역질환, 켈로이드 체질.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">프로그램 구조</h4>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터는 단회 시술이 아니라 프로그램 시술이다. 3~4주 간격으로 3회 1코스가 기본이며, 이후 3~6개월 간격으로 유지 시술을 진행한다. 1회 시술로 판단하지 않는다. 환자에게 "3회까지는 투자, 그 이후부터 유지"라는 프레임을 처음부터 심어야 중도 이탈을 줄일 수 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">제품군별 시술 방식 차이</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 물광주사(HA 기반 — 스킨바이브, 릴리이드M 등) :</span> 진피 얕은 층에 다점 주입. 수동 주입 또는 물광기(메조건) 사용. 시술이 가장 단순하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리쥬란(PN 기반) :</span> 진피층 중간 깊이에 수동 다점 주입. 크로스해칭(격자형 주입) 테크닉이 일반적. 통증이 상대적으로 강하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 쥬베룩(PDLLA+HA) :</span> 진피 깊은 층에 주입. 콜라겐 재생 유도가 목적이므로 주입 깊이가 핵심. 효과 발현이 느린 대신 지속 기간이 길다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시장 특성 세 가지를 반드시 이해해야 한다.</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 환자 지명 구매 :</span> "쥬베룩 해주세요", "리쥬란 맞으러 왔어요" — 환자가 제품명을 알고 찾아온다. 보톡스나 필러와 달리, 제품 브랜드가 곧 시술의 이름이 되는 시장이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 프로그램 기반 :</span> 3~4주 간격으로 3회 1코스가 기본이다. 재방문이 프로그램 자체에 내장되어 있다. 1회 시술이 끝이 아니라 3회 연속 내원의 시작이라는 점이 수익 구조에서 결정적이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 건당 마진 :</span> 쥬베룩 1회(2cc) 시장 중간값 약 264,000원, 리쥬란 1회(2cc) 약 300,000원. 25~30만 원대다. 보톡스의 4~5배에 달하는 건당 매출이다.</p>
    `,
  },
  {
    id: "s1-1-3-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">솔직하게 말하면, 스킨부스터에서 치과만의 해부학적 우위는 크지 않다. 진피층 주입이므로 혈관 해부학 지식이 필수적인 필러와는 성격이 다르다.</p>
      <p class="text-[#333] leading-relaxed mb-4">하지만 치과가 갖는 구조적 이점은 존재한다. 보톡스와 필러로 이미 형성된 미용 시술 환자 기반이 그것이다. "보톡스 맞으러 왔는데, 피부도 좋아질 수 있다고요?" — 이 한마디가 스킨부스터의 시작점이다. 외부에서 신규 환자를 모집하는 것이 아니라, 이미 신뢰가 형성된 기존 미용 환자에게 자연스럽게 확장 제안을 하는 것이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">치과가 갖는 또 하나의 구조적 이점은 마취 역량이다. 스킨부스터는 다점 주입 특성상 통증 체감이 높은 시술이다. 특히 리쥬란은 시술 통증이 극심한 것으로 알려져 있어, "리쥬란 맞고 싶은데 너무 아프다"는 것이 잠재 환자의 가장 흔한 진입 장벽이다. 치과의사는 국소마취에 가장 숙련된 의료인이다. 표면마취(EMLA)만으로 부족한 경우, 시술 부위에 맞춰 국소침윤마취나 신경차단마취를 추가 적용할 수 있다. "거의 안 아팠다"는 경험이 재방문과 입소문의 가장 강력한 동력이 된다. 피부과에서 표면마취 크림만으로 버티게 하는 것과, 치과에서 통증을 원천 차단하고 시술하는 것 — 환자 입장에서 어느 쪽을 선택할지는 명확하다.</p>
    `,
  },
  {
    id: "s1-1-3-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터는 보톡스·필러와 달리, 전제 조건이 충족되지 않은 상태에서 도입하면 환자 모집이 어렵고 재고 부담만 늘어난다. 아래 세 가지가 반드시 갖춰져야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스 운영 안정 :</span> 월 20건 이상 시술이 꾸준히 돌아가고 있어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 필러 도입 완료 :</span> 최소 1단계(입술/턱끝)에서 30케이스 이상의 경험이 축적되어 있어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 미용 환자 재방문 형성 :</span> 보톡스와 필러 재방문 환자가 존재해야 한다. 스킨부스터는 이 환자들에게 제안하는 확장 메뉴다. 미용 환자 기반이 없는 상태에서 스킨부스터만 단독으로 도입하는 것은 고객 없는 가게를 여는 것과 다르지 않다.</p>
      <p class="text-[#333] leading-relaxed mb-4">전제 조건이 충족되었다면, 도입 전략의 핵심은 제품 선택이다. 시장에 제품이 많고, 환자가 제품명을 지정해서 찾아오는 구조이기 때문에, 어떤 제품으로 시작하느냐가 곧 포지션이 된다.</p>
    `,
  },
  {
    id: "s1-1-3-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터 시장은 보톡스·필러와 달리, 제품 브랜드가 곧 시장 구간을 결정한다. 동일 제품군 안에서의 가격 편차보다 제품군 간의 가격 차이가 훨씬 크다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">제품군별 시장 가격 구간 (1회 시술 기준)</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 물광주사(HA 기반) :</span> 80,000~150,000원. 스킨부스터 시장의 입문 가격대.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리쥬란(PN 기반) :</span> 200,000~350,000원 (2cc 기준). 환자 인지도가 가장 높은 제품군.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 쥬베룩(PDLLA+HA) :</span> 200,000~300,000원 (2cc 기준). 콜라겐 재생이라는 차별점.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 기타 PN 계열(리즈넥, 쥬벨룩볼륨 등) :</span> 150,000~250,000원. 후발 제품군.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">[건주확인] 수가 데이터(3사 통합)에서 스킨부스터 카테고리 정밀 추출 시 구간 재조정 필요.</p>
      <p class="text-[#333] leading-relaxed mb-4">치과 권장 포지셔닝 : 각 제품군 시장 중간값 이상. 스킨부스터는 보톡스와 달리 저가 경쟁이 구조적으로 어렵다. 제품 원가 자체가 높고, 환자가 제품을 지명해서 찾아오기 때문에 가격보다 제품 구색과 시술 품질(통증 관리 포함)이 선택 기준이 된다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">가격 설계 — 스킨부스터 특수 변수</h4>
      <p class="text-[#333] leading-relaxed mb-4">(통합 가격 설계 원칙은 STEP 1 2장 "수가체계 설계"를 참조하라. 여기서는 스킨부스터에만 적용되는 변수를 다룬다.)</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 패키지(3회) vs 1회 단가 :</span> 3회 1코스 패키지 가격을 반드시 설계하라. 1회 단가 대비 7~10% 할인이 적정선이다. 환자 입장에서 "3회 다 해야 효과"라면 패키지가 자연스럽다. 패키지 결제는 중도 이탈을 줄이고 매출 예측 가능성을 높인다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 제품 지명 구매 대응 :</span> 리쥬란과 쥬베룩은 가격대가 비슷하지만 효과 발현 속도와 특성이 다르다. 두 제품의 차이를 설명할 수 있는 비교표를 상담실에 비치하고, "어떤 피부 고민이냐에 따라 추천이 달라진다"는 프레임으로 상담하라. 환자가 지정한 제품이 아닌 다른 제품을 추천해야 할 때, 이유를 설명할 수 있어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 콤보 패키지 :</span> 보톡스+스킨부스터, 필러+스킨부스터 콤보를 설계하면 객단가가 올라간다. 동시 시술 시 5~8% 할인 수준이면 환자 입장에서 충분한 유인이 된다. 단, 할인율이 아니라 "한 번 내원에 두 가지를 해결한다"는 편의성이 진짜 셀링 포인트다.</p>
    `,
  },
  {
    id: "s1-1-3-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 도입 추천 제품</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1순위 — 물광주사 (스킨바이브/릴리이드M) :</span> 스킨바이브는 갈더마 제조의 비교차결합 HA, 릴리이드M은 BMI코리아(한국비엠아이코리아) 제조의 HA+PN(폴리뉴클레오타이드) 조합이다. 가격이 낮고, 시술이 단순하며, 진입 장벽이 가장 낮다. 스킨부스터의 첫 발로 가장 적합하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2순위 — 리쥬란HB (파마리서치) :</span> PN(폴리뉴클레오타이드) 기반. 환자 인지도가 가장 높다. HB 버전이 통증이 적어 환자 만족도가 높다. "리쥬란 맞으러 왔어요"라고 찾아오는 환자가 있다면, 이 제품을 구비하지 않을 이유가 없다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 3순위 — 쥬베룩 스킨 (바임/바임글로벌) :</span> PDLLA+HA 기반. 콜라겐 재생이라는 차별점이 있다. 다만 효과 발현이 4~6주로 느려, 환자 기대치 관리가 필수적이다. "바로 효과가 보이는 시술이 아닙니다. 4~6주 후부터 피부가 달라지기 시작합니다" — 이 안내를 시술 전에 반드시 해야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필요 장비/도구</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 주사기 :</span> 30~32G 미세 바늘. 제품에 따라 전용 바늘이 동봉되기도 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 표면마취 크림 :</span> EMLA 크림. 스킨부스터는 다점 주입이므로 보톡스보다 마취 필요성이 높다. 비용 미미.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 물광기/메조건 (선택) :</span> 200만~500만 원. 물광주사 계열에서 균일한 주입과 시술 속도 향상에 효과적. 수요가 확인된 후 도입하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 냉장보관 :</span> 제품별 보관 조건 상이. 리쥬란 냉장(2~8°C), 쥬베룩 상온 보관 가능. 반드시 제품별 보관 기준을 확인하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 전후 사진 촬영 장비 (권장) :</span> 스킨부스터는 효과가 즉각적이지 않으므로, 시술 전후 비교 사진이 환자 만족도 관리에 필수적이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">(초기 도입 총 투자 합계는 8번 "도입 시 준비사항"의 체크리스트를 참조하라.)</p>
    `,
  },
  {
    id: "s1-1-3-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터의 시술 난이도는 낮음에서 중간이다. 진피층에 균일하게 주입하는 테크닉이 핵심이며, 보톡스·필러에서 축적한 주사 핸들링 경험이 그대로 이전된다.</p>
      <p class="text-[#333] leading-relaxed mb-4">물광주사 계열은 수동 주입 또는 물광기(메조건)를 활용한다. 물광기 사용 시 균일한 주입이 쉬워지지만, 장비 투자(200만~500만 원)가 추가된다. 초기에는 수동 주입으로 시작하고, 수요가 확인되면 장비를 도입하는 단계적 접근이 현실적이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">핵심 주의사항은 주입 깊이다. 너무 얕으면 표면에 구슬 같은 돌출이 생기고, 너무 깊으면 효과가 떨어진다. 진피층 정중앙을 일관되게 유지하는 것이 시술의 품질을 결정한다.</p>
    `,
  },
  {
    id: "s1-1-3-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터의 수익 구조는 보톡스·필러와 결이 다르다. 단건 마진도 높지만, 프로그램 기반(3회 1코스)이라는 구조 자체가 수익의 예측 가능성을 높인다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 물광주사 1회 :</span> 판매가 약 100,000~150,000원. 재료비 약 30,000~50,000원. 건당 마진 약 70,000~100,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리쥬란 1회(2cc) :</span> 판매가 약 300,000원. 건당 마진 약 150,000~200,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 쥬베룩 1회(2cc) :</span> 판매가 약 264,000원. 건당 마진 약 130,000~170,000원.</p>
      <p class="text-[#333] leading-relaxed mb-4">3회 1코스 패키지로 운영하면, 1명의 환자가 3~4주 간격으로 3회 내원한다. 리쥬란 기준 1코스 매출 약 900,000원, 마진 약 450,000~600,000원이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">월 5명의 프로그램 환자만 확보해도 400만 원 이상 매출이 발생한다. 소수 환자로도 의미 있는 매출 구조가 만들어지는 것이다. 보톡스(다수 환자, 소액 마진)와 정반대의 구조다.</p>
    `,
  },
  {
    id: "s1-1-3-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 스킨부스터 제품 1~2개 (필수) :</span> 물광주사 계열 + 리쥬란 또는 쥬베룩 중 1종. 초기 재고 비용 약 55,000~110,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 30~32G 바늘 (필수) :</span> 미세 주입용.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 물광기/메조건 (선택) :</span> 200만~500만 원. 초기에는 수동 주입으로 시작 가능.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 표면마취 크림 (권장) :</span> EMLA 크림. 스킨부스터는 다점 주입이므로 마취가 환자 만족도에 영향을 준다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 동의서 양식 (필수) :</span> 0원 (메디스테이션 제공).</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">합계 : 약 55,000~110,000원 (물광기 제외). 물광기 포함 시 200만~500만 원 추가.</p>
    `,
  },
  {
    id: "s1-1-3-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터는 보톡스·필러 대비 사고 리스크가 낮은 편이다. 진피층 주입이므로 혈관폐색 위험이 필러보다 현저히 낮다. 다만, 다음 부작용에 대한 인지와 대응은 필수다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 멍·부종 (흔함) :</span> 다점 주입 특성상 미세 멍이 보톡스보다 많을 수 있다. 2~5일 내 소실. 시술 전 반드시 고지.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 구슬 형태 돌출 (가끔) :</span> 주입이 너무 얕을 때 발생. 대부분 1~2주 내 자연 흡수. 심할 경우 마사지로 분산.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 감염 (드묾) :</span> 다점 주입이므로 무균 조작이 중요. 발적·열감이 지속되면 항생제 투여.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 쥬베룩 특이 반응 — 지연성 결절 (드묾) :</span> PDLLA 성분 특성상 시술 후 수주~수개월 뒤 결절이 나타날 수 있다. 환자에게 사전 고지 필수.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 전 필수 고지 사항 (동의서 포함)</h4>
      <p class="text-[#333] leading-relaxed mb-4">물광주사·리쥬란은 시술 직후부터 피부 보습감을 느낄 수 있으나, 탄력 개선 등 본격적 효과는 2~3회 시술 후 나타난다. 쥬베룩은 효과 발현이 4~6주 후로 느리다. 3회 1코스를 완료해야 의미 있는 결과를 기대할 수 있다는 점을 반드시 안내하라. 시술 당일 음주와 사우나는 금지. 다점 주입으로 인한 미세 멍과 붉은 자국은 정상 반응이며 수일 내 소실된다.</p>
    `,
  },
  {
    id: "s1-1-3-11",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">보톡스 없이 필러를 도입하지 않듯, 보톡스와 필러 없이 스킨부스터를 도입하지 않는다. 이 순서는 원칙이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">스킨부스터는 치과의 해부학적 고유 영역이 아니다. 이 점을 처음부터 인정했다. 하지만 보톡스와 필러로 미용 시술의 기반을 다진 치과에게, 스킨부스터는 세 번째 수익의 축이 된다. 프로그램 기반 구조(3회 1코스)가 만들어내는 예측 가능한 매출, 소수 환자로도 의미 있는 마진, 그리고 환자가 제품명을 지정해서 찾아오는 지명 구매 구조 — 이 세 가지가 스킨부스터를 치과의 미용시술 라인업에서 빼놓을 수 없는 이유다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">월 5명. 그것이면 충분하다. 그 5명을 만드는 것은 외부 마케팅이 아니라, 이미 보톡스와 필러로 신뢰를 쌓은 기존 환자에게 "피부도 함께 관리해 보시겠어요?"라는 한마디다.</p>
    `,
  },

  // ─── 1-4. 실리프팅 ───
  {
    id: "s1-1-4-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">4장. 실리프팅 (Thread Lifting) — 지붕은 기둥을 세운 뒤에 올린다</h2>
    `,
  },
  {
    id: "s1-1-4-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 6개 분야 중 시술 난이도가 가장 높은 시술이라는 것을 먼저 분명히 해두어야 한다. 치과의 고유 영역이 아닌 데다, 시술 결과의 편차가 크고, 환자가 기대하는 수준과 실제 결과 사이의 간극을 좁히는 일이 쉽지 않기 때문이다. 미용시술 1차 런칭의 메인으로 올려놓기에도 적합하지 않다. 보톡스가 문을 열어 미용 시술의 존재감을 만들고, 필러가 기둥을 세워 시술 역량의 신뢰를 확보하고, 스킨부스터로 재방문의 층을 쌓은 뒤에야 비로소 실리프팅이라는 지붕을 올릴 수 있다. 이 순서를 건너뛰면 구조가 무너진다.</p>
      <p class="text-[#333] leading-relaxed mb-4">그럼에도 이 챕터에서 실리프팅을 비중 있게 다루는 이유는 명확하다. 1회 시술 객단가가 수십만 원에서 수백만 원에 달하는, 미용치과 라인업 전체를 통틀어 가장 높은 매출 단가를 만들어내는 시술이기 때문이다. 게다가 '리프팅까지 하는 치과'라는 프리미엄 이미지를 구축할 수 있는 유일한 카드이기도 하다. 리스크가 높은 만큼 리턴도 압도적이다. 따라서 관건은 "할 것인가 말 것인가"라는 이분법이 아니라, "언제, 어떤 조건이 갖춰진 상태에서 시작할 것인가"라는 타이밍의 문제다.</p>
    `,
  },
  {
    id: "s1-1-4-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 생체흡수성 실(Thread)을 피부 아래에 삽입하여 처진 조직을 물리적으로 끌어올리는 시술이다. 이와 동시에 실 주변으로 콜라겐 재생을 유도하여, 시간이 지나면서 피부 탄력까지 개선되는 이중 효과를 노린다. 수술 없이 안면 리프팅 효과를 얻을 수 있다는 점에서 환자 수요는 꾸준히 높지만, 여기서 반드시 짚고 넘어가야 할 현실이 하나 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4">환자가 기대하는 것은 안면거상술(페이스리프트) 수준의 극적인 변화다. 그러나 실리프팅이 실제로 줄 수 있는 것은 자연스러운 개선이다. 이 간극은 생각보다 깊어서, 만약 시술 전에 이 차이를 충분히 메우지 못하면 시술 결과가 아무리 훌륭해도 불만족으로 돌아오게 된다. 결국 기대치 관리야말로 이 시술의 성패를 가르는 진짜 기술이라는 뜻이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 부위와 실 개수에 따라 30분에서 1시간이 소요된다. 보톡스 5분, 필러 15분에 비하면 체어타임이 상당히 긴 편인데, 이것은 일반 진료 사이에 끼워 넣기가 어렵다는 뜻이기도 하다. 따라서 예약 시스템에 별도의 시술 블록을 확보해 두는 것이 현실적이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 국소마취가 필수다. 치과의사에게 마취는 매일 하는 일이지만, 실리프팅의 마취는 구강 내 마취와 성격이 다르다. 삽입 경로 전체를 따라 침윤마취를 해야 하며, 마취 후에도 삽입 과정에서 당김과 이물감이 동반되기 때문이다. 그러므로 "마취했는데 왜 느낌이 있냐"는 환자의 질문에 미리 대비해 두어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 부종이 3일에서 7일 정도 지속되며, 멍이 동반될 수 있다. 또한 시술 후 2주간은 입을 크게 벌리거나 과도한 표정을 짓는 것을 자제해야 한다. 치과 시술 후 "바로 일상으로 복귀"하는 것에 익숙한 환자에게 이 회복기간은 의외로 큰 허들이 되므로, 상담 단계에서 반드시 사전 고지가 이루어져야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 시술 직후 즉각적인 리프팅 효과가 나타나지만, 이것이 최종 결과는 아니다. 부종이 빠지면서 시술 후 2~4주간은 효과가 줄어드는 것처럼 보이는 구간이 존재하는데, 바로 이 시기에 환자의 불안이 폭증한다. 이후 1~3개월에 걸쳐 콜라겐 재생이 진행되면서 점진적으로 개선이 이어지므로, 시술 전에 이 타임라인을 그림으로 보여주며 설명하는 것을 강하게 권한다. 말로만 전달하면 환자는 반드시 잊는다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부 및 수유부, 시술 부위의 활동성 감염, 자가면역질환, 켈로이드 체질, 혈액응고장애가 있는 환자에게는 시술하지 않는다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실의 유형 — 무엇을 피부 아래에 넣는가</h4>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅에 사용되는 실은 크게 두 종류로 나뉘며, 이 구분을 이해하지 못하면 시술 설계 자체가 불가능하다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 모노실 vs 코그실 비교]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">구분</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">모노실 (Mono Thread)</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">코그실 (Cog Thread)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">구조</td>
              <td class="border border-[#eee] px-3 py-2">돌기 없는 매끈한 실</td>
              <td class="border border-[#eee] px-3 py-2">표면에 돌기(코그/바브)가 있음</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">주 목적</td>
              <td class="border border-[#eee] px-3 py-2">콜라겐 자극을 통한 피부 탄력 개선</td>
              <td class="border border-[#eee] px-3 py-2">처진 조직을 물리적으로 끌어올림</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">리프팅 효과</td>
              <td class="border border-[#eee] px-3 py-2">미미함</td>
              <td class="border border-[#eee] px-3 py-2">명확함</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">시술 난이도</td>
              <td class="border border-[#eee] px-3 py-2">낮음</td>
              <td class="border border-[#eee] px-3 py-2">높음</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">합병증 위험</td>
              <td class="border border-[#eee] px-3 py-2">낮음</td>
              <td class="border border-[#eee] px-3 py-2">중간에서 높음</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">치과 도입 단계</td>
              <td class="border border-[#eee] px-3 py-2">1단계 — 훈련용으로 시작</td>
              <td class="border border-[#eee] px-3 py-2">2단계 이후 — 경험 축적 후 진입</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">모노실은 엄밀히 말하면 리프팅이라기보다 피부 자극 시술에 가깝다. 그렇기 때문에 모노실의 진짜 가치는 시술 효과 자체보다, 실을 삽입하는 감각과 해부학적 경로에 대한 체감, 그리고 텐션이 피부에 어떤 영향을 미치는지를 몸으로 익히는 훈련 도구로서의 역할에 있다. 본격적인 리프팅은 코그실부터 시작된다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실 재질별 분류 — 얼마나 오래 가는가</h4>
      <p class="text-[#333] leading-relaxed mb-4">실의 재질에 따라 체내 분해 속도와 효과 지속 기간이 크게 달라진다. 다만 여기서 한 가지 꼭 짚고 넘어가야 할 점이 있다. "오래가는 실이 곧 좋은 실"이라는 단순 논리에 빠져서는 안 된다는 것이다. 지속 기간이 긴 실은 합병증이 발생했을 때에도 그만큼 오래 체내에 남아 있게 된다. 그러므로 초기 도입 시에는 문제가 생기더라도 6~9개월이면 자연 분해되는 PDO로 시작하는 것이 가장 안전한 선택이다. PLLA와 PCL은 코그실 경험이 충분히 쌓인 뒤에 올려놓을 프리미엄 라인업으로 남겨두는 것이 현명하다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 실 재질별 특성 비교]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">재질</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">대표 제품</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">분해 시작</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">효과 지속</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">가격대</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">특징</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">PDO</td>
              <td class="border border-[#eee] px-3 py-2">민트실 (360도 코그)</td>
              <td class="border border-[#eee] px-3 py-2">3개월</td>
              <td class="border border-[#eee] px-3 py-2">6~9개월</td>
              <td class="border border-[#eee] px-3 py-2">가장 저렴</td>
              <td class="border border-[#eee] px-3 py-2">가장 보편적이며 초기 도입에 적합</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">PLLA</td>
              <td class="border border-[#eee] px-3 py-2">실루엣소프트 (콘 구조)</td>
              <td class="border border-[#eee] px-3 py-2">6개월</td>
              <td class="border border-[#eee] px-3 py-2">1~2년</td>
              <td class="border border-[#eee] px-3 py-2">중간</td>
              <td class="border border-[#eee] px-3 py-2">콜라겐 자극이 우수한 수입 제품</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">PCL</td>
              <td class="border border-[#eee] px-3 py-2">미스코</td>
              <td class="border border-[#eee] px-3 py-2">12개월 이상</td>
              <td class="border border-[#eee] px-3 py-2">2~3년</td>
              <td class="border border-[#eee] px-3 py-2">가장 고가</td>
              <td class="border border-[#eee] px-3 py-2">지속 기간이 가장 길다</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  {
    id: "s1-1-4-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅에서 치과의 해부학적 우위가 보톡스만큼 직접적인 것은 아니다. 그러나 무시할 수 없는 연결점이 분명히 존재한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅의 주요 시술 부위인 하안면부, 즉 턱선과 볼처짐, 입꼬리 영역은 치과의사가 일상적으로 다루는 해부학적 영역과 상당 부분 겹친다. 안면신경(VII)의 분지가 어디를 지나는지, 이하선관(Parotid duct)이 어디에 위치하는지, 안면동맥이 어떤 경로로 주행하는지 — 이 구조물들은 실의 삽입 경로를 설계할 때 반드시 피해야 할 위험 요소인데, 치과의사는 이것들의 위치를 학부 시절부터 머릿속에 새기고 훈련해 왔다. 다시 말해, 다른 진료과 출신 시술자와는 출발선 자체가 다르다는 뜻이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">특히 하안면 리프팅은 치과의 기존 미용시술 라인업과 시너지가 매우 강하다. 보톡스로 사각턱의 볼륨을 줄이고, 필러로 턱끝을 세워 윤곽을 잡고, 실리프팅으로 늘어진 턱선을 당겨 올리는 하안면 토탈 솔루션은 환자가 여러 의원을 전전하지 않고 한 곳에서 모든 것을 완결하는 원스톱 패키지다. 이런 동선을 구조적으로 제공할 수 있는 곳은 치과밖에 없으며, 이것이 곧 객단가를 수백만 원 단위로 끌어올리는 핵심 전략이기도 하다.</p>
    `,
  },
  {
    id: "s1-1-4-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅의 도입 전략은 보톡스나 필러와 근본적으로 다르다. 보톡스와 필러에서의 질문이 "언제 시작할 것인가"였다면, 실리프팅에서 우리가 던져야 할 질문은 "시작할 자격이 갖춰졌는가"다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">도입 전제 조건 — 하나라도 빠지면 시작해서는 안 된다</h4>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째,</span> 보톡스와 필러, 스킨부스터가 모두 안정적으로 운영되고 있어야 한다. 이 세 가지가 안착되지 않은 상태에서 실리프팅을 도입하는 것은 기초 공사 없이 지붕을 올리는 것과 같다. 기둥 없는 지붕은 반드시 무너지게 되어 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째,</span> 카데바(해부 실습체) 실습을 포함한 전문 교육을 반드시 이수해야 한다. 온라인 강의나 이론 교육만으로 실리프팅을 시작하겠다는 것은 매우 위험한 판단이다. 실제 해부 구조에서 실을 삽입하고 텐션을 조절하는 경험은 그 어떤 영상이나 교재로도 대체할 수 없기 때문이다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">셋째,</span> 모노실로 최소 50케이스 이상의 임상 경험을 축적해야 한다. 이것은 숫자를 채우기 위한 형식적 조건이 아니라, 실이 피부 아래에서 어떻게 움직이는지, 텐션이 피부에 어떤 반응을 일으키는지를 손끝으로 기억하게 만드는 필수 과정이다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">넷째,</span> 실리프팅은 대표원장이 직접 시술해야 한다. 스탭이나 다른 시술자에게 위임하는 것은 권하지 않는다. 합병증이 발생했을 때 "누가 시술했는가"가 법적 책임의 핵심 쟁점이 되기 때문이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">단계적 접근 — 절대 건너뛰어서는 안 된다</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 실리프팅 도입 3단계 로드맵]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">단계</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">시술 내용</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">전제 조건</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">핵심 목표</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">1단계</td>
              <td class="border border-[#eee] px-3 py-2">모노실</td>
              <td class="border border-[#eee] px-3 py-2">기본 3개 시술 안정 + 카데바 교육</td>
              <td class="border border-[#eee] px-3 py-2">삽입 감각 체화, 해부학적 경로 숙달</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">2단계</td>
              <td class="border border-[#eee] px-3 py-2">코그실 하안면 (턱선, 볼처짐)</td>
              <td class="border border-[#eee] px-3 py-2">모노실 50케이스 이상</td>
              <td class="border border-[#eee] px-3 py-2">본격 리프팅, 텐션 조절 숙달</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">3단계</td>
              <td class="border border-[#eee] px-3 py-2">코그실 중안면 (광대, 볼)</td>
              <td class="border border-[#eee] px-3 py-2">2단계 안정 + 별도 심화 교육</td>
              <td class="border border-[#eee] px-3 py-2">고난도 시술, 이하선관·안면신경 회피</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">코 필러에서도 같은 원칙을 강조했지만, 충분한 교육과 경험 없이 중안면 실리프팅에 손을 대는 것은 리스크를 스스로 껴안는 행위다. 만약 2단계가 안정적으로 돌아가고 있다면, 거기서 멈추는 것 또한 훌륭한 전략이라는 점을 기억하자. 우리가 모든 시술을 전부 해야 하는 것은 아니다.</p>
    `,
  },
  {
    id: "s1-1-4-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 보톡스나 필러와 달리 가격 편차가 매우 크다. 실의 재질과 개수, 브랜드, 시술 범위에 따라 수십만 원에서 수백만 원까지 차이가 나는데, 이 넓은 편차 자체가 오히려 가격 설계의 기회이기도 하다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시장 가격 구간</h4>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ 모노실 (10~20본) : 200,000~400,000원대가 형성되어 있으며, 리프팅이라기보다는 피부 관리에 가까운 포지션이다. [건주확인] 시장 중간값 정밀 데이터 필요.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ 코그실 하안면 (양측 6~10본) : 500,000~1,500,000원으로, 본격적인 리프팅 시술의 가격대가 형성되어 있다. [건주확인] 재질별·제품별 시장 가격대 세분화 필요.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ 코그실 풀페이스 : 1,000,000~3,000,000원 이상으로, 프리미엄 클리닉의 시그니처 시술 영역에 해당한다. [건주확인] 프리미엄 시장 가격대 확인 필요.</p>
      <p class="text-[#333] leading-relaxed mb-4">치과의 권장 포지셔닝은 보톡스와 필러에서와 같은 원칙을 따른다. 일반 피부과 상단에서 프리미엄 하단 사이에 자리를 잡는 것이다. "치과에서 리프팅을 한다"는 사실 자체가 이미 프리미엄 포지셔닝이므로, 저가 경쟁에 말려들 이유가 구조적으로 존재하지 않는다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">가격 설계 — 실리프팅에서만 작용하는 특수 변수</h4>
      <p class="text-[#333] leading-relaxed mb-4">통합 가격 설계 원칙은 STEP 1 2장 "수가체계 설계"에서 다루고 있으므로, 여기서는 실리프팅이라는 시술의 고유한 특성에서만 비롯되는 변수들을 짚는다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째,</span> 실 개수별 단가가 아니라 부위별 패키지로 가격을 설계해야 한다. 만약 가격을 "실 1본당 얼마"로 설정해 버리면 환자는 본수를 줄이려 할 것이고, 본수가 줄어들면 시술 결과가 나빠지는 악순환에 빠진다. "하안면 리프팅 1회" 같은 부위별 패키지로 가격을 묶고, 필요한 실의 개수는 원장이 전문적으로 판단하는 구조가 올바른 설계다. 가격 결정의 주도권은 환자가 아니라 시술자가 쥐어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째,</span> 재시술 할인 정책을 미리 설계해 두어야 한다. 실리프팅의 효과는 영구적이지 않으므로, PDO 기준 6~9개월이 지나면 재시술 수요가 자연스럽게 발생한다. 이때 첫 시술 대비 10~15% 할인된 유지 시술 가격을 미리 안내해 두면, 환자가 재방문 시점을 자연스럽게 인식하게 된다. "유지 프로그램"이라는 이름을 붙여서 체계적으로 관리하는 것을 권한다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">셋째,</span> 하안면 토탈 패키지를 적극적으로 설계할 필요가 있다. 보톡스(사각턱 축소)와 필러(턱끝 볼륨), 실리프팅(턱선 리프팅)을 하나의 패키지로 묶으면 객단가를 200만 원 이상으로 끌어올릴 수 있다. 개별 시술 합산 대비 8~12% 정도의 할인이면 환자에게 충분한 유인이 되며, 이 구조는 치과에서만 가능한 원스톱 하안면 솔루션이라는 독보적인 포지셔닝까지 함께 잡아준다.</p>
    `,
  },
  {
    id: "s1-1-4-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅의 제품 선택은 곧 단계 선택이다. "어떤 실이 좋은가"라는 질문보다 "지금 내가 어떤 단계에 있는가"라는 질문이 먼저 와야 하며, 단계에 따라 답은 자연스럽게 정해진다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 도입 추천 제품</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 모노실 단계 — PDO 모노실 :</span> 가장 보편적이고 안전한 선택이다. 본당 단가가 낮으므로 학습 단계에서 재료비 부담이 적으며, 실 삽입의 감각을 익히기 위한 훈련 도구로서의 역할에 충실하다. 이 단계에서 굳이 비싼 실을 사용할 이유는 없다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 코그실 단계 — PDO 코그실 (민트실 360도 코그 등) :</span> 초기 코그실 도입에 가장 적합한 제품군이다. 가격 대비 효과가 검증되어 있고, 국내에서 가장 많은 임상 데이터가 축적되어 있다. 낯선 시술을 처음 시작할 때 가장 많은 시술자가 써본 제품이 곧 가장 안전한 제품이라는 점을 기억해 두자.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 프리미엄 확장 — PLLA (실루엣소프트) 또는 PCL (미스코) :</span> 코그실 시술이 안정된 뒤에 올려놓는 프리미엄 라인업이다. "더 오래가는 실"이라는 셀링 포인트가 분명히 있지만, 경험이 충분하지 않은 상태에서 지속 기간만 보고 선택하면 합병증 발생 시 관리가 어려워질 수 있다. 순서를 지키라는 원칙은 여기서도 변함없이 유효하다.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">[건주확인] 제품별 공급가(본당 단가) 데이터 필요.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필요 장비/도구</h4>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 보톡스나 필러와 달리 별도의 고가 장비를 구매할 필요가 거의 없다. 기존 치과 인프라를 그대로 활용할 수 있다는 점이 투자 측면에서의 분명한 장점이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 실리프팅 전용 캐뉼라 및 니들 :</span> 제품을 구매하면 대부분 동봉되어 있으므로, 별도로 구매해야 하는 경우는 거의 없다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 국소마취제 :</span> 리도카인과 에피네프린 조합이 기본이며, 치과에 이미 구비되어 있다. 따라서 추가 비용은 사실상 0원이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 소독 세트 :</span> 실리프팅은 피부를 관통하는 침습 시술이므로, 보톡스의 미세 주사와는 차원이 다르다. 무균 조작 원칙을 철저히 지켜야 하며, 일회용 드레이프와 소독 포셉 정도는 별도로 준비해 두어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 실리프팅 전용 동의서 :</span> 보톡스나 필러의 동의서와 같은 서식을 사용해서는 안 된다. 딤플(피부 함몰), 비대칭, 실 돌출, 감염 등 실리프팅 고유의 합병증을 구체적으로 명시한 전용 양식이 필요하며, 메디스테이션에서 제공하고 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 전후 사진 촬영 장비 :</span> 실리프팅은 미용시술 전체를 통틀어 환자 기대치 관련 분쟁이 가장 잦은 시술이다. 만약 동일한 조명과 각도, 거리 조건에서 촬영한 전후 비교 사진이 없다면, "효과가 없다"는 클레임에 대응할 수 있는 무기가 사실상 없는 것이나 마찬가지다.</p>
    `,
  },
  {
    id: "s1-1-4-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅이 6개 분야 중 도입 난이도가 가장 높다는 점은 거듭 강조해도 부족하지 않다. 보톡스가 "어디에, 얼마나 넣을 것인가"라는 비교적 단순한 판단이었고, 필러가 여기에 "깊이와 방향"이라는 축을 더한 다차원 판단이었다면, 실리프팅은 그 위에 "삽입 경로 설계, 조직 층별 텐션 조절, 실의 고정점과 방향 벡터"까지 얹어진다. 다시 말해, 3차원 공간 안에서 구조적 판단을 내려야 하는 시술인 것이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">교육 경로 — 지름길은 없다</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1단계 — 이론 교육 :</span> 안면 해부학(SMAS층, 안면신경 분지, 이하선관)과 실 재질별 특성, 삽입 테크닉에 대한 이론적 기초를 다진다. 이론 없이 실습에 들어가면 "왜 이 경로로 넣어야 하는지"를 이해하지 못한 채 손만 움직이는 상황이 벌어진다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2단계 — 카데바 실습 :</span> 반드시 거쳐야 한다. 한 번 더 강조한다. 반드시 거쳐야 한다. 실제 해부 구조에서 실을 삽입하고 텐션을 조절하는 경험은 마네킹이나 영상 교육으로 절대 대체할 수 없다. 만약 비용이 부담된다면 이렇게 생각해 보라. 이 비용을 아끼는 순간 환자의 안전에 구멍이 뚫리고, 그 구멍을 메우는 데 드는 비용은 교육비와 비교조차 할 수 없을 만큼 크다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 3단계 — 모노실 임상 50케이스 이상 :</span> 실전의 시작이다. 모노실은 합병증 위험이 낮으므로, 비교적 안전한 환경에서 경험을 차곡차곡 쌓는 데 집중해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 4단계 — 코그실 임상 :</span> 처음 코그실을 시술할 때는 전문가의 감독 아래에서 진행하는 것을 강하게 권한다. 혼자서 영상만 보고 첫 코그실 시술에 나서는 것은 환자에게도, 원장 자신에게도 무책임한 결과를 초래할 수 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 시술 시 핵심 주의사항</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 삽입 깊이 :</span> 너무 얕으면 실이 피부 표면에 비치거나 돌출되고, 반대로 너무 깊으면 리프팅 효과가 사라진다. SMAS층 바로 위, 피하지방층 하부가 적정 깊이인데, 이 감각은 모노실 50케이스를 거치면서 자연스럽게 체화되는 것이므로 단계를 건너뛰어서는 안 된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 텐션 조절 :</span> 실리프팅에서 가장 까다로운 판단이 바로 이것이다. 텐션이 과도하면 딤플(피부 함몰)이 생기고 표정이 부자연스러워지며, 텐션이 부족하면 리프팅 효과 자체가 미미해진다. "당기면 당길수록 좋을 것"이라는 생각은 초보자가 빠지는 가장 흔한 함정이므로, 보수적인 수준에서 시작하는 것이 옳다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 좌우 대칭 :</span> 환자 만족도를 결정짓는 가장 중요한 변수다. 실의 개수와 삽입 경로, 텐션을 양측 동일하게 맞추지 못하면 비대칭이 발생하게 된다. 따라서 시술 전에 좌우 안면 비대칭 여부를 반드시 사진으로 기록해 두어야 한다. 그렇지 않으면 원래부터 존재하던 비대칭을 시술 탓으로 돌리는 상황이 생길 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 출구점 관리 :</span> 실 삽입 후 출구점에서 실 끝이 피부 밖으로 나와 있지 않은지 꼼꼼하게 확인해야 한다. 실이 노출된 채로 남아 있으면 그 자체가 감염의 경로가 되기 때문이다.</p>
    `,
  },
  {
    id: "s1-1-4-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 6개 분야 중 건당 객단가가 압도적으로 가장 높은 시술이다. 보톡스의 20배, 필러의 10배에 달하는 마진이 가능하다는 것은 사실이다. 그러나 이 숫자만 보고 눈이 멀어서는 안 되는데, 높은 마진의 이면에는 그에 상응하는 높은 리스크가 반드시 따라붙기 때문이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">수익 시뮬레이션 — 코그실 하안면 기준</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 실리프팅 수익 시뮬레이션]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">항목</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">수치</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">판매가 (1회)</td>
              <td class="border border-[#eee] px-3 py-2">1,000,000~1,500,000원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">재료비 (실 + 소모품)</td>
              <td class="border border-[#eee] px-3 py-2">100,000~200,000원</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">건당 마진</td>
              <td class="border border-[#eee] px-3 py-2">800,000~1,300,000원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">월 5건 시술 시 매출</td>
              <td class="border border-[#eee] px-3 py-2">약 545만 원</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">월 5건 시술 시 마진</td>
              <td class="border border-[#eee] px-3 py-2">약 450만 원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">[건주확인] 재료비 범위 정밀 확인 필요.</p>
      <p class="text-[#333] leading-relaxed mb-4">숫자만 놓고 보면 대단히 매력적이다. 월 5건, 하루에 한 건도 안 되는 시술로 450만 원의 마진을 만들 수 있다. 보톡스 프리미엄형으로 같은 마진을 달성하려면 월 77건 이상이 필요하다는 것과 비교하면 효율성의 차이가 극명하다.</p>
      <p class="text-[#333] leading-relaxed mb-4">그러나 현실은 이 숫자의 이면에 있다. 이 수익은 "모든 것이 잘 풀렸을 때"의 시나리오이며, 결과 편차가 크고 기대치 관리가 어려운 시술인 만큼, 불만족 환자가 한 명이라도 발생하면 상황이 급변한다. 재시술 비용과 환불, 온라인 평판 훼손이라는 눈에 보이지 않는 비용이 마진을 순식간에 잠식하게 되며, 그렇게 된다면 실리프팅 단 1건의 환불이 보톡스 20건의 마진을 한 번에 날려버릴 수도 있다. 우리는 이 비대칭 리스크를 항상 머릿속에 두어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">그리고 한 가지 더 기억해야 할 것이 있다. 실리프팅의 진짜 수익은 건당 마진 자체에 있는 것이 아니다. '리프팅까지 하는 치과'라는 브랜드가 만들어내는 전체 미용시술 라인업의 객단가 상승에 있다. 실리프팅 상담을 위해 내원한 환자가 보톡스와 필러, 스킨부스터까지 함께 시술받고 돌아가는 구조. 그것이야말로 실리프팅이 치과에 가져다주는 진짜 가치다.</p>
    `,
  },
  {
    id: "s1-1-4-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅의 초기 투자에서 가장 큰 비중을 차지하는 것은 재료비가 아니라 교육비다. 실 1세트의 가격보다 카데바 실습비와 교육 수강료, 그리고 모노실 50케이스를 채우는 동안 투입되는 시간과 노력이야말로 진짜 투자 비용이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ PDO 모노실 (학습용) : 필수. [건주확인] 본당 단가 및 1세트 비용 확인 필요.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ PDO 코그실 (2단계 진입 후) : 필수. [건주확인] 본당 단가 및 1세트 비용 확인 필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 국소마취제 :</span> 필수. 기존 치과 재고를 활용하면 추가 비용은 0원이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 소독 세트 :</span> 필수. 일회용 드레이프와 소독 포셉을 포함하여 무균 조작 원칙을 철저히 준수한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 실리프팅 전용 동의서 :</span> 필수. 메디스테이션 제공으로 비용은 0원이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 전후 사진 촬영 장비 :</span> 필수. 동일 조건 촬영 원칙을 반드시 지켜야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 카데바 실습 교육비 :</span> 필수. 이것이 체크리스트에서 가장 큰 투자 항목이다.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">재료비만 따지면 합계는 약 35만~90만 원 수준이다. [건주확인] 제품 확정 후 정밀 산출 필요. 그러나 진짜 투자는 재료비에 있지 않다. 만약 교육비를 아끼려는 유혹에 빠진다면, 그 대가로 치르게 되는 것은 환자 안전이라는 가장 비싼 값이 될 수 있다.</p>
    `,
  },
  {
    id: "s1-1-4-11",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 6개 분야 중 합병증 관리가 가장 까다로운 시술이다. 이 점을 구체적으로 이해하기 위해 다른 시술과 비교해 보자. 보톡스에서 발생할 수 있는 안검하수는 시간이 지나면 저절로 풀리고, 필러의 혈관폐색은 히알루로니다제를 투여하면 즉각적으로 대응할 수 있다. 그러나 실리프팅의 합병증은 이와 근본적으로 성격이 다르다. "기다리면 풀린다"도 아니고, "약으로 녹인다"도 아닌 경우가 있어서, 물리적으로 실을 제거해야 하는 상황까지 갈 수 있다. 우리는 이 무게감을 가볍게 여겨서는 안 된다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주요 부작용</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 딤플 — 피부 함몰 (가끔 발생) :</span> 텐션이 과도하거나 삽입 깊이가 불균일할 때 발생한다. 대부분 2~4주 내에 자연적으로 개선되지만, 심한 경우에는 실 제거가 불가피하다. 환자에게 "일시적인 현상"이라고 안심시키되, 반드시 2주 후 재확인 일정을 잡아 두어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 비대칭 (가끔 발생) :</span> 좌우 텐션 차이에서 비롯되는 문제다. 시술 직후에 판단하면 안 되는데, 부종이 빠진 2주 후가 진짜 결과를 확인할 수 있는 시점이기 때문이다. 보정 시술이 필요할 수 있으므로, 보정의 비용과 조건은 시술 전에 미리 명확히 해두는 것이 현명하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 실 돌출 (드물게 발생) :</span> 삽입 깊이가 너무 얕았을 때 나타나는 현상이다. 돌출된 부분만 절단 제거하면 해결되므로 의학적으로 큰 문제는 아니지만, 환자 입장에서는 피부 밑에서 실이 튀어나오는 경험이 상당히 공포스럽게 느껴진다. 따라서 즉각적으로 대응하여 신뢰를 지키는 것이 중요하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 감염 (드물게 발생) :</span> 발적과 열감이 지속되면 항생제를 투여한다. 만약 48시간 이내에 호전되지 않으면 실 제거를 검토해야 하는 단계로 넘어간다. 무균 조작을 철저히 하면 대부분 예방 가능한 합병증이지만, 발생했을 때의 대응 경로는 반드시 머릿속에 갖추고 있어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 기대치 불일치 (가장 흔함) :</span> 엄밀히 말하면 의학적 합병증이 아니라 커뮤니케이션의 실패에서 오는 문제다. 그러나 실리프팅에서 가장 빈번하게 발생하는 '합병증'이라고 할 수 있다. 시술 전에 "자연스러운 개선이지 극적인 변화가 아닙니다"라는 말을 세 번 반복해도 부족하지 않다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 전 필수 고지 사항 (동의서 포함)</h4>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 효과는 시술 직후 나타나지만, 최종 결과가 정착되기까지는 1~3개월이 소요된다. 시술 후 2~4주 사이에 부종이 빠지면서 효과가 줄어드는 것처럼 보이는 시기가 있으나, 이후 콜라겐 재생이 진행되면서 점진적인 개선이 이어진다는 점을 환자에게 충분히 설명해야 한다. 효과의 지속기간은 실 재질에 따라 6개월에서 최대 3년까지이며, 반영구적이지 않다는 사실과 유지를 위해서는 재시술이 필요하다는 점도 명확히 전달해야 한다. 또한 시술 후 2주간은 입을 크게 벌리기, 과도한 표정, 안면 마사지를 자제하도록 안내한다. 딤플(피부 함몰), 비대칭, 실 돌출, 감염의 가능성을 동의서에 구체적으로 명시하고, 환자가 각 항목을 이해했음을 반드시 서명으로 확인받아야 한다.</p>
    `,
  },
  {
    id: "s1-1-4-12",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 미용치과의 지붕이다. 건당 마진이 보톡스의 20배, 필러의 10배에 달하며, '리프팅까지 하는 치과'라는 프리미엄 이미지를 구축할 수 있는 유일한 시술이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">하지만 이 지붕은 기둥 없이 올릴 수 없다. 보톡스와 필러의 경험을 건너뛰고 실리프팅부터 도입한 치과에서 어떤 일이 벌어지는지는 이미 현장에서 충분히 증명되었다. 시술 결과 편차에 대한 환자 불만이 하나둘 쌓이기 시작하고, 재시술과 환불이 반복되면서, 급기야 미용시술 자체에 대한 신뢰가 무너져 보톡스마저 중단하게 되는 악순환에 빠진 사례들을 우리는 현장에서 직접 목격해 왔다. 반면, 보톡스에서 필러, 스킨부스터를 순서대로 안착시킨 뒤에 실리프팅을 추가한 치과에서는 기존 미용 환자 중 업셀 전환이 자연스럽게 일어난다. 같은 시술을 도입했지만 결과는 완전히 다르다. 차이를 만든 것은 기술이 아니라 순서였다.</p>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅을 도입할 것인가. 그것은 원장의 판단이다. 다만 이것만은 분명히 해둔다. 충분한 교육(카데바 실습 포함)과 단계적 경험 축적(모노실 50케이스 이상), 철저한 기대치 관리, 그리고 빈틈없는 기록. 이 네 가지를 갖추지 않은 상태에서 건당 마진의 매력에 이끌려 무작정 뛰어드는 것은, 이 책이 권하는 길이 아니다.</p>
    `,
  },

  // ─── 1-5. 리프팅 장비 ───
  {
    id: "s1-1-5-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">5장. 리프팅 장비 (Lifting Devices) — 감이 아니라 숫자로 판단해야 한다</h2>
    `,
  },
  {
    id: "s1-1-5-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">이 챕터는 이전 챕터들과 근본적으로 성격이 다르다. 보톡스는 25만 원이면 시작할 수 있었고, 필러는 50만 원, 스킨부스터는 11만 원이면 충분했다. 그러나 리프팅 장비는 차원이 다르다. 수천만 원 단위의 선행 투자가 필요하며, 의사결정의 성격 자체가 '시술 역량을 확보할 것인가'에서 '이 투자를 회수할 수 있는가'로 완전히 바뀌는 지점이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">장비는 한 번 도입하면 되돌리기가 어렵다는 점도 반드시 인식해야 한다. 보톡스 1바이알은 사용하지 않더라도 냉장고에 두면 그만이지만, 3,000만 원짜리 장비는 사용하지 않아도 감가상각이 진행되고, 리스 비용이 빠져나가고, 진료실 공간을 차지한다. 그래서 이 챕터의 핵심 메시지는 단순하다. '있으면 좋겠다'는 막연한 감으로 도입해서는 안 된다. 숫자를 먼저 확인해야 한다.</p>
    `,
  },
  {
    id: "s1-1-5-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비는 에너지(초음파 또는 고주파)를 피부 깊숙이 전달하여 콜라겐의 수축과 재생을 유도하는 비침습 또는 최소침습 시술이다. 실리프팅처럼 물리적으로 조직을 끌어올리는 것이 아니라, 열 에너지로 피부 내부를 자극하여 자연스러운 타이트닝 효과를 만들어낸다는 점에서 원리가 완전히 다르다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주요 장비 원리</h4>
      <p class="text-[#333] leading-relaxed mb-4">현재 시장에서 치과가 검토할 만한 리프팅 장비는 크게 두 가지 원리로 나뉜다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ HIFU (고강도 집속 초음파) :</span> 초음파 에너지를 피부의 특정 깊이에 정밀하게 집중시켜 열 응고점을 만드는 방식이다. 슈링크, 리프테라, 울쎄라가 대표적인 장비이며, 피부 표면을 손상시키지 않으면서 깊은 층에 작용한다는 것이 핵심 장점이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ RF (고주파) :</span> 고주파 에너지로 진피층과 피하지방층에 열을 전달하여 콜라겐 리모델링을 유도하는 방식이다. 인모드가 대표적이며, HIFU보다 넓은 범위에 균일한 열을 전달할 수 있다는 특성을 가지고 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 30분에서 1시간 30분까지 소요되며, 장비와 시술 범위에 따라 편차가 크다. 실리프팅과 마찬가지로 일반 진료 사이에 끼워 넣기 어려운 시술이므로, 별도의 시술 블록을 확보해 두는 것이 현실적이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> HIFU는 초음파 에너지가 뼈에 가까운 부위를 지날 때 상당한 통증을 유발할 수 있으며, RF는 시술 부위 전체에 열감이 퍼지는 형태다. 표면마취 또는 국소마취를 선택적으로 적용하게 되는데, 여기서 치과의사의 마취 역량이 다시 한번 경쟁력이 될 수 있다. 피부과에서 표면마취만으로 진행하는 시술을, 치과에서는 국소마취를 병행하여 통증을 대폭 줄일 수 있기 때문이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 대부분 시술 직후 일상 복귀가 가능하다. 부종과 발적이 1~3일 정도 나타날 수 있으나, 실리프팅에 비하면 회복 부담은 현저히 낮다. 이 점은 환자 상담 시 유의미한 셀링 포인트가 된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 시술 직후 약간의 타이트닝 효과가 느껴지지만, 본격적인 개선은 1~3개월에 걸쳐 콜라겐 재생이 진행되면서 점진적으로 나타난다. 따라서 환자에게 "즉각적인 극적 변화"를 기대하지 않도록 사전에 충분히 안내해야 하며, 이 점은 실리프팅과 동일한 기대치 관리의 원칙이 적용된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부 및 수유부, 시술 부위의 금속 임플란트(RF의 경우), 피부 감염, 심박조율기 착용자(RF의 경우)에게는 시술하지 않는다. 특히 치과 환자 중 턱뼈에 임플란트가 있는 경우 RF 장비 사용 시 주의가 필요하므로, 사전 확인을 반드시 거쳐야 한다.</p>
    `,
  },
  {
    id: "s1-1-5-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비에서 치과만의 해부학적 우위는 솔직히 크지 않다. HIFU나 RF 시술 자체는 해부학적 전문성보다 장비 운용 숙련도가 더 중요한 시술이기 때문이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">그러나 구조적 이점은 분명히 존재한다. 첫째, 보톡스와 필러로 이미 형성된 미용 시술 환자 기반이 리프팅 장비의 잠재 고객이 된다. "보톡스 맞으러 왔는데, 피부 타이트닝도 할 수 있다고요?" — 이 한마디가 자연스럽게 나올 수 있는 동선이 이미 깔려 있다는 것이다. 둘째, 보톡스(근육 축소)와 필러(볼륨 보강), 리프팅 장비(피부 타이트닝)를 원스톱으로 제공하는 하안면 패키지는 치과만이 구조적으로 설계할 수 있는 차별화 포인트다. 셋째, 앞서 언급한 마취 역량이다. HIFU의 뼈 근처 통증은 환자 불만의 주요 원인인데, 치과의사는 이 통증을 국소마취로 효과적으로 제어할 수 있다.</p>
    `,
  },
  {
    id: "s1-1-5-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비의 도입은 '시술 전략'이 아니라 '투자 전략'이다. 핵심 질문은 "어떤 장비가 좋은가"가 아니라 "이 투자를 회수할 수 있는가"에 있다. 만약 이 질문에 숫자로 답할 수 없다면, 아직 도입할 때가 아니다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">도입 전제 조건</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스와 필러의 안정 운영 :</span> 미용 환자 기반이 없는 상태에서 장비를 먼저 들여놓으면, 장비는 있는데 시술할 환자가 없는 상황이 벌어진다. 장비가 매출을 만드는 것이 아니라 환자가 매출을 만든다는 당연한 사실을 잊어서는 안 된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 월 최소 환자 수 예측 :</span> 도입 전에 반드시 "이 장비로 월 몇 건의 시술이 현실적으로 가능한가"를 보수적으로 추정해야 한다. 낙관적 추정은 금물이다. 보톡스를 월 50건 이상 시술하는 치과라면 그중 20~30%가 리프팅에 관심을 보일 수 있지만, 보톡스가 월 10건 미만이라면 리프팅 장비 수요 자체가 비현실적이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ ROI 계산 완료 :</span> 장비가, 카트리지(또는 팁) 단가, 시술 단가, 예상 월 건수, 투자 회수 기간. 이 다섯 가지 숫자가 도입 전에 반드시 테이블 위에 올라와 있어야 한다. 숫자 없이 "경쟁 치과도 들여놓았으니까"라는 이유로 도입하는 것은 가장 비싼 실수가 될 수 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과 초기 도입 권장 — 슈링크 유니버스</h4>
      <p class="text-[#333] leading-relaxed mb-4">6개 주요 장비 중 슈링크 유니버스가 가장 현실적인 첫 선택이다. 투자 대비 회수 기간이 가장 짧고, 보톡스 재방문 환자에게 크로스셀이 가장 용이하며, 시술 자체도 단순하기 때문이다. 울쎄라와 인모드는 장비가가 높고 투자 회수 기간이 길어서, 미용 시술이 충분히 안착된 이후에 검토해도 늦지 않는다.</p>
    `,
  },
  {
    id: "s1-1-5-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-4">장비별 투자와 수익 구조를 한눈에 비교할 수 있어야 의사결정이 가능하다. 아래 도표는 치과에서 현실적으로 검토 대상이 되는 주요 장비를 투자 규모와 회수 기간 기준으로 정리한 것이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 주요 리프팅 장비 투자·수익 구조 비교]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">장비</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">원리</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">장비가</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">시술 단가</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">카트리지/팁 비용</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">건당 마진</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">투자 회수 (월 10건)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">슈링크 유니버스</td>
              <td class="border border-[#eee] px-3 py-2">HIFU</td>
              <td class="border border-[#eee] px-3 py-2">1,000~2,000만 원</td>
              <td class="border border-[#eee] px-3 py-2">10~15만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 3만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 9만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 12개월</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">리프테라V</td>
              <td class="border border-[#eee] px-3 py-2">HIFU</td>
              <td class="border border-[#eee] px-3 py-2">800~1,500만 원</td>
              <td class="border border-[#eee] px-3 py-2">8~12만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 2.5만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 7만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 12개월</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">인모드</td>
              <td class="border border-[#eee] px-3 py-2">RF</td>
              <td class="border border-[#eee] px-3 py-2">3,000~4,500만 원</td>
              <td class="border border-[#eee] px-3 py-2">15~25만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 5만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 13만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 18개월</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">울쎄라 프라임</td>
              <td class="border border-[#eee] px-3 py-2">HIFU</td>
              <td class="border border-[#eee] px-3 py-2">5,000만~1억 원</td>
              <td class="border border-[#eee] px-3 py-2">100~170만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 30만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 100만 원</td>
              <td class="border border-[#eee] px-3 py-2">충분한 환자 기반 전제</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">이 도표에서 가장 주의 깊게 봐야 할 열은 "투자 회수" 열이다. 슈링크와 리프테라는 월 10건이면 약 1년 안에 장비가를 회수할 수 있지만, 인모드는 18개월이 소요되고, 울쎄라는 환자 기반이 충분하지 않으면 회수 시점조차 예측하기 어렵다. 장비의 성능이 아무리 뛰어나도, 회수 계획이 서지 않는 투자는 경영적으로 실패한 투자라는 점을 명확히 인식해야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">가격 설계 — 리프팅 장비에서만 작용하는 특수 변수</h4>
      <p class="text-[#333] leading-relaxed mb-4">통합 가격 설계 원칙은 STEP 1 2장 "수가체계 설계"를 참조하되, 리프팅 장비에는 다른 시술에서 볼 수 없는 고유한 변수가 존재한다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째,</span> 투자 회수와 연동된 가격 설정이 필요하다. 보톡스나 필러는 재료비 위에 마진을 얹는 단순 구조지만, 리프팅 장비는 재료비(카트리지)뿐 아니라 장비 감가상각비까지 시술 단가에 반영해야 한다. 월 목표 건수와 회수 기간을 역산해서 최소 시술 단가를 먼저 정하고, 그 위에 마진을 얹는 순서가 올바른 접근이다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째,</span> 초회 체험가 전략을 활용할 수 있다. 리프팅 장비 시술은 환자 입장에서 단가가 높기 때문에 진입 장벽이 존재한다. 기존 보톡스·필러 환자에게 첫 1회에 한해 정상가의 15~20% 할인된 체험가를 제공하면, 시술 경험 자체가 재방문의 동력이 된다. 다만 체험가는 반드시 "첫 1회 한정"임을 명확히 해야 하며, 정상가를 먼저 고지한 뒤 할인을 제안하는 순서를 지켜야 한다. 그렇지 않으면 체험가가 사실상 정상가로 인식되어 가격 복원이 어려워진다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">셋째,</span> 보톡스·필러와의 콤보 패키지를 적극 설계해야 한다. "보톡스(사각턱) + 슈링크(턱선 타이트닝)" 같은 콤보는 개별 시술 합산 대비 5~10% 할인으로 묶을 수 있으며, 환자에게는 한 번의 내원으로 두 가지 효과를 얻는다는 편의성이 핵심 셀링 포인트가 된다.</p>
    `,
  },
  {
    id: "s1-1-5-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">장비 선택 시 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비는 한 번 도입하면 최소 3~5년간 사용하게 되므로, 선택 시 아래 항목을 빠짐없이 확인해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 구매 vs 렌탈 :</span> 투자 회수가 확실하다면 구매가 유리하지만, 확신이 없다면 렌탈로 시작하여 리스크를 분산하는 것이 현명하다. 렌탈의 경우 월 비용이 투자 회수 계산에 직접 영향을 주므로, 렌탈 비용을 반드시 시뮬레이션에 포함시켜야 한다.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ 카트리지 및 팁 단가 : 시술할 때마다 소모되는 카트리지(또는 팁)의 단가가 건당 마진을 사실상 결정한다. 장비가가 저렴해도 카트리지 단가가 높으면 마진이 구조적으로 낮아지므로, 장비가와 카트리지 단가를 분리해서 보지 말고 반드시 통합하여 계산해야 한다. [건주확인] 장비별 카트리지 단가 정밀 비교표 필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 유지보수 비용과 AS 대응 :</span> 연간 유지보수 계약 비용이 얼마인지, AS 요청 시 대응 속도가 어느 정도인지를 사전에 확인해야 한다. 장비가 고장 나서 2주간 시술을 못 하면, 그 자체가 직접적인 매출 손실이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 식약처 인증 여부 :</span> 의료기기로서의 인허가와 안전 인증은 반드시 확인해야 한다. 미인증 장비를 도입하면 법적 리스크가 발생한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 업그레이드 경로 :</span> 장비 제조사의 차세대 모델 전환 조건을 사전에 확인해 두어야 한다. 현재 모델을 구매한 지 2년 만에 신모델이 출시되어 기존 모델이 단종되는 상황은 흔히 벌어진다. 트레이드인 조건이나 업그레이드 비용을 미리 파악해 두면 장기적인 투자 계획을 세우는 데 도움이 된다.</p>
    `,
  },
  {
    id: "s1-1-5-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비의 시술 난이도 자체는 중간 수준이다. 보톡스나 필러처럼 정밀한 해부학적 판단이 필요한 것은 아니며, 장비의 에너지 세팅과 핸드피스 각도, 이동 속도, 부위별 적정 에너지 레벨을 익히는 것이 핵심이다. 대부분의 장비 제조사가 도입 시 기본 교육을 제공하므로, 교육 접근성 면에서도 실리프팅보다 진입 장벽이 낮다.</p>
      <p class="text-[#333] leading-relaxed mb-4">다만 초기 시술에서 반드시 주의해야 할 사항들이 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 에너지 과다 :</span> 가장 흔한 초보자의 실수다. "에너지가 높을수록 효과가 좋을 것"이라는 판단은 화상으로 직결된다. 보수적인 세팅에서 시작하여 점진적으로 올려가는 것이 원칙이며, 처음 10케이스까지는 제조사 권장 세팅의 하한선에서 시술하는 것이 안전하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 뼈 근처 통증 :</span> HIFU는 초음파가 뼈에 가까운 부위를 지날 때 강한 통증을 유발한다. 특히 턱뼈와 광대뼈 주변에서 환자가 극심한 통증을 호소할 수 있으므로, 시술 전에 "뼈 근처에서 순간적으로 강한 통증이 있을 수 있습니다"라고 반드시 사전 고지해야 한다. 고지 없이 시술하면 환자 신뢰가 한 번에 무너질 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 간격 :</span> HIFU는 최소 3개월 간격을 원칙으로 해야 한다. 짧은 간격으로 반복 시술하면 지방 위축이나 조직 손상의 위험이 있으므로, 환자가 "더 자주 맞으면 더 좋아지느냐"고 물었을 때 명확하게 "아닙니다"라고 답할 수 있어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 금기 부위 :</span> 갑상선 위(HIFU), 안구 주변(HIFU), 금속 임플란트가 있는 부위(RF)에는 절대 시술해서는 안 된다. 이것은 주의사항이 아니라 절대적 금기다.</p>
    `,
  },
  {
    id: "s1-1-5-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비의 수익성을 분석할 때 가장 중요한 것은, 보톡스나 필러와 달리 '고정 비용(장비 투자)'이 존재한다는 점이다. 건당 마진이 아무리 높아도 투자금을 회수하기 전까지는 실질적으로 마이너스 상태라는 사실을 항상 인식하고 있어야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실전 시뮬레이션 — 슈링크 유니버스 기준</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 슈링크 유니버스 투자 회수 시뮬레이션]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">항목</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">수치</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">장비 투자</td>
              <td class="border border-[#eee] px-3 py-2">1,500만 원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">시술 단가</td>
              <td class="border border-[#eee] px-3 py-2">12만 원</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">카트리지 비용 (건당)</td>
              <td class="border border-[#eee] px-3 py-2">약 3만 원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">건당 마진</td>
              <td class="border border-[#eee] px-3 py-2">약 9만 원</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">월 15건 시술 시 월 마진</td>
              <td class="border border-[#eee] px-3 py-2">약 135만 원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">투자 회수 기간</td>
              <td class="border border-[#eee] px-3 py-2">약 11개월</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[#333] leading-relaxed mb-4">현실 체크가 필요한 지점은 "월 15건이 과연 가능한가"다. 이 질문에 답하려면 현재 미용 시술 환자 기반의 규모를 직시해야 한다. 보톡스를 월 50건 이상 시술하는 치과라면, 그중 20~30%가 리프팅에 관심을 보일 수 있으므로 월 10~15건은 현실적인 숫자다. 그러나 보톡스가 월 10건 미만인 치과에서 월 15건의 리프팅 시술을 기대하는 것은 비현실적이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">슈링크가 매력적인 이유는 투자 규모 대비 회수 기간이 짧기 때문이지, 건당 마진이 높기 때문이 아니다. 건당 마진 9만 원은 보톡스 프리미엄(건당 5.8만 원)보다는 높지만, 필러(건당 10만 원대)와 비슷하거나 오히려 낮을 수도 있다. 그럼에도 리프팅 장비를 도입하는 진짜 이유는, 시술 메뉴의 폭을 넓혀 "이 치과에서는 미용의 모든 것이 가능하다"는 인식을 환자에게 심어주는 데 있다.</p>
    `,
  },
  {
    id: "s1-1-5-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비 도입은 다른 어떤 미용시술보다 사전 준비가 중요하다. 장비를 들여놓은 뒤에 "환자가 안 오는데 어떡하지"라고 고민하는 순서가 되어서는 안 되며, 반드시 들여놓기 전에 숫자로 답을 내야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리프팅 장비 1대 :</span> 슈링크 유니버스를 권장한다. 800만~2,000만 원이며, 구매 또는 렌탈 조건을 비교해야 한다.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ 카트리지/팁 초기 재고 : [건주확인] 초기 구매 수량과 비용 확인 필요. 첫 달 예상 시술 건수의 1.5배를 확보해 두는 것이 안전하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 표면마취 크림 :</span> 권장. EMLA 크림이 기본이며, 필요시 국소마취를 병행한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 동의서 양식 :</span> 필수. 리프팅 장비 전용 동의서를 사용해야 하며, 메디스테이션에서 제공한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 전후 사진 촬영 장비 :</span> 필수. 리프팅 장비는 효과 발현이 점진적이므로, 시술 전후 사진이 환자 만족도 관리에 특히 중요하다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">합계 : 1,000만~2,000만 원. 이 금액은 보톡스 25만 원, 필러 50만 원과는 차원이 다른 투자다. 따라서 ROI 시뮬레이션을 먼저 완료한 뒤, 숫자로 확신이 선 상태에서만 집행해야 한다.</p>
    `,
  },
  {
    id: "s1-1-5-11",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비의 합병증 리스크는 실리프팅보다 낮은 편이지만, 에너지 기반 시술인 만큼 고유의 위험이 존재한다. 특히 화상과 신경 손상은 발생 빈도가 낮더라도 한 번 발생하면 환자 신뢰를 회복하기 어려운 중대 사안이므로, 예방 원칙을 철저히 지켜야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 및 불편감 (흔함) :</span> HIFU에서 뼈 근처를 지날 때 강한 통증이 발생할 수 있다. 이것은 정상 반응이며, 시술 전 사전 고지가 이루어졌다면 대부분의 환자가 수용한다. 그러나 고지 없이 시술하면 "이렇게 아플 줄 몰랐다"는 불만이 즉각적으로 터지므로, 사전 안내의 중요성은 아무리 강조해도 부족하지 않다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 발적 및 부종 (흔함) :</span> 시술 후 1~3일 내 자연 소실되는 정상 반응이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 화상 (드물게 발생) :</span> 에너지 세팅이 과도하거나, 동일 부위에 중복 조사했을 때 발생할 수 있다. 보수적 세팅 원칙을 지키면 대부분 예방 가능하지만, 만약 발생했다면 즉시 냉각 처치를 하고 피부과 협진을 고려해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 신경 손상 (극히 드묾) :</span> 일시적인 감각 이상이 대부분이며 수주 내 자연 회복된다. 그러나 영구적 손상의 가능성을 완전히 배제할 수는 없으므로, 동의서에 이 가능성을 반드시 포함해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 지방 위축 (드물게 발생) :</span> 과도한 반복 시술 시 나타날 수 있다. 최소 3개월 간격 원칙을 준수하면 예방할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 기대치 불일치 (가끔) :</span> 리프팅 장비의 효과는 "자연스러운 타이트닝"이지 "극적인 리프팅"이 아니다. 실리프팅과 마찬가지로, 이 차이를 시술 전에 충분히 설명하지 않으면 불만족으로 이어지게 된다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 전 필수 고지 사항 (동의서 포함)</h4>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비의 효과는 시술 직후 약간의 타이트닝으로 시작되어, 1~3개월에 걸쳐 콜라겐 재생이 진행되면서 본격적으로 나타난다. 따라서 즉각적인 극적 변화를 기대해서는 안 된다는 점을 환자에게 충분히 설명해야 한다. 효과 지속기간은 장비와 개인차에 따라 6개월에서 1년 정도이며, 유지를 위해서는 정기적인 재시술이 필요하다. 시술 중 뼈 근처에서 순간적으로 강한 통증이 발생할 수 있다는 점, 시술 후 1~3일간 발적과 부종이 나타날 수 있다는 점, 화상 및 신경 손상의 드문 가능성을 동의서에 구체적으로 명시하고, 환자가 각 항목을 이해했음을 서명으로 확인받아야 한다.</p>
    `,
  },
  {
    id: "s1-1-5-12",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비는 미용치과의 다섯 번째 확장이다. 보톡스, 필러, 스킨부스터, 실리프팅으로 시술 라인업의 기둥을 세운 뒤, 그 위에 올리는 장비 기반 시술이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">이 챕터에서 가장 강조한 것은 숫자다. 장비가, 카트리지 단가, 월 시술 건수, 투자 회수 기간. 이 네 가지 숫자가 도입 전에 테이블 위에 올라와 있지 않으면, 수천만 원짜리 장비가 진료실 한켠에서 먼지만 쌓이는 값비싼 장식품이 될 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-4">슈링크를 1,500만 원에 도입하여 월 15건을 시술하고, 11개월 만에 장비가를 회수한 치과가 있다. 반면 울쎄라를 도입했으나 월 3건에 머물러 회수 기간이 3년을 넘기며 결국 중고로 처분한 치과도 있다. 같은 리프팅 장비를 도입했지만 결과는 완전히 달랐다. 차이를 만든 것은 장비의 성능이 아니라, 도입 전에 숫자를 확인했느냐의 차이였다.</p>
      <p class="text-[#333] leading-relaxed mb-4">'있으면 좋겠다'는 감으로 장비를 도입해서는 안 된다. 숫자로 답할 수 있을 때, 그때가 도입의 적기다.</p>
    `,
  },

  // ─── 1-6. 레이저/피부장비 ───
  {
    id: "s1-1-6-01",
    html: `
      <p class="text-[#333] leading-relaxed mb-4">[06 레이저 v2 본문은 이 세션의 대화에서 직접 작성됨. 철수가 이 키를 읽어서 docx에 삽입할 것.]</p>
      <p class="text-[#333] leading-relaxed mb-4">## 6장. 레이저 / 피부 장비 — 있으면 좋지만, 없어도 된다</p>
    `,
  },
  {
    id: "s1-1-6-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">이 챕터에서 다루는 분야는 치과의 고유 영역에서 가장 먼 시술이다. 피부과의 핵심 사업 영역과 정면으로 겹치며, 치과의 메인 시술로 운영하는 것은 현실적이지 않다. 보조 관리 포지션으로만 접근해야 한다는 것을 처음부터 분명히 해두어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">도입 여부의 판단 기준은 "해야 하는가"가 아니라 "할 여력이 되는가"에 있다. 보톡스와 필러, 스킨부스터가 안정적으로 돌아가고, 리프팅 장비까지 검토한 뒤에도 여유가 남아 있다면, 그때 비로소 올려놓을 수 있는 마지막 선반이다. 그 여유가 없다면 이 챕터는 건너뛰어도 미용치과 운영에 아무런 지장이 없다.</p>
      <p class="text-[#333] leading-relaxed mb-4">그럼에도 이 챕터를 수록하는 이유는 하나다. 기존 미용시술에 월 50~60만 원의 부가 매출을 얹어줄 수 있는 현실적인 확장 옵션이기 때문이다. 기대치를 올바르게 설정한 상태에서 접근한다면, 적은 투자로 의미 있는 부가가치를 만들어낼 수 있다.</p>
    `,
  },
  {
    id: "s1-1-6-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">레이저 및 피부 장비는 다양한 파장의 빛 에너지 또는 물리적 방법을 이용하여 피부의 색소, 혈관, 모공, 질감 문제를 개선하는 시술의 총칭이다. 범위가 매우 넓어서, 단순 피부 관리(아쿠아필링)부터 의료용 레이저(IPL, 프락셀)까지 스펙트럼이 다양하다. 따라서 "레이저를 도입한다"라는 말이 의미하는 바가 300만 원짜리 아쿠아필링기인지, 5,000만 원짜리 포텐자인지에 따라 의사결정의 성격이 완전히 달라진다는 점을 먼저 인식해야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과에서 현실적으로 검토 가능한 장비 유형</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 레이저/피부 장비 유형별 비교]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">장비</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">원리</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">장비가</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">시술 단가</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">다운타임</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">피부과 경쟁 강도</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">치과 적합도</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">아쿠아필링기</td>
              <td class="border border-[#eee] px-3 py-2">물+용액 딥클렌징</td>
              <td class="border border-[#eee] px-3 py-2">200~500만 원</td>
              <td class="border border-[#eee] px-3 py-2">3~5만 원</td>
              <td class="border border-[#eee] px-3 py-2">없음</td>
              <td class="border border-[#eee] px-3 py-2">낮음</td>
              <td class="border border-[#eee] px-3 py-2">가장 높음</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">LDM</td>
              <td class="border border-[#eee] px-3 py-2">초음파 약물 흡수 촉진</td>
              <td class="border border-[#eee] px-3 py-2">2,000~4,000만 원</td>
              <td class="border border-[#eee] px-3 py-2">3~5만 원</td>
              <td class="border border-[#eee] px-3 py-2">없음</td>
              <td class="border border-[#eee] px-3 py-2">중간</td>
              <td class="border border-[#eee] px-3 py-2">높음 (스킨부스터 시너지)</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">IPL</td>
              <td class="border border-[#eee] px-3 py-2">광선 색소/홍조 치료</td>
              <td class="border border-[#eee] px-3 py-2">1,500~3,000만 원</td>
              <td class="border border-[#eee] px-3 py-2">5~15만 원</td>
              <td class="border border-[#eee] px-3 py-2">1~2일</td>
              <td class="border border-[#eee] px-3 py-2">높음</td>
              <td class="border border-[#eee] px-3 py-2">낮음 (정면 경쟁)</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">포텐자</td>
              <td class="border border-[#eee] px-3 py-2">미세침+고주파</td>
              <td class="border border-[#eee] px-3 py-2">3,000~5,000만 원</td>
              <td class="border border-[#eee] px-3 py-2">20~40만 원</td>
              <td class="border border-[#eee] px-3 py-2">3~5일</td>
              <td class="border border-[#eee] px-3 py-2">매우 높음</td>
              <td class="border border-[#eee] px-3 py-2">매우 낮음</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 20분에서 1시간까지이며, 장비에 따라 편차가 크다. 아쿠아필링은 20~30분으로 비교적 짧고, 포텐자는 부위에 따라 1시간까지 소요될 수 있다. 아쿠아필링 정도라면 보톡스·필러 시술 전후에 추가 관리 메뉴로 끼워 넣는 것이 충분히 가능하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 아쿠아필링과 LDM은 통증이 거의 없어 마취가 불필요하다. IPL은 가벼운 따끔거림이 있으며, 포텐자는 미세침이 사용되므로 표면마취가 필요하다. 포텐자의 경우 치과의 마취 역량이 통증 관리에서 경쟁력이 될 수 있으나, 그 이점만으로 수천만 원의 장비 투자를 정당화하기는 어렵다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 아쿠아필링과 LDM은 다운타임이 사실상 없다. 이것은 매우 큰 장점인데, "치과 치료 받으러 왔다가 피부 관리까지 받고 간다"는 동선이 회복 부담 없이 가능하다는 뜻이기 때문이다. IPL은 발적이 1~2일, 포텐자는 3~5일의 다운타임이 존재한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 아쿠아필링은 시술 직후 즉각적인 피부 정돈 효과가 나타나며, IPL과 포텐자는 1~4주에 걸쳐 점진적으로 개선되는 양상을 보인다. 대부분의 경우 복수 회차 시술이 일반적이므로, 프로그램 기반 운영이 자연스럽게 연결된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> IPL의 경우 광과민증, 최근 태닝, 임산부에게는 시술해서는 안 된다. 특히 최근 태닝한 환자에게 IPL을 조사하면 화상 위험이 크게 높아지므로, 상담 시 반드시 확인해야 한다. 포텐자는 켈로이드 체질과 피부 감염 환자에게 금기다.</p>
    `,
  },
  {
    id: "s1-1-6-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">이 분야에서 치과만의 해부학적 우위는 솔직히 사실상 없다. 레이저와 피부 장비는 피부과가 수십 년간 핵심 역량으로 쌓아온 전문 영역이다. 치과가 이 분야에 접근할 수 있는 유일한 논리적 근거는 기존 미용시술의 부가가치 향상이다. 독립적인 수익원이 아니라, 기존 시술에 얹어지는 부가 서비스라는 포지셔닝이 현실적이며, 이 경계를 넘어서면 피부과와의 정면 경쟁이 된다. 그리고 그 경쟁에서 치과가 우위를 점하기는 구조적으로 어렵다.</p>
      <p class="text-[#333] leading-relaxed mb-4">다만 한 가지 구조적 이점은 있다. 보톡스와 필러를 맞으러 온 환자가 "피부 관리도 여기서 받을 수 있다면 편하겠다"고 느끼는 순간이 존재한다. 이 수요를 잡아내는 것이 레이저/피부 장비 도입의 진짜 목적이다. 외부에서 "피부 관리 받으러 치과에 간다"는 수요를 만들어내려는 것이 아니라, 이미 치과에 와 있는 환자에게 "+3만 원 관리"를 제안하는 것이다.</p>
    `,
  },
  {
    id: "s1-1-6-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">치과의 미용시술 라인업에서 가장 마지막에 검토하되, 검토 순위는 투자 규모와 활용 빈도를 기준으로 결정해야 한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">도입 전제 조건</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스, 필러, 스킨부스터의 안정 운영 :</span> 기본 미용시술 라인업이 모두 안착되어 있어야 한다. 이 세 가지가 안정적이지 않은 상태에서 피부 장비를 들여놓는 것은 순서가 맞지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리프팅 장비 도입 여부 검토 완료 :</span> 같은 투자 예산이 있다면 리프팅 장비가 우선순위가 더 높다. 리프팅 장비는 미용시술 라인업의 확장이지만, 레이저/피부 장비는 부가 서비스에 가깝기 때문이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 추가 투자 여력 확인 :</span> 기존 미용시술 매출로 운영이 안정된 상태에서의 잉여 투자여야 한다. "미용 매출이 아직 부족하니까 레이저도 넣어서 매출을 더 올려보자"는 접근은 문제를 풀기보다 복잡하게 만들 수 있다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">검토 순위 — 투자 대비 활용 가능성 기준</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1순위 — 아쿠아필링기 (200~500만 원) :</span> 진입 장벽이 가장 낮다. 보톡스·필러 환자에게 "+3~5만 원 관리 메뉴"로 자연스럽게 제안할 수 있으며, 스탭이 운영할 수 있어 원장의 시간을 차지하지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2순위 — LDM (2,000~4,000만 원) :</span> 스킨부스터 시술과 병행할 때 시너지가 있다. 스킨부스터 프로그램에 LDM을 추가하면 패키지 객단가를 높일 수 있다. 다만 투자 규모가 아쿠아필링의 5~10배이므로, 스킨부스터 시술이 월 10건 이상 안정적으로 돌아가고 있는지를 먼저 확인해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 3순위 — IPL (1,500~3,000만 원) :</span> 색소와 홍조 치료가 가능하므로 환자 수요는 있으나, 피부과의 핵심 시술과 정면으로 겹친다. 주변 500m 이내에 피부과가 없는 상권이 아니라면 신중하게 판단해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 4순위 — 포텐자 (3,000~5,000만 원) :</span> 투자 규모가 크고 피부과 전문 영역이다. 치과의 미용시술 확장 범위를 넘어서는 장비이므로, 특별한 전략적 이유가 없다면 최우선 검토 대상이 아니다.</p>
    `,
  },
  {
    id: "s1-1-6-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 레이저/피부 장비 시장 가격 및 수익 구조]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">장비</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">시술 단가</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">소모품 비용</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">건당 마진</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">투자 회수 (월 20건)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">아쿠아필링</td>
              <td class="border border-[#eee] px-3 py-2">3~5만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 5,000~8,000원</td>
              <td class="border border-[#eee] px-3 py-2">약 2.2~4.5만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 5~7개월</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">LDM</td>
              <td class="border border-[#eee] px-3 py-2">3~5만 원</td>
              <td class="border border-[#eee] px-3 py-2">미미</td>
              <td class="border border-[#eee] px-3 py-2">약 2.5~4.5만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 24~36개월</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">IPL</td>
              <td class="border border-[#eee] px-3 py-2">5~15만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 1~2만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 4~13만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 12~18개월</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">포텐자</td>
              <td class="border border-[#eee] px-3 py-2">20~40만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 3~5만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 17~35만 원</td>
              <td class="border border-[#eee] px-3 py-2">약 12~18개월</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">[건주확인] 아쿠아필링 소모품 단가 및 IPL·포텐자 치과 환경 시장 가격 정밀 확인 필요.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">가격 설계 — 레이저/피부 장비의 특수 변수</h4>
      <p class="text-[#333] leading-relaxed mb-4">통합 가격 설계 원칙은 STEP 1 2장 "수가체계 설계"를 참조하되, 이 분야의 장비들은 다른 시술과 성격이 달라서 고유한 설계 방식이 필요하다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째,</span> 부가 메뉴(+α) 설계가 핵심이다. 아쿠아필링과 LDM은 단독 시술보다 기존 시술에 추가하는 "+3~5만 원 관리"로 포지셔닝하는 것이 자연스럽다. "보톡스 시술 시 아쿠아필링 추가 시 3만 원"과 같은 추가 메뉴 형태가 단독 메뉴보다 환자 전환율이 높다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째,</span> 메인 시술과의 콤보 패키징을 설계해야 한다. "스킨부스터 3회 코스 + LDM 3회"를 하나의 프로그램으로 묶으면, 단순히 시술을 추가하는 것이 아니라 "프리미엄 피부 관리 프로그램"이라는 새로운 가치가 만들어진다.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">셋째,</span> 회원제 또는 정기 관리 구독 모델을 고려할 수 있다. 아쿠아필링처럼 단가가 낮고 정기적으로 받을 수 있는 시술은, 월 1회 관리를 정기 구독 형태로 제안하면 안정적인 재방문 구조가 만들어진다. 다만 이 모델은 충분한 환자 기반이 전제되어야 하므로, 도입 초기보다는 운영이 안정된 후에 검토하는 것이 적절하다.</p>
    `,
  },
  {
    id: "s1-1-6-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과 초기 도입 권장 — 아쿠아필링기</h4>
      <p class="text-[#333] leading-relaxed mb-4">200~500만 원의 투자로 시작할 수 있는 가장 현실적인 첫 번째 선택이다. 의료용 레이저가 아닌 피부 관리 장비이므로 시술 난이도가 매우 낮고, 교육을 받은 스탭이 운영할 수 있다는 것이 큰 장점이다. 원장의 시간을 차지하지 않으면서 부가 매출을 만들어낼 수 있다는 뜻이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">장비 선택 시 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 식약처 인증 여부 :</span> 의료기기에 해당하는 장비는 반드시 인증을 확인해야 한다.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ 소모품 비용 : 아쿠아필링 용액, IPL 카트리지 등 건당 소모되는 비용이 마진을 결정한다. [건주확인] 장비별 소모품 단가 비교 필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 유지보수 계약 :</span> 리프팅 장비와 동일한 원칙이 적용된다. AS 대응 속도와 연간 계약 비용을 사전에 확인해야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 공간 요구사항 :</span> 아쿠아필링기는 기존 유니트 체어에서 시술이 가능하므로 별도 공간이 불필요하다. 이것은 치과 환경에서의 큰 장점이다.</p>
    `,
  },
  {
    id: "s1-1-6-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">아쿠아필링과 LDM의 시술 난이도는 6개 분야를 통틀어 가장 낮다. 장비 제조사의 기본 교육만으로 충분하며, 스탭 교육 후 운영이 가능하다는 점에서 원장의 부담이 최소화된다.</p>
      <p class="text-[#333] leading-relaxed mb-4">반면 IPL과 포텐자는 다른 차원의 주의가 필요하다. 에너지 세팅과 피부 타입별 프로토콜, 합병증 대응에 대한 전문 교육이 필수적이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 시술 시 핵심 주의사항</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ IPL 화상 :</span> 에너지 세팅이 과도하거나, 환자의 피부 타입을 제대로 고려하지 않았을 때 발생한다. 보수적 세팅에서 시작하는 것이 원칙이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 태닝 후 IPL 시술 금기 :</span> 최근 태닝한 환자에게 IPL을 조사하면 화상과 색소 침착 악화의 위험이 크게 높아진다. 시술 전 "최근 2주 이내에 태닝을 하셨습니까?"를 반드시 확인해야 하며, 태닝 이력이 있다면 최소 4주 이상 간격을 두어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 포텐자 감염 관리 :</span> 미세침을 사용하는 시술이므로 무균 조작이 필수다.</p>
    `,
  },
  {
    id: "s1-1-6-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실전 시뮬레이션 — 아쿠아필링기 기준</h4>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">[도표: 아쿠아필링기 투자 회수 시뮬레이션]</h4>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#1a1a1a] text-white">
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">항목</th>
              <th class="border border-[#333] px-3 py-2 text-left font-semibold">수치</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">장비 투자</td>
              <td class="border border-[#eee] px-3 py-2">300만 원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">시술 단가</td>
              <td class="border border-[#eee] px-3 py-2">3만 원</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">소모품 비용 (건당)</td>
              <td class="border border-[#eee] px-3 py-2">약 5,000~8,000원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">건당 마진</td>
              <td class="border border-[#eee] px-3 py-2">약 2.2~2.5만 원</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">월 20건 시술 시 월 매출</td>
              <td class="border border-[#eee] px-3 py-2">60만 원</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-[#eee] px-3 py-2 font-semibold">월 20건 시술 시 월 마진</td>
              <td class="border border-[#eee] px-3 py-2">약 44~50만 원</td>
            </tr>
            <tr class="bg-[#f9f9f9]">
              <td class="border border-[#eee] px-3 py-2 font-semibold">투자 회수 기간</td>
              <td class="border border-[#eee] px-3 py-2">약 6개월</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">[건주확인] 소모품 단가 정밀 확인 필요.</p>
      <p class="text-[#333] leading-relaxed mb-4">건당 마진 2만 원대는 보톡스의 절반 수준이다. 그러나 아쿠아필링은 스탭이 운영할 수 있으므로 원장의 시간이 투입되지 않는다는 점에서, 원장의 시간당 생산성 관점에서 보면 사실상 '공짜로 얹어지는 매출'에 가깝다. 이것이 아쿠아필링기의 진짜 매력이다.</p>
    `,
  },
  {
    id: "s1-1-6-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 아쿠아필링기 1대 :</span> 200~500만 원.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-6">▶ 아쿠아필링 용액 : 필수. [건주확인] 1회 사용량과 단가 확인 필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 동의서 양식 :</span> 필수. 메디스테이션 제공. 0원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 전후 사진 촬영 장비 :</span> 권장.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">합계 : 약 200~500만 원.</p>
    `,
  },
  {
    id: "s1-1-6-11",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 화상 (드물게 발생 — IPL) :</span> 에너지 과다 또는 피부 타입 미고려 시 발생할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 색소 침착 악화 (드물게 발생 — IPL) :</span> 시술 후 자외선 차단을 철저히 해야 한다는 안내가 반드시 이루어져야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 감염 (드물게 발생 — 포텐자) :</span> 미세침 시술이므로 무균 조작이 필수다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 일시적 발적 및 부종 (흔함) :</span> 정상 반응이며 1~3일 내 자연 소실된다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 전 필수 고지 사항 (동의서 포함)</h4>
      <p class="text-[#333] leading-relaxed mb-4">아쿠아필링과 LDM은 시술 직후 피부 정돈 효과가 느껴지지만, 근본적인 피부 개선은 정기적인 반복 시술을 통해 나타난다는 점을 안내해야 한다. IPL은 시술 후 1~2일간 발적이 나타날 수 있으며, 시술 후 최소 2주간은 자외선 차단을 철저히 해야 한다. 포텐자는 3~5일의 회복기간이 필요하며 미세 딱지가 발생할 수 있다. 화상, 색소 침착 악화, 감염의 드문 가능성을 동의서에 구체적으로 명시하고, 환자가 각 항목을 이해했음을 서명으로 확인받아야 한다.</p>
    `,
  },
  {
    id: "s1-1-6-12",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">'있으면 좋지만 없어도 되는 분야' — 이 한 문장이 레이저/피부 장비의 포지션을 가장 정확하게 요약한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">아쿠아필링기를 300만 원에 도입한 치과의 사례가 현실적 기대치를 보여준다. 보톡스와 필러 시술 환자에게 "+3만 원 관리 메뉴"로 추가 제안하여, 월 20건 × 3만 원 = 60만 원의 추가 매출이 발생했고, 6개월 만에 장비가를 회수했다. 스탭이 운영하므로 원장의 시간은 전혀 추가되지 않았다.</p>
      <p class="text-[#333] leading-relaxed mb-4">이것을 넘어서는 기대를 갖고 수천만 원짜리 IPL이나 포텐자를 도입한다면, 그것은 더 이상 치과의 미용시술 확장이 아니라 피부과와의 정면 경쟁이 된다. 그리고 그 경쟁에서 치과가 우위를 점하기는 구조적으로 어렵다.</p>
      <p class="text-[#333] leading-relaxed mb-4">레이저/피부 장비의 올바른 역할은, 치과 미용시술의 마지막 선반에 올려놓는 부가 메뉴다. 그 이상을 기대하면 실망하고, 그 역할에 충실하면 적은 투자로 의미 있는 부가가치를 만들어낼 수 있다.</p>
    `,
  },


  // ─── 2장. 수가 체계 설계 (원문 100%) ───
  {
    id: "s1-ch2-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2장. 미용치과 수가 체계 설계 — 재료비만 보면 마진을 착각한다</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">도입</h3>
      <p class="text-[#333] leading-relaxed mb-4">1장에서 6개 시술의 특성, 시장 가격, 재료비 구조를 하나하나 해부했다. 이 챕터에서는 한 발 물러서 6개 시술을 횡단적으로 조망하며, 치과 전체의 수가를 하나의 체계로 설계하는 프레임워크를 제공한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">개별 시술의 가격을 각각 정하는 것은 어렵지 않다. 어려운 것은 시술 간의 가격 관계, 패키지 구조, 업셀 동선까지를 하나의 체계로 엮는 것이다. 이 챕터가 바로 그 설계도다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">수가 설정의 3단계</h3>
      <p class="text-[#333] leading-relaxed mb-4">대부분의 원장이 수가를 정할 때 범하는 가장 흔한 실수가 있다. 재료비만 보고 "마진 80%"라고 계산하는 것이다. 하지만 시간 원가를 포함하면, 실질 마진은 예상보다 20~30% 낮아진다. 수가 설정은 반드시 다음 3단계를 거쳐야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ A단계. 원가 파악  :</span> 재료비 + 소모품. 가장 직접적인 변동비다. 보톡스 사각턱 50U 기준 재료비 약 2.5만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ B단계. 시간 원가 반영  :</span> 원장이 미용시술에 투입하는 시간은, 보험 진료를 하지 못하는 시간이다. 이것이 기회비용이다. 시간당 보험 진료 매출이 30만 원인 원장이 15분을 보톡스에 투입하면, 시간 원가는 7.5만 원이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ C단계. 마진 설계  :</span> A(재료비) + B(시간 원가) = 실질 원가. 여기에 목표 마진율을 곱해 수가를 도출한다. 실질 원가 10만 원, 목표 마진 50%라면 수가는 20만 원이다.</p>
      <p class="text-[#333] leading-relaxed mb-4">수가 설계의 실무 4단계(원가 파악 → 경쟁 조사 → 포지셔닝 → 초기 조정)와 세부 체크리스트는 'STEP 5-1. 수가 설계 원칙'에서 상세히 다룬다.</p>
    `,
  },
  {
    id: "s1-ch2-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">시술 간 가격 위계</h3>
      <p class="text-[#333] leading-relaxed mb-4">미용치과에서 제공하는 시술들은 환자 인식상의 가격 위계가 존재한다. 이 위계를 무시하고 가격을 설정하면, 환자에게 혼란을 주거나 특정 시술로의 쏠림이 발생한다.</p>
      <p class="text-[#333] leading-relaxed mb-4">낮음에서 높음 순서로: LDM/LED → 보톡스 = IPL/토닝 → 스킨부스터 → 필러 → 슈링크/인모드 → 실리프팅 → 울쎄라.</p>
      <p class="text-[#333] leading-relaxed mb-4">이 위계는 시술의 침습도, 효과 지속기간, 시장의 일반적 가격대에 기반한다. 치과의 수가 체계도 이 위계를 존중해야 환자의 직관과 충돌하지 않는다. 예를 들어, 보톡스가 스킨부스터보다 비싸거나, 필러가 실리프팅보다 비싸면 환자에게 "이 치과 가격 체계가 이상하다"는 인식을 심어준다.</p>
    `,
  },
  {
    id: "s1-ch2-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">패키지 설계 원칙</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 할인율 10~20% 범위  :</span> 30% 이상의 할인은 개별 시술의 가치를 훼손한다. 패키지 할인은 "묶어서 사면 약간 이득"이지, "묶어서 사면 반값"이 아니다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 업셀 동선 설계  :</span> 엔트리(보톡스 + LDM) → 코어(보톡스 + 필러 + 스킨부스터) → 프리미엄(리프팅 + 실 + 스킨부스터). 환자의 경험 단계에 맞춰 자연스럽게 상위 패키지로 전환되는 동선을 설계하라.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 선불 패키지 환불  :</span> 소비자분쟁해결기준에 따라 미사용분 환불이 원칙이다. '환불 불가'는 불공정 약관에 해당한다. 이 점을 반드시 숙지하고, 패키지 계약서에 환불 조건을 명시하라.</p>
      <p class="text-[#333] leading-relaxed mb-4">실전 예시를 보자. 보톡스 5만 원 + LDM 3만 원 = 개별 8만 원인 세트를 패키지 7만 원(12% 할인)으로 설정한다. 이 엔트리 패키지로 미용 첫 경험 환자를 유입한 뒤, 3회차 방문 시 필러·스킨부스터로 코어 패키지 전환을 제안하는 구조다. 할인은 12%에 불과하지만, 환자의 재방문과 업셀을 유도하는 전략적 장치로 작동한다.</p>
    `,
  },

  // ─── 3장. 수익 구조 분석 + 서머리 + 체크리스트 (원문 100%) ───
  {
    id: "s1-ch3-01",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3장. 미용치과 수익 구조 분석 — 숫자로 보는 전체 그림</h2>
      <p class="text-[#333] leading-relaxed mb-4">개별 시술의 수익성은 1장에서 이미 다뤘다. 이 챕터에서는 6개 시술을 한 장의 매트릭스 위에 올려놓고, 치과 전체의 미용시술 수익 구조를 조감한다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">시술별 수익 구조 매트릭스</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스 (사각턱 50U)  :</span> 시술 단가 80,000원, 재료비 22,000원, 마진율 73%, 시간당 생산성 높음 (10분).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 필러 (입술 1cc)  :</span> 시술 단가 150,000원, 재료비 50,000원, 마진율 67%, 시간당 생산성 중간 (30분).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 스킨부스터 (리쥬란 2cc)  :</span> 시술 단가 290,000원, 재료비 100,000원, 마진율 66%, 시간당 생산성 중간 (40분).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 슈링크 (전안면)  :</span> 시술 단가 130,000원, 재료비 30,000원, 마진율 77%, 시간당 생산성 중간 (30분).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 실리프팅 (PLLA 10줄)  :</span> 시술 단가 690,000원, 재료비 100,000원, 마진율 86%, 시간당 생산성 낮음 (60분).</p>
      <p class="text-[#333] leading-relaxed mb-4">마진율은 재료비만 차감한 수치다. 인건비, 임대료, 장비 감가상각은 포함되어 있지 않다. 2장에서 다룬 시간 원가를 반영하면 실질 마진은 이보다 낮아진다는 점을 반드시 염두에 두어야 한다.</p>
    `,
  },
  {
    id: "s1-ch3-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">숨은 비용 — 놓치기 쉬운 항목</h3>
      <p class="text-[#333] leading-relaxed mb-4">마진율 표만 보면 "수익이 엄청나다"는 착각에 빠질 수 있다. 현실에서 마진을 깎아먹는 숨은 비용들이 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장비 감가상각  :</span> HIFU, 레이저, RF 등 고가 장비의 구매 비용을 사용 기간에 걸쳐 나누어 비용으로 반영해야 한다. 장비가 1,500만 원, 사용 기간 5년이면 월 25만 원의 감가상각비가 발생한다. 이것을 빼지 않으면 실제 수익이 보이지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 원장 시간 원가  :</span> 미용 시술에 투입하는 시간은 보험 진료를 하지 못하는 시간이다. 이 기회비용을 무시하면 안 된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 마케팅비  :</span> 미용시술 신환 유입에 드는 비용이다. CPA(Cost Per Acquisition, 환자 1명 유치에 드는 비용)를 추적해야 한다. 기존 구환 전환은 CPA가 0에 가깝지만, 외부 신환은 수만~수십만 원이 들 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 재고 폐기  :</span> 보톡스는 개봉 후 4시간(분말형), 필러는 개봉 후 미사용분 폐기. 재고 관리가 허술하면 재료비가 눈에 보이지 않게 새어나간다.</p>
    `,
  },
  {
    id: "s1-ch3-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">월 매출 시뮬레이션 (월 60건 가정)</h3>
      <p class="text-[#333] leading-relaxed mb-4">6개 시술이 안정적으로 운영되고 있는 치과의 현실적 월 매출 구조를 시뮬레이션한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스 25건  :</span> 매출 200만 원, 순이익 145만 원 (비중 28%).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 필러 15건  :</span> 매출 225만 원, 순이익 150만 원 (비중 29%).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 스킨부스터 10건  :</span> 매출 290만 원, 순이익 190만 원 (비중 24%).</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 슈링크 10건  :</span> 매출 130만 원, 순이익 100만 원 (비중 19%).</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">합계 : 월 60건, 매출 845만 원, 순이익 585만 원.</p>
      <p class="text-[#333] leading-relaxed mb-4">보톡스와 필러가 전체 순이익의 약 57%를 차지한다. 1장에서 반복적으로 강조한 "보톡스가 데려오고, 필러가 수익을 만든다"는 공식이 숫자로 확인된다.</p>
      <p class="text-[#333] leading-relaxed mb-4">장비 시술(슈링크)은 직접 수익도 중요하지만, 그보다 환자 리텐션(retention, 기존 환자가 이탈하지 않고 계속 내원하는 비율)과 패키지 업셀(up-sell, 기존 고객에게 더 높은 단가의 상품을 추가 판매)의 허브 역할에 주목해야 한다. "보톡스 맞으러 왔는데 슈링크도 한번 해볼까" — 이 한마디가 월 130만 원의 추가 매출을 만든다.</p>
    `,
  },
  {
    id: "s1-ch3-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">STEP 1 서머리</h3>
      <p class="text-[#333] leading-relaxed mb-2">▶ 치과 미용시술은 보톡스 → 필러 → 스킨부스터 → (실리프팅) → (장비 시술) 순서로 도입한다. 이 순서는 원칙이다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 보톡스와 필러는 치과의 해부학적 강점이 직접 발휘되는 고유·인접 영역이다. 3순위 이하는 사업적 확장이다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 보톡스는 미끼이자 입구다. 단독 매출에 기대하지 않는다. 보톡스 뒤에 무엇을 연결할 것인가를 먼저 설계한다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 필러는 안전 부위(입술·턱끝)부터 단계적으로 확장한다. 히알루로니다제 필수 구비. 혈관폐색 응급 프로토콜 숙지.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 스킨부스터는 보톡스·필러가 안정된 후 도입한다. 프로그램 기반(3회 1코스) 구조가 예측 가능한 매출을 만든다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 실리프팅은 가장 높은 난이도와 가장 높은 객단가를 동시에 가진다. 카데바 실습 포함 전문 교육, 모노실 50케이스 이상 축적이 전제 조건이다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 장비 시술은 투자 회수 계산 후 도입한다. 감으로 사지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 수가 설계 시 재료비뿐 아니라 시간 원가를 반영해야 실질 마진이 보인다.</p>
      <p class="text-[#333] leading-relaxed mb-2">▶ 시술 간 가격 위계를 유지하고, 패키지로 업셀 동선을 설계한다.</p>
    `,
  },
  {
    id: "s1-ch3-05",
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
