import {create} from 'zustand';

type TimerState = {
  time: number;
  setTime: () => void;
};

export const useTimerStore = create<TimerState>((set) => ({
  time: 1 * 24 * 60 * 60 + 10 * 60 * 60 + 30 * 60 + 30, // 1 day, 10 hours, 30 minutes, 30 seconds in seconds
  setTime: () => set((state) => ({...state, time: state.time - 1})),
}));