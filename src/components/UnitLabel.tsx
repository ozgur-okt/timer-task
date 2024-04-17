import React from 'react'
import { useUnitLabelStore } from '../store/unitLabelStore';
import { UnitType } from '../types';

type UnitLabelProps = {
  unit: UnitType;
}

function UnitLabel({ unit }: UnitLabelProps) {
  const labels = useUnitLabelStore((state) => state.labels);
  const setUnitLabel = useUnitLabelStore((state) => state.setUnitLabel);

  const handleUnitLabelChange = (unit: UnitType) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnitLabel(unit, event.target.value);
  };

  return (
    <div>
      <input type="text" value={labels[unit]} onChange={handleUnitLabelChange(unit)}  />
      {/* <input type="text" value={labels.hours} onChange={handleUnitLabelChange('hours')} placeholder="Hours Label" />
      <input type="text" value={labels.minutes} onChange={handleUnitLabelChange('minutes')} placeholder="Minutes Label" />
      <input type="text" value={labels.seconds} onChange={handleUnitLabelChange('seconds')} placeholder="Seconds Label" /> */}
    </div>
  )
}

export default UnitLabel