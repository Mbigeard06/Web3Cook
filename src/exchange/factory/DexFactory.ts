import { Dex } from "../Dex";

class DexFactory{
    //Dex registry
    private dexRegistry : Map<string, Dex>;

    constructor() {
        this.dexRegistry = new Map();
        DexFactoryInitialisator.initializeFactory(this);
    }

    /**
     * 
     * @param name dex's name
     * @returns Dex ob
     */
    getDex(name : string): Dex{
        const dex = this.dexRegistry.get(name);
        if(!dex){
            throw new Error(`DEX "${name}" is not registered.`);
        }
        return dex;
    }

    /**
     * 
     * @param name : Dex's name 
     * @param dex : Dex's object
     */
    registerDex(name: string, dex: Dex): void{
        if(this.dexRegistry.has(name)){
            throw new Error(`Dex name is already registred`);
        }
        this.dexRegistry.set(name, dex);
    }
}