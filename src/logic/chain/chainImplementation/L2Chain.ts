import { Chain } from "../chain";
import { ChainType } from "../types/chainTypes";

/**
 * Represents L2s
 */
export class L2Chain extends Chain {
    constructor(name: string, id : number, type: ChainType){
        super(name, id, type);
    }
}