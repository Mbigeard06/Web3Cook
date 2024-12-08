import { FakeTokenAddressProvider } from "../../network/onChain/tokenAddressProvider/FakeTokenAddressProvider";
import { ITokenAddressProvider } from "../../network/onChain/tokenAddressProvider/ITokenAddressProvider";
import { Chain } from "../chain/chain";
import { ITokenInitialisator } from "./ITokenInitialisator";

export class TokensInitialisator implements ITokenInitialisator{

    private tokenProvider: ITokenAddressProvider = new FakeTokenAddressProvider();

    InitializeTokens(chain: Chain): void {
        chain.setTokens(this.tokenProvider.GetTokensAddresss(chain.getId()));
    }
}