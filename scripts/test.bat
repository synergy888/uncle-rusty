@echo off

REM Windows script for running server and client unit tests
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Karma (npm install -g karma)
REM - Mocha (npm install -g mocha)

set BASE_DIR=%~dp0
set out="%BASE_DIR%\..\test\out"
if not exist %out% mkdir %out%

@echo Starting server-side unit tests...
node "%BASE_DIR%..\node_modules\mocha\bin\mocha" -R xunit -t 30000 "%BASE_DIR%..\test\unit" --globals "NODE_CONFIG,exportscoffeeScript,all,promise,key,clientDataTransfer,pathMappingParser,company,product,url" > "%BASE_DIR%..\test\out\unit_server.xml"

@echo Test results in test/out
