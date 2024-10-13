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
  header: "Smart lending",
  heading: {
    left: "Smart",
    right: "Lending",
  },
  description: "The new cross-chain Lending Platform, on Polkadot.",
  items: [
    {
      to: "/",
      heading: "flexibility",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis viverra at eu sapien venenatis sed ut. Quis ullamcorper enim posuere dui est euismod blandit nunc.",
    },
    {
      to: "/",
      heading: "multi-chain",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis viverra at eu sapien venenatis sed ut. ",
    },
  ],
};

export const supportedAssetsData: Section<Asset> = {
  header: "Assets",
  heading: { left: "Supported ", right: " Assets and APY" },
  description: "The new cross-chain Lending Platform, on Polkadot.",
  id: "supported-assets-and-apy",
  items: [
    {
      src: "/assets/images/assets/avalaunch.png",
      alt: "Avalaunch",
    },
    {
      src: "/assets/images/assets/btc.png",
      alt: "BTC",
    },
    {
      src: "/assets/images/assets/eth.png",
      alt: "ETH",
    },
    {
      src: "/assets/images/assets/usdc.png",
      alt: "USDC",
    },
  ],
};
export const howItsWorksData: Section<HowItsWork> = {
  header: "How it's works",
  heading: {
    left: "How",
    right: "It Works",
  },
  description:
    " A visual breakdown of the lending and borrowing process, typically simplified into steps like:",
  id: "how-it's-works",
  items: [
    {
      id: "deposit",
      heading: "Deposit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis viverra at eu sapien venenatis sed ut. Quis ullamcorper enim posuere dui est euismod blandit nunc. ",
    },
    {
      id: "convert",
      heading: "Convert",
      description:
        "Convert your deposit into a interest bearing token directly on our LST partner Acala through an integrated seamless process",
    },
    {
      id: "borrow",
      heading: "Borrow",
      description:
        "Borrow token and enjoy your loan with negative interest rates , getting repaid through time.",
      image: BorrowImage,
    },
  ],
};
export const securityAndAuditsData: Section<Security> = {
  header: "Security",
  heading: {
    left: "Security",
    right: "and Audits",
  },
  description: "The new cross-chain Lending Platform, on Polkadot.",
  id: "security-and-audits",
  items: [
    {
      heading: "Security Measures",
      description:
        "Explanation of platform security protocols (e.g., smart contract audits, multi-signature wallets).",
      icon: Shield,
    },
    {
      heading: "Risk Mitigation",
      description:
        "How the platform protects users’ assets, with details on insurance funds, collateral liquidation processes, and audit reports.",
      icon: Focus,
    },
    {
      heading: "Audit Partners",
      description:
        "Names of third-party auditors or security firms that have reviewed the platform’s smart contracts.",
      icon: Check,
    },
  ],
};

