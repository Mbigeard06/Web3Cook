export const SupportedChains = {
    Mainnet: 1,
    Goerli: 5,
    Sepolia: 11155111,
    Polygon: 137,
    Optimism: 10,
    Arbitrum: 42161,
    Base: 8453
  } as const;
  
  export const getInfuraNetwork = {
    [SupportedChains.Mainnet]: "mainnet",
    [SupportedChains.Goerli]: "goerli",
    [SupportedChains.Sepolia]: "sepolia",
    [SupportedChains.Polygon]: "polygon-mainnet",
    [SupportedChains.Optimism]: "optimism-mainnet",
    [SupportedChains.Arbitrum]: "arbitrum-mainnet",
    [SupportedChains.Base]: "base-sepolia"
  } as const;
  