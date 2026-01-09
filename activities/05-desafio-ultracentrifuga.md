---
title: Actividad "Desafío de la Ultracentrífuga"
subtitle: Validando protocolos de separación de orgánulos
subject: Semana 5
activity:
  type: Taller de Cálculo
  duration: 45 min
  modality: Grupal
  difficulty: Intermedio
course: Física para Biotecnología
keywords:
- Movimiento Circular
- Aceleración Centrípeta
- RPM vs RCF
- Protocolos
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./06-desafio-ultracentrifuga.pdf
# downloads:
#   - file: ./06-desafio-ultracentrifuga.md
#     title: 06-desafio-ultracentrifuga.md
#   - file: 06-desafio-ultracentrifuga.pdf
#     title: 06-desafio-ultracentrifuga.pdf
---

### Descripción

La reproducibilidad en la ciencia es fundamental. Sin embargo, muchos artículos científicos antiguos (o mal escritos) reportan las condiciones de centrifugación solo en **RPM** (revoluciones por minuto), sin especificar el rotor utilizado. Esto hace imposible replicar el experimento exactamente.

En esta actividad, actuaremos como "auditores" de protocolos, asegurando que las condiciones de fuerza g (RCF) sean las correctas para una separación exitosa de orgánulos celulares.

### Objetivos de aprendizaje
1.  **Diferenciar** entre velocidad angular ($\omega$), frecuencia ($f$, RPM) y aceleración centrípeta ($a_c$, RCF).
2.  **Calcular** la aceleración centrípeta (en unidades $g$) dado un radio y una velocidad de rotación.
3.  **Analizar** el impacto del radio del rotor ($r_{min}$, $r_{avg}$, $r_{max}$) en la fuerza experimentada por la muestra.

### Materiales
- Calculadora científica.
- Hoja de especificaciones de rotores (proveída abajo).

### Marco teórico

La aceleración centrípeta se calcula como:

$$ a_c = \omega^2 r $$

Donde $\omega$ está en rad/s y $r$ en metros.
En el laboratorio, usamos una fórmula práctica para obtener la **Fuerza Centrífuga Relativa (RCF)** en unidades de $g$ ($9,8 \text{ m/s}^2$):

$$ RCF = 1,118 \times 10^{-5} \times r \times (RPM)^2 $$

*   $r$: radio en centímetros ($cm$).
*   RPM: revoluciones por minuto.

### El desafío

Usted está intentando replicar un protocolo para aislar mitocondrias de hígado de rata. El protocolo dice:
> "Centrifugar el homogeneizado a 600 g por 10 min (para eliminar núcleos), recolectar el sobrenadante y centrifugar a 15,000g por 15 min para obtener el pellet mitocondrial."

Usted tiene disponible en su laboratorio una centrífuga Eppendorf con un rotor de ángulo fijo (Radio máximo = 8,5 cm).

#### Parte 1: Configuración del equipo
1.  Calcule a qué **RPM** debe configurar su centrífuga para lograr los 600 $g$ del primer paso.
2.  Calcule a qué RPM debe configurarla para lograr los 15,000 $g$ del segundo paso.

#### Parte 2: Análisis de gradiente
El tubo de ensayo tiene una longitud. La muestra en la parte superior del líquido (cerca del eje) está a un radio menor ($r_{min} = 4,0 \text{ cm}$) que la muestra en el fondo ($r_{max} = 8,5 \text{ cm}$).

1.  Si configura la centrífuga a las RPM calculadas en el paso anterior (para 15,000g en el fondo), ¿cuál es la fuerza g real que experimentan las mitocondrias en la parte superior del tubo ($r_{min}$)?
2.  ¿Cree que esto podría afectar la eficiencia de la separación? Explique brevemente.

### Pregunta de reflexión
¿Por qué es considerado "mala práctica" reportar solo las RPM en un artículo científico en lugar de la fuerza g (RCF)?

### Entregable
Un documento con:
1.  Los cálculos detallados de las RPM para ambos pasos.
2.  El cálculo de la fuerza $g$ en $r_{min}$.
3.  Su respuesta a la pregunta de reflexión sobre reproducibilidad.
