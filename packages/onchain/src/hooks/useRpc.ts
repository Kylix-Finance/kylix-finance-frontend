import { RPC } from "src/types/rpc";
import { useProvider } from "./useProvider";

type Modules = keyof RPC;
type Methods<T extends Modules> = keyof RPC[T];

export const useRpc = <T extends Modules, U extends Methods<T>>(
  module: T,
  method: U
) => {
  const { data: provider } = useProvider();

  const methods = provider?.api.rpc[module];

  if (methods && method in methods) {
    return {
      // Dummy ts, can't understand nested [T][U]
      execute: methods[method] as RPC[T][U],
    };
  }

  throw new Error("method not exist!");
};
