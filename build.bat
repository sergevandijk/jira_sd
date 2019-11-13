@echo off
set SETTINGSFILE=settings.xml
set LOCALREPO=localrepo
set PATH=%cd%;%PATH%
call mvn354.bat clean install -f servicedesk-parent-pom/sd-components/pom.xml -Dmaven.test.skip -s %SETTINGSFILE% -Dmaven.repo.local=%cd%\%LOCALREPO% %* 
if %errorlevel% neq 0 exit /b %errorlevel%
call mvn354.bat clean install -f jira-servicedesk-application/pom.xml -Dmaven.test.skip -s %SETTINGSFILE% -Dmaven.repo.local=%cd%\%LOCALREPO% %* 
if %errorlevel% neq 0 exit /b %errorlevel%
