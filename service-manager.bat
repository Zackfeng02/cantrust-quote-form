@echo off
chcp 65001 >nul
cd /d "%~dp0"
node service-manager.cjs gui
pause
