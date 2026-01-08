import React from 'react';
import { Library } from 'lucide-react';
import type { SyllabusEntry } from '../types';

/**
 * Props for WeekReferences component.
 * @property {SyllabusEntry['references']} references - Bibliographic references.
 */
interface WeekReferencesProps {
    references: SyllabusEntry['references'];
}

/**
 * Component to display the bibliographic references for a specific week.
 *
 * @component
 * @description
 * Renders the references section. Handles diverse formats:
 * - Simple string: Renders as a single paragraph.
 * - Array of objects: Renders a list where each item can have specific pages cited.
 *
 * @param {WeekReferencesProps} props - Component props
 * @returns {React.ReactElement | null} The rendered references block or null if empty.
 */
export const WeekReferences: React.FC<WeekReferencesProps> = ({ references }) => {
    if (!references) return null;

    return (
        <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                <Library size={16} aria-hidden="true" /> Referencias
            </h4>
            {Array.isArray(references) ? (
                <div className="space-y-2 pl-6">
                    {references.map((ref, i) => (
                        <div key={i} className="text-sm text-slate-600 dark:text-slate-300">
                            <p className=" leading-relaxed">
                                {ref.text}
                                {ref.pages && (
                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                                        {ref.pages}
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400  leading-relaxed pl-6">
                    {references}
                </p>
            )}
        </div>
    );
};
