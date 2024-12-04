import { JsonRpcProvider } from "ethers";

export interface IRpcProvider {
    /**
     * 
     * @returns RpcProvider
     */
    getProvider(chainId : number): JsonRpcProvider;
}