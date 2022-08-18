export const TokenInfo = {
  "COPY_THIS_AND_REPLACE_WITH_LOWERCASE_CONTRACT_ADDRESS": {
    description: 'Copy this entire section and add to end of list, keeping the trailing comma. Any unused fields may be set to null. Do not leave any example values.',
    discord: 'tokenchat',
    docs: 'https://docs.token.com',
    github: 'tokendev',
    gitlab: 'tokendev',
    telegram: 'tokenchat',
    twitter: 'token_news',
    website: 'https://token.com',
    whitepaper: 'https://token.com/whitepaper.pdf',
  },
  "0x95d366dc75ee657a977683d84546163b4e905a15": {
    description: 'Mist is the native token of the MistSwap protocol.',
    discord: 'https://discord.com/invite/mistswapdex',
    docs: 'https://docs.mistswap.fi',
    github: 'https://github.com/mistswapdex',
    gitlab: null,
    telegram: 'https://t.me/MistSwapOfficial',
    twitter: 'https://twitter.com/mistswapdex',
    website: 'https://mistswap.fi',
    whitepaper: null,
  },
  "0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101": {
    description: 'Wrapped BCH is an utility token allowing to swap BCH with other SEP20 compatible tokens.',
    discord: null,
    docs: null,
    github: null,
    gitlab: null,
    telegram: null,
    twitter: null,
    website: null,
    whitepaper: null,
  },
  "0x9192940099fdb2338b928de2cad9cd1525fea881": {
    description: 'BCHPad is a DeFi Launchpad for Smart Bitcoin Cash.',
    discord: null,
    docs: null,
    github: 'https://github.com/BCHPad',
    gitlab: null,
    telegram: 'https://t.me/bchpad',
    twitter: 'https://twitter.com/bchpad',
    website: 'https://bchpad.cash',
    whitepaper: 'https://www.bchpad.cash/litepaper.pdf',
  },
}

export function fetchTokenInfo() {
  return fetch(`https://raw.githubusercontent.com/MarketCap-Cash/SmartBCH-Token-List/main/tokens.json`)
    .then((res) => res.json())
    .then((data) => {
      let info = { ...TokenInfo }

      for (let [key, value] of Object.entries(data)) {
        value.address = (value.address || "").toLowerCase()
        if (info[value.address])
          continue;

        info[value.address] = {
          name: value.name,
          description: value.desc,
          address: value.address,
          symbol: value.symbol,
          telegram: value.telegram,
          twitter: value.twitter,
          discord: value.discord,
          website: (value.websites || [])[0],
          whitepaper: value.whitepaper
        }
      }

      return info
  })
}
