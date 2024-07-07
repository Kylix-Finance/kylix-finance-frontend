import { ComponentType, SVGProps } from "react";
type Icon = ComponentType<SVGProps<SVGSVGElement>>;
export type SocialMediaType = {
  name: string;
  link: string;
  icon: Icon;
};

type SidebarItem = {
  name: string;
  href?: string;
  icon: Icon;
  items?: Array<SidebarItem>;
};

export type SidebarType = {
  heading: string;
  items: Array<SidebarItem>;
};
