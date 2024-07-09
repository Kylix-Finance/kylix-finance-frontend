"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "~/config";
import { FC, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { notify } from "~/utils";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  useEffect(() => {
    notify({
      type: "error",
      message: "An error occurred.",
      title: "Error",
    });
    notify({
      type: "success",
      message: "Operation was successful.",
      title: "Success",
    });
    notify({
      type: "information",
      message: "Here is some information.",
      title: "Information",
    });
    notify({
      type: "message",
      message: "You have a new message.",
      title: "Message",
    });
    notify({
      type: "warning",
      message: "Your password is weak.",
      title: "Warning",
    });
  }, []);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <ToastContainer className="flex flex-col gap-2" />
    </AppRouterCacheProvider>
  );
};
export default Providers;
