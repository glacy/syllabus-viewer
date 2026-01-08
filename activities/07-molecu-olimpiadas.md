---
title: Actividad "Molecu-olimpiadas"
subtitle: "Competición de potencia: motor molecular vs motor macroscópico"
subject: Semana 6
activity:
  type: Taller de cálculo
  duration: 45 min
  modality: Parejas
  difficulty: Avanzado
course: Física para Biotecnología
keywords:
- Trabajo
- Potencia
- Motores moleculares
- Kinesina
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./07-molecu-olimpiadas.pdf
# downloads:
#   - file: ./07-molecu-olimpiadas.md
#     title: 07-molecu-olimpiadas.md
#   - file: 07-molecu-olimpiadas.pdf
#     title: 07-molecu-olimpiadas.pdf
---

### Descripción

Bienvenidos a las **Molecu-olimpiadas**, donde enfrentaremos a dos competidores de pesos muy diferentes para determinar quién es la máquina más potente libra por libra:
1.  **Kinesina**: Una proteína motora que transporta vesículas en la célula.
2.  **Halterófilo (o Motor Diesel)**: Un ejemplo macroscópico de potencia.

### Objetivos de aprendizaje
1.  **Calcular** el Trabajo ($W$) realizado por una fuerza constante en desplazamientos microscópicos.
2.  **Determinar** la Potencia ($P$) generada por sistemas biológicos.
3.  **Comparar** sistemas de escalas drásticamente diferentes usando la relación Potencia/Peso.

### Materiales
- Calculadora científica.

### Marco Teórico

*   **Trabajo ($W$)**: Energía transferida por una fuerza.
    $$ W = F \cdot d $$
*   **Potencia ($P$)**: Rapidez con la que se realiza el trabajo.
    $$ P = \frac{W}{t} = F \cdot v $$

### Rondas de Competición

#### Ronda 1: El Concursante Microscópico (Kinesina)
Datos experimentales para una molécula de Kinesina caminando sobre un microtúbulo:
*   **Fuerza de arrastre ($F$)**: $6 \text{ pN}$ ($6 \times 10^{-12} \text{ N}$).
*   **Longitud de paso ($d$)**: $8 \text{ nm}$ ($8 \times 10^{-9} \text{ m}$).
*   **Pasos por segundo**: 100 pasos/s.

1.  Calcule el **Trabajo** realizado por la kinesina en **un solo paso** ($W_{paso}$). (Respuesta en Joules).
2.  Calcule la **velocidad** de la kinesina ($v = d \times \text{pasos/s}$).
3.  Calcule la **Potencia** de salida ($P_{kinesina}$). (Respuesta en Watts).

#### Ronda 2: El Concursante Macroscópico
Elijamos un levantador de pesas olímpico.
*   **Masa levantada**: $260 \text{ kg}$.
*   **Altura**: $2 \text{ m}$.
*   **Tiempo**: $3 \text{ s}$.
*   Fuerza ejercida $\approx \text{Peso} = mg$.

1.  Calcule el **Trabajo** realizado para levantar la pesa ($W = m g h$).
2.  Calcule la **Potencia** promedio ($P_{atleta}$).

#### Ronda 3: El Veredicto (Potencia Específica)
Para comparar justamente, normalizaremos por la masa del "motor".
*   **Masa del atleta**: $\approx 100 \text{ kg}$.
*   **Masa de la Kinesina**: $\approx 6 \times 10^{-22} \text{ kg}$ (aprox. 360 kDa)[^dalton].

[^dalton]: El kilodalton (kDa) es una unidad de medida utilizada en biología molecular, bioquímica y medicina para expresar la masa molecular de moléculas biológicas, como proteínas, ácidos nucleicos y complejos moleculares. Un kilodalton equivale a 1,000 daltons (Da). El dalton es una unidad de medida basada en la masa atómica del hidrógeno, que se define como la doceava parte de la masa de un átomo de carbono-12. Por ejemplo, una molécula de hemoglobina tiene una masa aproximada de 64 kDa, lo que significa que su masa es 64,000 veces la masa de un átomo de hidrógeno.

calcule la **Densidad de Potencia** (Watts por kg) para ambos:

$$ \text{Densidad} = \frac{\text{Potencia (W)}}{\text{Masa (kg)}} $$

### Preguntas de discusión
1.  ¿Quién ganó la ronda de Potencia absoluta?
2.  ¿Quién ganó la ronda de Densidad de Potencia?
3.  ¿Qué nos dice esto sobre la eficiencia de las máquinas biológicas a nanoescala en comparación con las máquinas humanas?

### Entregable
Un cuadro comparativo con los valores de $W$, $P$ y $P/m$ para ambos competidores, y sus conclusiones.
