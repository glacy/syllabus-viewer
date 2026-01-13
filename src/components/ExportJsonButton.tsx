import { FileJson } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';

import clsx from 'clsx';
import { useLanguage } from '../context/LanguageContext';

/**
 * A button that triggers the export of the current syllabus data to a JSON file.
 * Useful for backing up data or transferring it to another instance.
 * 
 * @component
 */
export const ExportJsonButton = ({ showLabel = false }: { showLabel?: boolean }) => {
    const { syllabus } = useEditMode();
    const { t } = useLanguage();

    const handleExport = () => {
        const jsonString = JSON.stringify(syllabus, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const timestamp = new Date().toISOString().split('T')[0];
        const link = document.createElement('a');
        link.href = url;
        link.download = `syllabus_export_${timestamp}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <button
            onClick={handleExport}
            className={clsx(
                "rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center gap-2",
                showLabel
                    ? "p-2 px-3 w-full justify-start hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400 rounded-lg"
                    : "p-2 text-slate-400 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400"
            )}
            title={t.exportJson || "Download JSON"}
            aria-label={t.exportJson || "Download JSON"}
        >
            <FileJson size={20} />
            {showLabel && <span className="text-sm font-medium">{t.exportJson}</span>}
        </button>
    );
};
