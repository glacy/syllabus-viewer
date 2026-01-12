import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { WeekCard } from './WeekCard';
import { GripVertical } from 'lucide-react';
import type { SyllabusEntry } from '../types';

interface SortableWeekCardProps {
    id: string;
    entry: SyllabusEntry;
    isEditing: boolean;
}

import { useLanguage } from '../context/LanguageContext';

export const SortableWeekCard: React.FC<SortableWeekCardProps> = ({ id, entry, isEditing }) => {
    const { t } = useLanguage();
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
        zIndex: isDragging ? 50 : 'auto',
        position: 'relative' as const,
    };

    return (
        <div ref={setNodeRef} style={style} className="relative group/sortable">
            {isEditing && (
                <div
                    {...attributes}
                    {...listeners}
                    className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-4 z-20 p-2 cursor-grab active:cursor-grabbing text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 opacity-100 sm:opacity-0 sm:group-hover/sortable:opacity-100 transition-opacity bg-white/80 dark:bg-slate-800/80 rounded-lg backdrop-blur-sm shadow-sm border border-slate-200 dark:border-slate-700"
                    aria-label={t.dragToReorder}
                    title={t.dragToReorder}
                >
                    <GripVertical size={24} />
                </div>
            )}
            <WeekCard entry={entry} />
        </div>
    );
};
