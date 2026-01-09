---
title: Actividad "Estabilidad de Proteínas"
subtitle: Modelado de cuerpo rígido de un anticuerpo IgG
subject: Semana 7
activity:
  type: Taller de Cálculo
  duration: 50 min
  modality: Grupal
  difficulty: Avanzado
course: Física para Biotecnología
keywords:
- Cuerpo Rígido
- Centro de Masa
- Torque
- Anticuerpo IgG
- Biomecánica
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./08-estabilidad-proteinas.pdf
# downloads:
#   - file: ./08-estabilidad-proteinas.md
#     title: 08-estabilidad-proteinas.md
#   - file: 08-estabilidad-proteinas.pdf
#     title: 08-estabilidad-proteinas.pdf
---

### Descripción

Para aplicar las leyes de la estática (equilibrio) a biomoléculas, a menudo las simplificamos como **cuerpos rígidos**. En esta actividad, modelaremos un anticuerpo IgG[^Icg] (forma de "Y") fijado a una superficie (como en un ensayo ELISA o un biosensor) para determinar si las fuerzas de flujo dañarán el ensayo.

[^Icg]:Los anticuerpos IgG (Inmunoglobulina G) son el tipo más abundante de anticuerpos en la sangre, proteínas clave del sistema inmunitario que actúan como memoria de infecciones pasadas, defendiendo contra bacterias y virus, y son los únicos que atraviesan la placenta para proteger al feto, siendo cruciales para la inmunidad a largo plazo y diagnosticados mediante análisis de sangre para detectar infecciones o problemas inmunitarios.

### Objetivos de aprendizaje
1.  **Calcular** el centro de masa ($x_{cm}, y_{cm}$) de un objeto compuesto.
2.  **Calcular** el torque ($\tau$) generado por fuerzas externas.
3.  **Analizar** las condiciones de estabilidad (equilibrio rotacional).

### El modelo simplificado (la "Y")

Imagine que el anticuerpo está compuesto por tres barras delgadas uniformes:
1.  **Dominio Fab izquierdo**: Longitud $L = 7 \text{ nm}$, Masa $m = 50 \text{ kDa}$, Ángulo $45^\circ$ a la izquierda.
2.  **Dominio Fab derecho**: Longitud $L = 7 \text{ nm}$, Masa $m = 50 \text{ kDa}$, Ángulo $45^\circ$ a la derecha.
3.  **Dominio Fc (base)**: Longitud $L = 7 \text{ nm}$, Masa $m = 50 \text{ kDa}$, Vertical.

La estructura se apoya sobre el origen $(0,0)$ en la base del dominio Fc.

#### Parte 1: El Centro de Gravedad
Para predecir cómo se moverá la molécula libre, necesitamos su centro de masa.
1.  Determine las coordenadas $(x, y)$ del **centro geométrica** de cada una de las 3 barras. (Recuerde: el CM de una barra uniforme está en su mitad).
    *   *Pista*: Use trigonometría para los brazos inclinados.
2.  Calcule el Centro de Masa total del anticuerpo:
    $$ Y_{cm} = \frac{m_1 y_1 + m_2 y_2 + m_3 y_3}{m_1 + m_2 + m_3} $$
    $$ X_{cm} = ... $$

#### Parte 2: ¿Aguantará el flujo?
El anticuerpo está anclado a una superficie por su base (dominio Fc). Un flujo de tampón de lavado aplica una fuerza de arrastre horizontal $F_{arrastre} = 2 \text{ pN}$ exactamente en la punta de los brazos Fab.

1.  Calcule la altura total $H$ desde la base hasta la punta de los brazos.
2.  Calcule el **Torque ($\tau$)** que esta fuerza genera respecto al punto de anclaje (pivote en la base).
    $$ \tau = r \cdot F \cdot \sin(\theta) $$
    *(Aquí la fuerza es horizontal y el brazo de palanca es vertical, $\theta = 90^\circ$)*.
3.  Suponga que el enlace químico que sostiene al anticuerpo puede soportar un torque máximo de $50 \text{ pN}\cdot\text{nm}$ antes de romperse ("pelarse"). **¿Se desprenderá el anticuerpo?**

### Preguntas de discusión
1.  Si el anticuerpo fuera más flexible (no un cuerpo rígido), ¿el torque sería mayor o menor? ¿Por qué?
2.  ¿Por qué es importante conocer el centro de masa al estudiar la sedimentación de proteínas en una centrífuga?

### Entregable
Cálculos detallados del CM y del torque máximo, con un diagrama claro mostrando los vectores de posición y fuerza.
