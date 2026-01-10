import { type ReactElement } from 'react';
import { Copyright, Github } from 'lucide-react';
/**
 * Footer component displaying copyright information.
 *
 * @component
 * @description
 * Displays a simple footer with the current year and institution name.
 * Centered and styled with a muted color for visual hierarchy.
 *
 * @example
 * return (
 *   <Footer />
 * )
 *
 * @returns {ReactElement} The rendered Footer component.
 */
interface FooterProps {
    /**
     * Text to display in the footer.
     * Defaults to "gerardolacymora".
     */
    text?: string;
}

/**
 * Footer component displaying copyright information.
 *
 * @component
 * @param {FooterProps} props Component props
 * @returns {ReactElement} The rendered Footer component.
 */
export function Footer({ text = "gerardolacymora" }: FooterProps): ReactElement {
    return (
        <footer className="flex flex-col items-center justify-center gap-2 text-sm text-slate-400 pt-12 pb-6">
            <div className="flex items-center gap-2">
                <Copyright className="w-4 h-4" />
                <span>{new Date().getFullYear()} {text}</span>
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
}
