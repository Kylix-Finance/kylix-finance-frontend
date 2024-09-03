import Providers from "~/providers";
import "./globals.css";
import { fonts } from "~/assets/fonts";
import { Metadata } from "next";
import { mergeMetadata } from "~/config/metadata";

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
      className={`${fonts.inter.variable} ${fonts.poppins.variable}`}
    >
      <body className="font-body !bg-[#F4FAF9]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
