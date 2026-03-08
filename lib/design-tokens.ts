/**
 * DESIGN SYSTEM TOKENS
 * Centralized design constants for consistent UI across all pages and sections
 */

export const designTokens = {
    // ═══════════════════════════════════════════════════════════
    // SPACING SYSTEM (8px base grid)
    // ═══════════════════════════════════════════════════════════
    spacing: {
        xs: '8px',      // 0.5rem
        sm: '16px',     // 1rem
        md: '32px',     // 2rem
        lg: '64px',     // 4rem
        xl: '128px',    // 8rem
        '2xl': '192px', // 12rem
    },

    // Page Container Max Width
    container: {
        maxWidth: '1280px',  // Max content width
        paddingX: {
            mobile: '24px',   // 1.5rem
            tablet: '48px',   // 3rem
            desktop: '96px',  // 6rem
        }
    },

    // Section Spacing (vertical rhythm)
    section: {
        paddingTop: '128px',    // 8rem
        paddingBottom: '128px', // 8rem
        gap: '64px',            // 4rem between elements
    },

    // ═══════════════════════════════════════════════════════════
    // TYPOGRAPHY SYSTEM
    // ═══════════════════════════════════════════════════════════
    fonts: {
        heading: "'Bebas Neue', sans-serif",
        mono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
        body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    fontSize: {
        // Display (Hero titles)
        display: {
            mobile: '15vw',
            tablet: '12vw',
            desktop: '10vw',
        },
        // H1 (Page titles)
        h1: {
            mobile: '48px',   // 3rem
            tablet: '64px',   // 4rem
            desktop: '96px',  // 6rem
        },
        // H2 (Section titles)
        h2: {
            mobile: '36px',   // 2.25rem
            tablet: '48px',   // 3rem
            desktop: '64px',  // 4rem
        },
        // H3 (Subsection titles)
        h3: {
            mobile: '24px',   // 1.5rem
            tablet: '28px',   // 1.75rem
            desktop: '32px',  // 2rem
        },
        // Body text
        body: {
            lg: '18px',   // 1.125rem
            md: '16px',   // 1rem
            sm: '14px',   // 0.875rem
        },
        // Monospace/Labels
        mono: {
            lg: '12px',
            md: '10px',
            sm: '9px',
        }
    },

    lineHeight: {
        tight: '0.85',    // Display text
        snug: '1.1',      // Headings
        normal: '1.5',    // Body
        relaxed: '1.7',   // Long-form
    },

    letterSpacing: {
        tight: '-0.02em',   // Display
        normal: '0',         // Body
        wide: '0.1em',       // Mono labels
        wider: '0.2em',      // All-caps mono
        widest: '0.3em',     // Spaced labels
    },

    // ═══════════════════════════════════════════════════════════
    // COLOR SYSTEM
    // ═══════════════════════════════════════════════════════════
    colors: {
        // Primary
        accent: '#4A70A9',
        accentDark: '#283C5A',
        accentGlow: 'rgba(74, 112, 169, 0.2)',

        // Neutrals
        black: '#030303',
        surface: '#0A0A0A',
        surfaceHover: '#111111',
        border: 'rgba(255, 255, 255, 0.1)',
        borderHover: 'rgba(255, 255, 255, 0.2)',

        // Text
        textPrimary: '#FFFFFF',
        textSecondary: '#A1A1A1',
        textMuted: '#4A4A4A',
        textDisabled: '#2A2A2A',

        // Semantic
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
    },

    // ═══════════════════════════════════════════════════════════
    // ANIMATION CURVES
    // ═══════════════════════════════════════════════════════════
    easing: {
        smooth: [0.16, 1, 0.3, 1],      // Smooth entrance
        snappy: [0.4, 0, 0.2, 1],       // Quick response
        bounce: [0.68, -0.55, 0.265, 1.55],
    },

    duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.8,
        emphasis: 1.2,
    },

    // ═══════════════════════════════════════════════════════════
    // NAVBAR
    // ═══════════════════════════════════════════════════════════
    navbar: {
        height: '80px',
        paddingY: {
            default: '24px',
            scrolled: '16px',
        }
    }
};

// Tailwind-compatible utility classes
export const tw = {
    // Container
    container: 'max-w-7xl mx-auto px-6 md:px-12 lg:px-24',

    // Section
    section: 'py-32',
    sectionContent: 'max-w-7xl mx-auto',

    // Typography
    displayText: 'font-bebas text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight',
    h1: 'font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9]',
    h2: 'font-bebas text-4xl md:text-5xl lg:text-6xl leading-[0.9]',
    h3: 'font-bebas text-2xl md:text-3xl lg:text-4xl',
    bodyLg: 'text-lg md:text-xl leading-relaxed',
    bodyMd: 'text-base leading-relaxed',
    bodySm: 'text-sm leading-relaxed',
    mono: 'font-mono text-xs tracking-widest',
    monoSm: 'font-mono text-[10px] tracking-[0.3em]',

    // Status/Labels
    statusBadge: 'text-[10px] font-mono tracking-[0.3em] uppercase',

    // Interactive
    hoverGlow: 'hover:bg-white/5 transition-colors duration-200',
    borderSubtle: 'border border-white/10 hover:border-white/20 transition-colors',
};

export default designTokens;
