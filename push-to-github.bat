@echo off
chcp 65001 > nul
echo ================================================================
echo   جاري رفع التحديثات إلى GitHub...
echo ================================================================
echo.
cd /d "%~dp0"

echo 1. التحقق من حالة المستودع المحلي...
git status --short

echo.
echo 2. حفظ التغييرات ورفعها إلى الفرع الرئيسي (main)...
git add -A
git diff --cached --quiet
if %errorlevel% neq 0 (
    git commit -m "chore: update project"
)
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ================================================================
    echo  تم الرفع بنجاح!
    echo  GitHub Actions سينشر التحديثات خلال دقائق:
    echo  https://mahmoudadelelhadedy.github.io/diar-el-sharqia/
    echo ================================================================
) else (
    echo ================================================================
    echo  حدث خطأ أثناء الرفع. تحقق من تسجيل الدخول واتصال GitHub.
    echo ================================================================
)
echo.
pause
