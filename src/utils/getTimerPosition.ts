import { PositionType, positionTypes } from '../types'

export function getTimerPosition(position: PositionType): string {
  let timerPosition = ''
  if (position === positionTypes.topSticky) {
    timerPosition = 'sticky top-0'
  } else if (position === positionTypes.bottomStatic) {
    timerPosition = 'fixed bottom-0'
  }
  return timerPosition
}