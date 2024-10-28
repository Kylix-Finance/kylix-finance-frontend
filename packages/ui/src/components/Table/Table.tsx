"use client";

import { Table as TableBase, TableContainer } from "@mui/material";
import React from "react";

import TBody from "./TBody";
import THead, { Headers } from "./THead";
import TablePagination from "./TablePagination";

import {
  Order,
  TableData,
  TBaseProps,
  TBodyProps,
  TContainerProps,
  THeadProps,
  TRowProps,
} from "./types";
import { TableStore } from "../../store";
import TRow, { CellValueComponents } from "./TRow";

// ? ExtraData is the data which is not going to render in the table

interface Props<Schema, ExtraFields extends string> {
  components?: CellValueComponents<Schema, ExtraFields>;
  data: TableData<Schema>;
  defaultSortKey: keyof Schema;
  hasPagination?: boolean;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  hiddenTHeads?: Array<keyof Schema | ExtraFields>;
  isFetched: boolean;
  isLoading: boolean;
  numeric?: Array<keyof Schema>;
  // UNUSED
  // onTRowClick?: OnTRowClick<Schema>;
  middleComponent?: React.FC;
  placeholderLength: number;
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
  isFetched,
  isLoading,
  middleComponent,
  numeric,
  placeholderLength,
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
        position: "relative",
        width: "100%",
        ...tContainerProps?.sx,
      }}
    >
      <TableBase {...tBaseProps} stickyHeader>
        <THead
          headers={headers}
          hiddenTHeads={hiddenTHeads}
          numeric={numeric}
          onRequestSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
          {...tHeadProps}
        />

        <TBody
          placeholderLength={placeholderLength}
          components={components}
          data={sortedData}
          headers={headers}
          isLoading={isLoading}
          isFetched={isFetched}
          middleComponent={middleComponent}
          numeric={numeric}
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
