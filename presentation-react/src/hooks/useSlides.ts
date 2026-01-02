import { useState, useEffect } from 'react';
import { slidesCount } from '../components/Slides';

export function useSlides() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        if (currentSlide < slidesCount - 1) {
            setCurrentSlide(prev => prev + 1);
            if (window.innerWidth < 1024) window.scrollTo(0, 0); // Scroll al inicio en móvil
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
            if (window.innerWidth < 1024) window.scrollTo(0, 0);
        }
    };

    // Teclado
    useEffect(() => {
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            // Solo habilitar teclado si no hay scroll activo que pueda interferir, o mejor dejar simple
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    return {
        currentSlide,
        nextSlide,
        prevSlide,
        slidesCount
    };
}
