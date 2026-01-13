import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';
import { useLanguage } from '../context/LanguageContext';

/**
 * A toggle button to switch between light and dark modes.
 */
export const ThemeToggle = ({ showLabel = false }: { showLabel?: boolean }) => {
    const { isDark, toggleTheme } = useTheme();
    const { t } = useLanguage();

    return (
        <button
            onClick={toggleTheme}
            className={clsx(
                "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center gap-2",
                showLabel
                    ? "p-2 px-3 w-full justify-start rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                    : "p-2 rounded-lg",
                !showLabel && (isDark
                    ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                    : "bg-white text-slate-400 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200")
            )}
            aria-label={t.theme}
            title={t.theme}
        >
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
            {showLabel && <span className="text-sm font-medium">{t.theme}</span>}
        </button>
    );
};
