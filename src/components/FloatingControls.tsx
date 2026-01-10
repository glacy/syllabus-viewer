import { ThemeToggle } from './ThemeToggle';
import { EditToggle } from './EditToggle';
import { ExportExcelButton } from './ExportExcelButton';
import { ExportJsonButton } from './ExportJsonButton';

export const FloatingControls = () => {
    return (
        <div className="fixed right-4 top-4 z-50 flex gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
            <ExportExcelButton />
            <ExportJsonButton />
            <EditToggle />
            <ThemeToggle />
        </div>
    );
};
