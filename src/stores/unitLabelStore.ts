import { create } from 'zustand'

type UnitLabelState = {
  labels: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
  display: {
    days: boolean
    hours: boolean
    minutes: boolean
    seconds: boolean
  }
  setUnitLabel: (unit: 'days' | 'hours' | 'minutes' | 'seconds', label: string) => void
  toggleDisplay: (unit: 'days' | 'hours' | 'minutes' | 'seconds') => void
}

export const useUnitLabelStore = create<UnitLabelState>((set) => ({
  labels: {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
  },
  display: {
    days: true,
    hours: true,
    minutes: true,
    seconds: true,
  },
  setUnitLabel: (unit, label) => set((state) => ({ labels: { ...state.labels, [unit]: label } })),
  toggleDisplay: (unit) => set((state) => ({ display: { ...state.display, [unit]: !state.display[unit] } })),
}))