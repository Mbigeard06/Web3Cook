"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3Base = void 0;
const Dex_1 = require("../Dex");
class UniswapV3Base extends Dex_1.Dex {
    getPoolInfo(tokenA, tokenB) {
        throw new Error("Method not implemented.");
    }
    getPoolPrice(tokenA, tokenB, amount) {
        throw new Error("Method not implemented.");
    }
    getPoolLiquidity(tokenA, tokenB) {
        throw new Error("Method not implemented.");
    }
}
exports.UniswapV3Base = UniswapV3Base;
