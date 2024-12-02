// Supporting interfaces for type safety
interface PoolInfo {
    address: string;
    token0: string;
    token1: string;
    fee: number;
    tickSpacing: number;
    liquidity: bigint;
}

