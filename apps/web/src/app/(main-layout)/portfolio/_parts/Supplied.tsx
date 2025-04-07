"use client";

import { Button, Stack, Typography } from "@mui/material";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { Table } from "@repo/ui";
import { Asset } from "~/components";
import { useGetAssetWiseSupplies } from "~/hooks/chain/useGetAssetWiseSupplies";
import { TableActions } from "../../markets/_parts/TableActions";
import Link from "next/link";
import CollateralSwitch from "~/components/CollateralSwitch/CollateralSwitch";

const Supplied = () => {
  const {
    data: assetWiseSupplies,
    isLoading,
    isFetched,
  } = useGetAssetWiseSupplies();
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
  return (
    <Table
      components={{
        asset: (item) => (
          <Asset helperText="" label={item.asset} symbol={item.asset} />
        ),
        apy: (item) => <Typography variant="subtitle1">{item.apy}</Typography>,
        balance: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.balance}
          </Typography>
        ),
        supplied: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.supplied}
          </Typography>
        ),
        collateral: (item) => (
          <CollateralSwitch id={item.assetId} isCollateral={item.collateral} />
        ),
        actions: (item) => (
          <TableActions assetId={item.assetId} secondAction="Withdraw" />
        ),
      }}
      data={supplies || []}
      defaultSortKey="asset"
      hasPagination={false}
      headers={{
        asset: "Asset",
        balance: "Balance",
        apy: "APY",
        supplied: "Supplied",
        collateral: "Collateral",
        actions: "Action",
      }}
      hiddenTHeads={["actions", "assetId"]}
      isFetched={isFetched}
      isLoading={isLoading}
      noDataComponent={NoData}
      placeholderLength={3}
      rowSpacing="10px"
      tableName="supply"
      tCellClassnames="!p-3"
    />
  );
};

// TODO: Refactor
const NoData = () => {
  return (
    <Stack alignItems="center" gap={1}>
      <Typography variant="subtitle1">No Data Available</Typography>
      <Link href="/markets">
        <Button>Supply</Button>
      </Link>
    </Stack>
  );
};

export default Supplied;
