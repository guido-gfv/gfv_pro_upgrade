@echo off
title GFV Pro Upgrade - Install
cd /d "%~dp0"
echo.
echo  GFV Pro Upgrade - Install
echo  Copies the web folder into Comfy UI Desktop or pip static.
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\install.ps1"
if errorlevel 1 (
  echo.
  echo Install finished with errors.
  pause
  exit /b 1
)
echo.
pause
