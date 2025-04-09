import { LendingRpc } from "src/types/lending"

declare module '@polkadot/rpc-core/types/jsonrpc' {
    interface RpcInterface {
        lending: LendingRpc,
    }
}
