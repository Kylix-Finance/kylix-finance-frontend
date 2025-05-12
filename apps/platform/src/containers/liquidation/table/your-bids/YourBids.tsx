import {
  formatUnit,
  UserBid,
} from "@repo/onchain";
import Empty from "./Empty";
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
import styles from "./YourBids.module.scss";
import { CancelBidButton } from "./CancelBidButton";
interface Props {
  data: UserBid[];
  isPending: boolean;
  isEmpty: boolean;
  assetId: string;
}
const columnHelper = createColumnHelper<UserBid>();

const YourBids = ({ data, isEmpty, isPending, assetId }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor("market_assetInfo.asset_name", {
      header: "Asset",
      enableSorting: false,
      cell: (info) => {
        return (
          <div className={styles.cell}>
            <TokenIcon symbol={info.row.original.bid_asset_info.asset_symbol} />
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
  return (
    <div>
      <Table table={table} isLoading={isPending} />
      <Empty isEmpty={isEmpty} />
    </div>
  );
};

export default YourBids;
