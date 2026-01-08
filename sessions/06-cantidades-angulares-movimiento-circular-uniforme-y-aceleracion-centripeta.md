---
title: Cantidades angulares y movimiento circular
subtitle: Movimiento circular y aceleración centrípeta
subject: Semana 6
session:
  number: 6
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Movimiento circular
- centrífuga
- aceleración centrípeta
- cantidades angulares
learning_objectives:
- Definir las unidades de medida angulares
- Describir y calcular la rapidez y la velocidad angulares y su relación con la rapidez
  tangencial
- Describir el movimiento circular uniforme
- Calcular la aceleración centrípeta
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Definir las unidades de medida angulares
2. Describir y calcular la rapidez y la velocidad angulares y su relación con la rapidez tangencial
3. Describir el movimiento circular uniforme
4. Calcular la aceleración centrípeta
:::

## Introducción

Pocas herramientas son tan omnipresentes en un laboratorio de biotecnología como la **centrífuga**. Desde separar suero sanguíneo hasta precipitar ADN, la centrifugación aprovecha los principios del movimiento circular para amplificar la sedimentación. Entender la física detrás de las "g-force" es vital para seguir protocolos y cuidar el equipo.

## 6.1 Cinemática Angular

Para describir objetos que giran, cambiamos metros por radianes.

### Desplazamiento Angular ($\theta$)
Ángulo barrido. Se mide en radianes ($2\pi \text{ rad} = 360^\circ$).

### Velocidad Angular ($\omega$)
Rapidez de giro.
$$ \omega = \frac{\Delta \theta}{\Delta t} $$
*   Unidades: rad/s.
*   En equipos de laboratorio, es común usar **RPM** (revoluciones por minuto).
    *   Conversión: $1 \text{ RPM} = \frac{2\pi}{60} \text{ rad/s} \approx 0.1047 \text{ rad/s}$.

## 6.2 Relación Lineal-Angular

Si un punto está a una distancia $r$ (radio) del centro de giro:

*   **Velocidad Tangencial ($v$)**: $v = \omega r$
    *   *Nota*: Puntos más alejados del centro se mueven más rápido linealmente, aunque tengan la misma velocidad angular.

## 6.3 Aceleración Centrípeta ($a_c$)

En el Movimiento Circular Uniforme (MCU), aunque la rapidez sea constante, la dirección cambia continuamente. Esto requiere una aceleración dirigida hacia el centro.

$$ a_c = \frac{v^2}{r} = \omega^2 r $$

Esta aceleración es la responsable de la "fuerza g" aparente que experimentan las muestras.

## 🔬 Aplicación Crítica: La Centrífuga y FCR

En el laboratorio, no solemos hablar de $a_c$ en $\text{m/s}^2$, sino de **Fuerza Centrífuga Relativa (FCR o RCF)**, expresada en veces la gravedad ($xg$).

### Fórmula de Conversión RCF

$$ RCF (g) = \frac{\omega^2 r}{g} $$

Usando RPM y radio en centímetros:

$$ RCF = 1.118 \times 10^{-5} \times r_{(\text{cm})} \times (RPM)^2 $$

:::{warning} ¡Cuidado con el radio!
En un rotor, $r$ cambia dependiendo de dónde esté la muestra.
*   $r_{min}$: Parte superior del tubo.
*   $r_{max}$: Fondo del tubo (donde se forma el pellet).
Los protocolos suelen especificar $r_{max}$ o un promedio. Usar el radio incorrecto en el cálculo puede arruinar una separación delicada.
:::

## 6.4 Ultracentrifugación

Las ultracentrífugas giran a velocidades extremas (> 100,000 RPM), generando fuerzas de hasta 1,000,000 $g$. Esto permite separar partículas muy pequeñas como:
*   Ribosomas
*   Virus
*   Grandes complejos proteicos

El análisis teórico de la velocidad de sedimentación en función de la aceleración centrípeta definió el **coeficiente Svedberg (S)**, usado para clasificar subunidades ribosomales (e.g., 16S, 18S).

## ✍️ Ejercicios Propuestos

```{include} ../exercises/06-calculo-protocolo.md
```
