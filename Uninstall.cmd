@echo off
title GFV Pro Upgrade - Uninstall
cd /d "%~dp0"
echo.
echo  GFV Pro Upgrade - Uninstall
echo  This restores the previous UI from the latest static.gfv.backup.* folder.
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\uninstall.ps1"
if errorlevel 1 (
  echo.
  echo Uninstall finished with errors.
  pause
  exit /b 1
)
echo.
pause
