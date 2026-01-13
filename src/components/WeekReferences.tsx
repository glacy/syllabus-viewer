import React from 'react';
import { Library, X } from 'lucide-react';
import type { SyllabusEntry } from '../types';
import { useLanguage } from '../context/LanguageContext';

/**
 * Props for WeekReferences component.
 * @property {SyllabusEntry['references']} references - Bibliographic references.
 */
interface WeekReferencesProps {
    references: SyllabusEntry['references'];
    isEditing?: boolean;
    onUpdate?: (newReferences: { text: string; pages?: string }[]) => void;
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
export const WeekReferences: React.FC<WeekReferencesProps> = ({ references, isEditing, onUpdate }) => {
    const { t } = useLanguage();
    const isEmpty = !references || (Array.isArray(references) && references.length === 0) || (typeof references === 'string' && references.trim() === '');
    if (isEmpty && !isEditing) return null;

    // Normalize to array for easier handling
    const list = Array.isArray(references) ? references : (references ? [{ text: references }] : []);

    const handleAdd = () => {
        if (onUpdate) {
            onUpdate([...list, { text: t.defaultNewReference }]);
        }
    };

    const handleChange = (index: number, field: 'text' | 'pages', value: string) => {
        if (onUpdate) {
            const newList = [...list];
            newList[index] = { ...newList[index], [field]: value };
            onUpdate(newList);
        }
    };

    const handleRemove = (index: number) => {
        if (onUpdate) {
            const newList = list.filter((_, i) => i !== index);
            onUpdate(newList);
        }
    };

    return (
        <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider justify-between">
                <span className="flex items-center gap-2"><Library size={16} aria-hidden="true" /> {t.references}</span>
                {isEditing && (
                    <button onClick={handleAdd} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded hover:bg-slate-200">
                        {t.addReference}
                    </button>
                )}
            </h4>

            {(list.length > 0 || isEditing) && (
                <div className="space-y-2 pl-6">
                    {list.map((ref, i) => (
                        <div key={i} className="text-sm text-slate-600 dark:text-slate-300">
                            {isEditing ? (
                                <div className="flex gap-2 items-start">
                                    <div className="flex-1 space-y-1">
                                        <input
                                            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded px-2 py-1 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                                            value={ref.text}
                                            onChange={(e) => handleChange(i, 'text', e.target.value)}
                                            onBlur={() => {
                                                if (!ref.text.trim()) {
                                                    handleRemove(i);
                                                }
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Backspace' && !ref.text) {
                                                    e.preventDefault();
                                                    handleRemove(i);
                                                }
                                            }}
                                            placeholder="Reference text..."
                                        />
                                        <input
                                            className="w-1/3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded px-2 py-1 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                                            value={ref.pages || ''}
                                            onChange={(e) => handleChange(i, 'pages', e.target.value)}
                                            placeholder="Pages (optional)"
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleRemove(i)}
                                        className="mt-1 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        aria-label="Remove reference"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : (
                                <p className=" leading-relaxed">
                                    {ref.text}
                                    {ref.pages && (
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                                            {ref.pages}
                                        </span>
                                    )}
                                </p>
                            )}
                        </div>
                    ))}
                    {isEditing && list.length === 0 && (
                        <p className="text-xs text-slate-400 italic">No references added yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};
