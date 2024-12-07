"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DexFactory_1 = require("./exchanges/factory/DexFactory");
try {
    const factory = new DexFactory_1.DexFactory();
    // Création d'un objet TokenPair
    const tokenPair = {
        tokenA: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
        tokenB: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
    };
    // Utilisation de la méthode addLiquidityPool
    console.log("Dex's name : ");
    console.log(factory.getDex("UniswapV3Eth").getName());
    factory.getDex("UniswapV3Eth").addLiquidityPool(tokenPair);
}
catch (error) {
    console.error("Erreur lors de l'ajout de la liquidity pool :", error);
}
