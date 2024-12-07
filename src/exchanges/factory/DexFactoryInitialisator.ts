import { UniswapV3Base } from "../dexImplementation/UniswapV3Base";
import { UniswapV3Eth } from "../dexImplementation/UniswapV3Eth";
import { DexFactory } from "./DexFactory";

//Singleton
export class DexFactoryInitialisator{
    private static instance: DexFactoryInitialisator;

    /**
     * 
     * @returns singleton instance
     */
    public static getInstance(): DexFactoryInitialisator{
        if(!this.instance){
            //Singleton not initialize
            this.instance = new DexFactoryInitialisator;
        }
        return this.instance;
    }

    /**
     * 
     * @param dexFactory factory to initalize
     */
    public static initializeFactory(dexFactory : DexFactory): void{
        //Wrong address for base
        dexFactory.registerDex("UniswapV3Base", new UniswapV3Base("UniswapV3Base",3,8453,'0x1F98431c8aD98523631AE4a59f267346ea31F984'))
        //Mainet eth
        dexFactory.registerDex("UniswapV3Eth", new UniswapV3Eth("UniswapV3Eth",3,1,'0x1F98431c8aD98523631AE4a59f267346ea31F984'))
    }
}