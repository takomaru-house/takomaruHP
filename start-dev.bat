@echo off
cd /d "%~dp0"
start "" "http://localhost:3000/dev.html"
npx serve . --listen 3000
