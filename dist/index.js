"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Provider
const provider = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
console.log("Infura Key:", process.env.INFURA_KEY);
const web3 = new web3_1.default(provider);
function getBalance(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Récupérer le solde en Wei
            const balanceWei = yield web3.eth.getBalance(address);
            // Convertir le solde en Ether
            const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
            // Afficher le solde
            console.log(`Le solde de l'adresse ${address} est : ${balanceEther} ETH`);
        }
        catch (error) {
            console.error("Erreur lors de la récupération du solde :", error);
        }
    });
}
// Appeler la fonction
getBalance("0x4c3bE2abcb16c4984F8a4A9bfEb86e3b7E840BAD");
