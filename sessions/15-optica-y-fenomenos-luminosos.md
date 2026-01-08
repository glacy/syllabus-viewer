---
title: 'Óptica y fenómenos luminosos'
subtitle: Naturaleza de la luz y Espectroscopía
subject: Semana 15
session:
  number: 15
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Óptica
- fenómenos
- luminosos
- refracción
- espectroscopía
learning_objectives:
- Distinguir las propiedades ondulatorias y corpusculares de la luz.
- Aplicar las leyes de reflexión y refracción a fenómenos ópticos.
- Relacionar fenómenos luminosos con aplicaciones biológicas como la bioluminiscencia.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Distinguir las propiedades ondulatorias y corpusculares de la luz.
2. Aplicar las leyes de reflexión y refracción (Ley de Snell).
3. Entender los principios físicos de la espectroscopía y la bioluminiscencia.
:::

## Introducción

La luz es nuestra principal sonda para interrogar la materia biológica. No solo la usamos para ver (microscopía), sino para medir concentraciones (espectrofotometría) y rastrear proteínas en tiempo real (fluorescencia). Entender la óptica es entender cómo "vemos" lo invisible.

## 15.1 Naturaleza de la Luz

La luz tiene naturaleza dual:
1.  **Onda Electromagnética**: Explica la difracción, interferencia y polarización.
    *   **Longitud de onda ($\lambda$)**: Determina el color (visible: 400-700 nm) y la resolución máxima.
2.  **Partícula (Fotón)**: Explica la absorción y emisión de energía. $E = hf$.

## 15.2 Reflexión y Refracción

### Ley de Snell
Cuando la luz pasa de un medio a otro (e.g., aire a agua), cambia su velocidad y se dobla.

$$ n_1 \sin(\theta_1) = n_2 \sin(\theta_2) $$

*   $n$: Índice de refracción ($c/v$).
    *   Aire $\approx 1.0$
    *   Agua $\approx 1.33$
    *   Aceite de inmersión $\approx 1.51$

### Reflexión Total Interna
Si la luz intenta salir de un medio denso a uno menos denso con un ángulo muy inclinado, queda atrapada dentro.
*   **Aplicación**: **Fibra Óptica**. Usada en endoscopios para iluminar y ver dentro del cuerpo humano sin cirugía invasiva.

## 15.3 Espectroscopía y Ley de Beer-Lambert

Las moléculas absorben longitudes de onda específicas. El ADN absorbe a 260 nm; las proteínas a 280 nm.
La cantidad de luz absorbida ($A$) depende linealmente de la concentración ($C$).

$$ A = \epsilon \cdot l \cdot C $$

*   $\epsilon$: Coeficiente de extinción molar (propio de la molécula).
*   $l$: Longitud del camino óptico (ancho de la cubeta, usualmente 1 cm).
*   **Biotech**: Es la forma estándar de cuantificar ADN o biomasa bacteriana ($OD_{600}$).

## 15.4 Fluorescencia y Bioluminiscencia

*   **Fluorescencia**: Absorber un fotón de alta energía (azul/UV) y emitir uno de menor energía (verde/rojo).
    *   Ejemplo: **GFP (Green Fluorescent Protein)**.
*   **Bioluminiscencia**: Producción de luz por una reacción química (enzima luciferasa).
    *   Ejemplo: Luciérnagas, bacterias marinas. No requiere luz externa.

---

## ✍️ Ejercicios Propuestos

```{include} ../exercises/15-dna-cuantificacion.md
```
