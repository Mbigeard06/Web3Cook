"use strict";
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
     * @param routerAddress Contract address of the DEX router
     */
    constructor(name, version, chainId, factoryAddress, routerAddress) {
        this.pools = new Map();
        this.name = name;
        this.version = version;
        this.chainId = chainId;
        this.factoryAddress = factoryAddress;
        this.routerAddress = routerAddress;
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
    getRouterAddress() {
        return this.routerAddress;
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
