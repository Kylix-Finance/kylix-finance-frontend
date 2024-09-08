import { Box } from "@mui/material";
import LatestLiquidation from "./_parts/LatestLiquidation";
import PersonalBids from "./_parts/PersonalBids";

export default function page() {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      {/* Chart area */}
      <Box className="flex gap-4">
        <LatestLiquidation />
        <PersonalBids />
      </Box>
    </Box>
  );
}
