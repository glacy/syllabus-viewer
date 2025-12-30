---
title: "Jupyter Book vs MyST"
subtitle: "Evolución, diferencias y convergencia"
subject: "Anexo"
type: reference
keywords:
  - jupyter book
  - myst
  - ecosistema
  - migración
learning_objectives:
  - "Distinguir las diferencias entre Jupyter Book y el ecosistema MyST."
  - "Comprender la evolución de la configuración de estructura de documentos."
---

Es común confundir **Jupyter Book** con **MyST (Markedly Structured Text)**. Aunque están íntimamente relacionados, son herramientas distintas que están evolucionando a ritmos diferentes.

Esta guía aclara sus diferencias y por qué a veces encontramos instrucciones contradictorias en la documentación.

## Las definiciones

### Jupyter Book (clásico)
Es una herramienta basada en Python (`pip install jupyter-book`) que utiliza **Sphinx** como motor de construcción.
- **Rol:** Orquestador. Toma tus archivos, corre Sphinx, y genera un HTML estático.
- **Configuración:** Usa `_config.yml` y `_toc.yml`.
- **Estado:** Estable, pero su arquitectura basada en Sphinx es lenta y difícil de extender.

### MyST (moderno / Estándar Abierto)
Originalmente era solo el lenguaje de marcado (Markdown con superpoderes). Hoy, **MyST** es un ecosistema completo independiente de Python y Sphinx.
- **Rol:** Estándar de ciencia abierta. Incluye su propio CLI (`myst start`) que es mucho más rápido y moderno (basado en Javascript/Node).
- **Configuración:** Usa `myst.yml`.
- **Estado:** En rápida evolución. Es el futuro de la publicación científica.

## Diferencias clave: La trampa del TOC

El punto de mayor confusión actual es la definición de la estructura.

| Característica | Jupyter Book (`_toc.yml`) | MyST CLI (`myst.yml`) |
|----------------|---------------------------|-----------------------|
| **Estructura** | Bipartita: `parts` vs `chapters` | Recursiva: `toc` contiene lista de nodos |
| **Grupos**     | `parts: [{caption: "..."}]` | `{title: "...", children: [...]}` |
| **Archivos**   | `chapters: [{file: "..."}]` | `{file: "..."}` |
| **Raíz**       | `root: index`               | `project.toc` (primer archivo o explícito) |

### Ejemplo de Migración

**En Jupyter Book legacy (`_toc.yml`):**
```yaml
parts:
  - caption: "Fundamentos"
    chapters:
       - file: intro
```

**En MyST moderno (`myst.yml`):**
```yaml
project:
  toc:
    - title: "Fundamentos"
      children:
        - file: intro.md
```

## ¿Por qué MyST?

Aunque MyST soporta leer archivos antiguos (`_config.yml` y `_toc.yml`) para importar proyectos existentes, la recomendación actual es centralizar todo en **`myst.yml`**.

**Razones:**

1.  **Fuente Única de Verdad**: `myst.yml` unifica metadatos del proyecto (`project`), estructura (`toc`) y configuración visual (`site`).
2.  **Estructura Flexible**: La lista `toc` permite anidar niveles arbitrariamente, mientras que `parts` de JB era una estructura rígida de dos niveles.
3.  **Explícito**: MyST requiere extensiones de archivo explícitas (`.md`), reduciendo ambigüedades.

## Hacia el futuro

El ecosistema se está moviendo hacia **MyST** puro.
- Los documentos son más portátiles.
- La construcción es instantánea.
- La validación de metadatos es más estricta (lo cual es bueno para la ciencia).

Este curso utiliza principios agnósticos: el **Frontmatter** bien diseñado funciona en ambos sistemas.
