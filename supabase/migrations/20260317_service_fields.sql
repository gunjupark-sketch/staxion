-- ============================================================
-- 상품/세미나/서비스 편집 폼 확장 + 법적 필수 항목 + SEO
-- ============================================================

-- ── 상품 (products) ──
ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS mobile_image_url text,
  ADD COLUMN IF NOT EXISTS shipping_fee int DEFAULT 0,
  ADD COLUMN IF NOT EXISTS shipping_method text DEFAULT '택배',
  ADD COLUMN IF NOT EXISTS estimated_delivery text,
  ADD COLUMN IF NOT EXISTS manufacturer text,
  ADD COLUMN IF NOT EXISTS usage_terms text,
  ADD COLUMN IF NOT EXISTS delivery_method text,
  ADD COLUMN IF NOT EXISTS system_requirements text,
  ADD COLUMN IF NOT EXISTS refund_policy text,
  ADD COLUMN IF NOT EXISTS cs_contact text,
  ADD COLUMN IF NOT EXISTS options jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS meta_title text,
  ADD COLUMN IF NOT EXISTS meta_description text;

-- ── 세미나 (seminars) ──
ALTER TABLE public.seminars
  ADD COLUMN IF NOT EXISTS mobile_image_url text,
  ADD COLUMN IF NOT EXISTS seminar_type text DEFAULT '오프라인',
  ADD COLUMN IF NOT EXISTS end_date timestamptz,
  ADD COLUMN IF NOT EXISTS registration_deadline timestamptz,
  ADD COLUMN IF NOT EXISTS online_link text,
  ADD COLUMN IF NOT EXISTS early_bird_price int,
  ADD COLUMN IF NOT EXISTS early_bird_deadline timestamptz,
  ADD COLUMN IF NOT EXISTS curriculum jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS supplies text,
  ADD COLUMN IF NOT EXISTS provider text,
  ADD COLUMN IF NOT EXISTS eligibility text,
  ADD COLUMN IF NOT EXISTS refund_policy text,
  ADD COLUMN IF NOT EXISTS cancel_method text,
  ADD COLUMN IF NOT EXISTS cs_contact text,
  ADD COLUMN IF NOT EXISTS meta_title text,
  ADD COLUMN IF NOT EXISTS meta_description text;

-- ── 서비스 (services) ──
ALTER TABLE public.services
  ADD COLUMN IF NOT EXISTS mobile_image_url text,
  ADD COLUMN IF NOT EXISTS image_url text,
  ADD COLUMN IF NOT EXISTS category text,
  ADD COLUMN IF NOT EXISTS price int,
  ADD COLUMN IF NOT EXISTS price_unit text DEFAULT '원',
  ADD COLUMN IF NOT EXISTS delivery_type text DEFAULT '오프라인',
  ADD COLUMN IF NOT EXISTS duration text,
  ADD COLUMN IF NOT EXISTS target_audience text,
  ADD COLUMN IF NOT EXISTS cta_text text DEFAULT '문의하기',
  ADD COLUMN IF NOT EXISTS cta_link text DEFAULT '/contact',
  ADD COLUMN IF NOT EXISTS provider text,
  ADD COLUMN IF NOT EXISTS eligibility text,
  ADD COLUMN IF NOT EXISTS refund_policy text,
  ADD COLUMN IF NOT EXISTS cancel_method text,
  ADD COLUMN IF NOT EXISTS cs_contact text,
  ADD COLUMN IF NOT EXISTS disclaimer text,
  ADD COLUMN IF NOT EXISTS meta_title text,
  ADD COLUMN IF NOT EXISTS meta_description text,
  ADD COLUMN IF NOT EXISTS deleted_at timestamptz;

