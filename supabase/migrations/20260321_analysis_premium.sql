-- 분석 유료/무료 구분 (골든시그널)
ALTER TABLE analysis_reports ADD COLUMN IF NOT EXISTS is_premium boolean DEFAULT false;
