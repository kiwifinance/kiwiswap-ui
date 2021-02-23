import { MenuEntry } from '@kiwifinancebsc/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farm.kiwiswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://farm.kiwiswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://farm.kiwiswap.finance/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cheeseswap.app/',
      },
      {
        label: 'Tokens',
        href: 'https://info.cheeseswap.app/token/0xcfdf8a80fecaeecc144fa74c0df8691bfd0e26e3',
      },
      {
        label: 'Pairs',
        href: 'https://info.cheeseswap.app/pair/0xdf8481f4ffb688d940f59f839c2613cc6c40a79e',
      },
      {
        label: 'Accounts',
        href: 'https://info.cheeseswap.app/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/kiwifinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.kiwiswap.finance',
      },
    ],
  },
]

export default config
