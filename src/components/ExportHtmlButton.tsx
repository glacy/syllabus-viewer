import { FileCode } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import type { SyllabusEntry } from '../types';

import clsx from 'clsx';

/**
 * A button that triggers the export of the current syllabus data to a standalone HTML file.
 * The exported file uses a Tailwind CSS CDN for styling and includes all syllabus content.
 * It detects the current theme using `ThemeContext` (`isDark`) to render the HTML with the appropriate dark/light classes.
 * 
 * @component
 */
export const ExportHtmlButton = ({ showLabel = false }: { showLabel?: boolean }) => {
    const { syllabus } = useEditMode();
    const { t, language } = useLanguage();
    const { isDark } = useTheme();

    const handleExport = () => {
        const { metadata, weeks, config } = syllabus;
        const unitLabel = config?.unitLabel || t.week;

        const htmlContent = `
<!DOCTYPE html>
<html lang="${language}" class="${isDark ? 'dark' : ''}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${metadata.title} - Syllabus</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        slate: {
                            800: '#1e293b',
                            900: '#0f172a',
                            950: '#020617',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div class="max-w-4xl mx-auto space-y-8">
        <!-- Header -->
        <header class="text-center space-y-4">
            <h1 class="text-4xl font-bold text-indigo-900 dark:text-indigo-400">${metadata.title}</h1>
            <h2 class="text-2xl font-medium text-gray-600 dark:text-gray-300">${metadata.semester}</h2>
            <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">${metadata.description}</p>
        </header>

        <!-- Timeline -->
        <div class="space-y-6">
            ${weeks.map((week: SyllabusEntry) => `
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden text-left">
                <div class="p-6">
                    <div class="flex flex-col sm:flex-row gap-4 items-start">
                        <!-- Week Number -->
                        <div class="flex flex-col items-center justify-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 w-16 h-16 rounded-lg font-bold shrink-0 border border-transparent dark:border-indigo-500/20">
                            <span class="text-xs uppercase tracking-wider text-indigo-400 dark:text-indigo-400">${unitLabel}</span>
                            <span class="text-2xl">${week.week}</span>
                        </div>
                        
                        <!-- Content -->
                        <div class="flex-1 space-y-4 w-full">
                            <div>
                                <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">${week.title || week.content[0] || ''}</h3>
                                ${week.subtitle ? `<h4 class="text-md font-medium text-indigo-600 dark:text-indigo-400 mt-1">${week.subtitle}</h4>` : ''}
                                ${!week.title && week.content.length > 1 ? `
                                <div class="flex flex-wrap gap-2 mt-2">
                                    ${week.content.slice(1).map(topic => `<span class="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full border border-gray-200 dark:border-slate-600">${topic}</span>`).join('')}
                                </div>` : ''}
                            </div>

                            <!-- Sections -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-slate-700">
                                ${week.objectives && week.objectives.length > 0 ? `
                                <div>
                                    <h5 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">${t.objectives}</h5>
                                    <ul class="list-disc list-inside text-base text-gray-800 dark:text-gray-200 space-y-1">
                                        ${week.objectives.map(obj => `<li>${typeof obj === 'string' ? obj : JSON.stringify(obj)}</li>`).join('')}
                                    </ul>
                                </div>` : ''}

                                ${week.activities && week.activities.length > 0 ? `
                                <div>
                                    <h5 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">${t.activities}</h5>
                                    <p class="text-base text-gray-800 dark:text-gray-200 whitespace-pre-wrap">${week.activities}</p>
                                </div>` : ''}
                            </div>

                            ${(week.evaluation && week.evaluation.length > 0) || (week.references && week.references.length > 0) ? `
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-slate-700">
                                ${week.evaluation && week.evaluation.length > 0 ? `
                                <div>
                                    <h5 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">${t.evaluation}</h5>
                                    <ul class="space-y-2">
                                        ${week.evaluation.map(ev => `
                                        <li class="bg-gray-50 dark:bg-slate-700/50 p-2 rounded text-base">
                                            <span class="font-medium text-indigo-700 dark:text-indigo-300 block text-xs uppercase">${ev.type}</span>
                                            <span class="text-gray-800 dark:text-gray-200">${ev.description}</span>
                                            ${(ev as any).percentage ? `<span class="text-sm text-gray-600 dark:text-gray-400 block mt-1">Value: ${(ev as any).percentage}%</span>` : ''}
                                        </li>`).join('')}
                                    </ul>
                                </div>` : ''}
                                
                                ${week.references && week.references.length > 0 ? `
                                <div>
                                    <h5 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">${t.references}</h5>
                                    <ul class="space-y-2">
                                        ${Array.isArray(week.references) ? week.references.map(ref => `
                                        <li class="text-base text-gray-800 dark:text-gray-200 pl-2 border-l-2 border-indigo-200 dark:border-indigo-800">
                                            ${typeof ref === 'string' ? ref : `${ref.text} ${ref.pages ? `<span class="text-gray-500 dark:text-gray-400 text-sm ml-1">(${ref.pages})</span>` : ''}`}
                                        </li>`).join('') : `<li class="text-base text-gray-800 dark:text-gray-200">${week.references}</li>`}
                                    </ul>
                                </div>` : ''}
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            </div>`).join('')}
        </div>

        <!-- Footer -->
        <footer class="text-center text-gray-400 dark:text-gray-500 text-sm pb-8 border-t border-gray-200 dark:border-slate-800 pt-8">
            <p>&copy; ${new Date().getFullYear()} ${metadata.university}</p>
            <p class="mt-2 text-xs">Generated by Syllabus Viewer</p>
        </footer>
    </div>
</body>
</html>`;

        const blob = new Blob([htmlContent], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const timestamp = new Date().toISOString().split('T')[0];
        const link = document.createElement('a');
        link.href = url;
        link.download = `syllabus_export_${timestamp}.html`;
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
                    ? "p-2 px-3 w-full justify-start hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400 rounded-lg"
                    : "p-2 text-slate-400 hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400"
            )}
            title="Download HTML"
            aria-label="Download HTML"
        >
            <FileCode size={20} />
            {showLabel && <span className="text-sm font-medium">{t.exportHtml}</span>}
        </button>
    );
};
