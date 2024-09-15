import { Box } from "@mui/material";
import LatestLiquidation from "./_parts/LatestLiquidation";
import PersonalBids from "./_parts/PersonalBids";
import Bid from "./_parts/‌Bid";
import PoolValueChart from "./_parts/PoolValueChart";
import { Card } from "~/components";

export default function page() {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <Card>
        <PoolValueChart />
      </Card>
      <Bid />
      <Box className="flex gap-4">
        <LatestLiquidation />
        <PersonalBids />
      </Box>
    </Box>
  );
}
