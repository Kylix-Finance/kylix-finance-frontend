export type StoreSetFn<StoreType> = (
  partial:
    | StoreType
    | Partial<StoreType>
    | ((state: StoreType) => StoreType | Partial<StoreType>),
  // FIXME: below type was boolean | undefined but in V5 I changed it in the below way
  replace?: false | undefined
) => void;

export interface PaginationDefaultProps {
  page: number;
  perPage: number;
  total: number;
}

export type TableName =
  | "borrow"
  | "latestLiquidation"
  | "liquidations"
  | "loanPositions"
  | "markets"
  | "personalBids"
  | "supply";

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
