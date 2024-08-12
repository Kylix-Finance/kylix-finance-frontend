import { Box, TableBody, TableRow } from "@mui/material";

import TRow, { CellValueComponent, CellValueComponents } from "./TRow";
import { TableData, Header, TBodyProps, TRowProps, OnTRowClick } from "./types";
import { Fragment } from "react";
import { Headers } from "./THead";

interface Props<Schema, ExtraFields extends string = string> {
  data: TableData<Schema>;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  isLoading?: boolean;
  rowSpacing?: string;
  tBody?: TBodyProps;
  tCellClassnames?: string;
  tRowProps?: TRowProps;
  onTRowClick?: OnTRowClick<Schema>;
  components: Partial<CellValueComponents<Schema, ExtraFields>>;
}

function TBody<Schema, ExtraFields extends string = string>({
  data,
  headers,
  isLoading,
  rowSpacing,
  tBody,
  tCellClassnames,
  tRowProps,
  components,
}: Props<Schema, ExtraFields>) {
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
            components={components}
            {...tRowProps}
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
