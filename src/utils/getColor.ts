import { themeTypes } from '../types'

export function getColor(theme: string, element: string): string {
  let color = ''

  if (element === 'container') {
    if (theme === themeTypes.dark) {
      color = '#000'
    } else if (theme === themeTypes.colorful) {
      color = '#248277'
    } else {
      color = '#FFF'
    }
  } else if (element === 'text') {
    if (theme === themeTypes.dark) {
      color = '#FFF'
    } else if (theme === themeTypes.colorful) {
      color = '#000'
    } else {
      color = '#000'
    }
  } else if (element === 'digit') {
    if (theme === themeTypes.dark) {
      color = '#248277'
    } else if (theme === themeTypes.colorful) {
      color = '#9FCFCA'
    } else {
      color = '#248277'
    }
  }
  return color
}