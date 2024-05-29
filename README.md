# Nethermind API test

Nethermind API test project with Github Action executions. Test created in TypeScript cover ednpoints 
```
eth_blockNumber; eth_syncing; eth_getBlockByNumber; eth_gasPrice
```

Test verify:
 - status code
 - response data properties
 - response data properties value
 - response schema
 - error message


 ## Intalation

 1. Sedge requires Docker to be installed with the Docker composer plugin to work.
 2. Test requires Node.js to be installed.
 3. Install Sedge, Sedge documentation: https://docs.sedge.nethermind.io/ for more information.
 4. Run Sedge by commad
 ```
./sedge deps install
./sedge generate --logging none -p $HOME full-node \
--map-all --no-mev-boost --no-validator \
--network chiado -c lighthouse:sigp/lighthouse:latest \
-e nethermind:nethermindeth/nethermind:master \
--el-extra-flag Sync.NonValidatorNode=true \
--el-extra-flag Sync.DownloadBodiesInFastSync=false \
--el-extra-flag Sync.DownloadReceiptsInFastSync=false \
--el-extra-flag JsonRpc.EnabledModules=[Eth,TxPool,Web3,Net,Health,Rpc,Debug] \
--cl-extra-flag checkpoint-sync-url=http://139.144.26.89:4000/
./sedge run -p .
```

Wait for State Node sync. Endpot ```eth_syncing``` should return 
```
{
    "jsonrpc": "2.0",
    "result": false,
    "id": 0
}
```

5. Install test project, run command
```
npm install
```

## Test executions

Execute test script by command
```
npm run testApi
```

## CI - Github Actions

Test are execute in Github Actions on each push to repository.

## Performamce tests

I've used Postman tool for performace test.
Tested ednpoints
```
eth_blockNumber
eth_getBlockByNumber
```

Test used 20 virtual users. 
1 min of testing make 2119 request in total. 
5 min of testing make 10244 requests in total.

Full report in `performaceReport` directory