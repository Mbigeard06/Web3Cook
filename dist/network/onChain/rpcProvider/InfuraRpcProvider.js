"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfuraRpcProvider = void 0;
const ethers_1 = require("ethers");
const chains_1 = require("./chains");
class InfuraRpcProvider {
    getProvider(chainId) {
        const infuraKey = process.env.INFURA_KEY;
        console.log(infuraKey);
        if (!infuraKey) {
            throw new Error("INFURA_KEY is not set in environment variables");
        }
        const network = chains_1.getInfuraNetwork[chainId];
        if (!network) {
            throw new Error(`Unsupported chainId: ${chainId}`);
        }
        console.log(`https://${network}.infura.io/v3/${infuraKey}`);
        return new ethers_1.ethers.JsonRpcProvider(`https://${network}.infura.io/v3/${infuraKey}`);
    }
}
exports.InfuraRpcProvider = InfuraRpcProvider;
