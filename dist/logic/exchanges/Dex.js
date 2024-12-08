"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dex = void 0;
const PoolAddressResolver_1 = require("../../network/onChain/PoolAddressResolver/PoolAddressResolver");
/**
 * Abstract base class for Decentralized Exchange (DEX) interactions
 */
class Dex {
    /**
     * Constructor for DEX
     * @param name Dex's name
     * @param version Dex's version
     * @param factoryAddress Contract address of the DEX factory
     */
    constructor(name, version, factoryAddress) {
        this.pools = new Map();
        this.name = name;
        this.version = version;
        this.factoryAddress = factoryAddress;
        this.poolAddressResolver = new PoolAddressResolver_1.PoolAddressResolver();
    }
    // Existing getters
    getName() {
        return this.name;
    }
    getVersion() {
        return this.version;
    }
    getFactoryAddress() {
        return this.factoryAddress;
    }
}
exports.Dex = Dex;
