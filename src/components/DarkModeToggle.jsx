import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 rounded-full bg-gray-200 p-2 shadow-md transition-all hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      title="Toggle dark mode"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}
