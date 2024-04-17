import React from 'react';
import { useButtonStore } from '../store/buttonStore';

function CustomButton() {
  const label = useButtonStore((state) => state.label);
  const link = useButtonStore((state) => state.link);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </a>
  );
}

export default CustomButton;