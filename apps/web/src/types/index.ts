import { ComponentType, ReactNode, SVGProps } from "react";
import { CHART_SCALES } from "~/constants";
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
  items?: Omit<SidebarItem, "icon">[];
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
export interface Asset {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  image: string;
}

export interface StaticData {
  coins: Record<string, Icon>;
}

export interface SelectOption {
  value: string;
  label: string;
}

export type kylixPriceSchema = [number, number];
export type TotalSupplySchema = [number, number, number];
export type PoolDataSchema = [number, number, number, number];

export interface SupplyChartDataset {
  time: Date;
  total_borrow: number;
  total_supply: number;
}

export type ChartScale = (typeof CHART_SCALES)[number];
