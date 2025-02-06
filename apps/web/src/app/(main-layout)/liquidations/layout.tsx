import { Metadata } from "next";
import { mergeMetadata } from "@repo/shared";

export const metadata: Metadata = mergeMetadata({ title: "Liquidations" });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
