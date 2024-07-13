import { TableBody } from "@mui/material";

import TRow from "./TRow";
import { TableData, Header, TBodyProps, TRowProps } from "./types";

interface Props<K extends string> {
  headers: Header;
  data: TableData<K>;
  tBody?: TBodyProps;
  tRowProps?: TRowProps;
}

function TBody<K extends string>({
  data,
  headers,
  tBody,
  tRowProps,
}: Props<K>) {
  return (
    <TableBody {...tBody}>
      {data.map((row, index) => (
        <TRow key={index} headers={headers} row={row} {...tRowProps} />
      ))}
    </TableBody>
  );
}

export default TBody;
