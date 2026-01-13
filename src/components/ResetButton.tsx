import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';
import { useLanguage } from '../context/LanguageContext';
import { ConfirmationModal } from './ConfirmationModal';

/**
 * A button that resets the syllabus data to the default state (from 'planeamiento.json').
 * Requires user confirmation before action.
 * 
 * @component
 */
export const ResetButton = () => {
    const { resetSyllabus } = useEditMode();
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleConfirm = () => {
        resetSyllabus();
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="p-2 rounded-full text-slate-400 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                title={t.resetData || "Reset to Default"}
                aria-label={t.resetData || "Reset to Default"}
            >
                <RotateCcw size={20} />
            </button>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
                title={t.resetData}
                message={t.confirmReset || "Are you sure you want to reset all data to defaults? This cannot be undone."}
                confirmText={t.confirm || "Confirm"}
                cancelText={t.cancel || "Cancel"}
                isDestructive
            />
        </>
    );
};
