---
title: Dinámica de fluidos ideales
subtitle: Ecuación de Continuidad y Bernoulli
subject: Semana 9
session:
  number: 9
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Fluidos
- continuidad
- bernoulli
- dinámica
learning_objectives:
- Usar la ecuación de continuidad y la ecuación de Bernoulli para explicar los efectos
  comunes de flujo de fluido ideal.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Usar la ecuación de continuidad y la ecuación de Bernoulli para explicar los efectos comunes de flujo de fluido ideal.
2. Analizar cambios de velocidad y presión en sistemas de tuberías o vasos sanguíneos.
:::

## Introducción

Cuando un fluido se mueve, las reglas cambian. Ya no solo importa la profundidad; la velocidad importa. En esta sesión asumiremos un "fluido ideal" (sin fricción ni turbulencia) para entender los principios básicos que rigen desde el flujo en una tubería industrial hasta la circulación sanguínea.

## 9.1 Fluido Ideal

Simplificación teórica:
1.  **Incompresible**: Densidad constante.
2.  **No viscoso**: Sin fricción interna.
3.  **Laminar**: Flujo ordenado, sin remolinos.

## 9.2 Ecuación de Continuidad

*Lo que entra, debe salir.* Si el fluido es incompresible, el caudal ($Q$, volumen por tiempo) se conserva a lo largo del tubo.

$$ Q = A_1 v_1 = A_2 v_2 $$

*   $A$: Área transversal.
*   $v$: Velocidad promedio.

### Consecuencia Crítica
Si el tubo se estrecha ($A$ disminuye), el fluido se acelera ($v$ aumenta).

---
### 🩸 Ejemplo: El Sistema Circulatorio
```{include} ../examples/09-sistema-circulatorio.md
```

## 9.3 Ecuación de Bernoulli

Es la conservación de la energía aplicada a fluidos. Relaciona presión ($P$), velocidad ($v$) y altura ($y$).

$$ P + \frac{1}{2}\rho v^2 + \rho g y = \text{constante} $$

### Interpretación
En un tubo horizontal ($y_1 = y_2$):
*   Mayor velocidad $\implies$ Menor presión.
*   Menor velocidad $\implies$ Mayor presión.

## 🔬 Aplicaciones

### Efecto Venturi
Para inyectar oxígeno o nutrientes en una corriente de líquido, se puede usar un estrechamiento en el tubo. La velocidad aumenta, la presión baja, y succiona el fluido externo.

### Aneurismas
Si una arteria se dilata (aneurisma), el área aumenta $\rightarrow$ velocidad disminuye $\rightarrow$ **presión aumenta**.
Este aumento de presión dilata aún más la pared debilitada. ¡Un círculo vicioso explicado por Bernoulli!

---

## ✍️ Ejercicios Propuestos

```{include} ../exercises/09-jeringa-estenosis.md
```
