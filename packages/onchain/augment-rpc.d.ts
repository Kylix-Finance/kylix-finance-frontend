import { RPC } from "src/types/rpc";

declare module "@polkadot/rpc-core/types/jsonrpc" {
  interface RpcInterface extends RPC {}
}
