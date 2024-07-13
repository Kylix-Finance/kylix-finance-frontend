import {
  Box,
  TableHead,
  TableRow,
  TableRowProps,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import TCell from "./TCell";
import { Order, TData, THeadProps } from "./types";

interface Props<K extends string> extends THeadProps {
  headers: Array<K>;
  tRowProps?: TableRowProps;
  disablePadding?: boolean;
  numeric?: boolean;
  orderBy: string;
  order: Order;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TData<K>
  ) => void;
}

function THead<K extends string>({
  disablePadding,
  headers,
  numeric,
  onRequestSort,
  order,
  orderBy,
  tRowProps,
  ...rest
}: Props<K>) {
  const createSortHandler =
    (property: K) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead {...rest}>
      <TableRow {...tRowProps}>
        {headers.map((header) => (
          <TCell
            key={header}
            align={numeric ? "right" : "left"}
            padding={disablePadding ? "none" : "normal"}
            sortDirection={orderBy === header ? order : false}
          >
            <TableSortLabel
              active={orderBy === header}
              direction={orderBy === header ? order : "asc"}
              onClick={createSortHandler(header)}
            >
              {header}
              {orderBy === header ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default THead;
