"use client";

import { Box, Switch, Typography } from "@mui/material";
import { Asset, Card, KylixChip } from "~/components";
import { RightComponent } from "./RightComponent";
import { TableActions } from "../TableActions";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { OnTRowClick, Table } from "@repo/ui";
import { usePools } from "~/hooks/chain/usePools";

const placeholderData = Array.from({ length: 5 }).map(() => ({
  asset: "",
  borrowApy: "",
  collateral: false,
  collateralQ: "",
  id: 0,
  supplyApy: "",
  utilization: "",
  walletBalance: "0",
}));

type TableData = typeof placeholderData;

const MarketsTable = () => {
  // const { lendingPool } = useGetLendingPools();
  const { data: lendingPools } = usePools();

  const transformedData = useMemo(() => {
    return lendingPools?.pools?.map((item) => {
      return {
        asset: item.assetName,
        collateralQ: `%${item.collateralQ}`,
        collateral: item.collateral,
        utilization: `%${item.utilization}`,
        borrowApy: `%${item.borrowApy}`,
        supplyApy: `%${item.supplyApy}`,
        walletBalance: item.balance,
        id: item.assetId,
      };
    });
  }, [lendingPools?.pools]);

  console.log("lendingPools", lendingPools);
  return (
    <Card title="Markets" rightComponent={<RightComponent />}>
      <Table<TableData[number]>
        hiddenTHeads={["actions"]}
        headers={{
          asset: "Asset",
          collateralQ: "Collateral Q",
          utilization: "Utilization",
          borrowApy: "Borrow Apy",
          supplyApy: "Supply Apy",
          collateral: "Collateral",
          walletBalance: "Wallet Balance",
          actions: "",
        }}
        isLoading={!lendingPools}
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
