---
title: "Guía de sintaxis YAML para humanos"
subtitle: "Reglas básicas, errores comunes y validación"
subject: "Anexo"
type: reference
keywords:
  - yaml
  - sintaxis
  - validación
  - errores comunes
learning_objectives:
  - "Entender las reglas básicas de indentación y formato en YAML."
  - "Identificar y corregir errores comunes de sintaxis."
---

YAML (YAML Ain't Markup Language) es un estándar de serialización de datos amigable para humanos. Es el lenguaje utilizado para el frontmatter y la configuración de Jupyter Book.

Aunque parece simple, es estricto. Esta guía resume las reglas vitales para evitar errores de construcción.

## Reglas de oro

### 1. La indentación es sagrada

En YAML, la estructura se define por espacios, no por llaves `{}` ni corchetes `[]` (aunque los soporta).

- **Regla:** Usa siempre **2 espacios** para indentar.
- **Prohibido:** No uses tabuladores (`Tab`).

**Correcto:**
```yaml
autor:
  nombre: "Gerardo"    # 2 espacios
  rol: "Instructor"    # 2 espacios
```

**Incorrecto:**
```yaml
autor:
    nombre: "Gerardo"  # 4 espacios (puede funcionar, pero no estándar)
	rol: "Instructor"    # Tabulador (ERROR FATAL)
```

### 2. Dos tipos de colecciones

Todo en YAML es un Diccionario (clave: valor) o una Lista (sucesión de elementos).

#### Diccionarios (Mapas)
Objetos con propiedades nombradas. Se usa dos puntos y espacio (`: `).

```yaml
session:
  number: 1
  duration: "2 horas"
```

> **Ojo:** Siempre debe haber un espacio después de los dos puntos. `key:value` es inválido; `key: value` es correcto.

#### Listas (Arreglos)
Sucesiones de elementos. Se usa un guion y espacio (`- `).

```yaml
keywords:
  - metadatos
  - semántica
  - frontmatter
```

### 3. Cadenas de texto (Strings)

Generalmente no requieren comillas, a menos que contengan caracteres especiales (`:`, `{`, `[`, `#`, `!`).

**Recomendación:** Usa comillas si dudas.

```yaml
title: "Introducción: El problema de los metadatos"  # Comillas obligatorias por los dos puntos
description: Texto simple sin caracteres raros        # No requiere comillas
```

## Errores comunes y cómo leerlos

### `ScannerError: mapping values are not allowed here`

Ocurre cuando te falta un espacio después de los dos puntos o indentaste mal una lista.

**Causa típica:**
```yaml
author:Gerardo   # Falta espacio
```

### `ParserError: while parsing a block mapping`

Generalmente es u error de alineación (indentación).

**Causa típica:**
```yaml
session:
  number: 1
 duration: "2h"  # Un espacio menos que la línea anterior
```

## Referencia rápida

| Estructura | Sintaxis | Ejemplo |
|------------|----------|---------|
| Clave-Valor | `key: value` | `title: "Hola"` |
| Lista | `- value` | `- item 1` |
| Comentario | `# texto` | `# Esto se ignora` |
| Bloque | `|` o `>` | Ver abajo |

### Bloques de texto largo

Si un valor ocupa varias líneas (ej. una descripción abstracta), usa `|` (literal) o `>` (plegado).

```yaml
abstract: >
  Este es un texto muy largo que se escribe
  en varias líneas para facilidad de lectura
  pero se renderiza como un solo párrafo.
```
