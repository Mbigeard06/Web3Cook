"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexFactory = void 0;
const DexFactoryInitialisator_1 = require("./DexFactoryInitialisator");
class DexFactory {
    constructor() {
        this.dexRegistry = new Map();
        DexFactoryInitialisator_1.DexFactoryInitialisator.initializeFactory(this);
    }
    /**
     *
     * @param name dex's name
     * @returns Dex ob
     */
    getDex(name) {
        const dex = this.dexRegistry.get(name);
        if (!dex) {
            throw new Error(`DEX "${name}" is not registered.`);
        }
        return dex;
    }
    /**
     *
     * @param name : Dex's name
     * @param dex : Dex's object
     */
    registerDex(name, dex) {
        if (this.dexRegistry.has(name)) {
            throw new Error(`Dex name is already registred`);
        }
        this.dexRegistry.set(name, dex);
    }
}
exports.DexFactory = DexFactory;
