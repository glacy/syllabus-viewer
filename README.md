# Diseño semántico de documentos académicos

[![deploy](https://github.com/glacy/frontmatter-academico/actions/workflows/deploy.yml/badge.svg)](https://github.com/glacy/frontmatter-academico/actions/workflows/deploy.yml)


**Curso introductorio sobre frontmatter, metadatos y publicación reproducible.**

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/glacy/frontmatter-academico)

🚀 **Sitio web oficial (Versión compilada):** [https://glacy.github.io/frontmatter-academico](https://glacy.github.io/frontmatter-academico)

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
frontmatter-academico/
├── assets/                # 🎨 Recursos estáticos (logos, imágenes)
├── scripts/               # 🛠️ Scripts de mantenimiento y automatización
├── myst.yml               # ⚙️ Configuración del sitio y metadatos globales
├── index.md               # 🏠 Portada del curso (Home)
├── sessions/              # 📚 Contenido del curso (Capítulos)
├── examples/              # 🧩 Ejemplos de referencia
├── exercises/             # ✍️ Actividades prácticas
└── .github/               # 🤖 Flujos de automatización (CI/CD)
```



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
  Analiza todos los archivos en `sessions/` para asegurar que cumplen con la estructura de metadatos requerida (título, objetivos, keywords, etc.).

- **Generar tabla de sesiones:**
  ```bash
  python3 scripts/generate_sessions_table.py
  ```
  Escanea los archivos en `sessions/` y regenera automáticamente `sessions_table.md` con los títulos y objetivos de aprendizaje. **Nota:** Este paso se ejecuta automáticamente al desplegar el sitio vía GitHub Actions.


### 3. Ejecución del servidor local

Una vez configurado y verificado el entorno, puedes iniciar el servidor de desarrollo:

```bash
myst start
```
El sitio estará disponible en `http://localhost:3000`.

## Presentación Dinámica (React)

El proyecto incluye una presentación interactiva construida con **React, Tailwind CSS y Vite**, ubicada en `presentation-react/`.

### Características Principales
- **Sistema de Temas Dinámico**: Permite cambiar la paleta de colores en tiempo real (Azul, Violeta, Naranja, etc.), afectando semánticamente a todos los componentes.
- **Modo Oscuro/Claro**: Soporte nativo con persistencia en `localStorage`.
- **Accesibilidad (A11y)**:
    - Cumplimiento de estándares de contraste WCAG AA mediante cálculo de luminancia relativa.
    - Navegación completa por teclado (Tab, Flechas, Enter).
    - Etiquetas ARIA y roles semánticos.
- **Arquitectura de Componentes**:
    - Componentes reutilizables: `SlideLayout`, `IconCard`, `CodeBlock`, `CallToAction`.
    - Lógica de colores centralizada en `src/utils/colors.js`.

### Comandos de Desarrollo
```bash
cd presentation-react
npm install
npm run dev   # Iniciar servidor de desarrollo en localhost:5173
npm run build # Generar build de producción (single-file)
```

**Nota:** El pipeline de CI/CD (`deploy.yml`) construye y despliega automáticamente esta presentación en cada push a main.

## Licencia

Este material es abierto.
- **Contenido:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Código:** MIT
