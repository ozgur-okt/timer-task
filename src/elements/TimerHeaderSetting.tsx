import React from 'react'
import { useTimerStore } from '../stores/timerStore'
import Subtitle from './Subtitle'
import TextInput from './TextInput'

function TimerHeaderSetting() {
  const header = useTimerStore((state) => state.header)
  const setHeader = useTimerStore((state) => state.setHeader)

  const handleHeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeader(event.target.value)
  }

  return (
    <>
      <Subtitle subtitle='Timer Title' />
      <TextInput value={header} setValue={handleHeaderChange} />
    </>
  )
}

export default TimerHeaderSetting