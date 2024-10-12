import { Box } from "@mui/material";
import LatestLiquidation from "./_parts/LatestLiquidation";
import PersonalBids from "./_parts/PersonalBids";
import Bid from "./_parts/‌Bid";
import PoolValueChart from "./_parts/PoolValueChart";

export default function page() {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <Box className="flex flex-col bg-white p-3 gap-4 items-start lg:flex-row">
        <PoolValueChart />
        <Bid />
      </Box>
      <Box className="flex gap-4">
        <LatestLiquidation />
        <PersonalBids />
      </Box>
    </Box>
  );
}
