import { getInfuraNetwork } from "./rpcProvider/chains";

export interface IPoolAddressResolver {
    /**
     * 
     * @param chainId 
     * @param factoryAddress
     * @param tokenA 
     * @param tokenB 
     */
    getPoolAddress(
        chainId: keyof typeof getInfuraNetwork,
        factoryAddress: string,
        tokenA: string,
        tokenB: string
    ): Promise<string>;
}