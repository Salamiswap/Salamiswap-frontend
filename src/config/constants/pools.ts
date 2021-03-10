import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 37,
    tokenName: 'SLM',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x78A68Bb21B6fE1385eaaEf233f07C9d433508128',
    contractAddress: {
      97: '',
      56: '0x577b7ef698af98a990c47be44ba5b1eaa49412f3',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://salamiswap.xyz/',
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
