"use client";

import { Box, Switch, Typography } from "@mui/material";
import { Card, Table, KylixChip, TData } from "~/components";
import { Asset } from "~/components/Asset";
import { RightComponent } from "./RightComponent";
import { TableActions } from "../TableActions";
import { useGetLendingPools } from "@repo/onchain-utils";
import { useMemo } from "react";
import { OnTRowClick } from "~/components/Table/TBody";
import { useRouter } from "next/navigation";

type TKey =
  | "Asset"
  | "Collateral Q"
  | "Utilization"
  | "Borrow APY"
  | "Supply APY"
  | "Collateral"
  | "Wallet Balance"
  | "Actions";

const placeholderData = Array.from({ length: 5 }).map(() => ({
  Asset: {
    name: "",
    label: "",
  },
  "Collateral Q": {
    value: "",
  },
  Collateral: {
    value: false,
  },
  Utilization: {
    value: "",
  },
  "Borrow APY": {
    value: "",
  },
  "Supply APY": {
    value: "",
  },
  "Wallet Balance": {
    value: "",
  },
}));

const MarketsTable = () => {
  const { lendingPool } = useGetLendingPools();

  const router = useRouter();

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
        id: item.id,
      };
    });
  }, [lendingPool]);

  // TODO: remove index
  const handleTRowClick: OnTRowClick = (index) => {
    const item = transformedData?.[index];
    if (item) router.push(`markets/${item.id}`);
  };

  return (
    <Card title="Markets" rightComponent={<RightComponent />}>
      <Table<TKey>
        isLoading={!lendingPool}
        tRowProps={{
          className: "cursor-pointer",
        }}
        onTRowClick={handleTRowClick}
        hiddenTHeadsText={["Actions"]}
        rowSpacing="11px"
        data={(transformedData || placeholderData).map((item) => ({
          Asset: (
            <Asset helperText={item.Asset.label} label={item.Asset.name} />
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
        }))}
        defaultSortKey="Asset"
        tableName="markets"
        hasPagination={false}
      />
    </Card>
  );
};

export default MarketsTable;
