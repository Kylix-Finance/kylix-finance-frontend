import { InjectedAccount } from "@polkadot/extension-inject/types";

export interface Wallet {
  name: string;
  id: string;
  image: string;
  is_installed: boolean;
  installation_url: string;
}

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
