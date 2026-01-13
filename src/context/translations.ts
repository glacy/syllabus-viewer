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
    subtitle: string;
    subtitlePlaceholder: string;
    importJson: string;
    resetData: string;
    confirmReset: string;
    confirmImport: string;
    uploadError: string;
    defaultNewObjective: string;
    defaultNewReference: string;
    defaultNewEvaluation: string;
    settings: string;
    unitLabel: string;
    unitLabelPlaceholder: string;
    unitLabelHelp: string;
    confirm: string;
    cancel: string;
    close: string;
    shortcuts: {
        title: string;
        editMode: string;
        toggleWeeks: string;
        closeModals: string;
        confirmActions: string;
        navigation: string;
        openShortcuts: string;
        theme: string;
    }
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
        deleteWeek: "Delete {unit}",
        addTopic: "Add topic",
        sessionTitle: "Session Title",
        confirmDelete: "Are you sure you want to delete this {unit}?",
        addWeek: "Add {unit}",
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
        dragToReorder: "Drag to reorder",
        subtitle: "Subtitle / Topic",
        subtitlePlaceholder: "Enter topic subtitle...",
        importJson: "Import JSON",
        resetData: "Reset Data (Clear Local Changes)",
        confirmReset: "Are you sure you want to reset all data? ALL LOCAL CHANGES WILL BE LOST and it will revert to the default syllabus.",
        confirmImport: "Load syllabus \"{title}\"? This will overwrite your current changes.",
        uploadError: "Error uploading file. Please check format.",
        defaultNewObjective: "New objective",
        defaultNewReference: "New reference",
        defaultNewEvaluation: "New evaluation",
        settings: "Settings",
        unitLabel: "Card Label (e.g. \"Week\", \"Session\")",
        unitLabelPlaceholder: "e.g. Session, Module",
        unitLabelHelp: "Changes affect all card headers (e.g. \"Week 1\" → \"Session 1\")",
        confirm: "Confirm",
        cancel: "Cancel",
        close: "Close",
        shortcuts: {
            title: "Keyboard Shortcuts",
            editMode: "Toggle Edit Mode",
            toggleWeeks: "Expand/Collapse Cards",
            closeModals: "Close Windows",
            confirmActions: "Confirm Actions",
            navigation: "Navigate Elements",
            openShortcuts: "Open Keyboard Shortcuts",
            theme: "Toggle Dark/Light Mode"
        }
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
        deleteWeek: "Eliminar {unit}",
        addTopic: "Agregar tema",
        sessionTitle: "Título de la sesión",
        confirmDelete: "¿Estás seguro de que deseas eliminar esta {unit}?",
        addWeek: "Agregar {unit}",
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
        dragToReorder: "Arrastrar para reordenar",
        subtitle: "Subtítulo / Tema",
        subtitlePlaceholder: "Ingrese el subtítulo del tema...",
        importJson: "Importar JSON",
        resetData: "Resetear Datos (Borrar cambios locales)",
        confirmReset: "¿Seguro que desea resetear? SE PERDERÁN TODOS LOS CAMBIOS LOCALES y se volverá al plan original.",
        confirmImport: "¿Cargar el syllabus \"{title}\"? Esto sobrescribirá sus cambios actuales.",
        uploadError: "Error al subir el archivo. Verifique el formato.",
        defaultNewObjective: "Nuevo objetivo",
        defaultNewReference: "Nueva referencia",
        defaultNewEvaluation: "Nueva evaluación",
        settings: "Configuración",
        unitLabel: "Etiqueta de la tarjeta (ej. \"Semana\", \"Sesión\")",
        unitLabelPlaceholder: "ej. Sesión, Módulo",
        unitLabelHelp: "Los cambios afectan todos los encabezados de las tarjetas (ej. \"Semana 1\" → \"Sesión 1\")",
        confirm: "Confirmar",
        cancel: "Cancelar",
        close: "Cerrar",
        shortcuts: {
            title: "Atajos de Teclado",
            editMode: "Alternar Modo Edición",
            toggleWeeks: "Expandir/Colapsar Tarjetas",
            closeModals: "Cerrar Ventanas",
            confirmActions: "Confirmar Acciones",
            navigation: "Navegar Elementos",
            openShortcuts: "Abrir Atajos de Teclado",
            theme: "Alternar Tema Claro/Oscuro"
        }
    }
};
