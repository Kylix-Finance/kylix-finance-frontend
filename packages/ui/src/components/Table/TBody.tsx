import { TableBody, TableRow } from "@mui/material";

import TRow, { CellValueComponents } from "./TRow";
import {
  Numeric,
  OnTRowClick,
  TableData,
  TBodyProps,
  TRowProps,
} from "./types";
import { Fragment } from "react";
import { Headers } from "./THead";

interface Props<Schema, ExtraFields extends string = string> {
  components?: Partial<CellValueComponents<Schema, ExtraFields>>;
  data: TableData<Schema>;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  isLoading?: boolean;
  numeric?: Numeric<Schema>;
  onTRowClick?: OnTRowClick<Schema>;
  rowSpacing?: string;
  tBody?: TBodyProps;
  tCellClassnames?: string;
  tRowProps?: TRowProps;
}

function TBody<Schema, ExtraFields extends string = string>({
  components,
  data,
  headers,
  isLoading,
  numeric,
  rowSpacing,
  tBody,
  tCellClassnames,
  tRowProps,
}: Props<Schema, ExtraFields>) {
  return (
    <TableBody {...tBody}>
      {data.map((row, index) => (
        <Fragment key={index}>
          <TRow
            numeric={numeric}
            isLoading={isLoading}
            tCellClassnames={tCellClassnames}
            rowSpacing={rowSpacing}
            headers={headers}
            row={row}
            components={components}
            {...tRowProps}
          />
          {rowSpacing && index < data.length - 1 && (
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
