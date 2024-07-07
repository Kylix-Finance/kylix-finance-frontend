import { ComponentType, SVGProps } from "react";
type Icon = ComponentType<SVGProps<SVGSVGElement>>;
export type SocialMedia = {
  name: string;
  link: string;
  icon: Icon;
};

export type SidebarItem = {
  name: string;
  href?: string;
  icon: Icon;
  items?: SidebarItem[];
};

export type Sidebar = {
  heading: string;
  items: SidebarItem[];
};
