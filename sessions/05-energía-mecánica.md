---
title: Energía Mecánica
subtitle: Trabajo, Energía Cinética y Potencial
subject: Semana 5
session:
  number: 5
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Energía
- mecánica
- trabajo
- cinética
- potencial
- conservación
learning_objectives:
- Calcular el trabajo realizado por una fuerza constante en un desplazamiento.
- Relacionar el trabajo con el cambio en la energía cinética.
- Explicar el concepto de energía potencial y sus diferentes formas.
- Aplicar el principio de conservación de la energía mecánica a sistemas físicos.
- Definir y calcular la potencia mecánica en procesos físicos.
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Calcular el trabajo realizado por una fuerza constante en un desplazamiento.
2. Relacionar el trabajo con el cambio en la energía cinética.
3. Explicar el concepto de energía potencial y sus diferentes formas.
4. Aplicar el principio de conservación de la energía mecánica a sistemas físicos.
5. Definir y calcular la potencia mecánica en procesos físicos.
:::

## Introducción

En biología, todo proceso requiere energía: desde la división celular hasta la contracción muscular. La física nos proporciona el marco riguroso para cuantificar estos procesos. Veremos que la quema de calorías, el transporte activo y la síntesis de proteínas siguen las mismas leyes de conservación que una montaña rusa.

## 5.1 Trabajo Mecánico ($W$)

En física, realizamos trabajo solo cuando aplicamos una fuerza que causa un desplazamiento.

$$ W = F \cdot d \cdot \cos(\theta) $$

*   $F$: Magnitud de la fuerza.
*   $d$: Desplazamiento.
*   $\theta$: Ángulo entre la fuerza y el desplazamiento.

:::{important} Unidades
La unidad de trabajo y energía es el **Joule (J)**.
1 J = 1 N·m.
En biología celular, a menudo usamos $k_B T$ (energía térmica) o unidades derivadas de calorías.
:::

## 5.2 Energía Cinética ($K$)

Es la energía asociada al movimiento.

$$ K = \frac{1}{2} m v^2 $$

*   **Aplicación**: Una ultracentrífuga imparte una enorme energía cinética a las partículas para separarlas. El rotor, al girar a altas velocidades, posee una gran cantidad de energía rotacional.

### Teorema Trabajo-Energía
El trabajo neto realizado sobre un objeto es igual al cambio en su energía cinética.
$$ W_{neto} = \Delta K = K_f - K_i $$

## 5.3 Energía Potencial ($U$)

Es energía almacenada debido a la posición o configuración.

1.  **Potencial Gravitatoria**: $U_g = mgy$. (Importante en macroescala y circulación de fluidos).
2.  **Potencial Elástica**: $U_e = \frac{1}{2} k x^2$. (Relevante para proteínas elásticas como la titina o la deformación celular).
3.  **Potencial Química/Eléctrica**: Aunque se ven en otros capítulos, siguen la misma lógica: energía almacenada en enlaces o gradientes.

## 5.4 Conservación de la Energía Mecánica

En un sistema aislado donde solo actúan fuerzas conservativas (como la gravedad o fuerzas elásticas ideales):

$$ E_{total} = K + U = \text{constante} $$
$$ K_i + U_i = K_f + U_f $$

### Paisajes de Energía (Energy Landscapes)
En el plegamiento de proteínas, visualizamos "embudos de energía". La proteína busca naturalmente el estado de menor energía potencial (conformación nativa). Aunque termodinámico, el principio es análogo a una bola rodando hacia el fondo de un valle.

## 5.5 Potencia ($P$)

La rapidez con la que se realiza trabajo.

$$ P = \frac{W}{\Delta t} $$

*   **Unidad**: Watt (W).
*   **Ejemplo**: Un motor molecular como la miosina realiza trabajo muy rápido en escalas de tiempo pequeñas, generando una potencia específica alta.

---

## 🔬 Ejemplo Aplicado: Motores Moleculares

```{include} ../examples/05-motores-moleculares.md
```

## ✍️ Ejercicios Propuestos

```{include} ../exercises/05-bombeo-cardiaco.md
```
