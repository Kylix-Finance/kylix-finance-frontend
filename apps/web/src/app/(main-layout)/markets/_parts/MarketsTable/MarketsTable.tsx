"use client";

import { Box, Typography } from "@mui/material";
import { Asset, KylixChip } from "~/components";
import { TableActions } from "../TableActions";
import { useMemo } from "react";
import { Table } from "@repo/ui";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";
import { formatUnit, useBalance } from "@repo/onchain-utils";
import CollateralSwitch from "~/components/CollateralSwitch/CollateralSwitch";

type TableData = Array<{
  asset: string;
  borrowRate: string;
  collateral: boolean;
  collateralQ: string;
  id: number;
  supplyRate: string;
  utilization: string;
  walletBalance: string;
  "Collateral Factor": string;
}>;

type MarketsTableUIProps = {
  searchQuery?: string;
};

const MarketsTableUI = ({ searchQuery = "" }: MarketsTableUIProps) => {
  const { data, isLoading, isFetched } = useGetLendingPools();

  const transformedData = useMemo((): TableData => {
    if (!data?.assets) return [];
    return data.assets
      .filter((pool) => {
        if (!searchQuery) return true;
        return pool.asset?.toLowerCase().includes(searchQuery);
      })
      .map((item) => ({
        asset: item.asset,
        "Collateral Factor": item.collateral_q,
        collateral: item.is_collateral,
        collateralQ: item.collateral_q,
        utilization: item.utilization,
        borrowRate: item.borrow_apy,
        supplyRate: item.supply_apy,
        walletBalance: formatUnit(
          item.user_asset_balance.toString(),
          item.asset_decimals
        ),
        id: item.id,
      }));
  }, [data, searchQuery]);

  return (
    <Table
      placeholderLength={5}
      hiddenTHeads={["actions"]}
      headers={{
        asset: "Asset",
        "Collateral Factor": "Collateral Factor",
        utilization: "Utilization",
        borrowRate: "Borrow Rate",
        supplyRate: "Supply Rate",
        collateral: "Collateral",
        walletBalance: "Wallet Balance",
        actions: "",
      }}
      isLoading={isLoading}
      rowSpacing="11px"
      components={{
        asset: (item) => (
          <Asset helperText={item.asset} label={item.asset.toString()} />
        ),
        "Collateral Factor": (item) => (
          <Typography variant="subtitle1" className="pl-4 dark:text-black-100">
            {item["Collateral Factor"]}
          </Typography>
        ),
        utilization: (item) => (
          <Typography variant="subtitle1" className="pl-4 dark:text-black-100">
            {item.utilization}
          </Typography>
        ),
        borrowRate: (item) => (
          <Box className="flex flex-col pl-4">
            <Typography variant="subtitle1" className="dark:text-black-100">
              {item.borrowRate}
            </Typography>
            <KylixChip value="0%" />
          </Box>
        ),
        supplyRate: (item) => (
          <Box className="flex flex-col pl-4">
            <Typography variant="subtitle1" className="dark:text-black-100">
              {item.supplyRate}
            </Typography>
            <KylixChip value="0%" />
          </Box>
        ),
        collateral: (item) => (
          <CollateralSwitch id={item.id} isCollateral={item.collateral} />
        ),
        walletBalance: (item) => (
          <Typography variant="subtitle1" className="pl-4 dark:text-black-100">
            {item.walletBalance === "-"
              ? "-"
              : Number(item.walletBalance).toLocaleString()}
          </Typography>
        ),
        actions: (item) => <TableActions assetId={item.id} />,
      }}
      data={transformedData}
      defaultSortKey="asset"
      tableName="markets"
      isFetched={isFetched}
      hasPagination={false}
    />
  );
};

export default MarketsTableUI;
