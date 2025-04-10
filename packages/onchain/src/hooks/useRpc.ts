import { RPC } from "src/types/rpc";
import { useProvider } from "./useProvider";

export const useRpc = <T extends keyof RPC, U extends keyof RPC[T]>(
  module: T,
  method: U
) => {
  const { data: provider } = useProvider();

  const execute = provider?.api.rpc.lending.getUserLtv;

  return {
    execute,
  };
};
