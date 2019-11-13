#! /bin/sh
cd "`dirname "$0"`"
SETTINGSFILE="settings.xml"
LOCALREPO="localrepo"
set -e
export PATH=.:$PATH
mvn354.sh clean install -f servicedesk-parent-pom/sd-components/pom.xml -Dmaven.test.skip -s $SETTINGSFILE -Dmaven.repo.local="`pwd`/$LOCALREPO" "$@"
mvn354.sh clean install -f jira-servicedesk-application/pom.xml -Dmaven.test.skip -s $SETTINGSFILE -Dmaven.repo.local="`pwd`/$LOCALREPO" "$@"
