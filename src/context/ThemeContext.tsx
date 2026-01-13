import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

/**
 * Context that holds the current theme state (light/dark) and a toggle function.
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Provider component that wraps the app and manages the theme class on the document element.
 * It persists the theme preference in localStorage and respects system preference.
 * 
 * @param children - Child components
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    const value = {
        isDark,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

/**
 * Hook to access the theme context.
 * 
 * @returns An object containing `isDark` boolean and `toggleTheme` function.
 * @throws Error if used outside of a ThemeProvider
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
