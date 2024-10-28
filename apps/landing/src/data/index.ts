import {
  Asset,
  FeaturedPartners,
  FooterItem,
  HowItsWork,
  Icon,
  MarketTrend,
  NavItem,
  Security,
  SocialMedia,
  SmartLending,
  Section,
} from "~/types";
import {
  BorrowImage,
  Check,
  DefiSaver,
  Discord,
  Focus,
  InstaDapp,
  Lido,
  Shield,
  StakeHouse,
  Twitter,
  IdleFinance,
} from "~/assets/svgs";

export const smartLendingData: Section<SmartLending> = {
  id: "smart-lending",
  header: "Multi-Chain lending",
  heading: {
    left: "One Platform.",
    right: "Natively Multi-Chain.",
  },
  description:
    "Experience the future of cross-chain Lending with our new Hub&Spoke Technology, designed specifically to offer native multi-chain lending.",
  items: [
    {
      to: "/",
      heading: "LIQUIDITY HUB",
      description:
        "Kylix Finance is a decentralized, trustless intermediary protocol that allows users to easily lend, borrow and earn across multiple networks and blockchains without losing custody of their assets. The Kylix protocol allows users to lend and borrow assets between major blockchains without wrapped tokens, traditional bridging and at extremely competitive rates using a new architectural technology. ",
    },
    {
      to: "/",
      heading: "ONE-PLATFORM",
      description:
        "The Kylix Hub chain stores the entire state of the protocol and provides native lending for cross-chain liquidity managed directly to our lending hub. The unified state storage ensures consistency and avoids issues related to asynchronicity and race conditions between remote chains.",
    },
  ],
};

export const supportedAssetsData: Section<Asset> = {
  header: "Supported Chains",
  heading: { left: "Supported ", right: " CHAINS" },
  description: "Lend, Borrow and Earn seamlessly across:",
  id: "supported-assets-and-apy",
  items: [
    {
      src: "/assets/images/assets/avalaunch.png",
      alt: "Polkadot",
    },
    {
      src: "/assets/images/assets/btc.png",
      alt: "Solana",
    },
    {
      src: "/assets/images/assets/eth.png",
      alt: "Ethereum",
    },
    {
      src: "/assets/images/assets/usdc.png",
      alt: "MintLayer",
    },
  ],
};
export const howItsWorksData: Section<HowItsWork> = {
  header: "Why Kylix?",
  heading: {
    left: "Why",
    right: "Kylix Finance?",
  },
  description:
    " A new-generation multi-chain DeFi Lending Platform with self-repaying loans and an on-chain marketplace for collateral liquidation.",
  id: "how-it's-works",
  items: [
    {
      id: "deposit",
      heading: "DEPOSIT",
      description:
        "Deposit, lend and earn an intererst from your assets from any chain. Make your assets work for you.",
    },
    {
      id: "convert",
      heading: "Borrow",
      description:
        "Borrow, collateralise and repay on any chain, even if you have deposited from a different one!",
    },
    {
      id: "borrow",
      heading: "EARN",
      description:
        "Earn interest on your deposits and loans. Earn rewards for providing liquidity. </br> Earn assets below market prices by participating in the collateral marketplace.",
      image: BorrowImage,
    },
  ],
};
export const securityAndAuditsData: Section<Security> = {
  header: "Security",
  heading: {
    left: "Security",
    right: "at the Forefront",
  },
  description: "New Lending technology to benefit the DeFi ecosystem.",
  id: "security-and-audits",
  items: [
    {
      heading: "Collateral Scoring",
      description:
        "Collateral Scoring, a new feature that evaluates the risk of a collateral asset and the most suitable credit allowance for an user in order to minimise liquidation risks.",
      icon: Shield,
    },
    {
      heading: "Obsessed With Protocol Security",
      description:
        "We are obsessed with protocol security to avoid faulty protocol state, including always ensuring the liquidity of your assets, preventing liquidation spirals and slashing faulty oracles.",
      icon: Focus,
    },
    {
      heading: "Audited by the Bests",
      description:
        "Comprehensive and extensive security audits by industry leading auditers.",
      icon: Check,
    },
  ],
};

