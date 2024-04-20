import React from 'react'
import { useTimerStore } from '../stores/timerStore'
import { UnitType } from '../types'
import { capitalize } from '../utils/capitalize'
import RadioInput from './RadioInput'

type PrecisionProps = {
  timeUnitProp: UnitType
}

function Precision({ timeUnitProp }: PrecisionProps) {
  const timeUnit = useTimerStore((state) => state.timeUnit)
  const setTimeUnit = useTimerStore((state) => state.setTimeUnit)

  const handleTimeUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeUnit(event.target.value as UnitType)
  }
  return (
    <RadioInput
      value={timeUnitProp}
      label={capitalize(timeUnitProp)}
      checked={timeUnit === timeUnitProp}
      setValue={handleTimeUnitChange}
    />
  )
}

export default Precision