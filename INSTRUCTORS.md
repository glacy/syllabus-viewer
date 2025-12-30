# Guía para Instructores: GitHub Classroom

Este repositorio está diseñado para integrarse fácilmente con GitHub Classroom para la gestión de tareas y evaluación automática.

## 1. Configuración Inicial

1.  **Utilizar este repositorio como plantilla:**
    - Haga clic en el botón verde **"Use this template"** en la página principal del repositorio.
    - Cree un nuevo repositorio bajo su organización o usuario personal.
    - Seleccione "Include all branches" para mantener el historial si lo desea, aunque para una plantilla limpia usualmente basta con `main`.

2.  **Preparar el entorno de GitHub Classroom:**
    - Inicie sesión en [GitHub Classroom](https://classroom.github.com/).
    - Cree una nueva "Classroom" si aún no tiene una.
    - Vincúlela a su organización de GitHub.

## 2. Crear una Asignación (Assignment)

Al crear una nueva tarea en GitHub Classroom:

1.  Seleccione **"Create an individual assignment"**.
2.  **Basic Information:**
    - Nombre la tarea (ej. "Entrega-Sesion-01").
3.  **Starter Code:**
    - Seleccione el repositorio que creó en el paso 1 (su copia de este repositorio).
    - Esto asegurará que cada estudiante reciba una copia exacta de la estructura de archivos.
4.  **Autograding:**
    - En la sección "Add autograding tests", seleccione **"Run test"**.
    - **Test name:** `Validación de Frontmatter`
    - **Setup command:** `pip install pyyaml`
    - **Run command:** `./validate_frontmatter.sh`
    - **Points:** (Opcional) Asigne puntos si utiliza calificación numérica.

    *Nota: El repositorio ya incluye un archivo `.github/workflows/classroom.yml`. GitHub Classroom debería detectar esto automáticamente o permitirle usar la acción existente.*

## 3. Flujo de Trabajo del Estudiante

1.  El estudiante acepta la invitación de GitHub Classroom.
2.  Se crea un repositorio privado para el estudiante.
3.  Cada vez que el estudiante hace `git push`:
    - Se ejecuta `validate_frontmatter.sh`.
    - Si el frontmatter es incorrecto, el "check" fallará con una ❌ roja.
    - Si es correcto, aparecerá un ✔ verde.

## 4. Personalización

Puede modificar `validate_frontmatter.sh` y `classroom.yml` para agregar validaciones adicionales, como:

- Verificar la existencia de archivos específicos.
- Comprobar contenido mínimo (número de palabras).
- Validar bibliografía en `references.bib`.
