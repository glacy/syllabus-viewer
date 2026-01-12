import { createContext, useContext, useState, type ReactNode } from 'react';
import type { SyllabusData, SyllabusEntry, CourseMetadata } from '../types';
import planeamientoData from '../data/planeamiento.json';

// Ensure the imported JSON matches the interface roughly, or cast it.
const initialData = planeamientoData as SyllabusData;

interface EditModeContextType {
    isEditing: boolean;
    toggleEditMode: () => void;
    syllabus: SyllabusData;
    updateWeek: (weekIndex: number, updatedWeek: SyllabusEntry) => void;
    addWeek: () => void;
    removeWeek: (weekIndex: number) => void;
    updateMetadata: (key: keyof CourseMetadata, value: string) => void;
    moveWeek: (weekNumber: number, direction: 'up' | 'down') => void;
    reorderWeeks: (startIndex: number, endIndex: number) => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

import { useLanguage } from './LanguageContext';

export function EditModeProvider({ children }: { children: ReactNode }) {
    const [isEditing, setIsEditing] = useState(false);
    const [syllabus, setSyllabus] = useState<SyllabusData>(initialData);
    const { t } = useLanguage();

    const toggleEditMode = () => setIsEditing(prev => !prev);

    const updateMetadata = (key: keyof CourseMetadata, value: string) => {
        setSyllabus(prev => ({
            ...prev,
            metadata: {
                ...prev.metadata,
                [key]: value
            }
        }));
    };

    const updateWeek = (weekNumber: number, updatedWeek: SyllabusEntry) => {
        setSyllabus(prev => {
            // Use loose equality to handle potential string/number mismatches from data
            const newWeeks = prev.weeks.map(w => w.week == weekNumber ? updatedWeek : w);
            return {
                ...prev,
                weeks: newWeeks
            };
        });
    };

    const addWeek = () => {
        setSyllabus(prev => {
            const nextWeekNum = prev.weeks.length > 0 ? Math.max(...prev.weeks.map(w => Number(w.week))) + 1 : 1;
            const newWeek: SyllabusEntry = {
                week: nextWeekNum,
                title: t.newSession,
                subtitle: `Week ${nextWeekNum}`,
                content: [],
                objectives: [],
                activities: "",
                evaluation: [],
                references: []
            };
            return {
                ...prev,
                weeks: [...prev.weeks, newWeek]
            };
        });
    };

    const removeWeek = (weekNumber: number) => {
        setSyllabus(prev => {
            const filteredWeeks = prev.weeks.filter(w => w.week != weekNumber);
            const newWeeks = filteredWeeks.map((week, index) => ({
                ...week,
                week: index + 1
            }));

            return {
                ...prev,
                weeks: newWeeks
            };
        });
    };

    const moveWeek = (weekNumber: number, direction: 'up' | 'down') => {
        setSyllabus(prev => {
            const index = prev.weeks.findIndex(w => w.week == weekNumber);
            if (index === -1) return prev;
            if (direction === 'up' && index === 0) return prev;
            if (direction === 'down' && index === prev.weeks.length - 1) return prev;

            const newWeeks = [...prev.weeks];
            const targetIndex = direction === 'up' ? index - 1 : index + 1;

            // Swap
            [newWeeks[index], newWeeks[targetIndex]] = [newWeeks[targetIndex], newWeeks[index]];

            // Re-index all to be safe
            const reindexedWeeks = newWeeks.map((week, idx) => ({
                ...week,
                week: idx + 1
            }));

            return {
                ...prev,
                weeks: reindexedWeeks
            };
        });
    };

    const reorderWeeks = (startIndex: number, endIndex: number) => {
        setSyllabus(prev => {
            const result = Array.from(prev.weeks);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);

            const reindexedWeeks = result.map((week, idx) => ({
                ...week,
                week: idx + 1
            }));

            return {
                ...prev,
                weeks: reindexedWeeks
            };
        });
    };

    return (
        <EditModeContext.Provider value={{ isEditing, toggleEditMode, syllabus, updateWeek, addWeek, removeWeek, updateMetadata, moveWeek, reorderWeeks }}>
            {children}
        </EditModeContext.Provider>
    );
}

export function useEditMode() {
    const context = useContext(EditModeContext);
    if (context === undefined) {
        throw new Error('useEditMode must be used within an EditModeProvider');
    }
    return context;
}
