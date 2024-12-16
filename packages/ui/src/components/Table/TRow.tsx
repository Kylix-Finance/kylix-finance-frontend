import { TableCellProps, TableRow } from "@mui/material";

import TCell from "./TCell";
import { Numeric, TRowProps } from "./types";
import { Skeleton } from "../Skeleton";
import { Headers } from "./THead";
import React from "react";

export type CellValueComponent<Schema> = (item: Schema) => React.ReactNode;

export type CellValueComponents<
  Schema,
  ExtraFields extends string = string,
> = Partial<Record<keyof Schema | ExtraFields, CellValueComponent<Schema>>>;

interface Props<Schema, ExtraFields extends string = string> extends TRowProps {
  components?: CellValueComponents<Schema, ExtraFields>;
  headers: Partial<Headers<keyof Schema> | Headers<ExtraFields>>;
  isLoading?: boolean;
  numeric?: Numeric<Schema>;
  row: Schema | null;
  tCellClassnames?: string;
  tCellProps?: TableCellProps;
}

function TRow<Schema, ExtraFields extends string = string>({
  className,
  components,
  headers,
  isLoading,
  numeric,
  row,
  tCellClassnames,
  tCellProps,
  ...rest
}: Props<Schema, ExtraFields>) {
  type Key = keyof Schema;

  const headersList = Object.entries(headers);

  return (
    <TableRow className={`bg-light dark:bg-[#0D0D0D] ${className}`} {...rest}>
      {headersList.map(([name], index) => {
        // TODO: Remove assertion
        const ValueComponent = components?.[name as Key] as
          | CellValueComponent<Schema>
          | undefined;

        const borderStyle = {
          0: "8px 0px 0px 8px",
          [headersList.length - 1]: "0px 8px 8px 0px",
        };

        return (
          <TCell
            align={numeric?.some((item) => item === name) ? "right" : "left"}
            className={`${tCellClassnames} bg-[rgb(244, 250, 249)] dark:bg-[#0D0D0D] !dark:border-transparent`}
            {...tCellProps}
            key={`${name}+${index}`}
            style={{
              borderRadius: borderStyle[index],
              ...(name === "actions"
                ? {
                    position: "sticky",
                    right: 0,
                    zIndex: "9999",
                    boxShadow: "-4px 0px 4px -4px rgba(0,0,0,0.2)",
                  }
                : {}),
            }}
          >
            <Skeleton key={index} height={40} isLoading={isLoading}>
              {row &&
                (ValueComponent
                  ? ValueComponent(row)
                  : (row[name as Key] as any))}
            </Skeleton>
          </TCell>
        );
      })}
    </TableRow>
  );
}

export default TRow;
