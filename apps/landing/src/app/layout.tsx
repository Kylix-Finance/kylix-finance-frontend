import { fonts } from "~/assets/fonts";
import "./globals.css";
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
export const metadata: Metadata = mergeMetadata({
  title: {
    default: "Kylix Finance",
    template: "%s | Kylix Finance",
  },
  description:
    "A new-gen multi-chain Lending platform for managing over-collateralized loans & aggregating cross-chain Liquidity.",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.migha.variable} ${fonts.poppins.variable}`}
    >
      <body className="font-body bg-secondary-500">{children}</body>
    </html>
  );
}
