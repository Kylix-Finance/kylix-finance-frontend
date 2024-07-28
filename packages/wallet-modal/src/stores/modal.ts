import { create } from "zustand";

type Stage = "walletsList" | "accountsList" | "switchAccount";
export interface ModalStore {
  isOpen: boolean;
  stage: Stage;
  setIsOpen: (isOpen: boolean) => void;
  setStage: (stage: Stage) => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
  isOpen: false,
  stage: "walletsList",
  setStage: (stage: Stage) => set({ stage }),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
