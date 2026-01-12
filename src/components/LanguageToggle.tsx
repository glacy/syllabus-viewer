import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import clsx from 'clsx';

export const LanguageToggle: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className={clsx(
                "p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
                "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200 dark:border-slate-700"
            )}
            aria-label={t.language}
            title={t.language}
        >
            <div className="flex items-center justify-center font-bold text-xs w-5 h-5">
                {language.toUpperCase()}
            </div>
        </button>
    );
};
