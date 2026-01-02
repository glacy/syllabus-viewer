// Slide 1: Portada
const Portada = () => (
    <div className="w-full min-h-screen lg:min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-[#0f172a] dark:bg-black py-10 lg:py-0">
        <div className="absolute inset-0 z-0">
            {/* <img src="https://sfile.chatglm.cn/images-ppt/55dbdc967fda.png" alt="Background" className="w-full h-full object-cover" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-slate-900/85 dark:from-slate-900 dark:via-slate-800 dark:to-black"></div>
        </div>
        <div className="relative z-10 text-center px-6 lg:px-20 flex flex-col items-center justify-center flex-grow">
            <div className="mb-6 lg:mb-8">
                <i className="material-icons text-white text-6xl lg:text-[72px] opacity-90">description</i>
            </div>
            <h1 className="title-font text-4xl lg:text-7xl font-bold text-white leading-tight mb-8 lg:mb-10 max-w-5xl tracking-tight">
                Diseño semántico de documentos académicos
            </h1>
            <div className="w-32 lg:w-64 h-1 mx-auto mb-8 lg:mb-10 bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
            <p className="text-xl lg:text-2xl font-light text-primary-100 tracking-wide leading-relaxed max-w-3xl">
                Curso sobre frontmatter, metadatos y publicación reproducible
            </p>
        </div>
        <div className="relative lg:absolute lg:bottom-10 left-0 right-0 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16 text-primary-200 mt-10 lg:mt-0 pb-10 lg:pb-0 z-10">
            <div className="flex items-center gap-2">
                <i className="material-icons text-2xl">schedule</i>
                <span className="text-lg font-light">6 sesiones • 9 horas</span>
            </div>
            <div className="hidden lg:block w-1 h-8 bg-primary-300/30"></div>
            <div className="flex items-center gap-2">
                <i className="material-icons text-2xl">code</i>
                <span className="text-lg font-light">YAML • MyST • Jupyter Book</span>
            </div>
        </div>
    </div>
);

export default Portada;
