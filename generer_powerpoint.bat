@echo off
title Generation du fichier PowerPoint DevPulse
echo ====================================================
echo   Generation de DevPulse_Presentation.pptx en cours...
echo ====================================================
cd /d "%~dp0"
echo Installation de la dependance pptxgenjs...
call npm install pptxgenjs
echo Creation des 8 diapositives PowerPoint...
call node create_presentation.js
echo.
echo ====================================================
echo   Termine ! Le fichier DevPulse_Presentation.pptx
echo   a ete cree avec succes dans ce dossier.
echo ====================================================
pause
