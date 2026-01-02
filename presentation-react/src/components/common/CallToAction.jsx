import React from 'react';

const CallToAction = ({
    icon = "rocket_launch",
    text,
    className = ""
}) => {
    return (
        <div className={`h-auto lg:h-[100px] flex items-center justify-center px-6 lg:px-16 py-6 lg:py-0 bg-gradient-to-br from-primary-800 to-primary-900 dark:from-sky-900 dark:to-slate-900 ${className}`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
                <i className="material-icons text-white text-4xl lg:text-[36px]">{icon}</i>
                <p className="text-xl lg:text-2xl text-white font-semibold">{text}</p>
            </div>
        </div>
    );
};

export default CallToAction;
