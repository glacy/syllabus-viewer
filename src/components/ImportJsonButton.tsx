import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';
import { useLanguage } from '../context/LanguageContext';
import type { SyllabusData } from '../types';
import { SyllabusDataSchema } from '../schemas';
import { z } from 'zod';
import { ConfirmationModal } from './ConfirmationModal';

import clsx from 'clsx';

/**
 * A button that allows users to import a syllabus JSON file.
 * Validates the file structure using Zod schemas before importing.
 * 
 * @component
 */
export const ImportJsonButton = ({ showLabel = false }: { showLabel?: boolean }) => {
    const { setSyllabus } = useEditMode();
    const { t } = useLanguage();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [pendingData, setPendingData] = useState<SyllabusData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        // ... (rest of logic same) ...
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target?.result as string;
                const rawData = JSON.parse(content);

                // Zod Validation
                try {
                    const data = SyllabusDataSchema.parse(rawData);
                    setPendingData(data as SyllabusData);
                    setIsModalOpen(true);
                } catch (zodError) {
                    console.error("Zod Validation Error", zodError);
                    if (zodError instanceof z.ZodError) {
                        const messages = (zodError as z.ZodError<any>).issues.map((e: z.ZodIssue) => `${e.path.join('.')}: ${e.message}`).join(', ');
                        alert(`Validation failed:\n${messages}`);
                    } else {
                        alert(t.uploadError || "Invalid JSON structure");
                    }
                }

            } catch (err) {
                console.error("Failed to parse JSON", err);
                alert(t.uploadError || "Failed to parse JSON file");
            } finally {
                // Reset input so same file can be selected again
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            }
        };
        reader.readAsText(file);
    };

    const handleConfirmImport = () => {
        if (pendingData) {
            setSyllabus(pendingData);
            setPendingData(null);
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <input
                type="file"
                id="import-json-file"
                name="importJsonFile"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept=".json"
                className="hidden"
            />
            <button
                onClick={() => fileInputRef.current?.click()}
                className={clsx(
                    "rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center gap-2",
                    showLabel
                        ? "p-2 px-3 w-full justify-start hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 rounded-lg"
                        : "p-2 text-slate-400 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                )}
                title={t.importJson || "Upload JSON"}
                aria-label={t.importJson || "Upload JSON"}
            >
                <Upload size={20} />
                {showLabel && <span className="text-sm font-medium">{t.importJson}</span>}
            </button>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setPendingData(null);
                }}
                onConfirm={handleConfirmImport}
                title={t.importJson || "Import Syllabus"}
                message={t.confirmImport.replace('{title}', pendingData?.metadata.title || 'Unknown')}
                confirmText={t.confirm || "Confirm"}
                cancelText={t.cancel || "Cancel"}
                isDestructive
            />
        </>
    );
};
