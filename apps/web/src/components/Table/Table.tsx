"use client";

import {
  Paper,
  PaperProps,
  Table as TableBase,
  TableContainer,
} from "@mui/material";
import React, { ReactNode } from "react";

import TBody from "./TBody";
import THead from "./THead";
import TablePagination from "./TablePagination";
import {
  Order,
  TableData,
  TBaseProps,
  TBodyProps,
  TContainerProps,
  TData,
  THeadProps,
  TRowProps,
} from "./types";
import { GlobalStore } from "~/store";

interface Props<K extends string> {
  data: TableData<K>;
  defaultSortKey: keyof TData<K>;
  hasPagination?: boolean;
  tableName: GlobalStore.TableName;
  tBaseProps?: TBaseProps;
  tBodyProps?: TBodyProps;
  tContainerProps?: TContainerProps;
  tHeadProps?: THeadProps;
  tRowProps?: TRowProps;
  rowSpacing?: string;
}

export function Table<K extends string>({
  data,
  defaultSortKey,
  hasPagination = false,
  tableName,
  tBaseProps,
  tBodyProps,
  tContainerProps,
  tHeadProps,
  tRowProps,
  rowSpacing,
}: Props<K>) {
  type DataItemKey = keyof TData<K>;

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<DataItemKey>(defaultSortKey);

  const headers = Array.from(new Set(data.flatMap(Object.keys))) as K[];

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: DataItemKey
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = React.useMemo(
    () => data.slice().sort(getComparator(order, orderBy)),
    [order, orderBy, data]
  );

  return (
    <TableContainer
      // component={(props: PaperProps) => (
      //   <Paper
      //     style={{
      //       backgroundColor: "transparent",
      //     }}
      //     {...props}
      //   />
      // )}
      {...tContainerProps}
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        ...tContainerProps?.sx,
      }}
    >
      <TableBase {...tBaseProps} stickyHeader>
        <THead
          headers={headers}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          {...tHeadProps}
          tRowProps={tRowProps}
        />
        <TBody
          rowSpacing={rowSpacing}
          data={sortedData}
          headers={headers}
          tBody={tBodyProps}
        />
      </TableBase>
      {hasPagination && <TablePagination tableName={tableName} />}
    </TableContainer>
  );
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string | ReactNode },
  b: { [key in Key]: number | string | ReactNode }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
