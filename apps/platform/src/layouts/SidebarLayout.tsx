import { Box } from "@mui/material";
import { ReactNode } from "react";
import Background from "~/components/background/Background";
import Sidebar from "~/components/sidebar/Sidebar";

interface Props {
  children: ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <Box sx={{ position: "relative" }}>
        <Background />

      <Box sx={{ position: "relative", zIndex: 10 }}>{children}</Box>
      {/* Sidebar can also be positioned accordingly if needed */}
      {/* <Sidebar /> */}
    </Box>
  );
};

export default SidebarLayout;
