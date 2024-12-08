"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainFactory = void 0;
const ChainFactoryInitialisator_1 = require("./ChainFactoryInitialisator");
class ChainFactory {
    constructor() {
        this.chainRegistry = new Map();
        this.initialisator = new ChainFactoryInitialisator_1.ChainFactoryInitialisator();
        this.initialisator.initializeFactory(this);
    }
    /**
     *
     * @param name chain's name
     * @returns
     */
    getChain(name) {
        const dex = this.chainRegistry.get(name);
        if (!dex) {
            throw new Error(`Chain "${name}" is not registered.`);
        }
        return dex;
    }
    /**
     *
     * @param name : Chain's name
     * @param dex : Chain's object
     */
    registerChain(name, chain) {
        if (this.chainRegistry.has(name)) {
            throw new Error(`Chain name is already registred`);
        }
        this.chainRegistry.set(name, chain);
    }
}
exports.ChainFactory = ChainFactory;
