"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexFactoryInitialisator = void 0;
const UniswapV3Base_1 = require("../dexImplementation/UniswapV3Base");
const UniswapV3Eth_1 = require("../dexImplementation/UniswapV3Eth");
//Singleton
class DexFactoryInitialisator {
    /**
     *
     * @returns singleton instance
     */
    static getInstance() {
        if (!this.instance) {
            //Singleton not initialize
            this.instance = new DexFactoryInitialisator;
        }
        return this.instance;
    }
    /**
     *
     * @param dexFactory factory to initalize
     */
    static initializeFactory(dexFactory) {
        //Wrong address for base
        dexFactory.registerDex("UniswapV3Base", new UniswapV3Base_1.UniswapV3Base("UniswapV3Base", 3, 8453, '0x1F98431c8aD98523631AE4a59f267346ea31F984'));
        //Mainet eth
        dexFactory.registerDex("UniswapV3Eth", new UniswapV3Eth_1.UniswapV3Eth("UniswapV3Eth", 3, 1, '0x1F98431c8aD98523631AE4a59f267346ea31F984'));
    }
}
exports.DexFactoryInitialisator = DexFactoryInitialisator;
