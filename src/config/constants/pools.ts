import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 37,
    tokenName: 'SLM',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x577b7ef698af98a990c47be44ba5b1eaa49412f3',
    contractAddress: {
      97: '',
      56: '0x22E1fCaACaFa3c1E6e2C1FFB0021E2AC55142Af8',
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
