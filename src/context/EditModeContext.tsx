import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { SyllabusData, SyllabusEntry, CourseMetadata, SyllabusConfig } from '../types';
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
    setSyllabus: (newData: SyllabusData) => void;
    resetSyllabus: () => void;
    updateConfig: (config: SyllabusConfig) => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

import { useLanguage } from './LanguageContext';

export function EditModeProvider({ children }: { children: ReactNode }) {
    const [isEditing, setIsEditing] = useState(false);
    // Load initial data from localStorage or fallback to JSON
    const [syllabus, setSyllabusState] = useState<SyllabusData>(() => {
        const saved = localStorage.getItem('syllabusData');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Failed to parse saved syllabus", e);
            }
        }
        return initialData;
    });

    // Save to localStorage whenever syllabus changes
    // We use a simplified effect here. In a real app, maybe debounce this.
    const setSyllabus = (newData: React.SetStateAction<SyllabusData>) => {
        setSyllabusState(prev => {
            const next = typeof newData === 'function' ? newData(prev) : newData;
            localStorage.setItem('syllabusData', JSON.stringify(next));
            return next;
        });
    };

    const resetSyllabus = () => {
        setSyllabusState(initialData);
        localStorage.removeItem('syllabusData');
    };

    const { t } = useLanguage();

    // Helper to clean empty data
    const pruneSyllabus = (data: SyllabusData): SyllabusData => {
        return {
            ...data,
            weeks: data.weeks.map(week => ({
                ...week,
                content: (week.content || []).filter(item => item && item.trim()),
                objectives: (week.objectives || []).filter(obj =>
                    typeof obj === 'string' ? obj.trim() : true // Keep objects, filter empty strings
                ),
                evaluation: (week.evaluation || []).filter(ev => ev.description && ev.description.trim()),
                references: (Array.isArray(week.references) ? week.references : []).filter(ref => ref.text && ref.text.trim())
            }))
        };
    };

    const toggleEditMode = () => {
        setIsEditing(prev => {
            if (prev) {
                // If we are turning OFF edit mode, prune data
                setSyllabus(current => pruneSyllabus(current));
            }
            return !prev;
        });
    };

    // Global shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Exit edit mode on Escape
            if (e.key === 'Escape' && isEditing) {
                setIsEditing(false);
            }
            // Toggle edit mode on Ctrl+Shift+E (or Cmd+Shift+E)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
                e.preventDefault();
                toggleEditMode();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isEditing, toggleEditMode]);

    const updateMetadata = (key: keyof CourseMetadata, value: string) => {
        setSyllabus(prev => ({
            ...prev,
            metadata: {
                ...prev.metadata,
                [key]: value
            }
        }));
    };

    const updateConfig = (config: SyllabusConfig) => {
        setSyllabus(prev => ({
            ...prev,
            config: {
                ...prev.config,
                ...config
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
            const unitLabel = prev.config?.unitLabel || t.week;
            const newWeek: SyllabusEntry = {
                week: nextWeekNum,
                title: t.newSession,
                subtitle: `${unitLabel} ${nextWeekNum}`,
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
        <EditModeContext.Provider value={{
            isEditing,
            toggleEditMode,
            syllabus,
            setSyllabus,
            resetSyllabus,
            updateWeek,
            addWeek,
            removeWeek,
            updateMetadata,
            moveWeek,
            reorderWeeks,
            updateConfig
        }}>
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
