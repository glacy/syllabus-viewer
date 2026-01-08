---
title: Actividad "Diseño de Biorreactor"
subtitle: Cálculo de caudales y diámetro de tuberías
subject: Semana 9
activity:
  type: Taller de Diseño
  duration: 50 min
  modality: Grupal
  difficulty: Intermedio
course: Física para Biotecnología
keywords:
- Fluidos
- Ecuación de Continuidad
- Caudal
- Esfuerzo de corte
- Biorreactor
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./10-diseno-biorreactor.pdf
# downloads:
#   - file: ./10-diseno-biorreactor.md
#     title: 10-diseno-biorreactor.md
#   - file: 10-diseno-biorreactor.pdf
#     title: 10-diseno-biorreactor.pdf
---

### Descripción del caso

Su equipo de ingeniería metabólica está escalando un proceso de producción de anticuerpos monoclonales desde el matraz al reactor de tanque agitado continuo (CSTR).
Las células de mamífero (CHO) son extremadamente sensibles al **esfuerzo de corte (shear stress)** causado por flujos turbulentos o muy rápidos. Su tarea es diseñar el sistema de tuberías de alimentación para asegurar que las células lleguen vivas al reactor.

### Objetivos de aprendizaje
1.  **Calcular** caudales volumétricos ($Q$) basados en tiempos de residencia biológicos.
2.  **Aplicar** la Ecuación de Continuidad para dimensionar tuberías.
3.  **Analizar** cómo los cambios de área afectan la velocidad del fluido y la viabilidad celular.

### Datos del Proceso
*   **Volumen útil del reactor ($V_\text{reactor}$)**: 500 Litros.
*   **Tiempo de residencia requerido ($\tau$)**: 24 horas. (El tiempo promedio que una célula pasa en el reactor).
*   **Velocidad máxima permitida ($v_\text{máx}$)**: Para evitar daño celular, la velocidad en las tuberías no debe exceder $1,5 \text{ m/s}$.

### Marco teórico
*   **Caudal Volumétrico ($Q$)**: Volumen por unidad de tiempo.
    $$ Q = \frac{V}{\tau} $$
*   **Ecuación de Continuidad**: Si el fluido es incompresible:
    $$ Q = Area \cdot velocidad = A_1 v_1 = A_2 v_2 $$
    $$ A = \pi \left(\frac{D}{2}\right)^2 $$

### El desafío de diseño

#### Paso 1: Determinación de la demanda de flujo
Calcule el caudal de alimentación requerido $Q$ en **Litros/hora** y conviértalo a unidades del SI ($\text{m}^3/\text{s}$).

#### Paso 2: Dimensionamiento de tubería
Determine el **diámetro interno mínimo ($D$)** que la tubería de alimentación debe tener para cumplir con la restricción de velocidad ($v < 1,5 \text{ m/s}$).
*   *Pista*: Use $Q = A \cdot v_\text{máx}$ para hallar el área mínima.

#### Paso 3: Análisis de riesgo en válvulas
Para controlar el flujo, se instala una válvula de aguja que reduce el diámetro efectivo de la tubería a **3 mm** en su punto más estrecho.
1.  Calcule la velocidad del fluido $v_\text{válvula}$ al pasar por esa constricción.
2.  ¿Excede el límite de velocidad segura? ¿Qué le pasaría a las células?

### Preguntas de discusión
1.  Si quisiera duplicar el volumen de producción manteniendo el mismo tiempo de residencia, ¿cómo cambiaría el diámetro de la tubería? (¿Se duplica?).
2.  ¿Por qué es preferible usar bombas peristálticas en lugar de centrífugas para bombear células delicadas?

### Entregable
Un breve informe de diseño con los cálculos de $Q$, el diámetro de tubería seleccionado (en pulgadas comerciales si es posible, o en mm) y la evaluación de seguridad de la válvula.
