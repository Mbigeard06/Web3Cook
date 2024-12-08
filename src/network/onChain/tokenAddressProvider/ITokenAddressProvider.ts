export interface ITokenAddressProvider{
    GetTokensAddresss(chain : number) : Map<string,string>;
}