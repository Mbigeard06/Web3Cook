//Singleton
class DexFactoryInitialisator{
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
        dexFactory.registerDex(new Dex('Uniswap',3,8453,'0x1F98431c8aD98523631AE4a59f267346ea31F984'))
    }
}