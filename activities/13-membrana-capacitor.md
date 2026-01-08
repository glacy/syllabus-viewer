---
title: Actividad "Membrana Celular como Condensador"
subtitle: Modelado bioeléctrico de la bicapa lipídica
subject: Semana 12
activity:
  type: Taller de Cálculo
  duration: 50 min
  modality: Individual
  difficulty: Avanzado
course: Física para Biotecnología
keywords:
- Electricidad
- Condensador
- Membrana Celular
- Campo Eléctrico
- Potencial de Reposo
# exports:
#  - format: pdf
#    template: curvenote
#    output: ./13-membrana-capacitor.pdf
# downloads:
#   - file: ./13-membrana-capacitor.md
#     title: 13-membrana-capacitor.md
#   - file: 13-membrana-capacitor.pdf
#     title: 13-membrana-capacitor.pdf
---

### Descripción

La membrana celular es una maravilla de la ingeniería eléctrica natural. Actúa como un aislante extremadamente delgado (dieléctrico) que separa dos medios conductores (el citoplasma y el fluido extracelular). Esta estructura permite almacenar carga y energía, funcionando efectivamente como un **condensador (capacitor)**.

En esta actividad, usaremos el modelo de placas paralelas para estimar las propiedades eléctricas fundamentales de una célula.

### Objetivos de aprendizaje
1.  **Modelar** sistemas biológicos usando componentes de circuitos electrónicos simples.
2.  **Calcular** la capacitancia de una membrana biológica.
3.  **Dimensionar** la magnitud del campo eléctrico que soportan las proteínas de membrana.

### Marco Teórico

Para un condensador de placas paralelas, la capacitancia $C$ está dada por:
$$ C = \frac{\kappa \epsilon_0 A}{d} $$
Donde:
*   $\kappa \approx 3.0$: Constante dieléctrica relativa de los lípidos.
*   $\epsilon_0 = 8.85 \times 10^{-12} \text{ F/m}$: Permitividad del vacío.
*   $d \approx 7 \text{ nm}$: Espesor de la membrana.
*   $A$: Área de superficie de la membrana.

La relación entre Carga ($Q$), Voltaje ($V$) y Capacitancia es:
$$ Q = C \cdot V $$

El Campo Eléctrico ($E$) en el interior de la membrana (asumiendo campo uniforme) es:
$$ E = \frac{\Delta V}{d} $$

### Problemas

#### 1. Capacitancia Específica
Calcule la **capacitancia por unidad de área** ($C_{específica} = C/A$) de una membrana neuronal típica.
*   Exprese su resultado en $\mu \text{F/cm}^2$.
*   *Nota*: El valor experimental real suele rondar $1.0 \mu \text{F/cm}^2$. ¿Qué tan cerca estuvo su cálculo teórico?

#### 2. La Célula Esférica
Considere una célula esférica con un diámetro de $20 \mu \text{m}$.
1.  Calcule su área superficial ($A = 4\pi r^2$).
2.  Calcule la **Capacitancia Total** de esta célula.

#### 3. El Campo Eléctrico Gigante
El potencial de reposo de una neurona es aproximadamente $\Delta V = -70 \text{ mV}$.
1.  Calcule la magnitud del **Campo Eléctrico ($E$)** dentro de la membrana. Exprese el resultado en **Voltios/metro (V/m)**.
2.  Compare este valor con el campo eléctrico necesario para crear una chispa en el aire ($\approx 3 \times 10^6 \text{ V/m}$). ¿Es el campo de la membrana fuerte o débil?

### Preguntas de discusión
1.  Si el espesor de la membrana aumenta (ej. mielinización), ¿qué le pasa a la capacitancia? ¿Ayuda esto a transmitir señales más rápido o más lento?
2.  ¿Por qué las proteínas incrustadas en la membrana necesitan ser tan robustas estructuralmente? (Piense en el cálculo del campo eléctrico).

### Entregable
Hoja de cálculos con los resultados de las tres secciones y una breve conclusión sobre la intensidad del campo eléctrico celular.
