@echo off
cd /d "%~dp0"
echo Initialisation du projet RAFAELLI LEADS...

:: Initialiser Git
git init
git remote add origin https://github.com/grouperafaelli/rafaelli-capital-leads.git
git add .
git commit -m "Initial commit - RAFAELLI LEADS"
git branch -M main
git push -u origin main

:: Déployer avec Vercel
echo Déploiement Vercel...
vercel --prod

pause
