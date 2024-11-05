import {
  Asset,
  FeaturedPartners,
  HowItsWork,
  MarketTrend,
  NavItem,
  Security,
  SmartLending,
  Section,
} from "~/types";
import {
  BorrowImage,
  Check,
  Focus,
  Shield,
  DecentralizedFutures,
  EquitoNetwork,
  HarbourIndustrialCapital,
  HercleFinancial,
  Pendulum,
  Polimec,
} from "~/assets/svgs";

export const smartLendingData: Section<SmartLending> = {
  id: "smart-lending",
  header: "Multi-Chain lending",
  heading: {
    left: "One Platform.",
    right: "Natively Multi-Chain.",
  },
  description:
    "Experience real cross-chain Lending with our new Hub&Spoke Technology, designed specifically to offer native multi-chain lending.",
  items: [
    {
      to: "/",
      heading: "LIQUIDITY HUB",
      description:
        "Kylix Finance is a decentralized protocol for lending, borrowing, and earning across networks. It enables asset transfers between major blockchains without wrapped tokens or bridging, offering competitive rates with an innovative tech solution. ",
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
      src: "/assets/images/assets/polkdot.png",
      alt: "Polkadot",
      isLaunched: true,
    },
    {
      src: "/assets/images/assets/solana.png",
      alt: "Solana",
      isLaunched: true,
    },
    {
      src: "/assets/images/assets/sei.png",
      alt: "Sei",
      isLaunched: false,
    },
    {
      src: "/assets/images/assets/mintlayer.png",
      alt: "MintLayer",
      isLaunched: false,
    },
    {
      src: "/assets/images/assets/eth.png",
      alt: "ETH",
      isLaunched: false,
    },
    {
      src: "/assets/images/assets/sui.png",
      alt: "Sui",
      isLaunched: false,
    },
  ],
};
export const howItsWorksData: Section<HowItsWork> = {
  header: "Why Kylix?",
  heading: {
    left: "Why",
    right: "Kylix Finance?",
  },
  description: "",
  id: "how-it-works",
  items: [
    {
      id: "deposit",
      heading: "HUB & SPOKE TECHNOLOGY",
      description:
        "Deposit, lend and earn an intererst from your native assets from any chain. Make your assets work for you  — no bridging required!",
    },
    {
      id: "convert",
      heading: "DEPOSIT AND BORROW ",
      description:
        "Borrow, secure with collateral, and settle debts across any chain, regardless of which One your deposit comes from.",
    },
    {
      id: "borrow",
      heading: "LIQUIDATE AND EARN",
      description:
        "Earn interest on your deposits and loans. Earn rewards for providing liquidity. Earn assets below market prices by participating in the collateral marketplace.",
      image: BorrowImage,
    },
  ],
};
export const securityAndAuditsData: Section<Security> = {
  header: "Roadmap",
  heading: {
    left: "COMING",
    right: "SOON",
  },
  description:
    "Working hard to bring you the best features, paired with top-notch security.",
  id: "security-and-audits",
  items: [
    {
      heading: "Work in progress...",
      description:
        "Building and Testing. We are committed to protocol security to avoid faulty protocol states, including always ensuring the liquidity of your assets, preventing liquidation spirals and slashing faulty oracles.",
      icon: Shield,
    },
    {
      heading: "Testnet Ready Q1 2025",
      description:
        "We will be announcing the Testnet launch date soon. Stay tuned and sign up for our newsletter to be the first to participate in our private beta testing.",
      icon: Focus,
    },
    {
      heading: "Live in Q2 2025",
      description:
        "We will go live in March 2025. We look forward to seeing you on board, and in the meantime, please follow us on our social media channels to keep up to date.",
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
          title: "Forget Bridges and Wrapped Assets",
          description:
            "Kylix Finance protocol design removes the need for bridges and wrapped tokens, for EVM and non-EVM chains.",
        },
        {
          title: "Power up next-generation Lending",
          description:
            "Become a liquidator with our Collateral Liquidation Marketplace, lend without risk with Self-Repaying Loans, enjoy Collateral Scoring and new Lending Pools powered by new generation interest rate formulas.",
        },
        {
          title: "Autonomous Rewards and a Deflationary Tokenomic.",
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
      icon: DecentralizedFutures,
    },
    {
      link: "/",
      name: "Equito Network",
      icon: EquitoNetwork,
    },
    {
      link: "/",
      name: "Hercle",
      icon: HercleFinancial,
    },
    {
      link: "/",
      name: "Harbour Industrial Capital",
      icon: HarbourIndustrialCapital,
    },
    {
      link: "/",
      name: "Pendulum",
      icon: Pendulum,
    },
    {
      link: "/",
      name: "Polimec",
      icon: Polimec,
    },
    // {
    //   link: "/",
    //   name: "BlockDeep",
    //   icon: StakeHouse,
    // },
  ],
};
export const navItems: NavItem[] = [
  smartLendingData.header && {
    label: smartLendingData.header,
    link: `/#${smartLendingData.id}`,
  },
  marketTrendsData.header && {
    label: marketTrendsData.header,
    link: `/#${marketTrendsData.id}`,
  },
  supportedAssetsData.header && {
    label: supportedAssetsData.header,
    link: `/#${supportedAssetsData.id}`,
  },
  howItsWorksData.header && {
    label: howItsWorksData.header,
    link: `/#${howItsWorksData.id}`,
  },
  securityAndAuditsData.header && {
    label: securityAndAuditsData.header,
    link: `/#${securityAndAuditsData.id}`,
  },
  featuredPartnersData.header && {
    label: featuredPartnersData.header,
    link: `/#${featuredPartnersData.id}`,
  },
].filter((item): item is NavItem => !!item);
