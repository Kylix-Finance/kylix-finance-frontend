import { StoreSetFn, VoidNoArgs } from "~/types";
import { dialogNames } from "./initialState";

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

export type TableName = "users";

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
