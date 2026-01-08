---
title: Fundamentos de estática de fluidos
subtitle: Presión, Pascal y Arquímedes
subject: Semana 8
session:
  number: 8
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Gerardo Lacy Mora
keywords:
- Fluidos
- densidad
- presión
- arquímedes
- pascal
learning_objectives:
- Definir los conceptos de esfuerzo y esfuerzo de deformación
- Explicar la relación profundidad y presión
- Describir el principio de Pascal y su uso en aplicaciones prácticas
- Relacionar la fuerza de flotabilidad con el principio de Arquímedes
- Describir el origen de la tensión superficial
---

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Definir los conceptos de esfuerzo y densidad.
2. Explicar la relación entre profundidad y presión hidrostática.
3. Describir el principio de Pascal y su uso en aplicaciones prácticas.
4. Relacionar la fuerza de flotabilidad con el principio de Arquímedes.
5. Describir el origen de la tensión superficial.
:::

## Introducción

La vida es fundamentalmente acuática. El citoplasma, la sangre, el medio de cultivo de un biorreactor... todos son fluidos. Entender cómo se comportan los líquidos en reposo (estática) es el primer paso para dominar bioprocesos, desde calcular la presión en el fondo de un tanque de fermentación hasta diseñar separaciones por densidad.

## 8.1 Densidad ($\rho$)

Masa por unidad de volumen.
$$ \rho = \frac{m}{V} $$
*   Agua: $\approx 1000 \text{ kg/m}^3$ o $1 \text{ g/cm}^3$.
*   **Importancia**: La separación celular por centrifugación en gradiente (Ficoll, Sacarosa) se basa puramente en diferencias de densidad ($\rho_{celula}$ vs $\rho_{medio}$).

## 8.2 Presión ($P$)

Fuerza ejercida perpendicularmente sobre una superficie.
$$ P = \frac{F}{A} $$
*   Unidad SI: **Pascal (Pa)** ($1 \text{ Pa} = 1 \text{ N/m}^2$).
*   Otras: atm, mmHg, psi.

### Presión Hidrostática
La presión aumenta con la profundidad debido al peso del fluido sobre ella.
$$ P = P_0 + \rho g h $$
*   $P_0$: Presión superficie (atm).
*   $h$: Profundidad.

:::{tip} Biorreactores
En un tanque de fermentación de 10 metros de altura, la presión en el fondo es significativamente mayor que en la superficie ($P_{fondo} \approx 2 \text{ atm}$). Esto afecta la solubilidad de gases ($O_2, CO_2$) y debe considerarse para el metabolismo celular.
:::

## 8.3 Principio de Pascal

*Un cambio en la presión aplicada a un fluido incompresible encerrado se transmite sin disminución a cada punto del fluido y a las paredes del recipiente.*
*   Aplicación: Sistemas hidráulicos y regulación de presión osmótica (conceptualmente similar en transmisión de fuerzas en vacuolas).

## 8.4 Principio de Arquímedes y Flotación

*Todo cuerpo sumergido parcial o totalmente en un fluido experimenta una fuerza de empuje hacia arriba igual al peso del fluido desplazado.*

$$ F_{empuje} = \rho_{fluido} \cdot V_{desplazado} \cdot g $$

### Condición de Flotabilidad
*   Si $\rho_{objeto} < \rho_{fluido}$: El objeto flota.
*   Si $\rho_{objeto} > \rho_{fluido}$: El objeto se hunde.
*   Si $\rho_{objeto} == \rho_{fluido}$: flotabilidad neutra (se queda donde está).

**Aplicación: Centrifugación Isopícnica**
En este método, se crea un gradiente de densidad en el tubo. Las partículas (ADN, orgánulos) viajan hasta encontrar la zona donde su densidad coincide exactamente con la del medio ($\rho_{particula} = \rho_{medio}$). Allí, la fuerza de empuje cancela la fuerza centrífuga y la partícula se detiene ("flota" en equilibrio).

## 8.5 Tensión Superficial ($\gamma$)

Las moléculas en la superficie de un líquido sienten una atracción neta hacia el interior, creando una "película" tensa.
*   Causa: Fuerzas de cohesión (puentes de hidrógeno en agua).
*   **Biotech**:
    *   Formación de gotas en microfluídica.
    *   Surfactantes pulmonares y detergentes para lisis celular (rompen la tensión superficial y las membranas).
    *   Capilaridad: Ascenso de líquidos en tubos finos (o en el xilema de plantas).

## ✍️ Ejercicios Propuestos

```{include} ../exercises/08-biorreactor-flotacion.md
```
