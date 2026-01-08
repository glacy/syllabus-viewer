# Syllabus Viewer - Física para Biotecnología

Aplicación interactiva desarrollada en **React + TypeScript + Vite** para visualizar el planeamiento didáctico y los objetivos de aprendizaje del curso de manera dinámica y atractiva.

## 🚀 Características principales

*   **Visualización dinámica**: Renderiza tarjetas interactivas para cada semana del curso basándose en el archivo de datos `planeamiento.json`.
*   **Filtrado inteligente**: Permite buscar contenidos por título, objetivos de aprendizaje o actividades. Incluye un botón para **limpiar búsqueda** accesible por teclado que gestiona el foco automáticamente.
*   **Evaluación tipificada**: Distingue visualmente entre evaluaciones formativas (azul) y sumativas (morado).
*   **Referencias bibliográficas**: Inclusión de fuentes APA para cada sesión.
*   **Modo oscuro**: Alternancia de temas Claro/Oscuro con persistencia local y adaptación al sistema.
*   **Interfaz moderna**: Diseño limpio y responsivo utilizando **Tailwind CSS**.
*   **Animaciones fluidas**: Transiciones de expansión y filtrado implementadas con **Framer Motion**.
*   **Robustez**: Mapeo seguro de tipos y manejo de errores para datos inconsistentes (strings vs objetos).
*   **Documentación viva**: Código fuente documentado con JSDoc.
*   **Accesibilidad (a11y)**:
    *   **Tipografía legible**: Tamaño de fuente base aumentado a **18px** para mejorar la legibilidad en todas las pantallas.
    *   **Movimiento reducido**: Respeto a `prefers-reduced-motion` para usuarios que desactivan las animaciones del sistema.
    *   **Navegación por teclado**: Soporte completo para tabulación y activación con teclado.
    *   **Focus visible**: Indicadores de foco de alto contraste (`focus-visible`) exclusivos para navegación por teclado.
    *   **Soporte lector de pantalla**: Iconos decorativos `aria-hidden` y atributos `aria-expanded`/`aria-controls` para estados dinámicos.

## 🛠️ Stack tecnológico

