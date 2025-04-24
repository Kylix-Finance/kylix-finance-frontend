import { RPC } from "../types/rpc";
import { useProvider } from "./useProvider";
import { isApiExists } from "../utils/validators/isApiExists";
import { Definition } from "../types/rpc/definitions";

type Modules = keyof RPC;
type MethodsKeys<T extends Modules> = keyof RPC[T];
type Methods<T extends Modules> = RPC[T];

export const useRpc = <T extends Modules, U extends MethodsKeys<T>>(
  module: T,
  method: U
) => {
  const { data: provider } = useProvider();

  type Def = Methods<T>[U];
  type Params = Def extends Definition<infer P, any> ? P : never;
  type Response = Def extends Definition<any, infer R> ? R : never;

  const execute = async (...args: Params): Promise<Response | undefined> => {
    if (!isApiExists(provider?.api)) return;
    return provider.api.rpc(
      `${module}_${String(method)}`,
      ...args
    ) as unknown as Response;
  };

  return {
    execute,
    isApiAvailable: !!provider?.api,
  };
};
