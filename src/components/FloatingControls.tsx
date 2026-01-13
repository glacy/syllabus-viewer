import { useState, useEffect } from 'react';
import { Menu, X, Settings, Keyboard } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { EditToggle } from './EditToggle';
import { ExportExcelButton } from './ExportExcelButton';
import { ExportJsonButton } from './ExportJsonButton';
import { ExportHtmlButton } from './ExportHtmlButton';
import { ImportJsonButton } from './ImportJsonButton';
import { ResetButton } from './ResetButton';

import { SettingsModal } from './SettingsModal';
import { ShortcutsModal } from './ShortcutsModal';
import { useEditMode } from '../context/EditModeContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * A responsive container for floating action buttons.
 * 
 * @component
 * @description
 * Renders a set of control buttons (Import, Export, Theme, Language, etc.).
 * - On **Desktop**: Displays as a horizontal row, always visible.
 * - On **Mobile**: Displays as a toggleable button that expands into a vertical menu.
 */
export const FloatingControls = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
    const { isEditing } = useEditMode();
    const { toggleTheme } = useTheme();

    // Toggle shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if user is typing in an input or textarea
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }
            // ? -> Toggle Help
            if (e.key === '?') {
                setIsShortcutsOpen(prev => !prev);
            }
            // Ctrl + Shift + L -> Toggle Theme
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
                toggleTheme();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleTheme]);

    /**
     * Renders the list of control buttons.
     * @param {Object} props
     * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - Layout direction for the divider.
     */
    const ControlsList = ({ orientation = 'horizontal' }: { orientation?: 'horizontal' | 'vertical' }) => {
        const showLabel = orientation === 'vertical';
        const { t } = useLanguage(); // Need translations here for inline buttons if not present

        return (
            <>
                <ResetButton showLabel={showLabel} />
                <ImportJsonButton showLabel={showLabel} />
                <ExportExcelButton showLabel={showLabel} />
                <ExportJsonButton showLabel={showLabel} />
                <ExportHtmlButton showLabel={showLabel} />
                <div className={clsx(
                    "bg-slate-200 dark:bg-slate-700 mx-1",
                    orientation === 'horizontal' ? "w-px h-6" : "h-px w-full my-1"
                )}></div>

                <button
                    onClick={() => setIsShortcutsOpen(true)}
                    className={clsx(
                        "transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center gap-2",
                        showLabel
                            ? "p-2 px-3 w-full justify-start hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 rounded-lg"
                            : "p-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                    )}
                    title={t.shortcuts.title}
                >
                    <Keyboard size={20} />
                    {showLabel && <span className="text-sm font-medium">{t.shortcuts.title}</span>}
                </button>
                {isEditing && (
                    <button
                        onClick={() => setIsSettingsOpen(true)}
                        className={clsx(
                            "transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center gap-2",
                            showLabel
                                ? "p-2 px-3 w-full justify-start hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 rounded-lg"
                                : "p-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                        )}
                        title={t.settings}
                    >
                        <Settings size={20} />
                        {showLabel && <span className="text-sm font-medium">{t.settings}</span>}
                    </button>
                )}
                <EditToggle showLabel={showLabel} />
                <ThemeToggle showLabel={showLabel} />
            </>
        );
    };

    return (
        <>
            <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-2">
                {/* Desktop View: Always visible, horizontal row */}
                <div className="hidden md:flex flex-row items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
                    <ControlsList orientation="horizontal" />
                </div>

                {/* Mobile View: Toggle Button + Collapsible Menu */}
                <div className="md:hidden flex flex-col items-end gap-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95 transition-all"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -10, originY: 0, originX: 1 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col items-stretch gap-1 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 min-w-[200px]"
                            >
                                <ControlsList orientation="vertical" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
            <ShortcutsModal isOpen={isShortcutsOpen} onClose={() => setIsShortcutsOpen(false)} />
        </>
    );
};
