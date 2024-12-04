"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dex = void 0;
const PoolAddressResolver_1 = require("../network/onChain/PoolAddressResolver");
/**
 * Abstract base class for Decentralized Exchange (DEX) interactions
 */
class Dex {
    /**
     * Constructor for DEX
     * @param name Dex's name
     * @param version Dex's version
     * @param chainId Blockchain network ID
     * @param factoryAddress Contract address of the DEX factory
     */
    constructor(name, version, chainId, factoryAddress) {
        this.pools = new Map();
        this.name = name;
        this.version = version;
        this.chainId = chainId;
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
    // New getters
    getChainId() {
        return this.chainId;
    }
    getFactoryAddress() {
        return this.factoryAddress;
    }
    /**
     *
     * @param pair pool's pair
     * @param poolAddress pool's address
     */
    addPoolAddress(pair, poolAddress) {
        this.pools.set(pair, poolAddress);
    }
}
exports.Dex = Dex;
