import { ComponentType, SVGProps } from "react";

export type SmartLending = {
  to: string;
  description: string;
  heading: string;
};
export type Icon = ComponentType<SVGProps<SVGSVGElement>>;
export type HowItsWork = {
  id: string;
  heading: string;
  description: string;
  image?: Icon;
};

export type Security = {
  heading: string;
  description: string;
  icon: Icon;
};

export type MarketTrendItem = {
  title: string;
  description: string;
};

export type MarketTrend = {
  id: number;
  label: string;
  image: string;
  items: MarketTrendItem[];
  actions: {
    primary: {
      label: string;
      action: VoidFunction;
    };
    secondary: {
      label: string;
      action: VoidFunction;
    };
  };
};

export type Asset = {
  src: string;
  alt: string;
};
