-- profiles 테이블에 theme 컬럼 추가
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS theme text NOT NULL DEFAULT 'light'
CHECK (theme IN ('light', 'dark'));
