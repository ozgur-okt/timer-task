import React from 'react'
import { useTimerStore } from '../stores/timerStore'
import Subtitle from './Subtitle'

function ToggleButton() {
  const isCloseIconVisible = useTimerStore((state) => state.isCloseIconVisible)
  const setCloseIconVisibility = useTimerStore((state) => state.setCloseIconVisibility)

  return (
    <>
      <Subtitle subtitle='Close Button' />
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          checked={isCloseIconVisible}
          onChange={() => setCloseIconVisibility(!isCloseIconVisible)}
          className="sr-only peer"
        />
        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
        <span className="ms-3 text-xs font-normal text-gray-900 dark:text-black-300">
          Turn on close button
        </span>
      </label>
    </>
  )
}

export default ToggleButton