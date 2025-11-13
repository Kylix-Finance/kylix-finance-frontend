import { Metadata } from "next";

export const metaTags = {
  root: {
    title: {
      default: "Kylix",
      template: "%s | Kylix",
    },
  },
  dashboard: {
    title: "Dashboard",
  },
  portfolio: {
    title: "Portfolio",
  },
} as const satisfies Record<string, Metadata>;
