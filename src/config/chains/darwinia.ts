import { ChainId } from '@/types/chains';
import type { ChainConfig } from '@/types/chains';
import { getRpcUrl } from '../rpc-url';

export const darwinia: ChainConfig = {
  id: ChainId.DARWINIA,
  name: 'Darwinia',
  nativeCurrency: {
    name: 'RING',
    symbol: 'RING',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [getRpcUrl(ChainId.DARWINIA)]
    }
  },
  blockExplorers: {
    default: {
      name: 'Subscan',
      url: 'https://darwinia.subscan.io/'
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 251739
    }
  },

  iconUrl: '/images/chains/darwinia.png',
  shortName: 'darwinia'
} as const satisfies ChainConfig;
