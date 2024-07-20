import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SidebarStore {
  isSidebarOpen: boolean;
  isMobile: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  setMobile: (isMobile: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      isSidebarOpen: false,
      isMobile: false,
      setSidebarOpen: (isOpen: boolean) => set({ isSidebarOpen: isOpen }),
      setMobile: (isMobile: boolean) => set({ isMobile }),
    }),
    {
      name: "sidebar",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
