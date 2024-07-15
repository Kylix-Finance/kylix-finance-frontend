import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";

interface ModalStore {
    status: boolean
    setStatus: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalStore>()(
    persist(
        (set) => ({
            status:false ,
            setStatus: (status: boolean) => set({ status }),
        }),
        {
            name: STORAGE_KEYS.POLKA_WALLET_MODAL_EXTENSIONS,
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);