import { InjectedAccount } from "@polkadot/extension-inject/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";

interface AccountsStore {
  activeAccount: string | undefined;
  accounts: InjectedAccount[] | undefined;
  setAccounts: (account: InjectedAccount[] | undefined) => void;
  setActiveAccount: (activeAccount: string | undefined) => void;
}

export const useAccountsStore = create<AccountsStore>()(
  persist(
    (set, get) => ({
      activeAccount: undefined,
      accounts: [],
      setAccounts: (accounts: InjectedAccount[] | undefined) =>
        set({ accounts }),
      setActiveAccount: (activeAccount: string | undefined) =>
        set({ activeAccount }),
    }),
    {
      name: STORAGE_KEYS.POLKA_WALLET_MODAL_ACCOUNTS,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
