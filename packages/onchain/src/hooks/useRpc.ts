import { RPC } from "src/types/rpc";
import { useProvider } from "./useProvider";
import { isApiExists } from "../utils/validators/isApiExists";
type Modules = keyof RPC;
type MethodsKeys<T extends Modules> = keyof RPC[T];
type Methods<T extends Modules> = RPC[T];

export const useRpc = <T extends Modules, U extends MethodsKeys<T>>(
  module: T,
  method: U
) => {
  const { data: provider } = useProvider();
  //@ts-expect-error hii
  const execute = async (...args: Methods<T>[U]["params"]) => {
    if (!isApiExists(provider?.api)) return;
    //@ts-expect-error hii
    return provider.api.rpc(
      `${module}_${String(method)}`,
      ...args
    ) as Methods<T>[U]["response"];
  };
  return {
    execute,
    isApiAvailable: !!provider?.api,
  };
};
