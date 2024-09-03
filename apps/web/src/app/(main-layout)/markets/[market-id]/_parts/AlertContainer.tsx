import React from "react";
import { Box } from "@mui/material";
import { cn } from "~/utils";

interface AlertContainerProps {
  children: React.ReactNode;
}

const AlertContainer = ({ children }: AlertContainerProps) => {
  return <Box className={cn("flex flex-col gap-1")}>{children}</Box>;
};

export default AlertContainer;
