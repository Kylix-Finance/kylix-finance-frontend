import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import styles from "./LiquidationTable.module.scss";
import { formatBigNumbers, formatUnit, LiquidationMarket } from "@repo/onchain";
import Table from "~/components/table";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import clsx from "clsx";
import Health from "../health/Health";
import Empty from "../Empty";
import Check from "~/assets/icons/check.svg";
const columnHelper = createColumnHelper<LiquidationMarket>();
interface Props {
  isPending: boolean;
  isEmpty: boolean;
  data: LiquidationMarket[];
  onViewMarketClick: (id: number) => void;
}
export const LiquidationTable = ({
  data,
  isEmpty,
  isPending,
  onViewMarketClick,
}: Props) => {
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
        const { user_bid } = info.row.original;
        return (
          <span className={styles.cell}>
            {user_bid ? (
              <Check width={32} heigh={32} className={styles.check} />
            ) : (
              "-"
            )}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      cell: (info) => {
        const { asset_id } = info.row.original;
        return (
          <div className={styles.actions}>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onViewMarketClick(asset_id);
              }}
            >
              View Market
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

  return (
    <div className={styles.container}>
      <Table table={table} isLoading={isPending} />
      <Empty isEmpty={isEmpty} />
    </div>
  );
};
