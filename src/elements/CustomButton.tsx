import React from 'react';
import { useButtonStore } from '../store/buttonStore';
import { getColor } from '../utils/getColor';
import { useTimerStore } from '../store/timerStore';
import { checkLength } from '../utils/checkLength';

function CustomButton() {
  const label = useButtonStore((state) => state.label);
  const link = useButtonStore((state) => state.link);
  const theme = useTimerStore((state) => state.theme);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="shadow-md font-bold py-1 px-3 rounded"
      style={{ backgroundColor: getColor(theme, 'digit'), color: getColor(theme, 'text') }}
    >
      {checkLength(10, label)}
    </a>
  );
}

export default CustomButton;