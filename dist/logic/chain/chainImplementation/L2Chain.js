"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2Chain = void 0;
const chain_1 = require("../chain");
/**
 * Represents L2s
 */
class L2Chain extends chain_1.Chain {
    constructor(name, id, type) {
        super(name, id, type);
    }
}
exports.L2Chain = L2Chain;
