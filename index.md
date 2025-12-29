---
title: "Diseño semántico de documentos académicos"

authors:
  - name: Gerardo Lacy Mora
    affiliation: astro.md
    roles:
      - Writing – original draft
      - Conceptualization

keywords:
  - frontmatter
  - metadatos
  - publicación académica
  - MyST
  - reproducibilidad
  - documentación educativa
  - ciencia abierta

license: CC-BY-4.0

subject: frontmatter y metadatos 

exports:
  - format: pdf
---


## Descripción general

Este curso introduce el **frontmatter** como mecanismo central para la **estructuración semántica de documentos académicos y educativos** dentro de pipelines modernos de publicación. Se aborda desde una perspectiva **conceptual, técnica y aplicada**, con énfasis en **reproducibilidad**, **docencia universitaria** y **comunicación científica**.

El curso está dirigido a personas que producen documentación académica (docentes, estudiantes de posgrado, investigadoras) y que desean transitar de flujos tipográficos tradicionales hacia **ecosistemas de publicación estructurada**.

---

## Objetivos del curso

Al finalizar el curso, la persona participante será capaz de:

- comprender el rol del frontmatter en la publicación académica moderna;
- diseñar metadatos estructurados para documentos educativos y científicos;
- evaluar críticamente la calidad semántica de los metadatos;

---

## Modalidad y duración

- **Modalidad:** presencial / virtual / híbrida  
- **Duración total:** 6 sesiones (≈ 9 horas)  
- **Evaluación:** basada en desempeño y proyecto integrador  

---

```{include} sessions_table.md
```

---

## Estructura del repositorio

    frontmatter-curso/
    ├── myst.yml               # Configuración central (MyST)
    ├── environment.yml        # Definición oficial del entorno Conda
    ├── verify_env.sh          # Verificación obligatoria del entorno
    ├── index.md               # Documento de referencia técnica y pedagógica (root)
    ├── sessions_table.md      # Tabla de sesiones y resultados de aprendizaje
    ├── sessions/              # Sesiones del curso
    │   ├── 01-introduccion-frontmatter.md
    │   ├── 02-frontmatter-academico.md
    │   ├── 03-diseno-semantico-metadatos.md
    │   ├── 04-herencia-frontmatter.md
    │   ├── 05-toc-estructura-pedagogica.md
    │   ├── 06-proyecto-integrador.md
    │   ├── anexo-sintaxis-yaml.md
    │   └── anexo-jupyterbook-vs-myst.md
    ├── examples/              # Ejemplos comentados
    │   ├── minimal/
    │   ├── education/
    │   └── article/
    ├── exercises/             # Actividades prácticas por sesión
    ├── project/               # Proyecto integrador final
    └── references.bib         # Bibliografía del curso

---

## Uso del repositorio

- `examples/` contiene ejemplos funcionales de frontmatter para distintos contextos académicos.
  - `legacy/` contiene archivos de configuración antiguos (`_toc.yml`, `_config.yml`) por referencia histórica.
- `exercises/` incluye actividades guiadas asociadas a cada sesión.
- `project/` se utiliza para desarrollar el producto final evaluable.

Se recomienda **no modificar** la estructura base del repositorio.

---


## Licenciamiento

Salvo indicación contraria, los materiales del curso se distribuyen bajo licencia  
**Creative Commons Atribución (CC BY)**.

Las personas participantes conservan la autoría de sus trabajos.

---

## Créditos y Transparencia

**Declaración de uso de IA**

La estructura, diseño curricular y contenidos base de este curso fueron desarrollados con la asistencia de sistemas de inteligencia artificial (**ChatGPT** y **Antigravity**).

La validación pedagógica, edición final, verificación de fuentes y responsabilidad académica recaen en el autor humano. Este curso sirve también como demostración de flujos de trabajo colaborativo humano-IA en la producción de material educativo abierto.

---

## Público objetivo

- Docentes universitarios  
- Estudiantes de posgrado  
- Investigadores y personal académico  
- Equipos de innovación educativa  

---

## Observación final

Este curso no busca enseñar una herramienta específica, sino **una forma moderna de concebir los documentos académicos**: estructurados, reproducibles y semánticamente explícitos.



