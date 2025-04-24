import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import styles from "./LiquidationTable.module.scss";
import {
  LiquidationMarket,
  useGetLiquidationMarkets,
} from "@repo/onchain";
import Table from "~/components/table";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { useState, useMemo } from "react";

const columnHelper = createColumnHelper<LiquidationMarket>();

export const LiquidationTable = () => {
  const { data } = useGetLiquidationMarkets();

  console.log("23data", data);

  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor("health", {
      header: "Health",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("asset_symbol", {
      header: "Collateral",
      cell: (info) => (
        <div className={styles.token}>
          <TokenIcon symbol={info.getValue()} />
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("bid_asset", {
      header: "Bid Denom",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("tvl", {
      header: "TVL",
      cell: (info) => {
        const { tvl, asset_decimals } = info.row.original;
        return tvl;
      },
    }),
    columnHelper.accessor("pool_size", {
      header: "Pool size",
      cell: (info) => {
        const { pool_size, asset_decimals } = info.row.original;
        return pool_size;
      },
    }),
    columnHelper.accessor("max_discount", {
      header: "Max discount",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user_bid", {
      header: "Bid placed",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      cell: () => (
        <div className={styles.actions}>
          <Button>View Market</Button>
        </div>
      ),
    }),
  ];

  const tableData = useMemo(() => data || [], [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <div className={styles.container}>
      <Table table={table} />
    </div>
  );
};
