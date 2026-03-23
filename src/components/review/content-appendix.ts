import { Section } from "./content-data";

export const appendixData: Section[] = [
  /* ───────────────────────── 부록 1: 시술별 수가 비교표 ───────────────────────── */
  {
    id: "app-01",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">부록 1: 시술별 수가 비교표</h2>
      <p class="text-[#333] leading-relaxed mb-4">데이터 출처: 강남언니·바비톡·여신티켓 3개 플랫폼 수집 데이터 (약 28,000건). 2025년 상반기 기준.</p>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">주의:</strong> 아래 수가는 플랫폼 게시 가격 기준. 실제 치과 공급가·원가와 다르다. 참고 지표로만 활용.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">이 표를 읽는 방법</h3>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li><span class="font-bold text-[#1a1a1a]">중간값을 기준으로 본다.</span> 저가·최저는 미끼 가격 포함 수치.</li>
        <li><span class="font-bold text-[#1a1a1a]">건수가 많은 행을 우선 참고.</span> 10건 이하는 표본 적어 편차 큼.</li>
        <li><span class="font-bold text-[#1a1a1a]">제품 등급별로 비교.</span> 같은 시술이라도 제품에 따라 5배 이상 차이.</li>
      </ul>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">보톡스</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">제품</th><th class="px-4 py-2 text-left font-medium">시술/부위</th><th class="px-4 py-2 text-left font-medium">건수</th><th class="px-4 py-2 text-left font-medium">저가(33%)</th><th class="px-4 py-2 text-left font-medium">중간값</th><th class="px-4 py-2 text-left font-medium">고가(33%)</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제오민</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사각턱</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">207</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">30,960</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">71,500</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">110,000</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제오민</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주름</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">148</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">53,726</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">77,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">109,439</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">코어톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사각턱</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">128</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">25,168</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">53,900</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">64,900</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제오민</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">116</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">109,972</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">167,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">242,000</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리즈톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사각턱</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">26</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7,026</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">12,800</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">29,675</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">TIP:</strong> 제오민(고가) 사각턱 중간값 71,500원 vs 리즈톡스(저가) 12,800원 = 약 5.6배 차이. 제품 등급이 수가를 결정한다.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">필러</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">제품</th><th class="px-4 py-2 text-left font-medium">시술/부위</th><th class="px-4 py-2 text-left font-medium">건수</th><th class="px-4 py-2 text-left font-medium">저가(33%)</th><th class="px-4 py-2 text-left font-medium">중간값</th><th class="px-4 py-2 text-left font-medium">고가(33%)</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">벨로테로</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기타</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">125</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">302,300</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">352,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">407,320</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">레스틸렌</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">110</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">275,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">319,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">373,030</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아띠에르</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">60</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">89,470</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">99,500</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">116,180</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">쥬비덤</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">56</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">330,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">376,500</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">427,350</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">TIP:</strong> 고가 3사(레스틸렌·벨로테로·쥬비덤) 중간값 319,000~376,500원 vs 중가(아띠에르) 99,500원 = 약 3~4배 격차.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">스킨부스터</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">제품</th><th class="px-4 py-2 text-left font-medium">건수</th><th class="px-4 py-2 text-left font-medium">단가기준</th><th class="px-4 py-2 text-left font-medium">저가(33%)</th><th class="px-4 py-2 text-left font-medium">중간값</th><th class="px-4 py-2 text-left font-medium">고가(33%)</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">쥬베룩</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,221</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1cc당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">89,960</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">132,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">240,800</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">리쥬란</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,073</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1cc당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">120,934</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">150,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">200,000</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">453</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1회당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">59,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">80,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">110,000</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">포텐자</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">309</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1회당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">128,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">165,000</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">203,416</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">리프팅 장비</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">장비</th><th class="px-4 py-2 text-left font-medium">건수</th><th class="px-4 py-2 text-left font-medium">단가기준</th><th class="px-4 py-2 text-left font-medium">중간값</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">울쎄라</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1,167</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100샷당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">362,550</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">슈링크</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">928</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100샷당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">46,000</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인모드</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">888</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1회당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">108,650</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">써마지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">488</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100샷당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">390,806</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">소프웨이브</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">89</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">100샷당</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">1,071,500</td></tr>
        </tbody>
      </table>
      <div class="bg-[#fdf2f5] border-l-4 border-[#D4567A] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">TIP:</strong> 단가 기준이 장비마다 다르므로(100샷당, 1회당, 10kJ당) 직접 비교 시 주의. 슈링크(46,000원) vs 울쎄라(362,550원) = 같은 100샷 기준 약 8배 차이.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">수가 활용 시 주의사항</h3>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>단가 기준이 제품·장비마다 다르다. 다른 기준의 수가를 단순 비교하면 오해.</li>
        <li>최저~최고 범위가 극단적으로 넓은 이유: 이벤트 묶음 할인, 체험가 등 포함.</li>
        <li>이 수가는 플랫폼 게시 가격. 수가 설정 시 원가·마진 분석 별도 필요.</li>
        <li>지역별 편차가 크다. 해당 지역의 경쟁 수가를 확인해야.</li>
      </ul>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 부록 2: 관련 법령·판례 목록 ───────────────────────── */
  {
    id: "app-02",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">부록 2: 관련 법령·판례 목록</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">핵심 판례</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">판례번호</th><th class="px-4 py-2 text-left font-medium">날짜</th><th class="px-4 py-2 text-left font-medium">핵심 내용</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">2013도850 (전원합의체)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2016.7.21</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과의사의 안면부 보톡스 시술은 면허 범위 내. 미용 목적이라 해서 달리 볼 것 아님</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">2013도7796</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2016.8.29</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과의사의 안면 프락셀 레이저 시술 무죄 확정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">2016도21314 (전원합의체)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2022.12</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">한의사 초음파 진단기기 면허 범위 내 인정. 2013도850 논리 인용</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">치과의사 vs 한의사 법적 조건 비교</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">치과의사</th><th class="px-4 py-2 text-left font-medium">한의사</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">대법원 무죄 확정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">처방권 없음</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판결 논리 확장 가능</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법원 유죄 확정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">레이저 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">대법원 무죄 확정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법원 유죄 확정</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전문의약품 처방</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">가능</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불가</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 부록 3: 응급 약품 비치 목록 ───────────────────────── */
  {
    id: "app-03",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">부록 3: 응급 약품 비치 목록</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">응급 약품·재료</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">약품명</th><th class="px-4 py-2 text-left font-medium">용도</th><th class="px-4 py-2 text-left font-medium">보관</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">히알루로니다제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA 필러 혈관 폐색 시 응급 용해</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">냉장 2~8도C</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">에피네프린</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아나필락시스 대응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 키트, 직사광선 차단</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">항히스타민제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경증 알레르기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 키트</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">항생제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">감염 대응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">약품 보관함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">생리식염수</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">희석·세척</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술실 상시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아이오핀 점안액</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 후 안검하수 대증 치료</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실온</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">응급 상황별 필수 약품 매칭</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">응급 상황</th><th class="px-4 py-2 text-left font-medium">1순위 약품</th><th class="px-4 py-2 text-left font-medium">골든타임</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 후 혈관 폐색</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">히알루로니다제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">4시간 이내 (즉각 투여 원칙)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">아나필락시스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">에피네프린</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">즉시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경증 알레르기</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">항히스타민제</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">증상 발현 즉시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미주신경 반응</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">(약품 불필요)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5~10분 자연 회복</td></tr>
        </tbody>
      </table>
      <!-- V-A03: 응급 대응 프로세스 -->
      <div class="bg-white border border-[#eee] rounded-lg p-6 mb-6">
        <h4 class="text-lg font-bold text-[#1a1a1a] text-center mb-6">응급 대응 프로세스</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <!-- 혈관폐색 -->
          <div>
            <div class="bg-[#D4567A] text-white text-xs font-bold text-center py-2 rounded-t-lg">혈관폐색</div>
            <div class="border border-[#eee] border-t-0 rounded-b-lg">
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">시술 중단</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">히알루로니다제 주입</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">관찰</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">응급이송</div>
            </div>
          </div>
          <!-- 아나필락시스 -->
          <div>
            <div class="bg-[#D4567A] text-white text-xs font-bold text-center py-2 rounded-t-lg">아나필락시스</div>
            <div class="border border-[#eee] border-t-0 rounded-b-lg">
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">119 신고</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">에피네프린 주입</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">기도 확보 (필요시)</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">응급이송</div>
            </div>
          </div>
          <!-- 미주신경반응 -->
          <div>
            <div class="bg-[#D4567A] text-white text-xs font-bold text-center py-2 rounded-t-lg">미주신경반응</div>
            <div class="border border-[#eee] border-t-0 rounded-b-lg">
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">눕히기</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">다리 올리기</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">5분 관찰</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">회복 확인</div>
            </div>
          </div>
          <!-- 감염 -->
          <div>
            <div class="bg-[#D4567A] text-white text-xs font-bold text-center py-2 rounded-t-lg">감염</div>
            <div class="border border-[#eee] border-t-0 rounded-b-lg">
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">항생제 투여</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">48시간 관찰</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border-b border-[#eee] px-3 py-2 text-xs text-[#1a1a1a] text-center">절개배농 (필요시)</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">전원</div>
            </div>
          </div>
        </div>
        <p class="text-[10px] text-[#999] text-center mt-4">모든 응급 상황에서는 즉시 119 신고 고려 / 응급약품(에피네프린, 히알루로니다제) 상비 필수</p>
      </div>

      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        <strong class="font-bold text-[#1a1a1a]">핵심 원칙:</strong> 히알루로니다제가 없으면 HA 필러 시술을 시작하지 않는다. 에피네프린이 없으면 주사 시술 전반의 안전망이 없는 것이다.
      </div>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 부록 4: 의료광고 심의 가이드라인 요약 ───────────────────────── */
  {
    id: "app-04",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">부록 4: 의료광고 심의 가이드라인 요약</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">채널별 심의 필요 여부 (2025년 기준)</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">채널</th><th class="px-4 py-2 text-left font-medium">심의 필요</th><th class="px-4 py-2 text-left font-medium">주의사항</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">네이버 키워드 광고</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">광고 소재 + 랜딩 페이지 모두</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인스타 유료 광고</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">B/A 사진 사용 시 특히 주의</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인스타 자체 콘텐츠</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">광고성 → 필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">순수 정보 제공·근황만 예외</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">네이버 블로그</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">광고성 → 필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정보성과 광고 구분이 핵심</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">카카오 채널 (기존 환자)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불특정 다수 발송 시에는 심의 대상</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">자체 도메인 홈페이지</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과장 표현·보장 문구 금지는 동일</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">원내 비치 브로셔</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">외부 배포 시 심의 대상</td></tr>
        </tbody>
      </table>

      <!-- V-A04: 광고심의 매트릭스 -->
      <div class="bg-white border border-[#eee] rounded-lg p-6 mb-6">
        <h4 class="text-lg font-bold text-[#1a1a1a] text-center mb-6">광고심의 매트릭스</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-[10px] md:text-xs border-collapse">
            <thead>
              <tr>
                <th class="px-2 py-2 bg-[#f5f5f5] text-[#1a1a1a] text-left font-bold border border-[#eee]"></th>
                <th class="px-2 py-2 bg-[#1a1a1a] text-white text-center font-bold border border-[#eee]">시술 소개</th>
                <th class="px-2 py-2 bg-[#1a1a1a] text-white text-center font-bold border border-[#eee]">가격 표시</th>
                <th class="px-2 py-2 bg-[#1a1a1a] text-white text-center font-bold border border-[#eee]">전후 사진</th>
                <th class="px-2 py-2 bg-[#1a1a1a] text-white text-center font-bold border border-[#eee]">이벤트/할인</th>
                <th class="px-2 py-2 bg-[#1a1a1a] text-white text-center font-bold border border-[#eee]">의사 프로필</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-2 py-2 bg-[#f5f5f5] font-bold text-[#1a1a1a] border border-[#eee]">네이버 플레이스</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
              </tr>
              <tr>
                <td class="px-2 py-2 bg-[#f5f5f5] font-bold text-[#1a1a1a] border border-[#eee]">인스타그램</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
              </tr>
              <tr>
                <td class="px-2 py-2 bg-[#f5f5f5] font-bold text-[#1a1a1a] border border-[#eee]">블로그</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
              </tr>
              <tr>
                <td class="px-2 py-2 bg-[#f5f5f5] font-bold text-[#1a1a1a] border border-[#eee]">유튜브</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
              </tr>
              <tr>
                <td class="px-2 py-2 bg-[#f5f5f5] font-bold text-[#1a1a1a] border border-[#eee]">카카오채널</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
              </tr>
              <tr>
                <td class="px-2 py-2 bg-[#f5f5f5] font-bold text-[#1a1a1a] border border-[#eee]">현수막/전단</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] bg-opacity-20 text-[#1a1a1a]">자가점검</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] bg-[#D4567A] text-white font-bold">심의 필수</td>
                <td class="px-2 py-2 text-center border border-[#eee] text-[#1a1a1a]">자유</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 범례 -->
        <div class="flex items-center justify-center gap-4 mt-4 text-[10px] text-[#999]">
          <span class="flex items-center gap-1"><span class="w-3 h-3 inline-block bg-[#D4567A]"></span> 심의 필수</span>
          <span class="flex items-center gap-1"><span class="w-3 h-3 inline-block bg-[#D4567A] opacity-20 border border-[#D4567A]"></span> 자가점검</span>
          <span class="flex items-center gap-1"><span class="w-3 h-3 inline-block border border-[#eee]"></span> 자유</span>
        </div>
        <p class="text-[10px] text-[#999] text-center mt-2">의료법 시행규칙 제29조의2 광고심의기준 참고</p>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">절대 금지 표현 (의료법 제56조)</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">금지 유형</th><th class="px-4 py-2 text-left font-medium">위반 예시</th><th class="px-4 py-2 text-left font-medium">올바른 대안</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 보장</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"반드시 효과", "100% 만족"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"개인차가 있을 수 있습니다" 표기</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">최상급 표현</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"국내 최고", "업계 1위"</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">객관적 데이터 기반 표현</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 체험담 광고</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대가 있는 경험담</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대가 없는 자발 후기만 가능</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">허위 B/A</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보정 사진, 동의 없는 사진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">무보정 + 서면 동의 + 비식별</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">미심의 행정처분 기준</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">위반 횟수</th><th class="px-4 py-2 text-left font-medium">처분</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1차</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">경고</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2차</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">업무정지 15일</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3차</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">업무정지 1개월</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 부록 5: 세무 처리 Q&A ───────────────────────── */
  {
    id: "app-05",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">부록 5: 세무 처리 Q&amp;A</h2>
      <p class="text-[#333] leading-relaxed mb-4">미용시술을 시작한 치과가 가장 많이 헷갈리는 세무 쟁점 20가지를 Q&amp;A로 정리. 세법은 개정이 잦으므로 반드시 담당 세무사와 확인할 것.</p>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">과세/면세 구분</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q1. 치과에서 미용 보톡스를 시술하면 부가세를 내야 하나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#D4567A]">그렇다.</span> 미용 목적 보톡스는 VAT 10% 과세 대상. (부가가치세법 제26조)</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q2. 같은 교근 보톡스인데 목적에 따라 과세/면세가 다른가?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#D4567A]">맞다.</span> 이갈이 치료 목적 = 면세, 사각턱 미용 목적 = 과세. 차트에 시술 목적 반드시 명시.</p>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">사업자 전환 및 부가세 신고</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q6. 미용시술을 시작하면 사업자등록을 바꿔야 하나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#D4567A]">그렇다.</span> 과·면세 겸업사업자로 전환. 개시일로부터 20일 이내 정정 신고.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q7. 부가세 신고는 언제?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. 1년에 2회. 1기(1~6월분): 7월 25일까지 / 2기(7~12월분): 다음 해 1월 25일까지.</p>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">현금영수증 & 매입세액공제</h3>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q9. 미용시술 현금 결제 시 현금영수증 필수?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. <span class="font-bold text-[#D4567A]">반드시 발행.</span> 치과는 의무발행 업종. 미발급 시 미발급 금액의 20% 가산세.</p>
      <p class="text-[#333] leading-relaxed mb-4"><span class="font-bold text-[#1a1a1a]">Q13. HIFU, 레이저 장비 구매 시 매입세액공제 되나?</span></p>
      <p class="text-[#333] leading-relaxed mb-4">A. 과세 사업(미용시술) 전용 장비는 전액 공제. 공통 사용 장비는 안분 계산. <span class="font-bold text-[#1a1a1a]">세금계산서 필수.</span></p>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">세무 리스크 관리 — 분기 1회 점검</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">점검 항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">과·면세 겸업 사업자등록 정정 완료 여부</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">카드 단말기·POS 과세/면세 구분 정상 작동</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">현금영수증 누락 건 없는지 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">미용 재료 구매 세금계산서 전량 수취·보관</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보험 진료 수납과 미용 시술 수납 완전 분리 상태</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 부록 6: 장비 구매 체크리스트 ───────────────────────── */
  {
    id: "app-06",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">부록 6: 장비 구매 체크리스트</h2>
      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술별 필요 장비·소모품 요약</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">시술</th><th class="px-4 py-2 text-left font-medium">장비 필요</th><th class="px-4 py-2 text-left font-medium">핵심 소모품</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불필요 (기존 치과 인프라)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">인슐린 시린지, 보톡스 바이알, 생리식염수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HA 필러 시린지, 캐뉼라, <span class="font-bold text-[#D4567A]">히알루로니다제 (필수)</span></td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불필요 (물광주사기 선택)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터 제품, 주사기+바늘</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">불필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">PDO/PLLA/PCL 실, 삽입 가이드 캐뉼라</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">HIFU</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">필요 (고가)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">카트리지 (샷 수 제한), 겔</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">RF</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">팁 교체 (1회용)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피코레이저</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">필요 (최고가)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">렌즈/필터 교체, 레이저 매질 유지보수</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">LDM</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">필요</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전용 겔</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">장비 구매 시 필수 확인 체크리스트</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">확인 항목</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">식약처 허가(인증) 여부 — 허가번호 확인</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">FDA 승인 여부 및 적응증 범위</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의료기기 등급 확인 (3등급 이상 = 의사 직접 시술)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">장비가 + 소모품 단가 + 연간 유지보수 총합</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">소모품 조달 안정성 (국내 재고, 납기)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">6</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">AS 조건 (보증 기간, 출장 수리, 대체 장비)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">7</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">교육 지원 (초기 교육 횟수, 카데바 실습 포함 여부)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">장비 감가상각 계산 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">9</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">BEP 시뮬레이션 완료</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">10</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">세금계산서 발급 가능 여부</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">11</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">렌탈/리스 vs 구매 비교 검토</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">설치 공간 및 전기 용량 확인</td></tr>
        </tbody>
      </table>
      <hr class="border-t border-[#eee] my-8" />
    `,
  },

  /* ───────────────────────── 부록 7: 동의서 템플릿 ───────────────────────── */
  {
    id: "app-07",
    html: `
      <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">부록 7: 동의서 템플릿</h2>
      <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-6 rounded-r">
        본 템플릿은 참고용이며, 실제 사용 시 의료법률 전문가의 검토를 권장합니다.
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">동의서 공통 구성 항목</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">#</th><th class="px-4 py-2 text-left font-medium">항목</th><th class="px-4 py-2 text-left font-medium">설명</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 인적사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">성명, 생년월일, 연락처</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2~3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술명 / 시술 부위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">정확한 명칭 + 구체적 부위</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 목적</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#1a1a1a]">미용/치료 명기 (과세/면세 판단 근거)</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">5~7</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사용 제품 / 예상 효과 / 시술 과정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">제품명, 제조사, 용량 등</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">8</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">부작용·합병증</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술별 상이. 반드시 명시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">9~11</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대안 시술 / 비용 / 주의사항</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">VAT 포함 여부, 금기사항</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">12~13</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">사진 촬영 동의 / 마케팅 활용 동의</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">별도 항목. 마케팅은 선택사항</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">14~15</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 서명 / 시술자 서명</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"본인이 직접 상기 내용을 설명하였음" 문구</td></tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">시술별 동의서 핵심 포인트</h3>
      <table class="w-full text-sm border-collapse mb-6">
        <thead class="bg-[#1a1a1a] text-white">
          <tr><th class="px-4 py-2 text-left font-medium">시술</th><th class="px-4 py-2 text-left font-medium">핵심 부작용 명시 항목</th><th class="px-4 py-2 text-left font-medium">특별 고지</th></tr>
        </thead>
        <tbody>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안검하수(눈꺼풀 처짐), 좌우 비대칭</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">효과 3~6개월 지속. 재시술 필요</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold text-[#D4567A]">혈관폐색·실명 위험 (극히 드묾이나 중대)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">응급 시 히알루로니다제 투여 동의 포함</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주사 자국, 일시적 울퉁불퉁</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">프로그램 환불 기준 명시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">딤플(피부 함몰), 실 돌출, 감염</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면거상술 수준 변화 아님 명시</td></tr>
          <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">레이저/장비</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">색소침착, 화상 (드묾)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">체내 금속 삽입물 확인 (RF)</td></tr>
        </tbody>
      </table>

      <!-- V-A05: 동의서 운영 프로세스 -->
      <div class="bg-white border border-[#eee] rounded-lg p-6 mb-6">
        <h4 class="text-lg font-bold text-[#1a1a1a] text-center mb-6">동의서 운영 프로세스</h4>
        <!-- 3 Phase 가로 플로우 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Phase 1: 시술 전 -->
          <div>
            <div class="bg-[#D4567A] text-white text-sm font-bold text-center py-2 rounded-t-lg">시술 전</div>
            <div class="border border-[#eee] border-t-0 rounded-b-lg p-3 space-y-2">
              <div class="border border-[#eee] rounded px-3 py-2 text-xs text-[#1a1a1a] text-center">동의서 양식 전달</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border border-[#eee] rounded px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">환자 자필 서명</div>
            </div>
          </div>
          <!-- Phase 2: 시술 중 -->
          <div>
            <div class="bg-[#D4567A] text-white text-sm font-bold text-center py-2 rounded-t-lg">시술 중</div>
            <div class="border border-[#eee] border-t-0 rounded-b-lg p-3 space-y-2">
              <div class="border border-[#eee] rounded px-3 py-2 text-xs text-[#1a1a1a] text-center">차트 기록</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border border-[#eee] rounded px-3 py-2 text-xs text-[#1a1a1a] text-center">사진 촬영 (전후)</div>
            </div>
          </div>
          <!-- Phase 3: 시술 후 -->
          <div>
            <div class="bg-[#D4567A] text-white text-sm font-bold text-center py-2 rounded-t-lg">시술 후</div>
            <div class="border border-[#eee] border-t-0 rounded-b-lg p-3 space-y-2">
              <div class="border border-[#eee] rounded px-3 py-2 text-xs text-[#1a1a1a] text-center font-bold">동의서 보관 (5년)</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border border-[#eee] rounded px-3 py-2 text-xs text-[#1a1a1a] text-center">사본 환자 제공</div>
              <div class="text-center text-[#999] text-[10px]">&#8595;</div>
              <div class="border border-[#eee] rounded px-3 py-2 text-xs text-[#1a1a1a] text-center">전자 백업</div>
            </div>
          </div>
        </div>
        <!-- 하단 설명 -->
        <div class="mt-4 text-[10px] text-[#999] space-y-1">
          <p><span class="font-bold text-[#1a1a1a]">원장 구두 설명 동반</span></p>
          <p>시술 전: 예상되는 결과, 부작용, 주의사항 설명</p>
          <p>시술 중: 차트에 시술 내용, 시술자, 재료, 용량 기록</p>
          <p>시술 후: 사진 촬영(동의 확인), 5년 보관(의료법), 전자백업</p>
        </div>
        <!-- 필수 안내 -->
        <div class="bg-[#f5f5f5] border border-[#eee] rounded-lg p-3 mt-4 text-center">
          <p class="text-xs font-bold text-[#1a1a1a]">필수: 동의서는 환자 자필 서명이어야 하며, 녹음/영상 촬영도 동의서 필요</p>
          <p class="text-[10px] text-[#999] mt-1">위반 시 의료법 시행규칙 제18조 위반으로 행정처분 가능</p>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4 mt-8">동의서 운영 가이드</h3>
      <ul class="list-disc pl-6 mb-4 space-y-1 text-[#333]">
        <li>모든 침습 시술 전 반드시 서면 동의서 수령</li>
        <li>비침습 시술(HIFU·레이저)도 분쟁 예방 차원에서 수령 권장</li>
        <li><span class="font-bold text-[#1a1a1a]">원장이 직접 설명</span> 후 서명. 스탭이 대신 설명하면 법적 효력 약화</li>
        <li>동의서 원본 <span class="font-bold text-[#1a1a1a]">5년간 보관</span> (의료법상 진료기록 보존 기간)</li>
        <li>사진 동의와 마케팅 동의는 분리. 마케팅 동의 강요 금지</li>
        <li>시술 목적(미용/치료) 기재는 과세/면세 핵심 근거</li>
      </ul>
    `,
  },
];
