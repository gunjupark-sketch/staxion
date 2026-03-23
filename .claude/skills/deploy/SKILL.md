---
name: deploy
description: 빌드 검증 → git 커밋 → 푸시 → Vercel 배포까지 실행하는 배포 파이프라인.
allowed-tools: Bash, Read, Grep
---

# 배포 스킬

빌드 검증부터 Vercel 배포까지 한 번에 실행한다.
인자: `$ARGUMENTS` (커밋 메시지 힌트, 없으면 자동 생성)

## 파이프라인

### 1. 빌드 검증
```bash
npm run build
```
실패 시 중단. 에러 내용 보고.

### 2. 스테이징 전 체크

**절대 스테이징하면 안 되는 파일:**
```
.env.local
.env*.local
update-*.mjs          (credential 포함 스크립트)
kosis_*.json          (테스트 데이터)
node_modules/
.next/
*.pem
```

```bash
git status
git diff --stat
```

### 3. 커밋

```bash
# 변경 파일만 선택적 스테이징
git add [파일들]

# 커밋 메시지 작성
git commit -m "$(cat <<'EOF'
[type]: [한줄 요약]

[상세 변경 내역]

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

**커밋 타입:**
- `feat`: 새 기능/페이지
- `fix`: 버그 수정
- `style`: 디자인/CSS 변경
- `refactor`: 코드 구조 변경
- `perf`: 성능 개선
- `security`: 보안 관련
- `chore`: 설정/의존성
- `content`: DB 콘텐츠 업데이트

**커밋 메시지 규칙:**
- 한글 + 영문 혼용 가능
- 첫 줄 70자 이내
- Co-Authored-By 필수

### 4. 푸시

```bash
git push origin main
```

**절대 금지:**
- `git push --force`
- `git reset --hard`

### 5. 배포 확인

- Vercel 자동 배포 시작 확인
- 빌드 로그 에러 모니터링

## 출력 형식

```
## 배포 결과

### 빌드
- 상태: ✅ 통과 / ❌ 실패

### 커밋
- 해시: [커밋 해시]
- 메시지: [첫줄]
- 변경: [N files, +X/-Y]

### 푸시
- 상태: ✅ 완료
- 브랜치: main

### Vercel
- 상태: 배포 시작됨
```

## credential 스크립트 처리

배포 후 update-*.mjs 파일이 남아있으면 경고:
```bash
ls update-*.mjs 2>/dev/null && echo "⚠️ credential 스크립트 삭제 필요"
```
