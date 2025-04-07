import { create } from "zustand";

interface BalanceStore {
  balance: string | null;
  setBalance: (balance: string | null) => void;
}

export const useBalanceStore = create<BalanceStore>()((set) => ({
  balance: null,
  setBalance: (balance: string | null) => set({ balance }),
}));
