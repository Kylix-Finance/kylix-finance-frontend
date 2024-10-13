import { Box } from "@mui/material";
import { Metadata } from "next";
import { mergeMetadata } from "@repo/shared";

export const metadata: Metadata = mergeMetadata({ title: "Portfolio" });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Box>{children}</Box>
    </Box>
  );
}
