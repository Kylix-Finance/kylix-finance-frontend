import { Discord, Telegram, Twitter } from "~/assets/svgs";
import { Footer, FooterItem, SocialMedia } from "~/types";
import { getFooterContentData } from "~/utils/mdx";
const data = getFooterContentData();

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
      icon: Telegram,
    },
  ],
  right: [
    {
      title: "About",
      items:
        data &&
        data.slice(0, 3).map((item) => ({
          label: item?.title || "",
          link: item?.slug || "",
        })),
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
