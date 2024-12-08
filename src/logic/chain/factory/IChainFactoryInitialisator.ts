import { ChainFactory } from "./ChainFactory";

/**
 * Factory chain initilisator
 */
export interface IChainFactoryInitialisator{
    initializeFactory(chainFactory : ChainFactory): void;
}