import React from 'react'
import Unit from './Unit'
import { useTimerStore } from '../stores/timerStore'
import { unitTypes } from '../types'

type PrecisedUnitsProps = {
  time: number
}

function PrecisedUnits({ time }: PrecisedUnitsProps) {
  const timeUnit = useTimerStore((state) => state.timeUnit)

  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600) % 24
  const days = Math.floor(time / (3600 * 24))

  if (timeUnit === unitTypes.days) {
    return (
      <div className='flex gap-2'>
        <Unit unit={unitTypes.days} value={days} />
      </div>
    )
  } else if (timeUnit === unitTypes.hours) {
    return (
      <div className='flex gap-2'>
        <Unit unit={unitTypes.days} value={days} />
        <Unit unit={unitTypes.hours} value={hours} />
      </div>
    )
  } else if (timeUnit === unitTypes.minutes) {
    return (
      <div className='flex gap-2'>
        <Unit unit={unitTypes.days} value={days} />
        <Unit unit={unitTypes.hours} value={hours} />
        <Unit unit={unitTypes.minutes} value={minutes} />
      </div>
    )
  }

  return (
    <div className='flex gap-2'>
      <Unit unit={unitTypes.days} value={days} />
      <Unit unit={unitTypes.hours} value={hours} />
      <Unit unit={unitTypes.minutes} value={minutes} />
      <Unit unit={unitTypes.seconds} value={seconds} />
    </div>
  )
}

export default PrecisedUnits