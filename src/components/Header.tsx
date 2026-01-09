import React from 'react';
import { GraduationCap } from 'lucide-react';

/**
 * Header component for the Syllabus Viewer.
 * Displays the course title, icon, and description.
 *
 * @component
 */
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    title: string;
    subtitle: string;
    description: string;
}

/**
 * Header component for the Syllabus Viewer.
 * Displays the course title, icon, and description.
 *
 * @component
 */
export const Header: React.FC<HeaderProps> = ({ title, subtitle, description }) => {
    return (
        <div className="text-center space-y-4 relative">
            <div className="absolute right-0 top-0">
                <ThemeToggle />
            </div>

            <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50">
                <GraduationCap className="text-white" size={32} aria-hidden="true" />
            </div>
            <div>
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {title}
                </h1>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 uppercase tracking-wider">
                    {subtitle}
                </p>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    );
};
