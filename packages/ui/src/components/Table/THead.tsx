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
import { Numeric, Order, THeadProps } from "./types";
import { SortIcon } from "./SortIcon";
import { useIsDarkMode } from "../../hooks";

export type Headers<K extends string | number | symbol> = Record<
  K,
  string | number | undefined
>;

interface Props<Schema, ExtraFields extends string = string>
  extends THeadProps {
  disablePadding?: boolean;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  hiddenTHeads?: Array<keyof Schema | ExtraFields>;
  order: Order;
  orderBy: keyof Schema;
  tRowProps?: TableRowProps;
  numeric?: Numeric<Schema>;
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

  const isDarkMode = useIsDarkMode();

  const isHeaderHidden = (name: string) =>
    hiddenTHeads?.includes(name as keyof Schema);

  const headersList = Object.entries(headers);

  return (
    <TableHead {...rest}>
      <TableRow {...tRowProps}>
        {headersList.map(([name, value], index) => (
          <TCell
            key={`${name}+${index}`}
            align={numeric?.some((item) => item === name) ? "right" : "left"}
            className="dark:bg-[#0D0D0D] !dark:border-transparent"
            padding={disablePadding ? "none" : "normal"}
            sortDirection={orderBy === name ? order : false}
            style={{
              backgroundColor: "rgb(244, 250, 249)",
              zIndex: 10999,
            }}
          >
            {isHeaderHidden(name) ? (
              ""
            ) : (
              <TableSortLabel
                active={orderBy === name}
                direction={orderBy === name ? order : "asc"}
                IconComponent={SortIcon}
                onClick={createSortHandler(name as keyof Schema)}
              >
                <Typography
                  style={{
                    color: isDarkMode ? "#BCE5DD4D" : "#1A433B80",
                  }}
                  variant="body3"
                >
                  {value as string}
                </Typography>
                <div style={{ width: "4px" }} />
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
