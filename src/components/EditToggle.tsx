import { Edit } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';

export const EditToggle = () => {
    const { isEditing, toggleEditMode } = useEditMode();

    return (
        <button
            onClick={toggleEditMode}
            className={`p-2 rounded-full transition-colors ${isEditing ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200'}`}
            title={isEditing ? "Exit Edit Mode" : "Enter Edit Mode"}
        >
            <Edit size={20} />
        </button>
    );
};
