import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 37,
    tokenName: 'SLM',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x577b7ef698af98a990c47be44ba5b1eaa49412f3',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://frontier.xyz/',
    harvest: true,
    tokenPerBlock: '0.2546',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
