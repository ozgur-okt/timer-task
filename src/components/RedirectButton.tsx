import React from 'react'
import { useButtonStore } from '../store/buttonStore';

function RedirectButton() {
  const label = useButtonStore((state) => state.label);
  const link = useButtonStore((state) => state.link);
  const setLabel = useButtonStore((state) => state.setLabel);
  const setLink = useButtonStore((state) => state.setLink);

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  return (
    <div>
      <input type="text" value={label} onChange={handleLabelChange} placeholder="Button Label" />
      <input type="text" value={link} onChange={handleLinkChange} placeholder="Button Link" />
    </div>
  )
}

export default RedirectButton