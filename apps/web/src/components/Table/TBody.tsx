import { Box, TableBody } from "@mui/material";

import TRow from "./TRow";
import { TableData, Header, TBodyProps, TRowProps } from "./types";

interface Props<K extends string> {
  headers: Header;
  data: TableData<K>;
  tBody?: TBodyProps;
  tRowProps?: TRowProps;
  rowSpacing?: string;
}

function TBody<K extends string>({
  data,
  headers,
  tBody,
  tRowProps,
  rowSpacing,
}: Props<K>) {
  return (
    <TableBody {...tBody}>
      {data.map((row, index) => (
        <>
          {rowSpacing && <Box mt={rowSpacing} />}

          <TRow key={index} headers={headers} row={row} {...tRowProps} />
        </>
      ))}
    </TableBody>
  );
}

export default TBody;
