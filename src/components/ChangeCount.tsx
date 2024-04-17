import React from 'react'
import { useTimerStore } from '../store/timerStore';

function ChangeCount() {
  const setStartHours = useTimerStore((state) => state.setStartHours);
  const [countdownStartHours, setCountdownStartHours] = React.useState(0);

  const handleStartHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountdownStartHours(Number(event.target.value));
  };
  return (
    <div>
    <input type="number" value={countdownStartHours} onChange={handleStartHoursChange} placeholder="Start Hours" />
    <button onClick={() => setStartHours(countdownStartHours)}>Set</button>
  </div>
  )
}

export default ChangeCount