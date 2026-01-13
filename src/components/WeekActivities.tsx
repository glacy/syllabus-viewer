import React from 'react';
import { Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Props for WeekActivities component.
 * @property {string} activities - Description of the week's activities.
 * @property {boolean} [isEditing] - Whether the component is in edit mode.
 * @property {function} [onUpdate] - Callback function to update activities.
 * @property {number} [weekId] - The ID/number of the week, used for generating unique form field IDs.
 */
interface WeekActivitiesProps {
    activities: string;
    isEditing?: boolean;
    onUpdate?: (newActivities: string) => void;
    weekId?: number;
}

/**
 * Component to display the activities description for a specific week.
 *
 * @component
 * @param {WeekActivitiesProps} props - Component props
 * @returns {React.ReactElement | null} The rendered activity block or null if empty.
 */
export const WeekActivities: React.FC<WeekActivitiesProps> = ({ activities, isEditing, onUpdate, weekId }) => {
    const { t } = useLanguage();
    if (!activities && !isEditing) return null;

    return (
        <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider">
                <Activity size={16} aria-hidden="true" /> {t.activities}
            </h4>
            {isEditing ? (
                <textarea
                    id={`week-${weekId}-activities`}
                    name={`week-${weekId}-activities`}
                    className="w-full min-h-[100px] text-sm text-slate-600 dark:text-slate-100 bg-amber-50 dark:bg-slate-700 p-3 rounded-lg border border-amber-100 dark:border-slate-600 focus:ring-2 focus:ring-amber-500"
                    value={activities}
                    onChange={(e) => onUpdate && onUpdate(e.target.value)}
                    placeholder="Describe the activities for this week..."
                />
            ) : (
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
                    {activities}
                </p>
            )}
        </div>
    );
};
