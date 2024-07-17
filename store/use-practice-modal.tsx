import { create } from "zustand";

type PracticeModaState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const usePracticeModal = create<PracticeModaState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
