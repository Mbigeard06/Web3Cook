"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DexFactory_1 = require("./logic/exchanges/factory/DexFactory");
const ChainFactory_1 = require("./logic/chain/factory/ChainFactory");
try {
    const dexfactory = new DexFactory_1.DexFactory();
    let chainFactory = new ChainFactory_1.ChainFactory();
    //Get eth mainet
    const ethMainet = chainFactory.getChain("Mainet");
    //Register dex on the chain //Fix all UNISWAP V3 are the same juste the chain changes
    ethMainet.setDex(dexfactory.getDex("UniswapV3Eth").getName(), dexfactory.getDex("UniswapV3Eth"));
    console.log(ethMainet.getDex("UniswapV3Eth").getName());
    // Création d'un objet TokenPair
    const tokenPair = {
        tokenA: ethMainet.getTokenAddress("WETH"), // WETH
        tokenB: ethMainet.getTokenAddress("USDC") // USDC
    };
    // Affichage des adresses des tokens
    console.log(`Token A: ${tokenPair.tokenA}`);
    console.log(`Token B: ${tokenPair.tokenB}`);
    ethMainet.getDex("UniswapV3Eth").addLiquidityPool(tokenPair, ethMainet.getId());
}
catch (error) {
    console.error("Erreur lors de l'ajout de la liquidity pool :", error);
}
