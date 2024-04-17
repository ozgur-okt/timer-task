import React from 'react'
import { useUnitLabelStore } from '../store/unitLabelStore';
import { UnitType } from '../types';

type DisplayUnitProps = {
  unit: UnitType;
}

function DisplayUnit({ unit }: DisplayUnitProps) {
  const display = useUnitLabelStore((state) => state.display);
  const toggleDisplay = useUnitLabelStore((state) => state.toggleDisplay);
  
  const handleDisplayChange = (unit: UnitType) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    toggleDisplay(unit);
  };

  return (
    <div>
        <label>
          <input type="checkbox" checked={display[unit]} onChange={handleDisplayChange(unit)} />
          {unit.charAt(0).toUpperCase() + unit.slice(1)}
        </label>
        {/* <label>
          <input type="checkbox" checked={display.hours} onChange={handleDisplayChange('hours')} />
          Hours
        </label>
        <label>
          <input type="checkbox" checked={display.minutes} onChange={handleDisplayChange('minutes')} />
          Minutes
        </label>
        <label>
          <input type="checkbox" checked={display.seconds} onChange={handleDisplayChange('seconds')} />
          Seconds
        </label> */}
      </div>
  )
}

export default DisplayUnit