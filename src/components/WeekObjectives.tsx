import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

/**
 * Props for WeekObjectives component.
 * @property {string[]} objectives - List of learning objectives. Can be strings or key-value objects.
 */
interface WeekObjectivesProps {
    objectives: string[];
}

/**
 * Component to display the learning objectives for a specific week.
 *
 * @component
 * @description
 * Renders a list of objectives with check icons. Handles both string items
 * and object items (key-value pairs) which are flattened for display.
 *
 * @param {WeekObjectivesProps} props - Component props
 * @returns {React.ReactElement | null} The rendered list or null if empty.
 */
export const WeekObjectives: React.FC<WeekObjectivesProps> = ({ objectives }) => {
    if (!objectives || objectives.length === 0) return null;

    return (
        <div className="space-y-3 mt-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                <Target size={16} aria-hidden="true" /> Objetivos
            </h4>
            <ul className="space-y-2">
                {objectives.map((obj, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                        <CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" aria-hidden="true" />
                        <span>
                            {typeof obj === 'string'
                                ? obj
                                : Object.entries(obj).map(([k, v]) => `${k}: ${v}`).join(', ')}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
