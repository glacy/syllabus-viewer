import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

/**
 * A toggle button to switch between light and dark modes.
 */
export const ThemeToggle: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={clsx(
                "p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                isDark
                    ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                    : "bg-white text-slate-400 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200"
            )}
            aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
            title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
        >
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
        </button>
    );
};
