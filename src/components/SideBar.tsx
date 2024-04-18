import React from 'react';
import { useButtonStore } from '../store/buttonStore';
import { useTimerStore } from '../store/timerStore';
import ToggleButton from '../elements/ToggleButton';
import { useUnitLabelStore } from '../store/unitLabelStore';
import Theme from '../elements/Theme';
import Position from '../elements/Position';
import ChangeCount from '../elements/ChangeCount';
import DisplayUnit from '../elements/DisplayUnit';
import Unit from '../elements/Unit';
import UnitLabel from '../elements/UnitLabel';
import { PositionType, positionTypes, unitTypes } from '../types';
import RedirectButton from '../elements/RedirectButton';
import Title from '../elements/Title';
import TimerTitle from '../elements/TimerTitle';
import Subtitle from '../elements/Subtitle';

function SideBar() {

  

  const timeUnit = useTimerStore((state) => state.timeUnit);
  const setTimeUnit = useTimerStore((state) => state.setTimeUnit);

  

  const handleTimeUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeUnit(event.target.value as 'days' | 'hours' | 'minutes' | 'seconds');
  };


  return (
    <div className="border-2 w-80 h-full p-4">
      <Title title='Timer Settings' />
      <Theme />
      <ToggleButton />
      <TimerTitle />
      {/* <div>
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
      </div>  */}
      <ChangeCount />
      <Subtitle subtitle='Positioning' />
      {Object.keys(positionTypes).map((position) => (
        <Position key={position} positionProp={position as PositionType} />
      ))}
      <Title title='Counters and Labels' />
      <Subtitle subtitle='Display the count in' />
      {Object.values(unitTypes).map((unit) => (
        <DisplayUnit key={unit} unit={unit} />
      ))}
      {Object.values(unitTypes).map((unit) => (
        <UnitLabel key={unit} unit={unit} />
      ))}
      <Title title='Button Settings' />
      <RedirectButton />
    </div>
  );
}

export default SideBar;