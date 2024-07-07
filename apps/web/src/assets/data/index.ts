import { Sidebar, SocialMedia } from "~/types";
import { Icons, sidebarIcons } from "../svgs";

const socialMediaLinks: Array<SocialMedia> = [
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
const sidebar: Array<Sidebar> = [
  {
    heading: "Main",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: sidebarIcons.SidebarDashboard,
      },
      {
        name: "Portfolio",
        icon: sidebarIcons.SidebarWallet,
        items: [
          {
            name: "Account",
            icon: sidebarIcons.SidebarWallet,
            href: "/portfolio/account",
          },
          {
            name: "PnL",
            icon: sidebarIcons.SidebarWallet,
            href: "/portfolio/pnl",
          },
        ],
      },
      {
        name: "Market",
        href: "/market",
        icon: sidebarIcons.SidebarMarket,
      },
      {
        name: "Swap",
        icon: sidebarIcons.SidebarSwap,
        items: [],
      },
      {
        name: "Cross Swap",
        href: "/cross-swap",
        icon: sidebarIcons.SidebarCrossSwap,
      },
      {
        name: "Pools",
        href: "/pools",
        icon: sidebarIcons.SidebarPool,
      },
      {
        name: "Liquidations",
        href: "/liquidations",
        icon: sidebarIcons.SidebarLiquidations,
      },
      {
        name: "Staking",
        href: "/staking",
        icon: sidebarIcons.SidebarStaking,
      },
      {
        name: "Governance",
        href: "/governance",
        icon: sidebarIcons.SidebarGovernance,
      },
    ],
  },
  {
    heading: "Settings",
    items: [
      {
        name: "Notification",
        href: "/settings/notification",
        icon: sidebarIcons.SidebarNotification,
      },
      {
        name: "Settings",
        icon: sidebarIcons.SidebarSettings,
        items: [],
      },
    ],
  },
];

export { socialMediaLinks, sidebar };
