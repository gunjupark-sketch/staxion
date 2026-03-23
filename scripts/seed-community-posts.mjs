/**
 * 치과 소식 샘플 게시물 10개 시드 스크립트
 * 실행: node scripts/seed-community-posts.mjs
 */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vrqlnjliqgqpsmkzklsf.supabase.co";
const SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWxuamxpcWdxcHNta3prbHNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzU3NzA3NCwiZXhwIjoyMDg5MTUzMDc0fQ.YMXBZv-9lh_wwInoEUncZ1lQDafa3Gci2kzPtVv3R9M";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// -- 1) profiles 테이블에서 유저 하나 가져오기 --
const { data: profile, error: profileErr } = await supabase
  .from("profiles")
  .select("id")
  .limit(1)
  .single();

if (profileErr || !profile) {
  console.error("profiles 테이블에서 유저를 찾을 수 없음:", profileErr);
  process.exit(1);
}

const authorId = profile.id;
console.log(`author_id: ${authorId}`);

// -- 2) 카테고리 확인 --
const { data: cats } = await supabase
  .from("community_categories")
  .select("slug")
  .order("sort_order");

const categorySlugs = cats?.map((c) => c.slug) || [
  "free",
  "qna",
  "info",
  "review",
  "jobs",
];
console.log("카테고리:", categorySlugs.join(", "));

// -- 3) 샘플 데이터 --
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const posts = [
  {
    title: "보톡스 시술 후 환자 관리 팁 공유합니다",
    content:
      "보톡스 시술 후 48시간 이내 환자 관리가 가장 중요합니다. 시술 직후 눕지 않도록 안내하고, 시술 부위 마사지는 절대 금지입니다. 3일 후 경과 확인 전화를 드리면 환자 만족도가 크게 올라갑니다.",
    category: "info",
    author_name: "김민수",
  },
  {
    title: "필러 시술 시 주의사항 정리",
    content:
      "필러 시술 전 환자의 복용약 확인은 필수입니다. 특히 아스피린, 오메가3 등 혈전 관련 약물은 최소 1주 전 중단을 권고합니다. 시술 후 멍 최소화를 위해 냉찜질 프로토콜을 정리해두면 좋습니다.",
    category: "info",
    author_name: "이서연",
  },
  {
    title: "실리프팅 도입 3개월 차 후기",
    content:
      "실리프팅 장비를 도입한 지 3개월이 지났습니다. 초기 투자비 대비 월 매출 증가가 눈에 띄고, 기존 치과 환자의 미용시술 전환율이 약 15%입니다. 시술 시간이 짧아 오전 진료 사이에 소화할 수 있는 점이 큰 장점입니다.",
    category: "review",
    author_name: "박지훈",
  },
  {
    title: "미용치과 개원 준비 체크리스트",
    content:
      "미용치과 개원을 준비하면서 정리한 체크리스트입니다. 의료기기 허가, 시술실 인테리어, 마케팅 채널 세팅, 동의서 양식, 가격표 제작까지 빠짐없이 확인하세요. 특히 의료광고 심의는 반드시 사전에 받아야 합니다.",
    category: "free",
    author_name: "최유진",
  },
  {
    title: "치과 보톡스 가격 책정 노하우",
    content:
      "보톡스 가격 책정은 지역 시장 조사가 선행되어야 합니다. 단순 단가 경쟁보다는 패키지 구성(보톡스+스케일링, 보톡스+미백 등)으로 객단가를 높이는 전략이 효과적입니다. 초진 할인보다 재방문 혜택에 비용을 투자하세요.",
    category: "info",
    author_name: "정하은",
  },
  {
    title: "필러 합병증 대처 경험담",
    content:
      "지난달 필러 시술 후 혈관 폐색 의심 증상이 발생해 히알루로니다제를 긴급 투여한 경험을 공유합니다. 초기 대응이 30분 이내로 빨랐기 때문에 후유증 없이 해결됐습니다. 응급 프로토콜을 반드시 숙지하고 약품을 상비하세요.",
    category: "qna",
    author_name: "한승우",
  },
  {
    title: "미용시술 동의서 작성 가이드",
    content:
      "미용시술 동의서는 법적 분쟁 예방의 핵심입니다. 시술명, 예상 부작용, 시술 후 주의사항, 환불 정책을 명확히 기재해야 합니다. 대한치과의사협회에서 제공하는 표준 양식을 기반으로 원내 상황에 맞게 수정하세요.",
    category: "info",
    author_name: "윤서아",
  },
  {
    title: "치과위생사 미용시술 교육 과정 추천",
    content:
      "치과위생사 대상 미용시술 보조 교육 과정을 비교해봤습니다. 대한미용치과학회 인증 과정이 가장 체계적이고, 실습 비율이 높아 현장 적용이 빠릅니다. 교육 이수 후 원내 시술 보조 역량이 확실히 달라집니다.",
    category: "qna",
    author_name: "강도윤",
  },
  {
    title: "미용치과 마케팅 성공 사례",
    content:
      "인스타그램 릴스와 블로그 체험단을 병행해서 3개월 만에 미용시술 신환을 월 40명 이상 확보한 사례입니다. 핵심은 Before/After 사진의 퀄리티와 환자 후기 영상입니다. 광고비 대비 ROI가 가장 높은 채널은 인스타그램이었습니다.",
    category: "review",
    author_name: "임채원",
  },
  {
    title: "2026 미용치과 트렌드 전망",
    content:
      "2026년 미용치과 시장은 비침습 시술 수요가 계속 증가할 전망입니다. 특히 실리프팅과 스킨보톡스 수요가 급증하고 있고, AI 기반 시뮬레이션 상담 도구 도입도 확대되고 있습니다. 치과의 미용시술 영역이 점점 넓어지는 추세입니다.",
    category: "free",
    author_name: "송예준",
  },
];

// -- 4) Insert --
const rows = posts.map((p) => ({
  author_id: authorId,
  title: p.title,
  content: `<p>${p.content}</p>`,
  category: p.category,
  post_type: "community",
  view_count: rand(10, 500),
  is_published: true,
}));

const { data: inserted, error: insertErr } = await supabase
  .from("community_posts")
  .insert(rows)
  .select("id, title, view_count");

if (insertErr) {
  console.error("INSERT 실패:", insertErr);
  process.exit(1);
}

console.log(`\n${inserted.length}개 게시물 등록 완료:\n`);
inserted.forEach((r, i) => {
  console.log(`  ${i + 1}. [${r.view_count}뷰] ${r.title}`);
});
