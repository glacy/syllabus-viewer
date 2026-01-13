# Guía de Solución de Problemas (Troubleshooting)

Este documento recopila los errores encontrados durante el desarrollo del proyecto `syllabus-viewer` y sus respectivas soluciones.

## 1. Configuración de Vitest: "No overload matches this call"

**Error:**
Al intentar ejecutar los tests o verificar los tipos en `vitest.config.ts`, aparece el error:
> Object literal may only specify known properties, and 'test' does not exist in type 'UserConfigExport'.

**Causa:**
Este error ocurre porque `defineConfig` se estaba importando desde `vite`, el cual no reconoce la propiedad `test` que es específica de Vitest.

**Solución:**
Cambiar la importación para usar `vitest/config` en lugar de `vite`.

```typescript
// vitest.config.ts
// Antes
import { defineConfig } from 'vite';

// Después
import { defineConfig } from 'vitest/config';
```

## 2. Importación de Tipos en TypeScript: "ReactNode is a type"

**Error:**
> 'ReactNode' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

**Causa:**
Cuando la opción `verbatimModuleSyntax` está habilitada en `tsconfig.json`, TypeScript requiere que las importaciones que son solo tipos se marquen explícitamente con la palabra clave `type`.

**Solución:**
Modificar la importación para incluir `type`.

```typescript
// Antes
import { ReactNode } from 'react';

// Después
import { type ReactNode } from 'react';
// O
import type { ReactNode } from 'react';
```

## 3. Tipado de Errores con Zod: "Property 'errors' does not exist"

**Error:**
Al manejar errores de validación de Zod, TypeScript puede quejarse de que la propiedad `errors` no existe en el objeto de error genérico.

**Causa:**
El objeto `error` en un bloque `catch` es de tipo `unknown` o `any` por defecto. TypeScript no sabe que es una instancia de `ZodError` automáticamente.

**Solución:**
Verificar que el error es una instancia de `ZodError` antes de acceder a sus propiedades.

```typescript
import { ZodError } from 'zod';

try {
  // código de validación
} catch (error) {
  if (error instanceof ZodError) {
    console.log(error.errors); // Ahora TypeScript sabe que 'errors' existe
  }
}
```

## 4. Error de Parsing en myst.yml

**Error:**
El comando `myst start` falla al iniciar debido a un error de sintaxis en `myst.yml`.

**Causa:**
Generalmente se debe a un formato YAML inválido, como comillas sin cerrar o indentación incorrecta en los metadatos.

**Solución:**
Revisar el archivo `myst.yml` con un validador de YAML o corregir manualmente la sintaxis (ej. asegurar que las cadenas de texto con caracteres especiales estén entre comillas).

## 5. UI Spacing: Subtítulo "pegado" al borde en WeekCard

**Problema:**
En el componente `WeekCard`, el subtítulo que aparece al expandir la tarjeta se renderizaba pegado al borde superior del contenedor, sin espacio visual.

**Causa:**
El contenedor padre (`motion.div` > `div`) tenía la clase `pt-0` (padding top 0), lo que eliminaba el espacio entre el borde superior y el contenido.

**Solución:**
Se cambió la clase `pt-0` por `pt-6` en `src/components/WeekCard.tsx` para restaurar el espaciado correcto.

```tsx
// src/components/WeekCard.tsx
// Antes
<div className="px-6 pb-6 pt-0 space-y-6 ...">

// Después
<div className="px-6 pb-6 pt-6 space-y-6 ...">
```

## 6. Accesibilidad: Botones de eliminar no visibles/navegables

**Problema:**
Los botones de eliminar ("x") en los items de contenido no eran accesibles vía teclado (no tomaban foco) y, al hacerlos enfocables, pulsar `Enter` disparaba el evento de colapso de la tarjeta madre.

**Causa:**
1. Faltaba manejo de estilos `focus` y opacidad.
2. El evento `KeyDown` ("Enter") propagaba al padre (`div` contenedor), que tenía un listener para expandir/colapsar.

**Solución:**
1. Se añadieron clases `focus:opacity-100` y estilos de anillo (`focus:ring`).
2. Se agregó `e.stopPropagation()` en el evento `onKeyDown` del botón.

```tsx
<button
    onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.stopPropagation();
        }
    }}
    // ... clases de foco ...
>
```

## 7. Edición: Borrar título forzaba fallback a content[0]

**Problema:**
En modo edición, al tratar de dejar el título de una sesión vacío (para reescribirlo), el campo se rellenaba automáticamente con el primer tema (`content[0]`) o un texto por defecto.

**Causa:**
La lógica de renderizado tenía un fallback agresivo para usuarios que viésen datos antiguos:
`const title = entry.title || (content[0] ...)`
Esto impedía tener un string vacío temporalmente mientras se editaba.

**Solución:**
Se ajustó la asignación de la variable `title` para que, estrictamente en modo edición (`isEditing`), respete el valor real de `entry.title` (incluso si es `""`).

```typescript
const title = isEditing 
    ? (entry.title || '') 
    : (entry.title || (fallback...));
```

## 8. Persistencia de datos vacíos (Objetivos, Referencias)

**Problema:**
Al borrar el texto de un objetivo o referencia, a veces quedaba el ítem vacío ("ghost item") visible como un punto o checkbox sin texto, especialmente al salir del modo edición.

**Solución:**
1. **Limpieza automática al salir:** Se implementó una función `pruneSyllabus` en `EditModeContext` que barre toda la estructura de datos y elimina strings vacíos de todas las listas (contenidos, objetivos, referencias, evaluaciones) al momento de desactivar el `isEditing`.
2. **UX de borrado:** Se agregó soporte para la tecla `Backspace`. Si el campo está vacío y se presiona Backspace, el ítem se elimina automáticamente y el foco pasa al anterior (comportamiento estándar de listas).
3. **Limpieza en Blur:** Se mantuvo la lógica de eliminar el ítem si se pierde el foco (`onBlur`) estando vacío.

---

## 9. Propiedad 'theme' inexistente en ThemeContext

**Error:**
> Property 'theme' does not exist on type 'ThemeContextType'.

**Causa:**
El contexto de tema (`ThemeContext`) expone una propiedad booleana `isDark`, pero se estaba intentando acceder a una propiedad `theme` (string) que no existe en la definición del tipo.

**Solución:**
Utilizar la propiedad destructurada `isDark` proporcionada por el hook `useTheme()`.

```typescript
// Antes
const { theme } = useTheme();
const isDark = theme === 'dark';

// Después
const { isDark } = useTheme();
```

---

*Este documento se actualizará a medida que encontremos y resolvamos nuevos problemas.*
