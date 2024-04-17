import React, { useEffect } from 'react';
import { useTimerStore } from '../store/timerStore';
import CustomButton from './CustomButton';
import CloseIcon from '../assets/CloseIcon';


function Timer() {
  const isOpen = useTimerStore((state) => state.isOpen);
  const setIsOpen = useTimerStore((state) => state.setIsOpen);
  const time = useTimerStore((state) => state.time);
  const setTime = useTimerStore((state) => state.setTime);
  const header = useTimerStore((state) => state.header);
  const isCloseIconVisible = useTimerStore((state) => state.isCloseIconVisible);

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

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      {isCloseIconVisible && <button onClick={() => setIsOpen(false)}><CloseIcon /></button>}
      <h5>{header}</h5>
      {days}d : {hours}h : {minutes}m : {seconds}s
      <CustomButton />
    </div>
  );
}

export default Timer;