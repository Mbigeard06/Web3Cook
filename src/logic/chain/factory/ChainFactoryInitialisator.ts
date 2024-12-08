import { EthMainet } from "../chainImplementation/EthMainet";
import { L2Chain } from "../chainImplementation/L2Chain";
import { ChainType } from "../types/chainTypes";
import { ChainFactory } from "./ChainFactory";
import { IChainFactoryInitialisator } from "./IChainFactoryInitialisator";


export class ChainFactoryInitialisator implements IChainFactoryInitialisator{
    
    initializeFactory(chainFactory: ChainFactory): void {
        chainFactory.registerChain("Base", new L2Chain("Base", 8453, ChainType.L2))
        chainFactory.registerChain("Mainet", new EthMainet("EthMainet", 1, ChainType.EthereumL1))
    }
    private static instance: ChainFactoryInitialisator;

}