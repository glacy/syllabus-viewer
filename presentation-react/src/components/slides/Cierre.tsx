import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';
import IconCard from '../common/IconCard';
import CallToAction from '../common/CallToAction';

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

export default Cierre;
