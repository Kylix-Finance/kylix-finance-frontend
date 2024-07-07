import { ComponentType, SVGProps } from "react";

export type SocialMediaType = {
  name: string;
  link: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
