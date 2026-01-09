---
title: Actividad "Rastreo estroboscópico"
subtitle: Análisis de movimiento en una sola imagen
subject: Semana 2
activity:
  type: Taller corto
  duration: 45 min
  modality: Individual
  difficulty: Intermedio
course: Física para Biotecnología
keywords:
- ImageJ
- Fiji
- Cinemática
- Estroboscopio
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./04-rastreo-estroboscopico.pdf
# downloads:
#   - file: ./04-rastreo-estroboscopico.md
#     title: 04-rastreo-estroboscopico.md
#   - file: 04-rastreo-estroboscopico.pdf
#     title: 04-rastreo-estroboscopico.pdf
---

### Descripción de la actividad

En esta actividad, simplificaremos el proceso de rastreo de movimiento utilizando una **imagen estroboscópica**. Una imagen estroboscópica muestra múltiples "instantáneas" de un objeto en movimiento superpuestas en una sola imagen, como si se tomara una foto con flash múltiples veces mientras el obturador de la cámara permanece abierto.

Esto permite analizar la cinemática de una célula sin necesidad de procesar archivos de video pesados, enfocándose en la física del movimiento.

### Objetivos de aprendizaje
1.  **Entender** el concepto de intervalo de tiempo $\Delta t$ en una serie temporal.
2.  **Medir** posiciones $(x, y)$ a partir de una imagen calibrada.
3.  **Calcular** la velocidad promedio e instantánea utilizando datos discretos.

### Materiales
- Computadora con [Fiji (ImageJ)](https://fiji.sc/) instalado.
- Archivo de muestra: **Tracks for TrackMate** (Incluido en Fiji).

### Instrucciones paso a paso

#### 1. Preparación de la imagen estroboscópica
Utilizaremos un archivo de ejemplo que viene incluido en la instalación de Fiji.

1.  Abra Fiji (ImageJ).
2.  Vaya al menú: `File > Open Samples > Tracks for TrackMate (807K)`.
3.  Se abrirá una secuencia de imágenes ("stack"). Si mueve la barra deslizante inferior, verá los puntos moverse.
4.  Para visualizar todo el movimiento en una sola imagen, vaya a `Image > Stacks > Z Project...`.
5.  En `Projection type`, seleccione `Max Intensity` (Intensidad Máxima).
6.  Clic en `OK`.
    *   *Esto generará una nueva imagen donde todas las posiciones de los puntos a lo largo del tiempo son visibles simultáneamente.*
7.  Use esta nueva imagen para el análisis.

    :::{figure} ../assets/MAX_FakeTracks.png
    :width: 400px
    :align: center
    
    Imagen estroboscópica de la actividad.
    :::

#### 2. Calibración
1.  **Espacial**: Esta imagen puede no tener una barra de escala visible. Asumiremos para este ejercicio que la imagen tiene un ancho de 100 $\mu m$.
    *   Trace una línea horizontal a lo largo de todo el ancho de la imagen.
    *   Vaya a `Analyze > Set Scale`.
    *   En "Known distance", ponga `100`. En "Unit of length", `um`.
    *   Clic en `OK`.
2.  **Temporal**: El intervalo de tiempo entre cuadros en este archivo es de $0,5$ s. Para configurarlo:
    *   Vaya a `Image > Properties...`.
    *   En la casilla `Frame interval`, escriba `0,50`.
    *   En `Unit of time`, escriba `sec`.
    *   Clic en `OK`.

#### 3. Recolección de datos
1.  Identifique una "traza" (una serie de puntos que forman una línea).
2.  Utilice la herramienta de `Punto` (Point Tool) para marcar el centro de cada punto en esa traza, ordenadamente de inicio a fin.

    :::{figure} ../assets/point_tool.png
    :width: 400px
    :align: center
    
    Herramienta de Punto en Fiji.
    :::

3.  Use `Analyze > Measure` para obtener las coordenadas $(x, y)$.

#### 4. Análisis
Con los datos obtenidos, complete la tabla:

| Posición $x$ ($\mu$m) | Posición $y$ ($\mu$m) |
| :--- | :--- |
| ... | ... |
| ... | ... |
| ... | ... |

**Preguntas de análisis:**
1.  Calcule la velocidad entre cada par de puntos consecutivos.
2.  ¿Es el movimiento uniforme? Grafique `y vs x`.

### Entregable
Un documento PDF corto o una hoja de cálculo con:
1.  La tabla de datos completa.
2.  Un gráfico simple de `y vs x` (la trayectoria).
3.  Respuestas a las preguntas de análisis.
