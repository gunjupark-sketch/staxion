-- ============================================================
-- 회원 등급 추가: 준회원 / 정회원(면허승인) / VIP
-- 2026-03-17
-- ============================================================

-- 1. member_grade 컬럼 추가
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS member_grade text NOT NULL DEFAULT 'associate';

-- 2. check 제약조건 추가 (멱등성: 이미 있으면 무시)
DO $$
BEGIN
  ALTER TABLE public.profiles
    ADD CONSTRAINT profiles_member_grade_check
    CHECK (member_grade IN ('associate', 'regular', 'vip'));
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 3. 기존 데이터 마이그레이션: 면허 승인된 회원은 정회원으로
UPDATE public.profiles
SET member_grade = 'regular'
WHERE license_status = 'approved' AND member_grade = 'associate';

-- 4. 관리자는 정회원으로
UPDATE public.profiles
SET member_grade = 'regular'
WHERE role = 'admin' AND member_grade = 'associate';
