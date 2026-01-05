


import SlideWrapper from './common/SlideWrapper';

import Portada from './slides/Portada';
import Sesion1 from './slides/Sesion1';
import Sesion2 from './slides/Sesion2';
import Sesion3 from './slides/Sesion3';
import Sesion4 from './slides/Sesion4';
import Sesion5 from './slides/Sesion5';
import Sesion6 from './slides/Sesion6';
import Cierre from './slides/Cierre';

interface SlidesProps {
    currentSlide: number;
}

const Slides: React.FC<SlidesProps> = ({ currentSlide }) => {
    const slides = [
        <Portada
            title="Diseño semántico de documentos académicos"
            subtitle="Curso sobre frontmatter, metadatos y publicación reproducible"
            author="Gerardo Lacy Mora"
            email="gerardolacymora@gmail.com"
            sessionInfo="6 sesiones • 9 horas"
            techStack="YAML • MyST • Jupyter Book"
        />,
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
