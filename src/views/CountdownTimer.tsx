import React from 'react'
import Timer from '../components/Timer'
import SideBar from '../components/SideBar'
import { useTimerStore } from '../store/timerStore'

function CountdownTimer() {
  const position = useTimerStore((state) => state.position);
  let timerPositionClass = '';

  switch (position) {
    case 'top-sticky':
      timerPositionClass = 'sticky top-0';
      console.log('top-sticky');
      break;
    case 'top-static':
      timerPositionClass = 'static';
      console.log('top-static');
      break;
    case 'bottom-static':
      timerPositionClass = 'static mt-auto';
      console.log('bottom-static');
      break;
  }

  return (
    <div className='flex h-[100vh]'>
      <SideBar />
      <div className={`${timerPositionClass}`}>
        <Timer />
      </div>
    </div>
  )
}

export default CountdownTimer