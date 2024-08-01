import {
  TableBodyTypeMap,
  TableCellProps,
  TableContainerProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TData<K extends string> = Record<
  K,
  string | number | React.ReactNode
>;

export type TableData<K extends string> = Array<TData<K>>;
export type Header = Array<string>;
export type TRowProps = TableRowProps;
export type TBodyProps = OverridableComponent<
  TableBodyTypeMap<object, "tbody">
>;
export type THeadProps = TableHeadProps;
export type TContainerProps = TableContainerProps;
export type TBaseProps = TableProps;
export type TCellProps = TableCellProps;

export type Order = "asc" | "desc";
