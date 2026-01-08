---
title: 'Electricidad '
subtitle: Circuitos, Ley de Ohm y Membranas
subject: Semana 13
session:
  number: 13
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Electricidad
- circuitos
- ohm
- membrana
- iones
learning_objectives:
- Analizar circuitos eléctricos básicos utilizando la Ley de Ohm.
- Relacionar los circuitos RC con la membrana celular y el transporte de iones.
- Describir el modelo eléctrico equivalente de una membrana biológica.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Analizar circuitos eléctricos básicos utilizando la Ley de Ohm.
2. Relacionar los circuitos RC con la membrana celular y el transporte de iones.
3. Describir el modelo eléctrico equivalente de una membrana biológica.
:::

## Introducción

Para un biotecnólogo, un circuito no es solo cables y baterías. El sistema nervioso es un circuito complejo. Los biosensores que detectan glucosa son circuitos. Aprender a analizar voltajes y corrientes es fundamental para entender la electrofisiología y la instrumentación biomédica.

## 13.1 Ley de Ohm y Resistencia

En muchos materiales, la corriente ($I$) es proporcional al voltaje ($V$).

$$ V = I \cdot R $$

*   **Corriente ($I$)**: Flujo de carga. (Amperes, A). En biología: flujo de iones ($Na^+, K^+, Cl^-$).
*   **Resistencia ($R$)**: Oposición al flujo. (Ohms, $\Omega$). Canales iónicos cerrados = Resistencia infinita.

### Potencia Eléctrica
$$ P = V \cdot I = I^2 R $$
El efecto Joule explica por qué se calientan los equipos de electroforesis (y por qué necesitamos sistemas de enfriamiento).

## 13.2 Circuitos en Serie y Paralelo

*   **Serie**: La corriente es la misma. $R_{eq} = R_1 + R_2$.
*   **Paralelo**: El voltaje es el mismo. $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$.

:::{important} Canales Iónicos en Paralelo
La membrana celular tiene miles de canales iónicos. Cada canal actúa como una resistencia en paralelo. Abrir más canales (disminuir $R$) aumenta masivamente la conductancia total de la membrana.
:::

## 13.3 El Circuito RC y la Membrana

La membrana celular se comporta como un circuito **Resistor-Capacitor (RC)**:
*   **Capacitor ($C_m$)**: La bicapa lipídica (acumula carga).
*   **Resistor ($R_m$)**: Los canales iónicos (permiten fugas).

### Constante de Tiempo ($\tau$)
Cuando se inyecta corriente, el voltaje no cambia instantáneamente; sube exponencialmente.
$$ \tau = R \cdot C $$
Esto determina qué tan rápido puede responder una neurona a un estímulo.

## 13.4 Transporte de Iones y Nernst

El movimiento de iones a través de la membrana depende de dos fuerzas ("Gradiente Electroquímico"):
1.  **Difusión**: Diferencia de concentración.
2.  **Eléctrica**: Diferencia de potencial.

El **Potencial de Nernst** es el voltaje donde estas dos fuerzas se equilibran para un ion específico.
$$ V_{eq} = \frac{RT}{zF} \ln\left(\frac{[Ion]_{ext}}{[Ion]_{int}}\right) $$

## ✍️ Ejercicios Propuestos

```{include} ../exercises/13-patch-clamp.md
```
