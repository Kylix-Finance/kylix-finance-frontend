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
import Empty from "./Empty";
import { formatTimestamp } from "~/utils/date";
import styles from "./Recent.module.scss";
import clsx from "clsx";
const columnHelper = createColumnHelper<RecentLiquidation>();
interface Props {
  isPending: boolean;
  isEmpty: boolean;
  data: RecentLiquidation[];
}
const Recent = ({ isPending, data, isEmpty }: Props) => {
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
  return (
    <div>
      <Table table={table} isLoading={isPending} />
      <Empty isEmpty={isEmpty} />
    </div>
  );
};

export default Recent;
