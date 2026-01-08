import React from 'react';
import { Activity } from 'lucide-react';

/**
 * Props for WeekActivities component.
 * @property {string} activities - Description of the week's activities.
 */
interface WeekActivitiesProps {
    activities: string;
}

/**
 * Component to display the activities description for a specific week.
 *
 * @component
 * @param {WeekActivitiesProps} props - Component props
 * @returns {React.ReactElement | null} The rendered activity block or null if empty.
 */
export const WeekActivities: React.FC<WeekActivitiesProps> = ({ activities }) => {
    if (!activities) return null;

    return (
        <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider">
                <Activity size={16} aria-hidden="true" /> Actividades
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
                {activities}
            </p>
        </div>
    );
};
