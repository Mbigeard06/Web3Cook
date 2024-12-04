"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexFactoryInitialisator = void 0;
const UniswapV3Base_1 = require("../dexImplementation/UniswapV3Base");
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
        dexFactory.registerDex("UniswapV3Base", new UniswapV3Base_1.UniswapV3Base('Uniswap', 3, 8453, '0x1F98431c8aD98523631AE4a59f267346ea31F984'));
    }
}
exports.DexFactoryInitialisator = DexFactoryInitialisator;
