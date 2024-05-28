type Payload = {
    jsonrpc: string;
    id: number;
    method: string;
    params: any;
};

export default {
    blockNumber: <Payload>{
        "jsonrpc": "2.0",
        "id": 0,
        "method": "eth_blockNumber",
        "params": []
    },
    syncing: <Payload>{
        "jsonrpc": "2.0",
        "id": 0,
        "method": "eth_syncing",
        "params": []
    },
    getBlockByNumber: <Payload>{
        "jsonrpc": "2.0",
        "id": 0,
        "method": "eth_getBlockByNumber",
        "params": []
    },
    gasPrice: <Payload>{
        "jsonrpc": "2.0",
        "id": 0,
        "method": "eth_gasPrice",
        "params": []
    },
}
