import { ComponentType, SVGProps } from "react";
export type Icon = ComponentType<SVGProps<SVGSVGElement>>;
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

export type NotificationType =
  | "information"
  | "warning"
  | "error"
  | "success"
  | "message";

export type NotificationParams = {
  type: "information" | "warning" | "error" | "success" | "message";
  message: string;
  title: string;
};
