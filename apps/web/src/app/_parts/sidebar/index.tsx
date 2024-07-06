"use client";
import { Drawer as DrawerBase } from "@mui/material";
import { FC } from "react";

const Drawer: FC = () => {
  return (
    <DrawerBase
      variant="permanent"
      anchor="left"
      sx={{ width: 300, flexShrink: 0 }}
      PaperProps={{
        sx: {
          width: "inherit",
          backgroundColor: "#F5F7F9",
          borderRight: "1px solid #E0E0E0",
        },
      }}
    >
      <p className="text-black">Sidebar</p>
    </DrawerBase>
  );
};

export default Drawer;
