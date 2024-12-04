import { JsonRpcProvider } from "ethers";
import { getInfuraNetwork } from "./chains";

export interface IRpcProvider {
    /**
     * 
     * @returns RpcProvider
     */
    getProvider(chainId: keyof typeof getInfuraNetwork): JsonRpcProvider;
}