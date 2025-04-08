import { RootLayout } from "@repo/ui";

import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <RootLayout>{children}</RootLayout>;
}
