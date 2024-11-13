"use client";

import { Box, Button, Stack, Switch, Typography } from "@mui/material";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { Table } from "@repo/ui";
import { Asset, notify } from "~/components";
import { useDisableAsCollateral } from "~/hooks/chain/useDisableAsCollateral";
import { useEnableAsCollateral } from "~/hooks/chain/useEnableAsCollateral";
import { useGetAssetWiseSupplies } from "~/hooks/chain/useGetAssetWiseSupplies";
import { TableActions } from "../../markets/_parts/TableActions";
import Link from "next/link";

const Supplied = () => {
  const {
    data: assetWiseSupplies,
    isLoading,
    isFetched,
  } = useGetAssetWiseSupplies();
  const { mutate: enableAsCollateralMutate, isPending: isEnableAsCollateral } =
    useEnableAsCollateral();
  const {
    mutate: disableAsCollateralMutate,
    isPending: isDisableAsCollateral,
  } = useDisableAsCollateral();
  const supplies:
    | {
        asset: string;
        apy: string;
        balance: string;
        supplied: string;
        collateral: boolean;
        assetId: number;
      }[]
    | undefined = assetWiseSupplies?.suppliedAssets.map?.((item) => ({
    apy: item.apy,
    asset: item.assetSymbol,
    assetId: item.assetId,
    balance: formatBigNumbers(formatUnit(item.balance, item.decimals), 4),
    supplied: formatBigNumbers(formatUnit(item.supplied, item.decimals), 4),
    collateral: item.collateral,
  }));
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
    <Table
      isLoading={isLoading}
      isFetched={isFetched}
      placeholderLength={3}
      tCellClassnames={"!p-3"}
      rowSpacing="10px"
      noDataComponent={NoData}
      hasPagination={false}
      defaultSortKey="asset"
      headers={{
        asset: "Asset",
        balance: "Balance",
        apy: "APY",
        supplied: "Supplied",
        collateral: "Collateral",
        actions: "Action",
      }}
      hiddenTHeads={["actions", "assetId"]}
      tableName="supply"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        apy: (item) => <Typography variant="subtitle1">{item.apy}</Typography>,
        balance: (item) => (
          <Typography variant="subtitle1">{item.balance}</Typography>
        ),
        supplied: (item) => (
          <Typography variant="subtitle1">{item.supplied}</Typography>
        ),
        collateral: (item) => (
          <Switch
            checked={item.collateral}
            onChange={() =>
              handleCollateralClick(item.collateral, item.assetId)
            }
          />
        ),
        actions: (item) => (
          <TableActions assetId={item.assetId} secondActionb="Withdraw" />
        ),
      }}
      data={supplies || []}
    />
  );
};

// TODO: Refactor
const NoData = () => {
  return (
    <Stack gap={1} alignItems="center">
      <Typography variant="subtitle1">No Data Available</Typography>
      <Link href="/markets">
        <Button>Supply</Button>
      </Link>
    </Stack>
  );
};

export default Supplied;
