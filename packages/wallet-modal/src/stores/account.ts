import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";

interface FishStore {
  account: string;
  setAccount: (account: string) => void;
}

export const useFishStore = create<FishStore>()(
  persist(
    (set, get) => ({
      account: "",
      setAccount: (account: string) => set({ account: account }),
    }),
    {
      name: STORAGE_KEYS.POLKA_WALLET_MODAL_ACCOUNT,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
