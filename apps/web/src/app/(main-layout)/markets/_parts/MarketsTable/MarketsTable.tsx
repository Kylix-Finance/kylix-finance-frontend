"use client";

import { Box, Switch, Typography } from "@mui/material";
import { Asset, KylixChip, notify } from "~/components";
import { TableActions } from "../TableActions";
import { useMemo } from "react";
import { Table } from "@repo/ui";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";
import { formatUnit, useBalance } from "@repo/onchain-utils";
import { formatPercentage } from "~/utils";
import { useEnableAsCollateral } from "~/hooks/chain/useEnableAsCollateral";
import { useDisableAsCollateral } from "~/hooks/chain/useDisableAsCollateral";

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
  const { mutate: enableAsCollateralMutate, isPending: isEnableAsCollateral } =
    useEnableAsCollateral();
  const {
    mutate: disableAsCollateralMutate,
    isPending: isDisableAsCollateral,
  } = useDisableAsCollateral();

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
        utilization: formatPercentage(item.utilization, item.asset_decimals),
        borrowRate: formatPercentage(item.borrow_apy, item.asset_decimals),
        supplyRate: item.supply_apy,
        walletBalance: formatUnit(
          item.user_asset_balance.toString(),
          item.asset_decimals
        ),
        id: item.id,
      }));
  }, [data, searchQuery]);
  const handleCollateralClick = (state: boolean, assetId: string | number) => {
    if (state) {
      disableAsCollateralMutate(
        {
          assetId,
        },
        {
          onSuccess: ({ blockNumber }) => {
            notify({
              type: "success",
              title: "Success",
              message: "Transaction completed on block " + blockNumber,
            });
          },
          onError: ({ message, name }) => {
            notify({
              type: "error",
              title: name,
              message: message,
            });
          },
        }
      );
    } else {
      enableAsCollateralMutate(
        {
          assetId,
        },
        {
          onSuccess: ({ blockNumber }) => {
            notify({
              type: "success",
              title: "Success",
              message: "Transaction completed on block " + blockNumber,
            });
          },
          onError: ({ message, name }) => {
            notify({
              type: "error",
              title: name,
              message: message,
            });
          },
        }
      );
    }
  };
  return (
    <Table<TableData[number]>
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
          <Typography variant="subtitle1" className="pl-4">
            {item["Collateral Factor"]}
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
            <KylixChip value="0%" />
          </Box>
        ),
        supplyRate: (item) => (
          <Box className="flex flex-col pl-4">
            <Typography variant="subtitle1">{item.supplyRate}</Typography>
            <KylixChip value="0%" />
          </Box>
        ),
        collateral: (item) => (
          <Switch
            className="pl-4"
            checked={item.collateral}
            onChange={() => handleCollateralClick(item.collateral, item.id)}
          />
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
      data={transformedData}
      defaultSortKey="asset"
      tableName="markets"
      isFetched={isFetched || isEnableAsCollateral || isDisableAsCollateral}
      hasPagination={false}
    />
  );
};

export default MarketsTableUI;
