import React, { useEffect } from 'react';
import { useTimerStore } from '../store/timerStore';
import CustomButton from './CustomButton';
import CloseIcon from '../assets/CloseIcon';
import Unit from './Unit';


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
  let bgColor;
  if (theme === 'dark') {
    bgColor = '#000';
  } else if (theme === 'light') {
    bgColor = '#FFF';
  } else if (theme === 'colorful') {
    bgColor = '#248277';
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      {isCloseIconVisible && <button onClick={() => setIsOpen(false)}><CloseIcon /></button>}
      <h5>{header}</h5>
      <div className='flex'>
        <Unit unit="days" value={days} />
        <Unit unit="hours" value={hours} />
        <Unit unit="minutes" value={minutes} />
        <Unit unit="seconds" value={seconds} />
      </div>
      <CustomButton />
    </div>
  );
}

export default Timer;