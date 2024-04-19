import React from 'react'

type SubtitleProps = {
  subtitle: string
}

function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <label className='block text-sm font-semibold mt-3 mb-2'>{subtitle}</label>
  )
}

export default Subtitle