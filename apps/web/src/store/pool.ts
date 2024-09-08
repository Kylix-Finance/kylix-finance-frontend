import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { SelectOption } from "~/types";

interface PoolStore {
  pool: SelectOption;
  supply_pool: SelectOption;
  borrow_pool: SelectOption;
  setPool: (pool: SelectOption) => void;
  setBorrowPool: (borrow_pool: SelectOption) => void;
  setSupplyPool: (supply_pool: SelectOption) => void;
}

export const usePoolStore = create<PoolStore>()(
  persist(
    (set) => ({
      pool: { value: "1", label: "ETH" },
      borrow_pool: { value: "1", label: "ETH" },
      supply_pool: { value: "1", label: "ETH" },
      setPool: (pool: SelectOption) => set({ pool }),
      setBorrowPool: (borrow_pool: SelectOption) => set({ borrow_pool }),
      setSupplyPool: (supply_pool: SelectOption) => set({ supply_pool }),
    }),
    {
      name: "sidebar",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
