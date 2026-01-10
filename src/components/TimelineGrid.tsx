import React from 'react';
import { WeekCard } from './WeekCard';
import { Plus } from 'lucide-react';
import type { SyllabusEntry } from '../types';
import { useEditMode } from '../context/EditModeContext';

interface TimelineGridProps {
    filteredData: SyllabusEntry[];
    filter: string;
}

/**
 * TimelineGrid component to display list of WeekCards.
 * Handles empty state when no results are found.
 *
 * @component
 * @param {TimelineGridProps} props - Component props
 * @param {SyllabusEntry[]} props.filteredData - Array of syllabus entries to display
 * @param {string} props.filter - The current filter term (for empty state message)
 */
export const TimelineGrid: React.FC<TimelineGridProps> = ({ filteredData, filter }) => {
    const { isEditing, addWeek } = useEditMode();
    return (
        <div className="grid gap-6">
            {filteredData.map((entry) => (
                <WeekCard key={entry.week} entry={entry} />
            ))}

            {filteredData.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    No results found for "{filter}"
                </div>
            )}

            {isEditing && (
                <button
                    onClick={addWeek}
                    className="w-full py-4 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-500 hover:border-indigo-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                    <Plus size={20} />
                    Add Week
                </button>
            )}
        </div>
    );
};
