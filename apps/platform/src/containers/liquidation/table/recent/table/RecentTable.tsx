"use client";
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Table from "~/components/table";
import { RecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import { formatTimestamp } from "~/utils/date";
import styles from "./RecentTable.module.scss";
import clsx from "clsx";
const columnHelper = createColumnHelper<RecentLiquidation>();
interface Props {
  isPending: boolean;
  data: RecentLiquidation[];
}
const RecentTable = ({ isPending, data }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor("time", {
      header: "Time",
      enableSorting: true,
      cell: (info) => {
        const { date, time } = formatTimestamp(info.cell.row.original.time);
        return (
          <div className={styles.cell}>
            <span className={styles.value}>{date}</span>
            <span className={styles.sub_value}>{time}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("usdtAmountPaid", {
      header: "Paid",
      enableSorting: true,
      cell: (info) => {
        const usdtAmountPaid = info.row.original.usdtAmountPaid;

        return (
          <div className={styles.cell}>
            <span className={styles.value}>{usdtAmountPaid}</span>
            <span className={styles.sub_value}>$3.91B</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("assetAmountLiquidated", {
      header: "Liquidated",
      enableSorting: true,
      cell: (info) => {
        const assetAmountLiquidated = info.row.original.assetAmountLiquidated;
        return (
          <div className={styles.cell}>
            <span className={styles.value}>{assetAmountLiquidated} BTC</span>
            <span className={styles.sub_value}>$3.91B</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("averagePrice", {
      header: "Average Price",
      enableSorting: true,
      cell: (info) => {
        const averagePrice = info.row.original.averagePrice;

        return (
          <div className={styles.cell}>
            <span className={styles.value}>{averagePrice} BTC</span>
            <span className={clsx(styles.sub_value, styles.down)}>
              +2.3% this week
            </span>
          </div>
        );
      },
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });
  return <Table table={table} isLoading={isPending} />;
};

export default RecentTable;
