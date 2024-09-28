import { Icon, SmartLending } from "~/types";
import { AvaLaunch, Btc, Eth, Usdc } from "~/assets/svgs";
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