-- ── 더미 데이터: 상품 1개 ──
INSERT INTO public.products (
  name, slug, description, detail_content, price, sale_price, image_url, mobile_image_url,
  is_published, is_digital, stock, category_id,
  shipping_fee, shipping_method, estimated_delivery,
  manufacturer, usage_terms, delivery_method, system_requirements,
  refund_policy, cs_contact, options, meta_title, meta_description
) VALUES (
  '미용치과 도입 실무 가이드북',
  'beauty-dental-guidebook',
  '치과에서 미용시술을 시작하는 데 필요한 모든 것을 담은 실무 가이드북입니다.',
  '<h2>가이드북 소개</h2><p>보톡스, 필러 등 미용시술을 치과에 도입하려는 원장님을 위한 실전 매뉴얼입니다.</p><h3>포함 내용</h3><ul><li>시술별 프로토콜 및 SOP</li><li>가격 정책 수립 가이드</li><li>마케팅 전략 및 환자 응대법</li><li>법적 근거 및 주의사항</li></ul><p>PDF 형태로 제공되며, 구매 즉시 다운로드 가능합니다.</p>',
  198000,
  149000,
  'https://placehold.co/800x600/e8f5e9/2e7d32?text=Guidebook+PC',
  'https://placehold.co/400x400/e8f5e9/2e7d32?text=Guidebook+Mobile',
  true,
  true,
  NULL,
  NULL,
  0,
  '디지털',
  '결제 완료 즉시',
  '(주)더스테이션',
  '구매일로부터 영구 열람 가능 / 1인 1계정 사용',
  'PDF 다운로드 (마이페이지에서 다운로드)',
  'PDF 뷰어 (Adobe Acrobat Reader 등)',
  '디지털 콘텐츠 특성상, 다운로드 개시 후에는 청약철회가 제한됩니다 (전자상거래법 제17조). 다운로드 전에는 결제일로부터 7일 이내 전액 환불 가능합니다.',
  '0502-5552-0492 / help@medistaxion.com',
  '[]'::jsonb,
  '미용치과 도입 실무 가이드북 | MEDI STAXION',
  '보톡스, 필러 등 미용시술을 치과에 도입하기 위한 실전 매뉴얼. PDF 즉시 다운로드.'
)
ON CONFLICT (slug) DO NOTHING;

-- ── 더미 데이터: 세미나 1개 ──
INSERT INTO public.seminars (
  title, slug, description, detail_content, price, image_url, mobile_image_url,
  date, end_date, location, max_seats, is_published,
  seminar_type, registration_deadline, online_link,
  early_bird_price, early_bird_deadline,
  curriculum, supplies,
  provider, eligibility, refund_policy, cancel_method, cs_contact,
  meta_title, meta_description
) VALUES (
  '미용치과 실전 마스터 클래스 1기',
  'beauty-dental-masterclass-1',
  '보톡스·필러 시술부터 경영 전략까지, 미용치과 도입의 A to Z를 하루에 완성하는 집중 세미나입니다.',
  '<h2>세미나 소개</h2><p>치과의사를 위한 미용시술 실전 교육 프로그램입니다. 이론과 실습을 병행하며, 현장에서 바로 적용할 수 있는 노하우를 전수합니다.</p><h3>이런 분께 추천</h3><ul><li>미용시술 도입을 고민 중인 치과 원장</li><li>시술은 하지만 체계가 부족한 치과</li><li>매출 다각화를 원하는 개원의</li></ul>',
  550000,
  'https://placehold.co/800x600/e3f2fd/1565c0?text=Seminar+PC',
  'https://placehold.co/400x400/e3f2fd/1565c0?text=Seminar+Mobile',
  '2026-05-15 10:00:00+09',
  '2026-05-15 18:00:00+09',
  '서울 강남구 테헤란로 (상세 장소 추후 안내)',
  30,
  true,
  '오프라인',
  '2026-05-10 23:59:59+09',
  NULL,
  450000,
  '2026-04-30 23:59:59+09',
  '[{"time":"10:00-11:30","content":"[이론] 미용치과 시장 분석 및 도입 전략"},{"time":"11:30-12:30","content":"[이론] 보톡스·필러 시술 프로토콜"},{"time":"12:30-13:30","content":"점심 식사"},{"time":"13:30-15:00","content":"[실습] 보톡스 주입 실습 (마네킹)"},{"time":"15:00-16:30","content":"[실습] 필러 주입 실습 (마네킹)"},{"time":"16:30-17:30","content":"[강의] 가격 정책·마케팅·환자 상담법"},{"time":"17:30-18:00","content":"Q&A 및 네트워킹"}]'::jsonb,
  '필기도구 / 개인 노트북 (선택)',
  '(주)더스테이션',
  '치과의사 면허 소지자 (면허 확인 필수)',
  '• 세미나 개강일 7일 전까지: 전액 환불\n• 세미나 개강일 3일 전까지: 70% 환불\n• 세미나 개강일 1일 전까지: 50% 환불\n• 세미나 당일 및 이후: 환불 불가\n\n(전자상거래법 제17조에 따른 환불 규정)',
  '마이페이지 > 수강이력에서 취소 신청 또는 고객센터 연락',
  '0502-5552-0492 / help@medistaxion.com',
  '미용치과 실전 마스터 클래스 1기 | MEDI STAXION',
  '보톡스·필러 시술부터 경영 전략까지, 치과의사를 위한 미용시술 집중 교육. 2026년 5월 15일 강남.'
)
ON CONFLICT (slug) DO NOTHING;

