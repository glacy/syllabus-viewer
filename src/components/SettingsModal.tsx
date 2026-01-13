import React from 'react';
import { X, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEditMode } from '../context/EditModeContext';

/**
 * Props for the SettingsModal component.
 * @property {boolean} isOpen - Whether the modal is currently visible.
 * @property {() => void} onClose - Callback function to close the modal.
 */
interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * A modal component for configuring application settings.
 * Allows modifying global configurations like the Unit Label (e.g., "Week", "Session").
 *
 * @component
 * @param {SettingsModalProps} props - The component props.
 * @returns {React.ReactElement | null} The rendered modal or null if not open.
 */

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const { syllabus, updateConfig } = useEditMode();

    if (!isOpen) return null;



    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <Settings className="text-indigo-500" />
                        {t.settings}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {t.unitLabel}
                        </label>
                        <input
                            type="text"
                            value={syllabus.config?.unitLabel || ''}
                            onChange={(e) => updateConfig({ unitLabel: e.target.value })}
                            placeholder={t.unitLabelPlaceholder}
                            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        />
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {t.unitLabelHelp}
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                        {t.close}
                    </button>
                </div>
            </div>
        </div>
    );
};
