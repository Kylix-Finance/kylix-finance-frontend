import { SocialMediaType } from "~/types";
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

export { socialMediaLinks };
