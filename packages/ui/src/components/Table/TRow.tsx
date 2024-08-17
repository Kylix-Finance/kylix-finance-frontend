import { TableCellProps, TableRow } from "@mui/material";

import TCell from "./TCell";
import { TRowProps } from "./types";
import { Skeleton } from "../Skeleton";
import { Headers } from "./THead";
import React from "react";

export type CellValueComponent<Schema> = (item: Schema) => React.ReactNode;

export type CellValueComponents<
  Schema,
  ExtraFields extends string = string,
> = Partial<Record<keyof Schema | ExtraFields, CellValueComponent<Schema>>>;

interface Props<Schema, ExtraFields extends string = string> extends TRowProps {
  components: CellValueComponents<Schema, ExtraFields>;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  isLoading?: boolean;
  row: Schema;
  rowSpacing?: string;
  tCellClassnames?: string;
  tCellProps?: TableCellProps;
}

function TRow<Schema, ExtraFields extends string = string>({
  className,
  components,
  headers,
  isLoading,
  row,
  rowSpacing,
  tCellClassnames,
  tCellProps,
  ...rest
}: Props<Schema, ExtraFields>) {
  type Key = keyof Schema;

  const headersList = Object.entries(headers);

  return (
    <TableRow className={`bg-light ${className}`} {...rest}>
      {headersList.map(([name], index) => {
        // TODO: Remove assertion
        const ValueComponent = components[name as Key] as
          | CellValueComponent<Schema>
          | undefined;

        return (
          <TCell
            className={`rounded-none first:rounded-[8px_0_0_8px] last:rounded-[0_8px_8px_0] !border-none ${tCellClassnames}`}
            {...tCellProps}
            key={`${name}+${index}`}
            style={
              index === headersList.length - 1
                ? {
                    position: "sticky",
                    backgroundColor: "rgb(244, 250, 249)",
                    right: 0,
                    zIndex: "9999",
                    boxShadow: "-4px 0px 4px -4px rgba(0,0,0,0.2)",
                  }
                : {}
            }
          >
            <Skeleton height={40} isLoading={isLoading}>
              {/* TODO: Convert to component - ValueComponent */}
              <>{ValueComponent ? ValueComponent(row) : row[name as Key]}</>
            </Skeleton>
          </TCell>
        );
      })}
    </TableRow>
  );
}

export default TRow;
