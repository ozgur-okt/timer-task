export type UnitType = 'days' | 'hours' | 'minutes' | 'seconds'

export const unitTypes: Record<UnitType, UnitType> = {
  days: 'days',
  hours: 'hours',
  minutes: 'minutes',
  seconds: 'seconds'
}

export type PositionType = 'topSticky' | 'topStatic' | 'bottomStatic'

export const positionTypes: Record<PositionType, PositionType> = {
  topSticky: 'topSticky',
  topStatic: 'topStatic',
  bottomStatic: 'bottomStatic'
}

export const positionTypesNamingMap: Record<PositionType, string> = {
  topSticky: 'Top Sticky',
  topStatic: 'Top Static',
  bottomStatic: 'Bottom Static'
}

export type ThemeType = 'dark' | 'light' | 'colorful'

export const themeTypes: Record<ThemeType, ThemeType> = {
  dark: 'dark',
  light: 'light',
  colorful: 'colorful'
}