"use client";

import { Button, Link, Stack, Typography } from "@mui/material";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { Table } from "@repo/ui";
import { Asset } from "~/components";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { TableActions } from "../../markets/_parts/TableActions";

const Borrowed = () => {
  const {
    data: AssetWiseBorrowsCollaterals,
    isLoading,
    isFetched,
  } = useGetAssetWiseBorrowsCollaterals();

  const data = AssetWiseBorrowsCollaterals?.borrowedAssets?.map?.((item) => {
    return {
      id: item.assetId || 0,
      apy: item.apy,
      asset: item.assetSymbol,
      balance: formatBigNumbers(formatUnit(item.balance, item.decimals), 4),
      borrowed: formatBigNumbers(
        formatUnit(item.borrowed || 0, item.decimals),
        4
      ),
      symbol: item.assetSymbol,
    };
  });

  return (
    <Table
      components={{
        asset: (item) => (
          <Asset helperText="" label={item.asset} symbol={item.symbol} />
        ),
        apy: (item) => <Typography variant="subtitle1">{item.apy}</Typography>,
        balance: (item) => (
          <Typography variant="subtitle1">{item.balance}</Typography>
        ),
        borrowed: (item) => (
          <Typography variant="subtitle1">{item.borrowed}</Typography>
        ),
        actions: (item) => (
          <TableActions
            assetId={item.id}
            firstAction="Borrow"
            secondAction="Repay"
          />
        ),
      }}
      data={data || []}
      defaultSortKey="asset"
      hasPagination={false}
      headers={{
        asset: "Asset",
        balance: "Balance",
        apy: "APY",
        borrowed: "Borrowed",
        actions: "Action",
      }}
      hiddenTHeads={["actions"]}
      isFetched={isFetched}
      isLoading={isLoading}
      noDataComponent={NoData}
      placeholderLength={3}
      rowSpacing="10px"
      tableName="borrow"
      tCellClassnames="!p-3"
    />
  );
};

const NoData = () => {
  return (
    <Stack alignItems="center" gap={1}>
      <Typography variant="subtitle1">No Data Available</Typography>
      <Link href="/markets">
        <Button>Borrow</Button>
      </Link>
    </Stack>
  );
};

export default Borrowed;
