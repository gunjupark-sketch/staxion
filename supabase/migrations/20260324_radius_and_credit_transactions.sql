-- F2. analysis_reports에 radius 컬럼 추가 (integer, nullable)
ALTER TABLE analysis_reports ADD COLUMN IF NOT EXISTS radius integer;

COMMENT ON COLUMN analysis_reports.radius IS '분석 반경 (미터)';

-- F3. credit_transactions 테이블 생성
CREATE TABLE IF NOT EXISTS credit_transactions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount integer NOT NULL,
  type text NOT NULL CHECK (type IN ('purchase', 'use', 'refund')),
  description text,
  created_at timestamptz DEFAULT now()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_created_at ON credit_transactions(created_at DESC);

-- RLS 활성화
ALTER TABLE credit_transactions ENABLE ROW LEVEL SECURITY;

-- RLS 정책: 본인 조회
CREATE POLICY "Users can view own credit transactions"
  ON credit_transactions FOR SELECT
  USING (auth.uid() = user_id);

-- RLS 정책: 관리자 전체 조회
CREATE POLICY "Admins can view all credit transactions"
  ON credit_transactions FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- RLS 정책: 서버(service_role)만 INSERT/UPDATE 가능
CREATE POLICY "Service role can manage credit transactions"
  ON credit_transactions FOR ALL
  USING (auth.role() = 'service_role');
