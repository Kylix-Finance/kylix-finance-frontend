"use client";

import { Table as TableBase, TableContainer } from "@mui/material";
import React, { ReactNode } from "react";

import TBody from "./TBody";
import THead, { Headers } from "./THead";
import TablePagination from "./TablePagination";

import {
  OnTRowClick,
  Order,
  TableData,
  TBaseProps,
  TBodyProps,
  TContainerProps,
  THeadProps,
  TRowProps,
} from "./types";
import { TableStore } from "../../store";
import { CellValueComponents } from "./TRow";

// ? ExtraData is the data which is not going to render in the table

interface Props<Schema, ExtraFields extends string> {
  components?: CellValueComponents<Schema, ExtraFields>;
  data: TableData<Schema>;
  defaultSortKey: keyof Schema;
  hasPagination?: boolean;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  hiddenTHeads?: Array<keyof Schema | ExtraFields>;
  isLoading?: boolean;
  numeric?: Array<keyof Schema>;
  onTRowClick?: OnTRowClick<Schema>;
  rowSpacing?: string;
  tableName: TableStore.TableName;
  tBaseProps?: TBaseProps;
  tBodyProps?: TBodyProps;
  tCellClassnames?: string;
  tContainerProps?: TContainerProps;
  tHeadProps?: THeadProps;
  tRowProps?: TRowProps;
}

export function Table<Schema, ExtraFields extends string = string>({
  components,
  data,
  defaultSortKey,
  hasPagination = false,
  headers,
  hiddenTHeads,
  isLoading,
  numeric,
  rowSpacing,
  tableName,
  tBaseProps,
  tBodyProps,
  tCellClassnames,
  tContainerProps,
  tHeadProps,
  tRowProps,
}: Props<Schema, ExtraFields>) {
  type Key = keyof Schema;

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<Key>(defaultSortKey);

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: Key
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
          numeric={numeric}
          hiddenTHeads={hiddenTHeads}
          headers={headers}
          onRequestSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
          {...tHeadProps}
        />
        <TBody
          numeric={numeric}
          components={components}
          data={sortedData}
          headers={headers}
          isLoading={isLoading}
          rowSpacing={rowSpacing}
          tBody={tBodyProps}
          tCellClassnames={tCellClassnames}
          tRowProps={tRowProps}
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

function getComparator<Schema>(
  order: Order,
  orderBy: keyof Schema
): (a: Schema, b: Schema) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
