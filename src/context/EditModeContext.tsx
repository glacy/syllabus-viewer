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
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
    const [isEditing, setIsEditing] = useState(false);
    const [syllabus, setSyllabus] = useState<SyllabusData>(initialData);

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
                title: "New Session",
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
            const newWeeks = prev.weeks.filter(w => w.week != weekNumber);
            return {
                ...prev,
                weeks: newWeeks
            };
        });
    };

    return (
        <EditModeContext.Provider value={{ isEditing, toggleEditMode, syllabus, updateWeek, addWeek, removeWeek, updateMetadata }}>
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
