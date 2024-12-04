import { ethers, JsonRpcProvider } from "ethers";
import { SupportedChains, getInfuraNetwork } from "./chains";

export class InfuraRpcProvider {

  public getProvider(chainId: keyof typeof getInfuraNetwork): JsonRpcProvider {
    const infuraKey = process.env.INFURA_KEY;

    if (!infuraKey) {
      throw new Error("INFURA_KEY is not set in environment variables");
    }

    const network = getInfuraNetwork[chainId];
    if (!network) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }

    return new ethers.JsonRpcProvider(`https://${network}.infura.io/v3/${infuraKey}`);
  }
}
