"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcProvider = void 0;
const ethers_1 = require("ethers");
class RpcProvider {
    /**
     *
     * @returns RpcProvider
     */
    getProvider() {
        return new ethers_1.ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`);
    }
}
exports.RpcProvider = RpcProvider;
