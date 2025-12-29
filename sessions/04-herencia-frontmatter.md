---
title: "Herencia y reutilización de frontmatter"
subtitle: "Estrategias de configuración global y local"
subject: "Sesión 4"
session:
  number: 4
  type: lecture
  duration: "1.5 horas"
learning_objectives:
  - "Entender la herencia de metadatos en sistemas documentales"
  - "Diseñar un frontmatter base reutilizable para cursos académicos"
  - "Definir reglas de sobrescritura controlada de metadatos"
keywords:
  - frontmatter
  - herencia
  - reutilización
  - configuración
  - Jupyter Book
  - MyST
  - myst.yml
---


En sesiones anteriores se estableció que los metadatos deben ser semánticamente coherentes.
El siguiente paso natural es reconocer que, en un curso o libro académico, **muchos documentos comparten información común**.

Repetir esta información manualmente:

- incrementa errores,
- dificulta el mantenimiento,
- rompe la coherencia a largo plazo.

Esta sesión introduce el principio de **herencia de frontmatter**, una idea clave en la documentación académica moderna.

---


## El principio de herencia documental

La herencia implica que:

- ciertos metadatos se definen una sola vez;
- los documentos hijos los reutilizan;
- solo se especifica lo que cambia.

Este principio es común en:

- programación orientada a objetos,
- hojas de estilo,
- sistemas de publicación estructurada.

En documentación académica, la herencia reduce ruido y aumenta claridad.

---

## Metadatos candidatos a herencia

No todos los metadatos deben heredarse.

Típicamente se heredan:

- autores institucionales,
- afiliación académica,
- licencia,
- idioma,
- palabras clave generales del curso.

Se especializan:

- título,
- número de sesión,
- resultados de aprendizaje específicos,
- actividades.

---

## Frontmatter base: rol y alcance

**¿Qué es un frontmatter base?**

Es un conjunto de metadatos comunes que actúan como contrato semántico para todos los documentos del proyecto.

No describe un documento específico, sino:

- el curso como sistema,
- su identidad académica,
- sus reglas semánticas.

En el ecosistema moderno de MyST, este rol se cumple mediante el archivo **`myst.yml`**.

**`myst.yml`** centraliza la identidad del proyecto bajo la llave `project`:

```yaml
project:
  title: "Curso de Diseño Semántico"
  authors:
    - name: Universidad Ejemplo
  keywords:
    - educación
    - metadatos
  license: CC-BY-4.0
```

Cualquier documento dentro del proyecto hereda implícitamente este contexto.

---

## Beneficios académicos

Un frontmatter base en `myst.yml` permite:

- coherencia institucional automática;
- gestión centralizada de autoría y licencias;
- reutilización del curso en otros contextos;
- migración futura a otros sistemas.

Desde una perspectiva educativa, esto refuerza la idea de currículo estructurado.

---

## Especialización controlada de metadatos

Sobrescritura no es contradicción

Heredar metadatos no significa que todos los documentos sean idénticos.

Un documento puede:

- sobrescribir un campo heredado,
- añadir campos nuevos,
- redifinir valores existentes.

La regla fundamental es:

Un documento no debe contradecir el significado de los metadatos heredados.

---

## Ejemplo conceptual

Un curso puede declarar:

- idioma: español
- institución: universidad X

Una sesión específica puede:

- añadir keywords particulares,
- definir resultados de aprendizaje propios,
- declarar su tipo (lecture, lab).

No debe:

- cambiar arbitrariamente el idioma,
- redefinir la institución sin justificación explícita.

---

## Herencia en Jupyter Book y MyST

**Del libro a la jerarquía MyST**

MyST organiza el contenido en una estructura de árbol definida en `myst.yml` (sección `toc`).

- Proyecto
  - Grupo (Part)
    - Archivo (Chapter)
      - Sección

Cada nivel transmite contexto a los niveles inferiores.

Aunque la herencia no siempre es automática para todos los campos (depende de la herramienta de construcción), el diseño semántico asume que la información fluye de arriba hacia abajo.

---

## Buenas prácticas

- definir metadatos globales en `myst.yml` (bajo `project`);
- usar frontmatter mínimo y claro en cada archivo;
- documentar explícitamente qué campos son heredados;
- evitar duplicar información institucional.

Estas prácticas facilitan la lectura humana y el procesamiento automático.

---

## Actividad práctica

```{include} ../exercises/04-herencia.md
```



## Lecturas y referencias

- [@jupyterbook]
- [@mystmarkdown]
- [@w3c_metadata]

---



> La herencia de metadatos no es una optimización técnica, sino una decisión pedagógica y semántica.

En la próxima sesión se abordará la integración de frontmatter con myst.yml y la estructura pedagógica, conectando metadatos con navegación y evaluación.