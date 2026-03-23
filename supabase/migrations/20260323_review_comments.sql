-- 가이드북 초고 리뷰 코멘트 시스템
CREATE TABLE IF NOT EXISTS review_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id TEXT NOT NULL,          -- 문단/블록 식별자 (예: "prologue-03", "step0-0201")
  author_name TEXT NOT NULL,         -- 작성자 닉네임
  content TEXT NOT NULL,             -- 코멘트 내용
  resolved BOOLEAN DEFAULT FALSE,    -- 해결됨 여부
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 인덱스
CREATE INDEX idx_review_comments_section ON review_comments(section_id);
CREATE INDEX idx_review_comments_created ON review_comments(created_at DESC);

-- RLS: 누구나 읽기/쓰기 가능 (비밀 URL이므로)
ALTER TABLE review_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "review_comments_select" ON review_comments
  FOR SELECT USING (true);

CREATE POLICY "review_comments_insert" ON review_comments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "review_comments_update" ON review_comments
  FOR UPDATE USING (true);
