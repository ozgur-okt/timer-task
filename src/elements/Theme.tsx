import React from 'react'
import { useTimerStore } from '../stores/timerStore'
import Subtitle from './Subtitle'
import { ThemeType, themeTypes } from '../types'
import { capitalize } from '../utils/capitalize'

function Theme() {
  const theme = useTimerStore((state) => state.theme)
  const setTheme = useTimerStore((state) => state.setTheme)

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeType)
  }
  return (
    <div>
      <Subtitle subtitle='Timer Style' />
      <select
        className='text-xs px-3 py-1 w-26 text-black-800 rounded-md bg-gray-200'
        value={theme}
        onChange={handleThemeChange}
      >
        {Object.values(themeTypes).map((theme) => (
          <option key={theme} value={theme}>{capitalize(theme)}</option>
        ))}
      </select>
    </div>
  )
}

export default Theme