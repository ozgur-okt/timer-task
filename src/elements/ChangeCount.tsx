import React from 'react'
import { useTimerStore } from '../store/timerStore';
import Subtitle from './Subtitle';

function ChangeCount() {
  const setStartHours = useTimerStore((state) => state.setStartHours);
  const [countdownStartHours, setCountdownStartHours] = React.useState(0);

  const handleStartHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountdownStartHours(Number(event.target.value));
  };
  return (
    <div>
      <Subtitle subtitle='Remaining Time Period' />
      <input type="text" className='border-2 border-gray rounded-lg text-xs px-3 py-1 w-[64px]' value={countdownStartHours} onChange={handleStartHoursChange} />
      <label className='text-xs text-gray-500 ml-1'>hours</label>
      <button className=' bg-blue-500 rounded-md text-xs px-4 py-1 ml-2 text-white' onClick={() => setStartHours(countdownStartHours)}>Set</button>
    </div>
  )
}

export default ChangeCount