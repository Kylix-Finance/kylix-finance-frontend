import Table from "~/components/table";
import { BorrowedResponse } from "../Borrowed";
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useAccountsStore } from "@repo/shared";
import { useState } from "react";
import TokenIcon from "~/components/token-icon";
import styles from "./BorrowedTable.module.scss";
import { formatBigNumbers } from "@repo/onchain";
import { Button } from "~/components/ui/button";
const columnHelper = createColumnHelper<BorrowedResponse[number]>();

interface Props {
  data: BorrowedResponse;
  isPending: boolean;
  onRepayClick: (assetId: number) => void;
  onBorrowClick: (assetId: number) => void;
}

export const BorrowedTable = ({
  data,
  isPending,
  onBorrowClick,
  onRepayClick,
}: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { account } = useAccountsStore();
  const columns = [
    columnHelper.accessor("assetSymbol", {
      header: "Asset",
      enableSorting: false,
      cell: (info) => (
        <div className={styles.token}>
          <TokenIcon symbol={info.getValue()} />
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("borrowed", {
      header: "Borrowed",
      cell: (info) => {
        const { borrowed, assetSymbol, decimals } = info.row.original;
        return (
          <p className={styles.cell}>
            <span className={styles.value}>
              {formatBigNumbers(borrowed.toString(), decimals)}
            </span>
            <span>{assetSymbol}</span>
          </p>
        );
      },
    }),
    columnHelper.accessor("apy", {
      header: "Borrowed APY",
      cell: (info) => <p className={styles.cell}>{info.getValue()}</p>,
    }),
    columnHelper.accessor("balance", {
      header: "Balance",
      cell: (info) => {
        const { balance, decimals, assetSymbol } = info.row.original;
        return (
          <p className={styles.cell}>
            <span className={styles.value}>
              {formatBigNumbers(balance.toString(), decimals)}
            </span>
            <span>{assetSymbol}</span>
          </p>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      cell: (info) => {
        const { assetId } = info.row.original;
        return (
          <div className={styles.actions}>
            <Button
              disabled={!account?.address}
              onClick={(e) => {
                e.preventDefault();
                onBorrowClick(assetId);
              }}
            >
              Borrow
            </Button>
            <Button
              disabled={!account?.address}
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                onRepayClick(assetId);
              }}
            >
              Repay
            </Button>
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
