/* eslint-disable @cspell/spellchecker */
import { FAQSectionProps } from "~/app/faq/_parts/Section";

export const faqData: FAQSectionProps[] = [
  {
    heading: "Basics",
    data: [
      {
        title: "What is Kylix?",
        description:
          "Kylix Finance is a new multi-chain Lending platform, designed to manage over-collateralized loans, handling and aggregating liquidity from external chains without the need of using bridges.\n\nUsing a Hub&Spoke architecture, Kylix acts as a liquidity hub for cross-chain operations, registering and managing settlements of cross-chain assets. Everything is recorded on the Kylix blockchain, which functions as a multi-chain ledger.",
      },
      {
        title: "Multi chain approach, how is this going to be executed?",
        description:
          "The multi-chain approach is implemented by registering the virtual settlement of cross-chain transactions on a common ledger at Kylix blockchain, without the need of moving liquidity across chains.\n\nKylix acts as a main liquidity hub for multiple blockchain networks, analogous to the role of a clearing house for financial settlements in traditional finance. Using a hub-and-spoke architecture, Kylix aggregates settlements and maintains status information for cross-chain assets, permissionless ERC-20 tokens, and communicates with external chains with the help of smart contract vaults called **Spokes**.\n\nThis approach provides the users with a unified interface for cross-chain financial operations, meanwhile the platform enables compounded liquidity management, improving capital efficiency across blockchain ecosystems.",
      },
      {
        title: "Which problems are you trying to solve?",
        description:
          "1. The fundamental problem in today's cross-chain ecosystem isn't the lack of bridges or liquidity—it's the absence of intelligent aggregation and optimization. Users typically face issues like high slippage, complex processes, significant waiting times, and inefficient pricing due to fragmented liquidity.\n\n2. DeFi platforms face challenges like liquidity fragmentation, shortages, and inefficient collateral liquidation systems. These issues affect users' ability to access and trade assets effectively.",
      },
    ],
  },
  {
    heading: "The Protocol",
    data: [
      {
        title: "Which chains are supported by Kylix?",
        description:
          "The Kylix platform has the potential to integrate all chains supported by the cross-messaging protocols used by the Kylix Hub (XCM, Wormhole, and Equito Network), totaling 25 potential blockchain networks. Initially, we will focus on supporting Polkadot and Solana, with plans to expand to Ethereum, SUI, SEI, and MintLayer.",
      },
      {
        title: "How are liquidations executed?",
        description:
          "The Kylix marketplace uses a queue-based system to handle liquidations. Assets are made available for purchase by community members through a bidding process, starting with the smallest discount. If bid liquidity is insufficient, Kylix executes asset swaps over multiple paths through partnerships with external market makers.",
      },
      {
        title: "What are self-repaying loans, and how do they benefit users?",
        description:
          "Self-repaying loans are a specialized financial instrument where deposited collateral is converted into an interest-bearing asset that generates income automatically used to cover the debt. This structure allows borrowers to leverage assets supported by liquid staking platforms to hold a loan with negative interest rates.",
      },
      {
        title: "What exactly are polynomial interest rates, and why used?",
        description:
          "Kylix Finance has implemented an innovative interest rate model for its lending pools, designed to incentivize liquidity providers even when market utilization rates are low.",
      },
      {
        title: "How is Kylix legally incorporated?",
        description:
          "Kylix Finance is registered as a Foundation to fulfill regulations, with the name Kylix Labs LLC, in San Vincent, Caribbean Island. This legal configuration allows us to issue the Kylix native utility token.",
      },
      {
        title: "Will Kylix be audited before launch?",
        description:
          "Yes, it will be audited and reviewed by several audit companies, including PAL (Polkadot Assurance Legion), and leverage the security benefits of the vCISO initiative. Kylix will only be released after rigorous auditing and private testing.",
      },
      {
        title: "Will a new token be issued for Kylix?",
        description:
          "The development team will issue a new utility token called $KLX, with an initial market cap of 1B and a perpetual inflation mode of 5% PA. Please refer to the tokenomics outlined in the Kylix whitepaper.",
      },
      {
        title: "What’s the reason for the native KLX token?",
        description:
          "KLX is a utility token that secures the protocol. Validators need KLX to validate and are rewarded in KLX. Borrowing and liquidation on the platform result in automatic fee collection by the Kylix treasury, which is used to reward validators and burn tokens, creating deflationary pressure.",
      },
      {
        title: "How do users get the token to use the network?",
        description:
          "Participants in the Polimec Round can acquire KLX tokens through a private sale. The network also provides a public faucet offering minimal KLX tokens to cover transaction fees.",
      },
      {
        title: "Which assets and chains are supported?",
        description:
          "We will support Polkadot and Solana initially. Other chains, including Ethereum, SUI, SEI, and MintLayer, will follow based on business decisions, oracle availability, and market preference.",
      },
      {
        title: "Can I contact you?",
        description:
          "Feel free to write an email to info@kylix.finance, follow us on our X space x.com/KylixFinance, or join our Discord server at https://discord.gg/UkRcWaTh5p.",
      },
    ],
  },
];
