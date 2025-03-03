"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "~/config";
import { FC } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./ReactQueryProvider";
import { Providers as WalletProvider } from "@repo/wallet-modal";
import { PortalContainer } from "./Portal";
import BlockProvider from "./BlockProvider";
import { CssBaseline, useMediaQuery } from "@mui/material";
interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  if (prefersDarkMode !== !prefersLightMode) return null;

  return (
    <AppRouterCacheProvider>
      <ReactQueryProvider>
        <WalletProvider
          config={{
            dappName: "Kylix",
            rpc: {
              name: "Kylix",
              url: "wss://test-dashboard.kylix.finance",
            },
          }}
        >
          <BlockProvider />
          <ThemeProvider theme={theme}>
            {/* <CssBaseline enableColorScheme /> */}
            {children}
          </ThemeProvider>
        </WalletProvider>
        <PortalContainer />
      </ReactQueryProvider>
      <ToastContainer className="flex flex-col gap-2" />
    </AppRouterCacheProvider>
  );
};
export default Providers;
