import { FileJson } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';

export const ExportJsonButton = () => {
    const { syllabus } = useEditMode();

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
            className="p-2 rounded-full text-slate-400 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 transition-colors"
            title="Download JSON"
            aria-label="Download JSON"
        >
            <FileJson size={20} />
        </button>
    );
};
