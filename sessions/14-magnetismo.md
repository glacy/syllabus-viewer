---
title: Magnetismo
subtitle: Campos Magnéticos e Instrumentación
subject: Semana 14
session:
  number: 14
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Magnetismo
- campo magnético
- fuerza magnética
- resonancia
learning_objectives:
- Describir la fuerza magnética sobre partículas cargadas y corrientes.
- Explicar el origen del campo magnético producido por corrientes.
- Discutir ejemplos de magnetismo en sistemas biológicos.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Describir la fuerza magnética sobre partículas cargadas y corrientes.
2. Explicar el concepto de campo magnético y su origen.
3. Discutir aplicaciones como la Espectrometría de Masas y la Resonancia Magnética (MRI).
:::

## Introducción

Aunque los organismos vivos no son "imanes" en el sentido tradicional, el magnetismo es crucial en la biotecnología moderna. Desde las bacterias que se orientan con el campo magnético terrestre hasta la poderosa Resonancia Magnética Nuclear para determinar estructuras de proteínas, el campo $\vec{B}$ es una herramienta de análisis indispensable.

## 14.1 Campo Magnético ($\vec{B}$)

Generado por cargas en movimiento (corrientes).
*   Unidad SI: **Tesla (T)**.
*   Referencia:
    *   Tierra: $\approx 50 \mu T$ (microteslas).
    *   Imán de refri: $\approx 5 mT$.
    *   Equipo MRI clínico: $1.5 - 3 T$.

## 14.2 Fuerza Magnética (Lorentz)

Una carga $q$ que se mueve a velocidad $v$ en un campo $B$ siente una fuerza perpendicular a ambos.

$$ \vec{F} = q (\vec{v} \times \vec{B}) $$
$$ F = |q| v B \sin(\theta) $$

*   Si $v$ es paralela a $B$, la fuerza es cero.
*   Esta fuerza encorva la trayectoria de las partículas cargadas.

## 14.3 Espectrometría de Masas

Herramienta "Gold Standard" en proteómica para identificar proteínas.
1.  Se ioniza la molécula ($q$).
2.  Se acelera ($v$).
3.  Se hace pasar por un campo magnético ($B$).
4.  La molécula se curva en un radio $r$.

$$ r = \frac{mv}{qB} $$

Midiendo el radio de curvatura, determinamos la relación masa/carga ($m/q$), la huella dactilar de la molécula.

## 14.4 Biomagnetismo

### Magnetotaxis
Ciertas bacterias (*Magnetospirillum*) sintetizan cristales de magnetita ($Fe_3O_4$) dentro de sus células. Estos actúan como brújulas microscópicas, permitiendo a la bacteria orientarse con el campo geomagnético para encontrar zonas óptimas de oxígeno en sedimentos.

### Seguridad en MRI
Los campos intensos de un MRI no dañan los tejidos biológicos (no son ionizantes), pero pueden convertir cualquier objeto ferromagnético (tijeras, implantes viejos) en proyectiles letales debido a la atracción magnética sobre el material.

## ✍️ Ejercicios Propuestos

```{include} ../exercises/14-selector-velocidad.md
```
