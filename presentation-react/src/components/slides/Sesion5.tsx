import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';
import IconCard from '../common/IconCard';

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

export default Sesion5;
