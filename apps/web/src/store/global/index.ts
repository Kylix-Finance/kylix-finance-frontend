import { handlers } from "./handlers";
import { createStore } from "@repo/utils";
import { initialState } from "./initialState";
import * as GlobalStore from "./types";

export const useGlobalStore = createStore<GlobalStore.Store>((set) => ({
  ...initialState,
  ...handlers(set),
}));

export {
  defaultDialogProps,
  dialogNames,
  initialState as globalStoreInitialState,
} from "./initialState";

export { GlobalStore };
