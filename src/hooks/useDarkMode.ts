import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    return isDarkMode ? JSON.parse(isDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
