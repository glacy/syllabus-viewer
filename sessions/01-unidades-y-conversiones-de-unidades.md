---
title: Unidades y conversión de unidades
subtitle: Sistema Internacional de Unidades
subject: Semana 1
session:
  number: 1
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Unidades
- conversión
- unidades
- SI
- análisis dimensional
learning_objectives:
- Distinguir entre unidades estándar y sistemas de unidades.
- Enumerar las unidades fundamentales del Sistema Internacional de Unidades.
- Emplear múltiplos y prefijos de unidades métricas.
- Utilizar factores de conversión para convertir unidades dentro de un sistema o de un sistema de unidades a otro.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Distinguir entre unidades estándar y sistemas de unidades.
2. Enumerar las unidades fundamentales del Sistema Internacional de Unidades.
3. Emplear múltiplos y prefijos de unidades métricas.
4. Utilizar factores de conversión para convertir unidades dentro de un sistema o de un sistema de unidades a otro.
:::

### Introducción a las magnitudes físicas

La física es una ciencia experimental que se basa en la medición de magnitudes. Una **magnitud física** es cualquier propiedad de la materia o de la energía que puede medirse cuantitativamente. En el contexto de la **biotecnología**, la precisión en la medición de volúmenes, concentraciones, temperaturas y tiempos es crítica para el éxito de experimentos y bioprocesos.

Para que una medición tenga sentido, debe expresarse como un número seguido de una **unidad**. Decir "la temperatura de incubación es 37" no tiene sentido físico sin especificar si son grados Celsius, Fahrenheit o Kelvin.

### a. Unidades del Sistema Internacional (SI)

En 1960, se estableció el **Sistema Internacional de Unidades (SI)** para estandarizar las mediciones científicas a nivel mundial. El SI se basa en 7 unidades fundamentales:

| Magnitud Básica | Unidad Base | Símbolo | Importancia en Biotecnología |
| :--- | :--- | :--- | :--- |
| **Longitud** | metro | m | Tamaño de biorreactores, distancia de migración en geles. |
| **Masa** | kilogramo | kg | Preparación de medios, cuantificación de biomasa. |
| **Tiempo** | segundo | s | Cinética enzimática, tasas de crecimiento. |
| **Corriente eléctrica** | amperio | A | Electroforesis, sensores electroquímicos. |
| **Temperatura termodinámica** | kelvin | K | Control térmico en fermentaciones (aunque °C es común). |
| **Cantidad de sustancia** | mol | mol | Concentración molar, estequiometría de reacciones. |
| **Intensidad luminosa** | candela | cd | Calibración de instrumentos ópticos (menos común). |

Las demás unidades (como Newton, Joule, Watt, Pascal) son **unidades derivadas**, formadas por combinaciones de las unidades fundamentales.

#### Prefijos del SI y notación científica

En biotecnología, trabajamos con escalas que van desde lo macroscópico (litros de cultivo) hasta lo molecular (nanómetros, picogramos). Los prefijos son esenciales:

| Prefijo | Símbolo | Factor | Ejemplo Biotecnológico |
| :--- | :--- | :--- | :--- |
| **Giga** | G | $10^9$ | Tamaño de genomas (pares de bases, Gb). |
| **Mega** | M | $10^6$ | Dalton (MDa) para complejos proteicos grandes. |
| **kilo** | k | $10^3$ | Kilobases (kb) de ADN. |
| **mili** | m | $10^{-3}$ | Mililitros (mL), milimolar (mM). |
| **micro** | $\mu$ | $10^{-6}$ | Microlitros ($\mu$L), micrómetros ($\mu$m) - tamaño celular típico. |
| **nano** | n | $10^{-9}$ | Nanómetros (nm) - virus, proteínas; nanomolar (nM). |
| **pico** | p | $10^{-12}$ | Picogramos (pg) - cantidad de ADN por célula. |

### b. Análisis dimensional

El análisis dimensional es una herramienta para verificar la consistencia de las ecuaciones físicas. Las dimensiones fundamentales son:
- Longitud: $[L]$
- Masa: $[M]$
- Tiempo: $[T]$

```{note} **Regla de homogeneidad**:
 En cualquier ecuación física válida, todos los términos sumados o igualados deben tener las mismas dimensiones.
```

*Ejemplo*: Verificar la fórmula de distancia en movimiento uniforme, $d = v \cdot t$.
- Dimensión de distancia ($d$): $[L]$
- Dimensión de velocidad ($v$): $[L]/[T]$
- Dimensión de tiempo ($t$): $[T]$

$$ [L] = \frac{[L]}{[T]} \cdot [T] = [L] $$

La ecuación es dimensionalmente correcta.

### c. Conversión de unidades

Para convertir unidades, utilizamos el **método de los factores de conversión** (o de la cadena). Un factor de conversión es una fracción igual a 1.

:::{note} Convertir 80 km/h a m/s.

```{include} ../examples/01-conversion-kmh-ms.md
```
:::

:::{note} Convertir 10 mL/min a L/h.

```{include} ../examples/01-conversion-flujo.md
```
:::

---

### Actividades

#### Taller práctico: Física en la cocina
Esta actividad principal de la semana se enfoca en la estimación y conversión de unidades en un contexto cotidiano pero complejo.
- [Ver instructivo del taller](../activities/01-taller-fisica-en-la-cocina.md)

### Actividad de discusión guiada
En grupos pequeños (3-4 personas), resuelva los siguientes problemas aplicados:

```{include} ../exercises/01-discusion-guiada.md
```

---

## Evaluación

**Taller en clase (formativo)**:
Se entregará una hoja de trabajo individual al final de la sesión para verificar la comprensión de:
- Conversión de prefijos (ej. ng a $\mu$g).
- Conversión de unidades compuestas (ej. densidad de g/cm³ a kg/m³).

**Criterios de éxito**:
- Los estudiantes pueden realizar conversiones de cadena sin errores de orden de magnitud.
- Identifican correctamente las dimensiones de variables físicas comunes.

---

## Referencias

{cite}:p`wilson2007fisica`
{cite}:p`bipm2019si`

```{bibliography}
:filter: docname in docnames
```
