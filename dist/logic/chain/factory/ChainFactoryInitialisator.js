"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainFactoryInitialisator = void 0;
const EthMainet_1 = require("../chainImplementation/EthMainet");
const L2Chain_1 = require("../chainImplementation/L2Chain");
const chainTypes_1 = require("../types/chainTypes");
class ChainFactoryInitialisator {
    initializeFactory(chainFactory) {
        chainFactory.registerChain("Base", new L2Chain_1.L2Chain("Base", 8453, chainTypes_1.ChainType.L2));
        chainFactory.registerChain("Mainet", new EthMainet_1.EthMainet("EthMainet", 1, chainTypes_1.ChainType.EthereumL1));
    }
}
exports.ChainFactoryInitialisator = ChainFactoryInitialisator;
