import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

function ThemeToggle({ isDarkTheme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkTheme ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
}

export default ThemeToggle;
