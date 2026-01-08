---
title: Taller "Rastreo de Movimiento Celular"
subtitle: Análisis de video con ImageJ/Fiji
subject: Semana 2
activity:
  type: Laboratorio Computacional
  duration: 90 min
  modality: Individual o Parejas
  difficulty: Avanzado
course: Física para Biotecnología
keywords:
- ImageJ
- Fiji
- Cinemática
- Tracking
- Velocidad
---

### Descripción de la actividad

En este laboratorio computacional, los estudiantes utilizarán **Fiji (ImageJ)**, el software estándar de código abierto para procesamiento de imágenes biológicas, para analizar videos reales de microscopía. El objetivo es rastrear la trayectoria de células móviles (ej. bacterias, espermatozoides o células inmunes), obtener coordenadas $(x, y)$ en función del tiempo y calcular parámetros cinemáticos como velocidad promedio y velocidad instantánea.

### Objetivos de aprendizaje
1.  **Familiarizarse** con el entorno de trabajo ImageJ/Fiji y la importancia de la calibración espacial y temporal.
2.  **Ejecutar** un protocolo de rastreo (tracking) manual o semiautomático para extraer datos cuantitativos de imágenes crudas.
3.  **Procesar** datos experimentales ruidosos para construir gráficos de posición vs. tiempo y velocidad vs. tiempo.
4.  **Interpretar** el movimiento biológico desde una perspectiva física (movimiento browniano vs. motilidad dirigida).

### Prerrequisitos
- Computadora con [Fiji (ImageJ)](https://fiji.sc/) instalado.
- Video de muestra (puede ser descargado de repositorios públicos como [Cell Image Library](http://www.cellimagelibrary.org/) o proporcionado por el instructor).

### Instrucciones paso a paso

#### Fase 1: Configuración y calibración (15 min)
1.  **Abrir el video**: Arrastre el archivo de video a la ventana de Fiji.
2.  **Calibración espacial**:
    - Si la imagen tiene una barra de escala incrustada, use la herramienta "Line" para trazar una línea sobre ella.
    - Vaya a `Analyze > Set Scale`.
    - En "Known distance", ingrese el valor de la barra (ej. 10). En "Unit of length", la unidad ($\mu m$).
    - Marque "Global" para aplicar a todo el video.
    - *Nota*: Si no hay barra, asuma 1 pixel = 1 unidad arbitraria, pero indique esto en su reporte.
3.  **Calibración temporal**:
    - Vaya a `Image > Properties`.
    - En "Frame interval", ingrese el tiempo entre cuadros (ej. 0.5 sec) si lo conoce.

#### Fase 2: Rastreo con TrackMate (40 min)
*TrackMate es un plugin poderoso incluido en Fiji.*

1.  Vaya a `Plugins > Tracking > TrackMate`.
2.  **Detección**: Seleccione el detector (ej. "LoG detector" para objetos redondos brillantes).
    - *Estimated blob diameter*: Ajuste al tamaño aproximado de sus células (ej. 15 pixels).
    - *Threshold*: Ajuste hasta que el software detecte la mayoría de las células sin incluir mucho ruido de fondo.
3.  **Filtrado**: Use los filtros de calidad para eliminar detecciones espurias.
4.  **Tracking**: Seleccione un algoritmo (ej. "Simple LAP tracker" suele funcionar bien para movimiento sencillo).
5.  **Resultados**: Al finalizar, TrackMate generará trayectorias ("Tracks").
    - Exporte los datos: Haga clic en "Analysis" y luego en "Tracks" o "Spots" para exportar a CSV/Excel.

*Alternativa Manual (Plugin "Manual Tracking"): `Plugins > Tracking > Manual Tracking`.*

#### Fase 3: Análisis de datos (35 min)
1.  Importe los datos (Tiempo $t$, Posición $X$, Posición $Y$) en Excel o Python.
2.  **Cálculo de desplazamiento**: Para una célula elegida, calcule la distancia al origen en cada instante: $r(t) = \sqrt{(x(t)-x_0)^2 + (y(t)-y_0)^2}$.
3.  **Cálculo de velocidad**: Estime la velocidad instantánea entre cuadros consecutivos:
    $$ v_i = \frac{\sqrt{(x_{i+1}-x_i)^2 + (y_{i+1}-y_i)^2}}{\Delta t} $$
4.  **Graficar**:
    - Trayectoria en el plano ($Y$ vs $X$).
    - Posición vs Tiempo.
    - Velocidad vs Tiempo (observe el "ruido" debido a la discretización).

### Entregable
Un informe breve que incluya:
1.  **Imagen**: Captura de pantalla del video con las trayectorias superpuestas (Overlay).
2.  **Gráficos**: Gráfico de trayectoria $XY$ y gráfico de Velocidad vs Tiempo de al menos 3 células diferentes.
3.  **Análisis**: ¿Las células se mueven a velocidad constante? ¿Ve fluctuaciones aleatorias? Compare la velocidad promedio de las 3 células.

### Rúbrica de evaluación

| Criterio | Puntos | Descripción |
| :--- | :--- | :--- |
| **Calibración** | 10 pts | Escalas espacial y temporal configuradas correctamente. |
| **Tracking** | 40 pts | Rastreo limpio de al menos 3 células por una duración significativa (>20 cuadros). |
| **Análisis gráfico** | 30 pts | Gráficos con ejes rotulados, unidades correctas y título. |
| **Interpretación** | 20 pts | Discusión coherente sobre el tipo de movimiento observado y las limitaciones del rastreo. |
