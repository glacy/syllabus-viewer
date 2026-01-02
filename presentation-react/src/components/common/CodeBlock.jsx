import React from 'react';

const CodeBlock = ({
    children,
    className = "",
    textColor // Optional override, otherwise handled by classes
}) => {
    return (
        <div className={`bg-gray-900 dark:bg-slate-100 rounded-lg p-4 lg:p-6 font-mono text-xs lg:text-sm overflow-x-auto transition-colors duration-300 ${className}`}>
            <pre className="text-slate-200 dark:text-gray-900" style={textColor ? { color: textColor } : {}}>
                {children}
            </pre>
        </div>
    );
};

export default CodeBlock;
