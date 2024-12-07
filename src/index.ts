import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
import { InfuraRpcProvider } from "./network/onChain/rpcProvider/InfuraRpcProvider";
import { DexFactory } from "./exchanges/factory/DexFactory";


try {
  const factory = new DexFactory();

  // Création d'un objet TokenPair
  const tokenPair: TokenPair = {
    tokenA: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
    tokenB: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
  };

  // Utilisation de la méthode addLiquidityPool
  console.log("Dex's name : ");
  console.log(factory.getDex("UniswapV3Eth").getName());
  factory.getDex("UniswapV3Eth").addLiquidityPool(tokenPair);
} catch (error) {
  console.error("Erreur lors de l'ajout de la liquidity pool :", error);
}