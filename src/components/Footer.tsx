import { type ReactElement } from 'react';
import { Copyright } from 'lucide-react';
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
     * Defaults to "Instituto Tecnológico de Costa Rica".
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
export function Footer({ text = "Instituto Tecnológico de Costa Rica" }: FooterProps): ReactElement {
    return (
        <footer className="flex items-center justify-center gap-2 text-sm text-slate-400 pt-12 pb-6">
            <Copyright className="w-4 h-4" />
            <span>{new Date().getFullYear()} {text}</span>
        </footer>
    );
}
