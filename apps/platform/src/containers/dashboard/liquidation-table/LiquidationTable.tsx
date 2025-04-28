import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import styles from "./LiquidationTable.module.scss";
import {
  formatBigNumbers,
  formatUnit,
  LiquidationMarket,
  useGetLiquidationMarkets,
} from "@repo/onchain";
import Table from "~/components/table";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { useState, useMemo } from "react";
import clsx from "clsx";
import Health from "./health/Health";
import { EmptyState } from "~/components/empty-state";
import Ghost from "~/assets/icons/ghost.svg";
const columnHelper = createColumnHelper<LiquidationMarket>();
interface Props {
  query: string | null;
}
export const LiquidationTable = ({ query }: Props) => {
  const { data, isLoading, isFetched } = useGetLiquidationMarkets();

  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor("health", {
      header: "Health",
      cell: (info) => <Health value={info.getValue()} />,
    }),
    columnHelper.accessor("asset_symbol", {
      header: "Collateral",
      enableSorting: false,
      cell: (info) => (
        <div className={clsx(styles.token, styles.cell)}>
          <TokenIcon symbol={info.getValue()} />
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("bid_asset", {
      header: "Bid Denom",
      cell: (info) => <p className={styles.cell}>{info.getValue()}</p>,
    }),
    columnHelper.accessor("tvl", {
      header: "TVL",
      cell: (info) => {
        const { tvl, asset_decimals } = info.row.original;
        return (
          <p className={styles.cell}>
            {formatBigNumbers(formatUnit(tvl, asset_decimals), 4)}
          </p>
        );
      },
    }),
    columnHelper.accessor("pool_size", {
      header: "Pool size",
      cell: (info) => {
        const { pool_size, asset_decimals } = info.row.original;
        return (
          <p className={styles.cell}>
            {formatBigNumbers(formatUnit(pool_size, asset_decimals), 4)}
          </p>
        );
      },
    }),
    columnHelper.accessor("max_discount", {
      header: "Max discount",
      cell: (info) => <p className={styles.cell}>{info.getValue()}</p>,
    }),
    columnHelper.accessor("user_bid", {
      header: "Bid placed",
      cell: (info) => {
        const { user_bid, bid_asset_decimals } = info.row.original;
        return (
          <p className={styles.cell}>
            {user_bid
              ? formatBigNumbers(formatUnit(user_bid, bid_asset_decimals), 4)
              : "-"}
          </p>
        );
      },
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

  const tableData = useMemo(() => {
    if (!data) return [];
    if (!query) return data;
    return data.filter((item) =>
      item.asset_name.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);
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
      <Table table={table} isLoading={!data && (isLoading || isFetched)} />
      {(!data || data.length === 0) && !isLoading && isFetched && (
        <EmptyState
          description="No liquidation markets are currently available. Please check back later."
          title="No Liquidation Markets Available"
          icon={Ghost}
        />
      )}
    </div>
  );
};
