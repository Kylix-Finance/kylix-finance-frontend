import { InjectedAccount } from "@polkadot/extension-inject/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type Stage = "walletsList" | "accountsList" | "switchAccount" | null;

type UseAccountsStoreSchema = {
  account: InjectedAccount | null;
  connectorId: string | null;
  accounts?: InjectedAccount[];
  stage: Stage;
};

type UseAccountsStore = {
  setAccount: (account: InjectedAccount) => void;
  setConnectorId: (connectorId: string) => void;
  connect: (
    connectorId: string,
    accounts: InjectedAccount[],
    stage?: Stage
  ) => void;
  disconnect: (stage?: Stage) => void;
  setStage: (stage: Stage) => void;
} & UseAccountsStoreSchema;

export const useAccountsStore = create<UseAccountsStore>()(
  persist(
    (set) => ({
      account: null,
      connectorId: null,
      accounts: undefined,
      stage: null,
      setAccount: (account: InjectedAccount) =>
        set({
          account,
        }),
      setConnectorId: (connectorId: string) =>
        set({
          connectorId,
        }),
      connect: (
        connectorId: string,
        accounts: InjectedAccount[],
        stage: Stage = null
      ) =>
        set({
          connectorId,
          accounts,
          account: accounts[0],
          stage,
        }),
      disconnect: (stage: Stage = null) =>
        set({
          account: null,
          connectorId: null,
          stage,
        }),
      setStage: (stage: Stage) =>
        set({
          stage,
        }),
    }),
    {
      name: "accounts",
      partialize: ({ stage, ...rest }) => rest,
    }
  )
);
