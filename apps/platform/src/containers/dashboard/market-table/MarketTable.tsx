import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "./MarketTable.module.scss";
import { LandingPool, useGetLendingPools } from "@repo/onchain";
import Table from "~/components/table";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { useMemo } from "react";

const columnHelper = createColumnHelper<LandingPool>();

export const MarketTable = () => {
  const { data } = useGetLendingPools();

  console.log("data", data);

  const columns = [
    columnHelper.accessor("asset", {
      header: "Asset",
      cell: (info) => (
        <div>
          <TokenIcon symbol={info.getValue()} />
        </div>
      ),
    }),
    columnHelper.accessor("total_pool_supply", {
      header: "Total Supplied",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("supply_apy", {
      header: "Supply APY",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total_pool_borrow", {
      header: "Total Borrowed",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("borrow_apy", {
      header: "Borrow APY",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("utilization", {
      header: "Utilization",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Utilization",
      cell: (info) => (
        <div className={styles.actions}>
          <Button>Supply</Button>
          <Button variant="secondary">Borrow</Button>
        </div>
      ),
    }),
  ];

  const tableData = useMemo(() => data?.assets || [], [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container}>
      <Table table={table} />
    </div>
  );
};
