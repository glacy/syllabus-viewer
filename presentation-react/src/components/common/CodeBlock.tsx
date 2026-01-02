import { ReactNode, useState } from 'react';

interface CodeBlockProps {
    children?: ReactNode;
    className?: string;
    textColor?: string;
}

/**
 * CodeBlock component that displays code snippets with syntax highlighting styles.
 * Includes a built-in "Copy to Clipboard" button that appears on hover.
 */
const CodeBlock: React.FC<CodeBlockProps> = ({
    children,
    className = "",
    textColor // Optional override, otherwise handled by classes
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!children) return;
        try {
            await navigator.clipboard.writeText(String(children));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className={`relative group bg-gray-900 dark:bg-slate-100 rounded-lg p-4 lg:p-6 font-mono text-xs lg:text-sm overflow-hidden transition-colors duration-300 ${className}`}>
            <div className="absolute top-2 right-2">
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md bg-white/10 dark:bg-slate-300/50 hover:bg-white/20 dark:hover:bg-slate-300 transition-colors text-white dark:text-slate-800 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    title="Copy code"
                    aria-label="Copy code to clipboard"
                >
                    <i className="material-icons text-base">
                        {copied ? 'check' : 'content_copy'}
                    </i>
                </button>
            </div>
            <div className="overflow-x-auto">
                <pre className="text-slate-200 dark:text-gray-900" style={textColor ? { color: textColor } : {}}>
                    {children}
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
