/**
 * 메디포스트(posts) 샘플 게시물 5개 시드
 * 실행: node scripts/seed-posts.mjs
 */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vrqlnjliqgqpsmkzklsf.supabase.co";
const SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWxuamxpcWdxcHNta3prbHNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzU3NzA3NCwiZXhwIjoyMDg5MTUzMDc0fQ.YMXBZv-9lh_wwInoEUncZ1lQDafa3Gci2kzPtVv3R9M";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// -- 유틸 --
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 최근 7일 내 랜덤 ISO 날짜 */
function recentDate() {
  const now = Date.now();
  const offset = rand(0, 7 * 24 * 60 * 60 * 1000);
  return new Date(now - offset).toISOString();
}

// -- 샘플 데이터 --
const posts = [
  {
    title: "2026 미용치과 시장 동향 리포트",
    slug: "2026-beauty-dental-market-report",
    category: "column",
    author_name: "김도현",
    excerpt:
      "2026년 미용치과 시장은 비침습 시술 중심으로 재편되고 있다. 보톡스, 필러, 실리프팅 3대 시술이 전체 매출의 68%를 차지하며 전년 대비 23% 성장세를 보인다.",
    content:
      "<p>2026년 미용치과 시장은 비침습 시술 중심으로 재편되고 있다. 보톡스, 필러, 실리프팅 3대 시술이 전체 매출의 68%를 차지하며 전년 대비 23% 성장세를 보인다.</p><p>특히 30~40대 여성 환자층의 재방문율이 78%에 달하며, 단순 시술보다 정기 관리 프로그램 수요가 급증하고 있다. AI 기반 시뮬레이션 상담 도구를 도입한 치과의 전환율이 그렇지 않은 곳 대비 2.4배 높은 것으로 나타났다.</p>",
    cover_image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400",
  },
  {
    title: "보톡스 시술 전후 비교 사진 가이드",
    slug: "botox-before-after-photo-guide",
    category: "blog",
    author_name: "이수빈",
    excerpt:
      "환자 신뢰를 높이는 전후 비교 사진 촬영 프로토콜. 조명, 앵글, 타이밍 3요소만 지키면 마케팅 효과가 극대화된다.",
    content:
      "<p>보톡스 시술 전후 비교 사진은 환자 상담의 핵심 무기다. 동일 조명(5600K 자연광 조명), 동일 앵글(정면/45도/측면 3컷), 동일 배경(무채색)을 기본으로 세팅해야 한다.</p><p>촬영 타이밍은 시술 직전, 2주 후, 4주 후 총 3회가 이상적이다. 특히 2주 후 사진에서 가장 뚜렷한 변화를 확인할 수 있어 마케팅 소재로 활용도가 높다. 환자 동의서는 촬영 전 반드시 서면으로 받아둘 것.</p>",
    cover_image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400",
  },
  {
    title: "치과의사를 위한 필러 해부학 총정리",
    slug: "filler-anatomy-guide-for-dentists",
    category: "column",
    author_name: "박준혁",
    excerpt:
      "안면부 필러 시술 시 반드시 숙지해야 할 혈관 해부학과 위험 구역(danger zone) 5곳을 정리했다.",
    content:
      "<p>필러 시술의 안전성은 해부학적 이해에서 시작된다. 특히 안면동맥(facial artery)과 눈동맥(ophthalmic artery) 분지의 주행 경로를 정확히 파악해야 혈관 폐색 사고를 예방할 수 있다.</p><p>위험 구역 5곳: 미간(glabella), 비순구(nasolabial fold), 코날개(alar base), 관자놀이(temporal fossa), 눈밑(infraorbital area). 각 부위별 주입 깊이와 추천 캐뉼라 규격, 응급 히알루로니다제 프로토콜까지 한 번에 정리했다.</p>",
    cover_image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400",
  },
  {
    title: "미용치과 개원 1년차 매출 분석",
    slug: "beauty-dental-first-year-revenue-analysis",
    category: "blog",
    author_name: "최예린",
    excerpt:
      "미용치과 개원 1년차 월평균 매출 4,200만원 달성까지의 과정을 숫자로 공개한다.",
    content:
      "<p>개원 첫 달 매출 1,800만원에서 12개월 차 5,600만원까지, 월별 매출 추이와 시술별 기여도를 분석했다. 초기 3개월은 보톡스 단일 시술 위주였으나, 6개월 차부터 필러와 실리프팅을 추가하면서 객단가가 2.1배 상승했다.</p><p>마케팅비는 매출의 12~15%를 유지했고, 인스타그램 리드가 전체 신환의 54%를 차지했다. 재방문율 72%를 달성한 핵심은 3개월 정기 관리 패키지 도입이었다.</p>",
    cover_image: null,
  },
  {
    title: "실리프팅 시술 프로토콜 업데이트",
    slug: "thread-lifting-protocol-update-2026",
    category: "news",
    author_name: "정민재",
    excerpt:
      "2026년 최신 실리프팅 시술 프로토콜. 실 종류별 적응증과 시술 후 관리 지침을 업데이트했다.",
    content:
      "<p>2026년 실리프팅 프로토콜의 핵심 변경 사항은 PDO/PCL/PLLA 실 종류별 적응증 세분화다. PDO는 경도 처짐, PCL은 중등도, PLLA는 볼륨 보충이 필요한 케이스에 각각 최적화된다.</p><p>시술 후 관리는 48시간 내 과도한 표정 사용 자제, 1주간 하드한 운동 금지, 2주 후 첫 경과 확인이 기본이다. 시술 시간은 부위별 20~40분이며, 국소마취 하에 진행한다. 환자 만족도 조사 결과 87%가 재시술 의향을 밝혔다.</p>",
    cover_image: null,
  },
];

// -- Insert --
const rows = posts.map((p) => ({
  title: p.title,
  slug: p.slug,
  category: p.category,
  author_name: p.author_name,
  excerpt: p.excerpt,
  content: p.content,
  cover_image: p.cover_image,
  is_published: true,
  published_at: recentDate(),
  view_count: rand(50, 800),
}));

try {
  const { data: inserted, error } = await supabase
    .from("posts")
    .insert(rows)
    .select("id, title, slug, view_count, published_at");

  if (error) {
    console.error("INSERT 실패:", error);
    process.exit(1);
  }

  console.log(`\n${inserted.length}개 메디포스트 등록 완료:\n`);
  inserted.forEach((r, i) => {
    console.log(
      `  ${i + 1}. [${r.view_count}뷰] ${r.title} (${r.slug}) — ${r.published_at}`
    );
  });
} catch (err) {
  console.error("스크립트 오류:", err);
  process.exit(1);
}
