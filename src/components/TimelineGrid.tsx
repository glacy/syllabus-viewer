import React from 'react';

import { Plus } from 'lucide-react';
import type { SyllabusEntry } from '../types';
import { useEditMode } from '../context/EditModeContext';
import { useLanguage } from '../context/LanguageContext';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent
} from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { SortableWeekCard } from './SortableWeekCard';

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
    const { isEditing, addWeek, reorderWeeks } = useEditMode();
    const { t } = useLanguage();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            // Find indices based on the ID we passed (week number string)
            // But wait, our IDs must be present in the filteredData?
            // If we are filtering, drag/drop might be weird if we don't see all items.
            // Usually sortable is disabled when filtering, or works on the filtered view but that implies reordering the projection.
            // But reorderWeeks expects indices in the FULL list.
            // Let's rely on finding index in the filtered list IF filter is empty.
            // If filter is active, we should probably DISABLE sorting because indices won't match.

            if (filter) return; // Disable reordering when filtered

            const oldIndex = filteredData.findIndex((item) => `week-${item.week}` === active.id);
            const newIndex = filteredData.findIndex((item) => `week-${item.week}` === over?.id);

            reorderWeeks(oldIndex, newIndex);
        }
    };

    return (
        <div className="space-y-6">
            <div className="w-full flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-[3.25rem] before:w-0.5 before:-z-10 before:bg-gradient-to-b before:from-indigo-100 before:via-indigo-100 before:to-transparent dark:before:from-indigo-900/20 dark:before:via-indigo-900/20">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={filteredData.map(d => `week-${d.week}`)}
                        strategy={verticalListSortingStrategy}
                        disabled={!!filter} // Disable sorting when filtering
                    >
                        {filteredData.map((entry) => (
                            <SortableWeekCard
                                key={`week-${entry.week}`}
                                id={`week-${entry.week}`}
                                entry={entry}
                                isEditing={isEditing && !filter} // Hide handle if filtered
                            />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>

            {isEditing && !filter && (
                <button
                    onClick={addWeek}
                    className="w-full py-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                    <Plus size={20} />
                    {t.addWeek}
                </button>
            )}
        </div>
    );
};
