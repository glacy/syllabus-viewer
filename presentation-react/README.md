# Interactive academic presentation template

A React-based, fully responsive presentation engine designed for academic and technical contexts. This template combines the interactivity of a web application with the structured narrative of a slide deck, featuring a robust "App Shell" layout, reusable semantic components, and seamless mobile adaptation.

## Key features

### 🎨 Dynamic Theming & Colors
- **Real-time Color System**: Users can switch themes instantly (Blue, Purple, Orange, etc.) via a persistent palette menu.
- **Semantic Tokens**: Built on CSS variables (`--color-primary`, `--color-accent`), ensuring all components adapt automatically.
- **Monochromatic Consistency**: Accent elements automatically sync with the selected primary color for a polished look.
- **Dark Mode**: Native support with smooth transitions (`bg-slate-900` vs `bg-white`).
- **Persistence**: Preferences are saved to `localStorage` and restored on reload.

### ♿ Accessibility First (A11y)
- **Advanced Contrast Logic**: Uses **Relative Luminance** (WCAG standard) to dynamically calculate whether text should be black or white (`on-primary`) based on the selected background color.
- **Dark Mode Optimization**: Text shades automatically adjust (e.g., `primary-300` instead of `400`) to guarantee legibility against dark backgrounds.
- **Keyboard Navigation**: Fully navigable via keyboard (Tab, Arrows, Enter), including the color palette and slide controls.
- **Screen Readers**: Semantic HTML structure (`role="region"`, `aria-label`) for full JAWS/NVDA compatibility.

### 🖥️ Modern "App Shell" Layout
The presentation uses a robust CSS-driven architecture:

-   **Responsive & stable**: Built on a fixed-height "App Shell" (`h-screen`) that ensures the navigation bar is always anchored to the bottom of the viewport ("Sticky Footer" pattern).
-   **Internal Scrolling**: Content overflows handled via internal scrolling within the slide card, ensuring the UI shell (navigation, background) remains stable.
-   **Sticky Headers**: Section headers remain fixed at the top of the view during scrolling, providing persistent context (`sticky top-0`).
-   **Fluid Desktop/Mobile**: Uses standard Tailwind CSS breakpoints (`lg:`) to switch between a focused mobile column layout and a spacious desktop "slide" view. No JavaScript scaling hacks required.

### 🧩 Component-Based Architecture
Slides are built using reusable, highly configurable components to ensure consistency and speed up development:
-   **`SlideLayout`**: Standardized wrapper handling spacing and responsiveness.
-   **`SlideHeader`**: Uniform gradient headers with title/subtitle support. Now supports sticky positioning.
-   **`IconCard`**: Versatile content cards with icon support and semantic variants (`info`, `warning`, `outlined`, `clean`).
-   **`CodeBlock`**: Syntax-highlighted code containers with dark mode support.
-   **`CallToAction`**: High-impact closing banners.

## Technical Stack

-   **Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Material Icons](https://fonts.google.com/icons)

## Project Structure

```bash
src/
├── App.jsx                 # App Shell: Main layout, navigation, and theme state
├── main.jsx                # Entry point
├── components/
│   ├── Slides.jsx          # Registry: Imports and lists all slide components
│   └── common/             # Reusable UI Kit
│       ├── SlideLayout.jsx # Standard page wrapper
│       ├── SlideHeader.jsx # Title/Subtitle component
│       └── IconCard.jsx    # Content blocks with variants
└── index.css               # Global styles and Tailwind directives
```

## How to use as a template

### 1. Installation
Clone the repository and install dependencies:

```bash
npm install
npm run dev
```

### 2. Adding New Slides
1.  Open `src/components/Slides.jsx`.
2.  Create a new component using the reusable primitives:
    ```jsx
    import SlideLayout from './common/SlideLayout';
    import SlideHeader from './common/SlideHeader';
    import IconCard from './common/IconCard';

    const MyNewSlide = () => (
        <SlideLayout>
            <SlideHeader title="My Topic" subtitle="A subtitle here" />

            <div className="flex flex-col gap-6 px-16 py-12">
                <IconCard icon="lightbulb" title="Main Concept" variant="info">
                    Explanation of the concept...
                </IconCard>
            </div>
        </SlideLayout>
    );
    ```
3.  Add it to the `slides` array in the main component:
    ```jsx
    const slides = [
        <Portada />,
        <Sesion1 />,
        <MyNewSlide />, // Add your new slide here
        <Cierre />
    ];
    ```
4.  Update the `slidesCount` constant at the bottom of the file.

### 3. Deployment
Build the project for production (generates static files in `dist/`):

```bash
npm run build
```

Deploy the `dist` folder to GitHub Pages, Vercel, or Netlify.

### 4. Customizing Colors
**Interactive Mode**: Click the **Palette Icon** (<i className="material-icons">palette</i>) in the navigation bar to open the color menu. Select any preset to instantly update the theme.

**Changing Defaults**: To modify the default colors used when the app first loads (before any user selection), edit `src/App.jsx`:

```javascript
// src/App.jsx
const [primaryColor, setPrimaryColor] = useState(() => localStorage.getItem('primaryColor') || '#your-default-hex');
```

The application uses CSS variables and runtime palette generation to apply your choices globally without rebuilding.
