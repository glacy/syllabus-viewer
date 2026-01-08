---
title: 'Fluidos reales: viscosidad, turbulencia y aplicaciones'
subtitle: Número de Reynolds y Arrastre
subject: Semana 11
session:
  number: 11
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Fluidos
- reynolds
- turbulencia
- laminar
- arrastre
learning_objectives:
- Describir los tipos de flujo laminar y turbulento, por medio del número de Reynols.
- Explicar el concepto de fuerza de arrastre y su relación con el transporte a través
  de membrana biológica
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Describir los tipos de flujo laminar y turbulento utilizando el Número de Reynolds.
2. Explicar el concepto de fuerza de arrastre (Drag).
3. Entender la diferencia entre la vida en la macroescala y la microescala ("Vida a bajo Reynolds").
:::

## Introducción

¿Por qué una bacteria no puede nadar como un pez? ¿Por qué es difícil mezclar reactivos en un chip microfluídico? La respuesta está en la competencia entre dos fuerzas: la inercia (que mantiene el movimiento) y la viscosidad (que frena). El **Número de Reynolds** es el juez de esta competencia.

## 11.1 Número de Reynolds ($Re$)

Cantidad adimensional que predice el régimen de flujo.

$$ Re = \frac{\rho v L}{\eta} $$

*   $\rho$: Densidad.
*   $v$: Velocidad.
*   $L$: Longitud característica (diámetro del tubo, tamaño del organismo).
*   $\eta$: Viscosidad.

### Interpretación
$$ Re = \frac{\text{Fuerzas Inerciales}}{\text{Fuerzas Viscosas}} $$

*   **Re Alto (> 2000-4000)**: **Turbulento**. El caos domina. Importante para mezclar nutrientes en grandes tanques.
*   **Re Bajo (< 1)**: **Laminar**. La viscosidad domina. No hay inercia. Si dejas de empujar, te detienes instantáneamente.

## 11.2 Regímenes de Flujo

### Flujo Laminar (Capas Ordenadas)
Típico en capilares, microfluídica y flujo sanguíneo normal. Las capas de fluido se deslizan unas sobre otras suavemente.

### Flujo Turbulento (Caos)
Típico en aorta rápida o biorreactores agitados.
*   **Ventaja**: Mezcla eficiente.
*   **Desventaja**: Daño celular (shear stress). Las células animales son frágiles y pueden romperse en turbulencia.

## 11.3 Fuerza de Arrastre ($F_d$)

Fuerza que un fluido ejerce sobre un objeto que se mueve en él. Depende de $Re$.

### Ley de Stokes (Para Re bajo)
Para una esfera pequeña (célula, proteína) moviéndose lento:
$$ F_d = 6 \pi \eta r v $$
*   La fuerza es proporcional a la velocidad ($v$).

### Arrastre Aerodinámico (Para Re alto)
Para un coche o un ave:
$$ F_d = \frac{1}{2} C_d \rho A v^2 $$
*   La fuerza es proporcional al cuadrado de la velocidad ($v^2$).

## 🔬 "Vida a bajo número de Reynolds"

Este famoso concepto (E.M. Purcell) explica la realidad de las bacterias ($Re \approx 10^{-5}$).
*   **Sin inercia**: Para una bacteria, el agua se siente como "miel espesa". No puede "impulsarse y deslizarse". Debe nadar constantemente.
*   **Reversibilidad**: Movimientos recíprocos (como una vieira abriendo y cerrando su concha) no generan desplazamiento neto. Por eso usan flagelos helicoidales (sacacorchos).

## ✍️ Ejercicios Propuestos

```{include} ../exercises/11-reynolds-bacteria.md
```
