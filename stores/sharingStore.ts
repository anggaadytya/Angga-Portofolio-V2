import { create } from "zustand";

interface SharingStore {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useSharingStore = create<SharingStore>((set) => ({
  loading: false,
  setLoading: (isLoading: boolean) => set({ loading: isLoading }),
}));
