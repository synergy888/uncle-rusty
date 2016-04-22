echo "Starting server-side unit tests..."
node ./node_modules/mocha/bin/mocha -R xunit -t 10000 test/unit/server --globals NODE_CONFIG,key,clientDataTransfer,pathMappingParser,company,product,url > test/out/unit_server.xml

echo "Test results in test/out"
