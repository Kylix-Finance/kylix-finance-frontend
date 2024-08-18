"use client";

import { Box, Switch, Typography } from "@mui/material";
import { Asset, Card, KylixChip } from "~/components";
import { RightComponent } from "./RightComponent";
import { TableActions } from "../TableActions";
import { Suspense, useMemo } from "react";
import { Table } from "@repo/ui";
import { usePools } from "~/hooks/chain/usePools";
import { QUEY_SEARCH_MARKETS } from "~/constants";
import { useQueryState } from "nuqs";

const placeholderData = Array.from({ length: 5 }).map(() => ({
  asset: "",
  borrowRate: "",
  collateral: false,
  collateralQ: "",
  id: 0,
  supplyRate: "",
  utilization: "",
  walletBalance: "0",
}));

type TableData = typeof placeholderData;

const MarketsTable = () => {
  // const { lendingPool } = useGetLendingPools();

  const { pools } = usePools();
  const [searchQuery] = useQueryState(QUEY_SEARCH_MARKETS, {
    clearOnDefault: true,
    defaultValue: "",
  });

  const transformedData = useMemo(() => {
    return pools
      ?.filter((pool) => {
        if (!searchQuery) return pool;
        const poolName = pool.assetName?.toLowerCase() || "";
        return poolName.includes(searchQuery);
      })
      .map((item) => {
        return {
          asset: item.assetName,
          collateralQ: `%${item.collateralQ}`,
          collateral: item.collateral,
          utilization: `%${item.utilization}`,
          borrowRate: `%${item.borrowApy}`,
          supplyRate: `%${item.supplyApy}`,
          walletBalance: item.balance,
          id: item.assetId,
        };
      });
  }, [pools, searchQuery]);

  return (
    <Table<TableData[number]>
      hiddenTHeads={["actions"]}
      headers={{
        asset: "Asset",
        collateralQ: "Collateral Q",
        utilization: "Utilization",
        borrowRate: "Borrow Rate",
        supplyRate: "Supply Rate",
        collateral: "Collateral",
        walletBalance: "Wallet Balance",
        actions: "",
      }}
      isLoading={!pools}
      rowSpacing="11px"
      components={{
        asset: (item) => (
          <Asset helperText={item.asset} label={item.asset.toString()} />
        ),
        collateralQ: (item) => (
          <Typography variant="subtitle1" className="pl-4">
            {item.collateralQ}
          </Typography>
        ),
        utilization: (item) => (
          <Typography variant="subtitle1" className="pl-4">
            {item.utilization}
          </Typography>
        ),
        borrowRate: (item) => (
          <Box className="flex flex-col pl-4">
            <Typography variant="subtitle1">{item.borrowRate}</Typography>
            <KylixChip />
          </Box>
        ),
        supplyRate: (item) => (
          <Box className="flex flex-col pl-4">
            <Typography variant="subtitle1">{item.supplyRate}</Typography>
            <KylixChip />
          </Box>
        ),
        collateral: (item) => (
          <Switch className="pl-4" checked={item.collateral} />
        ),
        walletBalance: (item) => (
          <Typography variant="subtitle1" className="pl-4">
            {item.walletBalance === "-"
              ? "-"
              : Number(item.walletBalance).toLocaleString()}
          </Typography>
        ),
        actions: (item) => <TableActions assetId={item.id} />,
      }}
      data={transformedData || placeholderData}
      defaultSortKey="asset"
      tableName="markets"
      hasPagination={false}
    />
  );
};

export default MarketsTable;
