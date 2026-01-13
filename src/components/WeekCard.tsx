import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Trash2, X, Plus } from 'lucide-react';
import type { SyllabusEntry } from '../types';
import clsx from 'clsx';
import { useEditMode } from '../context/EditModeContext';
import { WeekObjectives } from './WeekObjectives';
import { WeekActivities } from './WeekActivities';
import { WeekEvaluation } from './WeekEvaluation';
import { WeekReferences } from './WeekReferences';
import { ConfirmationModal } from './ConfirmationModal';

/**
 * Props for the WeekCard component.
 * @property {SyllabusEntry} entry - The syllabus data entry for a specific week.
 */
interface WeekCardProps {
    entry: SyllabusEntry;
}

/**
 * A collapsible card component that displays summary and detailed information for a course week.
 *
 * @component
 * @description
 * Renders a card with the week number, title, and initial topics.
 * Can be expanded to show detailed learning objectives, activities, and evaluation methods.
 * Handles diverse data types (strings or objects) in objectives for robustness.
 *
 * @param {WeekCardProps} props - The component props.
 * @returns {React.ReactElement} The rendered card component.
 */
export const WeekCard: React.FC<WeekCardProps> = ({ entry }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [newTopic, setNewTopic] = useState('');
    const { isEditing, updateWeek, removeWeek, moveWeek, syllabus } = useEditMode();
    const { t } = useLanguage();

    const unitLabel = syllabus.config?.unitLabel || t.week;

    const handleAddTopic = () => {
        if (newTopic.trim()) {
            updateWeek(entry.week, { ...entry, content: [...(entry.content || []), newTopic.trim()] });
            setNewTopic('');
        }
    };

    // Use explicit title fields, or fallback
    const title = isEditing ? (entry.title || '') : (entry.title || (entry.content.length > 0 ? entry.content[0] : `${unitLabel} ${entry.week} `));
    // If title is explicit, content[0] might still be content. But for the viewer we assume title is separate now.
    // If we are using the new schema, 'entry.content' are just list items.
    // However, if we are in Legacy mode where content[0] WAS the title, we should handle that.
    // For this Edit Mode implementation, let's assume we are migrating to explicit Title field usage.

    // In edit mode, we want to allow editing the 'content' array.

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateWeek(entry.week, { ...entry, title: e.target.value });
    };

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        removeWeek(entry.week);
        setIsDeleteModalOpen(false);
    };

    const handleObjectivesUpdate = (newObjectives: string[]) => {
        updateWeek(entry.week, { ...entry, objectives: newObjectives });
    };

    const handleActivitiesUpdate = (newActivities: string) => {
        updateWeek(entry.week, { ...entry, activities: newActivities });
    };

    const handleEvaluationUpdate = (newEvaluation: SyllabusEntry['evaluation']) => {
        updateWeek(entry.week, { ...entry, evaluation: newEvaluation });
    };

    const handleReferencesUpdate = (newReferences: { text: string; pages?: string }[]) => {
        updateWeek(entry.week, { ...entry, references: newReferences });
    };

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                    "bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors duration-300",
                    isExpanded ? "ring-2 ring-indigo-500/20 shadow-md" : "hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50"
                )}
            >
                <div
                    className={clsx(
                        "w-full text-left p-6 gap-4 flex flex-col sm:flex-row items-start justify-between focus:outline-none transition-all duration-200",
                        "rounded-xl"
                    )}
                >
                    <div
                        className="flex gap-4 w-full sm:flex-1 cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setIsExpanded(!isExpanded);
                            }
                        }}
                    >
                        <div className="flex flex-col items-center justify-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 w-16 h-16 rounded-lg font-bold shrink-0 border border-transparent dark:border-indigo-500/20">
                            <span className="text-xs uppercase tracking-wider text-indigo-400 dark:text-indigo-400">{unitLabel}</span>
                            <span className="text-2xl">{entry.week}</span>
                        </div>
                        <div className="flex-1">
                            {isEditing ? (
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={handleTitleChange}
                                        className="w-full text-lg font-bold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-700 border-none rounded px-2 py-1 focus:ring-2 focus:ring-indigo-500"
                                        placeholder={t.sessionTitle}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {(entry.content || []).map((topic, i) => (
                                            <span key={i} className="group relative flex items-center gap-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 pr-8 rounded-full border border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-600 transition-all">
                                                {topic}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        updateWeek(entry.week, { ...entry, content: entry.content.filter((_, idx) => idx !== i) });
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.stopPropagation();
                                                        }
                                                    }}
                                                    className="absolute right-1 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                    title="Remove topic"
                                                    aria-label={`Remove topic ${topic}`}
                                                >
                                                    <X size={14} />
                                                </button>
                                            </span>
                                        ))}
                                        <div className="flex items-center gap-2">
                                            <input
                                                className="text-xs bg-transparent border-b border-slate-300 dark:border-slate-600 focus:border-indigo-500 outline-none min-w-[100px] text-slate-600 dark:text-slate-300 placeholder:text-slate-400"
                                                placeholder={t.addTopic}
                                                value={newTopic}
                                                onChange={(e) => setNewTopic(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        // Stop propagation to prevent card toggle
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        handleAddTopic();
                                                    }
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAddTopic();
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.stopPropagation();
                                                    }
                                                }}
                                                className="p-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                                                title="Add topic"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight mb-2">{title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {(entry.content || []).map((topic, i) => (
                                            <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full border border-transparent dark:border-slate-600">{topic}</span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        {isEditing && (
                            <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1 mr-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        moveWeek(entry.week, 'up');
                                    }}
                                    className="p-1 hover:bg-white dark:hover:bg-slate-600 rounded text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    title={t.moveUp}
                                >
                                    <ChevronDown className="rotate-180" size={18} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        moveWeek(entry.week, 'down');
                                    }}
                                    className="p-1 hover:bg-white dark:hover:bg-slate-600 rounded text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    title={t.moveDown}
                                >
                                    <ChevronDown size={18} />
                                </button>
                            </div>
                        )}
                        {isEditing && (
                            <button
                                onClick={handleDelete}
                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                                title={t.deleteWeek.replace('{unit}', unitLabel)}
                            >
                                <Trash2 size={20} />
                            </button>
                        )}
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="text-slate-400 p-2 hover:text-slate-600"
                        >
                            <ChevronDown size={20} aria-hidden="true" />
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            id={`week - content - ${entry.week} `}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-6 pt-6 space-y-6 border-t border-slate-100 dark:border-slate-700 mt-2 text-left">

                                {/* Subtitle / Topic Title */}
                                {(entry.subtitle || isEditing) && (
                                    <div className="mb-2">
                                        {isEditing ? (
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                                    {t.subtitle || "Subtitle / Topic"}
                                                </label>
                                                <input
                                                    type="text"
                                                    value={entry.subtitle || ''}
                                                    onChange={(e) => updateWeek(entry.week, { ...entry, subtitle: e.target.value })}
                                                    className="w-full text-lg font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                                    placeholder={t.subtitlePlaceholder || "Enter topic subtitle..."}
                                                />
                                            </div>
                                        ) : (
                                            <h4 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 border-l-4 border-indigo-500 pl-3">
                                                {entry.subtitle}
                                            </h4>
                                        )}
                                    </div>
                                )}

                                <WeekObjectives objectives={entry.objectives} isEditing={isEditing} onUpdate={handleObjectivesUpdate} />



                                <WeekActivities activities={entry.activities} isEditing={isEditing} onUpdate={handleActivitiesUpdate} />
                                <WeekEvaluation evaluation={entry.evaluation} isEditing={isEditing} onUpdate={handleEvaluationUpdate} />
                                <WeekReferences references={entry.references} isEditing={isEditing} onUpdate={handleReferencesUpdate} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title={t.deleteWeek.replace('{unit}', unitLabel)}
                message={t.confirmDelete.replace('{unit}', unitLabel)}
                confirmText={t.deleteWeek.replace('{unit}', unitLabel)}
                cancelText={t.cancel}
                isDestructive
            />
        </>
    );
};
