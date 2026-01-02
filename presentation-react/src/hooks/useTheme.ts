import { useState, useLayoutEffect, useEffect } from 'react';
import { applyTheme } from '../utils/colors';

export interface ColorPreset {
    name: string;
    value: string;
}

export const PRESET_COLORS: ColorPreset[] = [
    { name: 'Blue', value: '#0ea5e9' },   // Sky 500
    { name: 'Purple', value: '#8b5cf6' }, // Violet 500
    { name: 'Pink', value: '#ec4899' },   // Pink 500
    { name: 'Red', value: '#ef4444' },    // Red 500
    { name: 'Orange', value: '#f97316' }, // Orange 500
    { name: 'Green', value: '#22c55e' },  // Green 500
    { name: 'Teal', value: '#14b8a6' },   // Teal 500
];

export function useTheme() {
    const [primaryColor, setPrimaryColor] = useState<string>(() => localStorage.getItem('primaryColor') || '#0ea5e9');
    const [accentColor, setAccentColor] = useState<string>(() => localStorage.getItem('accentColor') || '#f97316');
    const [showPalette, setShowPalette] = useState<boolean>(false);

    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    // Apply Theme Colors
    useLayoutEffect(() => {
        applyTheme(primaryColor, accentColor);
        localStorage.setItem('primaryColor', primaryColor);
        localStorage.setItem('accentColor', accentColor);
    }, [primaryColor, accentColor]);

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

    // Autofocus selection when palette opens
    useEffect(() => {
        if (showPalette) {
            // Small timeout to allow DOM node to mount
            setTimeout(() => {
                const activeBtn = document.querySelector(`button[data-color="${primaryColor}"]`) as HTMLButtonElement | null;
                activeBtn?.focus();
            }, 0);
        }
    }, [showPalette, primaryColor]);

    return {
        primaryColor,
        setPrimaryColor,
        accentColor,
        setAccentColor,
        showPalette,
        setShowPalette,
        isDark,
        setIsDark,
        PRESET_COLORS
    };
}
