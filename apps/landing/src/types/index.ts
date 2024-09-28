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
