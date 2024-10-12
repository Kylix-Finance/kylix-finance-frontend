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
import TCell from "./TCell";

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
  middleComponent?: React.FC;
}

function TBody<Schema, ExtraFields extends string = string>({
  components,
  data,
  headers,
  isLoading,
  middleComponent,
  numeric,
  rowSpacing,
  tBody,
  tCellClassnames,
  tRowProps,
}: Props<Schema, ExtraFields>) {
  const FixedMiddleComponent = middleComponent || (() => null);

  return (
    <TableBody {...tBody}>
      <TableRow>
        <TCell style={{ padding: "0px" }} colSpan={Object.keys(headers).length}>
          <FixedMiddleComponent />
        </TCell>
      </TableRow>

      {rowSpacing && (
        <TableRow
          style={{
            height: rowSpacing,
          }}
        />
      )}

      {data.map((row, index) => (
        <Fragment key={index}>
          <TRow
            numeric={numeric}
            isLoading={isLoading}
            tCellClassnames={tCellClassnames}
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
