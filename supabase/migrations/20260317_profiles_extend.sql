-- ============================================================
-- profiles 테이블 확장: signup 폼 전체 필드 동기화
-- 2026-03-17
-- ============================================================

-- 1. 누락된 컬럼 추가
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS birth_date date;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS address text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS clinic_address text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS university text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS major text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS referral_source text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_clinic_owner text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS interests text[] DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS license_file_path text;

-- 2. handle_new_user 트리거 업데이트: auth metadata → profiles 자동 동기화
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    name,
    phone,
    birth_date,
    address,
    clinic_name,
    clinic_address,
    university,
    major,
    referral_source,
    is_clinic_owner,
    interests,
    license_file_path,
    license_status
  ) VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'name',
    new.raw_user_meta_data ->> 'phone',
    CASE
      WHEN new.raw_user_meta_data ->> 'birth_date' IS NOT NULL
        AND new.raw_user_meta_data ->> 'birth_date' != ''
      THEN (new.raw_user_meta_data ->> 'birth_date')::date
      ELSE NULL
    END,
    new.raw_user_meta_data ->> 'address',
    new.raw_user_meta_data ->> 'clinic_name',
    new.raw_user_meta_data ->> 'clinic_address',
    new.raw_user_meta_data ->> 'university',
    new.raw_user_meta_data ->> 'major',
    new.raw_user_meta_data ->> 'referral_source',
    new.raw_user_meta_data ->> 'is_clinic_owner',
    CASE
      WHEN new.raw_user_meta_data -> 'interests' IS NOT NULL
      THEN ARRAY(SELECT jsonb_array_elements_text(new.raw_user_meta_data -> 'interests'))
      ELSE '{}'
    END,
    new.raw_user_meta_data ->> 'license_file_path',
    CASE
      WHEN new.raw_user_meta_data ->> 'license_file_path' IS NOT NULL
      THEN 'uploaded'
      ELSE 'none'
    END
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
