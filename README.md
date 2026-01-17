# Syllabus Viewer
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18234949.svg)](https://doi.org/10.5281/zenodo.18234949)

Interactive application developed in **React + TypeScript + Vite** to visualize the didactic planning and learning objectives of the course in a dynamic and attractive way.

## 🚀 Key Features

*   **Dynamic Visualization**: Renders interactive cards for each week of the course based on the `planeamiento.json` data file.
*   **Smart Filtering**: Allows searching contents by title, learning objectives, or activities. Includes a keyboard-accessible **clear search** button that manages focus automatically.
*   **Categorized Evaluation**: Visually distinguishes between formative (blue) and summative (purple) evaluations.
*   **Bibliographic References**: Inclusion of APA sources for each session.
*   **Internationalization (i18n)**: Switch between **English** and **Spanish** (`en`/`es`) via the Settings menu.
*   **Edit Mode**: Toggleable interface for modifying syllabus content directly (for authorized users/development).
    *   **Week Reordering**: Move weeks up and down with automatic re-indexing.
    *   **Drag & Drop**: Intuitive drag-and-drop support for reordering weeks.
    *   **Live Editing**: Edit titles, objectives, activities, and evaluations in place.
    *   **Auto-Save**: Changes are automatically saved to local storage.
    *   **Import/Export**: detailed JSON import/export with schema validation.
    *   **Export to HTML**: Generate a standalone, offline-ready HTML version of the syllabus for sharing.
    *   **Unit Configuration**: Customizable unit label (e.g., "Week", "Session") via Settings.
    *   **Keyboard Shortcuts**: Press `?` to view a list of all available shortcuts (toggle Edit Mode, expand cards, etc.).
*   **Dark Mode**: Light/Dark theme toggling with local persistence and system adaptation.
*   **Modern Interface**: Clean and responsive design using **Tailwind CSS**.
*   **Fluid Animations**: Expansion and filtering transitions implemented with **Framer Motion**.
*   **Robustness**: Safe type mapping and error handling for inconsistent data (strings vs objects).
*   **Living Documentation**: Source code documented with JSDoc.
*   **Accessibility (a11y)**:
    *   **Readable Typography**: Base font size increased to **18px** to improve readability on all screens.
    *   **Reduced Motion**: Respects `prefers-reduced-motion` for users who disable system animations.
    *   **Keyboard Navigation**: Full support for tabbing and keyboard activation.
    *   **Interactive Cards**: Expand/collapse week cards using `Enter` or `Space` keys.
    *   **Visible Focus**: High contrast focus indicators (`focus-visible`) exclusively for keyboard navigation.
    *   **Screen Reader Support**: Decorative icons `aria-hidden` and `aria-expanded`/`aria-controls` attributes for dynamic states.
    *   **Semantic HTML**: Proper use of `<button>` and `<input>` elements for native accessibility.
    *   **Mobile Experience**: Floating action buttons display visible text labels when accessed on mobile devices to improve understanding without tooltips.
    *   **Form Validation**: All form fields include unique `id` and `name` attributes to ensure compatibility with autofill tools and assistive technologies.

## 🛠️ Tech Stack

*   **Core**: [React 18](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Styles**: [Tailwind CSS v3](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Utilities**: `clsx`, `tailwind-merge`
*   **Testing**: [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/)

## 🧪 Testing

The project uses **Vitest** for unit testing.

```bash
# Run unit tests
npx vitest run
```

Current test coverage includes:
-   **Export Buttons**: Verifies rendering of labels and interactions for export functionality.
-   **Context Providers**: Verifies logic for Edit Mode and Theme Context.

## 📂 Project Structure

```text
syllabus-viewer/
├── src/
│   ├── components/
│   │   ├── EditToggle.tsx      # Edit mode toggle button
│   │   ├── ExportExcelButton.tsx # Component to export data to Excel
│   │   ├── ExportJsonButton.tsx # Component to export data to JSON
│   │   ├── FloatingControls.tsx # Container for floating UI controls
│   │   ├── Footer.tsx          # Page footer
│   │   ├── Header.tsx          # Title and introduction
│   │   ├── LanguageToggle.tsx  # Language switch button
│   │   ├── SearchBar.tsx       # Search bar
│   │   ├── SortableWeekCard.tsx # Draggable wrapper for WeekCard
│   │   ├── ThemeToggle.tsx     # Theme toggle button
│   │   ├── TimelineGrid.tsx    # Main card grid
│   │   ├── WeekActivities.tsx  # Activities section
│   │   ├── WeekCard.tsx        # Container for the weekly card
│   │   ├── WeekEvaluation.tsx  # Evaluations section
│   │   ├── WeekObjectives.tsx  # Objectives section
│   │   ├── WeekReferences.tsx  # References section
│   │   ├── ConfirmationModal.tsx # Reusable confirmation modal
│   │   ├── ShortcutsModal.tsx  # Keyboard shortcuts help modal
│   │   └── SettingsModal.tsx   # Global settings modal
│   ├── context/
│   │   ├── EditModeContext.tsx # Context for handling edit mode
│   │   ├── LanguageContext.tsx # Context for handling internationalization
│   │   ├── ThemeContext.tsx    # Context for handling theme (light/dark)
│   │   └── translations.ts     # Translation strings dictionary
│   ├── data/
│   │   └── planeamiento.json   # Source of truth (synchronized from root)
│   ├── App.tsx                 # Main orchestrator
│   ├── main.tsx                # Application entry point
│   └── types.ts                # TypeScript type definitions
├── public/                     # Static assets
└── index.html                  # Base HTML template
```

## 🧠 Data Management (`planeamiento.json`)

The file `src/data/planeamiento.json` serves as the **default data source** for the application.

> [!NOTE]
> This repository includes a sample `planeamiento.json` to demonstrate the application's capabilities. To use this viewer for your own course, simply replace the content of `src/data/planeamiento.json` with your own syllabus data following the required structure.

This separation between data and presentation logic allows for:
1.  **Maintainability**: Updating the syllabus content (topics, objectives, evaluations) without touching React code.
2.  **Scalability**: The application scales automatically to render any number of weeks defined in the JSON.
3.  **Type Safety**: Although data is JSON, it is cast to the `SyllabusEntry` interface at runtime to ensure data integrity throughout the application.

### Data Structure

The `planeamiento.json` file now features a root structure that includes `metadata` and `weeks`:

#### Metadata
Global course information that feeds both the application Header/Footer and MyST configuration:
*   `title`, `semester`, `university`, `description`
*   `authors`: List of authors.

#### Config (Optional)
Configuration settings for the application:
*   `unitLabel`: Custom label for the time unit (e.g., "Week", "Session", "Module").

#### Weeks
Each entry in the `weeks` array represents a week of classes and contains:

*   `week`: Sequential week number.
*   `title`: Main title of the session.
*   `subtitle`: Optional subtitle or topic description.
*   `content`: List of topics to cover.
*   `objectives`: Specific learning objectives.
*   `activities`: Description of dynamic activities (labs, workshops).
*   `evaluation`: Array of objects defining the type (`Formativa`/`Sumativa`) and description of the assessment.
*   `references`: List of bibliographic citations in simplified APA format.

```json
{
    "week": 1,
    "title": "Introduction to Physics",
    "subtitle": "Fundamental Concepts",
    "content": [
      "Units and unit conversion",
      "SI units",
      "dimensional analysis",
      "conversions"
    ],
    "objectives": [
      "Distinguish between standard units and systems of units.",
      "List the fundamental units of the International System of Units.",
      "Employ multiples and prefixes of metric units.",
      "Use conversion factors to convert units within a system or from one system of units to another."
    ],
    "activities": "Workshop 'Physics in the Kitchen': Estimate and convert quantities from complex recipes to SI units.",
    "evaluation": [
      {
        "type": "Formativa",
        "description": "Classwork: Collaborative resolution of complex dimensional conversion problems."
      }
    ],
    "references": [
      {
        "text": "[1] Wilson, J., Buffa, A., & Lou, B. (2007). Física (6.ª ed.). Pearson-Prentice Hall.",
        "pages": "Secciones 1.1 a 1.5, pág. 23-25"
      }
    ]
}
```

### Rendering Example

![Week 1 Rendering](public/example-week.png)

## 💾 Data Persistence & Management

The application implements a robust data management system:

1.  **Auto-Save**: All changes made in Edit Mode are automatically saved to the browser's `localStorage`. This ensures work is not lost if the tab is closed.
2.  **Reset**: A "Reset Data" button permits reverting all local changes to the initial state defined in `planeamiento.json`.
3.  **JSON Import/Export**: 
    *   Users can export their current state as a JSON file.
    *   Users can import external JSON files.
    *   **Validation**: Recent implementation includes **Zod** schema validation. When importing a JSON file, the application strictly validates that the file structure matches the expected schema exactly (including nested fields like `weeks`, `metadata`, etc.) before applying changes. This prevents corruption of the application state.

## 🤖 AI Assistance (Antigravity)

This project was developed with the active assistance of **Antigravity**, an AI agent from Google Deepmind.

### AI Role in Development
1.  **Scaffolding**: Initialization of the Vite project and configuration of development tools (ESLint, PostCSS).
2.  **Component Architecture**: Refactoring of monolithic `App.tsx` into a modular architecture (`Header`, `SearchBar`, `TimelineGrid`).
3.  **Instructional Design**: Generation of innovative and student-centered activities and evaluations for the 16 weeks.
4.  **Data Refactoring**: Migration from flat text fields to typed structures (e.g., formative vs summative evaluations).
5.  **Dark Mode**: Complete implementation of theme toggling (Light/Dark) using `ThemeContext` and Tailwind `dark:` classes.
6.  **Documentation**: Automatic generation of JSDoc and maintenance of the README.

## 📝 Development Notes

### TypeScript Configuration
The project has `verbatimModuleSyntax: true` enabled in `tsconfig.json`. This means all **type** imports must explicitly use the `type` syntax.

**Incorrect:**
```typescript
import { ReactNode } from 'react';
```

**Correct:**
```typescript
import { type ReactNode } from 'react';
```

### Troubleshooting
For a list of common errors and their solutions, please refer to [TROUBLESHOOTING.md](TROUBLESHOOTING.md).


## 🏃 How to Run

### Local Development
```bash
# Install dependencies
npm install

# Start development server (default port 5173)
npm run dev
```

### Production Build (Single-File)

The project uses **`vite-plugin-singlefile`** to bundle all code (HTML, JS, CSS) into a single HTML file. This allows running the application locally without needing a web server, avoiding **CORS** issues with the `file://` protocol.

```bash
# Generate portable file in /dist/index.html
npm run build
```

Once built, the `dist/index.html` file is completely standalone and can be opened directly in any browser.

---
&copy; 2026 gerardolacymora
