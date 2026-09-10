@echo off
chcp 65001 >nul
title 服务监测窗口
cd /d "%~dp0"
node service-manager.cjs gui
pause
