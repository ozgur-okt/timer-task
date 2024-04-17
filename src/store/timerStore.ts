import {create} from 'zustand';

type TimerState = {
  time: number;
  setTime: () => void;
  header: string;
  setHeader: (header: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isCloseIconVisible: boolean;
  setCloseIconVisibility: (visibility: boolean) => void;
};

export const useTimerStore = create<TimerState>((set) => ({
  time: 1 * 24 * 60 * 60 + 10 * 60 * 60 + 30 * 60 + 30, // 1 day, 10 hours, 30 minutes, 30 seconds in seconds
  setTime: () => set((state) => ({...state, time: state.time - 1})),
  header: 'Black Friday Sale',
  setHeader: (header: string) => set({ header }),
  isOpen: true,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  isCloseIconVisible: true,
  setCloseIconVisibility: (visibility: boolean) => set({ isCloseIconVisible: visibility }),
}));