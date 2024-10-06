import { useState, useEffect } from 'react';

function UseTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  return { isDarkTheme, toggleTheme };
}

export default UseTheme;
