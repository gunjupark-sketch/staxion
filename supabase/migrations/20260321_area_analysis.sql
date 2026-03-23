-- 권역분석 시스템 (2026-03-21)
-- 분석 횟수, 분석 이력, 알림

-- 1. 분석 횟수 필드 추가
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS analysis_credits integer DEFAULT 3;

-- 2. 분석 이력 테이블
CREATE TABLE IF NOT EXISTS analysis_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- 요청 정보
  address text NOT NULL,
  sido text,
  sgg text,
  dong text,
  lat double precision,
  lng double precision,
  admi_code text,
  upjong_code text DEFAULT 'Q10901',
  upjong_name text DEFAULT '치과의원',

  -- 처리 상태
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  error_message text,

  -- 소상공인365 데이터
  sbiz_analy_no text,
  sbiz_data jsonb,

  -- 추가 API 데이터
  sgis_data jsonb,
  kosis_data jsonb,
  competitors_data jsonb,

  -- AI 분석
  ai_analysis jsonb,

  -- 시간
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- 인덱스
CREATE INDEX idx_analysis_reports_user_id ON analysis_reports(user_id);
CREATE INDEX idx_analysis_reports_status ON analysis_reports(status);
CREATE INDEX idx_analysis_reports_created_at ON analysis_reports(created_at DESC);

-- RLS
ALTER TABLE analysis_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "본인 분석 조회"
  ON analysis_reports FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "본인 분석 생성"
  ON analysis_reports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "관리자 전체 접근"
  ON analysis_reports FOR ALL
  USING (is_admin());

-- 3. 알림 테이블 (범용)
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  type text NOT NULL,
  title text NOT NULL,
  message text,
  link text,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_unread ON notifications(user_id, is_read) WHERE is_read = false;

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "본인 알림 조회"
  ON notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "본인 알림 수정"
  ON notifications FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "관리자 알림 생성"
  ON notifications FOR INSERT
  WITH CHECK (is_admin() OR auth.uid() = user_id);

CREATE POLICY "관리자 전체 접근"
  ON notifications FOR ALL
  USING (is_admin());

-- 4. 횟수 차감 함수
CREATE OR REPLACE FUNCTION decrement_analysis_credits(p_user_id uuid)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_credits integer;
BEGIN
  SELECT analysis_credits INTO current_credits
  FROM profiles WHERE id = p_user_id;

  IF current_credits IS NULL OR current_credits <= 0 THEN
    RETURN -1;
  END IF;

  UPDATE profiles
  SET analysis_credits = analysis_credits - 1,
      updated_at = now()
  WHERE id = p_user_id;

  RETURN current_credits - 1;
END;
$$;
