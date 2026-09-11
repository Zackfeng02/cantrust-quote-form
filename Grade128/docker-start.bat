@echo off
cd /d "%~dp0"
docker compose up -d --build --wait
if errorlevel 1 (
  echo Docker startup failed. Check Docker Desktop is running and port 8000 is free.
  pause
  exit /b 1
)
start "" http://localhost:8000/
