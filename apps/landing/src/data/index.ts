import { HowItsWork, Icon, Security, SmartLending } from "~/types";
import {
  AvaLaunch,
  BorrowImage,
  Btc,
  Check,
  Eth,
  Focus,
  Shield,
  Usdc,
} from "~/assets/svgs";
export const smartLending: SmartLending[] = [
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
];
export const assets: Icon[] = [Btc, Eth, Usdc, AvaLaunch];
export const howItsWorks: HowItsWork[] = [
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
];
export const security: Security[] = [
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
];
