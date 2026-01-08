---
title: 'Fluidos reales: viscosidad, turbulencia y aplicaciones'
subtitle: Viscosidad y Ley de Poiseuille
subject: Semana 10
session:
  number: 10
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Fluidos
- reales
- viscosidad
- Poiseuille
- newtonianos
learning_objectives:
- Describir la viscosidad de un fluido real
- Describir el comportamiento de un fluido viscoso con base en la Ley de Poiseuille.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Describir la viscosidad de un fluido real.
2. Diferenciar fluidos Newtonianos de no Newtonianos.
3. Describir el comportamiento de un fluido viscoso con base en la Ley de Poiseuille.
:::

## Introducción

En el mundo real, los fluidos tienen "fricción interna". La miel fluye más lento que el agua. Esta resistencia a fluir se llama **viscosidad**. En biotecnología, controlar la viscosidad es crucial para bombear medios de cultivo densos o entender por qué la sangre se espesa en ciertas condiciones.

## 10.1 Viscosidad ($\eta$)

Medida de la resistencia de un fluido a deformarse bajo esfuerzo cortante.
*   Unidad SI: $\text{Pa} \cdot \text{s}$.
*   Común: **Poise (P)** o centiPoise (cP). $1 \text{ cP} \approx 1 \text{ mPa} \cdot \text{s}$ (viscosidad del agua a 20°C).

### Fluidos Newtonianos vs No Newtonianos
*   **Newtonianos**: Viscosidad constante (Agua, aire, medios de cultivo simples).
*   **No Newtonianos**: $\eta$ cambia con la fuerza aplicada.
    *   *Pseudoplásticos (Shear-thinning)*: Se adelgazan al agitarse. Ejemplo: Sangre, pintura, salsa de tomate.
    *   **Biotech**: Al bombear un cultivo celular sensible, la viscosidad puede cambiar en las tuberías debido al esfuerzo de corte.

## 10.2 Ley de Poiseuille

Describe el caudal ($Q$) de un fluido viscoso en un tubo cilíndrico (flujo laminar).

$$ Q = \frac{\pi r^4 (P_1 - P_2)}{8 \eta L} $$

*   $r$: Radio del tubo.
*   $\Delta P$: Diferencia de presión.
*   $\eta$: Viscosidad.
*   $L$: Longitud.

:::{important} El Poder de r^4
El caudal es proporcional a la **cuarta potencia** del radio.
Si una arteria se reduce un poco (ej: 10%, radio pasa a 0.9), el flujo decae drásticamente ($0.9^4 \approx 0.65$, cae al 65%).
Para mantener el flujo, el corazón debe aumentar enormemente la presión ($\Delta P$).
:::

## 10.3 Resistencia Hidrodinámica

Análoga a la resistencia eléctrica ($R$).
$$ \Delta P = Q \cdot R $$
$$ R = \frac{8 \eta L}{\pi r^4} $$

Esto nos permite modelar sistemas de tuberías o vasos sanguíneos como circuitos en serie o paralelo.

---

## 🔬 Aplicación: Filtración y Microfluídica

En la filtración tangencial (TFF) o en chips de microfluídica, los canales son muy estrechos ($r$ pequeño).
Según Poiseuille, la resistencia es enorme.
*   Para pasar líquido por un microcanal, se requieren bombas de alta presión o jeringas muy precisas.
*   La viscosidad del fluido ($\eta$) limita qué tan rápido podemos procesar una muestra sin generar presiones que rompan el chip o las células.

## ✍️ Ejercicios Propuestos

```{include} ../exercises/10-transfusion-poiseuille.md
```
