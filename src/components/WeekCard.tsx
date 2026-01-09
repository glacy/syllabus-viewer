import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { SyllabusEntry } from '../types';
import clsx from 'clsx';
import { WeekObjectives } from './WeekObjectives';
import { WeekActivities } from './WeekActivities';
import { WeekEvaluation } from './WeekEvaluation';
import { WeekReferences } from './WeekReferences';

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

    // Extract title from content or fallback
    const title = entry.content.length > 0 ? entry.content[0] : `Semana ${entry.week}`;
    const topics = entry.content.slice(1);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx(
                "bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors duration-300",
                isExpanded ? "ring-2 ring-indigo-500/20 shadow-md" : "hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50"
            )}
        >
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={`week-content-${entry.week}`}
                className={clsx(
                    "w-full text-left p-6 gap-4 flex items-start justify-between focus:outline-none transition-all duration-200",
                    "focus-visible:ring-4 focus-visible:ring-indigo-500/30 focus-visible:bg-indigo-50/50 dark:focus-visible:bg-indigo-900/30 rounded-xl"
                )}
            >
                <div className="flex gap-4">
                    <div className="flex flex-col items-center justify-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 w-16 h-16 rounded-lg font-bold shrink-0 border border-transparent dark:border-indigo-500/20">
                        <span className="text-xs uppercase tracking-wider text-indigo-400 dark:text-indigo-400">Semana</span>
                        <span className="text-2xl">{entry.week}</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight mb-2">{title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {topics.map((topic, i) => (
                                <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full border border-transparent dark:border-slate-600">{topic}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-slate-400 mt-2"
                >
                    <ChevronDown size={20} aria-hidden="true" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        id={`week-content-${entry.week}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0 space-y-6 border-t border-slate-100 dark:border-slate-700 mt-2 text-left">
                            <WeekObjectives objectives={entry.objectives} />
                            <WeekActivities activities={entry.activities} />
                            <WeekEvaluation evaluation={entry.evaluation} />
                            <WeekReferences references={entry.references} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
