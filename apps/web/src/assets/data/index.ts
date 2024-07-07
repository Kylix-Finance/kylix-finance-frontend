import { SidebarType, SocialMediaType } from "~/types";
import { Icons } from "../svgs";

const socialMediaLinks: Array<SocialMediaType> = [
  {
    name: "X",
    link: "https://x.com/",
    icon: Icons.Twitter,
  },
  {
    name: "Linkedin",
    link: "linkedin.com",
    icon: Icons.Linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: Icons.Instagram,
  },
  {
    name: "Discord",
    link: "https://discord.com/",
    icon: Icons.Discord,
  },
];
const sidebar: Array<SidebarType> = [
  {
    heading: "Main",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: Icons.SidebarDashboard,
      },
      {
        name: "Portfolio",
        icon: Icons.SidebarWallet,
        items: [],
      },
      {
        name: "Market",
        href: "/market",
        icon: Icons.SidebarMarket,
      },
      {
        name: "Swap",
        icon: Icons.SidebarSwap,
        items: [],
      },
      {
        name: "Cross Swap",
        href: "/cross-swap",
        icon: Icons.SidebarCrossSwap,
      },
      {
        name: "Pools",
        href: "/pools",
        icon: Icons.SidebarPool,
      },
      {
        name: "Liquidations",
        href: "/liquidations",
        icon: Icons.SidebarLiquidations,
      },
      {
        name: "Staking",
        href: "/staking",
        icon: Icons.SidebarStaking,
      },
      {
        name: "Governance",
        href: "/governance",
        icon: Icons.SidebarGovernance,
      },
    ],
  },
  {
    heading: "Settings",
    items: [
      {
        name: "Notification",
        href: "/settings/notification",
        icon: Icons.SidebarNotification,
      },
      {
        name: "Settings",
        icon: Icons.SidebarSettings,
        items: [],
      },
    ],
  },
];

export { socialMediaLinks, sidebar };
