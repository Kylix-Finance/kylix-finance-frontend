import { InjectedAccount } from "@polkadot/extension-inject/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";
import { Status } from "../types/wallet";

interface AccountsStore {
  activeAccount: string | undefined;
  accounts: InjectedAccount[] | undefined;
  setAccounts: (account: InjectedAccount[] | undefined) => void;
  setActiveAccount: (activeAccount: string | undefined) => void;
  status: Status;
  setStatus: (status: Status) => void;
}

export const useAccountsStore = create<AccountsStore>()(
  persist(
    (set) => ({
      status: "disconnected",
      setStatus: (status: Status) => set({ status }),
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
