import React from 'react'

type TextInputProps = {
  value: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ value, setValue }: TextInputProps) {

  return (
    <input className='border-2 border-gray rounded-lg text-xs text-gray-500 px-2 py-1' type="text" value={value} onChange={setValue} />
  )
}

export default TextInput