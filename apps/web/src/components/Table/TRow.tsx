import { Box, TableCellProps, TableRow } from "@mui/material";

import TCell from "./TCell";
import { Header, TData, TRowProps } from "./types";

interface Props<K extends string> extends TRowProps {
  row: TData<K>;
  headers: Header;
  tCellProps?: TableCellProps;
  tCellClassnames?: string;
  rowSpacing?: string;
}

function TRow<K extends string>({
  headers,
  row,
  tCellProps,
  tCellClassnames,
  rowSpacing,
  ...rest
}: Props<K>) {
  return (
    <TableRow className="bg-light" {...rest}>
      {headers.map((header) => {
        return (
          <TCell
            className={`rounded-none first:rounded-[8px_0_0_8px] last:rounded-[0_8px_8px_0] !border-none ${tCellClassnames}`}
            {...tCellProps}
            key={header}
          >
            {row[header as keyof TData<K>]}
          </TCell>
        );
      })}
    </TableRow>
  );
}

export default TRow;
