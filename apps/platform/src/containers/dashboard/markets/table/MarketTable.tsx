import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  Row,
} from "@tanstack/react-table";
import styles from "./MarketTable.module.scss";
import { formatBigNumbers, LandingPool } from "@repo/onchain";
import Table from "~/components/table";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import Empty from "../Empty";
import { useAccountsStore } from "@repo/shared";
import { useRouter } from "next/navigation";
const columnHelper = createColumnHelper<LandingPool>();

interface Props {
  isPending: boolean;
  data: LandingPool[];
  isEmpty: boolean;
  onSupplyClick: (assetId: number) => void;
}

export const MarketTable = ({
  data,
  isPending,
  isEmpty,
  onSupplyClick,
}: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { account } = useAccountsStore();
  const router = useRouter();
  const columns = [
    columnHelper.accessor("asset_symbol", {
      header: "Asset",
      enableSorting: false,
      cell: (info) => (
        <div className={styles.token}>
          <TokenIcon symbol={info.getValue()} />
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("total_pool_supply", {
      header: "Total Supplied",
      cell: (info) => {
        const { total_pool_supply, asset_symbol } = info.row.original;
        return (
          <p className={styles.cell}>
            <span className={styles.value}>
              {formatBigNumbers(total_pool_supply.toString(), 2)}
            </span>
            <span>{asset_symbol}</span>
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
        const { total_pool_borrow, asset_symbol } = info.row.original;
        return (
          <p className={styles.cell}>
            <span className={styles.value}>
              {formatBigNumbers(total_pool_borrow.toString(), 2)}
            </span>
            <span>{asset_symbol}</span>
          </p>
        );
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
      cell: (info) => {
        const { asset_id } = info.row.original;
        return (
          <div className={styles.actions}>
            <Button
              disabled={!account?.address}
              onClick={() => onSupplyClick(asset_id)}
            >
              Supply
            </Button>
            <Button variant="secondary">Borrow</Button>
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
    <div className={styles.container}>
      <Table
        table={table}
        isLoading={isPending}
        onRowClick={(row: Row<LandingPool>) =>
          router.push(`/markets/${row.original.asset_id}`)
        }
      />
      <Empty isEmpty={isEmpty} />
    </div>
  );
};
