import React from 'react'
import { checkLength } from '../utils/checkLength'
import { useTimerStore } from '../stores/timerStore'
import { getColor } from '../utils/getColor'
import { ThemeType } from '../types'

type TimerHeaderProps = {
  theme: ThemeType
}

function TimerHeader({ theme }: TimerHeaderProps) {
  const header = useTimerStore((state) => state.header)

  return (
    <h5 className='font-extrabold' style={{ color: getColor(theme, 'text') }}>
      {checkLength(20, header)}
    </h5>
  )
}

export default TimerHeader