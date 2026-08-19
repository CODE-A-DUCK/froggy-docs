---
name: Froggy Dark
colors:
primary: "#1e6ef4"
primary-low: "#04214e"
primary-high: "#a8caff"
background: "#0b0e14"
surface: "#141820"
surface-overlay: "rgba(20, 24, 32, 0.95)"
border-subtle: "rgba(255, 255, 255, 0.1)"
border-faint: "rgba(255, 255, 255, 0.05)"
text-primary: "#ffffff"
text-secondary: "rgba(255, 255, 255, 0.8)"
text-muted: "rgba(255, 255, 255, 0.5)"
button-secondary-bg: "#374151"
button-secondary-hover: "rgba(55, 65, 81, 0.9)"
button-ghost-bg: "rgba(243, 244, 246, 0.1)"
button-ghost-hover: "rgba(243, 244, 246, 0.2)"
typography:
fontFamily:
sans: "'Noto Sans TC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
display:
fontSize: "4.5rem"
fontWeight: "900"
lineHeight: "1.1"
letterSpacing: "-0.05em"
heading-1:
fontSize: "3rem"
fontWeight: "900"
lineHeight: "1.15"
letterSpacing: "-0.03em"
heading-2:
fontSize: "2rem"
fontWeight: "800"
lineHeight: "1.25"
heading-3:
fontSize: "1.5rem"
fontWeight: "700"
lineHeight: "1.35"
body-lg:
fontSize: "1.125rem"
fontWeight: "500"
lineHeight: "1.8"
body:
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.75"
caption:
fontSize: "0.875rem"
fontWeight: "500"
lineHeight: "1.5"
rounded:
sm: "0.25rem"
md: "0.5rem"
lg: "0.75rem"
xl: "1rem"
"2xl": "1.5rem"
full: "9999px"
spacing:
base: "4px"
xs: "0.25rem"
sm: "0.5rem"
md: "1rem"
lg: "1.5rem"
xl: "2rem"
"2xl": "3rem"
"3xl": "5rem"
breakpoints:
sm: "640px"
md: "768px"
lg: "1024px"
xl: "1280px"

---

# Froggy Dark Modernism — Design System Specification

## 1. Brand & Style

The visual identity adopts a **Dark-Mode Modernism** aesthetic influenced by Discord native themes and high-contrast developer tool interfaces.

- **Atmosphere**: Deep space, sleek, high-clarity, and modern.
- **Visual Focus**: High contrast between electric brand blue (`primary`), deep canvas surfaces (`background`, `surface`), and crisp white typography (`text-primary`).
- **Design Philosophy**: Minimizing visual friction through generous whitespace, clear structural hierarchy, bold pill-shaped calls to action, and distinct container elevations.

---

## 2. Colors

The color palette is built on role-based semantic tokens to enforce consistency across pages and prevent styling drift.

### 2.1 Primary & Accent Tokens

- **`primary` (`#1e6ef4`)**: Electric Brand Blue.
  - **Purpose**: Primary calls to action, active navigation states, key highlights, and Starlight documentation accents.
  - **Usage**: Main CTA button background, active Table of Contents indicator line, interactive link hovers, badge accents.
  - **Constraints & Boundaries**: Do NOT use `primary` for broad background panels or body paragraphs. Excessive use causes cognitive fatigue in dark mode.
- **`primary-low` (`#04214e`)**: Deep Blue Shade.
  - **Purpose**: Low-contrast background tint for badges and selected item surfaces.
- **`primary-high` (`#a8caff`)**: Soft Ice Blue.
  - **Purpose**: High-contrast text on dark backgrounds, focus outlines, and subtle glow accents.

### 2.2 Surface & Canvas Tokens

- **`background` (`#0b0e14`)**: Deep Canvas Dark.
  - **Purpose**: Base canvas for all pages, header bar, and documentation sidebar.
  - **Constraints**: Always serves as Level 0 elevation. Never apply bright colors to root viewports.
- **`surface` (`#141820`)**: Elevated Dark Container.
  - **Purpose**: Card backgrounds, feature containers, documentation callout boxes, and dropdown panels (Level 1 elevation).
- **`surface-overlay` (`rgba(20, 24, 32, 0.95)`)**: Blur Overlay Surface.
  - **Purpose**: Mobile navigation overlay with `backdrop-blur-xl`.

### 2.3 Border & Separation Tokens

- **`border-subtle` (`rgba(255, 255, 255, 0.1)`)**: Card and table boundaries.
  - **Purpose**: Defines crisp container edges without harsh contrast against `surface`.
- **`border-faint` (`rgba(255, 255, 255, 0.05)`)**: Hover highlights and internal dividers.

### 2.4 Text & Content Tokens

- **`text-primary` (`#ffffff`)**: 100% white for hero titles, section headings, and active labels.
- **`text-secondary` (`rgba(255, 255, 255, 0.8)`)**: 80% white for body paragraphs, feature descriptions, and subtitle text.
- **`text-muted` (`rgba(255, 255, 255, 0.5)`)**: 50% white for inactive TOC links, timestamps, and secondary captions.

---

## 3. Typography

Typography is powered by **Noto Sans TC** (`typography.fontFamily.sans`) to guarantee native, high-legibility rendering for Traditional Chinese and English alphanumeric text.

### 3.1 Typographic Scale & Hierarchy

- **Display (Hero Titles)**:
  - Token: `typography.display` (`4.5rem` / `72px`, weight `900`, line-height `1.1`, tracking `-0.05em`).
  - Tailwind: `text-3xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight`.
