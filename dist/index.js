"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const InfuraRpcProvider_1 = require("./network/onChain/rpcProvider/InfuraRpcProvider");
// Crée une instance de InfuraRpcProvider
let infuraProvider = new InfuraRpcProvider_1.InfuraRpcProvider();
try {
    // Initialisation du provider avec le chainId 8453 (Exemple : Base mainnet)
    let rpcProvider = infuraProvider.getProvider(8453);
    // Requête pour obtenir le dernier numéro de bloc
    rpcProvider.getBlockNumber().then((blockNumber) => {
        console.log(`Dernier numéro de bloc pour chainId 8453 : ${blockNumber}`);
    }).catch((error) => {
        console.error("Erreur lors de la récupération du numéro de bloc :", error);
    });
}
catch (error) {
    console.error("Erreur lors de la configuration du provider :", error);
}
