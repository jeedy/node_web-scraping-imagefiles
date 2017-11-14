#!/bin/sh

# Path 설정
PATH=/usr/local/bin:/usr/bin:/bin
# NODE root 라이브러리 설정
NODE_PATH=/usr/local/lib/node_modules

# 현재 디렉터리를 스크립트의 경로로 변경
`dirname $0`
say "hello"
cd `dirname $0`
node kawase-usd_krw.js
