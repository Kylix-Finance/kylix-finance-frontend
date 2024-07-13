"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "~/config";
import { FC } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./ReactQueryProvider";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ReactQueryProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ReactQueryProvider>
      <ToastContainer className="flex flex-col gap-2" />
    </AppRouterCacheProvider>
  );
};
export default Providers;
