"use client";

import { Box, Button, Typography } from "@mui/material";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { Table } from "@repo/ui";
import { Asset } from "~/components";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";

const Borrowed = () => {
  const { data: AssetWiseBorrowsCollaterals, isLoading } =
    useGetAssetWiseBorrowsCollaterals();
  const borrowed: TableData | undefined =
    AssetWiseBorrowsCollaterals?.borrowedAssets.map?.((item) => ({
      apy: formatUnit(item.apy || 0, 18),
      asset: item.assetSymbol,
      balance: formatBigNumbers(formatUnit(item.balance, item.decimals), 4),
      borrowed: formatBigNumbers(
        formatUnit(item.borrowed || 0, item.decimals),
        4
      ),
    }));
  return (
    <Table<TableData[number]>
      isLoading={isLoading}
      tCellClassnames={"!p-3"}
      rowSpacing="10px"
      hasPagination={false}
      defaultSortKey="asset"
      headers={{
        asset: "Asset",
        balance: "Balance",
        apy: "APY",
        borrowed: "Borrowed",
        actions: "Action",
      }}
      hiddenTHeads={["actions"]}
      tableName="supply"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        apy: (item) => <Typography variant="subtitle1">{item.apy}</Typography>,
        balance: (item) => (
          <Typography variant="subtitle1">{item.balance}</Typography>
        ),
        borrowed: (item) => (
          <Typography variant="subtitle1">{item.borrowed}</Typography>
        ),
        actions: () => (
          <Box className="flex justify-end gap-1 items-center">
            <Button variant="contained">
              <Typography variant="subtitle1" fontWeight={600}>
                Repay
              </Typography>
            </Button>
            <Button variant="outlined">
              <Typography
                className="!text-primary-500"
                variant="subtitle1"
                fontWeight={600}
              >
                Borrow
              </Typography>
            </Button>
          </Box>
        ),
      }}
      data={borrowed || []}
    />
  );
};

export default Borrowed;

type TableData = {
  asset: string;
  apy: string;
  borrowed: string;
  balance: string;
}[];
