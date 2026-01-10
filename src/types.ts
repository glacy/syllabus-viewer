/**
 * Metadata for the course, defined in the root of planeamiento.json
 */
export interface CourseMetadata {
    code: string;
    title: string;
    semester: string;
    university: string;
    description: string;
    authors: string[];
}

/**
 * Represents a single weekly entry in the course syllabus.
 * Mapped directly from the JSON structure exported from the academic planning.
 */
export interface SyllabusEntry {
    /** The week number (1-16) */
    week: number;
    /** The title of the session */
    title: string;
    /** The subtitle of the session (e.g. "Semana 1") */
    subtitle: string;
    /** List of topics covered. */
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

/**
 * Root structure of the planeamiento.json file
 */
export interface SyllabusData {
    metadata: CourseMetadata;
    weeks: SyllabusEntry[];
}
