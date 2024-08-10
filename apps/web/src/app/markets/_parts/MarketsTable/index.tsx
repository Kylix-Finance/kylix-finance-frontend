"use client";

import { Box, Switch, Typography } from "@mui/material";
import { Card, KylixChip } from "~/components";
import { Asset } from "~/components/Asset";
import { RightComponent } from "./RightComponent";
import { TableActions } from "../TableActions";
import { useGetLendingPools, usePools } from "@repo/onchain-utils";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { OnTRowClick, Table } from "@repo/ui";

const placeholderData = Array.from({ length: 5 }).map(() => ({
  asset: "",
  borrowApy: "",
  collateral: false,
  collateralQ: "",
  id: 0,
  supplyApy: "",
  utilization: "",
  walletBalance: 0,
}));

type TableData = typeof placeholderData;

const MarketsTable = () => {
  const { lendingPool } = useGetLendingPools();
  const { data, isLoading } = usePools();
  console.log("isLoading", isLoading);
  console.log("data", lendingPool);

  const router = useRouter();

  const transformedData = useMemo(() => {
    return lendingPool?.map((item) => {
      return {
        asset: item.asset,
        collateralQ: `%${item.collateral_q}`,
        collateral: item.collateral,
        utilization: `%${item.utilization}`,
        borrowApy: `%${item.borrow_apy}`,
        supplyApy: `%${item.supply_apy}`,
        walletBalance: item.balance,
        id: item.id,
      };
    });
  }, [lendingPool]);

  return (
    <Card title="Markets" rightComponent={<RightComponent />}>
      <Table<TableData[number], "actions">
        headers={{
          asset: "Asset",
          collateralQ: "Collateral Q",
          utilization: "Utilization",
          borrowApy: "Borrow Apy",
          supplyApy: "Supply Apy",
          collateral: "Collateral",
          walletBalance: "Wallet Balance",
          actions: "Actions",
        }}
        isLoading={!lendingPool}
        tRowProps={{
          className: "cursor-pointer",
        }}
        rowSpacing="11px"
        components={{
          asset: (item) => (
            <Asset helperText={item.asset} label={item.asset.toString()} />
          ),
          collateralQ: (item) => (
            <Typography variant="subtitle1">{item.collateralQ}</Typography>
          ),
          utilization: (item) => (
            <Typography variant="subtitle1">{item.utilization}</Typography>
          ),
          borrowApy: (item) => (
            <Box className="flex flex-col">
              <Typography variant="subtitle1">{item.borrowApy}</Typography>
              <KylixChip value={`${(Math.random() * 10).toFixed()}%`} />
            </Box>
          ),
          supplyApy: (item) => (
            <Box className="flex flex-col">
              <Typography variant="subtitle1">{item.supplyApy}</Typography>
              <KylixChip value={`${(Math.random() * 10).toFixed()}%`} />
            </Box>
          ),
          collateral: (item) => <Switch checked={item.collateral} />,
          walletBalance: (item) => (
            <Typography variant="subtitle1">
              {Number(item.walletBalance).toLocaleString()}
            </Typography>
          ),
          actions: (item) => <TableActions assetId={item.id} />,
        }}
        data={transformedData || placeholderData}
        defaultSortKey="asset"
        tableName="markets"
        hasPagination={false}
      />
    </Card>
  );
};

export default MarketsTable;
