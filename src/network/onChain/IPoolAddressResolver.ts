export interface IPoolAddressResolver {
    /**
     * 
     * @param chainId 
     * @param factoryAddress
     * @param tokenA 
     * @param tokenB 
     */
    getPoolAddress(
        chainId: number,
        factoryAddress: string,
        tokenA: string,
        tokenB: string
    ): Promise<string>;
}