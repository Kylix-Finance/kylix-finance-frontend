import { TableBody } from "@mui/material";

import TRow from "./tRow";
import { Data, Header, TBodyProps, TRowProps } from "./types";

interface Props<K extends string> {
  headers: Header;
  data: Data<K>;
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
