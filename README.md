# Biotecnología

[![deploy](https://github.com/glacy/biotec/actions/workflows/deploy.yml/badge.svg)](https://github.com/glacy/biotec/actions/workflows/deploy.yml)


**FI1105 - Física para Biotecnología.**

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/glacy/biotec)

🚀 **Sitio web oficial (Versión compilada):** [https://glacy.github.io/biotec](https://glacy.github.io/biotec)

---

## Sobre este repositorio

Este repositorio contiene el **código fuente** del curso. A diferencia del sitio web (pensado para estudiantes), este `README` está dirigido a quienes deseen **auditar, replicar o contribuir** al proyecto.

El curso está construido con **MyST Markdown** y demuestra principios de:
- **Estructura semántica:** Uso intensivo de frontmatter YAML.
- **Reproducibilidad:** Entorno controlado y despliegue automatizado.
- **Documentación como código:** CI/CD con GitHub Actions.

## Ejecución en la nube (recomendado)

La forma más sencilla de ejecutar este curso es utilizando **GitHub Codespaces**.
1. Haga clic en el botón "Open in GitHub Codespaces" de arriba.
2. Espere a que el entorno se construya (instalará automáticamente todas las dependencias).
3. Una vez lista la terminal, el entorno `frontmatter-academico` estará activo.

### Buenas prácticas (pre-commit)

Si clonas el repositorio localmente, se recomienda instalar los hooks de git para validación automática:

```bash
# Una vez activado el entorno conda
pre-commit install
```
Esto validará el frontmatter automáticamente al intentar hacer un commit.

> **Nota:** Si necesitas omitir estas validaciones en una emergencia:
> - **Omitir en un commit:** `git commit -n` (o `--no-verify`)
> - **Desinstalar hooks:** `pre-commit uninstall`
> - **Desactivar configuración:** Renombra el archivo: `mv .pre-commit-config.yaml .pre-commit-config.yaml.disabled`

## Estructura del proyecto

```text
biotecnologia/
├── assets/                # 🎨 Recursos estáticos (logos, imágenes)
├── scripts/               # 🛠️ Scripts de mantenimiento y automatización
├── myst.yml               # ⚙️ Configuración del sitio y metadatos globales
├── programa.md            # 📄 Programa del curso
├── planeamiento.json      # 📋 Datos estructurados del planeamiento 
├── sessions/              # 📚 Contenido del curso (Capítulos)
├── examples/              # 🧩 Ejemplos de referencia
├── exercises/             # ✍️ Actividades prácticas
├── syllabus-viewer/       # ⚛️ Aplicación React para visualizar el programa
└── .github/               # 🤖 Flujos de automatización (CI/CD)
```

**Nota sobre la estructura de contenido:**
El curso sigue una arquitectura modular donde los contenidos prácticos no residen directamente en los archivos de sesión (`sessions/`), sino que se inyectan dinámicamente:
- **`examples/`**: Contiene ejemplos resueltos y casos de estudio.
- **`exercises/`**: Contiene los ejercicios propuestos, estructurados semánticamente mediante la directiva `{exercise}` de MyST.
Esta separación permite reutilizar componentes y facilita el mantenimiento.



## Reproducibilidad y configuración local

Para garantizar un entorno de desarrollo consistente, este proyecto utiliza Anaconda/Miniconda.

### 1. Configuración del entorno
```bash
# Crear el entorno desde el archivo de configuración
conda env create -f environment.yml

# Activar el entorno
conda activate frontmatter-academico
```

### 2. Verificación y validación
Se incluyen scripts para verificar la integridad del entorno y el contenido:

- **Verificar entorno técnico:**
  ```bash
  # Linux / macOS / WSL
  ./scripts/verify_env.sh

  # Windows (PowerShell)
  .\scripts\verify_env.ps1
  ```
  Comprueba que todas las herramientas necesarias (MyST, Pandoc, Python, etc.) estén instaladas y accesibles.

- **Validar frontmatter:**
  ```bash
  python3 scripts/validate_frontmatter.py
  ```
  Analiza todos los archivos en `sessions/` para asegurar que cumplen con la estructura de metadatos requerida. **Emite advertencias (no errores)** para campos opcionales como `activities`, `evaluation` y `references`, permitiendo una validación más flexible.

- **Generar tabla de sesiones:**
  ```bash
  python3 scripts/generate_sessions_table.py
  ```
  Escanea los archivos en `sessions/` y regenera automáticamente `sessions_table.md`.

- **Generación de skeleton:**
  ```bash
  # Generar todas las sesiones
  python3 scripts/generate_sessions.py

  # Generar una semana específica (no sobreescribe, crea copia)
  python3 scripts/generate_sessions.py --week 1
  ```
  Script automatizado refactorizado que utiliza `planeamiento.json` como única fuente de verdad (eliminando la dependencia de Excel). Cuenta con **detección de archivos existentes** para evitar la sobreescritura accidental y soporte para argumentos CLI.


### 3. Ejecución del servidor local

Una vez configurado y verificado el entorno, puedes iniciar el servidor de desarrollo:

```bash
myst start
```
El sitio estará disponible en `http://localhost:3000`.

## Presentación interactiva (React)

El proyecto incluye una presentación interactiva construida con **React, TypeScript, Tailwind CSS y Vite**, ubicada en `presentation-react/`.

### Características principales
- **Sistema de temas dinámico**: Permite cambiar la paleta de colores en tiempo real (Azul, Violeta, Naranja, etc.), afectando semánticamente a todos los componentes.
- **Modo oscuro/claro**: Soporte nativo con persistencia en `localStorage`.
- **Accesibilidad (A11y)**:
    - Cumplimiento de estándares de contraste WCAG AA mediante cálculo de luminancia relativa.
    - Navegación completa por teclado (Tab, Flechas, Enter).
    - Etiquetas ARIA y roles semánticos.
- **Arquitectura de componentes**:
    - Componentes reutilizables: `SlideLayout`, `IconCard`, `CodeBlock`, `CallToAction`, `MathBlock` (KaTeX), `ImageBlock`.
    - Lógica de colores centralizada en `src/utils/colors.js`.
    - **Documentación**: Todos los componentes comunes cuentan con documentación JSDoc completa.
    - **Modularidad**: Las diapositivas se cargan dinámicamente desde `src/components/slides/`, facilitando el mantenimiento.

### Comandos de desarrollo
```bash
cd presentation-react
npm install
npm run dev   # Iniciar servidor de desarrollo en localhost:5173
npm run build # Generar build de producción (single-file)
```

**Nota:** El pipeline de CI/CD (`deploy.yml`) construye y despliega automáticamente esta presentación en cada push a main.


## Asistencia de IA

Este proyecto contó con la asistencia de **Antigravity**, un agente de codificación avanzado desarrollado por el equipo de Google Deepmind. Su papel en el desarrollo incluye:

- **Refactorización y optimización**: Mejora continua de la calidad del código, asegurando consistencia y adherencia a las mejores prácticas en Python, TypeScript y React.
- **Mantenimiento del entorno**: Gestión de scripts de validación, automatización de flujos de trabajo (CI/CD) y verificación de dependencias.
- **Documentación dinámica**: Generación y actualización de documentación técnica, como este README, asegurando que refleje el estado actual del proyecto.
- **Soporte en desarrollo**: Asistencia en tiempo real para la resolución de errores, migración de tecnologías y scaffolding de nuevos componentes.
- **Prototipado de contenido pedagógico**: Redacción detallada de material instruccional, integrando conceptos físicos con aplicaciones biotecnológicas específicas.


## Licencia

Este material es abierto.
- **Contenido:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Código:** MIT
