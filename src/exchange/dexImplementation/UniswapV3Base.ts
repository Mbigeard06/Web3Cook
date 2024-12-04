class UniswapV3Base extends Dex{
    
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