import { createStore } from "@repo/utils";
import { initialState } from "./initialState";
import * as TableStore from "./types";

export const useTableStore = createStore<TableStore.Store>((set) => ({
  ...initialState,
  updatePagination({ name, props }) {
    set((state) => ({
      pagination: {
        ...state.pagination,
        [name]: {
          ...state.pagination[name],
          ...props,
        },
      },
    }));
  },
}));

export { initialState as tableStoreInitialState } from "./initialState";

export { TableStore };
