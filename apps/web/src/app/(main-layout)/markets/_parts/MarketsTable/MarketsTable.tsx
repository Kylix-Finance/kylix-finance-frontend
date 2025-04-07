"use client";

import { Box, Typography } from "@mui/material";
import { Asset, KylixChip } from "~/components";
import { TableActions } from "../TableActions";
import { useMemo } from "react";
import { Table } from "@repo/ui";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";
import { formatUnit } from "@repo/onchain-utils";
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
  symbol: string;
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
        symbol: item.asset_symbol,
        walletBalance: formatUnit(
          item.user_asset_balance.toString(),
          item.asset_decimals
        ),
        id: item.id,
      }));
  }, [data, searchQuery]);

  return (
    <Table
      components={{
        asset: (item) => (
          <Asset
            helperText={item.asset}
            label={item.symbol.toString()}
            symbol={item.symbol}
          />
        ),
        "Collateral Factor": (item) => (
          <Typography className="pl-4 dark:text-black-100" variant="subtitle1">
            {item["Collateral Factor"]}
          </Typography>
        ),
        utilization: (item) => (
          <Typography className="pl-4 dark:text-black-100" variant="subtitle1">
            {item.utilization}
          </Typography>
        ),
        borrowRate: (item) => (
          <Box className="flex flex-col pl-4">
            <Typography className="dark:text-black-100" variant="subtitle1">
              {item.borrowRate}
            </Typography>
            <KylixChip value="0%" />
          </Box>
        ),
        supplyRate: (item) => (
          <Box className="flex flex-col pl-4">
            <Typography className="dark:text-black-100" variant="subtitle1">
              {item.supplyRate}
            </Typography>
            <KylixChip value="0%" />
          </Box>
        ),
        collateral: (item) => (
          <CollateralSwitch id={item.id} isCollateral={item.collateral} />
        ),
        walletBalance: (item) => (
          <Typography className="pl-4 dark:text-black-100" variant="subtitle1">
            {item.walletBalance === "-"
              ? "-"
              : Number(item.walletBalance).toLocaleString()}
          </Typography>
        ),
        actions: (item) => <TableActions assetId={item.id} />,
      }}
      data={transformedData}
      defaultSortKey="asset"
      hasPagination={false}
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
      hiddenTHeads={["actions"]}
      isFetched={isFetched}
      isLoading={isLoading}
      placeholderLength={5}
      rowSpacing="11px"
      tableName="markets"
    />
  );
};

export default MarketsTableUI;
