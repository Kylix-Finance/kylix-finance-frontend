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
} as const satisfies Record<string, Metadata>;
