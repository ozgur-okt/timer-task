export type UnitType = 'days' | 'hours' | 'minutes' | 'seconds';

export const unitTypes: Record<UnitType, UnitType> = {
  days: 'days',
  hours: 'hours',
  minutes: 'minutes',
  seconds: 'seconds'
}

export type PositionType = 'topSticky' | 'topStatic' | 'bottomStatic';

export const positionTypes: Record<PositionType, String> = {
  topSticky: 'topSticky',
  topStatic: 'topStatic',
  bottomStatic: 'bottomStatic'
}

export const positionTypesNamingMap: Record<PositionType, String> = {
  topSticky: 'Top Sticky',
  topStatic: 'Top Static',
  bottomStatic: 'Bottom Static'
}

