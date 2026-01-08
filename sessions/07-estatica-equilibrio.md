---
title: 'Estática: equilibrio'
subtitle: Cuerpo rígido y Torque
subject: Semana 7
session:
  number: 7
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Estática
- equilibrio
- cuerpo rígido
- torque
learning_objectives:
- Distinguir entre los movimientos traslacionales puros y rotacionales puros de los
  cuerpos rígidos
- Definir momento de fuerza
- Describir la relación entre la ubicación del centro de gravedad y la estabilidad.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Distinguir entre los movimientos traslacionales puros y rotacionales puros de los cuerpos rígidos
2. Definir momento de fuerza (torque)
3. Describir la relación entre la ubicación del centro de gravedad y la estabilidad.
:::

## Introducción

Hasta ahora hemos tratado a las células y partículas como "puntos". Pero las macromoléculas, huesos y equipos de laboratorio tienen dimensiones reales. Un objeto puede no moverse de su lugar, pero sí girar. La estática estudia las condiciones para que un sistema permanezca totalmente estable, algo esencial desde el diseño de prótesis hasta la estabilidad de complejos enzimáticos.

## 7.1 Cuerpo Rígido y Tipos de Movimiento

*   **Traslación pura**: Todos los puntos del cuerpo se mueven en la misma dirección y velocidad.
*   **Rotación pura**: Todos los puntos giran alrededor de un eje fijo.
*   **Movimiento combinado**: Un rotor de centrífuga mal equilibrado que vibra mientras gira.

## 7.2 Momento de Fuerza (Torque, $\vec{\tau}$)

Para hacer girar un objeto, no basta con aplicar fuerza; importa *dónde* y *cómo* se aplica. El torque es la capacidad de una fuerza para producir rotación.

$$ \tau = r \cdot F \cdot \sin(\theta) $$

*   $r$: Brazo de palanca (distancia desde el eje de giro al punto de aplicación).
*   $F$: Fuerza aplicada.
*   $\theta$: Ángulo entre $r$ y $F$.

SI unidades: $N \cdot m$.

:::{tip} En el Laboratorio
¿Por qué es difícil abrir la tapa de un reactor si tomamos la manibela cerca del eje? Porque el brazo de palanca ($r$) es pequeño, requiriendo mucha más fuerza ($F$) para lograr el mismo torque ($\tau$).
:::

## 7.3 Condiciones de Equilibrio

Para que un cuerpo rígido esté en **equilibrio estático** (ni se traslada ni gira):

1.  **Equilibrio Traslacional**: La suma de todas las fuerzas externas es cero.
    $$ \sum \vec{F} = 0 $$
2.  **Equilibrio Rotacional**: La suma de todos los toques es cero (respecto a cualquier eje).
    $$ \sum \vec{\tau} = 0 $$

### Centro de Gravedad (CG)
El punto promedio donde actúa la fuerza de gravedad total. Para fines de cálculo, podemos asumir que todo el peso del objeto se concentra aquí.
*   **Estabilidad**: Un objeto es estable si su CG está sobre su base de soporte. En biomecánica, esto define la postura. En diseño de equipos, define que no se vuelquen.

## 7.4 Aplicación: Biomecánica de las Palancas

El cuerpo humano y muchos organismos funcionan como sistemas de palancas (huesos y articulaciones).
*   **Fulcro**: Articulación.
*   **Esfuerzo**: Fuerza muscular.
*   **Carga**: Peso del miembro u objeto levantado.

Aunque en biotecnología molecular esto es menos directo, los modelos de **"Hinge motion"** (movimiento de bisagra) en enzimas (como la Hexoquinasa atrapando glucosa) se analizan energéticamente usando principios análogos de mecánica conformacional.

## ✍️ Ejercicios Propuestos

```{include} ../exercises/07-equilibrio-micropipeta.md
```
