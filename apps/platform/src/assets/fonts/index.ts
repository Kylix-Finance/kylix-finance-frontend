import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-primary",
});
export const fonts = clsx(inter.variable);
