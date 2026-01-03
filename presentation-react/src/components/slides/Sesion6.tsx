import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';
import IconCard from '../common/IconCard';

// Slide 7: Sesión 6
const Sesion6 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 6" subtitle="Proyecto integrador" />

        <div className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 py-8 lg:py-8 gap-8 lg:gap-8">
            <div className="w-full lg:w-4/6 flex flex-col justify-center gap-5">
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

export default Sesion6;
