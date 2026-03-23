const SUPABASE_URL = 'https://vrqlnjliqgqpsmkzklsf.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWxuamxpcWdxcHNta3prbHNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzU3NzA3NCwiZXhwIjoyMDg5MTUzMDc0fQ.YMXBZv-9lh_wwInoEUncZ1lQDafa3Gci2kzPtVv3R9M';

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

async function updateService(slug, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/services?slug=eq.${slug}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data)
  });
  const body = await res.json();
  if (!res.ok) {
    console.error(`ERROR updating ${slug}:`, JSON.stringify(body));
  } else {
    console.log(`✅ Updated: ${slug}`, body.length ? `(${body.length} row)` : '');
  }
  return body;
}

async function main() {
  await updateService('golden-signal-catch-strategy', {
    name: '골든시그널 캐치전략',
    category: '골든시그널',
    delivery_type: '방문',
    target_audience: '권역분석 완료 후 실행 전략이 필요한 치과 원장·경영자',
    description: '골든시그널 권역분석 데이터를 기반으로 5대 캐치전략과 핀셋 9모듈을 설계하여, 분석 결과를 실제 매출로 전환하는 맞춤 실행 전략 수립 서비스',
    meta_title: '골든시그널 캐치전략 | 데이터 기반 치과 성장 전략 - 메디스테이션',
    meta_description: '권역분석 데이터를 바탕으로 핀셋타게팅, 매출증대, 충성고객관리, 운영효율화, 디지털영토확장 5대 전략을 수립합니다. 분석에서 끝나지 않고 매출로 연결되는 실행 전략.',
    detail_content: `
<h2>분석을 매출로 전환하는 5대 캐치전략</h2>
<p>골든시그널 권역분석에서 도출된 데이터는 그 자체로 가치가 있지만, <strong>실행 전략 없는 분석은 숫자에 불과합니다.</strong> 캐치전략은 권역분석 결과를 5가지 핵심 영역의 실행 가능한 전략으로 전환하고, 핀셋 9모듈과 연결하여 실제 매출 성장을 이끌어냅니다.</p>

<div class="sc-highlight">
<p><strong>골든시그널 서비스 플로우:</strong> 권역분석(데이터 수집·분석) → <strong>캐치전략(전략 수립)</strong> → 핀셋마케팅(실행). 캐치전략은 '분석'과 '실행'을 잇는 핵심 브릿지입니다.</p>
</div>

<hr>

<h2>5대 캐치전략</h2>

<h3>1. 핀셋타게팅</h3>
<p>권역 내 핵심 고객군을 데이터로 정밀하게 선별하고, 고객별 최적 메시지·채널·타이밍을 설계합니다.</p>
<table>
<thead><tr><th>구분</th><th>내용</th></tr></thead>
<tbody>
<tr><td><strong>Grounded Data</strong></td><td>권역 인구통계, 소득분위, 라이프스타일 데이터, 경쟁 치과 포지셔닝 분석</td></tr>
<tr><td><strong>핀셋전략</strong></td><td>핵심 페르소나 도출 → 페르소나별 니즈 매핑 → 맞춤 메시지 설계 → 최적 접점 선정</td></tr>
<tr><td><strong>ACXION</strong></td><td>타겟 고객 리스트 생성, 채널별 콘텐츠 캘린더, A/B 테스트 설계</td></tr>
</tbody>
</table>

<h3>2. 매출증대</h3>
<p>객단가 방어와 Up-Selling 설계, 골든데이 이벤트를 통해 기존 환자 1인당 매출을 극대화합니다.</p>
<table>
<thead><tr><th>구분</th><th>내용</th></tr></thead>
<tbody>
<tr><td><strong>Grounded Data</strong></td><td>시술별 매출 비중, 객단가 추이, 재내원율, 시술 연계 패턴 분석</td></tr>
<tr><td><strong>핀셋전략</strong></td><td>급여/비급여 비율 최적화 → 시술 포트폴리오 재편 → Up-Selling 경로 설계 → 골든데이 프로모션</td></tr>
<tr><td><strong>ACXION</strong></td><td>시술 패키지 구성, 시즌별 프로모션 캘린더, 상담 스크립트 고도화</td></tr>
</tbody>
</table>

<h3>3. 충성고객관리</h3>
<p>한 번 내원한 환자를 충성 고객으로 전환하여, 재내원율과 소개 환자 비율을 높입니다.</p>
<table>
<thead><tr><th>구분</th><th>내용</th></tr></thead>
<tbody>
<tr><td><strong>Grounded Data</strong></td><td>환자 재내원 주기, 이탈 시점, 만족도 지표, 소개 환자 비율 분석</td></tr>
<tr><td><strong>핀셋전략</strong></td><td>리마인드 시스템 구축 → VIP 등급 설계 → 소개 프로그램 → 이탈 방지 알림</td></tr>
<tr><td><strong>ACXION</strong></td><td>리마인드콜 스크립트, VIP 혜택 설계, 환자 만족도 서베이, 소개 인센티브 프로그램</td></tr>
</tbody>
</table>

<h3>4. 운영효율화</h3>
<p>진료 프로세스와 스케줄을 최적화하여, 같은 시간에 더 높은 생산성을 달성합니다.</p>
<table>
<thead><tr><th>구분</th><th>내용</th></tr></thead>
<tbody>
<tr><td><strong>Grounded Data</strong></td><td>시간대별 내원 패턴, 진료 소요시간, 체어 가동률, 노쇼율 분석</td></tr>
<tr><td><strong>핀셋전략</strong></td><td>진료 밸런싱 → 스케줄 최적화 → 노쇼 최소화 → 스텝 업무 효율화</td></tr>
<tr><td><strong>ACXION</strong></td><td>예약 시스템 개선, 시간대별 시술 배치, 노쇼 방지 알림 체계, 업무 매뉴얼화</td></tr>
</tbody>
</table>

<h3>5. 디지털영토확장</h3>
<p>온라인에서 우리 치과의 인지도와 검색 점유율을 체계적으로 확장합니다.</p>
<table>
<thead><tr><th>구분</th><th>내용</th></tr></thead>
<tbody>
<tr><td><strong>Grounded Data</strong></td><td>검색량·키워드 경쟁도, 경쟁 치과 온라인 노출 현황, 채널별 유입 분석</td></tr>
<tr><td><strong>핀셋전략</strong></td><td>핵심 키워드 선점 → 채널별 콘텐츠 전략 → 로컬 바이럴 → 온라인 평판 관리</td></tr>
<tr><td><strong>ACXION</strong></td><td>네이버 플레이스 최적화, 블로그 키워드 전략, 커뮤니티 바이럴 실행, 유튜브 콘텐츠 기획</td></tr>
</tbody>
</table>

<hr>

<h2>핀셋 9모듈</h2>
<p>5대 캐치전략을 실행하는 구체적인 마케팅 무기입니다. 병원 상황에 따라 필요한 모듈만 선택하여 조합할 수 있습니다.</p>

<div class="sc-grid">
<div class="sc-card"><strong>네이버 플레이스</strong><p>지역 검색 1순위 채널. 플레이스 최적화로 상위노출을 유지하고 신환 유입의 첫 관문을 확보합니다.</p></div>
<div class="sc-card"><strong>브랜드 블로그</strong><p>브랜드 특화 지역 키워드로 블로그 상위노출. 전문성과 신뢰를 동시에 전달합니다.</p></div>
<div class="sc-card"><strong>커뮤니티 바이럴</strong><p>지역 맘카페, 아파트 커뮤니티 등 로컬 네트워크를 활용한 신뢰 기반 입소문 마케팅.</p></div>
<div class="sc-card"><strong>보험누락 컨설팅</strong><p>누락되고 있는 보험 청구 항목을 분석하여 추가 매출을 확보하는 수익 최적화 모듈.</p></div>
<div class="sc-card"><strong>리마인드콜</strong><p>미내원 환자를 체계적으로 관리하여 재내원을 유도하는 환자 리텐션 시스템.</p></div>
<div class="sc-card"><strong>DB 수집</strong><p>병원 주변 잠재 고객 데이터를 수집하고 접점을 확보하여 신환 파이프라인을 구축합니다.</p></div>
<div class="sc-card"><strong>유튜브</strong><p>원장님의 전문성을 영상으로 보여주는 콘텐츠 채널. 신뢰 구축과 브랜딩을 동시에.</p></div>
<div class="sc-card"><strong>아파트 EV-TV</strong><p>반경 3km 내 아파트 엘리베이터 TV 광고. 지역 주민에게 반복 노출로 인지도를 확보합니다.</p></div>
<div class="sc-card"><strong>타겟 문자</strong><p>정밀 타겟팅된 고객군에게 직접 도달하는 메시징. 이벤트·시술 안내에 즉각적인 반응을 유도합니다.</p></div>
</div>

<hr>

<h3>캐치전략 수립 프로세스</h3>
<ol>
<li><strong>데이터 리뷰</strong> — 권역분석 결과를 원장님과 함께 심층 리뷰</li>
<li><strong>현황 진단</strong> — 현재 병원의 매출 구조, 환자 구성, 마케팅 현황 파악</li>
<li><strong>목표 설정</strong> — 단기(3개월) / 중기(6개월) / 장기(12개월) 목표 수립</li>
<li><strong>전략 설계</strong> — 5대 캐치전략 중 우선순위 선정 및 핀셋 9모듈 조합</li>
<li><strong>실행 로드맵</strong> — 월별 실행 계획과 KPI 설정</li>
<li><strong>실행 연계</strong> — 핀셋마케팅, BI정립 등 후속 서비스와 자연스럽게 연결</li>
</ol>

<blockquote>
<p>분석만 하고 끝나는 컨설팅이 아닙니다. 권역분석 데이터를 기반으로 <strong>실행 가능한 전략</strong>을 수립하고, 핀셋 9모듈로 즉시 실행에 옮깁니다.</p>
</blockquote>

<div class="sc-highlight">
<p><strong>캐치전략은 '맞춤 설계'입니다.</strong> 모든 치과에 같은 전략을 적용하지 않습니다. 권역분석 데이터와 병원의 현재 상황을 교차 분석하여, 가장 높은 ROI를 낼 수 있는 전략 조합을 도출합니다.</p>
</div>
`,
    cta_text: '캐치전략 상담 신청',
    cta_link: '/contact'
  });

  console.log('\n=== CATCH STRATEGY UPDATED ===');
}

main().catch(err => { console.error(err); process.exit(1); });
