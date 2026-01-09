---
title: Actividad "Hackeando el Potencial de Acción"
subtitle: Circuitos eléctricos en la neurona
subject: Semana 13
activity:
  type: Simulación Virtual
  duration: 45 min
  modality: Individual
  difficulty: Intermedio
course: Física para Biotecnología
keywords:
- Electricidad
- Circuitos RC
- Potencial de acción
- Canales iónicos
- Simulador
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./14-hackeando-potencial-accion.pdf
# downloads:
#   - file: ./14-hackeando-potencial-accion.md
#     title: 14-hackeando-potencial-accion.md
#   - file: 14-hackeando-potencial-accion.pdf
#     title: 14-hackeando-potencial-accion.pdf
---

<!-- ACTIVITY-BADGES -->
![](https://img.shields.io/badge/Tipo-Simulación_Virtual-orange) ![](https://img.shields.io/badge/Duración-45_min-yellow) ![](https://img.shields.io/badge/Modalidad-Individual-blue) ![](https://img.shields.io/badge/Dificultad-Intermedio-yellow)
<!-- ACTIVITY-BADGES -->

### Descripción

Una neurona no es más que un circuito eléctrico complejo y húmedo. En esta actividad, dejarás de ver "canales" y "membranas" para pensar en "resistencias variables" y "condensadores". Usaremos un simulador interactivo para manipular estos componentes y "hackear" la señal nerviosa.

### Objetivos de aprendizaje
1.  **Identificar** los componentes biológicos que corresponden a resistencias, baterías y condensadores.
2.  **Manipular** la conductancia (inverso de la resistencia) para generar un potencial de acción.
3.  **Simular** el efecto de neurotoxinas bloqueadoras de canales.

### Herramienta
Usaremos el simulador **PhET Neuron** (o un equivalente proporcionado por el profesor).
*   *Enlace*: [PhET Neurona](https://phet.colorado.edu/es/simulation/neuron)

### Marco teórico: El circuito equivalente

| Componente biológico | Componente eléctrico | Función |
| :--- | :--- | :--- |
| **Bicapa Lipídica** | **Condensador ($C_m$)** | Separa cargas, almacena energía eléctrica. |
| **Canales Iónicos** | **Resistencias Variables ($R$)** | Dejan pasar corriente. Su valor cambia (se abren/cierran). |
| **Gradiente de Concentración** | **Batería ($E_{ion}$)** | Provee la fuerza electromotriz (Potencial de Nernst). |

Ley de Ohm en la membrana:
$$ I = \frac{V}{R} = g \cdot (V_m - E_{ion}) $$
Donde $g$ es la conductancia ($1/R$).

### Instrucciones

#### Parte 1: El Estado de Reposo
1.  Abra el simulador. Observe los iones moviéndose.
2.  En este estado, la resistencia al Potasio ($R_K$) es baja (canales de fuga abiertos) y la resistencia al Sodio ($R_{Na}$) es muy alta.
3.  **Anote**: ¿Cuál es el voltaje de membrana ($V_m$) en reposo?

#### Parte 2: Generando la Chispa (Despolarización)
1.  Imagine que usted es un neurotransmisor excitatorio. Su trabajo es **bajar la resistencia** del Sodio.
2.  En el simulador, active/abra los canales de Sodio masivamente.
3.  **Observe**: ¿Hacia dónde fluyen los iones Na+? ¿Qué le pasa al voltaje? (Debería subir hacia positivo). Esto es la **Despolarización**.

#### Parte 3: El Apagado (Repolarización)
1.  Inmediatamente después de la subida, cierre los canales de Sodio (suba $R_{Na}$) y abra los de Potasio (baje $R_K$).
2.  **Observe**: ¿Hacia dónde va el voltaje ahora?

#### Parte 4: La Neurotoxina (Tetrodotoxina - TTX)
La TTX, veneno del pez globo, bloquea físicamente el poro del canal de Sodio.
1.  Simule esto haciendo que la Resistencia del Sodio sea **infinita** (imposible de abrir).
2.  Intente generar un impulso despolarizante. ¿Qué sucede?

### Preguntas de discusión
1.  La anestesia local (como la lidocaína del dentista) funciona de manera similar a la TTX (bloquea canales de $Na^+$). Basado en la simulación, ¿por qué esto impide que usted sienta dolor?
2.  Si la membrana perdiera sus propiedades aislantes (se rompe el condensador), ¿podría generarse un potencial de acción? ¿Por qué?

### Entregable
Un reporte corto con capturas de pantalla del simulador mostrando: Reposo, Pico del Potencial de Acción, y el intento fallido bajo efectos de la "toxina".

### Rúbrica de Evaluación

| Criterio | 5 Puntos | 3 Puntos | 1 Punto |
| :--- | :--- | :--- | :--- |
| **Simulación** | Capturas de pantalla claras que demuestran los estados de Reposo, Despolarización y Bloqueo. | Capturas presentes pero incompletas o poco claras. | No hay evidencia de simulación. |
| **Análisis de Eventos** | Describe correctamente el flujo iónico y voltaje en cada etapa. | Descripción vaga sin mencionar iones específicos o cambios de resistencia. | Análisis incorrecto. |
| **Discusión** | Conecta correctamente la simulación con la anestesia local (bloqueo Na) y la capacitancia. | Conexión débil o explicación incorrecta. | No responde discusión. |
