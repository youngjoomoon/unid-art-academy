@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  ================================================
echo   유니드아트 미리보기 서버
echo   같은 와이파이의 폰 브라우저에서 접속하세요:
echo.
echo       http://192.168.0.2:8000
echo.
echo   (PC 주소가 바뀌면 ipconfig 로 IPv4 주소 확인)
echo   끝내려면 이 창을 닫으세요.
echo  ================================================
echo.
python -m http.server 8000 --bind 0.0.0.0
pause
