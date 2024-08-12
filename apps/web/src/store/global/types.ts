import { dialogNames } from "./initialState";

import { StoreSetFn, VoidNoArgs } from "@repo/types";

export type DialogName = (typeof dialogNames)[number];

export type DialogProps = {
  zIndex: number;
  shouldKeepOpenCurrentDialog?: boolean;
};

export type OnOpenDialogProps = Omit<DialogProps, "zIndex"> & {
  forceZIndex?: number;
};

export interface DialogState {
  name: DialogName;
  props: DialogProps;
}

export interface DialogTemplateData extends DialogState {
  close: VoidNoArgs;
  isOpen: boolean;
  name: DialogName;
  open: (props?: OnOpenDialogProps) => void;
}

export interface PaginationDefaultProps {
  page: number;
  perPage: number;
  total: number;
}

export type TableName = "markets" | "supply";

export type PaginationState = {
  [key in TableName]: PaginationDefaultProps;
};

export interface State {
  dialogStates: DialogState[];
  pagination: PaginationState;
}

export interface Handlers {
  setCloseAllDialog: VoidNoArgs;
  setDialogClose: VoidNoArgs;
  setOpenDialog: (dialogName: DialogName, props?: OnOpenDialogProps) => void;
  updatePagination: (arg: {
    name: TableName;
    props: Partial<PaginationDefaultProps>;
  }) => void;
}

export type SetState = StoreSetFn<State>;

export type Store = State & Handlers;
