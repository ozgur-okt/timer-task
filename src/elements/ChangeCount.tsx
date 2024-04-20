import React from 'react'
import { useTimerStore } from '../stores/timerStore'
import Subtitle from './Subtitle'

function ChangeCount() {
  const setStartHours = useTimerStore((state) => state.setStartHours)
  const [countdownStartHours, setCountdownStartHours] = React.useState(0)

  const handleStartHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountdownStartHours(Number(event.target.value))
  }
  return (
    <>
      <Subtitle subtitle='Remaining Time Period' />
      <input
        type="text"
        className='border-2 border-gray rounded-lg text-xs px-3 py-1 w-[64px]'
        value={countdownStartHours}
        onChange={handleStartHoursChange}
      />
      <label className='text-xs text-gray-500 ml-1'>hours</label>
      <button className='hover:bg-white hover:text-black hover:border-2 rounded-md text-xs px-4 py-1 ml-2 text-white bg-black'
        onClick={() => setStartHours(countdownStartHours)}>
        Set
      </button>
    </>
  )
}

export default ChangeCount