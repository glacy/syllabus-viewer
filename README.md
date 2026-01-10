# Syllabus Viewer

Interactive application developed in **React + TypeScript + Vite** to visualize the didactic planning and learning objectives of the course in a dynamic and attractive way.

## 🚀 Key Features

*   **Dynamic Visualization**: Renders interactive cards for each week of the course based on the `planeamiento.json` data file.
*   **Smart Filtering**: Allows searching contents by title, learning objectives, or activities. Includes a keyboard-accessible **clear search** button that manages focus automatically.
*   **Categorized Evaluation**: Visually distinguishes between formative (blue) and summative (purple) evaluations.
*   **Bibliographic References**: Inclusion of APA sources for each session.
*   **Edit Mode**: Toggleable interface for modifying syllabus content directly (for authorized users/development).
*   **Dark Mode**: Light/Dark theme toggling with local persistence and system adaptation.
*   **Modern Interface**: Clean and responsive design using **Tailwind CSS**.
*   **Fluid Animations**: Expansion and filtering transitions implemented with **Framer Motion**.
*   **Robustness**: Safe type mapping and error handling for inconsistent data (strings vs objects).
*   **Living Documentation**: Source code documented with JSDoc.
*   **Accessibility (a11y)**:
    *   **Readable Typography**: Base font size increased to **18px** to improve readability on all screens.
    *   **Reduced Motion**: Respects `prefers-reduced-motion` for users who disable system animations.
    *   **Keyboard Navigation**: Full support for tabbing and keyboard activation.
    *   **Visible Focus**: High contrast focus indicators (`focus-visible`) exclusively for keyboard navigation.
    *   **Screen Reader Support**: Decorative icons `aria-hidden` and `aria-expanded`/`aria-controls` attributes for dynamic states.

## 🛠️ Tech Stack

*   **Core**: [React 18](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Styles**: [Tailwind CSS v3](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Utilities**: `clsx`, `tailwind-merge`

## 📂 Project Structure

```text
syllabus-viewer/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Title and introduction
│   │   ├── SearchBar.tsx       # Search bar
│   │   ├── FloatingControls.tsx # Container for floating UI controls
│   │   ├── EditToggle.tsx      # Edit mode toggle button
│   │   ├── ThemeToggle.tsx     # Theme toggle button
│   │   ├── TimelineGrid.tsx    # Main card grid
│   │   ├── WeekCard.tsx        # Container for the weekly card
│   │   ├── WeekActivities.tsx  # Activities section
│   │   ├── WeekEvaluation.tsx  # Evaluations section
│   │   ├── WeekObjectives.tsx  # Objectives section
│   │   └── WeekReferences.tsx  # References section
│   ├── context/
│   │   ├── EditModeContext.tsx # Context for handling edit mode
│   │   └── ThemeContext.tsx    # Context for handling theme (light/dark)
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

#### Weeks
Each entry in the `weeks` array represents a week of classes and contains:

*   `week`: Sequential week number.
*   `content`: List of topics to cover.
*   `objectives`: Specific learning objectives.
*   `activities`: Description of dynamic activities (labs, workshops).
*   `evaluation`: Array of objects defining the type (`Formativa`/`Sumativa`) and description of the assessment.
*   `references`: List of bibliographic citations in simplified APA format.

```json
{
    "week": 1,
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
