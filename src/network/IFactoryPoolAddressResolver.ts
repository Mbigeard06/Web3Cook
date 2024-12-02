export interface IFactoryPoolAddressResolver {
    getPoolAddress(
        chainId: number,
        factoryAddress: string,
        tokenA: string,
        tokenB: string
    ): Promise<string>;

    getAllPoolAddresses(
        chainId: number,
        factoryAddress: string
    ): Promise<string[]>;

    isPoolExists(
        chainId: number,
        factoryAddress: string,
        tokenA: string,
        tokenB: string
    ): Promise<boolean>;
}