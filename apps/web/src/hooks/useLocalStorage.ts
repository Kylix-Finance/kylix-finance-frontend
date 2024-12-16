import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LocalStorageState<T> {
  value: T | undefined;
  setValue: (newValue: T) => void;
}

function useLocalStorage<T>(initialParams: {
  key: string;
  value?: T | undefined;
}) {
  const { key, value: initialValue } = initialParams;

  const store = create<LocalStorageState<T>>()(
    persist(
      (set) => ({
        value: initialValue,
        setValue: (newValue: T) => set({ value: newValue }),
      }),
      {
        name: key,
      }
    )
  )();
  return {
    value: store.value,
    setValue: store.setValue,
  };
}

export default useLocalStorage;
