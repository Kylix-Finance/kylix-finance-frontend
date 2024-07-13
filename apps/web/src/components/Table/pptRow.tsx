import { TableCellProps, TableRow } from "@mui/material";

import TCell from "./pptCell";
import { Header, TData, TRowProps } from "./types";

interface Props<K extends string> extends TRowProps {
  row: TData<K>;
  headers: Header;
  tCellProps?: TableCellProps;
}
function TRow<K extends string>({
  headers,
  row,
  tCellProps,
  ...rest
}: Props<K>) {
  return (
    <TableRow {...rest}>
      {headers.map((header) => (
        <TCell {...tCellProps} key={header}>
          {row[header as keyof TData<K>]}
        </TCell>
      ))}
    </TableRow>
  );
}

export default TRow;
