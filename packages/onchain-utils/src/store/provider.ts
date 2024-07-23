import { create } from "zustand";
import { ConnectionStatus } from "../types";

interface ProviderStore {
  status: ConnectionStatus;
  message: string;
  setStatus: (isOpen: ConnectionStatus, message: string) => void;
}

export const useProviderStore = create<ProviderStore>()((set) => ({
  status: "ready",
  message: "",
  setStatus: (status: ConnectionStatus, message: string) =>
    set({ status, message }),
}));
