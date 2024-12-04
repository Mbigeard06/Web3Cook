import { ethers, JsonRpcProvider } from "ethers";
import { SupportedChains, getInfuraNetwork } from "./chains";
import { IRpcProvider } from "./IRpcProvider";

export class InfuraRpcProvider implements IRpcProvider {

  public getProvider(chainId: keyof typeof getInfuraNetwork): JsonRpcProvider {
    const infuraKey = process.env.INFURA_KEY;
    console.log(infuraKey);

    if (!infuraKey) {
      throw new Error("INFURA_KEY is not set in environment variables");
    }

    const network = getInfuraNetwork[chainId];
    if (!network) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }
    console.log(`https://${network}.infura.io/v3/${infuraKey}`);
    return new ethers.JsonRpcProvider(`https://${network}.infura.io/v3/${infuraKey}`);
  }
}
