import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Keyboard, Command, CornerDownLeft, ArrowLeftRight, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ShortcutsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * A modal component that displays a list of available keyboard shortcuts.
 * Rendered using a React Portal.
 *
 * @component
 */
export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const shortcuts = [
        {
            icon: <HelpCircle size={18} />,
            key: "?",
            label: t.shortcuts.openShortcuts
        },
        {
            icon: <Command size={18} />,
            key: "Ctrl + Shift + E",
            label: t.shortcuts.editMode
        },
        {
            icon: <Command size={18} />,
            key: "Ctrl + Shift + L",
            label: t.shortcuts.theme
        },
        {
            icon: <CornerDownLeft size={18} />,
            key: "Enter / Space",
            label: t.shortcuts.toggleWeeks
        },
        {
            icon: <ArrowLeftRight size={18} />,
            key: "Tab / Shift+Tab",
            label: t.shortcuts.navigation
        },
        {
            icon: <X size={18} />,
            key: "Esc",
            label: t.shortcuts.closeModals
        }
    ];

    return createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md p-6 border border-slate-200 dark:border-slate-700 transform transition-all">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                        <Keyboard className="text-indigo-500" />
                        {t.shortcuts.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    {shortcuts.map((shortcut, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                <span className="text-slate-400 dark:text-slate-500">{shortcut.icon}</span>
                                <span className="font-medium">{shortcut.label}</span>
                            </div>
                            <kbd className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-xs font-mono text-slate-500 dark:text-slate-400 font-bold shadow-sm">
                                {shortcut.key}
                            </kbd>
                        </div>
                    ))}
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
        </div>,
        document.body
    );
};
