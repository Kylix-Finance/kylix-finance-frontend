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
      cell: (info) => <div>{info.getValue()}</div>,
    }),
    columnHelper.accessor("usdtAmountPaid", {
      header: "Paid",
      enableSorting: true,
      cell: (info) => <div>{info.getValue()}</div>,
    }),
    columnHelper.accessor("assetAmountLiquidated", {
      header: "Liquidated",
      enableSorting: true,
      cell: (info) => <div>{info.getValue()}</div>,
    }),
    columnHelper.accessor("averagePrice", {
      header: "Average Price",
      enableSorting: true,
      cell: (info) => <div>{info.getValue()}</div>,
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
