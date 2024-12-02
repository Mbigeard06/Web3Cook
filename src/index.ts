import Web3 from "web3";
import dotenv from 'dotenv';
dotenv.config();

// Provider
const provider = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;

console.log("Infura Key:", process.env.INFURA_KEY);
const web3 = new Web3(provider);

async function getBalance(address: string) {
    try {
        // Récupérer le solde en Wei
        const balanceWei = await web3.eth.getBalance(address);
        // Convertir le solde en Ether
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether');

        // Afficher le solde
        console.log(`Le solde de l'adresse ${address} est : ${balanceEther} ETH`);
    } catch (error) {
        console.error("Erreur lors de la récupération du solde :", error);
    }
}

// Appeler la fonction
getBalance("0x4c3bE2abcb16c4984F8a4A9bfEb86e3b7E840BAD");
