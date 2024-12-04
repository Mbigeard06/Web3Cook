"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfuraNetwork = exports.SupportedChains = void 0;
exports.SupportedChains = {
    Mainnet: 1,
    Goerli: 5,
    Sepolia: 11155111,
    Polygon: 137,
    Optimism: 10,
    Arbitrum: 42161,
    Base: 8453
};
exports.getInfuraNetwork = {
    [exports.SupportedChains.Mainnet]: "mainnet",
    [exports.SupportedChains.Goerli]: "goerli",
    [exports.SupportedChains.Sepolia]: "sepolia",
    [exports.SupportedChains.Polygon]: "polygon-mainnet",
    [exports.SupportedChains.Optimism]: "optimism-mainnet",
    [exports.SupportedChains.Arbitrum]: "arbitrum-mainnet",
    [exports.SupportedChains.Base]: "base-sepolia"
};
