import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import clsx from 'clsx';

/**
 * Props for the ConfirmationModal component.
 * @property {boolean} isOpen - Whether the modal is currently visible.
 * @property {() => void} onClose - Callback function to close the modal.
 * @property {() => void} onConfirm - Callback function when the user confirms the action.
 * @property {string} [title] - Optional title for the modal. Defaults to 'Confirm' or 'Delete'.
 * @property {string} message - The main message body of the modal.
 * @property {string} [confirmText] - Optional text for the confirm button.
 * @property {string} [cancelText] - Optional text for the cancel button.
 * @property {boolean} [isDestructive] - If true, styles the confirm button as destructive (red).
 */
interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isDestructive?: boolean;
}

/**
 * A reusable modal component for confirming user actions.
 * Supports destructive styles and keyboard navigation (Escape to close).
 * Uses React Portal to render at the document root, ensuring correct positioning.
 *
 * @component
 * @param {ConfirmationModalProps} props - The component props.
 * @returns {React.ReactElement | null} The rendered modal or null if not open.
 */

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText,
    cancelText,
    isDestructive = false,
}) => {
    const { t } = useLanguage();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'Enter') {
                e.preventDefault();
                onConfirm();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onConfirm]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-sm p-6 border border-slate-200 dark:border-slate-700 transform transition-all scale-100 opacity-100">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
                        {isDestructive && (
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                                <AlertTriangle size={24} />
                            </div>
                        )}
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            {title || (isDestructive ? 'Delete' : 'Confirm')}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-8">
                    {message}
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors"
                    >
                        {cancelText || t.close}
                    </button>
                    <button
                        onClick={onConfirm}
                        className={clsx(
                            "px-4 py-2 text-white rounded-lg font-medium transition-colors shadow-sm",
                            isDestructive
                                ? "bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                                : "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                        )}
                    >
                        {confirmText || 'Confirm'}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};