- **Heading 1 (Section Titles)**:
  - Token: `typography.heading-1` (`3rem` / `48px`, weight `900`, line-height `1.15`, tracking `-0.03em`).
  - Tailwind: `text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white`.
- **Heading 2 (Card & Subsection Titles)**:
  - Token: `typography.heading-2` (`2rem` / `32px`, weight `800`, line-height `1.25`).
  - Tailwind: `text-xl sm:text-2xl font-bold text-white`.
- **Body & Paragraphs**:
  - Token: `typography.body-lg` (`1.125rem` / `18px`, weight `500`, line-height `1.8`).
  - Traditional Chinese text requires generous line spacing (`leading-[1.8]` or `leading-relaxed`) to maintain readability across dense glyphs.

---

## 4. Spacing, Shapes & Layout

### 4.1 Corner Radii (`rounded`)

- **`rounded.full` (`9999px`)**: All hero and action buttons (pill shape).
- **`rounded.2xl` (`1.5rem` / `24px`)**: Feature cards, review cards, and major content containers.
- **`rounded.md` / `rounded.lg` (`0.5rem` - `0.75rem`)**: Header buttons, inputs, badge tags, and documentation code blocks.

### 4.2 Spacing & Layout Grid

- **Page Max Widths**:
  - Landing Hero & Feature Grids: `max-w-6xl` (`1152px`) with `px-4 sm:px-6`.
  - Extended Container: `max-w-7xl` (`1280px`).
  - Prose / Reading Container: `max-w-4xl` (`896px`).
- **Responsive Card Grids**:
  - Mobile: `grid-cols-1 gap-6` (`spacing.lg`).
  - Tablet: `md:grid-cols-2 gap-8` (`spacing.xl`).
  - Desktop: `lg:grid-cols-3 gap-8` (`spacing.xl`).

---

## 5. Components & State Specifications

Every component must support explicit visual states to avoid ambiguous AI-generated UI.

### 5.1 Primary Hero Pill Button

- **Geometry**: Height `h-14 sm:h-20`, width `w-full sm:w-60`, corner radius `rounded.full`.
- **Default State**: Background `colors.primary` (`#1e6ef4`), text `colors.text-primary` (`#ffffff`), font weight `900` (`font-black`), font size `text-lg sm:text-2xl`.
- **Hover State**: `opacity: 0.9`, transition `duration-200 ease-in-out`.
- **Active / Press State**: `transform: scale(0.98)`.
- **Focus State**: `outline: 2px solid colors.primary-high` (`#a8caff`), `outline-offset: 2px`.

### 5.2 Secondary Pill Button

- **Geometry**: Height `h-14 sm:h-20`, width `w-full sm:w-60`, corner radius `rounded.full`.
- **Default State**: Background `colors.button-secondary-bg` (`#374151`), text `colors.text-primary` (`#ffffff`), font weight `900`.
- **Hover State**: Background `colors.button-secondary-hover`, `opacity: 0.9`.
- **Focus State**: `outline: 2px solid rgba(255,255,255,0.4)`.

### 5.3 Surface Cards (Features & Reviews)

- **Geometry**: Corner radius `rounded.2xl`, padding `p-6 sm:p-8`.
- **Default State**: Background `colors.surface` (`#141820`), border `1px solid colors.border-subtle` (`rgba(255,255,255,0.1)`).
- **Hover State**: Border `1px solid rgba(255,255,255,0.2)`.
- **Structure**: Centered illustration container (`w-32 h-32 sm:w-48 sm:h-48 mb-6 mx-auto`), followed by bold title and `text-secondary` description.

### 5.4 Table of Contents Dynamic Indicator (`cf-active-indicator`)

- **Element**: Dynamic floating vertical indicator in `src/components/starlight/PageSidebar.astro`.
- **Geometry**: `position: absolute; left: -1px; width: 2px; background: colors.text-primary;`.
- **Transitions**: `transition: transform 0.2s linear, height 0.2s linear, opacity 0.2s linear;`.
- **States**:
  - Inactive / No Heading: `opacity: 0`.
  - Active Section: `opacity: 1`, translateY matches active heading's `offsetTop`.

### 5.5 Mobile Hamburger & Navigation Overlay

- **Toggle Icon**: 3 bars (`w-6 h-0.5 bg-white`), transitions `duration-300` into an 'X' icon when opened.
- **Overlay**: `position: fixed; inset: 0; background: colors.surface-overlay; backdrop-filter: blur(24px);`.
- **Scroll Lock**: `document.body.style.overflow = 'hidden'` when overlay is active.

---

## 6. Rules & Guardrails for AI Agents

1. **Always Reference Semantic Tokens**:
   - Write `bg-brand-blue` or `var(--color-brand-blue)` instead of random hex codes.
   - Use `bg-dark-bg` (`#0b0e14`) and `bg-dark-surface` (`#141820`) for canvas and card layers.
2. **Never Break Dark Mode Elevation**:
   - Never place pure black (`#000000`) or light gray (`#ffffff`) as canvas backgrounds in landing sections.
   - Always maintain Level 0 (`#0b0e14`) -> Level 1 (`#141820`) -> Level 2 (`#1e6ef4` / `#ffffff`) elevation hierarchy.
3. **Preserve Button Geometries**:
   - Main call-to-action buttons on the landing page must always use `rounded-full` pill geometry.
4. **Maintain Contrast Ratios**:
   - Ensure all body text meets WCAG AA contrast against `#0b0e14` and `#141820` by using `rgba(255, 255, 255, 0.8)` or `#ffffff`.
