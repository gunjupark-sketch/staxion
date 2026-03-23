---
name: page-create
description: 새 서비스/교육/스토어 페이지를 생성하는 전체 워크플로우. 리서치 → 카피 → 빌드 → 이미지 → 리뷰까지 에이전트를 순차적으로 활용한다.
---

# 페이지 생성 워크플로우

새 페이지를 생성할 때 이 워크플로우를 따른다.
인자: `$ARGUMENTS` (페이지명 또는 slug, 참고 자료 경로)

## 1단계: 기획 & 리서치

**web-researcher 에이전트 활용**

- 참고 자료(PPTX, PDF, URL 등)가 있으면 내용 추출
- 기존 유사 페이지의 구조와 톤 분석
- 경쟁사/업계 레퍼런스 조사 (필요시)
- LeftSidebar.tsx에 해당 링크가 이미 있는지 확인

**산출물:** 페이지 구조안 (섹션 구성, 핵심 메시지, 참고 데이터)

## 2단계: 카피라이팅

**web-writer 에이전트 활용**

- 히어로 텍스트: 서브타이틀(영문) + 제목(한글) + 설명 + CTA
- 섹션별 본문 작성
- service-content HTML 구조 설계 (.sc-highlight, .sc-grid, .sc-card 등)
- SEO 메타: title(60자), description(160자), keywords

**산출물:** 완성된 텍스트 + HTML 구조

## 3단계: 빌드

**web-builder 에이전트 활용**

- Supabase에 레코드 삽입/수정 (update-[name].mjs 스크립트)
- 필요시 페이지 컴포넌트 수정
- `npm run build` 통과 확인
- 로컬에서 렌더링 확인

**필수 필드:**
```
name, slug, category, description, detail_content,
delivery_type, target_audience, cta_text, cta_link,
meta_title, meta_description
```

## 4단계: 이미지 (필요시)

**web-image 에이전트 활용**

- 히어로 배너 이미지 제작/선정
- OG 이미지 생성 (1200x630)
- 서비스 아이콘 SVG 제작

## 5단계: 디자인 검증

**반드시 `/design-check` 스킬 실행**

- 히어로 배너 텍스트 가독성
- 색상 대비 (WCAG AA 기준)
- 모바일 레이아웃

## 6단계: 통합 리뷰

**web-reviewer 에이전트 활용 또는 `/review` 스킬**

- 빌드 통과
- 링크 정상
- SEO 메타 존재
- 보안 체크

## 주의사항
- 각 단계 산출물을 건주에게 확인받은 후 다음 단계 진행
- 기존 페이지의 톤·스타일과 일관성 유지
- detail_content는 반드시 sanitizeHtml()을 통과하는 안전한 HTML만
- update 스크립트는 실행 후 삭제 (credential 포함)
