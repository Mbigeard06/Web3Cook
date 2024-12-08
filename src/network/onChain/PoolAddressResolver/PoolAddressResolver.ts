import { ethers } from "ethers";
import { IPoolAddressResolver } from "./IPoolAddressResolver";
import { IRpcProvider } from "../rpcProvider/IRpcProvider";
import { InfuraRpcProvider } from "../rpcProvider/InfuraRpcProvider";
import UniswapV3FactoryABI from "../../../abi/UniswapV3Factory.json";
import { getInfuraNetwork } from "../rpcProvider/chains";

export class PoolAddressResolver implements IPoolAddressResolver{

    provider : IRpcProvider;

    constructor(){
        //Change that line to your default provider
        this.provider = new InfuraRpcProvider();
    }

    async getPoolAddress(
        chainId: keyof typeof getInfuraNetwork,
        factoryAddress: string,
        tokenA: string,
        tokenB: string,
      ): Promise<string> {
        try {
          const fee = 3000;    
          //Provider Inizialisation
          const provider = this.provider.getProvider(chainId)
    
          //Factory contract
          const factoryContract = new ethers.Contract(
            factoryAddress,
            UniswapV3FactoryABI,
            provider
          );
    
          const poolAddress: string = await factoryContract.getPool(tokenA, tokenB, fee);
          
          console.log(`Adresse de la pool : ${poolAddress}`);
          return poolAddress;
        } catch (error) {
          console.error("Erreur lors de la récupération de l'adresse de la pool :", error);
          throw error;
        }
      }
    }