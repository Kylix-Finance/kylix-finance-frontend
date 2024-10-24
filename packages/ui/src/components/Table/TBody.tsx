import { Box, TableBody, TableCell, TableRow } from "@mui/material";

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
  middleComponent?: React.FC;
  numeric?: Numeric<Schema>;
  onTRowClick?: OnTRowClick<Schema>;
  placeholderLength: number;
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
  middleComponent,
  numeric,
  placeholderLength,
  rowSpacing,
  tBody,
  tCellClassnames,
  tRowProps,
}: Props<Schema, ExtraFields>) {
  const FixedMiddleComponent = middleComponent || (() => null);

  const placeholderArr = Array.from<null>({ length: placeholderLength }).fill(
    null
  );

  const { length: headersLength } = Object.keys(headers);

  const finalData = data.length ? data : placeholderArr;

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

      {(!!data.length || isLoading) &&
        finalData.map((row, index) => (
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

            {rowSpacing && index < finalData.length - 1 && (
              <TableRow
                style={{
                  height: rowSpacing,
                }}
              />
            )}
          </Fragment>
        ))}

      {isLoading === false &&
        !data.length &&
        placeholderArr.map((i, index) => {
          return (
            <TableRow key={index}>
              <TableCell colSpan={headersLength}>
                <Box className="flex justify-center items-center h-[40px]">
                  {Math.floor(placeholderLength / 2) === index
                    ? "No Data Available"
                    : ""}
                </Box>
              </TableCell>
            </TableRow>
          );
        })}

      {}
    </TableBody>
  );
}

export default TBody;
