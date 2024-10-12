import { Box } from "@mui/material";
import { Metadata } from "next";
import { mergeMetadata } from "~/config/metadata";

export const metadata: Metadata = mergeMetadata({ title: "Market" });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
