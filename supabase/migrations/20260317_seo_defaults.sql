-- SEO 기본 설정 데이터 삽입
-- site_settings 테이블에 SEO 관련 기본값 upsert

INSERT INTO site_settings (key, value) VALUES
  ('seo_meta', '{
    "site_name": "MEDI STAXION",
    "site_url": "https://medistaxion.com",
    "default_title": "MEDI STAXION | 미용치과, 시작이 다르면 결과가 다릅니다",
    "title_template": "%s | MEDI STAXION",
    "default_description": "치과에서 미용시술을 시작하는 가장 확실한 방법. 가이드북, 교육, 컨설팅까지.",
    "default_keywords": "미용치과, 치과 미용시술, 보톡스, 필러, 치과 컨설팅, 메디스택시온",
    "default_og_image": ""
  }'::jsonb),
  ('seo_social', '{
    "og_type": "website",
    "og_locale": "ko_KR",
    "twitter_card": "summary_large_image",
    "twitter_site": "",
    "facebook_app_id": ""
  }'::jsonb),
  ('seo_verification', '{
    "google": "",
    "naver": "",
    "bing": ""
  }'::jsonb),
  ('seo_analytics', '{
    "google_analytics_id": "",
    "google_tag_manager_id": "",
    "naver_analytics_id": "",
    "facebook_pixel_id": "",
    "kakao_pixel_id": ""
  }'::jsonb),
  ('seo_crawl', '{
    "allow_indexing": true,
    "sitemap_url": "https://medistaxion.com/sitemap.xml",
    "disallow_paths": "/admin\n/api\n/auth",
    "custom_robots_txt": ""
  }'::jsonb),
  ('seo_pages', '{
    "items": []
  }'::jsonb)
ON CONFLICT (key) DO NOTHING;
