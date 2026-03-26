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
      <div class="border-t border-[#eee] my-8"></div>
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">4장. 실리프팅 (Thread Lifting) — 지붕은 기둥을 세운 뒤에 올린다</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 챕터에서 다루는 내용</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 6개 분야 중 시술 난이도가 가장 높다. 치과의 고유 영역이 아니며, 결과 편차가 크고, 환자 기대치 관리가 어렵다. 1차 런칭 메인 시술로 절대 적합하지 않다. 보톡스가 문을 열고, 필러가 기둥을 세우고, 스킨부스터로 층을 쌓은 후에야 실리프팅이라는 지붕을 올릴 수 있다. 이 순서를 건너뛰면 구조가 무너진다.</p>
      <p class="text-[#333] leading-relaxed mb-4">그럼에도 이 챕터에서 실리프팅을 다루는 이유는 분명하다. 1회 시술 객단가가 수십만 원에서 수백만 원에 달하며, '리프팅까지 하는 치과'라는 프리미엄 이미지를 구축할 수 있는 유일한 시술이기 때문이다. 리스크가 높은 만큼 리턴도 크다. 관건은 "할 것인가 말 것인가"가 아니라, "언제, 어떤 조건에서 시작할 것인가"다.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 생체흡수성 실(Thread)을 피부 아래에 삽입하여 처진 조직을 물리적으로 끌어올리는 시술이다. 실이 조직을 당기는 물리적 리프팅 효과와, 실 주변으로 콜라겐 재생을 유도하는 이중 효과를 갖는다. 결과가 즉시 눈에 보이지만, 그만큼 기대치 관리가 핵심이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 부위와 실 개수에 따라 30분~1시간.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 마취 :</span> 국소마취 필수. 삽입 과정에서 당김과 이물감이 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 부종 3~7일. 멍 가능. 입 크게 벌리기와 과도한 표정은 2주간 자제.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 즉시 리프팅 효과가 나타나고, 1~3개월에 걸쳐 콜라겐 재생으로 점진적 개선.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부/수유부, 시술 부위 감염, 자가면역질환, 켈로이드 체질, 혈액응고장애.</p>
    `,
  },
  {
    id: "s1-1-4-02",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실의 유형 — 무엇을 피부 아래에 넣는가</h4>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅에 사용하는 실은 크게 모노실과 코그실로 나뉜다. 둘의 차이는 실 표면 구조에 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 모노실 (Mono Thread) :</span> 돌기 없는 매끈한 실이다. 리프팅 효과보다 콜라겐 자극과 피부 탄력 개선이 주 목적이다. 난이도가 낮아 1단계 훈련용으로 적합하다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 코그실 (Cog Thread) :</span> 실 표면에 돌기(코그, 바브)가 있어 조직을 물리적으로 끌어올린다. 리프팅 효과가 명확한 대신 시술 난이도와 합병증 위험이 높다. 2단계 이후에 진입한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실 재질별 분류</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ PDO (폴리디옥사논) :</span> 효과 지속 6~9개월. 초기 도입에 가장 보편적인 재질이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ PLLA (폴리-L-유산) :</span> 효과 지속 1~2년. 콜라겐 재생 효과가 상대적으로 강하다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ PCL (폴리카프로락톤) :</span> 효과 지속 2~3년. 프리미엄 포지셔닝에 적합하다.</p>
    `,
  },
  {
    id: "s1-1-4-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅의 주요 시술 부위는 하안면부다. 턱선, 볼처짐, 입꼬리 — 치과의사가 일상적으로 다루는 해부학적 영역과 겹친다. 안면신경(VII)의 분지, 이하선관(Parotid duct), 안면동맥의 주행 경로에 대한 이해는 실의 삽입 경로를 설계하고 합병증을 피하는 데 직접 기여한다.</p>
      <p class="text-[#333] leading-relaxed mb-8">하안면 리프팅은 치과의 기존 시술과 시너지가 강하다. 보톡스로 사각턱을 줄이고, 필러로 턱끝을 세우고, 실리프팅으로 턱선을 당긴다. 이 하안면 토탈 솔루션은 치과에서만 원스톱으로 제공할 수 있는 동선이다.</p>
    `,
  },
  {
    id: "s1-1-4-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅의 도입 전략은 보톡스나 필러와 근본적으로 다르다. "시작할 자격이 갖춰졌는가"의 문제다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">도입 전제 조건 4가지</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 기본 3개 분야 안정 :</span> 보톡스, 필러, 스킨부스터 모두 안정적으로 운영되고 있어야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 카데바 실습 이수 :</span> 해부 실습체를 활용한 전문 교육을 반드시 거쳐야 한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 모노실 50케이스 축적 :</span> 모노실로 시작하여 최소 50케이스 이상의 경험을 쌓은 후 코그실로 넘어간다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 대표원장 직접 시술 :</span> 실리프팅은 위임 시술이 불가능하다. 대표원장만 직접 시술한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">3단계 로드맵</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1단계 — 모노실 :</span> 콜라겐 자극과 피부 탄력 개선이 목적이다. 훈련 단계다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2단계 — 코그실 하안면 :</span> 턱선, 볼처짐 리프팅. 모노실 50케이스 이상 축적 후 진입한다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 3단계 — 코그실 중안면 :</span> 광대와 볼 리프팅. 고난도 영역이다.</p>
    `,
  },
  {
    id: "s1-1-4-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시장 가격 구간</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 모노실 (10~20본) :</span> 20만~40만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 코그실 하안면 (양측 6~10본) :</span> 50만~150만 원.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 코그실 풀페이스 :</span> 100만~300만 원 이상.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">가격 설계 특수변수</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 부위별 패키지 :</span> 본수가 아닌 부위 단위로 패키지를 구성한다. 환자에게 본수 계산을 시키지 않는다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 재시술 할인 :</span> 6~12개월 후 재시술 시 10~15% 할인을 적용하면 재방문율이 올라간다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 하안면 토탈 패키지 :</span> 보톡스+필러+실리프팅을 묶어 200만 원 이상으로 설계한다. 치과만 가능한 원스톱 동선이다.</p>
    `,
  },
  {
    id: "s1-1-4-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">단계별 추천 제품</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 모노실 단계 :</span> PDO 모노실. 가장 보편적이고 안전하다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 코그실 단계 :</span> PDO 코그실 (민트실 360도 코그 등). 초기 코그실 도입에 가장 적합하다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 프리미엄 :</span> PLLA 또는 PCL. 효과 지속 기간이 길어 프리미엄 포지셔닝에 활용한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필요 장비 및 도구</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 전용 캐뉼라/니들 :</span> 제품에 동봉되는 경우가 대부분이다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 국소마취제 :</span> 리도카인 + 에피네프린. 기존 치과 재고를 활용할 수 있다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 소독 세트 :</span> 실리프팅은 침습 시술이다. 무균 조작 원칙을 철저히 지킨다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 전용 동의서 :</span> 실리프팅 전용 동의서를 별도로 준비한다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 촬영 장비 :</span> 시술 전후 사진 기록은 필수다.</p>
    `,
  },
  {
    id: "s1-1-4-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 6개 분야 중 도입 난이도가 가장 높다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">교육 4단계</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1단계 — 이론 :</span> 안면 해부학(SMAS층, 안면신경 분지, 이하선관), 실 재질별 특성을 학습한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2단계 — 카데바 실습 :</span> 반드시 거쳐야 한다. 이 단계를 건너뛰면 안 된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 3단계 — 모노실 임상 :</span> 50케이스 이상 축적한다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 4단계 — 코그실 임상 :</span> 전문가 감독 하에 초기 시술을 진행한다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">핵심 주의사항 4가지</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 삽입 깊이 :</span> 너무 얕으면 실이 표면에 비치거나 돌출된다. 너무 깊으면 리프팅 효과가 없다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 텐션 조절 :</span> 과도한 텐션은 딤플(피부 함몰)과 부자연스러운 표정을 만든다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 좌우 대칭 :</span> 실의 개수, 삽입 경로, 텐션을 양측 동일하게 맞추는 것이 핵심이다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 출구점 관리 :</span> 실 삽입 후 출구점에서 실이 돌출되지 않도록 꼼꼼히 처리한다.</p>
    `,
  },
  {
    id: "s1-1-4-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 코그실 하안면 1회 :</span> 판매가 100만~150만 원. 재료비 10만~20만 원. 건당 마진 약 80만~130만 원.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 월 5건 시술 시 :</span> 마진 약 450만 원.</p>
      <p class="text-[#333] leading-relaxed mb-8">건당 마진이 보톡스의 약 20배에 달한다. 다만 비대칭 리스크가 존재한다. 환불 1건이 발생하면 보톡스 20건의 마진이 날아간다. 높은 마진의 이면에는 높은 결과 편차가 있다.</p>
    `,
  },
  {
    id: "s1-1-4-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 구비 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ PDO 모노실 (학습용)</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ PDO 코그실</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 국소마취제</span> — 기존 치과 재고 활용 가능.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 소독 세트 / 동의서 양식 / 촬영 장비</span></p>
      <p class="text-[#333] leading-relaxed mb-6">합계 약 35만~90만 원 + 카데바 교육비 별도.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주요 부작용</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 딤플 (가끔) :</span> 텐션 과도 또는 삽입 깊이 불균일 시 발생한다. 대부분 2~4주 내 자연 개선된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 비대칭 (가끔) :</span> 좌우 차이에서 발생한다. 2주 후 최종 확인하고 필요 시 보정한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 실 돌출 (드묾) :</span> 삽입 깊이가 너무 얕을 때 발생한다. 돌출 부분을 절단 제거한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 감염 (드묾) :</span> 발적과 열감이 지속되면 항생제를 투여한다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 기대치 불일치 (흔함) :</span> 실리프팅의 가장 흔한 '합병증'이다. 시술 전 반복 안내가 필수다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">동의서 고지사항</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 타임라인 :</span> 즉시 리프팅 + 1~3개월 점진 개선. 최종 결과는 2주 후 판단한다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2주간 주의사항 :</span> 입 크게 벌리기, 과도한 표정, 안면 마사지를 금한다.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 합병증 서명 확인 :</span> 딤플, 비대칭, 실 돌출 가능성을 고지하고 서명을 받는다.</p>
    `,
  },
  {
    id: "s1-1-4-10",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">실리프팅은 미용치과의 지붕이다. 지붕은 기둥을 세운 뒤에 올린다. 건당 마진이 보톡스의 20배에 달하지만, 순서를 지키지 않으면 구조가 무너진다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">4가지가 갖춰져야 시작할 수 있다. 충분한 교육(카데바 실습 포함), 단계적 경험 축적(모노실 50케이스 이상), 철저한 기대치 관리, 빈틈없는 기록. 이 순서가 마진과 리스크의 차이를 만든다.</p>
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
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비는 에너지(초음파, 고주파 등)를 피부 깊숙이 전달하여 콜라겐 수축과 재생을 유도하는 비침습 또는 최소침습 시술이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주요 장비 원리</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ HIFU (고강도 집속 초음파) :</span> 초음파 에너지를 피부 특정 깊이에 집중시켜 열 응고점을 만든다. 슈링크, 리프테라, 울쎄라가 대표적이다.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ RF (고주파) :</span> 고주파 에너지로 진피층과 피하지방층에 열을 전달. 인모드가 대표적이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 30분~1시간 30분.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> HIFU는 뼈 근처에서 통증감. RF는 열감. 표면마취 또는 국소마취 선택적 적용.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 대부분 즉시 일상 복귀. 부종·발적 1~3일.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 즉시 약간의 타이트닝 + 1~3개월에 걸쳐 점진적 개선.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> 임산부/수유부, 시술 부위 금속 임플란트(RF), 피부 감염, 심박조율기 착용자(RF).</p>
    `,
  },
  {
    id: "s1-1-5-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-8">리프팅 장비에서 치과만의 해부학적 우위는 크지 않다. 하지만 구조적 이점은 존재한다. 첫째, 기존 미용 환자 기반. 둘째, 하안면 토탈 솔루션이다.</p>
    `,
  },
  {
    id: "s1-1-5-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비 도입은 '시술 전략'이 아니라 '투자 전략'이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">도입 전제 조건</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스 + 필러 안정 운영 :</span> 미용 환자 기반이 없는 상태에서 장비를 먼저 도입하면, 장비는 있는데 환자가 없는 상황이 된다.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 월 최소 환자 수 예측.</span></p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ ROI 계산 완료 :</span> 장비가, 카트리지 단가, 시술 단가, 예상 월 건수, 투자 회수 기간 — 이 다섯 가지 숫자가 도입 전에 반드시 서 있어야 한다.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">치과 초기 도입 권장 — 슈링크 유니버스</p>
    `,
  },
  {
    id: "s1-1-5-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 슈링크 유니버스 (HIFU) :</span> 장비가 1,000~2,000만 원. 시술 단가 10~15만 원. 투자 회수(월 10건) 약 12개월.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리프테라V (HIFU) :</span> 장비가 800~1,500만 원. 시술 단가 8~12만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 인모드 (RF) :</span> 장비가 3,000~4,500만 원. 시술 단가 15~25만 원. 투자 회수(월 10건) 약 18개월.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 울쎄라 프라임 (HIFU) :</span> 장비가 5,000만~1억 원. 시술 단가 100~170만 원.</p>
    `,
  },
  {
    id: "s1-1-5-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5. 제품 / 장비 가이드</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">장비 선택 시 체크리스트</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장비가 vs 렌탈.</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 카트리지/팁 단가.</span></p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-2">[건주확인] 장비별 카트리지 단가 정밀 비교표 필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 유지보수 비용. 인허가·안전 인증. 업그레이드 경로.</span></p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mt-6 mb-4">6. 도입 난이도 / 교육</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비의 시술 난이도 자체는 중간 수준이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">초기 주의사항</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 에너지 과다 :</span> 보수적 세팅으로 시작.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 뼈 근처 통증 :</span> HIFU는 뼈에 가까운 부위에서 통증이 강하다. 사전 고지 필수.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 간격 :</span> HIFU는 최소 3개월 간격.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 금기 부위 :</span> 갑상선 위, 안구 주변(HIFU), 금속 임플란트 부위(RF).</p>
    `,
  },
  {
    id: "s1-1-5-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">7. 수익성 분석</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실전 시뮬레이션 — 슈링크 유니버스 기준</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장비 투자 1,500만 원, 시술 단가 12만 원, 카트리지 비용 3만 원, 건당 마진 9만 원.</span></p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 월 15건 시술 시 :</span> 월 마진 135만 원. 투자 회수 약 11개월.</p>
      <p class="text-[#333] leading-relaxed mb-8">현실 체크 — 보톡스 월 50건 이상이면 그중 20~30%가 리프팅에 관심. 보톡스 월 10건 미만이면 비현실적이다.</p>
    `,
  },
  {
    id: "s1-1-5-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">8. 도입 시 준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리프팅 장비 1대 (필수) :</span> 슈링크 유니버스 권장. 800~2,000만 원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 카트리지/팁 초기 재고.</span></p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-2">[건주확인]</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 표면마취 크림. 동의서 양식. 시술 전후 사진 촬영 장비.</span></p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-6">합계 : 1,000만~2,000만 원.</p>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증·불편감 (흔함).</span> <span class="text-[#1a1a1a] font-bold">▶ 발적·부종 (흔함).</span> <span class="text-[#1a1a1a] font-bold">▶ 화상 (드묾).</span></p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 신경 손상 (극히 드묾).</span> <span class="text-[#1a1a1a] font-bold">▶ 지방 위축 (드묾).</span> <span class="text-[#1a1a1a] font-bold">▶ 기대치 불일치 (가끔).</span></p>
    `,
  },
  {
    id: "s1-1-5-09",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">리프팅 장비는 미용치과의 다섯 번째 확장이다. 감이 아니라 숫자로 판단하라.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">장비가, 카트리지 단가, 월 시술 건수, 투자 회수 기간 — 이 네 가지 숫자가 도입 전에 서 있지 않으면 수천만 원짜리 장비가 먼지만 쌓이는 장식품이 될 수 있다.</p>
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
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">1. 시술 개요</h3>
      <p class="text-[#333] leading-relaxed mb-4">레이저/피부 장비는 다양한 파장의 빛 에너지 또는 물리적 방법을 이용하여 피부의 색소, 혈관, 모공, 질감 문제를 개선하는 시술의 총칭이다.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">치과에서 현실적으로 검토 가능한 장비 유형</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 아쿠아필링기 :</span> 물과 용액을 이용한 피부 딥클렌징·각질 제거.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ LDM :</span> 초음파 진동으로 약물 흡수를 촉진하는 장비.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ IPL :</span> 광선을 이용한 색소·홍조·혈관 치료.</p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 포텐자 :</span> 미세침 + 고주파로 모공, 흉터, 피부 탄력 개선.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">시술 기본 정보</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 시술 시간 :</span> 20분~1시간.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 통증 :</span> 아쿠아필링 거의 없음. IPL 가벼운 따끔거림. 포텐자 표면마취 필요.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 회복기간 :</span> 아쿠아필링·LDM 다운타임 없음. IPL 발적 1~2일. 포텐자 3~5일.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 효과 발현 :</span> 아쿠아필링 즉시. IPL·포텐자 1~4주 점진적 개선.</p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 금기사항 :</span> IPL — 광과민증, 최근 태닝, 임산부. 포텐자 — 켈로이드 체질, 피부 감염.</p>
    `,
  },
  {
    id: "s1-1-6-03",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2. 치과와의 연결점</h3>
      <p class="text-[#333] leading-relaxed mb-8">이 분야에서 치과만의 해부학적 우위는 사실상 없다. 치과가 접근하는 유일한 논리는 기존 미용 시술의 부가가치 향상이다.</p>
    `,
  },
  {
    id: "s1-1-6-04",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">3. 도입 전략 포지션</h3>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">도입 전제 조건</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 보톡스 + 필러 + 스킨부스터 안정 운영.</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 리프팅 장비 도입 여부 검토 완료.</span></p>
      <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 추가 투자 여력 확인.</span></p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">검토 순위</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 1순위 — 아쿠아필링기 (200~500만 원).</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 2순위 — LDM (2,000~4,000만 원).</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 3순위 — IPL (1,500~3,000만 원).</span></p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 4순위 — 포텐자 (3,000~5,000만 원).</span></p>
    `,
  },
  {
    id: "s1-1-6-05",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">4. 시장 현황 / 가격대</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 아쿠아필링 :</span> 시술 단가 30,000~50,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ LDM :</span> 시술 단가 30,000~50,000원.</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ IPL :</span> 시술 단가 50,000~150,000원.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-2">[건주확인]</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 포텐자 :</span> 시술 단가 200,000~400,000원.</p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-8">[건주확인]</p>
    `,
  },
  {
    id: "s1-1-6-06",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5~8. 제품/장비 가이드, 도입 난이도, 수익성 분석, 준비사항</h3>
      <p class="text-[#333] leading-relaxed mb-6">치과 초기 도입 권장 — 아쿠아필링기. 200~500만 원.</p>
      <p class="text-[#333] leading-relaxed mb-6">아쿠아필링·LDM은 시술 난이도가 가장 낮다. 스탭 교육 후 운영 가능.</p>
      <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">실전 시뮬레이션 — 아쿠아필링기 기준</h4>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 장비 투자 300만 원, 시술 단가 30,000원, 소모품 비용 약 5,000~8,000원/건.</span></p>
      <p class="text-[#C4929B] text-sm leading-relaxed mb-2">[건주확인]</p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 건당 마진 약 22,000~25,000원.</span></p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 월 20건 시술 시 :</span> 월 추가 매출 60만 원. 투자 회수 약 5~7개월.</p>
      <p class="text-[#333] leading-relaxed mb-8">초기 주의사항: IPL 화상, 포텐자 감염, 태닝 후 IPL 금기.</p>
    `,
  },
  {
    id: "s1-1-6-07",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">9. 유의사항 / 사고대응</h3>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 화상 (드묾 — IPL).</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 색소 침착 악화 (드묾 — IPL).</span></p>
      <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">▶ 감염 (드묾 — 포텐자).</span></p>
      <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">▶ 일시적 발적·부종 (흔함).</span></p>
    `,
  },
  {
    id: "s1-1-6-08",
    html: `
      <div class="border-t border-[#eee] my-8"></div>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">10. 종합 정리</h3>
      <p class="text-[#333] leading-relaxed mb-4">'있으면 좋지만 없어도 되는' 분야다. 아쿠아필링기를 300만 원에 도입, 보톡스·필러 시술 환자에게 +3만 원 관리 메뉴로 추가 제안하여, 월 20건 x 3만 원 = 60만 원 추가 매출. 5개월 만에 장비가 회수.</p>
      <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">이것을 넘어서는 기대를 갖고 수천만 원짜리 IPL이나 포텐자를 도입한다면, 그것은 치과의 미용시술 확장이 아니라 피부과와의 정면 경쟁이 된다.</p>
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
