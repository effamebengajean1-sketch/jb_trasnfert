---
name: JB Transfert Identity
colors:
  surface: '#f9f9ff'
  surface-dim: '#d9d9e1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fa'
  surface-container: '#ededf5'
  surface-container-high: '#e7e8ef'
  surface-container-highest: '#e2e2e9'
  on-surface: '#191c21'
  on-surface-variant: '#424751'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#f0f0f8'
  outline: '#737783'
  outline-variant: '#c2c6d3'
  surface-tint: '#245dad'
  primary: '#003877'
  on-primary: '#ffffff'
  primary-container: '#0b4f9e'
  on-primary-container: '#a6c4ff'
  inverse-primary: '#abc7ff'
  secondary: '#005fac'
  on-secondary: '#ffffff'
  secondary-container: '#5fa6fd'
  on-secondary-container: '#003a6d'
  tertiary: '#323b42'
  on-tertiary: '#ffffff'
  tertiary-container: '#495259'
  on-tertiary-container: '#bcc5cd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#00458f'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004884'
  tertiary-fixed: '#dbe4ec'
  tertiary-fixed-dim: '#bec8d0'
  on-tertiary-fixed: '#141d23'
  on-tertiary-fixed-variant: '#3f484f'
  background: '#f9f9ff'
  on-background: '#191c21'
  surface-variant: '#e2e2e9'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is anchored in a **Corporate Modern** aesthetic, prioritizing professional reliability and functional clarity. It is designed for a file transfer and photo sharing utility where trust and speed are the primary user requirements. 

The visual language utilizes a "High-Trust" approach: a sober, blue-centric palette combined with generous whitespace to eliminate cognitive load. The interface avoids unnecessary decorative flourishes, leaning instead on precision, structural alignment, and clear hierarchies to signal technical competence and data security.

## Colors

The color strategy uses a monochromatic blue foundation to establish a safe, professional environment. 

- **Primary Blue (#0B4F9E):** Reserved for high-intent actions, active navigation states, and essential links. 
- **Secondary Blue (#2D7DD2):** Utilized for interactive states like hovers and supportive iconography to provide visual depth without breaking the professional tone.
- **Surface & Backgrounds:** The layout relies on **White (#FFFFFF)** for the primary canvas to maximize legibility. **Very Light Blue (#EAF3FC)** serves as a subtle organizational tool for sectioning content and resting states of cards.
- **Typography:** Pure black is avoided in favor of **Dark Navy Blue (#0F1B2D)** to maintain a premium, cohesive feel, while **Blue-Grey (#6B7A8F)** handles secondary information and placeholder states.

## Typography

This design system uses a dual-font strategy to balance character with utility. 

**Sora** is the headline face; its geometric structure and wide stance provide a modern, technical feel that suits a file-sharing tool. Use weights 600 and 700 for all headings to ensure a strong visual hierarchy.

**Inter** is used for all body text and interface labels. It provides exceptional legibility at small sizes, particularly critical for file names, metadata, and progress indicators. For long-form text, stick to a 400 weight; use 500 for emphasis within the body and for UI labels.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop and a **Fluid** model for mobile devices. 

- **Desktop:** Use a 12-column grid with a 1200px max-width container. Gutters are fixed at 24px to maintain an airy, professional feel.
- **Mobile:** Transition to a 4-column fluid grid with 16px side margins.
- **Rhythm:** All spacing (padding, margins) must follow a 4px or 8px baseline. Use `xl` (48px) for separating major vertical sections to maintain the "generous whitespace" brand pillar.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

- **Level 0 (Background):** Pure White (#FFFFFF).
- **Level 1 (Sub-sections):** Very Light Blue (#EAF3FC) with no shadow, used for grouping content or the "tray" area of a file uploader.
- **Level 2 (Cards/Interaction):** White surface with a soft, diffused shadow. The shadow should use a navy tint rather than pure grey: `0px 4px 20px rgba(15, 27, 45, 0.08)`.
- **Level 3 (Modals/Popovers):** Deeper shadow for distinct separation: `0px 12px 32px rgba(15, 27, 45, 0.12)`.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding provides a modern touch without appearing overly "bubbly" or informal, maintaining the professional integrity of the tool. 

- Use **0.25rem (4px)** for buttons and input fields.
- Use **0.5rem (8px)** for cards and container units to provide a clear distinction from smaller UI elements.

## Components

- **Primary Button:** Solid #0B4F9E background with white text. On hover, transition to #2D7DD2. Text should be Inter SemiBold (500).
- **Secondary Button:** 1px border in #0B4F9E with transparent background and #0B4F9E text. Hover state should include a very light tint background (#EAF3FC).
- **Cards:** White background, 8px corner radius, and a Level 2 shadow. Use for individual file previews or sharing options.
- **Form Fields:** 1px border in Blue-Grey (#6B7A8F) against a white background. On focus, the border shifts to Primary Blue (#0B4F9E) with a subtle 2px outer glow in the same color at 15% opacity.
- **Transfer Progress Bar:** Track in #EAF3FC with a fill in #0B4F9E. Use a 4px height for a sleek, technical look.
- **File Chips:** Use #EAF3FC background with #0F1B2D text for added tags or file formats, applying a 4px corner radius.