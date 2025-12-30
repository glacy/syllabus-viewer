---
title: "Banco de ejemplos comentados"
subtitle: "Patrones de frontmatter listos para usar"
subject: "Anexo"
type: reference
keywords:
  - ejemplos
  - plantillas
  - copy-paste
learning_objectives:
  - "Proveer plantillas de metadatos listas para usar."
  - "Visualizar ejemplos de estructura para diferentes tipos de documentos."
---

Esta sección recopila los ejemplos generados en la carpeta `examples/` del repositorio, presentados aquí para facilitar su lectura y reutilización.

Puede copiar estos bloques y adaptarlos a sus necesidades.

## 1. Ejemplos Minimalistas

Ideales para notas rápidas o documentos donde la metada no es crítica.

### Nota Simple (`examples/minimal/nota-simple.md`)

```{include} ../examples/minimal/nota-simple.md
:code: yaml
```

### Reporte Básico (`examples/minimal/reporte-basico.md`)

```{include} ../examples/minimal/reporte-basico.md
:code: yaml
```

## 2. Contexto Educativo

Estos ejemplos incluyen metadatos pedagógicos y de logística, útiles para cursos estructurados.

### Programa de Curso (`examples/education/programa-curso.md`)

Note el uso de listas para `roles` y la definición de licencia explícita.

```{include} ../examples/education/programa-curso.md
:code: yaml
```

### Sesión de Laboratorio (`examples/education/laboratorio.md`)

Aquí se agrupan los datos logísticos bajo la clave `session`, manteniendo el nivel superior limpio.

```{include} ../examples/education/laboratorio.md
:code: yaml
```

## 3. Contexto Científico

Para artículos (`papers`) o conferencias, donde la precisión de la atribución es vital.

### Artículo Científico (`examples/article/paper-cientifico.md`)

Observe la inclusión de identificadores persistentes (`orcid`, `doi`) y datos de publicación.

```{include} ../examples/article/paper-cientifico.md
:code: yaml
```

### Ponencia en Conferencia (`examples/article/charla-conferencia.md`)

```{include} ../examples/article/charla-conferencia.md
:code: yaml
```
