import React, { useState, useEffect, useLayoutEffect } from 'react';
import Slides, { slidesCount } from './components/Slides';
import { applyTheme } from './utils/colors';
const PRESET_COLORS = [
  { name: 'Blue', value: '#0ea5e9' },   // Sky 500
  { name: 'Purple', value: '#8b5cf6' }, // Violet 500
  { name: 'Pink', value: '#ec4899' },   // Pink 500
  { name: 'Red', value: '#ef4444' },    // Red 500
  { name: 'Orange', value: '#f97316' }, // Orange 500
  { name: 'Green', value: '#22c55e' },  // Green 500
  { name: 'Teal', value: '#14b8a6' },   // Teal 500
];


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Default colors
  const [primaryColor, setPrimaryColor] = useState(() => localStorage.getItem('primaryColor') || '#0ea5e9');
  const [accentColor, setAccentColor] = useState(() => localStorage.getItem('accentColor') || '#f97316');
  const [showPalette, setShowPalette] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [isMobile, setIsMobile] = useState(false);

  // Apply Theme Colors
  useLayoutEffect(() => {
    applyTheme(primaryColor, accentColor);
    localStorage.setItem('primaryColor', primaryColor);
    localStorage.setItem('accentColor', accentColor);
  }, [primaryColor, accentColor]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autofocus selection when palette opens
  useEffect(() => {
    if (showPalette) {
      // Small timeout to allow DOM node to mount
      setTimeout(() => {
        const activeBtn = document.querySelector(`button[data-color="${primaryColor}"]`);
        activeBtn?.focus();
      }, 0);
    }
  }, [showPalette]);

  // Dark Mode Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Navegación
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
    const handleKeyDown = (e) => {
      // Solo habilitar teclado si no hay scroll activo que pueda interferir, o mejor dejar simple
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const handlePaletteKeyDown = (e) => {
    const buttons = Array.from(e.currentTarget.parentElement.querySelectorAll('button'));
    const index = buttons.indexOf(e.target);
    if (index === -1) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { // Support Grid-like navigation
      e.preventDefault();
      const next = buttons[index + 1] || buttons[0];
      next.focus();
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = buttons[index - 1] || buttons[buttons.length - 1];
      prev.focus();
    }
  };

  return (
    <div className="w-full h-screen bg-slate-200 dark:bg-slate-950 transition-colors duration-300 flex flex-col items-center overflow-hidden">
      {/* Contenedor Principal */}
      <div className="w-full max-w-7xl h-full flex flex-col gap-5 p-5">
        {/* Contenedor de Diapositivas con Scroll Interno */}
        <div className="w-full relative rounded-xl shadow-2xl flex-1 flex flex-col bg-white dark:bg-slate-900 z-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <Slides currentSlide={currentSlide} />
        </div>

        {/* Controles de Navegación (Estático) */}
        <div className="flex items-center justify-between w-full px-5 pb-2">
          <div className="w-full flex justify-between items-center pointer-events-auto">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Diapositiva anterior"
              className={`px-6 py-3 rounded-full font-bold text-on-primary transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 dark:focus:ring-primary-500
                ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'bg-primary-700 hover:scale-105 dark:bg-primary-600'}`}
            >
              <div className="flex items-center gap-2" aria-hidden="true">
                <i className="material-icons">arrow_back</i>
                <span className="hidden lg:inline">Anterior</span>
              </div>
            </button>

            <div
              className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-2 rounded-full shadow-lg border border-white/20"
              role="status"
              aria-live="polite"
            >
              <div className="relative flex items-center gap-2 border-r border-gray-300 dark:border-gray-600 pr-3 mr-1">
                <button
                  onClick={() => setShowPalette(!showPalette)}
                  className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors"
                  title="Cambiar Color de Tema"
                  aria-label="Abrir paleta de colores"
                  aria-expanded={showPalette}
                >
                  <i className="material-icons text-2xl">palette</i>
                </button>

                {showPalette && (
                  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col gap-2 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 animate-fade-in z-50 min-w-[50px] items-center">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Tema</span>
                    {PRESET_COLORS.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => {
                          setPrimaryColor(color.value);
                          setAccentColor(color.value); // Sync accent with primary for monochromatic theme
                          setShowPalette(false);
                        }}
                        onKeyDown={handlePaletteKeyDown}
                        // Roving Tabindex: Only the selected color is focusable via Tab
                        tabIndex={primaryColor === color.value ? 0 : -1}
                        data-color={color.value}
                        className={`w-8 h-8 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 dark:focus:ring-gray-300 ring-2 ring-offset-2 dark:ring-offset-slate-800 ${primaryColor === color.value ? 'ring-gray-400 dark:ring-white scale-110' : 'ring-transparent'
                          }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                        aria-label={`Seleccionar color ${color.name}`}
                      />
                    ))}
                  </div>

                )}
              </div>

              <span className="text-gray-700 dark:text-gray-300 font-semibold px-2">
                {currentSlide + 1} / {slidesCount}
              </span>

              <button
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-yellow-600 dark:text-yellow-300 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 flex items-center justify-center"
              >
                <i className="material-icons" aria-hidden="true">{isDark ? 'light_mode' : 'dark_mode'}</i>
              </button>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slidesCount - 1}
              aria-label="Siguiente diapositiva"
              className={`px-6 py-3 rounded-full font-bold text-on-primary transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 dark:focus:ring-primary-500
                ${currentSlide === slidesCount - 1 ? 'opacity-0 pointer-events-none' : 'bg-primary-700 hover:scale-105 dark:bg-primary-600'}`}
            >
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="hidden lg:inline">Siguiente</span>
                <i className="material-icons">arrow_forward</i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
