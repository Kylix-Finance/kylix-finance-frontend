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
      <Box className="w-full h-screen overflow-y-scroll flex flex-col px-6">
        <Header />
        <Box component="main" className="w-full flex flex-col">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
