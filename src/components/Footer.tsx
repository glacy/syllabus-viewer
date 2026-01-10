import { type ReactElement } from 'react';
import { Copyright, Github } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';

interface FooterProps {
    text: string;
}

export const Footer = ({ text }: FooterProps): ReactElement => {
    const { isEditing, updateMetadata } = useEditMode();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center gap-2 text-sm text-slate-400 pt-12 pb-6">
            <div className="flex items-center gap-2">
                <Copyright className="w-4 h-4" />
                <span>{currentYear}</span>
                {isEditing ? (
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => updateMetadata('university', e.target.value)}
                        className="bg-transparent border-b border-indigo-300 dark:border-indigo-700 focus:outline-none focus:border-indigo-500 w-auto min-w-[200px]"
                        aria-label="University or Copyright"
                    />
                ) : (
                    <span>{text}</span>
                )}
            </div>
            <a
                href="https://github.com/glacy/syllabus-viewer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-slate-600 transition-colors"
                aria-label="View source on GitHub"
            >
                <Github className="w-5 h-5" />
            </a>
        </footer>
    );
};
