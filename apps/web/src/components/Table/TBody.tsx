import { Box, TableBody, TableRow } from "@mui/material";

import TRow from "./TRow";
import { TableData, Header, TBodyProps, TRowProps } from "./types";
import TCell from "./TCell";
import { Fragment } from "react";

export type OnTRowClick = (index: number) => void;

interface Props<K extends string> {
  data: TableData<K>;
  headers: Header;
  isLoading?: boolean;
  rowSpacing?: string;
  tBody?: TBodyProps;
  tCellClassnames?: string;
  tRowProps?: TRowProps;
  onTRowClick?: OnTRowClick;
}

function TBody<K extends string>({
  data,
  headers,
  isLoading,
  onTRowClick,
  rowSpacing,
  tBody,
  tCellClassnames,
  tRowProps,
}: Props<K>) {
  return (
    <TableBody {...tBody}>
      {data.map((row, index) => (
        <Fragment key={index}>
          <TRow
            isLoading={isLoading}
            tCellClassnames={tCellClassnames}
            rowSpacing={rowSpacing}
            headers={headers}
            row={row}
            {...tRowProps}
            onClick={() => {
              onTRowClick?.(index);
            }}
          />
          {rowSpacing && (
            <TableRow
              style={{
                height: rowSpacing,
              }}
            />
          )}
        </Fragment>
      ))}
    </TableBody>
  );
}

export default TBody;
