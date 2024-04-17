import React from 'react';
import { useUnitLabelStore } from '../store/unitLabelStore';

type UnitProps = {
  unit: 'days' | 'hours' | 'minutes' | 'seconds';
  value: number;
};

function Unit({ unit, value }: UnitProps) {
  const customLabel = useUnitLabelStore((state) => state.labels[unit]);
  const display = useUnitLabelStore((state) => state.display[unit]);

  if (!display) {
    return null;
  }

  return (
    <div>
      <p>{value}</p>
      <p>{customLabel}</p>
    </div>
  );
}

export default Unit;