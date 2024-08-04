import { createStore } from "@repo/utils";
import { handlers } from "./handlers";
import { initialState } from "./initialState";
import * as TableStore from "./types";

export const useTableStore = createStore<TableStore.Store>((set) => ({
  ...initialState,
  ...handlers(set),
}));

export { initialState as tableStoreInitialState } from "./initialState";

export { TableStore };
