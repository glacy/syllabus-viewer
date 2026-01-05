# Cómo usar este proyecto como plantilla (Scaffold)

Este proyecto está diseñado para ser usado como base para nuevas presentaciones académicas con React. Sigue estos pasos para iniciar un nuevo proyecto.

## 1. Clonar y Preparar

1.  **Clonar el repositorio** (o descargar el ZIP):
    ```bash
    git clone https://github.com/glacy/frontmatter-academico.git mi-nueva-presentacion
    cd mi-nueva-presentacion/presentation-react
    ```

2.  **Reiniciar Git** (Opcional, si quieres un historial limpio):
    ```bash
    rm -rf .git
    git init
    ```

3.  **Instalar dependencias**:
    ```bash
    npm install
    ```

## 2. Limpieza de Contenido

Para empezar desde cero, elimina el contenido específico de la presentación anterior:

1.  **Eliminar diapositivas antiguas**:
    Ve a `src/components/slides/` y elimina todos los archivos `.tsx` **EXCEPTO** `Portada.tsx` (puedes reutilizarlo) o crea tus propios archivos desde cero.

2.  **Limpiar `Slides.tsx`**:
    Edita `src/components/Slides.tsx`. Elimina las importaciones de las sesiones anteriores y deja solo la Portada o una diapositiva vacía.

    ```tsx
    // src/components/Slides.tsx
    import React from 'react';
    import Portada from './slides/Portada';
    // import TuNuevaSlide from './slides/TuNuevaSlide';

    interface SlidesProps {
        currentSlide: number;
    }

    const Slides: React.FC<SlidesProps> = ({ currentSlide }) => {
        const slides = [
            <Portada
                title="Título de tu Nueva Presentación"
                subtitle="Subtítulo descriptivo"
                author="Tu Nombre"
                email="tu@email.com"
                sessionInfo="Info de sesión"
                techStack="React • Tailwind"
            />,
            // <TuNuevaSlide />
        ];

        return slides[currentSlide] || null;
    };

    export default Slides;
    ```

## 3. Configuración

1.  **Actualizar `package.json`**:
    Cambia el `name`, `version`, y `description` de tu proyecto.

2.  **Personalizar el Tema**:
    Edita `src/context/ThemeContext.tsx` para cambiar los colores por defecto (`DEFAULT_PRIMARY_COLOR`, `DEFAULT_ACCENT_COLOR`) si lo deseas.

## 4. Crear Contenido

Usa los componentes base ubicados en `src/components/common/` para construir tus diapositivas rápidamente:

-   **`SlideLayout`**: Envoltorio principal para diapositivas estándar.
-   **`SlideHeader`**: Encabezado con título y subtítulo.
-   **`IconCard`**: Tarjetas para mostrar puntos clave.
-   **`CodeBlock`**: Para mostrar código con resaltado de sintaxis.
-   **`CallToAction`**: Para diapositivas de impacto o cierre.

Ejemplo de nueva diapositiva (`src/components/slides/MiSlide.tsx`):

```tsx
import React from 'react';
import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';

const MiSlide = () => (
    <SlideLayout>
        <SlideHeader title="Nuevo Título" subtitle="Explicación del tema" />
        <div className="p-8">
            <p className="text-xl text-slate-700 dark:text-slate-300">
                Tu contenido aquí.
            </p>
        </div>
    </SlideLayout>
);

export default MiSlide;
```
