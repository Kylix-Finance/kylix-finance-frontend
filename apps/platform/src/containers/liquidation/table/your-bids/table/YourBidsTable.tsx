import styles from "./YourBidsTable.module.scss";
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Table from "~/components/table";
import TokenIcon from "~/components/token-icon";
import { CancelBidButton } from "../CancelBidButton";
import clsx from "clsx";
import { formatUnit, UserBid } from "@repo/onchain";

const columnHelper = createColumnHelper<UserBid>();
interface Props {
  data: UserBid[];
  isPending: boolean;
  assetId: string;
}
const YourBidsTable = ({ assetId, data, isPending }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor("market_assetInfo.asset_name", {
      header: "Asset",
      enableSorting: false,
      cell: (info) => {
        const symbol = info.row.original.bid_asset_info.asset_symbol;
        return (
          <div className={clsx(styles.cell, styles.asset)}>
            <TokenIcon symbol={symbol} />
            <p className={styles.value}>{symbol}</p>
          </div>
        );
      },
    }),
    columnHelper.accessor("bid_amount", {
      header: "Bid Amount",
      enableSorting: true,
      cell: (info) => {
        const value = formatUnit(
          info.getValue(),
          info.row.original.bid_asset_info.decimals
        );
        return (
          <div className={styles.cell}>
            <span className={styles.value}>
              {value} {info.row.original.bid_asset_info.asset_symbol}
            </span>
            <span className={styles.sub_value}>$3.91B</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("discount", {
      header: "Discount",
      enableSorting: true,
      cell: (info) => {
        return (
          <div className={styles.cell}>
            <span className={styles.value}>{info.getValue()}%</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("filled_amount", {
      header: "Filled",
      enableSorting: true,
      cell: (info) => {
        return (
          <div className={styles.cell}>
            <span className={styles.value}>{info.getValue()}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("blocknumber", {
      header: "",
      enableSorting: false,
      cell: (info) => {
        const data = info.row.original;
        return (
          <div className={styles.cell}>
            <CancelBidButton
              assetId={assetId}
              discount={data.discount}
              txBlockNumber={data.blocknumber}
              txIndex={data.index}
            />
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

export default YourBidsTable;
