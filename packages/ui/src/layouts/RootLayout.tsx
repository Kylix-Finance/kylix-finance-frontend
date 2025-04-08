import { PropsWithChildren } from "react";

import "../styles/globals.css";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html id="root" lang="en">
      <body>{children}</body>
    </html>
  );
};
