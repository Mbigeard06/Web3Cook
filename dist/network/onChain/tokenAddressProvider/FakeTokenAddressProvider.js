"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeTokenAddressProvider = void 0;
class FakeTokenAddressProvider {
    GetTokensAddresss(chain) {
        let map = new Map();
        map.set("WETH", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
        map.set("USDC", "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");
        return map;
    }
}
exports.FakeTokenAddressProvider = FakeTokenAddressProvider;
