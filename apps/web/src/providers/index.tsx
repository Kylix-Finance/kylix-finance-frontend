"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "~/config";
import { FC } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./ReactQueryProvider";
import { Providers as WalletProvider } from "@repo/wallet-modal";

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
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </WalletProvider>
      </ReactQueryProvider>
      <ToastContainer className="flex flex-col gap-2" />
    </AppRouterCacheProvider>
  );
};
export default Providers;
