import React from 'react'

type RadioInputProps = {
  value: string
  checked: boolean
  label: string
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function RadioInput({ value, checked, label, setValue }: RadioInputProps) {
  return (
    <div className='inline mr-2'>
      <input type="radio" className='align-middle mr-1 accent-black' value={value} checked={checked} onChange={setValue} />
      <label className='text-xs'>{label}</label>
    </div>
  )
}

export default RadioInput