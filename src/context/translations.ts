export type Language = 'en' | 'es';

export interface Translations {
    week: string;
    objectives: string;
    activities: string;
    evaluation: string;
    references: string;
    searchPlaceholder: string;
    clearSearch: string;
    editMode: string;
    theme: string;
    language: string;
    deleteWeek: string;
    addTopic: string;
    sessionTitle: string;
    confirmDelete: string;
    addWeek: string;
    evaluationTypes: {
        formative: string;
        summative: string;
    };
    moveUp: string;
    moveDown: string;
    addObjective: string;
    addEvaluation: string;
    addReference: string;
    newSession: string;
    dragToReorder: string;
}

export const translations: Record<Language, Translations> = {
    en: {
        week: "Week",
        objectives: "Learning Objectives",
        activities: "Activities",
        evaluation: "Evaluation",
        references: "References",
        searchPlaceholder: "Search topics, objectives...",
        clearSearch: "Clear search",
        editMode: "Edit Mode",
        theme: "Theme",
        language: "Language",
        deleteWeek: "Delete Week",
        addTopic: "+ Add topic",
        sessionTitle: "Session Title",
        confirmDelete: "Are you sure you want to delete this week?",
        addWeek: "Add Week",
        evaluationTypes: {
            formative: "Formative",
            summative: "Summative"
        },
        moveUp: "Move Up",
        moveDown: "Move Down",
        addObjective: "+ Add",
        addEvaluation: "+ Add",
        addReference: "+ Add",
        newSession: "New Session",
        dragToReorder: "Drag to reorder"
    },
    es: {
        week: "Semana",
        objectives: "Objetivos de Aprendizaje",
        activities: "Actividades",
        evaluation: "Evaluación",
        references: "Referencias",
        searchPlaceholder: "Buscar temas, objetivos...",
        clearSearch: "Limpiar búsqueda",
        editMode: "Modo Edición",
        theme: "Tema",
        language: "Idioma",
        deleteWeek: "Eliminar semana",
        addTopic: "+ Agregar tema",
        sessionTitle: "Título de la sesión",
        confirmDelete: "¿Estás seguro de que deseas eliminar esta semana?",
        addWeek: "Agregar semana",
        evaluationTypes: {
            formative: "Formativa",
            summative: "Sumativa"
        },
        moveUp: "Mover Arriba",
        moveDown: "Mover Abajo",
        addObjective: "+ Agregar",
        addEvaluation: "+ Agregar",
        addReference: "+ Agregar",
        newSession: "Nueva Sesión",
        dragToReorder: "Arrastrar para reordenar"
    }
};
