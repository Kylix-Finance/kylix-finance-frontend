import { InjectedAccount } from "@polkadot/extension-inject/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";

interface AccountsStore {
  activeAccount: InjectedAccount["address"] | undefined;
  accounts: InjectedAccount[] | undefined;
  setAccounts: (account: InjectedAccount[] | undefined) => void;
  setActiveAccount: (activeAccount: InjectedAccount["address"] | undefined) => void;
}

export const useAccountsStore = create<AccountsStore>()(
  persist(
    (set, get) => ({
      activeAccount: undefined,
      accounts: [],
      setAccounts: (accounts: InjectedAccount[] | undefined) => set({ accounts }),
      setActiveAccount: (activeAccount: InjectedAccount["address"] | undefined) => set({ activeAccount })
    }),
    {
      name: STORAGE_KEYS.POLKA_WALLET_MODAL_ACCOUNTS,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
