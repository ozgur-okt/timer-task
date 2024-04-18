import React from 'react'
import { useUnitLabelStore } from '../store/unitLabelStore';
import { UnitType } from '../types';
import { capitalize } from '../utils/capitalize';

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
    <div className='inline mr-2'>
      <input className='align-middle mt-[-2px] mr-1 accent-black' type="checkbox" checked={display[unit]} onChange={handleDisplayChange(unit)} />
      <label className='text-xs'>{capitalize(unit)}</label>
    </div>
  )
}

export default DisplayUnit