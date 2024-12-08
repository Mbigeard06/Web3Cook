"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3Base = void 0;
const Dex_1 = require("../Dex");
class UniswapV3Base extends Dex_1.Dex {
    addLiquidityPool(pair, chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.poolAddressResolver.getPoolAddress(chainId, this.factoryAddress, pair.tokenA, pair.tokenB);
            this.pools.set(pair, address);
        });
    }
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
