import React from 'react'
import { useTimerStore } from '../store/timerStore';
import { PositionType, positionTypes, positionTypesNamingMap } from '../types';
import RadioInput from './RadioInput';

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
    <RadioInput value={positionProp} label={positionTypesNamingMap[positionProp]} checked={position === positionProp} setValue={handlePositionChange} />
  )
}

export default Position