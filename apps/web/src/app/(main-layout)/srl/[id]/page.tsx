import React from "react";
import { Box } from "@mui/material";
import Tvl from "./_parts/Tvl";
import PositionManagement from "./_parts/PositionManagement";
export default function Page() {
  return (
    <Box className="flex flex-col gap-4">
      <Tvl />
      <PositionManagement />
    </Box>
  );
}