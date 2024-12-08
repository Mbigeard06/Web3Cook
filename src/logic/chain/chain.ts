import { errors } from "web3";
import { Dex } from "../exchanges/Dex";
import { ITokenInitialisator } from "../token/ITokenInitialisator";
import { ChainType } from "./types/chainTypes";

/**
 * Store chain data
 */
export abstract class Chain{
    
    private id: number;
    private name: string;
    private type: ChainType;
    //Store token address
    protected tokens: Map<string, string> = new Map();
    protected dexs: Map<string, Dex> = new Map();


    public getId(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getType(): string{
        return this.type;
    }

    /**
     * 
     * @param tokens map thaht contains ticker and addresses
     */
    public setTokens(tokens: Map<string, string>): void{
        this.tokens = tokens;
    }
    /**
     * 
     * @param tokens map thaht contains ticker and addresses
     */
    public getTokenAddress(ticker : string): string{
        const token = this.tokens.get(ticker);
        if(!token){
            throw new Error("Token unfound");
        }
        return token;
    }
    /**
     * 
     * @param name  
     * @param dex 
     */
    public setDex(name: string, dex: Dex){
        this.dexs.set(name, dex);
    }

    public getDex(name: string): Dex{
        const dex = this.dexs.get(name);
        if(!dex){
            throw new Error("Dex unfound");
        }
        return dex;
    }

    /**
     * 
     * @param name chain name
     * @param id chain id 
     */
    constructor(name : string, id: number, type: ChainType){
        this.name = name;
        this.id = id;
        this.type = type;
    }
}