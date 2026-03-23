# STAXION (medistaxion.com) 작업규칙

> 공통 규칙은 ~/.claude/CLAUDE.md, 클로드팀 규칙은 클로드팀/CLAUDE.md 참조.

## Cross-Claude 통신 규칙
- share_data 키 네이밍: `{프로젝트}-{카테고리}` 형식
  - 예: staxion-api-status, staxion-component-list, guidebook-step1-status
  - 키는 영문 소문자+하이픈만
- done 메시지 필수 포함 3가지:
  1. 변경 파일 수 + 주요 변경 요약
  2. 빌드/테스트 결과 (npm run build 통과 여부)
  3. 해당 프로젝트.md 업데이트 완료 여부 (미완료 시 사유)
- done 보내기 전에 해당 프로젝트.md 업데이트 필수. 프로젝트 파일 미갱신 상태로 done 금지.