-- ── 더미 데이터: 서비스 1개 ──
INSERT INTO public.services (
  name, slug, description, content, image_url, mobile_image_url,
  sort_order, is_published,
  category, price, price_unit, delivery_type, duration, target_audience,
  cta_text, cta_link,
  provider, eligibility, refund_policy, cancel_method, cs_contact, disclaimer,
  meta_title, meta_description
) VALUES (
  '미용치과 도입 컨설팅',
  'beauty-dental-consulting',
  '치과에 미용시술을 도입하기 위한 맞춤형 1:1 컨설팅 서비스입니다. 시장분석부터 SOP 수립, 마케팅까지 전 과정을 지원합니다.',
  '<h2>컨설팅 소개</h2><p>미용치과 도입을 처음부터 끝까지 함께합니다.</p><h3>컨설팅 범위</h3><ul><li>권역 분석 및 경쟁 환경 조사</li><li>시술 메뉴 구성 및 가격 전략</li><li>장비·소모품 선정 및 공급 연결</li><li>직원 교육 프로그램 설계</li><li>마케팅 전략 수립 (온/오프라인)</li><li>운영 SOP 및 매뉴얼 제작</li></ul><h3>진행 방식</h3><p>초기 미팅 → 현장 방문 → 분석 보고서 → 실행 계획 수립 → 실행 지원 (3개월)</p>',
  'https://placehold.co/800x600/fff3e0/e65100?text=Consulting+PC',
  'https://placehold.co/400x400/fff3e0/e65100?text=Consulting+Mobile',
  1,
  true,
  '컨설팅',
  0,
  '별도 협의',
  '방문',
  '약 3개월 (초기 미팅 포함)',
  '미용시술 도입을 계획 중인 치과 원장',
  '상담 신청하기',
  '/contact',
  '(주)더스테이션',
  '치과의사 면허 소지자 / 치과 법인',
  '• 컨설팅 착수 전: 전액 환불\n• 1회차 진행 후: 미진행 회차에 대해 비례 환불\n• 중도 해지 시 위약금 없음\n\n(전자상거래법 제17조에 따른 환불 규정)',
  '담당 컨설턴트 또는 고객센터 연락',
  '0502-5552-0492 / help@medistaxion.com',
  '본 컨설팅은 경영 자문 서비스로, 매출이나 특정 성과를 보장하지 않습니다.',
  '미용치과 도입 컨설팅 | MEDI STAXION',
  '치과 미용시술 도입을 위한 맞춤형 1:1 컨설팅. 시장분석부터 SOP, 마케팅까지.'
)
ON CONFLICT (slug) DO NOTHING;
