import React from 'react';
import { BookOpen, X } from 'lucide-react';
import clsx from 'clsx';
import type { SyllabusEntry } from '../types';
import { useLanguage } from '../context/LanguageContext';

/**
 * Props for WeekEvaluation component.
 * @property {SyllabusEntry['evaluation']} evaluation - List of evaluation methods.
 */
interface WeekEvaluationProps {
    evaluation: SyllabusEntry['evaluation'];
    isEditing?: boolean;
    onUpdate?: (newEvaluation: SyllabusEntry['evaluation']) => void;
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
export const WeekEvaluation: React.FC<WeekEvaluationProps> = ({ evaluation, isEditing, onUpdate }) => {
    const { t } = useLanguage();
    if ((!evaluation || evaluation.length === 0) && !isEditing) return null;

    const handleAdd = () => {
        if (onUpdate) {
            onUpdate([...(evaluation || []), { type: 'Formativa', description: 'New evaluation' }]);
        }
    };

    const handleChange = (index: number, field: 'type' | 'description', value: string) => {
        if (onUpdate && evaluation) {
            const newList = [...evaluation];
            if (field === 'type') {
                newList[index] = { ...newList[index], type: value as 'Formativa' | 'Sumativa' };
            } else {
                newList[index] = { ...newList[index], description: value };
            }
            onUpdate(newList);
        }
    };

    const handleRemove = (index: number) => {
        if (onUpdate && evaluation) {
            const newList = evaluation.filter((_, i) => i !== index);
            onUpdate(newList);
        }
    };

    return (
        <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider justify-between">
                <span className="flex items-center gap-2"><BookOpen size={16} aria-hidden="true" /> {t.evaluation}</span>
                {isEditing && (
                    <button onClick={handleAdd} className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded hover:bg-purple-100">
                        {t.addEvaluation}
                    </button>
                )}
            </h4>
            <div className="space-y-2">
                {(evaluation || []).map((ev, i) => (
                    <div key={i} className="flex gap-3 text-sm items-start">
                        {isEditing ? (
                            <div className="flex-1 flex gap-2 items-start">
                                <select
                                    className="text-xs border border-slate-200 dark:border-slate-600 rounded px-2 py-1 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    value={ev.type}
                                    onChange={(e) => handleChange(i, 'type', e.target.value)}
                                >
                                    <option value="Formativa">{t.evaluationTypes.formative}</option>
                                    <option value="Sumativa">{t.evaluationTypes.summative}</option>
                                </select>
                                <input
                                    className="flex-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded px-2 py-1 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    value={ev.description}
                                    onChange={(e) => handleChange(i, 'description', e.target.value)}
                                />
                                <button
                                    onClick={() => handleRemove(i)}
                                    className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    aria-label="Remove evaluation"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <span className={clsx(
                                    "px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide shrink-0 mt-0.5 border",
                                    ev.type === 'Sumativa'
                                        ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
                                        : "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800"
                                )}>
                                    {ev.type === 'Sumativa' ? t.evaluationTypes.summative : t.evaluationTypes.formative}
                                </span>
                                <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{ev.description}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
