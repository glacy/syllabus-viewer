import { Edit } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';
import { useLanguage } from '../context/LanguageContext';

/**
 * A toggle button to switch between View Mode and Edit Mode.
 * 
 * @component
 */
export const EditToggle = () => {
    const { isEditing, toggleEditMode } = useEditMode();
    const { t } = useLanguage();

    return (
        <button
            onClick={toggleEditMode}
            className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${isEditing ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200'}`}
            title={t.editMode}
        >
            <Edit size={20} />
        </button>
    );
};
