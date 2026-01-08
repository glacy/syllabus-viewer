---
title: 'Operaciones vectoriales'
subtitle: Vectores y definición de fuerza
subject: Semana 3
session:
  number: 3
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Operaciones
- vectoriales
- Dinámica
learning_objectives:
- Descomponer un vector en sus componentes y realizar operaciones vectoriales (suma,
  resta, producto por escalar).
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Descomponer un vector en sus componentes y realizar operaciones vectoriales (suma, resta, producto por escalar).
:::

## Introducción

En biología y biotecnología, rara vez los fenómenos ocurren en una sola dimensión. Las fuerzas electrostáticas entre moléculas, el movimiento de bacterias en un fluido o la configuración de una proteína plegada involucran direcciones y magnitudes espaciales. Para describir estos fenómenos, necesitamos herramientas matemáticas que vayan más allá de los simples números: **los vectores**.

## 3.1 Cantidades Escalares vs. Vectoriales

*   **Escalar**: Cantidad definida solo por su magnitud (número + unidad).
    *   *Ejemplos biológicos*: Temperatura de incubación ($37^\circ C$), concentración de sustrato ($5 \text{ mM}$), masa de una muestra ($2 \text{ g}$), pH.
*   **Vector**: Cantidad definida por magnitud **y dirección**.
    *   *Ejemplos biológicos*: Velocidad de flujo sanguíneo (magnitud y hacia dónde fluye), fuerza de un enlace, campo eléctrico en una membrana.

:::{important} Notación
Los vectores se denotan con una flecha sobre la letra ($\vec{A}$) o en negrita ($\mathbf{A}$). Su magnitud se denota como $|\vec{A}|$ o simplemente $A$.
:::

## 3.2 Descomposición y Operaciones Vectoriales

Cualquier vector en un plano puede descomponerse en sus componentes rectangulares ($x$ e $y$). Esto es crucial para analizar sistemas complejos, como las fuerzas que actúan sobre una articulación o sobre una partícula en sedimentación.

### Componentes de un Vector

Dado un vector $\vec{F}$ con magnitud $F$ y ángulo $\theta$ respecto al eje $x$:

$$
F_x = F \cos(\theta)
$$
$$
F_y = F \sin(\theta)
$$

### Magnitud y Dirección desde Componentes

$$
F = \sqrt{F_x^2 + F_y^2}
$$
$$
\theta = \tan^{-1}\left(\frac{F_y}{F_x}\right)
$$

### Suma Vectorial (Fuerza Neta)

Para encontrar el efecto combinado de múltiples vectores (como varias fuerzas actuando sobre una célula), sumamos sus componentes:

$$
\vec{R} = \vec{A} + \vec{B} \implies \begin{cases} R_x = A_x + B_x \\ R_y = A_y + B_y \end{cases}
$$

:::{tip} Aplicación: Migración Celular
Si una célula es atraída quimiotácticamente hacia una fuente de nutrientes (Fuerza A) pero arrastrada por el flujo del medio (Fuerza B), su movimiento real seguirá la dirección del vector suma ($\vec{R} = \vec{A} + \vec{B}$).
:::

## 3.3 Concepto de Fuerza

Una **fuerza** es una interacción que, si no es contrarrestada, cambia el movimiento de un objeto. En el SI se mide en **Newtons (N)**.

$$ 1 \text{ N} = 1 \text{ kg} \cdot \text{m/s}^2 $$

En biotecnología, a menudo trabajamos en escalas microscópicas donde el Newton es una unidad muy grande. Es común usar **picoNewtons (pN)**.
*   $1 \text{ pN} = 10^{-12} \text{ N}$
*   *Referencia*: La fuerza generada por un motor molecular de miosina es de aprox. 3-5 pN.

### Principio de Superposición

Cuando actúan varias fuerzas sobre un cuerpo, el efecto neto es igual a la suma vectorial de todas ellas:

$$ \vec{F}_{neta} = \sum \vec{F} = \vec{F}_1 + \vec{F}_2 + \dots $$

---

## 🔬 Ejemplo Aplicado: Fuerzas en una Proteína

```{include} ../examples/03-fuerzas-proteina.md
```

## ✍️ Ejercicios Propuestos

```{include} ../exercises/03-centrifuga-molecular.md
```
