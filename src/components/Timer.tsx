import React, { useEffect } from 'react';
import { useTimerStore } from '../store/timerStore';
import CustomButton from '../elements/CustomButton';
import CloseIcon from '../assets/CloseIcon';
import Unit from '../elements/Unit';
import { getColor } from '../utils/getColor';


function Timer() {
  const isOpen = useTimerStore((state) => state.isOpen);
  const setIsOpen = useTimerStore((state) => state.setIsOpen);
  const time = useTimerStore((state) => state.time);
  const setTime = useTimerStore((state) => state.setTime);
  const header = useTimerStore((state) => state.header);
  const isCloseIconVisible = useTimerStore((state) => state.isCloseIconVisible);
  const timeUnit = useTimerStore((state) => state.timeUnit);
  const theme = useTimerStore((state) => state.theme);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime]);

  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600) % 24;
  const days = Math.floor(time / (3600 * 24));

  // let timeDisplay = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // if (timeUnit === 'minutes') {
  //   timeDisplay = `${days}d ${hours}h ${minutes}m`;
  // }
  // if (timeUnit === 'hours') {
  //   timeDisplay = `${days}d ${hours}h`;
  // }
  // if (timeUnit === 'days') {
  //   timeDisplay = `${days}d`;
  // }

  if (!isOpen) {
    return null;
  }
  

  return (
    <div className='flex items-center justify-between w-[100vw] px-10 border-1 border-red-800' style={{ backgroundColor: getColor(theme, 'container') }}>
      <h5 className='font-extrabold' style={{color:getColor(theme, 'text')}}>{header}</h5>
      <div className='flex gap-2'>
        <Unit unit="days" value={days} />
        <Unit unit="hours" value={hours} />
        <Unit unit="minutes" value={minutes} />
        <Unit unit="seconds" value={seconds} />
      </div>
      <div>
        <CustomButton />
      </div>
      <div>
        {isCloseIconVisible && <button onClick={() => setIsOpen(false)}><CloseIcon color={getColor(theme, 'text')} /></button>}
      </div>
    </div>
  );
}

export default Timer;