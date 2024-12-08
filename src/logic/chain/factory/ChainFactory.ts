import { Chain } from "../chain";
import { ChainFactoryInitialisator } from "./ChainFactoryInitialisator";
import { IChainFactoryInitialisator } from "./IChainFactoryInitialisator";

export class ChainFactory{
    //Dex registry
    private chainRegistry : Map<string, Chain>;
    private initialisator : IChainFactoryInitialisator;

    constructor() {
        this.chainRegistry = new Map();
        this.initialisator = new ChainFactoryInitialisator();
        this.initialisator.initializeFactory(this);
    }

    /**
     * 
     * @param name chain's name
     * @returns 
     */
    getChain(name : string): Chain{
        const dex = this.chainRegistry.get(name);
        if(!dex){
            throw new Error(`Chain "${name}" is not registered.`);
        }
        return dex;
    }

    /**
     * 
     * @param name : Chain's name 
     * @param dex : Chain's object
     */
    registerChain(name: string, chain: Chain): void{
        if(this.chainRegistry.has(name)){
            throw new Error(`Chain name is already registred`);
        }
        this.chainRegistry.set(name, chain);
    }
}