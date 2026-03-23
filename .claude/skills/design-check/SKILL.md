---
name: design-check
description: 페이지 디자인 가독성, 색상 대비, 접근성, 반응형을 검증한다. 배너 위 텍스트 가독성 문제 등 시각적 실수를 사전에 잡는다.
allowed-tools: Read, Grep, Glob, Bash
---

# 디자인 검증 스킬

페이지나 컴포넌트의 디자인 품질을 검증한다.
인자: `$ARGUMENTS` (페이지 경로 또는 slug)

## 검증 항목

### 1. 텍스트 가독성 (최우선)

**히어로/배너 위 텍스트:**
- 밝은 배경 이미지 위에 밝은(white) 텍스트 → ❌ 가독성 불량
- 해결: 오버레이 그라데이션 강화 (`bg-gradient-to-b from-black/60 via-black/40 to-black/60`)
- 또는 text-shadow 추가 (`text-shadow: 0 2px 8px rgba(0,0,0,0.8)`)

**체크 방법:**
```bash
# 히어로 섹션에 overlay/gradient가 있는지 확인
grep -n "bg-gradient\|overlay\|text-shadow" src/app/[page]/page.tsx
```

**배경-텍스트 조합 금지 목록:**
| 배경 | 텍스트 | 결과 |
|------|--------|------|
| 밝은 이미지 | text-white | ❌ 안 보임 |
| 밝은 이미지 + 약한 overlay | text-white/60 | ❌ 거의 안 보임 |
| 어두운 배경 | text-gray-800 | ❌ 안 보임 |
| brand-neon (#BDFF06) 배경 | text-white | ❌ 대비 부족 |

**안전한 조합:**
| 배경 | 텍스트 | 결과 |
|------|--------|------|
| bg-layout-dark (#1a1a2e) | text-white | ✅ |
| 이미지 + from-black/60 overlay | text-white | ✅ |
| 밝은 배경 | text-gray-900 | ✅ |
| bg-layout-dark | text-brand-neon | ✅ |

### 2. 색상 대비 (WCAG AA)

**최소 대비율:**
- 일반 텍스트: 4.5:1
- 큰 텍스트(18pt+ 또는 14pt bold): 3:1
- UI 요소: 3:1

**프로젝트 색상 대비:**
| 조합 | 대비율 | 판정 |
|------|--------|------|
| white on #1a1a2e | 13.5:1 | ✅ |
| #BDFF06 on #1a1a2e | 9.2:1 | ✅ |
| white/60 on #1a1a2e | 7.8:1 | ✅ |
| #8EC31F on #1a1a2e | 5.8:1 | ✅ |
| #BDFF06 on white | 1.6:1 | ❌ 사용 금지 |
| white on 밝은 이미지 | ???:1 | ⚠️ 이미지에 따라 다름 → overlay 필수 |

### 3. 히어로 배너 체크리스트

```
- [ ] 배경 이미지 위에 어두운 overlay 존재 (최소 from-black/50)
- [ ] 제목(h1) 텍스트 충분히 큼 (text-3xl md:text-5xl)
- [ ] 설명 텍스트 대비 확보 (text-white/60 + overlay)
- [ ] CTA 버튼 시인성 (bg-brand-neon-btn 또는 강한 대비)
- [ ] 모바일에서 텍스트 잘리지 않음
- [ ] fallback 배경색 존재 (이미지 로드 실패 대비)
```

### 4. 반응형 체크

```
- [ ] 375px (모바일): 텍스트 오버플로우 없음
- [ ] 768px (태블릿): 그리드 전환 정상
- [ ] 1280px+ (데스크탑): 사이드바 포함 정상
- [ ] sc-grid 카드가 모바일에서 1칼럼
- [ ] 테이블 모바일 수평 스크롤
```

### 5. 이미지 체크

```
- [ ] next/image Image 컴포넌트 사용 (raw img 금지)
- [ ] alt 텍스트 존재
- [ ] sizes prop 적절
- [ ] priority는 히어로만
- [ ] 외부 URL 없음 (로컬 또는 Supabase Storage)
```

## 자동 수정 패턴

### 히어로 overlay 부족 시
```tsx
// Before (❌)
<Image src={bannerUrl} fill className="object-cover" />
<h1 className="text-white">제목</h1>

// After (✅)
<Image src={bannerUrl} fill className="object-cover" />
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
<h1 className="relative z-10 text-white">제목</h1>
```

### 밝은 배경에 밝은 텍스트 발견 시
```tsx
// text-shadow 추가
className="text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]"
```

## 출력 형식

```
## 디자인 검증 결과

### 🔴 Critical
[가독성 불량, 대비 미달 등]

### 🟡 Warning
[개선 권장 사항]

### 🟢 Pass
[통과 항목]
```
