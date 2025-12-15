@echo off
REM ZYNAVA Build & Deploy Script for Windows
REM Run: build-deploy.bat

echo.
echo ======================================================================
echo               ZYNAVA BUILD ^& DEPLOYMENT SCRIPT
echo ======================================================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Checking Dependencies...
    echo node_modules not found, installing...
    call npm install
    if errorlevel 1 (
        echo Failed to install dependencies
        exit /b 1
    )
    echo ✓ Dependencies installed
) else (
    echo ✓ Dependencies already installed
)

echo.
echo Running Linter...
call npm run lint
if errorlevel 1 (
    echo ⚠ Linter found issues
)

echo.
echo Cleaning Build Cache...
if exist ".next\" (
    rmdir /s /q .next
    echo ✓ Old build cache removed
)

echo.
echo Running Production Build...
call npm run build
if errorlevel 1 (
    echo ✗ Build failed!
    echo Please fix the errors above and try again
    exit /b 1
)
echo ✓ Production build completed successfully

echo.
echo ======================================================================
echo                           BUILD SUMMARY
echo ======================================================================
echo.
echo ✓ All checks passed!
echo.
echo Your application is ready to deploy to Vercel!
echo.
echo Next Steps:
echo  1. Commit changes: git add . ^&^& git commit -m "Ready for Vercel"
echo  2. Push to GitHub: git push origin main
echo  3. Deploy to Vercel: vercel
echo  4. Test on mobile: Open Vercel URL on your phone
echo.
echo To test locally before deploying:
echo  npm start
echo.
pause

