---
title: "Frontmatter en contextos académicos"
subtitle: "Identidad, autoría y contexto institucional"
subject: "Sesión 2"
session:
  number: 2
  type: lecture
  duration: "1.5 horas"
learning_objectives:
  - "Identificar estructuras de frontmatter en diferentes contextos"
  - "Diseñar un frontmatter académico básico que describa correctamente un documento"
  - "Reconocer buenas prácticas y errores comunes en el uso de metadatos académicos."
keywords:
  - frontmatter
  - metadatos académicos
  - autoría
  - licencias
  - documentación universitaria
---


## Introducción

En la sesión anterior se estableció que el frontmatter permite declarar formalmente qué es un documento.

En esta sesión avanzamos un paso más: qué información debe declarar un documento académico para ser considerado completo, reutilizable y evaluable.

En contextos universitarios y científicos, los documentos no circulan de manera aislada. Forman parte de:

- cursos,
- programas académicos,
- proyectos de investigación,
- repositorios institucionales.

Un frontmatter incompleto o mal diseñado no es un detalle menor: afecta la atribución, la reutilización y la validez académica del material.

## Conceptos clave

### Autoría académica

La autoría no se limita a un nombre propio. En documentación académica moderna incluye:

- nombre de la persona autora,
- rol (autor, docente, editor),
- afiliación institucional,
- contexto del documento (curso, proyecto, institución).

Declarar explícitamente la autoría:

- protege la atribución,
- facilita la citación,
- permite distinguir responsabilidades académicas.

La autoría moderna exige precisión. En lugar de roles genéricos, se recomienda utilizar la taxonomía **CRediT** [@niso_credit] para especificar contribuciones:
- Conceptualization
- Methodology
- Software
- Writing - original draft

### Afiliación institucional

La afiliación vincula el documento con una estructura académica formal.

Ejemplos:

- universidad,
- escuela o departamento,
- programa académico,
- proyecto institucional.

Esto es especialmente relevante en:

- material docente,
- recursos educativos abiertos,
- procesos de acreditación.

### Licencias académicas

Todo documento académico debería declarar bajo qué condiciones puede ser reutilizado.

En ausencia de una licencia explícita:

- la reutilización queda legalmente restringida,
- se limita el impacto educativo y científico.

Licencias abiertas (por ejemplo, Creative Commons) son una práctica estándar en educación superior y ciencia abierta.

### Palabras clave (keywords)

Las palabras clave permiten:

- indexación temática,
- búsqueda eficiente,
- organización semántica del material.

No son etiquetas arbitrarias: deben reflejar los conceptos centrales del documento, no su forma o extensión.

## Ejemplo guiado

### Frontmatter académico mínimo

Un frontmatter académico básico debe responder, al menos, a estas preguntas:

- ¿qué es el documento?
- ¿quién lo produjo?
- ¿en qué contexto académico?
- ¿bajo qué condiciones se usa?

Un ejemplo conceptual de frontmatter adecuado incluye:

```yaml
---
title: "Guía introductoria a los metadatos académicos"
authors:
  - name: Gerardo Lacy Mora
    affiliation: Instituto Tecnológico de Costa Rica
    roles:
      - author
      - instructor
keywords:
  - metadatos
  - documentación académica
license: CC-BY-4.0
---
```


Este bloque permite que una plataforma o repositorio entienda el documento sin leer su contenido.

Errores comunes

Algunos errores frecuentes en documentación académica:

- usar solo un encabezado visual como título;
- omitir la licencia;
- mezclar metadatos con el contenido narrativo;
- usar palabras clave vagas o irrelevantes;
- declarar autoría sin contexto institucional.

Estos errores no suelen impedir la lectura humana, pero sí degradan la calidad académica del material.

## Actividad práctica

```{include} ../exercises/02-frontmatter-basico.md
```



Lecturas y referencias

- [@creativecommons]
- [@coar_metadata]
- [@mystmarkdown]


> Un documento académico sin metadatos explícitos es un documento incompleto, aunque esté bien escrito.

En la siguiente sesión se abordará cómo diseñar metadatos de forma consistente y reutilizable, evitando errores que se amplifican a escala institucional.
