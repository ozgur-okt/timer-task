import React, { useEffect } from 'react'
import { useTimerStore } from '../stores/timerStore'
import CustomButton from '../elements/CustomButton'
import CloseIcon from '../assets/CloseIcon'
import { getColor } from '../utils/getColor'
import ConfettiExplosion from 'react-confetti-explosion'
import PrecisedUnits from '../elements/PrecisedUnits'
import { getTimerPosition } from '../utils/getTimerPosition'
import TimerHeader from '../elements/TimerHeader'


function Timer() {
  const isOpen = useTimerStore((state) => state.isOpen)
  const setIsOpen = useTimerStore((state) => state.setIsOpen)
  const time = useTimerStore((state) => state.time)
  const setTime = useTimerStore((state) => state.setTime)
  const isCloseIconVisible = useTimerStore((state) => state.isCloseIconVisible)
  const theme = useTimerStore((state) => state.theme)
  const [isExploding, setIsExploding] = React.useState(false)
  const position = useTimerStore((state) => state.position)

  useEffect(() => {
    const interval = setInterval(() => {
      if (time <= 0) {
        clearInterval(interval)
        setIsExploding(true)
      } else {
        setIsExploding(false)
        setTime()
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [setTime, time])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={`flex items-center gap-12 px-10 h-20 shadow w-[48rem] ${getTimerPosition(position)}`}
      style={{ backgroundColor: getColor(theme, 'container') }}
    >
      <TimerHeader theme={theme} />
      <PrecisedUnits time={time} />
      <div>
        {isExploding && <ConfettiExplosion />}
        <CustomButton />
      </div>
      {isCloseIconVisible &&
        <button className='translate-x-12' onClick={() => setIsOpen(false)}>
          <CloseIcon color={getColor(theme, 'text')} />
        </button>
      }
    </div>
  )
}

export default Timer