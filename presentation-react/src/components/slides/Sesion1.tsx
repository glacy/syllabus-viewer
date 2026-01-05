import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';
import IconCard from '../common/IconCard';


// Slide 2: Sesión 1
const Sesion1 = () => (
    <SlideLayout>
        <SlideHeader title="Sesión 1" subtitle="Introducción al frontmatter" />

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
                                <i className="material-icons mt-1 text-accent-700 dark:text-accent-400" aria-hidden="true">check_circle</i>
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
                <div className="grid grid-cols-2 gap-6">
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

export default Sesion1;
