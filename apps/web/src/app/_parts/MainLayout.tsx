import React from "react";
import { Box } from "@mui/material";
import { Sidebar, Header } from "~/components";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box className="flex">
      <Sidebar />
      <Box className="w-full min-h-full flex flex-col p-6">
        <Header />
        <Box component="main" className="w-full h-full flex flex-col">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
