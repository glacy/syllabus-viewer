import React from 'react';
import { GraduationCap } from 'lucide-react';

/**
 * Header component for the Syllabus Viewer.
 * Displays the course title, icon, and description.
 *
 * @component
 */
import { ThemeToggle } from './ThemeToggle';

/**
 * Header component for the Syllabus Viewer.
 * Displays the course title, icon, and description.
 *
 * @component
 */
export const Header: React.FC = () => {
    return (
        <div className="text-center space-y-4 relative">
            <div className="absolute right-0 top-0">
                <ThemeToggle />
            </div>

            <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50">
                <GraduationCap className="text-white" size={32} aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Física para Biotecnología
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Planeamiento didáctico: contenidos, objetivos de aprendizaje y actividades por semana.
            </p>
        </div>
    );
};
