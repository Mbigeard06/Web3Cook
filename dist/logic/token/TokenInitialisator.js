"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensInitialisator = void 0;
const FakeTokenAddressProvider_1 = require("../../network/onChain/tokenAddressProvider/FakeTokenAddressProvider");
class TokensInitialisator {
    constructor() {
        this.tokenProvider = new FakeTokenAddressProvider_1.FakeTokenAddressProvider();
    }
    InitializeTokens(chain) {
        chain.setTokens(this.tokenProvider.GetTokensAddresss(chain.getId()));
    }
}
exports.TokensInitialisator = TokensInitialisator;
