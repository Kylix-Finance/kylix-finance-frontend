import { create } from "zustand";
import { persist } from "zustand/middleware";

type Account = {
  address: string;
  connectorId: string;
};

type UseAccountStore = {
  account: Account | null;
  setAccount: (account: Account) => void;
};

export const useAccountStore = create<UseAccountStore>()(
  persist(
    (set) => ({
      account: null,
      setAccount: (account: Account) =>
        set({
          account,
        }),
    }),
    {
      name: "account",
    }
  )
);
