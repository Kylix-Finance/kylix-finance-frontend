import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import styles from "./MarketTable.module.scss";
import {
  formatBigNumbers,
  LandingPool,
  useGetLendingPools,
} from "@repo/onchain";
import Table from "~/components/table";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { useState, useMemo } from "react";
import clsx from "clsx";
import { EmptyState } from "~/components/empty-state";
import Ghost from "~/assets/icons/ghost.svg";
const columnHelper = createColumnHelper<LandingPool>();

interface Props {
  query: string | null;
}

export const MarketTable = ({ query }: Props) => {
  const { data, isLoading, isFetched } = useGetLendingPools();

  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor("asset_symbol", {
      header: "Asset",
      enableSorting: false,
      cell: (info) => (
        <div className={clsx(styles.token, styles.cell)}>
          <TokenIcon symbol={info.getValue()} />
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("total_pool_supply", {
      header: "Total Supplied",
      cell: (info) => {
        const { total_pool_supply } = info.row.original;
        return (
          <p className={styles.cell}>
            {formatBigNumbers(total_pool_supply.toString(), 2)}
          </p>
        );
      },
    }),
    columnHelper.accessor("supply_apy", {
      header: "Supply APY",
      cell: (info) => <p className={styles.cell}>{info.getValue()}</p>,
    }),
    columnHelper.accessor("total_pool_borrow", {
      header: "Total Borrowed",
      cell: (info) => {
        const { borrow_apy } = info.row.original;
        return <p className={styles.cell}>{borrow_apy}</p>;
      },
    }),
    columnHelper.accessor("borrow_apy", {
      header: "Borrow APY",
      cell: (info) => <p className={styles.cell}>{info.getValue()}</p>,
    }),
    columnHelper.accessor("utilization", {
      header: "Utilization",
      cell: (info) => <p className={styles.cell}>{info.getValue()}</p>,
    }),
    columnHelper.display({
      id: "actions",
      cell: () => (
        <div className={styles.actions}>
          <Button>Supply</Button>
          <Button variant="secondary">Borrow</Button>
        </div>
      ),
    }),
  ];

  const tableData = useMemo(() => {
    if (!data?.assets) return [];
    if (!query) return data.assets;
    return data.assets.filter((item) =>
      item.asset.toLowerCase().includes(query.toLowerCase())
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
      <Table table={table} isLoading={!data && (isLoading || !isFetched)} />
      {(!tableData || tableData.length === 0) && !isLoading && isFetched && (
        <EmptyState
          description="No markets were found. This could be due to no available markets or your search criteria didn't match any results."
          title="No Markets Found"
          icon={Ghost}
        />
      )}
    </div>
  );
};
