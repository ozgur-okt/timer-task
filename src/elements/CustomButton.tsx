import React from 'react';
import { useButtonStore } from '../store/buttonStore';
import { getColor } from '../utils/getColor';
import { useTimerStore } from '../store/timerStore';

function CustomButton() {
  const label = useButtonStore((state) => state.label);
  const link = useButtonStore((state) => state.link);
  const theme = useTimerStore((state) => state.theme);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
      style={{ backgroundColor: getColor(theme, 'digit'), color: getColor(theme, 'text') }}
    >
      {label}
    </a>
  );
}

export default CustomButton;