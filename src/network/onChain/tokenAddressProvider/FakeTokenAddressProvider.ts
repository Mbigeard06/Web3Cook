import { ITokenAddressProvider } from "./ITokenAddressProvider";

export class FakeTokenAddressProvider implements ITokenAddressProvider{

    GetTokensAddresss(chain: number): Map<string, string> {
        let map = new Map<string,string>();
        map.set("WETH","0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
        map.set("USDC","0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");
        return map;
    }
}