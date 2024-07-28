import { create } from "zustand";

type Stage = "walletsList" | "accountsList" | "switchAccount";
export interface ModalStore {
  status: boolean;
  stage: Stage;
  setStatus: (isOpen: boolean) => void;
  setStage: (stage: Stage) => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
  status: false,
  stage: "walletsList",
  setStage: (stage: Stage) => set({ stage }),
  setStatus: (status: boolean) => set({ status }),
}));
