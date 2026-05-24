@echo off
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0update-index.ps1"
pause
