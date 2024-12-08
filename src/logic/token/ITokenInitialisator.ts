import { Chain } from "../chain/chain";

export interface ITokenInitialisator{
    /**
     * Initialize onchain token's address
     * @param chain 
     */
    InitializeTokens(chain: Chain): void;
}