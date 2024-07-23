import { create } from "zustand";
import { persist } from "zustand/middleware";

type UseAccountStore = {
  account: string | null;
  setAccount: (account: string) => void;
};

export const useAccountStore = create<UseAccountStore>()(
  persist(
    (set) => ({
      account: null,
      setAccount: (account: string) =>
        set({
          account,
        }),
    }),
    {
      name: "account",
    }
  )
);
