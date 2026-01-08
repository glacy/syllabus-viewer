import React from 'react';
import { BookOpen } from 'lucide-react';
import clsx from 'clsx';
import type { SyllabusEntry } from '../types';

/**
 * Props for WeekEvaluation component.
 * @property {SyllabusEntry['evaluation']} evaluation - List of evaluation methods.
 */
interface WeekEvaluationProps {
    evaluation: SyllabusEntry['evaluation'];
}

/**
 * Component to display the evaluation methods for a specific week.
 *
 * @component
 * @description
 * Renders a list of evaluation items, distinguishing between 'Formativa' and 'Sumativa'
 * types with different colored badges.
 *
 * @param {WeekEvaluationProps} props - Component props
 * @returns {React.ReactElement | null} The rendered evaluation list or null if empty.
 */
export const WeekEvaluation: React.FC<WeekEvaluationProps> = ({ evaluation }) => {
    if (!evaluation || evaluation.length === 0) return null;

    return (
        <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                <BookOpen size={16} aria-hidden="true" /> Evaluación
            </h4>
            <div className="space-y-2">
                {evaluation.map((ev, i) => (
                    <div key={i} className="flex gap-3 text-sm items-start">
                        <span className={clsx(
                            "px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide shrink-0 mt-0.5 border",
                            ev.type === 'Sumativa'
                                ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
                                : "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800"
                        )}>
                            {ev.type}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{ev.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
