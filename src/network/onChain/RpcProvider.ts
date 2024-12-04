import { ethers, JsonRpcApiProvider, JsonRpcProvider } from 'ethers';

export class RpcProvider{
    /**
     * 
     * @returns RpcProvider
     */
    getProvider(): JsonRpcProvider{
        return new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`);
    }
}