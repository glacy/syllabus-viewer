export function generatePalette(baseHex) {
    const palette = {};
    const mix = (c1, c2, w) => {
        const parse = (c) => parseInt(c.slice(1), 16);
        const r1 = (parse(c1) >> 16) & 255;
        const g1 = (parse(c1) >> 8) & 255;
        const b1 = parse(c1) & 255;
        const r2 = (parse(c2) >> 16) & 255;
        const g2 = (parse(c2) >> 8) & 255;
        const b2 = parse(c2) & 255;
        const r = Math.round(r1 + (r2 - r1) * w);
        const g = Math.round(g1 + (g2 - g1) * w);
        const b = Math.round(b1 + (b2 - b1) * w);
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
    };

    return {
        50: mix(baseHex, '#ffffff', 0.95),
        100: mix(baseHex, '#ffffff', 0.9),
        200: mix(baseHex, '#ffffff', 0.75),
        300: mix(baseHex, '#ffffff', 0.6),
        400: mix(baseHex, '#ffffff', 0.3),
        500: baseHex,
        600: mix(baseHex, '#000000', 0.1),
        700: mix(baseHex, '#000000', 0.3),
        800: mix(baseHex, '#000000', 0.5),
        900: mix(baseHex, '#000000', 0.7),
        950: mix(baseHex, '#000000', 0.85),
    };
}

// Calculate relative luminance for WCAG contrast
function getLuminance(r, g, b) {
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getContrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    const lum = getLuminance(r, g, b);

    // WCAG recommends 4.5:1 for normal text.
    // L_white = 1, L_black = 0.
    // Contrast with white: (1 + 0.05) / (lum + 0.05)
    // Contrast with black: (lum + 0.05) / (0 + 0.05)

    const contrastWhite = 1.05 / (lum + 0.05);
    const contrastBlack = (lum + 0.05) / 0.05;

    // Prefer white text if contrast is sufficient (>4.5), otherwise black
    // If both fail, pick the one with higher ratio (usually black for mid-tones unless very dark)
    // However, for "on-primary" elements (buttons), white is usually preferred aesthetic if >3:1 (large text) or >4.5:1

    return (contrastWhite >= 4.5) ? '#ffffff' : '#0f172a';
}

export function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r} ${g} ${b}`; // Returns "R G B" format for Tailwind opacity support
}

export function applyTheme(primaryHex, accentHex) {
    const root = document.documentElement;

    const primaryPalette = generatePalette(primaryHex);
    const accentPalette = generatePalette(accentHex);

    const setPalette = (name, palette) => {
        Object.entries(palette).forEach(([shade, hex]) => {
            // Set Hex variable
            root.style.setProperty(`--color-${name}-${shade}`, hex);
            // Set RGB variable for opacity support (optional)
            root.style.setProperty(`--color-${name}-${shade}-rgb`, hexToRgb(hex));
        });
    };

    setPalette('primary', primaryPalette);
    setPalette('accent', accentPalette);

    // Set Contrast Colors
    root.style.setProperty('--color-on-primary', getContrastColor(primaryPalette[700]));
    root.style.setProperty('--color-on-accent', getContrastColor(accentPalette[700]));
}
