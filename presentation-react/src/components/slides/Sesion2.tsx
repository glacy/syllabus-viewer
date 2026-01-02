import SlideLayout from '../common/SlideLayout';
import SlideHeader from '../common/SlideHeader';
import IconCard from '../common/IconCard';
import CodeBlock from '../common/CodeBlock';

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

export default Sesion2;
