"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
/**
 * Store chain data
 */
class Chain {
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    /**
     *
     * @param tokens map thaht contains ticker and addresses
     */
    setTokens(tokens) {
        this.tokens = tokens;
    }
    /**
     *
     * @param tokens map thaht contains ticker and addresses
     */
    getTokenAddress(ticker) {
        const token = this.tokens.get(ticker);
        if (!token) {
            throw new Error("Token unfound");
        }
        return token;
    }
    /**
     *
     * @param name
     * @param dex
     */
    setDex(name, dex) {
        this.dexs.set(name, dex);
    }
    getDex(name) {
        const dex = this.dexs.get(name);
        if (!dex) {
            throw new Error("Dex unfound");
        }
        return dex;
    }
    /**
     *
     * @param name chain name
     * @param id chain id
     */
    constructor(name, id, type) {
        //Store token address
        this.tokens = new Map();
        this.dexs = new Map();
        this.name = name;
        this.id = id;
        this.type = type;
    }
}
exports.Chain = Chain;
