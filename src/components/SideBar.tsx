import React from 'react';
import { useButtonStore } from '../store/buttonStore';
import { useTimerStore } from '../store/timerStore';
import ToggleButton from './ToggleButton';
import { useUnitLabelStore } from '../store/unitLabelStore';
import Theme from './Theme';
import Position from './Position';
import ChangeCount from './ChangeCount';
import DisplayUnit from './DisplayUnit';
import Unit from './Unit';
import UnitLabel from './UnitLabel';
import { PositionType, positionTypes, unitTypes } from '../types';
import RedirectButton from './RedirectButton';

function SideBar() {

  const header = useTimerStore((state) => state.header);
  const setHeader = useTimerStore((state) => state.setHeader);

  const timeUnit = useTimerStore((state) => state.timeUnit);
  const setTimeUnit = useTimerStore((state) => state.setTimeUnit);

  const handleHeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeader(event.target.value);
  };

  const handleTimeUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeUnit(event.target.value as 'days' | 'hours' | 'minutes' | 'seconds');
  };


  return (
    <div className="w-64 h-full bg-gray-200 p-4">
      <Theme />
      <ToggleButton />
      <input type="text" value={header} onChange={handleHeaderChange} placeholder="Timer Header" />
      <div>
        <label>
          <input type="radio" value="days" checked={timeUnit === 'days'} onChange={handleTimeUnitChange} />
          Days
        </label>
        <label>
          <input type="radio" value="hours" checked={timeUnit === 'hours'} onChange={handleTimeUnitChange} />
          Hours
        </label>
        <label>
          <input type="radio" value="minutes" checked={timeUnit === 'minutes'} onChange={handleTimeUnitChange} />
          Minutes
        </label>
        <label>
          <input type="radio" value="seconds" checked={timeUnit === 'seconds'} onChange={handleTimeUnitChange} />
          Seconds
        </label>
      </div>
      <ChangeCount />
      {Object.keys(positionTypes).map((position) => (
        <Position key={position} positionProp={position as PositionType} />
      ))}
      {Object.values(unitTypes).map((unit) => (
        <DisplayUnit key={unit} unit={unit} />
      ))}
      {Object.values(unitTypes).map((unit) => (
        <UnitLabel key={unit} unit={unit} />
      ))}
      <RedirectButton />
    </div>
  );
}

export default SideBar;