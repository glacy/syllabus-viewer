---
title: Microscopios
subtitle: Lentes, Resolución y Microscopía Electrónica
subject: Semana 16
session:
  number: 16
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Microscopios
- lentes
- resolución
- aumento
- SEM
- TEM
learning_objectives:
- Explicar la formación de imágenes mediante lentes y el aumento angular.
- Comparar el funcionamiento y resolución del microscopio óptico frente al electrónico.
- Describir técnicas especiales de microscopía y sus aplicaciones.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Explicar cómo las lentes forman imágenes magnificadas.
2. Definir el límite de resolución (Difracción) y por qué es una barrera física.
3. Comparar el Microscopio Óptico con el Microscopio Electrónico (SEM/TEM).
:::

## Introducción

La historia de la biología celular es la historia del microscopio. Desde los lentes simples de Leeuwenhoek hasta los criomicroscopios electrónicos actuales, la capacidad de ver más allá de lo evidente depende de principios ópticos fundamentales. En esta sesión final, entenderemos los límites físicos de la visión humana y artificial.

## 16.1 Lentes y Formación de Imágenes

*   **Lente Convergente (Convexa)**: Enfoca la luz en un punto. Es la base de objetivos y oculares.
*   **Aumento Total ($M$)**: El producto del aumento del objetivo y del ocular.
    $$ M_{total} = M_{obj} \times M_{ocular} $$
    *   Ejemplo: Objetivo 40x $\times$ Ocular 10x = 400x.

## 16.2 Resolución y Límite de Difracción

El aumento no tiene límites (puedes hacer zoom digital infinito). **La resolución SÍ tiene límites**.
La resolución es la distancia mínima ($d$) para distinguir dos puntos como separados.

$$ d = \frac{0.61 \lambda}{NA} $$

*   $\lambda$: Longitud de onda de la luz.
*   $NA$: Apertura Numérica (calidad del lente, máx $\approx 1.4$).

Para luz visible ($\lambda \approx 500 \text{ nm}$), el límite físico es $d \approx 200 \text{ nm}$.
*   **Consecuencia**: **Nunca** podrás ver un virus ($\approx 50 \text{ nm}$) o la hélice de ADN ($\approx 2 \text{ nm}$) con un microscopio óptico tradicional. Es físicamente imposible debido a la difracción de la luz.

## 16.3 Microscopía Electrónica

Para ver cosas más pequeñas que 200 nm, necesitamos una $\lambda$ más pequeña. Usamos **electrones** en lugar de fotones.
Según la mecánica cuántica (De Broglie), un electrón acelerado se comporta como una onda con $\lambda$ diminuta ($< 0.01 \text{ nm}$).

### Tipos
1.  **TEM (Transmisión)**: Los electrones atraviesan la muestra (debe ser ultrafina). Permite ver estructuras internas (orgánulos, capas virales).
2.  **SEM (Barrido)**: Los electrones rebotan en la superficie recubierta de metal. Crea imágenes 3D espectaculares de la superficie.

## 16.4 Microscopía de Super-Resolución (Nobel 2014)

Nuevas técnicas (STED, PALM) usan trucos fluorescentes para "romper" el límite de difracción, permitiendo ver moléculas individuales con luz. El futuro de la biotecnología está en la nanoscopía.

## ✍️ Ejercicios Propuestos

```{include} ../exercises/16-limite-fisico.md
```
