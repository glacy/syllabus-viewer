import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

/**
 * Props for WeekObjectives component.
 * @property {string[]} objectives - List of learning objectives. Can be strings or key-value objects.
 */
interface WeekObjectivesProps {
    objectives: string[];
    isEditing?: boolean;
    onUpdate?: (newObjectives: string[]) => void;
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
export const WeekObjectives: React.FC<WeekObjectivesProps> = ({ objectives, isEditing, onUpdate }) => {
    if ((!objectives || objectives.length === 0) && !isEditing) return null;

    const handleAdd = () => {
        if (onUpdate) {
            onUpdate([...(objectives || []), "New objective"]);
        }
    };

    const handleChange = (index: number, val: string) => {
        if (onUpdate && objectives) {
            const newObj = [...objectives];
            newObj[index] = val; // Assuming string for simplicity in edit mode
            onUpdate(newObj);
        }
    };

    const handleRemove = (index: number) => {
        if (onUpdate && objectives) {
            const newObj = objectives.filter((_, i) => i !== index);
            onUpdate(newObj);
        }
    };

    return (
        <div className="space-y-3 mt-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider justify-between">
                <span className="flex items-center gap-2"><Target size={16} aria-hidden="true" /> Objectives</span>
                {isEditing && (
                    <button onClick={handleAdd} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-100">
                        + Add
                    </button>
                )}
            </h4>
            <ul className="space-y-2">
                {(objectives || []).map((obj, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm items-start">
                        <CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" aria-hidden="true" />
                        {isEditing ? (
                            <div className="flex-1 flex gap-2">
                                <input
                                    className="flex-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded px-2 py-1 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={typeof obj === 'string' ? obj : JSON.stringify(obj)}
                                    onChange={(e) => handleChange(i, e.target.value)}
                                />
                                <button onClick={() => handleRemove(i)} className="text-red-400 hover:text-red-600">
                                    &times;
                                </button>
                            </div>
                        ) : (
                            <span>
                                {typeof obj === 'string'
                                    ? obj
                                    : Object.entries(obj).map(([k, v]) => `${k}: ${v}`).join(', ')}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
