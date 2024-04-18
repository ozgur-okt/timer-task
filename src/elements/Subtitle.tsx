import React from 'react'

type SubtitleProps = {
  subtitle: string;
}

function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <label className='block text-sm font-semibold'>{subtitle}</label>
  )
}

export default Subtitle