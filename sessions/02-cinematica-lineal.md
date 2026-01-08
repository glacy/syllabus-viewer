---
title: Cinemática lineal
subtitle: Desplazamiento, velocidad y aceleración
subject: Semana 2
session:
  number: 2
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- cinemática
- lineal
- vectores
- aceleración
- velocidad
learning_objectives:
- Definir distancia y calcular rapidez.
- Explicar qué es una cantidad escalar.
- Definir desplazamiento y calcular velocidad.
- Explicar la diferencia entre cantidades escalares y vectoriales.
- Interpretar gráficas de posición-tiempo y velocidad-tiempo para objetos en MRU y MRUA.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Definir distancia y calcular rapidez.
2. Explicar qué es una cantidad escalar.
3. Definir desplazamiento y calcular velocidad.
4. Explicar la diferencia entre cantidades escalares y vectoriales.
5. Interpretar gráficas de posición-tiempo y velocidad-tiempo para objetos en MRU y MRUA.
:::



### Introducción a la Cinemática

La **cinemática** es la rama de la física que estudia el movimiento de los cuerpos sin atender a las causas que lo producen (fuerzas). En biología y biotecnología, el movimiento es fundamental: desde el transporte de organelas dentro de una célula, la migración de ADN en un gel de electroforesis, hasta la sedimentación de partículas en una centrífuga.

### a. Cantidades Escalares y Vectoriales

Para describir el movimiento, primero debemos distinguir entre dos tipos de magnitudes físicas:

#### Cantidades Escalares
Se definen completamente por su **magnitud** (un número y una unidad). No tienen dirección asociada.
- *Ejemplos*: Tiempo ($t$), masa ($m$), distancia ($d$), rapidez ($s$), temperatura ($T$).
- *Biotech*: "El tiempo de reacción fue de 20 minutos".

#### Cantidades Vectoriales
Requieren **magnitud y dirección** para ser descritas completamente.
- *Ejemplos*: Desplazamiento ($\Delta x$), velocidad ($v$), aceleración ($a$), fuerza ($F$).
- *Biotech*: "La proteína migra *hacia el ánodo* (dirección) a 2 cm/h (magnitud)".

| Concepto Escalar | Concepto Vectorial Correspondiente | Diferencia Clave |
| :--- | :--- | :--- |
| **Distancia** ($d$): Longitud total recorrida. | **Desplazamiento** ($\Delta x$): Cambio neto de posición ($x_f - x_i$). | La distancia siempre es positiva; el desplazamiento puede ser cero o negativo. |
| **Rapidez** ($s$): Distancia / tiempo. | **Velocidad** ($v$): Desplazamiento / tiempo. | La velocidad indica "qué tan rápido" y "hacia dónde". |

### b. Descripción Matemática del Movimiento

#### Posición y Desplazamiento
Si una partícula se mueve a lo largo del eje $x$:
- **Desplazamiento**: $\Delta x = x_f - x_i$

#### Velocidad Promedio vs Instantánea
- **Velocidad Promedio**: $\bar{v} = \frac{\Delta x}{\Delta t} = \frac{x_f - x_i}{t_f - t_i}$
- **Velocidad Instantánea**: La velocidad en un instante específico ($t$). Es el límite de la velocidad promedio cuando $\Delta t \to 0$ (la derivada de la posición).

#### Aceleración
La aceleración es la tasa de cambio de la velocidad.
- **Aceleración Promedio**: $\bar{a} = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{t_f - t_i}$

> **Importante**: Si la velocidad y la aceleración tienen el **mismo signo**, el objeto aumenta su rapidez. Si tienen **signos opuestos**, el objeto frena.

### c. Ecuaciones de Cinemática (Aceleración Constante)

Para el Movimiento Rectilíneo Uniformemente Acelerado (MRUA), donde $a$ es constante, utilizamos 4 ecuaciones fundamentales ("Las 4 Fantásticas"):

1.  **Velocidad en función del tiempo**:
    $$ v = v_0 + a t $$

2.  **Posición en función del tiempo**:
    $$ x = x_0 + v_0 t + \frac{1}{2} a t^2 $$

3.  **Velocidad en función de la posición** (independiente del tiempo):
    $$ v^2 = v_0^2 + 2a (x - x_0) $$

4.  **Velocidad promedio** (solo para aceleración constante):
    $$ \bar{v} = \frac{v + v_0}{2} $$

Donde:
- $x_0, v_0$: Posición y velocidad inicial ($t=0$).
- $x, v$: Posición y velocidad en el tiempo $t$.
- $a$: Aceleración constante.

### d. Aplicaciones en Biotecnología

#### 1. Electroforesis (Movimiento Rectilíneo Uniforme - MRU)
En una electroforesis, las biomoléculas (ADN, proteínas) se mueven a través de un gel bajo un campo eléctrico. Una vez alcanzada la velocidad terminal, la fuerza eléctrica se equilibra con la fricción, y la partícula se mueve con **velocidad constante** ($a=0$).
- Ecuación aplicable: $x = x_0 + v t$
- La distancia recorrida ($x$) es proporcional al tiempo ($t$). Esto permite estimar tamaños moleculares comparando distancias de migración.

#### 2. Sedimentación y Centrifugación
Aunque la centrifugación es un movimiento circular, la separación de partículas se basa en velocidades de sedimentación. En la fase de aceleración de la centrífuga (hasta llegar a RPM máximas), las partículas experimentan cambios de velocidad tangencial.
- El concepto de velocidad límite o terminal ($v_{sed}$) es crucial para determinar tiempos de separación efectivos.

### e. Interpretación de Gráficas

- **Gráfica Posición vs Tiempo ($x$ vs $t$)**:
    - La **pendiente** de la recta tangente en cualquier punto es la **velocidad instantánea**.
    - Recta horizontal = objeto en reposo ($v=0$).
    - Recta inclinada recta = velocidad constante (MRU).
    - Curva parabólica = aceleración constante (MRUA).

- **Gráfica Velocidad vs Tiempo ($v$ vs $t$)**:
    - La **pendiente** es la **aceleración**.
    - El **área bajo la curva** representa el **desplazamiento** ($\Delta x$).

---

### Actividades


#### Taller práctico: Rastreo de Movimiento Celular: Uso de software (ImageJ/Fiji)
Esta actividad principal de la semana se enfoca astrear la trayectoria de células móviles (ej. bacterias, espermatozoides o células inmunes), obtener coordenadas $(x, y)$ en función del tiempo y calcular parámetros cinemáticos como velocidad promedio y velocidad instantánea.
- [Ver instructivo del taller](../activities/04-rastreo-estroboscopico.md)


#### Resolución de problemas

```{include} ../exercises/02-problemas-cinematica.md
```

---

## Evaluación

**Quiz Rápido**:
Se presentarán 3 gráficas de movimiento ($x$ vs $t$) y los estudiantes deberán describir verbalmente el movimiento (ej. "acelera", "viaja a velocidad constante hacia atrás", "está quieto").

---

## Referencias

{cite}:p`wilson2007fisica`
{cite}:p`jou2009fisica`

```{bibliography}
:filter: docname in docnames
```
