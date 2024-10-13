import { fonts } from "~/assets/fonts";
import "./globals.css";
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
export const metadata: Metadata = mergeMetadata({
  title: {
    default: "Kylix",
    template: "%s | Kylix",
  },
  description:
    "Kylix Finance addresses the gaps in the current DeFi landscape on Polkadot by providing a comprehensive on-chain lending solution. ",
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
