import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'SLM',
    stakingTokenName: QuoteToken.SLM,
    stakingTokenAddress: '0x22E1fCaACaFa3c1E6e2C1FFB0021E2AC55142Af8',
    contractAddress: {
      97: '',
      56: '0xb87cdf3d5c0984963ac9ab5c08d9225bcb5495bb',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://salamiswap.xyz/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
