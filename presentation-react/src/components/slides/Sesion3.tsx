import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';
import IconCard from '../common/IconCard';

// Slide 4: Sesión 3
const Sesion3 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 3" subtitle="Diseño semántico de metadatos" />

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

export default Sesion3;
