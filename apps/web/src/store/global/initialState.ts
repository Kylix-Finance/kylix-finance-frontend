import { DialogState, State } from "./types";

// TODO: Add to dialog store
export const dialogNames = ["userBalance"] as const;

const defaultPaginationState = {
  page: 1,
  perPage: 10,
  total: 0,
};

export const defaultDialogProps: DialogState["props"] = {
  zIndex: 1300,
  shouldKeepOpenCurrentDialog: false,
};

export const initialState: State = {
  dialogStates: [],
  pagination: {
    markets: defaultPaginationState,
    supply: defaultPaginationState,
  },
};
