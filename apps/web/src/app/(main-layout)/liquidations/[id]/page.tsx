import { Box, Button, Card as MuiCard, Typography } from "@mui/material";
import LatestLiquidation from "./_parts/LatestLiquidation";
import PersonalBids from "./_parts/PersonalBids";
import Bid from "./_parts/‌Bid";
import PoolValueChart from "./_parts/PoolValueChart";
import { Card, List, ListItem } from "~/components";
import QuickBorrow from "./_parts/QuickBorrow";

const items: ListItem[] = [
  {
    label: "1200 USDC",
    value: "$1320",
  },
  {
    label: "Total Value",
    value: "$1320",
  },
];

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
      <Card title="Quick Market" className="w-full justify-between items-end">
        <Box className="flex justify-between w-full gap-5">
          <Box className="flex flex-col  gap-3 w-full">
            <MuiCard
              square
              variant="outlined"
              className="flex flex-col  gap-3 w-full"
            >
              <Typography variant="subtitle1" fontSize={"16px"}>
                Deposit
              </Typography>
              <Box className="flex flex-col gap-1.5">
                <Box className="flex justify-between w-full items-center">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                    fontSize={"14px"}
                  >
                    Amount
                  </Typography>
                  <Box className="flex gap-0.5">
                    <Typography
                      className="text-secondary-800"
                      variant="subtitle1"
                    >
                      4200
                    </Typography>
                    <Typography
                      className="text-primary-300"
                      variant="subtitle2"
                    >
                      USDC
                    </Typography>
                  </Box>
                </Box>
                <QuickBorrow />
                <List items={items} />
              </Box>
            </MuiCard>
            <List items={items} />
          </Box>
          <Box className="flex flex-col  gap-3  w-full">
            <MuiCard
              square
              variant="outlined"
              className="flex flex-col  gap-3  w-full"
            >
              <Typography variant="subtitle1" fontSize={"16px"}>
                Borrow
              </Typography>
              <Box className="flex flex-col gap-1.5">
                <Box className="flex justify-between w-full items-center">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                    fontSize={"14px"}
                  >
                    Amount
                  </Typography>
                  <Box className="flex gap-0.5">
                    <Typography
                      className="text-secondary-800"
                      variant="subtitle1"
                    >
                      4200
                    </Typography>
                    <Typography
                      className="text-primary-300"
                      variant="subtitle2"
                    >
                      USDC
                    </Typography>
                  </Box>
                </Box>
                <QuickBorrow />
                <List items={items} />
              </Box>
            </MuiCard>
            <List items={items} />
          </Box>
        </Box>
        <Button variant="contained" size="large">
          Quick Barrow
        </Button>
      </Card>
    </Box>
  );
}
