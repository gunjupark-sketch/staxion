@echo off
echo === MEDISTAXION 스크래핑 서버 시작 ===
cd /d "%~dp0.."
set SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWxuamxpcWdxcHNta3prbHNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzU3NzA3NCwiZXhwIjoyMDg5MTUzMDc0fQ.YMXBZv-9lh_wwInoEUncZ1lQDafa3Gci2kzPtVv3R9M
node scraper/server.mjs
pause
