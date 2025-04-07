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
  tRowClassName?: string;
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
  tRowClassName,
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
        <TCell colSpan={Object.keys(headers).length} style={{ padding: "0px" }}>
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
          <Fragment key={index + index}>
            <TRow
              className="!dark:bg-red-500"
              components={components}
              headers={headers}
              isLoading={!isFetched || isLoading}
              numeric={numeric}
              row={row}
              tCellClassnames={tCellClassnames}
              {...tRowProps}
            />

            {rowSpacing && index < finalData.length - 1 && (
              <TableRow
                {...tRowProps}
                style={{
                  height: rowSpacing,
                  ...tRowProps?.style,
                }}
              />
            )}
          </Fragment>
        ))}

      {shouldShowNoDataRow &&
        placeholderArr.map((_i, index) => {
          return (
            <TableRow
              {...tRowProps}
              key={index + index}
              className={tRowClassName}
            >
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

  return <Component />;
};

export default TBody;
