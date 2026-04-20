@echo off
title GFV Pro Upgrade - Install (Portables)
cd /d "%~dp0"
echo.
echo  GFV Pro Upgrade - Install (Portables)
echo  Paste one or more portable roots or web folders.
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\install-portables.ps1"
if errorlevel 1 (
  echo.
  echo Portable install finished with errors.
  pause
  exit /b 1
)
echo.
pause
