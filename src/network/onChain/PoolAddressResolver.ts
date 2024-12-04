import { IPoolAddressResolver } from "./IPoolAddressResolver";

export class PoolAddressResolver implements IPoolAddressResolver{

    getPoolAddress(chainId: number, factoryAddress: string, tokenA: string, tokenB: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
}