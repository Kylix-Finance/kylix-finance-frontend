import { InjectedAccount } from "@polkadot/extension-inject/types";

export type Status =
  | "connected"
  | "connecting"
  | "reconnecting"
  | "disconnected";

export type Config = {
  dappName: string;
};

export interface ActiveAccount {
  activeAccount: InjectedAccount | undefined;
}
