@echo off

set OLD_M2_HOME=%M2_HOME%
set M2_HOME=maven3\apache-maven-3.5.4

set OLD_PATH=%PATH%
set PATH=%M2_HOME%\bin;%JAVA_HOME%\bin;%PATH%
set OLD_MAVEN_OPTS=%MAVEN_OPTS%
set MAVEN_OPTS=-Xmx1024m -XX:MaxPermSize=256m

call mvn %*

set M2_HOME=%OLD_M2_HOME%
set PATH=%OLD_PATH%
set MAVEN_OPTS=%OLD_MAVEN_OPTS%
