import Table from "~/components/table";
import { SuppliesResponse } from "../Supplies";
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
import styles from "./SuppliesTable.module.scss";
import { formatBigNumbers, useEnableAsCollateral } from "@repo/onchain";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import { LinkButton } from "~/components/ui/link-button";
const columnHelper = createColumnHelper<SuppliesResponse[number]>();

interface Props {
  data: SuppliesResponse;
  isPending: boolean;
  onSupplyClick: (assetId: number) => void;
}

export const SuppliesTable = ({ data, isPending, onSupplyClick }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { account } = useAccountsStore();
  const {
    mutate: enableAsCollateralMutate,
    isPending: isEnableAsCollateralPending,
  } = useEnableAsCollateral();
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
    columnHelper.accessor("supplied", {
      header: "Supplied",
      cell: (info) => {
        const { supplied, decimals, assetSymbol } = info.row.original;
        return (
          <p className={styles.cell}>
            <span className={styles.value}>
              {formatBigNumbers(supplied.toString(), decimals)}
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
      id: "collateral",
      header: "Collateral",
      cell: (info) => {
        const { isCollateral, assetId } = info.row.original;
        return (
          <Switch
            name="collateral"
            disabled
            checked={isCollateral}
            onClick={() =>
              enableAsCollateralMutate({
                assetId,
              })
            }
          />
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
                onSupplyClick(assetId);
              }}
            >
              Supply
            </Button>
            <LinkButton href={`/markets/${assetId}`}>
              <Button disabled={!account?.address} variant="secondary">
                Details
              </Button>
            </LinkButton>
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
