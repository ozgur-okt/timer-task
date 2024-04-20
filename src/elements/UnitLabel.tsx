import React from 'react'
import { useUnitLabelStore } from '../stores/unitLabelStore'
import { UnitType } from '../types'
import Subtitle from './Subtitle'
import TextInput from './TextInput'
import { capitalize } from '../utils/capitalize'

type UnitLabelProps = {
  unit: UnitType
}

function UnitLabel({ unit }: UnitLabelProps) {
  const labels = useUnitLabelStore((state) => state.labels)
  const setUnitLabel = useUnitLabelStore((state) => state.setUnitLabel)

  const handleUnitLabelChange = (unit: UnitType) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnitLabel(unit, event.target.value)
  }

  return (
    <>
      <Subtitle subtitle={`${capitalize(unit)} Label`} />
      <TextInput value={labels[unit]} setValue={handleUnitLabelChange(unit)} />
    </>
  )
}

export default UnitLabel