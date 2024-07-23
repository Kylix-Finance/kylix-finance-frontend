import { InjectedAccount } from "@polkadot/extension-inject/types";

export type Accounts = {
  accounts: InjectedAccount[];
};

export type Wallet = {
  name: string;
  id: string;
  image: string;
  is_installed: boolean;
  installation_url: string;
};