*   **Core**: [React 18](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Estilos**: [Tailwind CSS v3](https://tailwindcss.com/)
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
*   **Iconos**: [Lucide React](https://lucide.dev/)
*   **Utilidades**: `clsx`, `tailwind-merge`

## 📂 Estructura del proyecto

```text
syllabus-viewer/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Título y presentación
│   │   ├── SearchBar.tsx       # Barra de búsqueda
│   │   ├── ThemeToggle.tsx     # Botón de cambio de tema
│   │   ├── TimelineGrid.tsx    # Grilla principal de tarjetas
│   │   ├── WeekCard.tsx        # Contenedor de la tarjeta semanal
│   │   ├── WeekActivities.tsx  # Sección de actividades
│   │   ├── WeekEvaluation.tsx  # Sección de evaluaciones
│   │   ├── WeekObjectives.tsx  # Sección de objetivos
│   │   └── WeekReferences.tsx  # Sección de referencias
│   ├── context/
│   │   └── ThemeContext.tsx    # Contexto para manejo del tema (claro/oscuro)
│   ├── data/
│   │   └── planeamiento.json   # Fuente de verdad (sincronizada desde MD)
│   ├── App.tsx                 # Orquestador principal
│   ├── main.tsx                # Punto de entrada de la aplicación
│   └── types.ts                # Definiciones de tipos TypeScript
├── public/                     # Assets estáticos
└── index.html                  # Template HTML base
```

## 🧠 Gestión de datos (`planeamiento.json`)

El archivo `src/data/planeamiento.json` actúa como la **única fuente de verdad** para el contenido del curso. Esta separación entre datos y lógica de presentación permite:
1.  **Mantenibilidad**: Actualizar el contenido del syllabus (temas, objetivos, evaluaciones) sin tocar código React.
2.  **Escalabilidad**: La aplicación escala automáticamente para renderizar cualquier número de semanas definidas en el JSON.
3.  **Tipado Seguro**: Aunque los datos son JSON, se castean a la interfaz `SyllabusEntry` en tiempo de ejecución para garantizar la integridad de los datos en toda la aplicación.

### Estructura de Datos

Cada entrada en el JSON representa una semana de clases y contiene:

*   `week`: Número secuencial de la semana.
*   `content`: Lista de temas a cubrir.
*   `objectives`: Objetivos de aprendizaje específicos.
*   `activities`: Descripción de actividades dinámicas (laboratorios, talleres).
*   `evaluation`: Array de objetos que define el tipo (`Formativa`/`Sumativa`) y la descripción de la evaluación.
*   `references`: Lista de citas bibliográficas en formato APA simplificado.

```json
{
    "week": 1,
    "content": [
      "Unidades y conversión de unidades",
      "unidades del SI",
      "análisis dimensional",
      "conversiones"
    ],
    "objectives": [
      "Distinguir entre unidades estándar y sistemas de unidades.",
      "Enumerar las unidades fundamentales del Sistema Internacional de Unidades.",
      "Emplear múltiplos y prefijos de unidades métricas.",
      "Utilizar factores de conversión para convertir unidades dentro de un sistema o de un sistema de unidades a otro."
    ],
    "activities": "Taller 'Física en la cocina': Estimar y convertir cantidades de recetas complejas a unidades SI.",
    "evaluation": [
      {
        "type": "Formativa",
        "description": "Trabajo en clase: Resolución colaborativa de problemas de conversión dimensional complejos."
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

### Ejemplo de renderización

![Renderización de la Semana 1](public/example-week.png)

## 🤖 Asistencia de IA (Antigravity)

Este proyecto fue desarrollado con la asistencia activa de **Antigravity**, un agente de IA de Google Deepmind.

### Rol de la IA en el desarrollo
1.  **Scaffolding**: Inicialización del proyecto Vite y configuración de herramientas de desarrollo (ESLint, PostCSS).
2.  **Arquitectura de componentes**: Refactorización de `App.tsx` monolítico a una arquitectura modular (`Header`, `SearchBar`, `TimelineGrid`).
3.  **Diseño instruccional**: Generación de actividades y evaluaciones innovadoras y centradas en el estudiante para las 16 semanas.
4.  **Refactorización de datos**: Migración de campos de texto planos a estructuras tipadas (e.g., evaluaciones formativas vs sumativas).
5.  **Modo Oscuro**: Implementación completa de cambio de tema (Claro/Oscuro) usando `ThemeContext` y clases `dark:` de Tailwind.
6.  **Documentación**: Generación automática de JSDoc y mantenimiento del README.

## 📝 Notas de desarrollo

### Configuración de TypeScript
El proyecto tiene habilitada la opción `verbatimModuleSyntax: true` en `tsconfig.json`. Esto significa que todos los imports de **tipos** deben usar explícitamente la sintaxis `type`.

**Incorrecto:**
```typescript
import { ReactNode } from 'react';
```

**Correcto:**
```typescript
import { type ReactNode } from 'react';
```

## 🏃 Cómo ejecutar

### Desarrollo local
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (puerto 5173 por defecto)
npm run dev
```

### Construcción para producción (Single-File)

El proyecto utiliza **`vite-plugin-singlefile`** para empaquetar todo el código (HTML, JS, CSS) en un único archivo HTML. Esto permite ejecutar la aplicación localmente sin necesidad de un servidor web, evitando problemas de **CORS** con el protocolo `file://`.

```bash
# Generar archivo portable en /dist/index.html
npm run build
```

Una vez construido, el archivo `dist/index.html` es completamente autónomo y puede abrirse directamente en cualquier navegador.

---
&copy; 2026 gerardolacymora
