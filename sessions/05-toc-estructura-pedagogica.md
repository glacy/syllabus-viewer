---
title: "Estructura pedagógica con myst.yml"
subtitle: "Organización de contenidos y narrativa didáctica"
subject: "Sesión 5"
session:
  number: 5
  type: lecture
  duration: "1.5 horas"
learning_objectives:
  - "Comprender el rol de `myst.yml` como estructura pedagógica explícita."
  - "Declarar estructuras curriculares mediante el campo `toc`"
  - "Diseñar progresiones didácticas navegables"
keywords:
  - estructura
  - pedagogía
  - navegación
  - myst.yml
---


En sistemas tradicionales, la tabla de contenidos es principalmente decorativa.
En el ecosistema MyST, **`myst.yml`** cumple una función mucho más profunda:

Define la estructura cognitiva y pedagógica del curso.

No es solo un índice, sino una declaración explícita de secuencia didáctica, jerarquía conceptual y progresión evaluable.

## ¿Qué es realmente la sección `toc`?

### Rol técnico

Desde el punto de vista técnico, la llave `toc` en `myst.yml`:

- indica qué archivos se construyen;
- define el orden de navegación;
- establece jerarquías entre documentos.

Pero esta visión es insuficiente para contextos educativos.

### Rol pedagógico

Desde el punto de vista académico, la estructura `toc`:

- hace explícito el diseño curricular;
- comunica la progresión de dificultad;
- refleja decisiones didácticas intencionales.

Por ello, debe diseñarse con el mismo cuidado que un programa de curso.

## Estructura jerárquica y aprendizaje


Un curso típico puede estructurarse en:

- portada / introducción general;
- bloques temáticos;
- sesiones individuales;
- actividades o evaluaciones.

Cada nivel responde a una función cognitiva distinta:

- orientación,
- construcción conceptual,
- práctica,
- evaluación.

### Jerarquía como narrativa

El orden en `myst.yml` cuenta una historia:

- qué se aprende primero;
- qué depende de qué;
- dónde se espera síntesis o evaluación.

Una mala jerarquía produce:

- desorientación,
- redundancia,
- sobrecarga cognitiva.

### Estructura de árbol: Parts, Chapters y Sections

Para implementar esta narrativa, MyST usa una estructura recursiva basada en `file`, `title` y `children`:

#### 1. Grupos (Parts) / Nodos con `title`
Se definen mediante una llave `title` y una lista de `children`.
- **Equivalencia técnica:** `title: "Nombre del Grupo"` + `children: [...]`
- **Uso pedagógico:** Marcar cambios de "Unidad" o "Módulo".

#### 2. Archivos (Chapters) / Nodos con `file`
Se definen mediante la llave `file` apuntando a un documento Markdown.
- **Equivalencia técnica:** `file: ruta/al/archivo.md`
- **Uso pedagógico:** Representan la "unidad atómica" de aprendizaje (ej. una clase de 1.5 horas).

#### 3. Secciones internas
Son los subtítulos dentro de un archivo (`##`, `###`).
MyST genera automáticamente la navegación interna para estas secciones. Si un subtítulo requiere aparecer explícitamente en el nivel superior del TOC, debe promoverse a archivo independiente.

### Ejemplo concreto de `myst.yml` pedagógico

A continuación, un ejemplo alineado con este curso:

```yaml
version: 1
project:
  toc:
    - file: index.md
    
    - title: "Fundamentos"
      children:
        - file: sessions/01-introduccion-frontmatter.md
        - file: sessions/02-frontmatter-academico.md

    - title: "Diseño semántico"
      children:
        - file: sessions/03-diseno-semantico-metadatos.md
        - file: sessions/04-herencia-frontmatter.md

    - title: "Integración y evaluación"
      children:
        - file: sessions/05-toc-estructura-pedagogica.md
        - file: sessions/06-proyecto-integrador.md
```

**Nota:** Anteriormente se utilizaba un archivo separado llamado `_toc.yml`. Aunque MyST aún lo soporta por compatibilidad, la práctica moderna es centralizar todo en `myst.yml`.

#### Lectura pedagógica del ejemplo

Este bloque `toc` comunica explícitamente que:

- el curso progresa de fundamentos a diseño;
- la semántica precede a la implementación;
- la evaluación aparece al final como integración.

No es una decisión técnica, es una postura didáctica.

### Relación entre estructura y evaluación

Cuando `myst.yml` está bien diseñado:

- cada sesión tiene un rol claro;
- los productos parciales preparan el proyecto final;
- la evaluación es acumulativa y coherente.

Esto facilita:

- rúbricas alineadas;
- seguimiento del aprendizaje;
- retroalimentación formativa.

#### Transparencia académica

Una estructura clara permite que:

- estudiantes comprendan el recorrido completo;
- evaluadores externos entiendan la lógica del curso;
- el curso sea reutilizable y auditable.

Esto es especialmente importante en entornos universitarios.

## Actividad práctica

```{include} ../exercises/05-analisis-toc.md
```



## Lecturas y referencias

- [@jupyterbook]
- [@biggs1996enhancing]
- [@wiggins2005understanding]


> La navegación no es neutral: enseña tanto como el contenido.

En la Sesión 6 se integrarán todos los elementos en un proyecto final evaluable, donde el frontmatter y la configuración centralizada en `myst.yml` funcionen como un sistema coherente.