@echo off
cd /d "%~dp0"
docker compose stop worker
if errorlevel 1 (
  pause
  exit /b 1
)
docker compose stop web
if errorlevel 1 pause
