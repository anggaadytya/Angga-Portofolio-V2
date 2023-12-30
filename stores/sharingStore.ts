import { create } from "zustand";

interface SharingStore {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useSharingStore = create<SharingStore>((set) => ({
  loading: false,
  setLoading: (isLoading: boolean) => set({ loading: isLoading }),
}));

interface CommandStore {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useCommandStore = create<CommandStore>((set) => ({
  open: false,
  setOpen: (isOpen: boolean) => set({ open: isOpen }),
}));
