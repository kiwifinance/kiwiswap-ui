# Kiwi Swap Listing Tutorial

So, you’ve come, you’ve tasted our secret sauce 🥝 and now you’re wanting to be a part of the KiwiSwap kitchen.

If you’re interested in listing on the KiwiSwap exchange, follow this guide closely.

## Requirements

If you are seeking to be added to the [Kiwiswap.finance](https://kiwiswap.finance/) exchange, you should open a [listing request issue](#). Someone from the team will review your application. Once it's validated, you can jump to the mext step.

## Adding Tokens

1. Fork the [KiwiSwap Interface](https://github.com/kiwiswap/kiwiswap-interface/) repository on GitHub
2. Upload your **logo** in a 96\*96px transparent .png format to the `/public/images/coins` directory. Please name the logo as your symbol in uppercase.

3. Add your **token information** using the example format provided below to `kiwiswap.json` in the `/src/constants/token/` directory.

4. Create a **pull request** detailing information about your project, website address, and contact details (telegram)

## Examples

**Logo format:**

`KIWI.png`

**Token information format:**

```json
{
"name": "Kiwi Token",
"symbol": "KIWI",
"address": "0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3",
"chainId": 56,
"decimals": 18,
"logoURI": "/images/coins/KIWI.png"
},
```

If you're not comfortable with GitHub pull requests, please open a [new issue](https://github.com/kiwiswap/kiwiswap-interface/issues/new) requesting to be added.

## Reviews

Once added, tokens are also re-reviewed at regular intervals in order to maintain quality assurance in-line with the below criteria, and may be removed should severe and/or unresolved issues be encountered.

### Criteria

- Volume
- Liquidity
- Community feedback
