import React from "react";
import { Box } from "@mui/material";
import Tvl from "./_parts/Tvl";
import PositionManagement from "./_parts/PositionManagement";
import { ErrorPage } from "~/components/ErrorPage";
export default function Page() {
  return (
    <ErrorPage
      code={-1}
      title="Under Development"
      description="This page is currently under development. Please check back later!"
    />
  );
  // return (
  //   <Box className="flex flex-col gap-4">
  //     <Tvl />
  //     <PositionManagement />
  //   </Box>
  // );
}
