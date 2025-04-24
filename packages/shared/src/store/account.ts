import { InjectedAccount } from "@polkadot/extension-inject/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UseAccountsStoreSchema = {
  account: InjectedAccount | null;
  connectorId: string | null;
  accounts?: InjectedAccount[];
};

type UseAccountsStore = {
  setAccount: (account: InjectedAccount) => void;
  setConnectorId: (connectorId: string) => void;
  connect: (connectorId: string, accounts: InjectedAccount[]) => void;
  disconnect: () => void;
} & UseAccountsStoreSchema;

export const useAccountsStore = create<UseAccountsStore>()(
  persist(
    (set) => ({
      account: null,
      connectorId: null,
      accounts: undefined,
      setAccount: (account: InjectedAccount) =>
        set({
          account,
        }),
      setConnectorId: (connectorId: string) =>
        set({
          connectorId,
        }),
      connect: (connectorId: string, accounts: InjectedAccount[]) =>
        set({
          connectorId,
          accounts,
        }),
      disconnect: () =>
        set({
          account: null,
          connectorId: null,
        }),
    }),
    {
      name: "accounts",
    }
  )
);
