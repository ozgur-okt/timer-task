import React from 'react'
import Timer from '../components/Timer'
import SideBar from '../components/SideBar'
import { useTimerStore } from '../store/timerStore'
import { positionTypes } from '../types';

function CountdownTimer() {
  //const position = useTimerStore((state) => state.position);
  let timerPositionClass = '';

  // switch (position) {
  //   case positionTypes.topSticky:
  //     timerPositionClass = 'sticky top-0';
  //     break;
  //   case positionTypes.topStatic:
  //     timerPositionClass = 'static';
  //     break;
  //   case positionTypes.bottomStatic:
  //     timerPositionClass = 'static mt-auto';
  //     break;
  // }

  return (
    <div className='flex'>
      <SideBar />
      <div className="p-4 bg-gray-200 w-[70%]" >
        <Timer />
      </div>
    </div>
  )
}

export default CountdownTimer