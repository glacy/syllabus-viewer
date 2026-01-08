---
title: 'Dinámica'
subtitle: 'Leyes de Newton: tensión, peso, normal, fricción'
subject: Semana 4
session:
  number: 4
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Fuerzas
- tensión
- peso
- normal
- fricción
- leyes de newton
learning_objectives:
- "Identificar y representar las fuerzas comunes: tensión, peso, fuerza normal y fricción."
- Enunciar y aplicar las Leyes de Newton en situaciones físicas relevantes.
- Construir diagramas de cuerpo libre para analizar sistemas físicos
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Identificar y representar las fuerzas comunes: tensión, peso, fuerza normal y fricción.
2. Enunciar y aplicar las Leyes de Newton en situaciones físicas relevantes.
3. Construir diagramas de cuerpo libre para analizar sistemas físicos
:::

## Introducción

Las Leyes de Newton no solo explican por qué caen las manzanas; explican cómo nadan las bacterias, cómo se sedimentan las células sanguíneas y cómo funcionan las centrífugas. En esta sesión, aplicaremos la dinámica a sistemas de interés biológico.

## 4.1 Tipos de Fuerzas Comunes

Para analizar cualquier sistema biológico desde la física, primero debemos identificar las fuerzas que actúan sobre él.

### 1. Peso ($\vec{W}$ o $\vec{P}$)
Es la fuerza gravitacional que la Tierra ejerce sobre un objeto.
*   **Fórmula**: $W = m \cdot g$ (donde $g \approx 9.8 \text{ m/s}^2$)
*   **Biotech**: Es la base de la sedimentación. Las células más pesadas sedimentan más rápido.

### 2. Fuerza Normal ($\vec{N}$)
Es la fuerza de contacto ejercida por una superficie sobre un objeto, perpendicular a la superficie.
*   **Ejemplo**: La fuerza que el fondo de un tubo de ensayo ejerce sobre el pellet celular.

### 3. Tensión ($\vec{T}$)
Fuerza transmitida a través de una cuerda, cable o fibra.
*   **Biotech**: Mecánica del ADN al ser "estirado" durante la replicación o por pinzas ópticas. Los filamentos del citoesqueleto mantienen la forma celular mediante tensión (tensegridad).

### 4. Fricción ($\vec{f}$) y Arrastre
Fuerza que se opone al movimiento relativo.
*   **Fricción seca**: Superficies sólidas.
*   **Arrastre viscoso (Drag)**: Fundamental en fluidos. Una bacteria nadando "siente" principalmente fuerzas viscosas.

---

## 4.2 Las Leyes de Newton

### Primera Ley: Inercia
*Un cuerpo permanece en reposo o velocidad constante a menos que una fuerza neta externa actúe sobre él.*
*   **Implicación**: Si observas una célula moviéndose a velocidad constante en un fluido, significa que la fuerza neta es CERO. La fuerza de propulsión (flagelo) equilibra exactamente a la fuerza de arrastre viscoso.

### Segunda Ley: Dinámica ($F=ma$)
*La aceleración de un cuerpo es directamente proporcional a la fuerza neta e inversamente proporcional a su masa.*

$$ \sum \vec{F} = m \cdot \vec{a} $$

### Tercera Ley: Acción y Reacción
*Si el objeto A ejerce una fuerza sobre el B, el B ejerce una fuerza de igual magnitud y dirección opuesta sobre el A.*
*   **Ejemplo**: Un flagelo bacteriano empuja el agua hacia atrás; el agua empuja a la bacteria hacia adelante.

---

## 4.3 Diagrama de Cuerpo Libre (DCL)

El DCL es la herramienta más potente para resolver problemas de dinámica. Consiste en aislar el objeto de interés y dibujar **todas** las fuerzas externas que actúan sobre él como vectores.

### Pasos para un DCL en Biotecnología
1.  Identificar el objeto (e.g., glóbulo rojo, partícula viral).
2.  Representarlo como un punto.
3.  Dibujar vectores para cada fuerza (Peso, Empuje, Arrastre).
4.  Establecer un sistema de coordenadas.

---

## 🔬 Análisis de Caso: Sedimentación Celular

```{include} ../examples/04-sedimentacion-celular.md
```

## ✍️ Ejercicios Propuestos

```{include} ../exercises/04-dcl-proteina.md
```
