import { FakeTokenAddressProvider } from "../../../network/onChain/tokenAddressProvider/FakeTokenAddressProvider";
import { ITokenInitialisator } from "../../token/ITokenInitialisator";
import { TokensInitialisator } from "../../token/TokenInitialisator";
import { Chain } from "../chain";
import { ChainType } from "../types/chainTypes";

/**
 * Eth mainnet
 */
export class EthMainet extends Chain{

    private tokensInitialisator: ITokenInitialisator = new TokensInitialisator();
    /**
     * 
     * @param name 
     * @param type chain's type => change object methods
     */
    constructor(name: string, id : number, type: ChainType){
        super(name, id, type);
        this.tokensInitialisator.InitializeTokens(this);
    }
}