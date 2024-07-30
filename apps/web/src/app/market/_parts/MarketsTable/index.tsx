"use client";

import { Box, Switch, Typography } from "@mui/material";
import { Card, Table, KylixChip } from "~/components";
import { Asset } from "~/components/Asset";
import { RightComponent } from "./RightComponent";
import { TableActions } from "../TableActions";
import { useGetLendingPools } from "@repo/onchain-utils";
import { useMemo } from "react";

type TKey =
  | "Asset"
  | "Collateral Q"
  | "Utilization"
  | "Borrow APY"
  | "Supply APY"
  | "Collateral"
  | "Wallet Balance"
  | "Actions";

const MarketsTable = () => {
  const { lendingPool } = useGetLendingPools();

  const transformedData = useMemo(() => {
    return lendingPool?.map((item) => {
      return {
        Asset: { name: item.asset, label: item.asset },
        "Collateral Q": { value: `%${item.collateral_q}` },
        Collateral: { value: item.collateral },
        Utilization: { value: `%${item.utilization}` },
        "Borrow APY": { value: `%${item.borrow_apy}` },
        "Supply APY": { value: `%${item.supply_apy}` },
        "Wallet Balance": { value: item.balance },
      };
    });
  }, [lendingPool]);

  return (
    <Card title="Markets" rightComponent={<RightComponent />}>
      <Table<TKey>
        tRowProps={
          {
            // className: "cursor-pointer",
          }
        }
        hiddenTHeadsText={["Actions"]}
        rowSpacing="11px"
        data={
          transformedData
            ? transformedData?.map((item) => ({
                Asset: (
                  <Asset
                    helperText={item.Asset.label}
                    label={item.Asset.name}
                  />
                ),
                "Collateral Q": (
                  <Typography variant="subtitle1">
                    {item["Collateral Q"].value}
                  </Typography>
                ),
                Utilization: (
                  <Typography variant="subtitle1">
                    {item.Utilization.value}
                  </Typography>
                ),
                "Borrow APY": (
                  <Box className="flex flex-col">
                    <Typography variant="subtitle1">
                      {item["Borrow APY"].value}
                    </Typography>
                    <KylixChip value={`${(Math.random() * 10).toFixed()}%`} />
                  </Box>
                ),
                "Supply APY": (
                  <Box className="flex flex-col">
                    <Typography variant="subtitle1">
                      {item["Supply APY"].value}
                    </Typography>
                    <KylixChip value={`${(Math.random() * 10).toFixed()}%`} />
                  </Box>
                ),
                Collateral: <Switch checked={item["Collateral"].value} />,
                "Wallet Balance": (
                  <Typography variant="subtitle1">
                    {Number(item["Wallet Balance"].value).toLocaleString()}
                  </Typography>
                ),
                Actions: <TableActions />,
              }))
            : []
        }
        defaultSortKey="Asset"
        tableName="markets"
        hasPagination={false}
      />
    </Card>
  );
};

export default MarketsTable;

const tableData = [
  {
    Asset: { name: "USDC", label: "USDC" },
    "Collateral Q": { value: "%80" },
    Utilization: { value: "%54" },
    "Borrow APY": { value: "%8.2" },
    "Supply APY": { value: "%12" },
    "Wallet Balance": { value: "1200" },
  },
  {
    Asset: { name: "Dot", label: "Dot" },
    "Collateral Q": { value: "%91" },
    Utilization: { value: "%31" },
    "Borrow APY": { value: "%7.5" },
    "Supply APY": { value: "%4" },
    "Wallet Balance": { value: "130" },
  },
  {
    Asset: { name: "KYL", label: "KYL" },
    "Collateral Q": { value: "%83" },
    Utilization: { value: "%20" },
    "Borrow APY": { value: "%3.8" },
    "Supply APY": { value: "%16" },
    "Wallet Balance": { value: "20" },
  },
  {
    Asset: { name: "USDT", label: "USDT" },
    "Collateral Q": { value: "%92" },
    Utilization: { value: "%36" },
    "Borrow APY": { value: "%8.1" },
    "Supply APY": { value: "%3" },
    "Wallet Balance": { value: "12200" },
  },
  {
    Asset: { name: "USDC", label: "USDC" },
    "Collateral Q": { value: "%80" },
    Utilization: { value: "%54" },
    "Borrow APY": { value: "%2.8" },
    "Supply APY": { value: "%8" },
    "Wallet Balance": { value: "432" },
  },
];
