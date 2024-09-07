import { Card } from "~/components";
import { Box } from "@mui/material";
import LatestLiquidation from "./_parts/Latestiquidation";

export default function page() {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      {/* Chart area */}
      <Box className="flex gap-4">
        <LatestLiquidation />
      </Box>
    </Box>
  );
}
