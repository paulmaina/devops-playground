import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg hover:shadow-xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:scale-105 group w-10 h-10 flex items-center justify-center"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="relative w-4 h-4">
          {/* Sun Icon */}
          <HiSun 
            className={`absolute inset-0 w-4 h-4 text-amber-500 transition-all duration-300 transform ${
              theme === 'light' 
                ? 'rotate-0 scale-100 opacity-100' 
                : 'rotate-90 scale-0 opacity-0'
            }`}
          />
          
          {/* Moon Icon */}
          <HiMoon 
            className={`absolute inset-0 w-4 h-4 text-slate-700 dark:text-slate-300 transition-all duration-300 transform ${
              theme === 'dark' 
                ? 'rotate-0 scale-100 opacity-100' 
                : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </div>
        
        {/* Hover indicator */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/15 to-blue-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default ThemeToggle;