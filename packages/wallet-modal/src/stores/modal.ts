import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";

type Stage = "walletsList" | "accountsList";
interface ModalStore {
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
