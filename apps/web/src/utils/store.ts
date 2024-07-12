import { StateCreator, create } from "zustand";

const resetters: (() => void)[] = [];

export const createStore = ((f: StateCreator<unknown> | undefined) => {
  if (f === undefined) return createStore;
  const store = create(f);
  const initialState = store.getInitialState();
  resetters.push(() => {
    store.setState(initialState, true);
  });
  return store;
}) as typeof create;

export const resetAllStores = () => {
  for (const resetter of resetters) {
    resetter();
  }
};
