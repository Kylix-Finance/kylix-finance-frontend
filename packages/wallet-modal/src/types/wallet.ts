import { InjectedAccount } from "@polkadot/extension-inject/types";
import { Provider } from "@repo/shared";
export type Status =
  | "connected"
  | "connecting"
  | "reconnecting"
  | "disconnected";

export type Config = {
  dappName: string;
  rpc: Provider;
};

export interface ActiveAccount {
  activeAccount: InjectedAccount | undefined;
}
