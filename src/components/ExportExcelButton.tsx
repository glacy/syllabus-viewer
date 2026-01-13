import { FileSpreadsheet } from 'lucide-react';
import * as XLSX from 'xlsx';
import { useEditMode } from '../context/EditModeContext';
import type { SyllabusEntry } from '../types';

import clsx from 'clsx';
import { useLanguage } from '../context/LanguageContext';

/**
 * A button that triggers the export of the current syllabus data to an Excel (.xlsx) file.
 * Includes both metadata and syllabus content sheets.
 * 
 * @component
 */
export const ExportExcelButton = ({ showLabel = false }: { showLabel?: boolean }) => {
    const { syllabus } = useEditMode();
    const { t } = useLanguage();

    const handleExport = () => {
        // ... (export logic remains same) ...
        // 1. Prepare Metadata Sheet
        const metadataRows = [
            ["Field", "Value"],
            ["Course Title", syllabus.metadata.title],
            ["Semester", syllabus.metadata.semester],
            ["University/Copyright", syllabus.metadata.university],
            ["Description", syllabus.metadata.description],
            ["Authors", syllabus.metadata.authors.join(", ")]
        ];
        const metadataSheet = XLSX.utils.aoa_to_sheet(metadataRows);

        // 2. Prepare Syllabus Sheet
        const syllabusData = syllabus.weeks.map((week: SyllabusEntry) => {
            // Flatten the references if it's an array of objects
            const references = Array.isArray(week.references)
                ? week.references.map(ref => typeof ref === 'string' ? ref : `${ref.text} ${ref.pages ? `(${ref.pages})` : ''}`).join('\n')
                : week.references;

            // Flatten evaluation
            const evaluation = week.evaluation.map(e => `[${e.type}] ${e.description}`).join('\n');

            return {
                Week: week.week,
                Title: week.title,
                Subtitle: week.subtitle,
                Content: week.content.join('\n'),
                Objectives: week.objectives.join('\n'),
                Activities: week.activities,
                Evaluation: evaluation,
                References: references
            };
        });
        const syllabusSheet = XLSX.utils.json_to_sheet(syllabusData);

        // 3. Create Workbook
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, metadataSheet, "Metadata");
        XLSX.utils.book_append_sheet(workbook, syllabusSheet, "Syllabus");

        // 4. Download
        const timestamp = new Date().toISOString().split('T')[0];
        XLSX.writeFile(workbook, `syllabus_export_${timestamp}.xlsx`);
    };

    return (
        <button
            onClick={handleExport}
            className={clsx(
                "rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center gap-2",
                showLabel
                    ? "p-2 px-3 w-full justify-start hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 hover:text-green-600 dark:text-slate-300 dark:hover:text-green-400 rounded-lg"
                    : "p-2 text-slate-400 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400"
            )}
            title={t.exportExcel || "Download Excel (.xlsx)"}
            aria-label={t.exportExcel || "Download Excel"}
        >
            <FileSpreadsheet size={20} />
            {showLabel && <span className="text-sm font-medium">{t.exportExcel}</span>}
        </button>
    );
};
