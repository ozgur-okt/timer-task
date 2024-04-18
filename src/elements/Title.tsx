import React from 'react'

type TitleProps = {
  title: string;
}

function Title({title}: TitleProps) {
  return (
    <h1 className='text-xl font-semibold'>{title}</h1>
  )
}

export default Title