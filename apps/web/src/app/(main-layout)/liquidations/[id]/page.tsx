import { Box } from "@mui/material";
import LatestLiquidation from "./_parts/LatestLiquidation";
import PersonalBids from "./_parts/PersonalBids";
import Bid from "./_parts/‌Bid";

export default function page() {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      {/* Chart area */}
      <Bid />
      <Box className="flex gap-4">
        <LatestLiquidation />
        <PersonalBids />
      </Box>
    </Box>
  );
}
