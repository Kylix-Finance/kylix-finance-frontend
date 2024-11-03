"use client";

import { Box, Button, Typography } from "@mui/material";
import {
  formatBigNumbers,
  formatUnit,
  MetadataResult,
  useMetadata,
  useProvider,
} from "@repo/onchain-utils";
import { Table } from "@repo/ui";
import { useEffect, useState } from "react";
import { Asset } from "~/components";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { formatPercentage } from "~/utils";
import { TableActions } from "../../markets/_parts/TableActions";

const Borrowed = () => {
  const {
    data: AssetWiseBorrowsCollaterals,
    isLoading,
    isFetched,
  } = useGetAssetWiseBorrowsCollaterals();
  const { api } = useProvider();
  const [borrowedWithMetadata, setBorrowedWithMetadata] = useState<TableData>();

  useEffect(() => {
    if (
      !AssetWiseBorrowsCollaterals ||
      !AssetWiseBorrowsCollaterals.borrowedAssets ||
      !api
    )
      return;

    const fetchMetadata = async () => {
      const promises = AssetWiseBorrowsCollaterals?.borrowedAssets?.map?.(
        async (item) => {
          const metadata = await api?.query?.assets?.metadata?.(
            item.collateralAssets?.[0]
          );
          const humanMetadata = metadata?.toHuman() as MetadataResult;

          return {
            id: item.collateralAssets?.[0] || 0,
            apy: formatPercentage(item.apy?.toString() || 0, item.decimals),
            asset: humanMetadata.symbol,
            balance: formatBigNumbers(
              formatUnit(item.balance, item.decimals),
              4
            ),
            borrowed: formatBigNumbers(
              formatUnit(item.borrowed || 0, item.decimals),
              4
            ),
          };
        }
      );

      const borrowedAssets = await Promise.all(promises || []);

      setBorrowedWithMetadata(borrowedAssets);
    };

    fetchMetadata();
  }, [AssetWiseBorrowsCollaterals, api]);

  return (
    <Table<TableData[number]>
      isFetched={isFetched}
      placeholderLength={3}
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
      tableName="borrow"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        apy: (item) => <Typography variant="subtitle1">{item.apy}</Typography>,
        balance: (item) => (
          <Typography variant="subtitle1">{item.balance}</Typography>
        ),
        borrowed: (item) => (
          <Typography variant="subtitle1">{item.borrowed}</Typography>
        ),
        actions: (item) => <TableActions assetId={item.id} />,
      }}
      data={borrowedWithMetadata || []}
    />
  );
};

export default Borrowed;

type TableData = {
  asset: string;
  apy: string;
  borrowed: string;
  balance: string;
  id: number;
}[];
