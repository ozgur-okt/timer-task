import React from 'react'
import { useTimerStore } from '../store/timerStore';

function Theme() {
  const theme = useTimerStore((state) => state.theme);
  const setTheme = useTimerStore((state) => state.setTheme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as 'dark' | 'light' | 'colorful');
  };
  return (
    <div>
    <select value={theme} onChange={handleThemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="colorful">Colorful</option>
    </select>
  </div>
  )
}

export default Theme