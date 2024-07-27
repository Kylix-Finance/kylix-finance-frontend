import { create } from "zustand";
import { persist } from "zustand/middleware";

type UseAccountStore = {
  account: string | null;
  setAccount: (account: string | null) => void;
  connectorId: string | null;
  setConnectorId: (connectorId: string | null) => void;
};

export const useAccountStore = create<UseAccountStore>()(
  persist(
    (set) => ({
      account: null,
      setAccount: (account: string | null) =>
        set({
          account,
        }),
      connectorId: null,
      setConnectorId: (connectorId: string | null) =>
        set({
          connectorId,
        }),
    }),
    {
      name: "account",
    }
  )
);
