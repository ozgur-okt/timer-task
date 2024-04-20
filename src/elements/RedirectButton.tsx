import React from 'react'
import { useButtonStore } from '../stores/buttonStore'
import Subtitle from './Subtitle'
import TextInput from './TextInput'

function RedirectButton() {
  const label = useButtonStore((state) => state.label)
  const link = useButtonStore((state) => state.link)
  const setLabel = useButtonStore((state) => state.setLabel)
  const setLink = useButtonStore((state) => state.setLink)

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value)
  }

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
  }

  return (
    <>
      <Subtitle subtitle='Button Text' />
      <TextInput value={label} setValue={handleLabelChange} />
      <Subtitle subtitle='Button Link' />
      <TextInput value={link} setValue={handleLinkChange} />
    </>
  )
}

export default RedirectButton