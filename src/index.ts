import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
import { InfuraRpcProvider } from "./network/onChain/rpcProvider/InfuraRpcProvider";
import { DexFactory } from "./logic/exchanges/factory/DexFactory";
import { ChainFactory } from "./logic/chain/factory/ChainFactory";


try {
  const dexfactory = new DexFactory();
  let chainFactory: ChainFactory = new ChainFactory();
  //Get eth mainet
  const ethMainet = chainFactory.getChain("Mainet");
  //Register dex on the chain //Fix all UNISWAP V3 are the same juste the chain changes
  ethMainet.setDex(dexfactory.getDex("UniswapV3Eth").getName(), dexfactory.getDex("UniswapV3Eth"));

  console.log(ethMainet.getDex("UniswapV3Eth").getName());

  // Création d'un objet TokenPair
  const tokenPair: TokenPair = {
    tokenA: ethMainet.getTokenAddress("WETH"), // WETH
    tokenB: ethMainet.getTokenAddress("USDC") // USDC
  };

  // Affichage des adresses des tokens
  console.log(`Token A: ${tokenPair.tokenA}`);
  console.log(`Token B: ${tokenPair.tokenB}`);

  ethMainet.getDex("UniswapV3Eth").addLiquidityPool(tokenPair, ethMainet.getId());
} catch (error) {
  console.error("Erreur lors de l'ajout de la liquidity pool :", error);
}