import { create } from "zustand";
import { persist } from "zustand/middleware";

type UseAccountStore = {
  account: string | null;
  setAccount: (account: string) => void;
  connectorId: string | null;
  setConnectorId: (connectorId: string) => void;
};

export const useAccountStore = create<UseAccountStore>()(
  persist(
    (set) => ({
      account: null,
      setAccount: (account: string) =>
        set({
          account,
        }),
      connectorId: null,
      setConnectorId: (connectorId: string) =>
        set({
          connectorId,
        }),
    }),
    {
      name: "account",
    }
  )
);
