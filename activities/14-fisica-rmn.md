---
title: Actividad "Física de la RMN"
subtitle: Principios de la Resonancia Magnética Nuclear
subject: Semana 14
activity:
  type: Taller Teórico
  duration: 45 min
  modality: Individual
  difficulty: Avanzado
course: Física para Biotecnología
keywords:
- Magnetismo
- Spin
- Frecuencia de Larmor
- Resonancia
- Imagen Médica
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./15-fisica-rmn.pdf
# downloads:
#   - file: ./15-fisica-rmn.md
#     title: 15-fisica-rmn.md
#   - file: 15-fisica-rmn.pdf
#     title: 15-fisica-rmn.pdf
---

### Descripción

La Resonancia Magnética (MRI) es la aplicación más impresionante del magnetismo cuántico en la medicina. Nos permite ver dentro del cuerpo sin usar radiación ionizante (como los rayos X). ¿Cómo funciona? Convirtiendo los protones de tu cuerpo en diminutos transmisores de radio.

### Objetivos de aprendizaje
1.  **Explicar** cómo un campo magnético externo alinea los espines nucleares.
2.  **Calcular** la Frecuencia de Larmor para sintonizar la resonancia.
3.  **Comprender** el origen del contraste en las imágenes (tiempos de relajación T1 y T2).

### Marco Teórico

#### 1. El protón como imán
Los núcleos de hidrógeno (protones), abundantes en el agua y grasa del cuerpo, tienen una propiedad llamada **spin**. Esto los hace comportarse como pequeños imanes con un momento magnético ($\mu$).
Sin campo externo, apuntan en cualquier dirección. Bajo un campo fuerte ($B_0$), se alinean.

#### 2. Precesión y frecuencia de Larmor
Cuando se inclinan, los protones no se caen, sino que giran como un trompo (precesan). La velocidad de este giro depende de qué tan fuerte es el campo magnético.
$$ f = \frac{\gamma}{2\pi} B_0 $$
Donde:
*   $f$: Frecuencia de Larmor (en Hz).
*   $B_0$: Intensidad del campo magnético (en Tesla, T).
*   $\frac{\gamma}{2\pi} \approx 42.58 \text{ MHz/T}$: Constante giromagnética del protón.

### Problemas

#### Problema 1: Sintonizando la Radio
Un escáner clínico típico opera a **1,5 Tesla**. Otro de alta resolución para investigación opera a **7,0 Tesla**.
1.  Calcule la frecuencia de resonancia ($f$) para los protones de hidrógeno en ambos casos.
    *   *Nota*: Esta es la frecuencia de la onda de radio (RF) que la máquina debe enviar para "excitar" los protones.
2.  ¿En qué banda del espectro electromagnético caen estos valores? (AM, FM, TV, Microondas...).

#### Problema 2: Seguridad Magnética
Un tanque de oxígeno ferromagnético ($m= 5 \text{ kg}$) se deja accidentalmente cerca del imán. El gradiente de campo magnético ejerce una fuerza que lo acelera hacia el centro del túnel.
Si la fuerza promedio es de $500 \text{ N}$:
1.  ¿Cuál es la aceleración del tanque?
2.  Este "efecto proyectil" es la razón por la que **nunca** se debe entrar con metales a la sala de RMN.

### Análisis conceptual: El contraste
La imagen no es una foto; es un mapa de señales.
*   **Densidad de protones**: Más agua = Más señal. (e.g., El hueso se ve negro porque tiene poca agua libre).
*   **Relajación**: Cuando apagamos el pulso de radio, los protones vuelven a la normalidad. El tiempo que tardan depende de su entorno.
    *   ¿Por qué un tumor (lleno de agua desorganizada) se ve diferente al tejido sano en una imagen pesada en T2?

### Entregable
Cálculos de las frecuencias y una breve explicación (3 líneas) de por qué los pacientes con marcapasos no pueden hacerse una RMN.
