---
title: Actividad "Diseño de Centrífugas"
subtitle: Análisis de fuerzas en un tubo de ensayo giratorio
subject: Semana 4
activity:
  type: Estudio de Caso
  duration: 60 min
  modality: Grupal
  difficulty: Intermedio
course: Física para Biotecnología
keywords:
- Leyes de Newton
- Diagrama de Cuerpo Libre
- Fuerza Normal
- Fuerza Centrípeta
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./05-diseno-centrifugas.pdf
# downloads:
#   - file: ./05-diseno-centrifugas.md
#     title: 05-diseno-centrifugas.md
#   - file: 05-diseno-centrifugas.pdf
#     title: 05-diseno-centrifugas.pdf
---

### Descripción del caso

Una *startup* de biotecnología está diseñando un nuevo rotor para una microcentrífuga de alta velocidad. Han detectado que, a ciertas velocidades, el fondo de los tubos de plástico (donde se acumula el *pellet* celular) se rompe, causando pérdida de muestras valiosas.

Su equipo de ingeniería ha sido contratado para determinar la fuerza máxima que el fondo del tubo debe soportar para evitar rupturas.

### Objetivos de aprendizaje
1.  **Construir** un Diagrama de Cuerpo Libre (DCL) para un objeto en movimiento circular.
2.  **Identificar** las fuerzas reales que actúan sobre la muestra (peso, normal, etc.).
3.  **Aplicar** la Segunda Ley de Newton para relacionar estas fuerzas con la aceleración del sistema.

### Materiales
- Lápiz y papel.
- Tubo de ensayo con agua (para visualización).

### Instrucciones paso a paso

#### 1. Visualización del sistema
Imagine un tubo de ensayo girando en una centrífuga de ángulo fijo.
1.  Dibuje un esquema del rotor visto desde arriba.
2.  Dibuje un esquema del tubo visto de lado (corte transversal) mientras gira. Indique el eje de rotación.

#### 2. Aislamiento del objeto de estudio
Para simplificar, analizaremos una pequeña masa de líquido (o el *pellet* celular) que se encuentra justo en el fondo del tubo.
1.  Dibuje un círculo que represente esta pequeña masa $m$.
2.  Identifique la dirección hacia donde está el centro del rotor (el centro de rotación).

#### 3. Diagrama de Cuerpo Libre (DCL)
Dibuje las fuerzas que actúan sobre la masa $m$. **Recuerde:** La "fuerza centrífuga" es una fuerza ficticia que aparece en marcos de referencia no inerciales; en un DCL inercial (visto desde fuera), **solo dibujamos interacciones reales**.

Identifique y dibuje:
1.  **Peso ($mg$):** Hacia abajo (interacción con la Tierra).
2.  **Fuerza Normal ($N$):** La fuerza que ejerce el fondo del tubo sobre la muestra. ¿Hacia dónde empuja el fondo del tubo a la muestra para mantenerla girando en círculo?

:::{tip}
La aceleración centrípeta no es una fuerza más. Es el *resultado* ($\vec{F}_{neta}$) de sumar las fuerzas reales. Apunta siempre hacia el centro de rotación.
:::

#### 4. Aplicación de la Segunda Ley de Newton
Escriba las ecuaciones de movimiento para los ejes relevantes.
1.  **Eje vertical ($y$):** Si el tubo no sube ni baja, la aceleración en $y$ es cero.
    $$ \Sigma F_y = 0 \Rightarrow ... $$
2.  **Eje radial ($x$):** La muestra está acelerando hacia el centro del círculo con una aceleración $a_c$.
    $$ \Sigma F_x = m a_c \Rightarrow ... $$

*(Nota: En esta etapa no realizaremos cálculos numéricos de $a_c$, nos enfocaremos en establecer la relación entre la Fuerza Normal y la rotación).*

### Preguntas de discusión
1.  ¿Qué fuerza es la responsable directa de "empujar" a la muestra hacia el centro y mantenerla girando?
2.  Si la velocidad de rotación aumenta, ¿qué debe pasar con la magnitud de la Fuerza Normal?
3.  ¿Por qué se rompe el fondo del tubo? (Relacione su respuesta con la Tercera Ley de Newton: Acción-Reacción).

### Entregable
Un informe técnico breve (1 página) que incluya:
1.  El esquema del sistema.
2.  El Diagrama de Cuerpo Libre (DCL) correcto.
3.  Las ecuaciones de la Segunda Ley de Newton derivadas del DCL.
4.  La explicación de por qué el fondo del tubo es el punto crítico de falla.
