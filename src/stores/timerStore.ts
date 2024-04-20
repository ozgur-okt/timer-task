import { create } from 'zustand'
import { PositionType, ThemeType, UnitType, positionTypes, themeTypes, unitTypes } from '../types'

type TimerState = {
  time: number
  setTime: () => void
  setStartHours: (hours: number) => void
  header: string
  setHeader: (header: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isCloseIconVisible: boolean
  setCloseIconVisibility: (visibility: boolean) => void
  position: PositionType
  setPosition: (position: PositionType) => void
  timeUnit: UnitType
  setTimeUnit: (unit: UnitType) => void
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const useTimerStore = create<TimerState>((set) => ({
  time: 1 * 24 * 60 * 60 + 10 * 60 * 60 + 30 * 60 + 30,
  setTime: () => set((state) => ({ ...state, time: state.time - 1 })),
  setStartHours: (hours: number) => set((state) => ({ ...state, time: hours * 60 * 60 })),
  header: 'Black Friday Sale',
  setHeader: (header: string) => set({ header }),
  isOpen: true,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  isCloseIconVisible: true,
  setCloseIconVisibility: (visibility: boolean) => set({ isCloseIconVisible: visibility }),
  position: Object.keys(positionTypes)[0] as PositionType,
  setPosition: (position: PositionType) => set({ position }),
  timeUnit: unitTypes.seconds,
  setTimeUnit: (unit: UnitType) => set({ timeUnit: unit }),
  theme: themeTypes.light,
  setTheme: (theme) => set(() => ({ theme })),
}))