"use client";
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check the initial theme from localStorage or default to light
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setIsDark(currentTheme === 'dark');
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    const newTheme = !isDark ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme); // Store the selected theme in localStorage
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg flex items-center"
    >
      {isDark ? <><FaSun className="mr-2" /> Light</> : <><FaMoon className="mr-2" /> Dark</>}
    </button>
  );
};

export default ThemeSwitcher;
