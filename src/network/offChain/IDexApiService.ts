/**
 * Interface to communicate with the Dex Api (subgraph)
 */
export interface ILiquidityPoolPrice {
    /**
     * Récupère le prix d'un pool de liquidité
     * @param tokenA Adresse du premier token
     * @param tokenB Adresse du second token
     * @param poolAddress Adresse du pool de liquidité
     * @returns Le prix sous forme de nombre
     */
    getPoolPrice(tokenA: string, tokenB: string, poolAddress: string): Promise<number>;
}