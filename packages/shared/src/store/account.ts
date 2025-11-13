import { InjectedAccount } from "@polkadot/extension-inject/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type Stage = "walletsList" | "accountsList" | null;

type UseAccountsStoreSchema = {
  account: InjectedAccount | null;
  connectorId: string | null;
  accounts?: InjectedAccount[];
  stage: Stage | null;
};

type UseAccountsStore = {
  setAccount: (account: InjectedAccount) => void;
  setConnectorId: (connectorId: string) => void;
  switchAccount: (account: InjectedAccount, stage: Stage) => void;
  connect: (
    connectorId: string,
    accounts: InjectedAccount[],
    stage?: Stage
  ) => void;
  disconnect: (stage: Stage | null) => void;
  disconnectByAccount: (account: InjectedAccount | null) => void;
  setStage: (stage: Stage) => void;
} & UseAccountsStoreSchema;

export const useAccountsStore = create<UseAccountsStore>()(
  persist(
    (set, get) => ({
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
        stage: Stage | null = null
      ) =>
        set({
          connectorId,
          accounts,
          account: accounts[0],
          stage,
        }),
      disconnect: (stage: Stage = null) =>
        set(() => ({
          account: null,
          connectorId: null,
          accounts: undefined,
          stage,
        })),
      disconnectByAccount: (account: InjectedAccount | null) =>
        set((state) => {
          if (!state.accounts || !account) return state;
          const remainingAccounts = state.accounts.filter(
            (acc) => acc.address !== account.address
          );
          if (remainingAccounts.length > 0) {
            return {
              accounts: remainingAccounts,
              account: remainingAccounts[0],
              stage: state.stage,
            };
          } else {
            get().disconnect(null);
            return {};
          }
        }),
      setStage: (stage: Stage) =>
        set({
          stage,
        }),
      switchAccount: (account: InjectedAccount, stage: Stage) =>
        set(() => ({
          account,
          stage,
        })),
    }),
    {
      name: "accounts",
      partialize: ({ stage, ...rest }) => rest,
    }
  )
);
