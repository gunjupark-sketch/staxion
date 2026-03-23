---
name: content-write
description: 서비스/교육 상세 페이지의 detail_content HTML을 작성할 때의 규칙과 패턴. .service-content CSS 클래스 활용법.
---

# 서비스 콘텐츠 HTML 작성 규칙

Supabase `services.detail_content` 또는 `seminars.detail_content`에 들어갈 HTML을 작성할 때 이 규칙을 따른다.

## 사용 가능한 HTML 요소 & CSS 클래스

### 제목
```html
<h2>섹션 대제목</h2>     <!-- 하단 neon 액센트 바, margin-top: 3.5rem -->
<h3>소제목</h3>          <!-- 좌측 neon 보더 -->
```
- h2는 큰 섹션 구분, h3는 세부 항목
- h1은 사용하지 않음 (페이지 제목은 DB name 필드에서 자동 렌더링)

### 본문
```html
<p>설명 텍스트</p>
<p><strong>강조</strong>할 부분은 bold로</p>
```

### 강조 박스
```html
<div class="sc-highlight">
<p><strong>핵심 메시지</strong> 설명...</p>
</div>
```
- 네온 8% 배경, 1rem padding
- 핵심 개념 정의, 요약, 중요 안내에 사용

### 카드 그리드
```html
<div class="sc-grid">
<div class="sc-card"><strong>카드 제목</strong><p>카드 설명</p></div>
<div class="sc-card"><strong>카드 제목</strong><p>카드 설명</p></div>
<div class="sc-card"><strong>카드 제목</strong><p>카드 설명</p></div>
</div>
```
- auto-fit 그리드, 최소 220px
- 모바일에서 1칼럼, 데스크탑에서 2~3칼럼
- 결과물 나열, 모듈 소개, 특징 비교에 적합

### 테이블
```html
<table>
<thead><tr><th>항목</th><th>내용</th></tr></thead>
<tbody>
<tr><td><strong>항목명</strong></td><td>설명</td></tr>
</tbody>
</table>
```
- 다크 헤더, 라운드 모서리, hover 효과
- 모바일에서 수평 스크롤
- 구조화된 데이터, 비교표, 프로세스 정리에 적합

### 인용문
```html
<blockquote>
<p>"인용 텍스트"</p>
</blockquote>
```
- 좌측 4px 네온 보더, 라이트 배경
- 핵심 메시지 강조, 고객 증언 스타일에 적합

### 순서 목록
```html
<ol>
<li><strong>단계명</strong> — 설명</li>
<li><strong>단계명</strong> — 설명</li>
</ol>
```
- 프로세스, 절차, 단계 설명에 사용

### 비순서 목록
```html
<ul>
<li><strong>항목명</strong> — 설명</li>
</ul>
```
- 커스텀 녹색 불릿

### 구분선
```html
<hr>
```
- 큰 섹션 간 구분에 사용

## 콘텐츠 구조 템플릿

### 서비스 상세 페이지 권장 구조
```
1. h2 — 메인 가치 제안 (한 문장)
2. p — 서비스 개요 (2~3문장)
3. sc-highlight — 핵심 개념 정의
4. hr
5. h3 — 세부 항목 1 + table 또는 sc-grid
6. h3 — 세부 항목 2 + table 또는 sc-grid
7. hr
8. h3 — 프로세스 + ol
9. blockquote — 핵심 메시지
10. sc-highlight — 마무리 강조
```

## 작성 원칙

1. **과장 금지** — 데이터 근거 없는 수치 사용 금지
2. **의료법 준수** — 의료 광고 규정 위반 표현 배제
3. **톤 일관성** — 기존 페이지와 동일한 전문적·신뢰감 있는 톤
4. **길이** — h2 기준 3~5개 섹션, 전체 500~1500단어
5. **XSS 안전** — script, iframe, on* 핸들러, style 태그 사용 금지
6. **sanitizeHtml 통과** — 허용된 태그/속성만 사용

## 금지 요소
- `<script>`, `<iframe>`, `<style>` 태그
- `onclick`, `onerror` 등 이벤트 핸들러
- 인라인 style 속성
- 외부 리소스 링크 (img src="https://...")
- `<img>` 태그 (이미지는 별도 필드로 관리)
