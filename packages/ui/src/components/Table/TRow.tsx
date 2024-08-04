import { TableCellProps, TableRow } from "@mui/material";

import TCell from "./TCell";
import { Header, TData, TRowProps } from "./types";
import { Skeleton } from "../Skeleton";

interface Props<K extends string> extends TRowProps {
  headers: Header;
  isLoading?: boolean;
  row: TData<K>;
  rowSpacing?: string;
  tCellClassnames?: string;
  tCellProps?: TableCellProps;
}

function TRow<K extends string>({
  headers,
  row,
  tCellProps,
  tCellClassnames,
  rowSpacing,
  className,
  isLoading,
  ...rest
}: Props<K>) {
  return (
    <TableRow className={`bg-light ${className}`} {...rest}>
      {headers.map((header) => {
        return (
          <TCell
            className={`rounded-none first:rounded-[8px_0_0_8px] last:rounded-[0_8px_8px_0] !border-none ${tCellClassnames}`}
            {...tCellProps}
            key={header}
          >
            <Skeleton height={40} isLoading={isLoading}>
              {row[header as keyof TData<K>]}
            </Skeleton>
          </TCell>
        );
      })}
    </TableRow>
  );
}

export default TRow;
