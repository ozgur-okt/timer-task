import React from 'react';
import { useUnitLabelStore } from '../store/unitLabelStore';
import { UnitType } from '../types';
import { useTimerStore } from '../store/timerStore';
import { getColor } from '../utils/getColor';

type UnitProps = {
  unit: UnitType;
  value: number;
};

function Unit({ unit, value }: UnitProps) {
  const customLabel = useUnitLabelStore((state) => state.labels[unit]);
  const display = useUnitLabelStore((state) => state.display[unit]);
  const theme = useTimerStore((state) => state.theme);

  if (!display) {
    return null;
  }

  const digits = value.toString().padStart(2, '0').split('');

  return (
    <div className='flex flex-col items-center'>
      <div className='flex'>
        {digits.map((digit, index) => (
          <div key={index} className='mx-[1px] w-5 h-8 flex justify-center items-center font-bold rounded' style={{ backgroundColor: getColor(theme, 'digit'), color: getColor(theme, 'text') }}>
            {digit}
          </div>
        ))}
      </div>
      <p className='text-[9px] font-semibold' style={{color: getColor(theme, 'text')}}>{customLabel}</p>
    </div>
  );
}

export default Unit;