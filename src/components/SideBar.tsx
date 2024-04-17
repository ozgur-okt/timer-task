import React from 'react';
import { useButtonStore } from '../store/buttonStore';
import { useTimerStore } from '../store/timerStore';

function SideBar() {
  const label = useButtonStore((state) => state.label);
  const link = useButtonStore((state) => state.link);
  const setLabel = useButtonStore((state) => state.setLabel);
  const setLink = useButtonStore((state) => state.setLink);
  const header = useTimerStore((state) => state.header);
  const setHeader = useTimerStore((state) => state.setHeader);

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleHeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeader(event.target.value);
  };

  return (
    <div className="w-64 h-full bg-gray-200 p-4">
       <input type="text" value={header} onChange={handleHeaderChange} className="mb-4 w-full" placeholder="Timer Header" />
      <input type="text" value={label} onChange={handleLabelChange} className="mb-4 w-full" placeholder="Button Label" />
      <input type="text" value={link} onChange={handleLinkChange} className="mb-4 w-full" placeholder="Button Link" />
    </div>
  );
}

export default SideBar;