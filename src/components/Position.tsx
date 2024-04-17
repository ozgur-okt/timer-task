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
    <div >
        <label>
          <input type="radio" value={positionProp} checked={positionProp === position} onChange={handlePositionChange} />
          {positionTypesNamingMap[positionProp]}
        </label>
        {/* <label>
          <input type="radio" value="top-static" checked={position === 'top-static'} onChange={handlePositionChange} />
          Top Static
        </label>
        <label>
          <input type="radio" value="bottom-static" checked={position === 'bottom-static'} onChange={handlePositionChange} />
          Bottom Static
        </label> */}
      </div>
  )
}

export default Position