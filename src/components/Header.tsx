import React from 'react';
import { GraduationCap } from 'lucide-react';

/**
 * Header component for the Syllabus Viewer.
 * Displays the course title, icon, and description.
 *
 * @component
 */

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
import { useEditMode } from '../context/EditModeContext';

export const Header: React.FC<HeaderProps> = ({ title, subtitle, description }) => {
    const { isEditing, updateMetadata } = useEditMode();

    return (
        <div className="text-center space-y-4 relative">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50">
                <GraduationCap className="text-white" size={32} aria-hidden="true" />
            </div>
            <div>
                {isEditing ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => updateMetadata('title', e.target.value)}
                        className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-center bg-transparent border-b border-indigo-300 dark:border-indigo-700 focus:outline-none focus:border-indigo-500 w-full"
                        aria-label="Course Title"
                    />
                ) : (
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {title}
                    </h1>
                )}

                {isEditing ? (
                    <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => updateMetadata('semester', e.target.value)}
                        className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 uppercase tracking-wider text-center bg-transparent border-b border-indigo-300 dark:border-indigo-700 focus:outline-none focus:border-indigo-500 w-1/2 mx-auto block"
                        aria-label="Semester"
                    />
                ) : (
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 uppercase tracking-wider">
                        {subtitle}
                    </p>
                )}
            </div>

            {isEditing ? (
                <textarea
                    value={description}
                    onChange={(e) => updateMetadata('description', e.target.value)}
                    className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center bg-transparent border border-indigo-300 dark:border-indigo-700 rounded p-2 focus:outline-none focus:border-indigo-500 w-full min-h-[100px]"
                    aria-label="Course Description"
                />
            ) : (
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
};
