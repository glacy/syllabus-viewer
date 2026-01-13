import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';
import { useLanguage } from '../context/LanguageContext';
import { ConfirmationModal } from './ConfirmationModal';
import clsx from 'clsx';

/**
 * A button that resets the syllabus data to the default state (from 'planeamiento.json').
 * Requires user confirmation before action.
 * 
 * @component
 */
export const ResetButton = ({ showLabel = false }: { showLabel?: boolean }) => {
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
                className={clsx(
                    "rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center gap-2",
                    showLabel
                        ? "p-2 px-3 w-full justify-start hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400 rounded-lg"
                        : "p-2 text-slate-400 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
                )}
                title={t.resetData || "Reset to Default"}
                aria-label={t.resetData || "Reset to Default"}
            >
                <RotateCcw size={20} />
                {showLabel && <span className="text-sm font-medium">{t.resetData}</span>}
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
