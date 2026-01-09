---
title: Actividad "Microfluídica en Papel"
subtitle: "Observación de flujo laminar vs turbulento"
subject: Semana 11
activity:
  type: Laboratorio Práctico
  duration: 60 min
  modality: Grupal
  difficulty: Intermedio
course: Física para Biotecnología
keywords:
- Fluidos
- Número de Reynolds
- Flujo laminar
- Microfluídica
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./12-microfluidica-papel.pdf
# downloads:
#   - file: ./12-microfluidica-papel.md
#     title: 12-microfluidica-papel.md
#   - file: 12-microfluidica-papel.pdf
#     title: 12-microfluidica-papel.pdf
---

<!-- ACTIVITY-BADGES -->
![](https://img.shields.io/badge/Tipo-Laboratorio_Práctico-orange) ![](https://img.shields.io/badge/Duración-60_min-yellow) ![](https://img.shields.io/badge/Modalidad-Grupal-blue) ![](https://img.shields.io/badge/Dificultad-Intermedio-yellow)
<!-- ACTIVITY-BADGES -->

### Descripción

El comportamiento de los fluidos cambia drásticamente según la escala. Un río caudaloso es un caos de remolinos (turbulencia), pero en el interior de una aguja hipodérmica o un canal microfluídico, el agua fluye ordenada en capas paralelas (flujo laminar).

En este taller, construiremos dispositivos simples usando papel de filtro para visualizar la magia del **flujo laminar** y calcularemos por qué las bacterias "sienten" el agua como si fuera miel.

### Objetivos de aprendizaje
1.  **Diferenciar** cualitativamente entre flujo laminar y turbulento mediante observación directa.
2.  **Construir** canales microfluídicos de bajo costo.
3.  **Calcular** e interpretar el Número de Reynolds ($Re$) para sistemas biológicos.

### Materiales
- Papel filtro (filtros de café o papel Whatman No. 1).
- Crayones de cera (blancos o de color).
- Colorantes de alimentos (Azul y Rojo).
- Agua.
- Goteros o pipetas Pasteur.

### Marco Teórico

El **Número de Reynolds ($Re$)** predice el régimen de flujo:
$$ Re = \frac{\rho v L}{\mu} $$
*   $Re < 2000$: Flujo Laminar (dominan las fuerzas viscosas).
*   $Re > 4000$: Flujo Turbulento (dominan las fuerzas inerciales).

### Parte experimental

#### Experimento 1: El mundo Macro (Turbulencia)
1.  Llene un vaso transparente con agua.
2.  Inyecte rápidamente una chorro de tinta roja.
3.  **Observe**: ¿Se forman remolinos? ¿Se mezcla rápidamente?

#### Experimento 2: El mundo Micro (Laminaridad)
1.  Tome un círculo de papel filtro. Use el crayón para dibujar un canal en forma de "Y" (dos entradas, una salida). **Presione fuerte** para impregnar la cera en el papel (esto crea paredes hidrofóbicas).
2.  Coloque una gota de tinta azul en la entrada A y una gota roja en la entrada B.
3.  Añada gotas de agua sobre las tintas para empujarlas hacia el tallo de la "Y".
4.  **Observe**: Cuando los colores se encuentran en el canal principal, ¿se mezclan formando morado o viajan uno al lado del otro como carriles de autopista?

### Parte de cálculo: ¿En qué mundo vive una bacteria?

Calcule el $Re$ para dos organismos asumiendo que el fluido es agua ($\rho = 1000 \text{ kg/m}^3$, $\mu = 0.001 \text{ Pa}\cdot\text{s}$).

1.  **Escherichia coli** (Nandador microscópico):
    *   Longitud $L = 2 \times 10^{-6} \text{ m}$.
    *   Velocidad $v = 30 \times 10^{-6} \text{ m/s}$.
2.  **Ballena Azul** (Nadador macroscópico):
    *   Longitud $L = 30 \text{ m}$.
    *   Velocidad $v = 10 \text{ m/s}$.

### Preguntas de discusión
1.  Según sus cálculos, ¿para quién es más importante la viscosidad del agua, para la bacteria o la ballena?
2.  ¿Por qué es difícil mezclar reactivos en un chip de microfluídica? (Piense en su observación del papel).

### Entregable
Fotos o dibujos de sus experimentos en vaso y papel, junto con los cálculos de $Re$ y las respuestas a la discusión.

### Rúbrica de Evaluación

| Criterio | 5 Puntos | 3 Puntos | 1 Punto |
| :--- | :--- | :--- | :--- |
| **Dispositivo Microfluídico** | Canal "Y" funcional que demuestra flujo laminar (colores no se mezclan inmediatamente). | Construye el canal pero hay fugas o mezcla turbulenta (fallo de diseño). | No construye el dispositivo. |
| **Cálculo de Reynolds** | Aplica fórmula correctamente ($Re < 2000$ para E. coli, $Re > 4000$ para ballena). | Errores de unidades o aritmética en el cálculo. | Fórmula incorrecta o resultados ilógicos. |
| **Análisis** | Diferencia claramente regímenes de flujo y conecta con la escala biológica. | Diferencia regímenes pero no conecta con la biología. | Análisis pobre. |
