import { getInfuraNetwork } from "../../../network/onChain/rpcProvider/chains";
import { Dex } from "../Dex";

export class UniswapV3Eth extends Dex{

    public async addLiquidityPool(pair: TokenPair, chainId : number): Promise<void> {
        const address = await this.poolAddressResolver.getPoolAddress(chainId as keyof typeof getInfuraNetwork, this.factoryAddress, pair.tokenA, pair.tokenB );
        this.pools.set(pair, address);
    }
    
    public getPoolInfo(tokenA: string, tokenB: string): Promise<PoolInfo> {
        throw new Error("Method not implemented.");
    }
    public getPoolPrice(tokenA: string, tokenB: string, amount: bigint): Promise<PriceInfo> {
        throw new Error("Method not implemented.");
    }
    public getPoolLiquidity(tokenA: string, tokenB: string): Promise<LiquidityInfo> {
        throw new Error("Method not implemented.");
    }
    
}