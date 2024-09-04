import { StoreSetFn, VoidNoArgs } from "@repo/types";

export interface PaginationDefaultProps {
  page: number;
  perPage: number;
  total: number;
}

export type TableName = "markets" | "supply" | "liquidations";

export type PaginationState = {
  [key in TableName]: PaginationDefaultProps;
};

export interface State {
  pagination: PaginationState;
}

export interface Handlers {
  updatePagination: (arg: {
    name: TableName;
    props: Partial<PaginationDefaultProps>;
  }) => void;
}

export type SetState = StoreSetFn<State>;

export type Store = State & Handlers;
