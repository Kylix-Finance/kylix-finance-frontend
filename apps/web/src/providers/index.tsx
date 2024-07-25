"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "~/config";
import { FC } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./ReactQueryProvider";
import { Providers as WalletProvider } from "@repo/wallet-modal";
import { Provider as OnchainProvider } from "@repo/onchain-utils";
interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ReactQueryProvider>
        <WalletProvider
          config={{
            dappName: "Kylix",
          }}
        >
          <OnchainProvider
            options={{
              provider: {
                name: "Westnet",
                url: "wss://westend-rpc.polkadot.io",
              },
            }}
          >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </OnchainProvider>
        </WalletProvider>
      </ReactQueryProvider>
      <ToastContainer className="flex flex-col gap-2" />
    </AppRouterCacheProvider>
  );
};
export default Providers;