export const marketTrendsData: Section<MarketTrend> = {
  header: "Unique Features",
  heading: {
    left: "Unique",
    right: "Features",
  },
  description:
    "Unique and advanced lending products and services to benefit the DeFi ecosystem.",
  id: "markets-trends",
  items: [
    {
      id: 0,
      label: "A New Lending Protocol",
      image: "/assets/images/market-trends/0.png",
      items: [
        {
          title: "Forget About Bridges and Wrapped Assets",
          description:
            "Kylix Finance protocol design removes the need for bridges and wrapped tokens, for EVM and non-EVM chains.",
        },
        {
          title:
            "Power up DeFi Lending with composability and the latest technology.",
          description:
            "Self-Repaying Loans, A marketplace for collateral liquidation, collateral scoring and a new generation of lending pool powered by new polynomial interest rates formulas.",
        },
        {
          title: "Automatic Rewards and an Elaborated Tokenomics",
          description:
            "An automated treasury that distributes rewards to incentivize lenders to provide liquidity and automatically burns the native token to apply deflationary pressure to the network as borrowing volume increases.",
        },
      ],
      // actions: {
      //   primary: {
      //     label: "Learn More",
      //     action: () => {
      //       console.log("Lending: Learn More clicked");
      //     },
      //   },
      //   secondary: {
      //     label: "Get Started",
      //     action: () => {
      //       console.log("Lending: Get Started clicked");
      //     },
      //   },
      // },
    },
  ],
};
export const featuredPartnersData: Section<FeaturedPartners> = {
  header: "Featured partners",
  id: "featured-partners",
  heading: {
    left: "Proudly Supported By",
  },
  items: [
    {
      link: "/",
      name: "Decentralised Future",
      icon: StakeHouse,
    },
    {
      link: "/",
      name: "Equito Network",
      icon: StakeHouse,
    },
    {
      link: "/",
      name: "Hercle Financial",
      icon: StakeHouse,
    },
    {
      link: "/",
      name: "Harbour Industrial Capital",
      icon: StakeHouse,
    },
    {
      link: "/",
      name: "Pendulum",
      icon: StakeHouse,
    },
    {
      link: "/",
      name: "Polimec",
      icon: StakeHouse,
    },
    {
      link: "/",
      name: "BlockDeep",
      icon: StakeHouse,
    },
  ],
};
export const navItems: NavItem[] = [
  smartLendingData.header && {
    label: smartLendingData.header,
    link: `#${smartLendingData.id}`,
  },
  marketTrendsData.header && {
    label: marketTrendsData.header,
    link: `#${marketTrendsData.id}`,
  },
  supportedAssetsData.header && {
    label: supportedAssetsData.header,
    link: `#${supportedAssetsData.id}`,
  },
  howItsWorksData.header && {
    label: howItsWorksData.header,
    link: `#${howItsWorksData.id}`,
  },
  securityAndAuditsData.header && {
    label: securityAndAuditsData.header,
    link: `#${securityAndAuditsData.id}`,
  },
  featuredPartnersData.header && {
    label: featuredPartnersData.header,
    link: `#${featuredPartnersData.id}`,
  },
].filter((item): item is NavItem => !!item);

interface Footer {
  left: SocialMedia[];
  right: FooterItem[];
}

export const footerData: Footer = {
  left: [
    {
      name: "X",
      link: "https://x.com/kylixfinance",
      icon: Twitter,
    },
    {
      name: "Discord",
      link: "https://discord.gg/UkRcWaTh5p",
      icon: Discord,
    },
    {
      name: "Telegram",
      link: "https://t.me/kylix_finance_parachain",
      icon: StakeHouse,
    },
  ],
  right: [
    {
      title: "About",
      items: [
        {
          label: "Vision",
          link: "todo",
        },
        {
          label: "Roadmap",
          link: "todo",
        },
        {
          label: "Legal Notice",
          link: "todo",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          label: "Token",
          link: "todo",
        },
        {
          label: "FAQ",
          link: "todo",
        },
        {
          label: "Whitepaper",
          link: "https://docsend.com/view/f7xa65w29ckkpz2j",
        },
      ],
    },
    {
      title: "Socials",
      items: [
        {
          label: "Twitter",
          link: "https://x.com/kylixfinance",
        },
        {
          label: "Discord",
          link: "https://discord.gg/UkRcWaTh5p",
        },
        {
          label: "Telegram",
          link: "https://t.me/kylix_finance_parachain",
        },
      ],
    },
  ],
};
