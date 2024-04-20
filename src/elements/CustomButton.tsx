import React from 'react'
import { useButtonStore } from '../stores/buttonStore'
import { getColor } from '../utils/getColor'
import { checkLength } from '../utils/checkLength'
import { ThemeType } from '../types'

type CustomButtonProps = {
  theme: ThemeType
}

function CustomButton({ theme }: CustomButtonProps) {
  const label = useButtonStore((state) => state.label)
  const link = useButtonStore((state) => state.link)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="shadow-md font-bold py-1 px-3 rounded"
      style={{ backgroundColor: getColor(theme, 'digit'), color: getColor(theme, 'text') }}
    >
      {checkLength(10, label)}
    </a>
  )
}

export default CustomButton