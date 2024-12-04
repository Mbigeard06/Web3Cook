import { IPoolAddressResolver } from "../network/onChain/IPoolAddressResolver";
import { PoolAddressResolver } from "../network/onChain/PoolAddressResolver";

/**
 * Abstract base class for Decentralized Exchange (DEX) interactions
 */
export abstract class Dex {
    protected name: string;
    protected version: number;
    protected chainId: number;
    protected factoryAddress: string;

    protected poolAddressResolver : IPoolAddressResolver;

    private pools: Map<TokenPair, string> = new Map();

    /**
     * Constructor for DEX
     * @param name Dex's name
     * @param version Dex's version
     * @param chainId Blockchain network ID
     * @param factoryAddress Contract address of the DEX factory
     */
    constructor(
        name: string,
        version: number,
        chainId: number,
        factoryAddress: string,
    ) {
        this.name = name;
        this.version = version;
        this.chainId = chainId;
        this.factoryAddress = factoryAddress;
        this.poolAddressResolver = new PoolAddressResolver();
    }

    // Existing getters
    public getName(): string {
        return this.name;
    }

    public getVersion(): number {
        return this.version;
    }

    // New getters
    public getChainId(): number {
        return this.chainId;
    }

    public getFactoryAddress(): string {
        return this.factoryAddress;
    }

    // Abstract methods to be implemented by child classes
    /**
     * Fetches pool information
     * @param tokenA Address of first token
     * @param tokenB Address of second token
     * @returns Promise with pool details
     */
    public abstract getPoolInfo(tokenA: string, tokenB: string): Promise<PoolInfo>;

    /**
     * Calculates price for a specific pool
     * @param tokenA Address of first token
     * @param tokenB Address of second token
     * @param amount Amount to calculate price for
     * @returns Promise with price information
     */
    public abstract getPoolPrice(tokenA: string, tokenB: string, amount: bigint): Promise<PriceInfo>;

    /**
     * Retrieves liquidity for a specific pool
     * @param tokenA Address of first token
     * @param tokenB Address of second token
     * @returns Promise with liquidity details
     */
    public abstract getPoolLiquidity(tokenA: string, tokenB: string): Promise<LiquidityInfo>;

    /**
     * 
     * @param pair pool's pair
     * @param poolAddress pool's address
     */
    protected addPoolAddress(pair: TokenPair, poolAddress: string): void {
        this.pools.set(pair, poolAddress);
    }
}