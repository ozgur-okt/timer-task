import React from 'react'
import { useTimerStore } from '../store/timerStore';
import { PositionType, positionTypes, positionTypesNamingMap } from '../types';

type PositionProps = {
  positionProp: PositionType;
}

function Position({ positionProp }: PositionProps) {
  const position = useTimerStore((state) => state.position);
  const setPosition = useTimerStore((state) => state.setPosition);
  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value as PositionType);
  };
  
  return (
    <div className='inline mr-2'>
      <input type="radio" className='align-middle mr-1 accent-black' value={positionProp} checked={positionProp === position} onChange={handlePositionChange} />
      <label className='text-xs'>{positionTypesNamingMap[positionProp]}</label>
    </div>
  )
}

export default Position