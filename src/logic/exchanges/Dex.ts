import { IPoolAddressResolver } from "../../network/onChain/PoolAddressResolver/IPoolAddressResolver";
import { PoolAddressResolver } from "../../network/onChain/PoolAddressResolver/PoolAddressResolver";
import { getInfuraNetwork } from "../../network/onChain/rpcProvider/chains";

/**
 * Abstract base class for Decentralized Exchange (DEX) interactions
 */
export abstract class Dex {
    protected name: string;
    protected version: number;
    protected factoryAddress: string;

    protected poolAddressResolver : IPoolAddressResolver;

    protected pools: Map<TokenPair, string> = new Map();

    /**
     * Constructor for DEX
     * @param name Dex's name
     * @param version Dex's version
     * @param factoryAddress Contract address of the DEX factory
     */
    constructor(
        name: string,
        version: number,
        factoryAddress: string,
    ) {
        this.name = name;
        this.version = version;
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
     * Add a new liquidity pool
     * @param pair pool's pair
     * @param poolAddress pool's address
     */
    public abstract addLiquidityPool(pair: TokenPair, chainId: number): Promise<void>;
}