import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STATUS, STORAGE_KEYS } from "../constants";

interface StatusStore {
  status: STATUS;
  setStatus: (account: STATUS) => void;
}

export const useStatusStore = create<StatusStore>()(
  persist(
    (set) => ({
      status: STATUS.IDLE,
      setStatus: (status: STATUS) => set({ status }),
    }),
    {
      name: STORAGE_KEYS.POLKA_WALLET_MODAL_STATUS,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
