import { Box, TableBody, TableCell, TableRow, Typography } from "@mui/material";

import TRow, { CellValueComponents } from "./TRow";
import {
  Numeric,
  OnTRowClick,
  TableData,
  TBodyProps,
  TRowProps,
} from "./types";
import React, { Fragment } from "react";
import { Headers } from "./THead";
import TCell from "./TCell";
import { TableStore } from "../../store";

interface Props<Schema, ExtraFields extends string = string> {
  componentBeforeBody?: React.FC;
  components?: Partial<CellValueComponents<Schema, ExtraFields>>;
  data: TableData<Schema>;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  isFetched: boolean;
  isLoading: boolean;
  noDataComponent?: React.FC;
  numeric?: Numeric<Schema>;
  onTRowClick?: OnTRowClick<Schema>;
  placeholderLength: number;
  rowSpacing?: string;
  tableName: TableStore.TableName;
  tBody?: TBodyProps;
  tCellClassnames?: string;
  tRowProps?: TRowProps;
}

function TBody<Schema, ExtraFields extends string = string>({
  componentBeforeBody: ComponentBeforeBody,
  components,
  data,
  headers,
  isFetched,
  isLoading,
  noDataComponent,
  numeric,
  placeholderLength,
  rowSpacing,
  tBody,
  tCellClassnames,
  tRowProps,
}: Props<Schema, ExtraFields>) {
  const placeholderArr = Array.from<null>({
    length: placeholderLength,
  }).fill(null);

  const { length: headersLength } = Object.keys(headers);

  const finalData = data.length ? data : placeholderArr;

  const shouldShowMainRows =
    (!isLoading && !isFetched) ||
    (isLoading && !isFetched) ||
    (isFetched && !!data.length);

  const shouldShowNoDataRow = !isLoading && isFetched && !data.length;

  return (
    <TableBody {...tBody}>
      <TableRow>
        <TCell style={{ padding: "0px" }} colSpan={Object.keys(headers).length}>
          {!!ComponentBeforeBody && <ComponentBeforeBody />}
        </TCell>
      </TableRow>

      {rowSpacing && (
        <TableRow
          style={{
            height: rowSpacing,
          }}
        />
      )}

      {shouldShowMainRows &&
        finalData.map((row, index) => (
          <Fragment key={index}>
            <TRow
              numeric={numeric}
              isLoading={!isFetched || isLoading}
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

      {shouldShowNoDataRow &&
        placeholderArr.map((_i, index) => {
          return (
            <TableRow key={index}>
              <TableCell colSpan={headersLength}>
                <Box className="flex justify-center items-center h-[40px]">
                  {Math.floor(placeholderLength / 2) === index ? (
                    <NoData noDataComponent={noDataComponent} />
                  ) : (
                    <> </>
                  )}
                </Box>
              </TableCell>
            </TableRow>
          );
        })}

      {}
    </TableBody>
  );
}

const NoData: React.FC<{ noDataComponent?: React.FC }> = ({
  noDataComponent,
}) => {
  const Component =
    noDataComponent || (() => <Typography>No Data Available</Typography>);

  return (
    <>
      <Component />
    </>
  );
};

export default TBody;
