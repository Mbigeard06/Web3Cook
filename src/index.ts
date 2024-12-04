import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

import { InfuraRpcProvider } from "./network/onChain/rpcProvider/InfuraRpcProvider";

// Crée une instance de InfuraRpcProvider
let infuraProvider = new InfuraRpcProvider();

try {
  // Initialisation du provider avec le chainId 8453 (Exemple : Base mainnet)
  let rpcProvider = infuraProvider.getProvider(8453);

  // Requête pour obtenir le dernier numéro de bloc
  rpcProvider.getBlockNumber().then((blockNumber) => {
    console.log(`Dernier numéro de bloc pour chainId 8453 : ${blockNumber}`);
  }).catch((error) => {
    console.error("Erreur lors de la récupération du numéro de bloc :", error);
  });

} catch (error) {
  console.error("Erreur lors de la configuration du provider :", error);
}
