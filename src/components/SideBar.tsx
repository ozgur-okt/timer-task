import React from 'react';
import { useButtonStore } from '../store/buttonStore';
import { useTimerStore } from '../store/timerStore';
import ToggleButton from './ToggleButton';
import { useUnitLabelStore } from '../store/unitLabelStore';

function SideBar() {
  const label = useButtonStore((state) => state.label);
  const link = useButtonStore((state) => state.link);
  const setLabel = useButtonStore((state) => state.setLabel);
  const setLink = useButtonStore((state) => state.setLink);
  const header = useTimerStore((state) => state.header);
  const setHeader = useTimerStore((state) => state.setHeader);
  const position = useTimerStore((state) => state.position);
  const setPosition = useTimerStore((state) => state.setPosition);
  const timeUnit = useTimerStore((state) => state.timeUnit);
  const setTimeUnit = useTimerStore((state) => state.setTimeUnit);
  const setStartHours = useTimerStore((state) => state.setStartHours);
  const [countdownStartHours, setCountdownStartHours] = React.useState(0);
  const labels = useUnitLabelStore((state) => state.labels);
  const setUnitLabel = useUnitLabelStore((state) => state.setUnitLabel);
  const display = useUnitLabelStore((state) => state.display);
  const toggleDisplay = useUnitLabelStore((state) => state.toggleDisplay);
  const theme = useTimerStore((state) => state.theme);
  const setTheme = useTimerStore((state) => state.setTheme);

 

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleHeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeader(event.target.value);
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value as 'top-sticky' | 'top-static' | 'bottom-static');
  };
  const handleTimeUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeUnit(event.target.value as 'days' | 'hours' | 'minutes' | 'seconds');
  };
  const handleStartHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountdownStartHours(Number(event.target.value));
  };
  const handleUnitLabelChange = (unit: 'days' | 'hours' | 'minutes' | 'seconds') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnitLabel(unit, event.target.value);
  };
  const handleDisplayChange = (unit: 'days' | 'hours' | 'minutes' | 'seconds') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    toggleDisplay(unit);
  };
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as 'dark' | 'light' | 'colorful');
  };

  return (
    <div className="w-64 h-full bg-gray-200 p-4">
       <div className="mt-4">
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
      </div>
       <ToggleButton />
      <input type="text" value={header} onChange={handleHeaderChange} className="mb-4 w-full" placeholder="Timer Header" />
      <div className="mt-4">
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
      <div className="mt-4">
        <input type="number" value={countdownStartHours} onChange={handleStartHoursChange} className="mb-4 w-full" placeholder="Start Hours" />
        <button onClick={() => setStartHours(countdownStartHours)}>Set</button>
      </div>
      <div className="mt-4">
        <label>
          <input type="radio" value="top-sticky" checked={position === 'top-sticky'} onChange={handlePositionChange} />
          Top Sticky
        </label>
        <label>
          <input type="radio" value="top-static" checked={position === 'top-static'} onChange={handlePositionChange} />
          Top Static
        </label>
        <label>
          <input type="radio" value="bottom-static" checked={position === 'bottom-static'} onChange={handlePositionChange} />
          Bottom Static
        </label>
      </div>
      <div className="mt-4">
        <label>
          <input type="checkbox" checked={display.days} onChange={handleDisplayChange('days')} />
          Days
        </label>
        <label>
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
        </label>
      </div>
      <div className="mt-4">
        <input type="text" value={labels.days} onChange={handleUnitLabelChange('days')} placeholder="Days Label" />
        <input type="text" value={labels.hours} onChange={handleUnitLabelChange('hours')} placeholder="Hours Label" />
        <input type="text" value={labels.minutes} onChange={handleUnitLabelChange('minutes')} placeholder="Minutes Label" />
        <input type="text" value={labels.seconds} onChange={handleUnitLabelChange('seconds')} placeholder="Seconds Label" />
      </div>
      <input type="text" value={label} onChange={handleLabelChange} className="mb-4 w-full" placeholder="Button Label" />
      <input type="text" value={link} onChange={handleLinkChange} className="mb-4 w-full" placeholder="Button Link" />
    </div>
  );
}

export default SideBar;