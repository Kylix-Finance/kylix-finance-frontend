"use client";

import { Box, Button, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { TokenIcon } from "~/components";
import { TableActions } from "./TableActions";
import { Icons } from "~/assets/svgs";

type AssetName = "usdt" | "jitosol" | "dot";

interface TableDataItem {
  assetName: AssetName;
  averagePrice: string | number;
  averagePrice2: string | number;
  averagePrice3: string | number;
  label: string;
  liquidated: string | number;
  usdtPaid: string | number;
}

const tableData: Array<TableDataItem> = [
  {
    assetName: "usdt",
    label: "USDT",
    liquidated: "1500",
    usdtPaid: "35%",
    averagePrice: "22%",
    averagePrice2: "8%",
    averagePrice3: "1000",
  },
  {
    assetName: "jitosol",
    label: "jitoSOL",
    liquidated: "3000",
    usdtPaid: "21%",
    averagePrice: "34%",
    averagePrice2: "2%",
    averagePrice3: "1000",
  },
  {
    assetName: "dot",
    label: "DOT",
    liquidated: "1200",
    usdtPaid: "35%",
    averagePrice: "22%",
    averagePrice2: "8%",
    averagePrice3: "1000",
  },
];

export const PositionsTable = () => {
  return (
    <Table<TableDataItem, "actions">
      headers={{
        actions: "Actions",
        assetName: "Asset",
        averagePrice: "Average Price",
        averagePrice2: "Average Price",
        averagePrice3: "Average Price",
        liquidated: "kyl.USDT Liquidated",
        usdtPaid: "USDT paid",
      }}
      isFetched={true}
      isLoading={false}
      placeholderLength={3}
      hiddenTHeads={["actions"]}
      tableName="loanPositions"
      data={tableData}
      components={{
        assetName: (item) => (
          <Box className="flex flex-row gap-[8px]">
            <TokenIcon width={24} height={24} symbol={item.assetName} />
            <Typography className="!text-[14px] !text-[#1A433B] !font-[700] !leading-[20px] !tracking-[-0.02em]">
              {item.label}
            </Typography>
          </Box>
        ),
        liquidated: (item) => (
          <Typography className="!text-[14px] !font-[500] !leading-[20px] !tracking-[-0.02em]">
            {item.liquidated} {item.label}
          </Typography>
        ),
        usdtPaid: (item) => (
          <Typography className="!text-[14px] !font-[500] !leading-[20px] !tracking-[-0.02em]">
            {item.usdtPaid} {item.label}
          </Typography>
        ),
        averagePrice: (item) => (
          <Typography className="!text-[14px] !font-[500] !leading-[20px] !tracking-[-0.02em]">
            {item.averagePrice}
          </Typography>
        ),
        averagePrice2: (item) => (
          <Typography className="!text-[14px] !font-[500] !leading-[20px] !tracking-[-0.02em]">
            {item.averagePrice2}
          </Typography>
        ),
        averagePrice3: (item) => (
          <Typography className="!text-[14px] !font-[500] !leading-[20px] !tracking-[-0.02em]">
            {item.averagePrice3}
          </Typography>
        ),
        actions: (item) => <TableActions assetId={item.assetName} />,
      }}
      defaultSortKey="assetName"
      rowSpacing="10px"
      tRowProps={{ className: "!rounded-[8px]" }}
      middleComponent={() => {
        return (
          <Button
            fullWidth
            className="!border-[2px] !border-dashed !border-teal-400 !rounded-[8px]"
            style={{
              padding: "14px 12px",
              borderRadius: "8px",
            }}
          >
            <Box className="flex w-full items-center flex-row gap-[8px]">
              <Icons.Plus />

              <Typography
                textTransform={"none"}
                className="!text-[14px] !text-[#1A433B] !font-[700] !leading-[20px] !tracking-[-0.02em]"
              >
                Create New self repaying loan
              </Typography>
            </Box>
          </Button>
        );
      }}
    />
  );
};
