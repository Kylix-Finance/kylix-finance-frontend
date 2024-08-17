import {
  Box,
  TableHead,
  TableRow,
  TableRowProps,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import TCell from "./TCell";
import { Order, THeadProps } from "./types";
import { SortIcon } from "./SortIcon";

export type Headers<K extends string | number | symbol> = Record<
  K,
  string | number | undefined
>;

interface Props<Schema, ExtraFields extends string = string>
  extends THeadProps {
  disablePadding?: boolean;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  hiddenTHeads?: Array<keyof Schema | ExtraFields>;
  numeric?: boolean;
  order: Order;
  orderBy: keyof Schema;
  tRowProps?: TableRowProps;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Schema
  ) => void;
}

function THead<Schema, ExtraFields extends string = string>({
  disablePadding,
  headers,
  hiddenTHeads,
  numeric,
  onRequestSort,
  order,
  orderBy,
  tRowProps,
  ...rest
}: Props<Schema, ExtraFields>) {
  const createSortHandler =
    (property: keyof Schema) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const isHeaderHidden = (name: string) =>
    hiddenTHeads?.includes(name as keyof Schema);

  return (
    <TableHead {...rest}>
      <TableRow {...tRowProps}>
        {Object.entries(headers).map(([name, value], index) => (
          <TCell
            className="!bg-[#FFF]"
            key={`${name}+${index}`}
            align={numeric ? "right" : "left"}
            padding={disablePadding ? "none" : "checkbox"}
            sortDirection={orderBy === name ? order : false}
            sx={{ paddingLeft: index === 0 ? "16px" : "32px" }}
          >
            {isHeaderHidden(name) ? (
              ""
            ) : (
              <TableSortLabel
                IconComponent={SortIcon}
                active={orderBy === name}
                direction={orderBy === name ? order : "asc"}
                onClick={createSortHandler(name as keyof Schema)}
              >
                <Typography variant="s">{value as string}</Typography>
                {orderBy === name ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default THead;
