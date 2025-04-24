import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "./MarketTable.module.scss";
import { LandingPool, useGetLendingPools } from "@repo/onchain";
import Table from "~/components/table";

const columnHelper = createColumnHelper<LandingPool>();

export const MarketTable = () => {
  const { data } = useGetLendingPools();

  const columns = [
    columnHelper.accessor("asset_id", {
      header: "Slug",
      cell: (info) => {},
    }),
  ];

  const table = useReactTable({
    data: data?.assets || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container}>
      <Table table={table} />
    </div>
  );
};
