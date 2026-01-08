/**
 * Represents a single weekly entry in the course syllabus.
 * Mapped directly from the JSON structure exported from the academic planning.
 */
export interface SyllabusEntry {
    /** The week number (1-16) */
    week: number;
    /** List of topics covered. The first item is typically treated as the Title. */
    content: string[];
    /** List of learning objectives. Can contain strings or single-key objects. */
    objectives: string[];
    /** Description of classroom or lab activities. */
    activities: string;
    /** List of evaluation methods. */
    evaluation: Array<{
        type: 'Formativa' | 'Sumativa';
        description: string;
    }>;
    /** Bibliographic references for the session. Can be a simple string or a detailed list. */
    references: string | Array<{
        text: string;
        pages?: string;
    }>;
}
