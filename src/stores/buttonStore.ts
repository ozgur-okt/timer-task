import { create } from 'zustand'

type ButtonState = {
  label: string
  link: string
  setLabel: (label: string) => void
  setLink: (link: string) => void
}

export const useButtonStore = create<ButtonState>((set) => ({
  label: 'Shop Now!',
  link: 'https://stripe.com',
  setLabel: (label: string) => set({ label }),
  setLink: (link: string) => set({ link }),
}))