import React from 'react';
import SlideLayout from './common/SlideLayout';
import SlideHeader from './common/SlideHeader';
import IconCard from './common/IconCard';
import CallToAction from './common/CallToAction';
import CodeBlock from './common/CodeBlock';

const SlideWrapper = ({ children, isActive }) => (
    <div
        role="region"
        aria-roledescription="slide"
        aria-hidden={!isActive}
        className={`w-full min-h-screen lg:min-h-full bg-[#FEFEFE] dark:bg-slate-900 transition-all duration-300 ${isActive ? 'flex opacity-100' : 'hidden opacity-0'}`}
    >
        {children}
    </div>
);

// Slide 1: Portada
const Portada = () => (
    <div className="w-full min-h-screen lg:min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-[#0f172a] dark:bg-black py-10 lg:py-0">
        <div className="absolute inset-0 z-0">
            {/* <img src="https://sfile.chatglm.cn/images-ppt/55dbdc967fda.png" alt="Background" className="w-full h-full object-cover" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-slate-900/85 dark:from-slate-900 dark:via-slate-800 dark:to-black"></div>
        </div>
        <div className="relative z-10 text-center px-6 lg:px-20 flex flex-col items-center justify-center flex-grow">
            <div className="mb-6 lg:mb-8">
                <i className="material-icons text-white text-6xl lg:text-[72px] opacity-90">description</i>
            </div>
            <h1 className="title-font text-4xl lg:text-7xl font-bold text-white leading-tight mb-8 lg:mb-10 max-w-5xl tracking-tight">
                Diseño semántico de documentos académicos
            </h1>
            <div className="w-32 lg:w-64 h-1 mx-auto mb-8 lg:mb-10 bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
            <p className="text-xl lg:text-2xl font-light text-primary-100 tracking-wide leading-relaxed max-w-3xl">
                Curso sobre frontmatter, metadatos y publicación reproducible
            </p>
        </div>
        <div className="relative lg:absolute lg:bottom-10 left-0 right-0 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16 text-primary-200 mt-10 lg:mt-0 pb-10 lg:pb-0 z-10">
            <div className="flex items-center gap-2">
                <i className="material-icons text-2xl">schedule</i>
                <span className="text-lg font-light">6 sesiones • 9 horas</span>
            </div>
            <div className="hidden lg:block w-1 h-8 bg-primary-300/30"></div>
            <div className="flex items-center gap-2">
                <i className="material-icons text-2xl">code</i>
                <span className="text-lg font-light">YAML • MyST • Jupyter Book</span>
            </div>
        </div>
    </div>
);

// Slide 2: Sesión 1
const Sesion1 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 1" subtitle="Introducción al Frontmatter" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-12 gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-8">
                <IconCard icon="school" title="Objetivos de aprendizaje" variant="info">
                    <div className="space-y-4">
                        {[
                            "Comprender el concepto de frontmatter y su función semántica",
                            "Distinguir estructura visual vs estructura semántica",
                            "Identificar limitaciones de estructuración puramente visual"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <i className="material-icons mt-1 text-accent-700 dark:text-accent-400">check_circle</i>
                                <p className="text-lg lg:text-xl leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </IconCard>

                <div className="flex items-center justify-center p-6 bg-primary-50 dark:bg-slate-800/50 rounded-xl">
                    <p className="text-xl lg:text-2xl text-primary-600 dark:text-primary-300 text-center italic font-light">"Del documento tipográfico al documento semántico"</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
                <div className="grid grid-cols-1 gap-6">
                    <IconCard icon="description" title="Frontmatter" variant="outlined-info">
                        Metadatos estructurados en YAML al inicio del documento
                    </IconCard>
                    <IconCard icon="label" title="Metadatos" variant="outlined-info">
                        Datos sobre el documento, no el documento mismo
                    </IconCard>
                </div>
            </div>
        </div>
    </SlideLayout>
);

// Slide 3: Sesión 2
const Sesion2 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 2" subtitle="Frontmatter en contextos académicos" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-12 gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-8">
                <div>
                    <IconCard icon="person" title="Autoría académica" variant="clean" className="!p-0">
                        <div className="pl-8 lg:pl-14 space-y-3">
                            {['Nombre y rol del autor', 'Afiliación institucional', 'Taxonomía CRediT (contribuciones específicas)'].map((item, i) => (
                                <p key={i} className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                    <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                                </p>
                            ))}
                        </div>
                    </IconCard>
                </div>

                <div>
                    <IconCard icon="account_balance" title="Afiliación institucional" variant="clean" className="!p-0">
                        <div className="pl-8 lg:pl-14 space-y-3">
                            {['Universidad / Departamento', 'Proyecto o programa académico'].map((item, i) => (
                                <p key={i} className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                    <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                                </p>
                            ))}
                        </div>
                    </IconCard>
                </div>

                <div>
                    <IconCard icon="copyright" title="Licencias académicas" variant="clean" className="!p-0">
                        <div className="pl-8 lg:pl-14">
                            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-200">Creative Commons (ej. CC-BY-4.0) para reutilización abierta</p>
                        </div>
                    </IconCard>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <IconCard icon="code" title="Frontmatter académico mínimo" variant="outlined-info" className="bg-primary-50 dark:bg-slate-800">
                    <CodeBlock>
                        {`---
title: "Guía introductoria..."
authors:
  - name: "Gerardo Lacy Mora"
    affiliation: "ITCR"
    roles:
      - author
      - instructor
keywords:
  - metadatos
  - documentación académica
license: CC-BY-4.0
---`}
                    </CodeBlock>
                    <div className="mt-6 flex items-start gap-2">
                        <i className="material-icons text-primary-600 dark:text-primary-300 text-[20px]">label</i>
                        <p className="text-base lg:text-lg text-gray-700 dark:text-gray-200"><strong className="text-accent-700 dark:text-accent-400">Palabras clave (keywords):</strong> permiten indexación temática y búsqueda eficiente</p>
                    </div>
                </IconCard>
            </div>
        </div>
    </SlideLayout>
);

// Slide 4: Sesión 3
const Sesion3 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 3" subtitle="Diseño Semántico de Metadatos" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-10 gap-8 lg:gap-10">
            <div className="w-full lg:w-3/5 flex flex-col justify-center gap-6 lg:gap-7">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <IconCard icon="code" title="Sintácticos" variant="info">
                        Formalmente correctos pero ambiguos
                    </IconCard>
                    <IconCard icon="psychology" title="Semánticos" variant="info">
                        Explícitos, consistentes y compartidos
                    </IconCard>
                </div>

                <div>
                    <IconCard icon="sync_alt" title="Consistencia" variant="clean" className="!p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-8 lg:pl-12">
                            {[
                                { icon: 'horizontal_rule', title: 'Horizontal', text: 'Coherencia entre documentos del mismo nivel' },
                                { icon: 'vertical_align_center', title: 'Vertical', text: 'Coherencia entre niveles jerárquicos' }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <i className="material-icons text-accent-700 dark:text-accent-400 text-[20px]">{item.icon}</i>
                                        <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.title}</h4>
                                    </div>
                                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-snug">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </IconCard>
                </div>

                <div>
                    <IconCard icon="checklist" title="Vocabularios controlados" variant="clean" className="!p-0">
                        <div className="pl-8 lg:pl-12 space-y-2">
                            {['Conjunto limitado de valores permitidos', 'Facilita análisis automático y validación'].map((item, i) => (
                                <p key={i} className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                    <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                                </p>
                            ))}
                        </div>
                    </IconCard>
                </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center gap-6">
                <IconCard icon="error_outline" title="Errores frecuentes" variant="outlined-warning">
                    <div className="space-y-3">
                        {['Usar sinónimos como equivalentes', 'Cambiar significado de campos', 'Crear campos ad hoc arbitrarios'].map((item, i) => (
                            <p key={i} className="flex items-start gap-2">
                                <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                            </p>
                        ))}
                    </div>
                </IconCard>
            </div>
        </div>
    </SlideLayout>
);

// Slide 5: Sesión 4
const Sesion4 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 4" subtitle="Herencia y reutilización de frontmatter" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-10 gap-8 lg:gap-10">
            <div className="w-full lg:w-3/5 flex flex-col justify-center gap-6">
                <IconCard icon="account_tree" title="Principio de herencia" variant="info">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:pl-4">
                        {['Definir una vez', 'Reutilizar', 'Especializar'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <i className="material-icons text-accent-700 dark:text-accent-400 text-[20px]">radio_button_checked</i>
                                <p className="text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </IconCard>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <IconCard icon="settings" title="Frontmatter base" variant="outlined-info">
                        <p className="text-lg leading-snug">Metadatos globales en <span className="font-mono text-lg text-accent-700 dark:text-accent-400">myst.yml</span></p>
                        <div className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                            {['Proyecto', 'Autores', 'Keywords', 'Licencia'].map(i => (
                                <p key={i} className="flex items-center gap-2">
                                    <span className="text-accent-700 dark:text-accent-300">•</span> {i}
                                </p>
                            ))}
                        </div>
                    </IconCard>

                    <IconCard icon="check_circle" title="Beneficios" variant="outlined-info">
                        <div className="space-y-2">
                            {['Coherencia institucional', 'Gestión centralizada', 'Reutilización del curso'].map((item, i) => (
                                <p key={i} className="text-lg flex items-start gap-2">
                                    <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                                </p>
                            ))}
                        </div>
                    </IconCard>
                </div>

                <div>
                    <IconCard icon="tune" title="Especialización controlada" variant="clean" className="!p-0">
                        <div className="pl-4 lg:pl-12 space-y-2">
                            {['Sobrescritura sin contradicción', 'Regla fundamental: no contradecir significado heredado'].map((item, i) => (
                                <p key={i} className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 flex items-start gap-2">
                                    <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                                </p>
                            ))}
                        </div>
                    </IconCard>
                </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center gap-5">
                <IconCard icon="task_alt" title="Buenas prácticas" variant="info">
                    <div className="space-y-3">
                        {['Definir globales en myst.yml', 'Frontmatter mínimo y claro', 'Documentar herencia'].map((item, i) => (
                            <p key={i} className="text-lg flex items-start gap-2">
                                <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                            </p>
                        ))}
                    </div>
                </IconCard>
            </div>
        </div>
    </SlideLayout>
);

// Slide 6: Sesión 5
const Sesion5 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 5" subtitle="Estructura pedagógica con myst.yml" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-10 gap-8 lg:gap-10">
            <div className="w-full lg:w-3/5 flex flex-col justify-center gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {[
                        { icon: 'code', title: 'Rol técnico', items: ['Archivos a construir', 'Orden navegación', 'Jerarquías'] },
                        { icon: 'school', title: 'Rol pedagógico', items: ['Diseño curricular', 'Progresión', 'Decisiones didácticas'] }
                    ].map((card, i) => (
                        <IconCard key={i} icon={card.icon} title={card.title} variant="info">
                            <div className="space-y-2 text-lg">
                                {card.items.map(item => (
                                    <p key={item} className="flex items-start gap-2">
                                        <span className="text-accent-700 dark:text-accent-300">•</span> {item}
                                    </p>
                                ))}
                            </div>
                        </IconCard>
                    ))}
                </div>

                <div>
                    <IconCard icon="account_tree" title="Estructura jerárquica" variant="clean" className="!p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pl-4 lg:pl-12">
                            {[
                                { icon: 'folder', title: 'Parts', text: 'Grupos con title + children' },
                                { icon: 'description', title: 'Chapters', text: 'Archivos con file' },
                                { icon: 'view_module', title: 'Sections', text: 'Subtítulos internos' }
                            ].map((item, i) => (
                                <IconCard key={i} icon={item.icon} title={item.title} variant="outlined-clean">
                                    <p className="text-base text-gray-600 dark:text-gray-300 leading-tight">{item.text}</p>
                                </IconCard>
                            ))}
                        </div>
                    </IconCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {[
                        { icon: 'auto_stories', title: 'Jerarquía como narrativa', items: ['Orden cuenta historia', 'Progresión de dificultad', 'Síntesis y evaluación'] },
                        { icon: 'verified', title: 'Evaluación', items: ['Productos parciales', 'Evaluación acumulativa', 'Retroalimentación formativa'] }
                    ].map((card, i) => (
                        <IconCard key={i} icon={card.icon} title={card.title} variant="outlined-warning">
                            <div className="space-y-2 text-lg">
                                {card.items.map(item => (
                                    <p key={item} className="flex items-start gap-2">
                                        <span className="text-accent-700 dark:text-accent-300">•</span> {item}
                                    </p>
                                ))}
                            </div>
                        </IconCard>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center gap-5">
                <IconCard icon="palette" title="Configuración site" variant="info">
                    <div className="space-y-3">
                        {['Título y logo', 'Template visual', 'Acciones (descargas, enlaces)'].map((item, i) => (
                            <p key={i} className="text-lg flex items-start gap-2">
                                <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                            </p>
                        ))}
                    </div>
                </IconCard>
            </div>
        </div>
    </SlideLayout>
);

// Slide 7: Sesión 6
const Sesion6 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 6" subtitle="Proyecto integrador" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-8 gap-8 lg:gap-8">
            <div className="w-full lg:w-3/5 flex flex-col justify-center gap-5">
                <IconCard icon="flag" title="Objetivo general" variant="info">
                    <p className="text-lg mt-2 pl-4 lg:pl-12">Diseñar la arquitectura documental de un mini-curso o módulo académico</p>
                </IconCard>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {[
                        { icon: 'folder_open', title: 'Alcance', items: ['myst.yml completo', 'Mínimo 3 documentos', 'Frontmatter completo'] },
                        { icon: 'rule', title: 'Criterios', items: ['Semántica documental', 'Coherencia pedagógica', 'Configuración global'] },
                        { icon: 'fact_check', title: 'Validación', items: ['Auditoría estructural', 'Auditoría semántica', 'Racionalidad'] }
                    ].map((card, i) => (
                        <IconCard key={i} icon={card.icon} title={card.title} variant="outlined-info">
                            <div className="space-y-1 text-base">
                                {card.items.map(item => (
                                    <p key={item} className="flex items-start gap-2">
                                        <span className="text-accent-700 dark:text-accent-300">•</span> {item}
                                    </p>
                                ))}
                            </div>
                        </IconCard>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <IconCard icon="assignment" title="Entregables" variant="outlined-warning">
                        <div className="space-y-2 text-lg">
                            {['Carpeta del proyecto', 'Documento de diseño (racional)'].map((item, i) => (
                                <p key={i} className="flex items-start gap-2">
                                    <span className="text-accent-700 dark:text-accent-400">•</span> {item}
                                </p>
                            ))}
                        </div>
                    </IconCard>

                    <IconCard icon="grading" title="Rúbrica" variant="outlined-warning">
                        <div className="space-y-2">
                            {[
                                { l: 'Integridad estructural', v: '40%' },
                                { l: 'Diseño semántico', v: '40%' },
                                { l: 'Racionalidad', v: '20%' }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <span className="text-base text-gray-700 dark:text-gray-200">{row.l}</span>
                                    <span className="font-bold text-lg text-accent-700 dark:text-accent-400">{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </IconCard>
                </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center gap-5">
                <IconCard icon="tips_and_updates" title="Actividad en sesión" variant="info">
                    <div className="space-y-3 text-lg">
                        {['Intercambio de repositorios entre pares', 'Auditoría cruzada de estructura', 'Realimentación sobre arquitectura'].map((item, i) => (
                            <p key={i} className="flex items-start gap-2">
                                <span className="text-accent-700 dark:text-accent-400">{i + 1}.</span>
                                <span>{item}</span>
                            </p>
                        ))}
                    </div>
                </IconCard>
            </div>
        </div>
    </SlideLayout>
);

// Slide 8: Cierre
const Cierre = () => (
    <SlideLayout>
        <SlideHeader title="Próximos pasos" subtitle="Recurso para continuar tu aprendizaje" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-10 gap-8 lg:gap-10">
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
                <IconCard icon="emoji_objects" title="Lo que aprendimos" variant="info">
                    <div className="space-y-3 text-lg lg:text-xl">
                        {[
                            'Frontmatter para estructuración semántica',
                            'Metadatos académicos de calidad',
                            'Herencia y reutilización de configuración',
                            'Estructura pedagógica con myst.yml',
                            'Proyectos reproducibles y semánticos'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <i className="material-icons text-accent-700 dark:text-accent-400 text-[24px]">check_circle</i>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </IconCard>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
                <IconCard icon="link" title="Recursos" variant="outlined-warning">
                    <div className="space-y-4">
                        {[
                            { icon: 'language', t: 'Sitio web del curso', d: 'glacy.github.io/frontmatter-academico' },
                            { icon: 'code', t: 'Repositorio de código', d: 'github.com/glacy/frontmatter-academico' },
                            { icon: 'menu_book', t: 'Documentación MyST', d: 'mystmd.org/guide' },
                            { icon: 'school', t: 'Jupyter Book', d: 'jupyterbook.org' }
                        ].map((item, i) => {
                            const url = item.d.startsWith('http') ? item.d : `https://${item.d}`;
                            return (
                                <div key={i} className="flex items-start gap-3">
                                    <i className="material-icons text-accent-700 dark:text-accent-400 text-[24px]">{item.icon}</i>
                                    <div>
                                        <p className="font-bold text-base lg:text-lg text-gray-800 dark:text-white">{item.t}</p>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm lg:text-base text-primary-600 dark:text-primary-400 mt-1 hover:underline hover:text-primary-800 dark:hover:text-primary-300 transition-colors block break-all"
                                        >
                                            {item.d}
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </IconCard>
            </div>
        </div>

        <CallToAction
            text="Aplica estos conceptos en tus proyectos académicos y comparte tus experiencias"
        />
    </SlideLayout>
);

const Slides = ({ currentSlide }) => {
    const slides = [
        <Portada />,
        <Sesion1 />,
        <Sesion2 />,
        <Sesion3 />,
        <Sesion4 />,
        <Sesion5 />,
        <Sesion6 />,
        <Cierre />
    ];

    return (
        <div className="w-full min-h-screen lg:min-h-full relative bg-white dark:bg-slate-900 transition-colors duration-300">
            {slides.map((slide, index) => (
                <SlideWrapper key={index} isActive={currentSlide === index}>
                    {slide}
                </SlideWrapper>
            ))}
        </div>
    );
};

export default Slides;
export const slidesCount = 8;
