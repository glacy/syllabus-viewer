import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
    filter: string;
    setFilter: (value: string) => void;
}

/**
 * SearchBar component for filtering syllabus entries.
 *
 * @component
 * @param {SearchBarProps} props - Component props
 * @param {string} props.filter - Current filter value
 * @param {function} props.setFilter - State setter for filter value
 */
export const SearchBar: React.FC<SearchBarProps> = ({ filter, setFilter }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { t } = useLanguage();

    const handleClear = () => {
        setFilter('');
        inputRef.current?.focus();
    };

    return (
        <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
            </div>
            <input
                ref={inputRef}
                type="text"
                className="block w-full pl-10 pr-10 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-white dark:!bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm transition-all"
                placeholder={t.searchPlaceholder}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            {filter && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-r-xl"
                    aria-label={t.clearSearch}
                    title={t.clearSearch}
                >
                    <X className="h-5 w-5" aria-hidden="true" />
                </button>
            )}
        </div>
    );
};
