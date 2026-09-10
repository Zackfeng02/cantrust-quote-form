@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo [1/3] 生成 SEA blob...
node --experimental-sea-config sea-config.json || goto :err
echo [2/3] 复制 node.exe 作为 exe 底座...
for /f "delims=" %%i in ('node -p process.execPath') do copy /y "%%i" service-monitor.exe >nul || goto :err
echo [3/3] 注入 blob（需要网络下载 postject）...
call npx --yes postject service-monitor.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 --overwrite || goto :err
echo.
echo 构建完成: service-monitor.exe （双击即可打开监测窗口）
goto :eof
:err
echo 构建失败
pause
