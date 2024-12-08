"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthMainet = void 0;
const TokenInitialisator_1 = require("../../token/TokenInitialisator");
const chain_1 = require("../chain");
/**
 * Eth mainnet
 */
class EthMainet extends chain_1.Chain {
    /**
     *
     * @param name
     * @param type chain's type => change object methods
     */
    constructor(name, id, type) {
        super(name, id, type);
        this.tokensInitialisator = new TokenInitialisator_1.TokensInitialisator();
        this.tokensInitialisator.InitializeTokens(this);
    }
}
exports.EthMainet = EthMainet;
