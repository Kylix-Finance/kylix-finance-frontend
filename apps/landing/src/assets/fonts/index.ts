import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const migha = localFont({
  src: [
    {
      path: "./migha-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-migha",
  preload: true,
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export const fonts = { poppins, migha };
