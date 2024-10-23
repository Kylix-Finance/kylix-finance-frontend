"use client";

import { Box, Button, Switch, Typography } from "@mui/material";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { Table } from "@repo/ui";
import Image from "next/image";
import { Icons } from "~/assets/svgs";
import { Asset } from "~/components";
import { useGetAssetWiseSupplies } from "~/hooks/chain/useGetAssetWiseSupplies";

const Supplied = () => {
  const { data: assetWiseSupplies, isLoading } = useGetAssetWiseSupplies();
  const supplies:
    | TableData
    | { asset: string; apy: string; balance: string; supplied: string }[]
    | undefined = assetWiseSupplies?.suppliedAssets.map?.((item) => ({
    apy: formatUnit(item.apy, 18),
    asset: item.assetSymbol,
    balance: formatBigNumbers(formatUnit(item.balance, item.decimals), 4),
    supplied: formatBigNumbers(formatUnit(item.supplied, item.decimals), 4),
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
        supplied: "Supplied",
        actions: "Action",
      }}
      hiddenTHeads={["actions"]}
      tableName="supply"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        apy: (item) => <Typography variant="subtitle1">{item.apy}%</Typography>,
        balance: (item) => (
          <Typography variant="subtitle1">{item.balance}</Typography>
        ),
        supplied: (item) => (
          <Typography variant="subtitle1">{item.supplied}</Typography>
        ),
        actions: () => (
          <Box className="flex justify-end gap-6 items-center">
            <Switch />
            <Box className="flex justify-end gap-1 items-center">
              <Button variant="contained">
                <Typography variant="subtitle1" fontWeight={600}>
                  Withdraw
                </Typography>
              </Button>
              <Button variant="outlined">
                <Typography
                  className="!text-primary-500"
                  variant="subtitle1"
                  fontWeight={600}
                >
                  Supply
                </Typography>
              </Button>
            </Box>
          </Box>
        ),
      }}
      data={supplies || []}
    />
  );
};

export default Supplied;

// TODO: remove any
type TableData = {
  asset: string;
  apy: string;
  balance: string;
  supplied: string;
}[];
