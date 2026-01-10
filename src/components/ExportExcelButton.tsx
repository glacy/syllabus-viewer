import { FileSpreadsheet } from 'lucide-react';
import * as XLSX from 'xlsx';
import { useEditMode } from '../context/EditModeContext';
import type { SyllabusEntry } from '../types';

export const ExportExcelButton = () => {
    const { syllabus } = useEditMode();

    const handleExport = () => {
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
            className="p-2 rounded-full text-slate-400 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors"
            title="Download Excel (.xlsx)"
            aria-label="Download Excel"
        >
            <FileSpreadsheet size={20} />
        </button>
    );
};
