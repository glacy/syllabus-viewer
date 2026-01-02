import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';
import IconCard from '../common/IconCard';

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

export default Sesion4;