export const marketTrendsData: Section<MarketTrend> = {
  header: "Marker Trends",
  heading: {
    left: "Market",
    right: "Trends",
  },
  description: "The new cross-chain Lending Platform, on Polkadot.",
  id: "markets-trends",
  items: [
    {
      id: 0,
      label: "Lending",
      image: "/assets/images/market-trends/0.png",
      items: [
        {
          title: "Lending and Borrowing",
          description:
            "Clear explanations of how users can lend and borrow assets, with a focus on ease of use.",
        },
        {
          title: "Staking/Rewards",
          description:
            "Staking options and rewards users can earn for providing liquidity or collateral.",
        },
        {
          title: "UI Demonstration",
          description:
            "Short animated demos or screenshots showing how the platform operates.",
        },
      ],
      actions: {
        primary: {
          label: "Learn More",
          action: () => {
            console.log("Lending: Learn More clicked");
          },
        },
        secondary: {
          label: "Get Started",
          action: () => {
            console.log("Lending: Get Started clicked");
          },
        },
      },
    },
    {
      id: 1,
      label: "Decentralized Exchanges (DEX)",
      image: "/assets/images/market-trends/0.png",
      items: [
        {
          title: "Liquidity Pools",
          description:
            "Overview of how liquidity pools work and how users can provide assets to earn fees.",
        },
        {
          title: "Token Swaps",
          description:
            "Explaining token swaps, trading pairs, and decentralized trading mechanics.",
        },
        {
          title: "Security and Risks",
          description:
            "Information on security practices and risks associated with using decentralized exchanges.",
        },
      ],
      actions: {
        primary: {
          label: "Explore DEX",
          action: () => {
            console.log("DEX: Explore clicked");
          },
        },
        secondary: {
          label: "Start Trading",
          action: () => {
            console.log("DEX: Start Trading clicked");
          },
        },
      },
    },
    {
      id: 2,
      label: "NFT Marketplaces",
      image: "/assets/images/market-trends/0.png",
      items: [
        {
          title: "Creating NFTs",
          description:
            "A step-by-step guide on how users can create and mint their own NFTs.",
        },
        {
          title: "Buying and Selling",
          description:
            "Explaining the process of buying and selling NFTs, including marketplace fees and royalties.",
        },
        {
          title: "Exploring Collections",
          description:
            "Showcasing various NFT collections, highlighting popular artists and projects.",
        },
      ],
      actions: {
        primary: {
          label: "Explore NFTs",
          action: () => {
            console.log("NFT: Explore clicked");
          },
        },
        secondary: {
          label: "Mint Now",
          action: () => {
            console.log("NFT: Mint Now clicked");
          },
        },
      },
    },
    {
      id: 3,
      label: "DAO Governance",
      image: "/assets/images/market-trends/0.png",
      items: [
        {
          title: "Participating in DAOs",
          description:
            "How users can join DAOs and participate in decentralized decision-making.",
        },
        {
          title: "Voting Mechanisms",
          description:
            "Explaining voting mechanisms and the importance of governance tokens.",
        },
        {
          title: "Proposals and Actions",
          description:
            "Overview of creating proposals, voting on decisions, and enacting changes.",
        },
      ],
      actions: {
        primary: {
          label: "Join DAO",
          action: () => {
            console.log("DAO: Join clicked");
          },
        },
        secondary: {
          label: "Learn More",
          action: () => {
            console.log("DAO: Learn More clicked");
          },
        },
      },
    },
    {
      id: 4,
      label: "DeFi Insurance",
      image: "/assets/images/market-trends/0.png",
      items: [
        {
          title: "Understanding DeFi Insurance",
          description:
            "Explanation of how decentralized insurance protects users from various risks.",
        },
        {
          title: "Cover Options",
          description:
            "Details on available cover options for smart contract failures, hacks, or asset loss.",
        },
        {
          title: "Claiming Insurance",
          description:
            "Guide on how users can file claims and receive payouts in case of loss.",
        },
      ],
      actions: {
        primary: {
          label: "Get Covered",
          action: () => {
            console.log("DeFi Insurance: Get Covered clicked");
          },
        },
        secondary: {
          label: "Learn More",
          action: () => {
            console.log("DeFi Insurance: Learn More clicked");
          },
        },
      },
    },
  ],
};
export const featuredPartnersData: Section<FeaturedPartners> = {
  header: "Featured partners",
  id: "featured-partners",
  heading: {
    left: "Featured Partners",
  },
  items: [
    {
      link: "/",
      name: "Instadapp",
      icon: InstaDapp,
    },
    {
      link: "/",
      name: "Idle Finance",
      icon: IdleFinance,
    },
    {
      link: "/",
      name: "Lido",
      icon: Lido,
    },
    {
      link: "/",
      name: "Defi Saver",
      icon: DefiSaver,
    },
    {
      link: "/",
      name: "Stakehouse",
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
  ],
  right: [
    {
      title: "Products",
      items: [
        {
          label: "Lending",
          link: "lending",
        },
        {
          label: "Borrowing",
          link: "borrowing",
        },
        {
          label: "Markets",
          link: "markets",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          label: "Tokens",
          link: "tokens",
        },
        {
          label: "Convert",
          link: "convert",
        },
        {
          label: "Explore Traders",
          link: "exploreTraders",
        },
        {
          label: "Pricing",
          link: "pricing",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          label: "Beginners Guide",
          link: "beginnersGuide",
        },
        {
          label: "Help Center",
          link: "helpCenter",
        },
        {
          label: "Feedbacks",
          link: "feedbacks",
        },
        {
          label: "API Doc",
          link: "apiDoc",
        },
      ],
    },
  ],
};
