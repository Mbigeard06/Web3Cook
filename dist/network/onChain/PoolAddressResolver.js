"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolAddressResolver = void 0;
const ethers_1 = require("ethers");
const InfuraRpcProvider_1 = require("./rpcProvider/InfuraRpcProvider");
const UniswapV3Factory_json_1 = __importDefault(require("../../abi/UniswapV3Factory.json"));
class PoolAddressResolver {
    constructor() {
        //Change that line to your default provider
        this.provider = new InfuraRpcProvider_1.InfuraRpcProvider();
    }
    getPoolAddress(chainId, factoryAddress, tokenA, tokenB) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fee = 3000;
                //Provider Inizialisation
                const provider = this.provider.getProvider(chainId);
                //Factory contract
                const factoryContract = new ethers_1.ethers.Contract(factoryAddress, UniswapV3Factory_json_1.default, provider);
                //Log pool information
                console.log(tokenA);
                console.log(tokenB);
                console.log(fee);
                const poolAddress = yield factoryContract.getPool(tokenA, tokenB, fee);
                console.log(`Adresse de la pool : ${poolAddress}`);
                return poolAddress;
            }
            catch (error) {
                console.error("Erreur lors de la récupération de l'adresse de la pool :", error);
                throw error;
            }
        });
    }
}
exports.PoolAddressResolver = PoolAddressResolver;
