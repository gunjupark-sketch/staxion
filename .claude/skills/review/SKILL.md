---
name: review
description: 코드 변경 후 QA, SEO, 보안을 통합 검증한다. 빌드 확인, 링크 체크, 메타태그 검증, 보안 취약점 스캔을 수행.
allowed-tools: Read, Bash, Grep, Glob
---

# 통합 리뷰 스킬

코드 변경 후 배포 전에 실행하는 통합 검증.
인자: `$ARGUMENTS` (변경된 파일 경로 또는 "all")

## 1. 빌드 검증

```bash
npm run build
```
- TypeScript 타입 에러 없음
- import 누락 없음
- 빌드 성공

## 2. 변경 파일 스캔

```bash
git diff --name-only HEAD
git diff --stat HEAD
```

변경된 파일 유형별로 해당 검증 실행:
- `.tsx/.ts` → 코드 품질 + 보안
- `globals.css` → 스타일 충돌
- DB 스크립트 → credential 노출

## 3. 코드 품질

### 필수 체크
```
- [ ] dangerouslySetInnerHTML에 sanitizeHtml() 적용
- [ ] next/image Image 컴포넌트 사용 (raw <img> 금지)
- [ ] Link from next/link 사용 (raw <a> 내부링크 금지)
- [ ] "use client"는 state/effect 필요할 때만
- [ ] 외부 이미지 URL 없음 (unsplash 등)
```

### 히어로/배너
```
- [ ] 배경 이미지에 어두운 overlay 존재
- [ ] 텍스트 가독성 확보 (design-check 스킬 참조)
- [ ] fallback 이미지 경로 존재
- [ ] 모바일 이미지 대응
```

## 4. SEO 검증

### 메타 태그 (변경된 페이지)
```
- [ ] <title> 존재 (60자 이내)
- [ ] <meta description> 존재 (160자 이내)
- [ ] OG 태그 (og:title, og:description, og:image)
```

### 구조
```
- [ ] h1 페이지당 1개
- [ ] heading 계층 순서 (h1→h2→h3)
- [ ] 이미지 alt 텍스트 존재
```

### DB 콘텐츠
```
- [ ] meta_title 필드 60자 이내
- [ ] meta_description 필드 160자 이내
- [ ] detail_content에 h1 없음 (h2부터 시작)
```

## 5. 보안 검증

### XSS
```
- [ ] dangerouslySetInnerHTML → sanitizeHtml() 필수
- [ ] 사용자 입력 이스케이프
```

### 환경변수
```
- [ ] .env.local이 .gitignore에 포함
- [ ] NEXT_PUBLIC_ 접두사 구분 정확
- [ ] 서비스 키가 클라이언트 코드에 없음
```

### 인증
```
- [ ] /admin/** 라우트 인증 체크
- [ ] API 라우트 인증 체크
```

## 6. 링크 검증

```bash
# 내부 링크 추출 및 확인
grep -rn 'href="/' src/app/ src/components/ --include="*.tsx" | grep -v node_modules
```

- 404 페이지 없는지 확인
- 사이드바 링크와 실제 페이지 매칭

## 출력 형식

```
## 리뷰 결과

### 빌드
- 상태: ✅/❌
- 에러: [있으면]

### 🔴 Critical (즉시 수정)
[빌드 실패, 보안 취약점, 404]

### 🟡 Warning (수정 권장)
[SEO 누락, 가독성, 성능]

### 🟢 Pass
[통과 항목 수 / 전체]

### 변경 파일별 이슈
| 파일 | 이슈 | 심각도 |
|------|------|--------|
```
