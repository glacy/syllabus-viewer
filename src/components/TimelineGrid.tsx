import React from 'react';
import { WeekCard } from './WeekCard';
import type { SyllabusEntry } from '../types';

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
    return (
        <div className="grid gap-6">
            {filteredData.map((entry) => (
                <WeekCard key={entry.week} entry={entry} />
            ))}

            {filteredData.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    No se encontraron resultados para "{filter}"
                </div>
            )}
        </div>
    );
};
