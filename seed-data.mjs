const SUPABASE_URL = 'https://vrqlnjliqgqpsmkzklsf.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWxuamxpcWdxcHNta3prbHNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzU3NzA3NCwiZXhwIjoyMDg5MTUzMDc0fQ.YMXBZv-9lh_wwInoEUncZ1lQDafa3Gci2kzPtVv3R9M';

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

async function insert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });
  const body = await res.json();
  if (!res.ok) {
    console.error(`ERROR inserting into ${table}:`, JSON.stringify(body));
    throw new Error(`Failed: ${table}`);
  }
  return body;
}

async function main() {
  // 1. Product Categories
  console.log('=== Inserting product_categories ===');
  const categories = [
    { name: '메디컨시어지', slug: 'medi-concierge', sort_order: 1 },
    { name: '디자인정렬', slug: 'design-alignment', sort_order: 2 },
    { name: '핀셋모듈', slug: 'pincet-module', sort_order: 3 },
    { name: '장비/재료', slug: 'equipment-materials', sort_order: 4 },
    { name: '메디컬세미나', slug: 'medical-seminar', sort_order: 5 },
  ];
  const catResults = await insert('product_categories', categories);
  console.log(`Inserted ${catResults.length} categories`);

  // Build category ID map
  const catMap = {};
  for (const c of catResults) {
    catMap[c.name] = c.id;
  }
  console.log('Category IDs:', catMap);

  // 2. Products
  console.log('\n=== Inserting products ===');

  const products = [
    // 메디컨시어지
    { category_id: catMap['메디컨시어지'], name: '미용치과컨설팅', slug: 'beauty-dental-consulting', price: 5000000, is_published: true, is_digital: true, sort_order: 1 },
    { category_id: catMap['메디컨시어지'], name: 'BI정립', slug: 'bi-establishment', price: 1500000, is_published: true, is_digital: true, sort_order: 2 },
    { category_id: catMap['메디컨시어지'], name: '골든시그널 권역분석X캐치전략', slug: 'golden-signal-analysis-catch-strategy', price: 3000000, is_published: true, is_digital: true, sort_order: 3 },
    { category_id: catMap['메디컨시어지'], name: '메디컨시어지 패키지', slug: 'medi-concierge-package', price: 0, is_published: true, is_digital: true, sort_order: 4, description: '가격문의' },

    // 디자인정렬
    { category_id: catMap['디자인정렬'], name: '치과전용 배너(협회인증)', slug: 'dental-banner-certified', price: 55000, is_published: true, sort_order: 1 },
    { category_id: catMap['디자인정렬'], name: '개원 서식 패키지(18종)', slug: 'opening-form-package-18', price: 1500000, is_published: true, sort_order: 2 },
    { category_id: catMap['디자인정렬'], name: '리플렛', slug: 'leaflet', price: 180000, is_published: true, sort_order: 3 },
    { category_id: catMap['디자인정렬'], name: '포스터', slug: 'poster', price: 30000, is_published: true, sort_order: 4 },
    { category_id: catMap['디자인정렬'], name: '의료진 명함', slug: 'medical-staff-namecard', price: 30000, is_published: true, sort_order: 5 },
    { category_id: catMap['디자인정렬'], name: '병원명함', slug: 'hospital-namecard', price: 50000, is_published: true, sort_order: 6 },
    { category_id: catMap['디자인정렬'], name: '명찰', slug: 'name-badge', price: 10000, is_published: true, sort_order: 7 },

    // 핀셋모듈
    { category_id: catMap['핀셋모듈'], name: '정밀 타겟 문자 메세징', slug: 'precision-target-messaging', price: 260, is_published: true, is_digital: true, sort_order: 1 },
    { category_id: catMap['핀셋모듈'], name: '아파트 EV-TV 광고', slug: 'apartment-ev-tv-ad', price: 19500, is_published: true, is_digital: true, sort_order: 2 },
    { category_id: catMap['핀셋모듈'], name: '의학 인터뷰 상위 보장', slug: 'medical-interview-top-guaranteed', price: 2600000, is_published: true, is_digital: true, sort_order: 3 },
    { category_id: catMap['핀셋모듈'], name: '병원 앞 DB 수집 활동', slug: 'hospital-db-collection', price: 10920000, is_published: true, is_digital: true, sort_order: 4 },
    { category_id: catMap['핀셋모듈'], name: '리마인드 콜 60명 보장', slug: 'remind-call-60-guaranteed', price: 2340000, is_published: true, is_digital: true, sort_order: 5 },
    { category_id: catMap['핀셋모듈'], name: '지역 커뮤니티 바이럴', slug: 'local-community-viral', price: 91000, is_published: true, is_digital: true, sort_order: 6 },
    { category_id: catMap['핀셋모듈'], name: '브랜드 블로그 X 상위 보장', slug: 'brand-blog-top-guaranteed', price: 1027000, is_published: true, is_digital: true, sort_order: 7 },
    { category_id: catMap['핀셋모듈'], name: '플레이스 상위 보장', slug: 'place-top-guaranteed', price: 2600000, is_published: true, is_digital: true, sort_order: 8 },

    // 장비/재료
    { category_id: catMap['장비/재료'], name: '루세라 3종 세트(10대 한정)', slug: 'lucera-3set-limited-10', price: 28000000, sale_price: 18500000, is_published: true, sort_order: 1 },
    { category_id: catMap['장비/재료'], name: 'Lucera C', slug: 'lucera-c', price: 1800000, sale_price: 1500000, is_published: true, sort_order: 2 },
    { category_id: catMap['장비/재료'], name: 'Lucera 10s', slug: 'lucera-10s', price: 7700000, sale_price: 5500000, is_published: true, sort_order: 3 },
    { category_id: catMap['장비/재료'], name: 'Lucera V', slug: 'lucera-v', price: 18500000, sale_price: 15800000, is_published: true, sort_order: 4 },
    { category_id: catMap['장비/재료'], name: 'ULTIHGT', slug: 'ultihgt', price: 5500000, is_published: true, sort_order: 5 },
    { category_id: catMap['장비/재료'], name: '리프팅실(miniting)', slug: 'lifting-thread-miniting', price: 33880, is_published: true, sort_order: 6 },
  ];

  // Normalize all product objects to have the same keys with proper defaults
  const defaults = { description: '', sale_price: null, is_digital: false, image_url: null, stock: null };
  const allKeys = new Set();
  products.forEach(p => Object.keys(p).forEach(k => allKeys.add(k)));
  const normalized = products.map(p => {
    const obj = {};
    for (const k of allKeys) {
      obj[k] = p[k] !== undefined ? p[k] : (defaults[k] !== undefined ? defaults[k] : null);
    }
    return obj;
  });

  const prodResults = await insert('products', normalized);
  console.log(`Inserted ${prodResults.length} products`);

  // 3. Services
  console.log('\n=== Inserting services ===');
  const services = [
    { name: '골든시그널 권역분석', slug: 'golden-signal-area-analysis', description: '치과 위치 기반 6가지 분석: 권역구조, 업종소비흐름, 고객군세분화, 지역미래가치, 온라인경쟁, 병원전략', sort_order: 1, is_published: true },
    { name: '골든시그널 캐치전략', slug: 'golden-signal-catch-strategy', description: '분석 기반 맞춤 전략: 초정밀타겟팅, 골든데이이벤트, 진료밸런싱, 객단가방어, Up-Selling, 디지털영토확장', sort_order: 2, is_published: true },
    { name: 'BI(브랜드정체성) 정립', slug: 'bi-brand-identity', description: '골든시그널 기반 브랜드 네이밍, 브랜드 DNA(정체성/철학/가치/차별점), 미션/비전/키워드 설계', sort_order: 3, is_published: true },
    { name: '디자인 정렬', slug: 'design-alignment', description: 'BI를 시각적으로 체험하게 만드는 단계: 로고심볼, 온오프라인 톤앤매너, 홈페이지, 서식류, 공간디자인, 사인에이지', sort_order: 4, is_published: true },
    { name: '핀셋마케팅', slug: 'pincet-marketing', description: '골든시그널 기반 실행형 9모듈 마케팅: 플레이스/블로그 상위노출, 커뮤니티 바이럴, 보험누락컨설팅, 리마인드콜, DB수집, 인터뷰, EV-TV광고, 타겟메시징', sort_order: 5, is_published: true },
    { name: '세미나 기획', slug: 'seminar-planning', description: '연자 육성 프로그램 + 세미나 기획 대행: 교육기획/설계, 집객/프로모션, 세미나운영, 사후관리까지 원스톱', sort_order: 6, is_published: true },
  ];

  const svcResults = await insert('services', services);
  console.log(`Inserted ${svcResults.length} services`);

  // 4. Seminars
  console.log('\n=== Inserting seminars ===');
  const seminars = [
    { title: '미용치과 기초 세미나', slug: 'beauty-dental-basic-seminar', description: '치과 내 미용 시술 도입을 위한 임상 지식과 노하우 교육. 실리프팅, 보톡스, 필러 시술의 통합적 이해. 이론/디자인/라이브시연/Q&A 4파트 구성.', price: 0, is_published: true },
    { title: '미용치과 전문가 과정', slug: 'beauty-dental-expert-course', description: '실리프팅 심화 커리큘럼: Lateral/Mid/Lower/Upper face Lifting, Nose Lifting/Reshaping, Neck Lifting 등 부위별 전문 과정.', price: 0, is_published: true },
    { title: '미용장비 세미나', slug: 'beauty-equipment-seminar', description: '최신 미용 장비 도입 가이드. LDM, HIFU 등 장비 선택/활용법, 기존 시술과의 시너지 장비 조합, 비급여 진료항목 차별화 전략.', price: 110000, is_published: true },
    { title: '한국미용치과협회 학술포럼', slug: 'kada-academic-forum', description: '최신 실리프팅 임상 데이터 및 미용치과 트렌드 습득. 전/후 케이스 발표, 현업 전문가 네트워킹, 협회 가입 안내 및 지원사업 정보.', price: 0, is_published: true },
  ];

  const semResults = await insert('seminars', seminars);
  console.log(`Inserted ${semResults.length} seminars`);

  console.log('\n=== ALL DONE ===');
}

main().catch(err => { console.error(err); process.exit(1); });
